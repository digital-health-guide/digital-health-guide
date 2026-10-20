# Tópico 2.0 — Entrada do trabalho

**Em uma frase:** A forma como o trabalho entra na sua organização — por uma porta de entrada visível, registrado de modo consistente e reconhecido com presteza — determina se você algum dia chega a escolher o que faz ou apenas reage a quem grita mais alto.

## Por que isso importa na saúde e nos cuidados

Na saúde e nos cuidados, o custo de uma entrada caótica não é apenas esforço desperdiçado — é risco clínico, iniquidade e confiança corroída. Quando o pedido de uma enfermaria por um fluxo de observações eletrônicas mais seguro, a proposta de um fornecedor, um mandato nacional e a ideia de estimação de um membro do conselho chegam por canais diferentes, sem registro comum, a organização não consegue ver a própria demanda, quanto mais governá-la. Pedidos críticos para a segurança ficam enterrados atrás de outros bem relacionados, mas de baixo valor.

O dinheiro público agrava o que está em jogo. Cada unidade de capacidade digital gasta em demanda não avaliada e não registrada é capacidade não gasta na lista de espera, no prontuário de cuidados compartilhado ou no trabalho de interoperabilidade de que um sistema depende. Reguladores, auditores e Conselhos de Cuidados Integrados (ICBs) esperam cada vez mais uma resposta defensável a "como isto foi priorizado?" — e você não consegue respondê-la se nem sabe mostrar como chegou. Uma boa entrada é o primeiro ponto de controle de um modelo operacional governável, equitativo e baseado em evidências (ver Tópico 1.1 — O modelo operacional e Tópico 1.3 — Decisões baseadas em evidências).

## Conceitos centrais

A **entrada** (*intake*) é o processo disciplinado de receber, registrar, classificar e reconhecer cada unidade de demanda antes que qualquer decisão seja tomada sobre se ou como atendê-la. É deliberadamente separada da triagem (avaliar e encaminhar — Tópico 2.1) e da priorização (ordenar — Tópico 2.2). O único trabalho da entrada é tornar a demanda *visível e comparável*.

A **[gestão de demanda](https://en.wikipedia.org/wiki/Demand_management)**, na tradição do [ITIL](https://en.wikipedia.org/wiki/ITIL) (IT Infrastructure Library) de [gestão de serviços](https://en.wikipedia.org/wiki/IT_service_management), é a prática de antecipar e canalizar a demanda para que possa ser atendida "sem incorrer em custos não planejados". Seu dispositivo central é a **porta de entrada única**: uma só via pela qual todos os pedidos são coletados, de modo que nada se perde nem é tratado por canais não oficiais. O ITIL 4 enquadra isso como um [catálogo de serviços](https://en.wikipedia.org/wiki/Service_catalog) (a própria porta de entrada) mais a gestão de solicitações de serviço (o que acontece depois que alguém atravessa a porta).

Os **tipos de demanda** não são intercambiáveis, e confundi-los é uma fonte comum de disfunção. Uma taxonomia de trabalho útil:

- **Ideias / oportunidades** — "não seria bom se…"; não comprovadas, precisam de descoberta.
- **Solicitações / melhorias** — uma mudança definida num serviço existente.
- **Incidentes / problemas** — algo está quebrado ou inseguro agora; geralmente um caminho operacional separado e mais rápido.
- **Mandatos** — trabalho estatutário, regulatório ou determinado nacionalmente (p. ex., uma exigência de programa nacional do NHS England) com pouca discricionariedade.

Cada tipo merece um caminho posterior diferente, mas todos devem chegar pela mesma porta de entrada e ser registrados no mesmo cadastro de demanda.

A **entrada paralela** (*shadow intake*) — a prima, do lado da demanda, da [TI paralela (*shadow IT*)](https://en.wikipedia.org/wiki/Shadow_IT) — é o antipadrão: a demanda que contorna a porta de entrada — a conversa de corredor, o e-mail direto a um desenvolvedor simpático, o "favorzinho rápido". A entrada paralela é invisível, não governada e a maior ameaça isolada a um sistema justo e seguro.

## Boas práticas

1. **Estabeleça uma porta de entrada única e visível.** Ofereça uma via única e bem divulgada para toda nova demanda — tipicamente um formulário apoiado por uma fila ou ferramenta de chamados — e encaminhe tudo por ela, inclusive os pedidos de líderes seniores. A porta de entrada não precisa ser uma única *equipe*, mas precisa ser um único *registro*. A visibilidade da demanda é impossível se os pedidos vivem em doze caixas de entrada.

2. **Capte a demanda com um formulário leve e estruturado.** Peça apenas o que você precisa para triar: solicitante e serviço, o problema ou o resultado buscado (não a solução), usuários afetados e volumes, qualquer fator de segurança ou estatutário e uma noção aproximada de urgência. Resista a inchar o formulário até virar um caso de negócio completo — uma entrada pesada demais empurra as pessoas de volta aos canais paralelos.

3. **Classifique na porta.** Marque cada item por tipo de demanda (ideia / solicitação / incidente / mandato), serviço de origem e se toca a segurança clínica ou dados pessoais. A classificação é o que permite enviar incidentes por um caminho operacional rápido enquanto as ideias vão para a descoberta, sem que os solicitantes precisem entender a sua maquinaria interna.

4. **Separe o caminho dos incidentes — mas registre-o mesmo assim.** Algo inseguro ou quebrado agora não pode ficar na fila atrás de solicitações de mudança. Encaminhe os incidentes imediatamente ao seu processo operacional / central de serviços, mas garanta que o volume e o padrão dos incidentes permaneçam visíveis para a entrada, porque os incidentes recorrentes costumam ser o sinal mais forte de onde o investimento em mudança deve ir.

5. **Peça só o suficiente de um [caso de negócio](https://en.wikipedia.org/wiki/Business_case) — proporcional ao tamanho.** Para pedidos pequenos, uma frase de benefício esperado basta. Para propostas maiores, use um caso leve de uma página: problema, resultado pretendido e quem se beneficia, tamanho aproximado, riscos principais e o custo de *não* fazer. Reserve o rigor pleno do caso de negócio (Green Book / modelo dos cinco casos do Tesouro) para decisões genuínas de investimento, e não para cada ideia.

6. **Defina e publique um SLA de reconhecimento.** Comprometa-se com um [acordo de nível de serviço](https://en.wikipedia.org/wiki/Service-level_agreement) para o *reconhecimento* — por exemplo, "todo pedido reconhecido em até dois dias úteis, com indicação dos próximos passos e da data esperada de triagem". Reconhecer não é concordar em fazer o trabalho; é a promessa de que o pedido foi visto e será avaliado. Essa única disciplina faz mais do que qualquer outra coisa para matar a entrada paralela, porque as pessoas usam os canais de fundo principalmente quando a porta de entrada parece um buraco negro.

7. **Torne a fila de entrada visível a todos.** Publique o cadastro de demanda — ao menos internamente — para que os solicitantes vejam o seu item, seu estado e sua posição em relação aos outros. A transparência converte "por que ninguém cuidou do meu pedido?" numa resposta de autosserviço e gera confiança na justiça do processo.

8. **Nomeie um responsável e uma cadência para a entrada.** Alguém precisa ser dono da porta de entrada: garantir que os itens estejam completos, corretamente classificados, sem duplicidade e repassados à triagem num ritmo previsível (ver Tópico 2.1). A entrada sem responsável assoreia em poucas semanas.

9. **Torne as vias de entrada acessíveis e equitativas.** As pessoas com as necessidades mais agudas — equipe da linha de frente, prestadores de cuidados sociais e comunidades raramente ouvidas — muitas vezes são as menos capazes de submeter um pedido bem acabado. Ofereça mais de uma forma de entrar, mantenha a linguagem simples e ajude os solicitantes a articular o problema subjacente em vez de pré-especificar uma solução. Um processo de entrada que só os bem dotados de recursos conseguem percorrer inclina silenciosamente todo o portfólio.

10. **Feche o ciclo com os solicitantes.** Diga às pessoas o que aconteceu com o pedido — aceito, mesclado, adiado ou recusado — e por quê, num prazo previsível. A entrada silenciosa destrói a confiança e alimenta a demanda paralela e as gambiarras, ao passo que um retorno honesto e oportuno (mesmo um "não") mantém a porta de entrada crível e reduz as cobranças.

## Perguntas para discutir com a sua equipe

1. **Como saberíamos, de fato, quanta entrada paralela está contornando a nossa porta de entrada neste momento?**
   Esta pergunta importa porque não se governa a demanda que não se vê, e a maioria dos líderes subestima muito o quanto de trabalho entra por conversas de corredor, e-mails diretos a desenvolvedores simpáticos e "favorzinhos rápidos" para interessados bem relacionados. A tensão é que as próprias pessoas que operam a porta de entrada costumam ser as menos cientes do que a contorna; assim, uma resposta honesta exige perguntar aos desenvolvedores e às equipes de entrega em que de fato estão sendo envolvidos, e não apenas ler a fila. Considerem sondagens concretas: auditem uma amostra do trabalho concluído no último trimestre e perguntem "de onde isto se originou e existe um registro de entrada?"; perguntem à equipe da linha de frente e clínica como levantariam uma preocupação hoje e vejam se a porta de entrada sequer aparece na resposta. Uma boa resposta resiste à suposição confortável de que "temos um formulário, então a demanda é visível" e, em vez disso, nomeia canais de fundo específicos, estima seu volume e identifica por que as pessoas os preferem — em geral porque a porta de entrada é mais lenta ou parece um buraco negro. A evidência a procurar é a distância entre a demanda registrada e o trabalho entregue; uma grande distância mede o seu ponto cego, e não a sua capacidade.

2. **Qual é o menor conjunto de campos que podemos exigir na porta sem empurrar as pessoas de volta aos canais paralelos?**
   Esta é uma genuína concessão de projeto, sem almoço grátis: cada campo que você acrescenta melhora a sua capacidade de triar depois, mas eleva o custo de submeter, e acima de certo limiar as pessoas deixam de usar a porta de entrada. Num ambiente de saúde e cuidados, o que está em jogo é mais agudo, porque uma sinalização obrigatória de segurança clínica e de dados pessoais é inegociável, mas um formulário inchado até virar um caso de negócio suprimirá justamente os sinais de segurança precoces e tímidos que você mais quer captar. O debate deve trazer à tona quem são os seus solicitantes mais difíceis de alcançar — equipe de enfermaria da linha de frente e colegas de cuidados sociais sem apoio para redigir propostas — e projetar para o orçamento de esforço deles, e não para o apetite do escritório de portfólio por informação. Ângulos concretos: redijam o formulário e cronometrem-se preenchendo-o como faria um enfermeiro ocupado; distingam os campos necessários para *encaminhar* um item dos necessários para *decidir* sobre ele e adiem estes últimos para as etapas de triagem ou de caso de negócio. Uma resposta forte articula um princípio — captar problema e resultado, não solução; captar o bastante para classificar e reconhecer, nada além — e aceita que alguma informação será buscada depois, em vez de exigida de antemão. A versão honesta admite que um formulário fácil para o coordenador muitas vezes é difícil para o solicitante e escolhe conscientemente a conveniência do solicitante.

3. **Quando um líder sênior tentar encaminhar um pedido contornando a porta de entrada, o que de fato faremos?**
   O desvio executivo é o comportamento com maior probabilidade de fazer ruir uma disciplina de entrada, porque sinaliza a todos que a porta de entrada é para os outros, e importa mais em organizações hierárquicas do NHS e do governo, onde questionar a senioridade é culturalmente difícil. A tensão é real: o líder geralmente tem um pedido legítimo e autoridade genuína, de modo que a resposta não pode ser uma recusa seca de ajudar, mas também não pode ser uma exceção silenciosa que vira a norma em um mês. A equipe deve ensaiar o roteiro específico e a escalação — o coordenador registra o pedido na porta de entrada em nome do líder e redireciona com gentileza os pedidos futuros, e quem tem autoridade para manter essa linha quando houver resistência? Considerem como seria a conformidade executiva visível como sinal positivo: um diretor submetendo publicamente o próprio pedido pelo formulário legitima o processo mais do que qualquer documento de política. Uma boa resposta nomeia uma resposta concreta e repetível, e não a esperança de que "não será um problema", e identifica o patrocinador ou os dois patrocinadores seniores cujo próprio comportamento fará ou desfará a cultura. A resposta desonesta é "nossos líderes não fariam isso" — farão, e o plano precisa sobreviver à primeira vez.

4. **Como garantiremos que a nossa porta de entrada seja genuinamente alcançável pelas pessoas de necessidades mais agudas, e não apenas pelas digitalmente confiantes?**
   Esta pergunta importa porque um processo de entrada molda silenciosamente todo o portfólio, e, se só as equipes bem dotadas de recursos conseguem percorrê-lo, a demanda que você vê é sistematicamente desviada para longe das vozes da linha de frente, dos cuidados sociais e das raramente ouvidas. A tensão é que a mesma estrutura e o mesmo rigor que tornam a demanda governável — formulários, campos, ferramentas de gestão de serviços — também elevam a barreira para uma enfermeira distrital ocupada, um gerente de casa de repouso ou uma equipe voltada ao paciente sem apoio para redigir propostas. Considerem ângulos concretos: quem de fato submeteu pela porta de entrada no último trimestre, e essa população corresponde ao lugar onde o risco clínico e a iniquidade realmente estão? Ofereçam mais de uma forma de entrar — uma ligação telefônica ou uma conversa curta que um coordenador registra por escrito — e verifiquem se a linguagem pressupõe um jargão interno que exclui pessoas de fora. Uma resposta honesta nomeia os grupos hoje sub-representados na fila e se compromete com adaptações específicas para eles, em vez de supor que um único formulário on-line seja neutro. A evidência a procurar é a distribuição demográfica e organizacional de quem levanta demanda, e não apenas o volume total.

5. **Quando dois pedidos se revelam a mesma necessidade subjacente, quem decide que são duplicatas e como protegemos a confiança dos solicitantes ao mesclá-los?**
   A duplicidade é inevitável em qualquer escala — a mesma necessidade de "observações eletrônicas" ou de reconciliação de medicamentos chega de várias enfermarias ou locais — e, sem gestão, infla o backlog aparente e fragmenta o esforço em variantes pela metade. A concessão é que mesclar é um ato de julgamento que pode silenciosamente tirar o direito de voz de um solicitante: a pessoa cujo chamado foi incorporado a outro pode sentir que o seu problema específico foi descartado, especialmente se o item remanescente estiver redigido nas palavras de outra pessoa. A equipe deve decidir onde reside a autoridade de eliminar duplicidades — em geral, o responsável pela entrada — e que evidência justifica chamar duas coisas de "a mesma", porque pedidos superficialmente parecidos às vezes escondem contextos clínicos genuinamente diferentes. Prática concreta: manter cada pedido original rastreável mesmo após uma mesclagem e contar aos dois solicitantes o que aconteceu e por quê, para que a consolidação soe como ser ouvido em conjunto, e não como ser atropelado. Uma boa resposta trata a eliminação de duplicidades como uma disciplina de curadoria, com responsável claro e trilha de auditoria, e não como arrumação silenciosa. A versão desonesta supõe que as duplicatas são óbvias e inofensivas de colapsar, quando, na verdade, a mesclagem descuidada é uma razão comum para as pessoas deixarem de confiar na porta de entrada.

6. **Qual é a nossa política honesta para dizer "não" ou "agora não", e estamos dispostos a tornar a demanda recusada tão visível quanto a aceita?**
   A maioria das conversas sobre entrada se concentra em como o trabalho entra, mas a saúde do sistema depende tanto de como o trabalho é honestamente recusado, porque uma porta de entrada que só sabe dizer "sim" ou "silêncio" assoreará e perderá credibilidade. Na saúde e nos cuidados, o que está em jogo é direto: recusar ou adiar um pedido pode ser a decisão certa diante de um orçamento finito, mas também pode enterrar um sinal real de segurança ou de equidade; por isso o raciocínio deve ser registrado e revisitável, e não perdido. A tensão é cultural — um claro "não, e eis por quê" é mais respeitoso e mais útil do que um indefinido "vamos ver isso", mas é mais difícil de dizer, sobretudo a solicitantes seniores ou clínicos. Considerem ângulos concretos: os itens adiados têm data de revisão e um solicitante pode ver por que o pedido foi recusado e o que mudaria a decisão? Tornar a demanda recusada e adiada visível ao lado da aceita é o que permite à organização aprender com as próprias escolhas e defendê-las perante um ICB ou um auditor. Uma resposta honesta se compromete com um encerramento oportuno e fundamentado para cada item — aceito, mesclado, adiado ou recusado — e aceita que um "não" crível protege a porta de entrada muito mais do que um backlog esperançoso de coisas que ninguém jamais começará.

## Na prática: um exemplo de saúde e cuidados

Um Sistema de Cuidados Integrados (ICS) não tinha forma compartilhada de receber a demanda digital. Os hospitais enviavam e-mails ao diretor do programa; os fornecedores faziam lobby junto a diretores clínicos; um mandato nacional de interoperabilidade chegava por carta; a equipe de enfermaria levantava preocupações de segurança em papel que nunca chegavam à equipe digital. Ninguém sabia dizer quanta demanda existia nem por que determinado trabalho estava em curso.

O ICS introduziu um único formulário de entrada em sua ferramenta de gestão de serviços já existente, com quatro tipos de demanda e uma sinalização obrigatória de "segurança clínica / dados pessoais". Todas as vias — fornecedor, hospital, órgão nacional, linha de frente — foram apontadas para esse formulário; os líderes seniores concordaram em dar o exemplo usando-o eles próprios. Um coordenador de entrada reconhecia cada item em até dois dias úteis e conduzia uma breve sessão semanal para verificar a completude e a classificação antes de passar os itens ao conselho de triagem.

Em um trimestre, três coisas mudaram. Primeiro, o ICS pôde, pela primeira vez, mostrar ao seu conselho um retrato único da demanda digital por tipo e por organização de origem. Segundo, um aglomerado de incidentes da linha de frente sobre um fluxo de reconciliação de medicamentos — antes invisível — emergiu como um candidato claro e fundamentado em evidências à mudança. Terceiro, os pedidos paralelos caíram acentuadamente, porque a porta de entrada agora respondia mais depressa do que os canais de fundo jamais haviam respondido.

## Perspectivas setoriais

### Startup

Uma pequena empresa de saúde digital vive ou morre pelo foco; por isso a porta de entrada tem menos a ver com governar muitos interessados e mais com resistir à atração de cada cliente potencial, investidor e consultor clínico que quer uma funcionalidade sob medida. A entrada aqui é leve — um quadro compartilhado ou uma única planilha —, mas ainda precisa ser um único registro, porque o canal lateral do "é só construir" movido pelo fundador é a versão da startup para a entrada paralela e remodela silenciosamente o roteiro. A restrição de financiamento é o classificador mais agudo: cada item é pesado contra um fôlego financeiro curto, de modo que o campo mais valioso do formulário de entrada é "que resultado de cliente ou regulatório isto destrava?". As sinalizações de segurança clínica e de proteção de dados não podem ser puladas nem nessa escala, porque uma startup que trata dados de pacientes carrega os mesmos deveres da DCB0129 e do UK GDPR que um hospital. A disciplina de dizer "registrado, ainda não iniciado" é o que impede uma empresa promissora de se fragmentar em uma dúzia de pilotos pela metade.

### Pequena empresa

Um pequeno prestador estabelecido — um consultório de clínica geral, uma farmácia comunitária, uma casa de repouso ou uma clínica de unidade única — tem pacientes reais e operações em curso, mas raramente uma função dedicada de TI ou digital; assim, a entrada é um dever que recai sobre um gerente de consultório ou gerente registrado, além de tudo o mais. A porta de entrada aqui é modesta — muitas vezes uma caixa de e-mail compartilhada ou um único livro de registro —, mas ainda importa, porque a demanda chega de clínicos, de um gerente de contas de fornecedor, de uma ação da CQC e de um pedido do ICB ao mesmo tempo, e, sem um registro único, os trabalhos menores e mais barulhentos expulsam os importantes. A restrição vinculante é o tempo das pessoas, e não as rodadas de financiamento: a pergunta de entrada que merece o seu lugar é "isto atende a uma obrigação de segurança do paciente, regulatória ou contratual, ou pode esperar?". Essas organizações carregam os mesmos deveres de segurança clínica e de UK GDPR que um grande hospital, mas precisam cumpri-los com uma fração da capacidade; portanto, uma forma leve e consistente de captar e reconhecer a demanda é o que impede que as obrigações estatutárias sejam perdidas na correria diária. O objetivo realista não é sofisticação, mas confiabilidade — cada pedido anotado uma vez, num só lugar, e examinado num ritmo regular, ainda que simples.

### Grande organização

Um hospital do NHS ou um ICS tem o problema oposto: muitos canais legítimos (enfermarias, serviços corporativos, fornecedores, órgãos nacionais) e fortes correntes políticas, de modo que a porta de entrada única é tanto uma mudança cultural quanto uma ferramenta. A função de entrada costuma ser um coordenador nomeado ou uma pequena equipe dentro de um escritório de portfólio, apoiada por uma plataforma corporativa de gestão de serviços, e sua tarefa mais difícil é convencer os diretores a encaminhar os próprios pedidos por ela, e não ao redor dela. O volume impõe classificação e eliminação de duplicidades reais — o mesmo pedido de "observações eletrônicas" muitas vezes chega cinco vezes, de cinco locais — e a sinalização de segurança precisa se integrar à gestão de riscos clínicos do hospital e ao seu registro de perigos. A responsabilização é externa: um ICB, auditores ou um regulador podem perguntar como qualquer programa foi justificado; assim, o registro de entrada é um artefato de governança, e não apenas uma fila.

### Governo

No nível do NHS England, do DHSC, de um governo descentralizado ou de uma autoridade local, a entrada molda a demanda nacional e o dinheiro público em escala, e boa parte dela chega como mandato e não como solicitação — deveres estatutários, compromissos ministeriais, condições de revisão de gastos. A porta de entrada costuma ser um portfólio formal ou um funil de investimento governado pelo modelo dos cinco casos do Tesouro e pelo Green Book, de modo que até as ideias iniciais são captadas frente a adequação estratégica e relação custo-benefício desde o começo. O apetite por risco é baixo e o escrutínio é alto: o interesse do National Audit Office e do Public Accounts Committee significa que todo item aceito precisa ter origem e justificativa rastreáveis. O desafio é a proporcionalidade — aplicar rigor suficiente para defender o gasto sem uma barreira tão pesada que as vozes da linha de frente e das autoridades locais, que não têm equipes de redação de propostas, fiquem na prática trancadas do lado de fora. A transparência do funil de demanda é, portanto, tanto uma medida de eficiência quanto um dever de equidade.

## Modos de falha comuns

- **A porta de entrada buraco negro.** Existe um formulário, mas os pedidos desaparecem nele sem reconhecimento. As pessoas voltam aos canais de fundo em semanas. *Correção:* um SLA de reconhecimento, cumprido sem concessões.
- **Entrada em formato de solução.** O formulário pergunta "o que você quer que seja construído?" em vez de "que problema você está tentando resolver?", travando uma solução antes da descoberta. *Correção:* captar resultados e problemas, não projetos.
- **Barreira pesada na porta.** Exigir um caso de negócio completo para *submeter* uma ideia suprime bons sinais iniciais e alimenta a entrada paralela. *Correção:* captação proporcional; o rigor vem depois.
- **Desvio executivo.** Líderes encaminham os próprios pedidos fora do processo, sinalizando que a porta de entrada é para os outros. *Correção:* conformidade executiva visível; sem exceções.
- **Incidentes perdidos na fila de mudanças.** Quebras críticas para a segurança esperam atrás de pedidos de melhoria. *Correção:* um caminho de incidentes separado e mais rápido, que a entrada ainda enxerga.
- **Entrada sem responsável.** A fila se enche, mas ninguém a cura. *Correção:* um coordenador nomeado e uma cadência fixa.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerir | Orquestrar |
|---|---|---|---|---|---|
| **Porta de entrada** | Muitos canais informais; muita entrada paralela | Existe um formulário, mas é usado de forma inconsistente; líderes o contornam | Porta de entrada única e divulgada, usada em todas as vias | Uso da porta de entrada medido; taxa de desvio acompanhada e governada com base em meta | A porta de entrada única é a norma cultural; a entrada paralela é rara e questionada |
| **Captação e classificação** | Ad hoc; e-mails em texto livre; sem tipos de demanda | Alguma estrutura; classificação pouco confiável | Formulário estruturado; demanda tipificada e com sinalização de segurança na porta | Precisão da classificação e completude da sinalização de segurança auditadas e asseguradas com base em controles | A classificação conduz o encaminhamento automaticamente; duplicatas mescladas; padrões analisados |
| **Reconhecimento e visibilidade** | Sem SLA; solicitantes cobram; demanda invisível | Reconhecimento no melhor esforço; fila parcialmente visível | SLA de reconhecimento publicado e cumprido; fila visível internamente | Desempenho do SLA reportado com base em meta; violações investigadas e demanda gerida ativamente | SLA medido e reportado; tendências de demanda alimentam a estratégia e o planejamento de capacidade |

## Lista de verificação

- [ ] Existe uma porta de entrada divulgada para toda nova demanda digital.
- [ ] O formulário de entrada capta o problema/resultado, e não apenas uma solução solicitada.
- [ ] Todo item é classificado por tipo de demanda (ideia / solicitação / incidente / mandato).
- [ ] Uma sinalização de segurança clínica e de dados pessoais é obrigatória na entrada.
- [ ] Os incidentes têm um caminho separado e mais rápido, mas permanecem visíveis para a entrada.
- [ ] Existe um SLA de reconhecimento publicado, e ele é medido.
- [ ] A fila de demanda é visível para solicitantes e interessados.
- [ ] Um responsável nomeado cura a entrada numa cadência fixa.
- [ ] O esforço do caso de negócio é proporcional ao tamanho do pedido.
- [ ] Líderes seniores usam a porta de entrada como todos os demais.

## Fontes-chave

- ITIL 4 (AXELOS / PeopleCert) — práticas de Gestão de Demanda e de Gestão de Solicitações de Serviço; o conceito de "porta de entrada única".
- NHS England — DCB0129 *Clinical Risk Management: its Application in the Manufacture of Health IT Systems* (sinalização de segurança das mudanças).
- GOV.UK Service Manual (Government Digital Service) — compreender as necessidades e os problemas dos usuários antes das soluções.
- NHS Digital Service Standard — projetar para as necessidades dos usuários; tornar o trabalho visível.
- HM Treasury — *The Green Book* e o modelo dos cinco casos (casos de negócio proporcionais).
- Reinertsen, D. — *The Principles of Product Development Flow* (gestão de filas e de demanda).

## Referências

1. Demand management — Wikipedia — https://en.wikipedia.org/wiki/Demand_management
2. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
3. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
4. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
5. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
6. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
7. Business case — Wikipedia — https://en.wikipedia.org/wiki/Business_case
8. ITIL 4: Demand Management and Service Request Management practices — AXELOS / PeopleCert — https://www.peoplecert.org/itil
9. DCB0129: Clinical Risk Management: its Application in the Manufacture of Health IT Systems — NHS England — https://digital.nhs.uk/services/clinical-safety/documentation
10. GOV.UK Service Manual — Government Digital Service — https://www.gov.uk/service-manual
11. NHS Service Standard — NHS England — https://service-manual.nhs.uk/standards-and-technology/service-standard
12. The Green Book: appraisal and evaluation in central government (five-case model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government
13. Reinertsen, D. — *The Principles of Product Development Flow* — Celeritas Publishing — https://www.celeritas.com/
