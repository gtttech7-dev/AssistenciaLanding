import fs from 'node:fs';
const s=JSON.parse(fs.readFileSync('site.config.json'));const errors=[];
if(!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}\/?$/i.test(s.domain))errors.push('domain: informe o domínio público HTTPS, sem caminho');
if(!/^55\d{10,11}$/.test(s.whatsapp))errors.push('whatsapp: informe 55 + DDD + número, só dígitos');
for(const key of ['phone','address','mapsUrl','mapsEmbedUrl','googleReviewUrl'])if(!s[key])errors.push(`${key}: preencher com informação real`);
if(!s.hours.length)errors.push('hours: informar horários confirmados');
if(s.reviews.enabled&&s.reviews.demo)errors.push('reviews: substituir por avaliações autorizadas e reais ou desativar a seção');
if(errors.length){console.error('Dados pendentes antes da publicação:\n- '+errors.join('\n- '));process.exitCode=1}else console.log('Dados básicos de publicação configurados. Confirme a exatidão dos dados e execute npm run build.');
