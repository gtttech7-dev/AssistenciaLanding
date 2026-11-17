import config from '../../site.config.json';
export const site = config;
export const fill=(text:string)=>text.replace(/\{(name|city|state)\}/g,(_,key)=>site[key as 'name'|'city'|'state']);
export const whatsapp=(service='')=>site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(site.whatsappMessage+(service?' Serviço: '+service:''))}` : '/contato/#atendimento';
export const absolute=(path:string)=>site.domain ? new URL(path,site.domain).href : null;
