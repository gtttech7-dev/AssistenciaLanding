import { defineConfig } from 'astro/config';
import site from './site.config.json' with { type: 'json' };
export default defineConfig({site:site.domain || undefined,output:'static',trailingSlash:'always'});
