# GT Tech — assistência técnica em Piracanjuba

Projeto Astro + TypeScript + CSS, com páginas HTML estáticas, sem banco de dados, backend, bibliotecas de interface ou formulário. O ZIP contém o código-fonte e os 72 frames originais do projeto. Para gerar a pasta `dist`, execute `npm ci` e `npm run build` (a saída compilada não é enviada, para evitar arquivos desatualizados).

## 1. Rodar no computador

1. Instale Node.js 24 LTS (o teste automatizado usa uma API presente nessa versão).
2. Extraia o ZIP e abra a pasta `gt-tech` no VS Code.
3. Abra Terminal → Novo terminal, dentro da pasta que contém `package.json`.
4. Execute `npm ci`.
5. Execute `npm run dev`.
6. Abra o endereço exibido no terminal. Para encerrar, pressione Ctrl+C.

Para gerar a versão final: `npm run build`. Para servir essa versão: `npm run preview`. Não abra o HTML pelo protocolo `file://`; use um servidor local ou hospedagem.

## 2. O que falta informar antes de publicar

Telefone, WhatsApp, endereço, horários, domínio e links do Google não foram fornecidos. Esses dados estão vazios em `site.config.json`, sem números, endereço ou avaliações comerciais inventadas. Enquanto o WhatsApp estiver vazio, os CTAs direcionam para a seção de contato, que informa a ausência do telefone.

Execute `npm run check:production` para listar as pendências. Esse comando é separado do build para permitir testar o layout antes de preencher os dados. A validação falha intencionalmente enquanto houver pendências. Não publique como versão comercial final sem configurar os contatos.

A indexação está ATIVADA por padrão. Sem domínio, canonical é omitido e sitemap fica sem URLs: isso evita declarar um endereço falso. Depois de preencher `domain` e reconstruir o projeto, canonical, Open Graph e sitemap usam automaticamente o domínio informado.

## 3. Arquivo central

Edite `site.config.json`. Mantenha aspas duplas, vírgulas entre itens e nenhuma vírgula após o último item. Não coloque comentários no JSON. Salve e gere um novo build após alterar qualquer configuração.

| Campo | O que altera |
| --- | --- |
| `name` | Nome comercial |
| `city`, `state` | Cidade e UF |
| `domain` | URL HTTPS pública, como `https://seu-dominio.com.br` |
| `phone` | Telefone legível, com DDD |
| `whatsapp` | Número só com dígitos: 55 + DDD + número |
| `whatsappMessage` | Mensagem inicial; o serviço é acrescentado quando necessário |
| `address`, `postalCode` | Endereço completo e CEP |
| `mapsUrl` | Link público para abrir a localização no Maps |
| `mapsEmbedUrl` | URL `src` do iframe do Google Maps |
| `googleReviewUrl` | Link oficial para avaliar a empresa |
| `hours` | Lista de horários |
| `socials` | Lista de redes sociais |
| `hero` | Título, descrição e texto do CTA principal |
| `services` | Serviços, URLs, descrições, textos e SEO das páginas |
| `reviews` | Avaliações, visibilidade e identificação como exemplos |
| `stats` | Números reais de credibilidade |
| `faqs` | Perguntas e respostas; atualiza também o schema FAQ |
| `seo` | Titles e descriptions da home e contato |
| `indexable` | Controle de indexação |
| `animation` | Frames, duração e intervalo |

## 4. Trocar marca e cidade

1. Troque `name`, `city` e `state`.
2. Atualize os textos livres em `seo`, `hero`, `whatsappMessage` e no conteúdo dos serviços quando contiverem o nome antigo.
3. Nos campos SEO de serviços, `{name}`, `{city}` e `{state}` são substituídos automaticamente.
4. Atualize `public/og.jpg` (imagem de compartilhamento) e `public/favicon.svg` (ícone).
5. Para uma nova marca, ajuste também os textos editoriais da home e o título da página 404, em `src/pages`. O layout e a configuração são reutilizáveis; não há um painel administrativo.
6. Para mudar as cores, edite as variáveis no início de `src/styles/global.css`.

## 5. Telefone e WhatsApp

1. Coloque o número com 55 e DDD em `whatsapp`, sem espaços ou símbolos.
2. Coloque a versão formatada em `phone`.
3. Edite `whatsappMessage`.
4. Rode `npm run build` e teste os CTAs no computador e no celular.
5. Confirme que a conversa abre com o destinatário correto. Nenhuma mensagem é enviada automaticamente.

## 6. Endereço, mapa, Google e horários

1. Edite `address` e `postalCode` com dados reais.
2. No Google Maps, abra o estabelecimento correto e copie o link em Compartilhar para `mapsUrl`.
3. Em Compartilhar → Incorporar um mapa, copie apenas o conteúdo de `src="..."` para `mapsEmbedUrl`; não cole a tag iframe inteira.
4. No Perfil da Empresa no Google, copie o link para solicitar avaliações e coloque em `googleReviewUrl`.
5. Os botões do Maps e de avaliação só aparecem quando seus links existem. O mapa só é carregado quando `mapsEmbedUrl` está preenchido. Não colocamos um mapa da cidade como se fosse a localização da loja.
6. Configure `hours`, por exemplo: `[{"label":"Segunda a sexta","time":"08h às 18h"}]`. Esse horário é apenas exemplo: use os horários confirmados da empresa.
7. Configure redes sociais como `[{"name":"Instagram","url":"https://www.instagram.com/SEU_PERFIL/"}]`, substituindo pelo endereço correto.

## 7. Avaliações e credibilidade

Os depoimentos incluídos são FICTÍCIOS e estão identificados na página. Não são enviados como `Review` ou `AggregateRating` nos dados estruturados.

1. Para esconder a seção, coloque `reviews.enabled` em `false`.
2. Para publicar avaliações reais, substitua `reviews.items` por relatos autorizados e fiéis aos originais. Campos: `name`, `text`, `date`, `rating` (inteiro de 1 a 5).
3. Só depois disso altere `reviews.demo` para `false`.
4. `stats` está vazio e a seção fica oculta. Adicione apenas dados verificáveis, no formato `[{"value":"VALOR REAL","label":"Descrição do indicador"}]`. Não use números exemplificativos como prova comercial.

## 8. Serviços e textos

1. Cada item de `services` gera uma página própria.
2. `slug` define a URL. Use letras minúsculas, números e hífens, sem espaços ou acentos.
3. Edite `title`, `description`, `headline` e `sections` (blocos com `title` e `text`).
4. Edite `seoTitle` e `seoDescription` de cada serviço.
5. Os cards principais e links de rodapé são gerados a partir da lista.
6. Os cards de placa e aparelho que não liga apontam para conserto de celular; o card de diagnóstico aponta para atendimento. Para alterá-los, edite a constante `extras` e o card de diagnóstico em `src/pages/index.astro`.
7. O título da hero aceita `\n` para separar as duas linhas. A segunda linha recebe destaque azul.
8. Textos editoriais de diferenciais e do passo a passo ficam em `src/pages/index.astro`; conteúdo do contato em `src/components/Contact.astro`.

## 9. SEO e indexação

- Preencha `domain` com a URL pública definitiva, sem caminho de subpasta.
- Ajuste `seo.homeTitle`, `seo.homeDescription`, `seo.contactTitle`, `seo.contactDescription` e SEO de cada serviço.
- `indexable: true` gera `index,follow` e libera robots. `false` gera `noindex,follow` e bloqueia rastreamento no robots. Para remover URLs já indexadas, permita que o Google leia o noindex antes de bloquear o rastreamento; robots sozinho não garante remoção.
- A página 404 é sempre noindex.
- `sitemap.xml` inclui home, contato e todas as páginas de serviços com o domínio configurado.
- LocalBusiness contém dados reais disponíveis. Não há nota ou depoimentos falsos no schema.
- FAQPage espelha as perguntas visíveis. Não há promessa de rich results; o Google decide a exibição e limita resultados enriquecidos de FAQ.
- Mantenha nome, endereço e telefone consistentes no site e no Perfil da Empresa no Google.
- Depois de publicar, verifique o domínio no Google Search Console e envie `/sitemap.xml`. Use o teste de resultados avançados e a inspeção de URL para verificar o site publicado.
- SEO técnico não garante posição, tráfego ou vendas. Conteúdo, concorrência, perfil local, avaliações reais e presença da empresa também influenciam.

## 10. Animação: trocar frames e intervalo

Os 72 frames enviados estão em `public/frames`, em WebP otimizado para 960 × 540. A sequência completa pesa aproximadamente 2,6 MB. O arquivo de imagem possui descrição acessível e dimensões fixas para evitar salto no layout.

1. Substitua os arquivos, mantendo a sequência `frame_0001.webp` a `frame_0072.webp`.
2. Se mudar quantidade, pasta, prefixo ou extensão, altere `animation.count`, `directory`, `prefix` e `extension`.
3. Todos os frames devem ter as mesmas dimensões e proporção. Se trocar a proporção, atualize width/height em `src/components/Animation.astro`.
4. `durationMs: 3000` corresponde a 3 segundos.
5. `intervalMs: 30000` corresponde a 30 segundos entre o início de uma execução e o início da próxima. Use intervalo igual ou maior que a duração.
6. A animação espera os frames carregarem para iniciar sem lacunas; a imagem final fica visível durante esse carregamento.
7. Ao terminar, mantém o último frame. Não há controle por scroll ou clique.
8. Para economizar recursos, pausa fora de vista e com a aba oculta. Ao retornar, reinicia automaticamente. Visibilidade não controla o progresso da sequência.
9. Se o sistema do visitante solicitar movimento reduzido, mostra só o frame final. Sem JavaScript ou se um frame falhar, mantém a imagem estática.
10. A imagem de compartilhamento `public/og.jpg` é separada da animação; atualize-a se trocar a marca ou o material visual.

## 11. Publicar na Vercel

1. Preencha a configuração, substitua ou esconda avaliações fictícias e execute `npm run check:production`.
2. Rode `npm ci`, `npm run build` e `npm run verify`.
3. Crie um repositório no GitHub e envie o conteúdo de `gt-tech`, incluindo o `package-lock.json`, `public`, `src`, `scripts` e arquivos de configuração. Não envie `node_modules` nem `.astro`.
4. Na Vercel, importe esse repositório.
5. Framework: Astro. Install command: `npm ci`. Build command: `npm run build`. Output directory: `dist`. Node.js: 24.x.
6. Se `package.json` estiver dentro de uma subpasta no repositório, configure Root Directory para essa subpasta. Se estiver na raiz, deixe na raiz.
7. Faça o primeiro deploy. Use a URL recebida em `domain` ou conecte o domínio próprio e use esse endereço.
8. Faça commit da alteração e aguarde o novo deploy.
9. Teste todas as páginas, WhatsApp, mapa, tema, menu, animação e o arquivo `/sitemap.xml` no endereço público.
10. Confira o relatório `VALIDACAO.md` para limites das verificações desta entrega.

A pasta `dist` também pode ser publicada em hospedagem de arquivos estáticos. As rotas usam diretórios com `index.html`; não é uma SPA. Configure 404 para `404.html`. Deploy em subpasta, como GitHub Pages de repositório, exige adaptar as URLs absolutas; este projeto foi preparado para a raiz do domínio.

## 12. Organização

- `site.config.json`: dados e conteúdo editável.
- `src/config/site.ts`: helpers de mensagem e URLs.
- `src/layouts/Base.astro`: HTML, SEO, header, footer, tema e menu.
- `src/components`: animação, FAQ, CTA e contato.
- `src/pages`: páginas HTML e endpoints estáticos de sitemap e robots.
- `src/styles/global.css`: identidade visual e breakpoints.
- `public`: frames, imagem social e favicon.
- `scripts/verify.mjs`: validação de saída HTML e teste determinístico do script real da animação.
- `scripts/production.mjs`: checagem dos campos necessários antes de publicar.
- `dist`: resultado compilado.

## 13. Verificar

`npm run verify` deve ser executado após o build. Valida 7 páginas comerciais, um H1 por página, títulos e descrições únicos, JSON-LD, recursos/links locais, todos os frames e os estados da animação. O teste de animação usa relógio e DOM simulados; não substitui teste visual em navegador real.

Antes de publicar, abra em 360, 390, 768 e 1440 pixels, use teclado e confira ausência de rolagem horizontal. Teste menu, alternância de tema, persistência ao recarregar, WhatsApp, mapa, animação em 3 e 30 segundos e movimento reduzido. Faça Lighthouse no site publicado; não há pontuação medida nesta entrega.


## Central de problemas — nova página

- Endereço: `/problemas-com-celular/` (arquivo `src/pages/problemas-com-celular.astro`).
- O conteúdo de **60 situações detalhadas e suas perguntas relacionadas** fica em `src/data/problemas.ts`. Cada objeto tem: `id`, `category`, `title`, `causes`, `guidance`, `question`, `answer` e `service`.
- Para adicionar um tema, copie um objeto existente e altere esses campos, usando um `id` único e amigável para URL (somente letras minúsculas, números e hífens). Para excluir um tema, remova o objeto completo. O total e os filtros são calculados automaticamente.
- O conteúdo aparece na própria página em grupos expansíveis, para ser útil a pessoas vindas da pesquisa. Não há redirecionamento automático nem texto SEO escondido.
- O único ajuste visual compartilhado com a landing page foi acrescentar **um link discreto no rodapé**, em `src/layouts/Base.astro`. O HTML da página principal, as animações, o CSS global e a configuração comercial não foram alterados.
- A nova URL foi incluída no `src/pages/sitemap.xml.ts`. Para sitemap e canonical corretos na publicação, informe o domínio HTTPS real em `site.config.json` → `domain`; depois execute o build novamente.
- O botão de WhatsApp da central utiliza a mesma configuração `whatsapp` e `whatsappMessage` do restante do site. Enquanto o telefone estiver vazio, ele segue o comportamento original dos contatos.
- SEO: o conteúdo ajuda a responder dúvidas específicas, mas **não há garantia** de ranqueamento para cada defeito. Atualize com observações técnicas verdadeiras e mantenha os serviços anunciados compatíveis com o que a loja realmente oferece.
- A pesquisa interna de concorrentes está em um **ZIP separado**, porque enviá-la a um repositório GitHub público a tornaria visível. **Não suba essa planilha com o site.**
