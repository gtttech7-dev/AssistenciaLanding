import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {stripTypeScriptTypes} from 'node:module';
const config=JSON.parse(fs.readFileSync('site.config.json'));
const paths=['','contato','problemas-com-celular',...config.services.map(s=>s.slug)];
const titles=new Set(),descriptions=new Set();
for(const path of paths){
 const html=fs.readFileSync(`dist/${path?path+'/':''}index.html`,'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${path}: um H1`);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert(title&&!titles.has(title));titles.add(title);
 const desc=html.match(/name="description" content="([^"]+)"/)?.[1];assert(desc&&!descriptions.has(desc));descriptions.add(desc);
 assert(html.includes('lang="pt-BR"'));assert(html.includes(config.indexable?'index,follow':'noindex,follow'));
 for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs))JSON.parse(match[1]);
 for(const match of html.matchAll(/(?:href|src)="(\/(?!\/)[^"#?]*)(?:[?#][^"]*)?"/g)){
  const target=match[1];assert(fs.existsSync(`dist${target}`),`${path}: referência quebrada ${target}`);
 }
 if(config.domain){assert(html.includes('rel="canonical"'));assert(html.includes(config.domain));}
}
for(let i=1;i<=config.animation.count;i++)assert(fs.existsSync(`public${config.animation.directory}/${config.animation.prefix}${String(i).padStart(4,'0')}.${config.animation.extension}`));
assert(fs.existsSync('dist/robots.txt'));assert(fs.existsSync('dist/sitemap.xml'));
console.log(`SEO/arquivos: ${paths.length} páginas, H1 único, títulos e descrições únicos, JSON-LD válido, links internos e ${config.animation.count} frames OK.`);
// Executa o mesmo script da animação com relógio controlado para testar os estados.
const component=fs.readFileSync('src/components/Animation.astro','utf8');
const source=stripTypeScriptTypes(component.split('<script>')[1].split('</script>')[0]);
async function animation(reduced=false){
 let now=0,id=0;const raf=new Map(),timers=new Map();
 const display={src:'poster',dataset:{},alt:''},scene={dataset:{animation:JSON.stringify(config.animation)},querySelector:()=>display};
 const motion={matches:reduced,addEventListener(){}};
 const doc={hidden:false,querySelector:()=>scene,addEventListener(){}};
 const context={document:doc,matchMedia:()=>motion,performance:{now:()=>now},Image:class{set src(v){this._src=v;queueMicrotask(()=>this.onload())}get src(){return this._src}},requestAnimationFrame:cb=>{raf.set(++id,cb);return id},cancelAnimationFrame:n=>raf.delete(n),clearTimeout:n=>timers.delete(n),IntersectionObserver:class{constructor(cb){this.cb=cb}observe(){this.cb([{isIntersecting:true}])}}};context.window={setTimeout:(cb,delay)=>{timers.set(++id,{cb,at:now+delay});return id}};
 vm.runInNewContext(source,context);await new Promise(r=>setImmediate(r));
 const step=time=>{now=time;for(const [key,task]of [...timers])if(task.at<=now){timers.delete(key);task.cb()}for(const [key,cb]of [...raf]){raf.delete(key);cb(now)}};
 if(reduced){assert.equal(display.src,'poster');assert.equal(raf.size,0);return;}
 step(0);assert.equal(display.dataset.frame,'1');step(1500);assert.equal(display.dataset.frame,'37');step(3000);assert.equal(display.dataset.frame,'72');step(config.animation.intervalMs-1);assert.equal(display.dataset.frame,'72');step(config.animation.intervalMs);assert.equal(display.dataset.frame,'1');step(config.animation.intervalMs+config.animation.durationMs);assert.equal(display.dataset.frame,'72');
}
await animation();await animation(true);
console.log('Animação: frame inicial, progresso, final em 3 s, pausa, reinício em 30 s e movimento reduzido OK.');
