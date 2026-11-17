# Relatório de validação — GT Tech

Data: 16/11/2026.

## Verificado

- Instalação de dependências e compilação Astro concluídas sem erros.
- Sete páginas comerciais estáticas geradas: home, contato e cinco serviços, além de 404.
- Exatamente um H1 por página comercial.
- Titles e meta descriptions presentes e únicos.
- HTML com idioma pt-BR, viewport e indexação habilitada por padrão.
- Dados estruturados JSON válidos. FAQ corresponde às perguntas visíveis; não há notas fictícias no schema.
- Links e recursos locais apontam para arquivos/rotas existentes.
- Todos os 72 frames presentes. WebP reduzido de 1920 × 1080 para 960 × 540; sequência completa de aproximadamente 2,6 MB.
- Script real da animação testado com DOM e relógio simulados: frame 1 no início, frame 37 no meio, frame 72 em 3 segundos, manutenção do final, reinício em 30 segundos e movimento reduzido sem reprodução.
- Build com configuração temporária de teste validou canonical absoluto, sete URLs no sitemap, referência do sitemap no robots e links WhatsApp com mensagem. A configuração de teste foi removida; os dados finais desconhecidos permaneceram vazios.
- Novo build e nova validação após restaurar a configuração de entrega.
- Validador de publicação detectou corretamente todos os dados comerciais ausentes.

## Implementado, mas não verificado visualmente nesta execução

A infraestrutura de prévia retornou `preview startup timed out`, embora o Astro tenha iniciado. O status posterior confirmou a prévia parada. Não foi possível abrir o site em um navegador real, portanto NÃO foram confirmados visualmente:

- Responsividade em celular, tablet e desktop.
- Aparência, encaixe da animação e ausência de rolagem horizontal.
- Clique e persistência do tema e comportamento do menu mobile.
- Fluidez da animação e consumo de memória em dispositivos reais.
- Navegação por teclado em navegador e pontuação Lighthouse.

O CSS inclui layouts para desktop, tablet, celular e telas estreitas; o JavaScript implementa tema persistente, menu com aria-expanded e Escape, redução de movimento e pausa em aba oculta. Isso não substitui homologação visual. Não foi atribuída uma pontuação de performance nem declarada aprovação desses itens.

## Dependências de informações reais

Faltam telefone, WhatsApp, endereço, horários, domínio e links Google. Sem esses dados:

- CTAs levam à seção de contato em vez de abrir conversa com um destinatário inventado.
- Mapa real e botões Google permanecem ocultos; aparece uma indicação de cidade, sem pino de estabelecimento fictício.
- Canonical é omitido e sitemap não contém URLs.
- Números comerciais ficam ocultos porque não foram fornecidos dados verificáveis.
- Depoimentos fictícios estão identificados como exemplos. Antes da publicação comercial, substitua por reais ou desative a seção.

O ZIP contém a implementação e o build, mas a configuração comercial e a homologação visual devem ser concluídas antes da publicação final. Consulte README.md e execute `npm run check:production`.
