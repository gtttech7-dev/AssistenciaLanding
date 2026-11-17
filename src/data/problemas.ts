// Central de problemas da GT Tech. Edite os textos aqui sem modificar a landing page.
// As informações são gerais, não substituem diagnóstico técnico.
export type Problema = {
  id: string; category: string; title: string; causes: string; guidance: string; question: string; answer: string; service: string;
};
export const problemas: Problema[] = [
  {
    "id": "mancha-roxa-na-tela-depois-de-uma-queda",
    "category": "Tela e toque",
    "title": "Mancha roxa na tela depois de uma queda",
    "causes": "Uma mancha roxa que surgiu após impacto pode indicar dano nas camadas internas do display, mesmo quando o vidro externo parece inteiro.",
    "guidance": "Evite pressionar a região e faça backup se o aparelho ainda funcionar. Uma avaliação verifica a necessidade de substituir o conjunto da tela.",
    "question": "A mancha roxa pode aumentar?",
    "answer": "Sim. Quando o painel interno está danificado, a área alterada pode se espalhar com o tempo ou após nova pressão.",
    "service": "Troca de tela"
  },
  {
    "id": "mancha-preta-na-tela-aumentando-aos-poucos",
    "category": "Tela e toque",
    "title": "Mancha preta na tela aumentando aos poucos",
    "causes": "Manchas pretas com bordas irregulares podem aparecer quando parte do painel deixa de exibir imagem. Nem sempre isso significa defeito apenas no vidro.",
    "guidance": "Não tente massagear ou aquecer a tela. Se ainda enxergar o conteúdo, salve seus dados e procure diagnóstico.",
    "question": "Dá para trocar só o vidro?",
    "answer": "Depende do tipo e da extensão do dano. Se o próprio display foi afetado, normalmente é necessário avaliar a troca do conjunto.",
    "service": "Troca de tela"
  },
  {
    "id": "linha-verde-vertical-no-samsung",
    "category": "Tela e toque",
    "title": "Linha verde vertical no Samsung",
    "causes": "Uma linha verde fixa em uma tela AMOLED pode envolver o painel, conexões internas ou outros defeitos. A coincidência com uma atualização não prova, sozinha, a causa.",
    "guidance": "Reinicie o celular e observe se a linha continua em diferentes aplicativos. Registre uma foto do defeito para a avaliação.",
    "question": "Atualizar o sistema elimina a linha?",
    "answer": "Se houver defeito físico no painel, uma atualização não costuma resolver. O diagnóstico deve separar falha de software de dano ao display.",
    "service": "Troca de tela"
  },
  {
    "id": "linha-rosa-ou-branca-que-atravessa-a-tela",
    "category": "Tela e toque",
    "title": "Linha rosa ou branca que atravessa a tela",
    "causes": "Uma faixa fina e permanente pode indicar falha no conjunto do display. Também é importante observar se ela aparece já na tela de inicialização.",
    "guidance": "Verifique se a faixa muda conforme brilho e aplicativos, sem torcer o aparelho. Procure avaliação se permanecer.",
    "question": "A linha pode aparecer sem queda?",
    "answer": "Sim. Falhas no painel podem surgir sem um impacto recente perceptível; a causa exige análise do aparelho.",
    "service": "Troca de tela"
  },
  {
    "id": "metade-da-tela-do-celular-ficou-preta",
    "category": "Tela e toque",
    "title": "Metade da tela do celular ficou preta",
    "causes": "Quando apenas parte da imagem funciona, o problema pode estar no display ou em conexões, especialmente após queda ou pressão.",
    "guidance": "Se for possível, faça backup. Evite pressionar ou abrir o telefone para tentar recuperar a outra metade.",
    "question": "A tela pode piorar de repente?",
    "answer": "Pode. Um painel com dano interno pode perder mais área de imagem ou deixar de funcionar.",
    "service": "Troca de tela"
  },
  {
    "id": "iphone-liga-mas-nao-responde-ao-toque",
    "category": "Tela e toque",
    "title": "iPhone liga mas não responde ao toque",
    "causes": "Se o iPhone exibe imagem normal e não reage aos dedos, o defeito pode envolver o touch, a tela ou o software.",
    "guidance": "Tente uma reinicialização apropriada ao modelo e remova acessórios que estejam interferindo. Se persistir, solicite diagnóstico.",
    "question": "Precisa necessariamente trocar a tela?",
    "answer": "Não. A avaliação deve excluir falhas temporárias de software e identificar se há defeito no conjunto da tela.",
    "service": "Troca de tela"
  },
  {
    "id": "toque-fantasma-abre-aplicativos-sozinho",
    "category": "Tela e toque",
    "title": "Toque fantasma abre aplicativos sozinho",
    "causes": "Quando a tela registra comandos sem ninguém tocar, há possibilidade de falha no touch, umidade, película, carregador ou conexões.",
    "guidance": "Remova a película se ela estiver danificada e observe se acontece também sem o carregador. Evite digitar senhas enquanto houver toques involuntários.",
    "question": "Pode ser o carregador?",
    "answer": "Sim. Acessórios inadequados podem causar interferência, mas não são a única explicação para toques fantasmas.",
    "service": "Troca de tela"
  },
  {
    "id": "tela-piscando-quando-o-brilho-fica-baixo",
    "category": "Tela e toque",
    "title": "Tela piscando quando o brilho fica baixo",
    "causes": "Oscilações na luminosidade podem estar ligadas a configurações, incompatibilidade de tela substituída ou problema no display.",
    "guidance": "Verifique brilho automático e atualizações sem abrir o aparelho. Informe se o problema começou após reparo.",
    "question": "Isso é normal em qualquer tela OLED?",
    "answer": "Pequenas variações de percepção são possíveis, mas piscadas intensas ou recorrentes merecem avaliação.",
    "service": "Troca de tela"
  },
  {
    "id": "tela-ou-tampa-comecou-a-descolar-da-moldura",
    "category": "Tela e toque",
    "title": "Tela ou tampa começou a descolar da moldura",
    "causes": "Uma abertura entre tela e carcaça pode indicar adesivo comprometido, queda ou até pressão causada por uma bateria estufada.",
    "guidance": "Não pressione a tela para encaixá-la. Se o aparelho estiver inchado ou aquecendo, interrompa uso e carregamento e procure assistência.",
    "question": "Posso colar em casa?",
    "answer": "Não é recomendável: antes de colar, é essencial verificar se existe bateria deformada ou outro risco interno.",
    "service": "Troca de tela"
  },
  {
    "id": "vidro-trincado-mas-imagem-e-touch-funcionam",
    "category": "Tela e toque",
    "title": "Vidro trincado, mas imagem e touch funcionam",
    "causes": "O aparelho pode continuar funcionando com o vidro quebrado, porém fissuras facilitam novos danos e podem comprometer a vedação.",
    "guidance": "Evite contato com água e proteja os dedos de bordas quebradas. Consulte a opção de reparo compatível com o modelo.",
    "question": "Preciso trocar a tela completa?",
    "answer": "Depende da construção e do estado do conjunto. O técnico pode explicar quais opções são viáveis para aquele modelo.",
    "service": "Troca de tela"
  },
  {
    "id": "celular-so-carrega-com-cabo-inclinado",
    "category": "Bateria e carregamento",
    "title": "Celular só carrega com cabo inclinado",
    "causes": "Carregamento que funciona apenas em uma posição pode envolver sujeira, desgaste do conector ou problema no cabo.",
    "guidance": "Teste outro cabo confiável, sem forçar o plugue. Não introduza objetos metálicos na entrada de carga.",
    "question": "É sempre a entrada USB-C?",
    "answer": "Não. O defeito pode estar no cabo ou em outros componentes, por isso o conjunto precisa ser avaliado.",
    "service": "Reparo de conector"
  },
  {
    "id": "icone-de-carga-aparece-mas-porcentagem-nao-aumenta",
    "category": "Bateria e carregamento",
    "title": "Ícone de carga aparece, mas porcentagem não aumenta",
    "causes": "O símbolo de carregamento pode aparecer mesmo quando o aparelho não recebe energia suficiente ou não consegue armazená-la.",
    "guidance": "Teste uma fonte e cabo compatíveis. Se o celular aquecer demais, desconecte e procure avaliação.",
    "question": "Trocar a bateria resolve sempre?",
    "answer": "Não. Também pode haver falha no conector, circuito de carga ou acessório.",
    "service": "Troca de bateria"
  },
  {
    "id": "celular-funciona-so-quando-esta-na-tomada",
    "category": "Bateria e carregamento",
    "title": "Celular funciona só quando está na tomada",
    "causes": "Se o telefone apaga assim que o carregador é retirado, a bateria pode não estar fornecendo energia adequadamente.",
    "guidance": "Evite insistir em ligar repetidas vezes. Uma avaliação confirma se a falha está na bateria ou no circuito de alimentação.",
    "question": "O aparelho pode ter problema na placa?",
    "answer": "Pode. O sintoma é compatível com mais de uma causa e não permite fechar diagnóstico à distância.",
    "service": "Troca de bateria"
  },
  {
    "id": "iphone-descarrega-rapido-mesmo-sem-usar",
    "category": "Bateria e carregamento",
    "title": "iPhone descarrega rápido mesmo sem usar",
    "causes": "Consumo elevado em repouso pode estar ligado à saúde da bateria, aplicativos em segundo plano, rede móvel ou falhas internas.",
    "guidance": "Confira o relatório de bateria e observe se há aquecimento. Faça backup antes de qualquer reparo.",
    "question": "Bateria em 80% precisa ser trocada?",
    "answer": "É um indicador útil, mas a decisão depende de autonomia, uso e avaliação; a porcentagem isolada não explica todos os sintomas.",
    "service": "Troca de bateria"
  },
  {
    "id": "motorola-desliga-quando-marca-30-de-bateria",
    "category": "Bateria e carregamento",
    "title": "Motorola desliga quando marca 30% de bateria",
    "causes": "Desligamentos com carga aparentemente restante podem indicar bateria degradada, leitura incorreta ou falha de alimentação.",
    "guidance": "Registre quando o desligamento acontece e procure avaliação, especialmente se o problema piorar.",
    "question": "Calibrar resolve o problema?",
    "answer": "Ajustes de leitura podem não recuperar uma bateria desgastada. É necessário verificar a causa real.",
    "service": "Troca de bateria"
  },
  {
    "id": "xiaomi-fica-em-0-ou-1-durante-a-carga",
    "category": "Bateria e carregamento",
    "title": "Xiaomi fica em 0% ou 1% durante a carga",
    "causes": "A porcentagem travada pode resultar de falha de medição, bateria, software ou circuito de carregamento.",
    "guidance": "Teste um carregador compatível e acompanhe a temperatura. Se permanecer travado, solicite diagnóstico.",
    "question": "Deixar carregando a noite toda resolve?",
    "answer": "Não é uma solução confiável e pode ser inadequado se houver defeito ou aquecimento.",
    "service": "Troca de bateria"
  },
  {
    "id": "celular-esquenta-muito-enquanto-carrega",
    "category": "Bateria e carregamento",
    "title": "Celular esquenta muito enquanto carrega",
    "causes": "Aquecimento excessivo pode estar associado ao carregador, bateria, ambiente, uso intenso ou defeito elétrico.",
    "guidance": "Interrompa a carga se ficar anormalmente quente. Não cubra o aparelho nem tente resfriá-lo com água.",
    "question": "É normal esquentar um pouco?",
    "answer": "Uma elevação moderada pode ocorrer; calor intenso, odor diferente ou deformação exigem atenção técnica.",
    "service": "Troca de bateria"
  },
  {
    "id": "bateria-estufada-levantou-a-tela",
    "category": "Bateria e carregamento",
    "title": "Bateria estufada levantou a tela",
    "causes": "Tela levantada, tampa aberta e carcaça deformada podem indicar bateria inchada, que requer cuidado.",
    "guidance": "Pare de usar e carregar o aparelho. Não pressione, perfure ou tente remontar a tampa; procure atendimento técnico.",
    "question": "Posso continuar carregando até consertar?",
    "answer": "Não. Uma bateria possivelmente inchada não deve continuar em uso ou carregamento.",
    "service": "Troca de bateria"
  },
  {
    "id": "carrega-por-inducao-mas-nao-pelo-cabo",
    "category": "Bateria e carregamento",
    "title": "Carrega por indução, mas não pelo cabo",
    "causes": "Quando a carga sem fio funciona e a conexão física falha, o caminho do conector, o cabo ou o circuito relacionado podem estar comprometidos.",
    "guidance": "Teste outro cabo e fonte confiáveis. Evite forçar a porta e informe ao técnico que a indução funciona.",
    "question": "Significa que a bateria está boa?",
    "answer": "Não necessariamente. Esse contraste ajuda no diagnóstico, mas não garante o estado da bateria.",
    "service": "Reparo de conector"
  },
  {
    "id": "carregamento-rapido-parou-de-funcionar",
    "category": "Bateria e carregamento",
    "title": "Carregamento rápido parou de funcionar",
    "causes": "A perda de carga rápida pode envolver configuração, temperatura, fonte, cabo, sujeira ou desgaste no conector.",
    "guidance": "Confira se cabo e carregador suportam o padrão do aparelho. Procure análise se a mudança persistir.",
    "question": "Qualquer carregador ativa carga rápida?",
    "answer": "Não. Os padrões de potência e comunicação precisam ser compatíveis com o modelo.",
    "service": "Reparo de conector"
  },
  {
    "id": "samsung-trava-no-logo-ao-ligar",
    "category": "Sistema e inicialização",
    "title": "Samsung trava no logo ao ligar",
    "causes": "Quando o aparelho permanece no logotipo, pode haver falha de sistema, armazenamento ou hardware.",
    "guidance": "Evite procedimentos que apaguem dados sem backup. Informe se houve atualização, queda ou falta de espaço antes do problema.",
    "question": "Formatar é a única saída?",
    "answer": "Não. A avaliação deve considerar possibilidades de recuperação e o risco de perda de dados antes de restaurar.",
    "service": "Reparo de software"
  },
  {
    "id": "motorola-reinicia-sozinho-varias-vezes-ao-dia",
    "category": "Sistema e inicialização",
    "title": "Motorola reinicia sozinho várias vezes ao dia",
    "causes": "Reinicializações aleatórias podem envolver sistema, botão de energia, bateria ou falha de placa.",
    "guidance": "Anote se acontece com aquecimento, uso de aplicativos ou carregamento. Faça backup se o aparelho permitir.",
    "question": "Atualizar o Android sempre resolve?",
    "answer": "Não. A causa pode ser física ou de alimentação, exigindo diagnóstico.",
    "service": "Conserto de celular"
  },
  {
    "id": "xiaomi-fica-preso-no-logotipo-miui-ou-hyperos",
    "category": "Sistema e inicialização",
    "title": "Xiaomi fica preso no logotipo MIUI ou HyperOS",
    "causes": "O sistema pode parar no logo após atualização interrompida, falha de armazenamento ou outros problemas.",
    "guidance": "Não execute restaurações sem entender o impacto sobre os dados. Procure diagnóstico adequado ao modelo.",
    "question": "Dá para recuperar fotos antes de formatar?",
    "answer": "Depende da falha, do bloqueio e do estado do armazenamento; não é possível garantir recuperação.",
    "service": "Reparo de software"
  },
  {
    "id": "iphone-fica-na-maca-e-reinicia",
    "category": "Sistema e inicialização",
    "title": "iPhone fica na maçã e reinicia",
    "causes": "O chamado ciclo de inicialização pode ter causas de software, bateria ou componentes internos.",
    "guidance": "Evite repetir procedimentos aleatórios de restauração. Registre se ocorreu após queda, reparo ou atualização.",
    "question": "Conectar ao computador resolve?",
    "answer": "Às vezes ajuda a diagnosticar, mas não garante conserto nem preservação dos dados.",
    "service": "Conserto de celular"
  },
  {
    "id": "celular-vibra-mas-a-tela-nao-acende",
    "category": "Sistema e inicialização",
    "title": "Celular vibra, mas a tela não acende",
    "causes": "Quando há vibração ou sons sem imagem, a falha pode estar no display, conexão ou circuito responsável pela imagem.",
    "guidance": "Verifique se o aparelho recebe chamadas e evite pressionar a tela. Procure avaliação técnica.",
    "question": "É sinal de placa queimada?",
    "answer": "Não necessariamente. A vibração indica alguma atividade, mas não define qual peça falhou.",
    "service": "Troca de tela"
  },
  {
    "id": "celular-caiu-e-nao-liga-nem-mostra-carga",
    "category": "Sistema e inicialização",
    "title": "Celular caiu e não liga nem mostra carga",
    "causes": "Depois de impacto, podem ocorrer danos à tela, bateria, conectores ou placa, mesmo sem marcas externas.",
    "guidance": "Evite insistir em ligar ou carregar caso haja deformação. Informe detalhes da queda ao técnico.",
    "question": "Pode ser apenas a tela?",
    "answer": "Pode, mas a ausência de sinais exige verificar outros circuitos e componentes.",
    "service": "Conserto de celular"
  },
  {
    "id": "memoria-cheia-e-celular-reiniciando",
    "category": "Sistema e inicialização",
    "title": "Memória cheia e celular reiniciando",
    "causes": "Falta de armazenamento pode causar instabilidade, travamentos e dificuldade para iniciar, mas não é a única causa possível.",
    "guidance": "Se ainda conseguir acessar, faça backup e libere espaço com cuidado. Não apague arquivos importantes sem cópia.",
    "question": "Trocar memória é necessário?",
    "answer": "Geralmente o primeiro passo é avaliar uso e saúde do armazenamento, não presumir troca de peça.",
    "service": "Reparo de software"
  },
  {
    "id": "aplicativos-fecham-sozinhos-apos-atualizacao",
    "category": "Sistema e inicialização",
    "title": "Aplicativos fecham sozinhos após atualização",
    "causes": "Aplicativos incompatíveis, cache corrompido ou falta de recursos podem causar encerramentos inesperados após atualizações.",
    "guidance": "Atualize os aplicativos e reinicie o sistema. Se o problema afetar tudo, solicite avaliação.",
    "question": "Precisa formatar para corrigir?",
    "answer": "Não necessariamente. Existem verificações anteriores à restauração, que pode apagar dados.",
    "service": "Reparo de software"
  },
  {
    "id": "whatsapp-grava-audio-mas-fica-sem-som",
    "category": "Áudio e chamadas",
    "title": "WhatsApp grava áudio, mas fica sem som",
    "causes": "Áudios silenciosos podem envolver permissão do app, microfone obstruído ou falha do próprio componente.",
    "guidance": "Teste o gravador do aparelho e verifique permissões do WhatsApp. Evite tentar limpar o microfone com objetos pontiagudos.",
    "question": "Se chamadas funcionam, o microfone está perfeito?",
    "answer": "Não obrigatoriamente. Alguns aparelhos utilizam microfones diferentes conforme a função.",
    "service": "Conserto de celular"
  },
  {
    "id": "durante-a-ligacao-a-pessoa-nao-escuta-minha-voz",
    "category": "Áudio e chamadas",
    "title": "Durante a ligação a pessoa não escuta minha voz",
    "causes": "A ausência de voz para quem recebe pode vir de microfone, conexão, cobertura de rede ou software.",
    "guidance": "Teste a gravação de voz e observe se o problema ocorre com diferentes contatos.",
    "question": "É problema da operadora?",
    "answer": "Pode ser, mas o teste de gravação ajuda a separar falha de rede e falha no aparelho.",
    "service": "Conserto de celular"
  },
  {
    "id": "so-consigo-escutar-chamadas-no-viva-voz",
    "category": "Áudio e chamadas",
    "title": "Só consigo escutar chamadas no viva-voz",
    "causes": "Se o alto-falante externo funciona, mas o auricular não, é possível haver obstrução ou defeito no alto-falante de chamadas.",
    "guidance": "Teste o volume da chamada e procure avaliação se o áudio continuar ausente.",
    "question": "Trocar o alto-falante resolve sempre?",
    "answer": "Não. Conexões e circuitos também precisam ser considerados.",
    "service": "Conserto de celular"
  },
  {
    "id": "alto-falante-chia-quando-aumento-o-volume",
    "category": "Áudio e chamadas",
    "title": "Alto-falante chia quando aumento o volume",
    "causes": "Som distorcido pode ocorrer por desgaste, danos após umidade ou falhas de áudio.",
    "guidance": "Teste arquivos diferentes em volume moderado e informe se houve contato com líquido.",
    "question": "Som chiando significa que a placa estragou?",
    "answer": "Não. O alto-falante é uma possibilidade, mas a origem depende dos testes.",
    "service": "Conserto de celular"
  },
  {
    "id": "icone-de-fone-aparece-sem-fone-conectado",
    "category": "Áudio e chamadas",
    "title": "Ícone de fone aparece sem fone conectado",
    "causes": "O aparelho pode identificar incorretamente um acessório por umidade, sujeira, software ou falha no conector.",
    "guidance": "Desconecte acessórios e reinicie o celular. Não introduza ferramentas no conector.",
    "question": "Se eu reiniciar, o defeito acaba?",
    "answer": "Se for temporário, talvez. Quando existe dano físico, costuma voltar ou permanecer.",
    "service": "Conserto de celular"
  },
  {
    "id": "audio-ficou-abafado-depois-de-molhar",
    "category": "Áudio e chamadas",
    "title": "Áudio ficou abafado depois de molhar",
    "causes": "Umidade pode afetar grades, alto-falantes e microfones. O problema também pode evoluir com a oxidação.",
    "guidance": "Desligue o aparelho se houve contato importante com líquido e não use calor para secar.",
    "question": "Secador de cabelo ajuda?",
    "answer": "Não é recomendado: o calor pode danificar componentes e não remove umidade interna com segurança.",
    "service": "Conserto de celular"
  },
  {
    "id": "microfone-funciona-no-gravador-mas-nao-nas-chamadas",
    "category": "Áudio e chamadas",
    "title": "Microfone funciona no gravador, mas não nas chamadas",
    "causes": "Aparelhos podem usar microfones e processamento diferentes em ligações, gravação e aplicativos.",
    "guidance": "Teste com e sem Bluetooth, confira permissões e anote quais funções falham.",
    "question": "Isso descarta defeito físico?",
    "answer": "Não. O comportamento diferente ajuda a identificar onde investigar.",
    "service": "Conserto de celular"
  },
  {
    "id": "celular-nao-vibra-ao-receber-notificacoes",
    "category": "Áudio e chamadas",
    "title": "Celular não vibra ao receber notificações",
    "causes": "A ausência de vibração pode estar ligada a ajustes de acessibilidade, modo silencioso ou motor de vibração.",
    "guidance": "Confira as configurações de vibração e notificações. Se também falhar em outros testes, procure assistência.",
    "question": "É preciso trocar o motor de vibração?",
    "answer": "Somente após verificar configurações, conexões e o próprio componente.",
    "service": "Conserto de celular"
  },
  {
    "id": "camera-traseira-abre-apenas-uma-imagem-preta",
    "category": "Câmeras e sensores",
    "title": "Câmera traseira abre apenas uma imagem preta",
    "causes": "Uma tela preta na câmera pode envolver o aplicativo, bloqueio de permissões ou falha do módulo.",
    "guidance": "Reinicie o celular e teste em outro aplicativo. Informe se começou após impacto.",
    "question": "Se a câmera frontal funciona, a traseira quebrou?",
    "answer": "É uma possibilidade, mas o diagnóstico deve avaliar software, módulo e conexões.",
    "service": "Conserto de celular"
  },
  {
    "id": "camera-do-iphone-nao-foca-objetos-proximos",
    "category": "Câmeras e sensores",
    "title": "Câmera do iPhone não foca objetos próximos",
    "causes": "Perda de foco pode depender da distância mínima da lente, sujeira ou falha de estabilização/foco.",
    "guidance": "Limpe externamente com pano adequado e teste diferentes distâncias sem forçar o módulo.",
    "question": "Toda câmera consegue focar muito perto?",
    "answer": "Não. A distância mínima varia conforme o modelo e a lente utilizada.",
    "service": "Conserto de celular"
  },
  {
    "id": "camera-treme-e-faz-ruido-ao-abrir",
    "category": "Câmeras e sensores",
    "title": "Câmera treme e faz ruído ao abrir",
    "causes": "Tremor e estalos na imagem podem indicar dificuldade no sistema de foco ou estabilização óptica, especialmente após queda.",
    "guidance": "Evite sacudir o aparelho. Registre quando o ruído aparece para facilitar a avaliação.",
    "question": "Atualização de sistema corrige tremor físico?",
    "answer": "Uma correção de software é possível em alguns casos, mas danos mecânicos precisam de análise.",
    "service": "Conserto de celular"
  },
  {
    "id": "lente-da-camera-ficou-embacada-por-dentro",
    "category": "Câmeras e sensores",
    "title": "Lente da câmera ficou embaçada por dentro",
    "causes": "Condensação interna sugere entrada de umidade, que pode afetar também outras peças além das lentes.",
    "guidance": "Não aqueça o telefone para tentar secar. Procure inspeção técnica e evite continuar carregando se houve contato com água.",
    "question": "A umidade some sozinha sem danos?",
    "answer": "Pode evaporar parcialmente, mas ainda existir resíduo ou oxidação no interior.",
    "service": "Conserto de celular"
  },
  {
    "id": "flash-parou-de-funcionar-de-repente",
    "category": "Câmeras e sensores",
    "title": "Flash parou de funcionar de repente",
    "causes": "A falha do flash pode estar associada a controle de temperatura, aplicativo, iluminação ou componentes eletrônicos.",
    "guidance": "Teste a lanterna com o aparelho em temperatura normal e informe se houve queda.",
    "question": "O flash e a lanterna são a mesma peça?",
    "answer": "Em muitos modelos compartilham componentes, mas os modos podem usar controles diferentes.",
    "service": "Conserto de celular"
  },
  {
    "id": "camera-frontal-embacada-apos-trocar-a-tela",
    "category": "Câmeras e sensores",
    "title": "Câmera frontal embaçada após trocar a tela",
    "causes": "Poeira, película mal posicionada ou montagem podem afetar a nitidez após reparo, além de falhas próprias da câmera.",
    "guidance": "Confira se há película sobre a lente e procure a assistência responsável pelo serviço.",
    "question": "Precisa trocar a câmera?",
    "answer": "Não necessariamente. A causa pode ser obstrução, sujeira ou alinhamento.",
    "service": "Conserto de celular"
  },
  {
    "id": "tela-fica-preta-durante-audio-e-nao-volta",
    "category": "Câmeras e sensores",
    "title": "Tela fica preta durante áudio e não volta",
    "causes": "O sensor de proximidade pode manter a tela apagada por obstrução, película, configuração ou falha de hardware.",
    "guidance": "Limpe a área externa do sensor e teste sem capa ou película que o cubra.",
    "question": "É sempre defeito no sensor?",
    "answer": "Não. Acessórios e software também podem interferir.",
    "service": "Conserto de celular"
  },
  {
    "id": "digital-na-tela-nao-funciona-apos-reparo",
    "category": "Câmeras e sensores",
    "title": "Digital na tela não funciona após reparo",
    "causes": "Sensores biométricos integrados ao display dependem de compatibilidade e condições de montagem específicas.",
    "guidance": "Não compartilhe senhas para testes desnecessários. Verifique com o técnico se a tela substituída é compatível.",
    "question": "Qualquer tela nova mantém a digital?",
    "answer": "Não. A compatibilidade do conjunto varia por fabricante e modelo.",
    "service": "Troca de tela"
  },
  {
    "id": "celular-reconhece-o-chip-mas-mostra-sem-servico",
    "category": "Rede e conectividade",
    "title": "Celular reconhece o chip, mas mostra sem serviço",
    "causes": "O chip pode ser identificado mesmo quando o telefone não consegue registrar na rede móvel.",
    "guidance": "Verifique cobertura, modo avião e a condição do chip com a operadora. Se persistir, avalie o aparelho.",
    "question": "Trocar o chip resolve?",
    "answer": "Às vezes, se o chip estiver defeituoso, mas também há outras causas.",
    "service": "Conserto de celular"
  },
  {
    "id": "4g-ou-5g-parou-apos-uma-queda",
    "category": "Rede e conectividade",
    "title": "4G ou 5G parou após uma queda",
    "causes": "Impactos podem afetar antenas e conexões internas; configurações e cobertura também interferem na internet móvel.",
    "guidance": "Teste em mais de um local e confirme o plano com a operadora antes de concluir que houve dano físico.",
    "question": "Sem 5G significa antena quebrada?",
    "answer": "Não. Cobertura, plano, aparelho e ajustes influenciam a disponibilidade do 5G.",
    "service": "Conserto de celular"
  },
  {
    "id": "wi-fi-so-conecta-quando-fico-perto-do-roteador",
    "category": "Rede e conectividade",
    "title": "Wi-Fi só conecta quando fico perto do roteador",
    "causes": "Alcance muito reduzido pode apontar interferência, roteador, antena ou falha interna do telefone.",
    "guidance": "Teste com outro roteador e compare com outro celular no mesmo local.",
    "question": "Formatar melhora o sinal?",
    "answer": "Não costuma ser a primeira medida. A comparação entre redes ajuda a orientar o diagnóstico.",
    "service": "Conserto de celular"
  },
  {
    "id": "bluetooth-conecta-ao-fone-e-desconecta-sozinho",
    "category": "Rede e conectividade",
    "title": "Bluetooth conecta ao fone e desconecta sozinho",
    "causes": "Interferência, distância, bateria do fone e falhas de software ou hardware podem causar desconexões.",
    "guidance": "Teste outro acessório e atualize os dispositivos, sem presumir defeito do celular.",
    "question": "O problema pode estar no próprio fone?",
    "answer": "Sim. Comparar com outro fone é um teste importante.",
    "service": "Conserto de celular"
  },
  {
    "id": "celular-mostra-apenas-chamadas-de-emergencia",
    "category": "Rede e conectividade",
    "title": "Celular mostra apenas chamadas de emergência",
    "causes": "O telefone pode não conseguir registrar na operadora por cobertura, chip, bloqueios ou falhas técnicas.",
    "guidance": "Confirme a situação da linha e a área de sinal com a operadora, sem tentar contornar bloqueios.",
    "question": "É possível resolver apenas mudando a rede?",
    "answer": "Às vezes ajustes ajudam, mas também pode haver situação cadastral ou defeito a investigar.",
    "service": "Conserto de celular"
  },
  {
    "id": "celular-nao-reconhece-nenhum-chip-sim",
    "category": "Rede e conectividade",
    "title": "Celular não reconhece nenhum chip SIM",
    "causes": "O aviso de ausência de SIM pode decorrer de chip danificado, bandeja, contato interno ou sistema.",
    "guidance": "Teste outro chip ativo e confira se a bandeja está correta, sem forçar o encaixe.",
    "question": "É sempre o leitor de chip?",
    "answer": "Não. O diagnóstico deve verificar outros elementos antes de substituir uma peça.",
    "service": "Conserto de celular"
  },
  {
    "id": "gps-mostra-localizacao-errada-no-mapa",
    "category": "Rede e conectividade",
    "title": "GPS mostra localização errada no mapa",
    "causes": "Localização imprecisa pode ocorrer em ambientes fechados, por permissões, conexão ou falha de antena.",
    "guidance": "Teste ao ar livre com localização de alta precisão ativada e aplicativos atualizados.",
    "question": "GPS errado significa defeito de placa?",
    "answer": "Não necessariamente. Condições de sinal e configurações precisam ser descartadas primeiro.",
    "service": "Conserto de celular"
  },
  {
    "id": "roteador-do-celular-conecta-mas-nao-tem-internet",
    "category": "Rede e conectividade",
    "title": "Roteador do celular conecta, mas não tem internet",
    "causes": "O hotspot pode transmitir Wi-Fi sem que a conexão de dados móveis esteja funcionando.",
    "guidance": "Confira dados móveis, franquia, APN configurada pela operadora e teste a navegação no próprio telefone.",
    "question": "Se conecta ao Wi-Fi do hotspot, já tem internet?",
    "answer": "Não. A conexão local e o acesso à internet são etapas diferentes.",
    "service": "Reparo de software"
  },
  {
    "id": "celular-molhou-e-a-tela-apagou-horas-depois",
    "category": "Quedas, líquidos e estrutura",
    "title": "Celular molhou e a tela apagou horas depois",
    "causes": "Falhas tardias após água podem estar ligadas a umidade interna e corrosão, mesmo que o aparelho tenha funcionado inicialmente.",
    "guidance": "Desligue, não conecte ao carregador e procure avaliação. Não use arroz, secador ou calor.",
    "question": "Se voltou a ligar, está tudo resolvido?",
    "answer": "Não. Danos associados à umidade podem aparecer posteriormente.",
    "service": "Conserto de celular"
  },
  {
    "id": "camera-comecou-a-tremer-depois-de-cair",
    "category": "Quedas, líquidos e estrutura",
    "title": "Câmera começou a tremer depois de cair",
    "causes": "Após impacto, o mecanismo de foco ou estabilização da câmera pode ter sido afetado.",
    "guidance": "Evite sacudir o aparelho para testar e peça avaliação do módulo.",
    "question": "Pode ser somente uma falha temporária?",
    "answer": "É possível, mas tremor persistente após queda merece diagnóstico.",
    "service": "Conserto de celular"
  },
  {
    "id": "celular-aquece-mesmo-parado-e-sem-aplicativos",
    "category": "Quedas, líquidos e estrutura",
    "title": "Celular aquece mesmo parado e sem aplicativos",
    "causes": "Aquecimento em repouso pode envolver atividade de sistema, bateria, rede ou falha de componentes.",
    "guidance": "Verifique se há atualizações e uso anormal de bateria. Se ficar muito quente, interrompa o uso e a carga.",
    "question": "Aquecimento significa curto na placa?",
    "answer": "Não. É uma entre várias hipóteses que precisam de avaliação.",
    "service": "Conserto de celular"
  },
  {
    "id": "tampa-traseira-trincou-e-comecou-a-soltar",
    "category": "Quedas, líquidos e estrutura",
    "title": "Tampa traseira trincou e começou a soltar",
    "causes": "Vidro traseiro danificado pode deixar bordas cortantes e comprometer a proteção contra poeira e umidade.",
    "guidance": "Evite água e manuseie com cuidado. Procure uma avaliação para substituição da peça.",
    "question": "Posso continuar usando com a tampa quebrada?",
    "answer": "Há risco de ferimentos e de entrada de sujeira ou líquido, especialmente quando a peça está solta.",
    "service": "Conserto de celular"
  },
  {
    "id": "celular-entortou-e-a-tela-comecou-a-levantar",
    "category": "Quedas, líquidos e estrutura",
    "title": "Celular entortou e a tela começou a levantar",
    "causes": "Deformação do chassi após pressão ou queda pode comprometer tela, bateria e conexões internas.",
    "guidance": "Não tente desentortar manualmente nem pressione a tela de volta. Desligue se houver aquecimento ou inchaço.",
    "question": "Só trocar a tela resolve?",
    "answer": "Não necessariamente. A estrutura e a bateria precisam ser verificadas antes do reparo.",
    "service": "Conserto de celular"
  },
  {
    "id": "botao-de-ligar-afundou-apos-a-queda",
    "category": "Quedas, líquidos e estrutura",
    "title": "Botão de ligar afundou após a queda",
    "causes": "Um botão preso pode envolver a tecla externa, o flex interno ou deformação da moldura.",
    "guidance": "Evite forçar a tecla ou usar objetos para pressioná-la. Procure diagnóstico.",
    "question": "O celular pode ligar por outro método?",
    "answer": "Alguns modelos têm alternativas, mas isso não substitui o reparo do botão com defeito.",
    "service": "Conserto de celular"
  },
  {
    "id": "conector-usb-c-oxidou-depois-de-contato-com-agua",
    "category": "Quedas, líquidos e estrutura",
    "title": "Conector USB-C oxidou depois de contato com água",
    "causes": "Resíduos ou corrosão na porta podem causar carregamento intermitente e outros problemas de conexão.",
    "guidance": "Não conecte cabos se houver umidade. Evite sprays ou objetos metálicos e procure assistência.",
    "question": "Devo limpar com álcool em casa?",
    "answer": "Não recomendamos limpeza interna improvisada: o procedimento correto depende do estado do conector e do aparelho.",
    "service": "Reparo de conector"
  },
  {
    "id": "celular-voltou-do-reparo-e-apresenta-falha-intermitente",
    "category": "Quedas, líquidos e estrutura",
    "title": "Celular voltou do reparo e apresenta falha intermitente",
    "causes": "Um defeito que aparece e desaparece após serviço pode envolver configuração, conexão, peça ou condição anterior não identificada.",
    "guidance": "Registre quando acontece e procure primeiro a assistência que realizou o serviço, levando o comprovante se tiver.",
    "question": "O reparo anterior causou o defeito?",
    "answer": "Não é possível concluir apenas pelo momento em que surgiu. Uma inspeção técnica é necessária.",
    "service": "Conserto de celular"
  }
] as Problema[];
