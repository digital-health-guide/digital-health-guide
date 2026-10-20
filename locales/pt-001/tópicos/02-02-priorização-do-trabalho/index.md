# Tópico 2.2 — Priorização do trabalho

**Em uma frase:** A priorização é o ordenamento deliberado e transparente do trabalho que sobreviveu à triagem — equilibrando valor, urgência, risco e esforço frente a uma capacidade finita — para que, a qualquer momento, a organização esteja fazendo as coisas mais valiosas que pode e consiga explicar por quê.

## Por que isso importa na saúde e nos cuidados

A priorização é onde a estratégia se torna real. A verdadeira estratégia de uma organização não é o seu plano publicado, mas a ordem em que ela de fato faz as coisas — e, na saúde e nos cuidados, essa ordem carrega consequências para a segurança, a equidade e o dinheiro público. Se você rebaixa o trabalho de interoperabilidade, um prontuário de cuidados compartilhado emperra; se rebaixa a dívida técnica, um sistema falha às 2 da manhã de um feriado; se rebaixa a correção de acessibilidade, você exclui as pessoas que mais precisam do serviço.

A pressão é estrutural: a demanda sempre excede a capacidade, e boa parte dessa demanda é legítima. Os líderes precisam, portanto, de métodos que tornem as concessões explícitas e defensáveis, e não de um processo em que vence o último e-mail ou em que todo projeto é "prioridade máxima". A priorização transparente também muda o clima político: quando os interessados enxergam os critérios e a ordem, a negociação deixa de ser lobby e passa a ser uma conversa compartilhada sobre valor e custo do atraso. Este tópico segue a entrada (Tópico 2.0) e a triagem (Tópico 2.1); pressupõe que você já tem um backlog visível e avaliado para ordenar, e alimenta o ciclo de vida de entrega (Tópicos 3.4–8) e a gestão de portfólio (Tópico 5.3 — EPPM).

## Conceitos centrais

A **[priorização](https://en.wikipedia.org/wiki/Prioritization)** ordena um backlog ou portfólio; é distinta da triagem (que avaliou e encaminhou cada item isoladamente). A priorização compara os itens *entre si* para uma capacidade finita e refaz essa comparação à medida que a realidade muda.

O **[Custo do Atraso](https://en.wikipedia.org/wiki/Cost_of_delay)** é a lente econômica por baixo dos melhores métodos: quanto custa — em valor, dano ou dinheiro — cada semana em que isto *não* é feito? Tornar explícito o custo do atraso reformula a priorização de "o que é mais importante?" (tudo) para "o que é mais caro de atrasar?" (uma pergunta classificável).

**Arcabouços comuns**, cada um com a sua adequação:

- **WSJF (Weighted Shortest Job First, "trabalho ponderado mais curto primeiro")**, do [Scaled Agile Framework](https://en.wikipedia.org/wiki/Scaled_agile_framework) (SAFe): pontue o Custo do Atraso (valor para o usuário/negócio + criticidade no tempo + redução de risco/habilitação de oportunidade) e divida pelo tamanho do trabalho. O maior WSJF é feito primeiro. Favorece naturalmente o trabalho pequeno, de alto valor e crítico no tempo e ignora o custo irrecuperável.
- **RICE** (Alcance × Impacto × Confiança ÷ Esforço, popularizado pela Intercom): uma pontuação de gestão de produto que tempera o entusiasmo com um fator de Confiança.
- **[MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method)** (Must / Should / Could / Won't-this-time, ou "deve / deveria / poderia / não desta vez"), do [DSDM](https://en.wikipedia.org/wiki/Dynamic_systems_development_method): uma categorização, excelente para delimitar uma versão ou um programa de data fixa, mais fraca como ordenamento fino.
- **Valor versus esforço** (um 2×2): o recurso visual rápido para identificar vitórias rápidas e poços de dinheiro; grosseiro, mas veloz.
- **[Modelo de Kano](https://en.wikipedia.org/wiki/Kano_model)**: classifica as funcionalidades como básicas (indispensáveis), de desempenho ou encantadoras — útil para equilibrar o mínimo esperado e os diferenciais.

Nenhum arcabouço é "correto"; cada um codifica uma definição diferente de valor, e o ato de pontuar em conjunto costuma ser mais valioso do que o número.

**Operação versus mudança** é o equilíbrio em nível de portfólio: o trabalho operacional de "manter as luzes acesas" (operação) versus a nova capacidade (mudança). A priorização precisa abranger ambos, ou o trabalho invisível de operação — incluindo a **[dívida técnica](https://en.wikipedia.org/wiki/Technical_debt)** e a **remediação de segurança** — perde todas as disputas para funcionalidades reluzentes até falhar de forma catastrófica.

**Priorização baseada em capacidade versus em data**: o ordenamento baseado em capacidade preenche uma vazão conhecida e finita (um ritmo sustentável); o ordenamento baseado em data trabalha de trás para a frente a partir de um prazo inamovível (uma entrada em produção regulatória) e usa o MoSCoW para flexibilizar o escopo. A maioria dos portfólios precisa de ambos, aplicados a itens diferentes.

## Boas práticas

1. **Escolha um arcabouço principal e aplique-o de modo consistente.** Escolha o método que se adapta ao seu trabalho — WSJF para um portfólio de mudanças misto com real criticidade no tempo, RICE para backlogs de funcionalidades de produto, MoSCoW para versões de data fixa — e use-o de forma consistente para que as pontuações sejam comparáveis. Trocar de arcabouço a cada item torna o backlog incomparável e convida à manipulação.

2. **Torne explícito o Custo do Atraso, especialmente para o trabalho de segurança e estatutário.** Pergunte de cada item: "quanto custa um mês de atraso?". Para uma correção de segurança ou um prazo regulatório, a resposta costuma ser severa e não linear, e é exatamente por isso que esses itens devem ser pontuados, e não presumidos. O Custo do Atraso é a moeda comum que permite comparar com honestidade um prazo de conformidade e uma melhoria de experiência do usuário.

3. **Reserve capacidade explícita para operação, dívida técnica e segurança.** Não deixe o trabalho de manter as luzes acesas, a dívida técnica e a remediação de segurança/proteção competirem funcionalidade a funcionalidade com a nova capacidade — eles perderão até que algo quebre. Reserve um percentual permanente da capacidade (uma regra prática comum é uma fatia significativa e protegida) para esse trabalho e trate-o como inegociável.

4. **Priorize por resultados e valor, e não pela hierarquia do solicitante.** Pontue com base nos resultados e prioridades declarados da organização (idealmente os seus [OKRs](https://en.wikipedia.org/wiki/Objectives_and_key_results) — ver Tópico 10.0) e não em quem pediu. Quando o item de um interessado sênior pontua baixo, é o sistema funcionando; o arcabouço lhe dá uma base justa e impessoal para ter essa conversa.

5. **Ajuste o método à restrição: capacidade ou data.** Para um fluxo sustentável de mudança, ordene por valor e puxe o trabalho até uma capacidade conhecida. Para uma data inamovível, trabalhe de trás para a frente e use o MoSCoW para proteger os "Musts" e flexibilizar os "Coulds". Confundir os dois — tentar encaixar escopo fixo em tempo fixo e capacidade fixa — é o caminho clássico para um programa fracassado.

6. **Priorize com transparência e negocie às claras.** Publique o backlog ordenado e a pontuação por trás dele. A transparência transforma a priorização de uma série de acordos privados numa negociação compartilhada em que as concessões são visíveis: para subir o seu item, algo mais precisa descer, e todos podem ver o custo. Este é o movimento despolitizador mais poderoso à disposição de um líder de entrega.

7. **Repriorize numa cadência regular — e somente nela.** Defina um ritmo (por exemplo, uma revisão mensal ou trimestral do portfólio, mais refinamentos do backlog mais leves no intervalo) no qual as prioridades são revisitadas à luz de novas evidências. Entre as revisões, mantenha a linha para que as equipes tenham pistas estáveis. A repriorização constante é tão danosa quanto nunca repriorizar — destrói o fluxo e não termina nada.

8. **Proteja-se da manipulação e da falsa precisão.** As pontuações relativas (Fibonacci, tamanhos de camiseta) são estimativas, não verdades; um WSJF de 8,3 não é significativamente melhor do que um de 7,9. Use os números para *informar* uma conversa ordenada, fique atento a insumos inflados e deixe o julgamento experiente anular uma pontuação obviamente perversa — registrando o porquê.

## Perguntas para discutir com a sua equipe

1. **Qual é a nossa resposta honesta a "quanto custa de fato um mês de atraso?" para o trabalho que continuamos adiando?**
   O custo do atraso é a moeda comum que permite comparar com honestidade um prazo de conformidade e um ajuste de experiência do usuário, mas a maioria das organizações nunca o torna explícito e, por isso, cai no padrão de "tudo é importante" — o que não é uma afirmação classificável. Isso importa de forma aguda na saúde e nos cuidados porque o custo de adiar alguns trabalhos é severo e não linear: uma correção de segurança ou uma dependência de interoperabilidade adiada pode ficar inofensiva por meses e depois falhar de modo catastrófico, enquanto uma funcionalidade de conveniência adiada custa quase nada. A equipe deve debater se consegue de fato articular o custo do atraso dos seus principais itens contestados e enfrentar os casos incômodos em que a resposta honesta é "muito pouco" para um projeto popular e "potencialmente um incidente grave" para um invisível. Ângulos concretos: peguem três itens atualmente parados no meio do backlog e forcem uma frase de custo do atraso para cada um; perguntem se a dívida técnica e a remediação de segurança chegaram alguma vez a ser pontuadas pelo custo do atraso ou se simplesmente perdem toda disputa por nunca entrar nela. Uma boa resposta distingue os itens cujo custo do atraso é aproximadamente linear daqueles em que ele dispara num prazo ou num ponto de falha e usa esse formato para justificar a ordem. A versão desonesta se esconde atrás de "tudo é prioridade", que é exatamente a ausência de priorização que esta pergunta pretende expor.

2. **Quanta capacidade estamos dispostos a reservar para operação, dívida técnica e segurança — e vamos defendê-la quando chegar uma nova proposta reluzente?**
   Esta é a concessão que mais confiavelmente dá errado: o trabalho de manter as luzes acesas, a dívida técnica e a remediação de segurança são invisíveis e perdem funcionalidade a funcionalidade para a nova capacidade, até que algo quebre às 2 da manhã de um feriado. O debate não é se se deve proteger alguma capacidade — quase todos concordam em princípio —, mas o percentual específico e, bem mais difícil, se a liderança de fato manterá essa linha na primeira vez em que o empolgante projeto de um patrocinador sênior quiser saquear a reserva. Na saúde e nos cuidados, o que está em jogo inclui a segurança do paciente e a confiabilidade dos sistemas de que os clínicos dependem; assim, tratar a fatia como inegociável é uma postura de segurança, e não apenas boa higiene. Ângulos concretos: olhem para o último grande incidente ou quase-acidente e perguntem se ele remonta a trabalho de operação ou de dívida adiado que nunca venceu uma disputa de prioridade; nomeiem a pessoa com autoridade para recusar um saque da capacidade protegida e testem se ela realmente recusaria. Uma resposta forte se compromete com uma fatia específica e protegida e, de forma crucial, descreve a governança que a mantém protegida sob pressão, em vez de confiar em boas intenções. A versão honesta admite que a reserva só é real se sobreviver ao contato com o interessado mais poderoso da sala.

3. **Quando o item de um interessado sênior pontua baixo, temos a transparência e a coragem para deixar a classificação valer?**
   Priorizar por resultados e não pela hierarquia do solicitante soa óbvio, mas o efeito HiPPO — a opinião da pessoa mais bem paga se sobrepondo em silêncio à pontuação — é a falha padrão em ambientes hierárquicos do NHS e do governo, e é corrosiva justamente por ser silenciosa. A tensão é que um item sênior de pontuação baixa muitas vezes é o sistema funcionando corretamente, mas, sem uma classificação transparente e publicada e a justificativa da pontuação, o líder de entrega não tem base impessoal para ter essa conversa e geralmente cede. A equipe deve debater se o seu backlog e as pontuações são genuinamente visíveis para as organizações solicitantes, porque a negociação aberta das concessões — "para subir o seu, qual item de pontuação maior desce e você está confortável com o custo desse atraso?" — é o movimento despolitizador mais poderoso disponível, e só funciona às claras. Ângulos concretos: lembrem a última vez que um pedido sênior furou a fila e perguntem o que teria acontecido se a classificação fosse pública; considerem guardar a justificativa da pontuação como um registro de governança que vocês poderiam mostrar a um conselho, a um ICB ou a auditores. Uma boa resposta une a transparência (publicar a ordem e as pontuações) a um roteiro ensaiado e impessoal para a conversa de anulação e identifica quem tem autoridade para sustentá-lo. A resposta evasiva trata isso como hipotético; na realidade, acontece quase toda semana, e o plano precisa sobreviver a isso.

4. **Nós nos comprometemos de fato com um único arcabouço de priorização, ou estamos pontuando silenciosamente cada item pelo método que o favorece?**
   Escolher um arcabouço principal e aplicá-lo de modo consistente é o que torna um backlog comparável; no momento em que o WSJF é usado para uma proposta, um palpite de valor versus esforço para outra e "o diretor quer muito" para uma terceira, a ordem deixa de significar qualquer coisa e a manipulação se infiltra. A tensão é que nenhum arcabouço único serve a todo tipo de trabalho — o WSJF cabe a um portfólio de mudanças misto, o RICE a um backlog de funcionalidades de produto, o MoSCoW a uma versão de data fixa —, de modo que o debate honesto é qual é o *seu* método principal e onde um segundo é legitimamente permitido, e não uma válvula de escape conveniente. Na saúde e nos cuidados, isso importa porque um prazo de conformidade, uma funcionalidade pedida por clínicos e uma atualização de banco de dados precisam ser pesados na mesma escala, e só um método consistente permite classificar um item estatutário e um de conveniência sem apelos especiais. Ângulos concretos: auditem as últimas doze decisões de priorização e verifiquem se o mesmo método foi de fato aplicado ou se o método mudou para justificar uma resposta predeterminada; atenção ao "teatro do arcabouço", em que uma pontuação elaborada produz um número sobre o qual ninguém age. Uma boa resposta nomeia o arcabouço principal, explica os casos estreitos e fundamentados em que outro é usado e trata a pontuação como informando uma conversa ordenada, e não como uma verdade. A resposta fraca deixa cada solicitante trazer a própria matemática, o que é indistinguível de não ter método algum.

5. **Somos honestos sobre qual trabalho é limitado pela capacidade e qual é limitado pela data — ou estamos tentando fixar escopo, data e capacidade ao mesmo tempo?**
   A priorização deve corresponder à restrição: um fluxo sustentável de mudança é ordenado por valor e puxado até uma capacidade conhecida, enquanto uma entrada em produção regulatória inamovível é trabalhada de trás para a frente a partir da data, com o MoSCoW protegendo os "Musts" e flexibilizando os "Coulds". O caminho clássico para um programa fracassado é confundir os dois — travar escopo, data e capacidade ao mesmo tempo —, e isso é especialmente sedutor na saúde e nos cuidados, onde um prazo estatutário parece inegociável e os interessados presumem que o escopo completo é igualmente inegociável. A equipe deve debater, item a item, se cada grande trabalho é realmente limitado pela capacidade ou pela data, porque tratar um programa movido por data como se tivesse tempo elástico, ou um fluxo de rotina como se tivesse prazo rígido, prioriza mal tudo o que vem depois. Ângulos concretos: tomem uma entrada em produção inamovível e perguntem quais requisitos são genuinamente "Must" para o mínimo legal e quais são "Should" ou "Could" que foram contrabandeados para o conjunto obrigatório; procurem o programa em que as três restrições estão silenciosamente fixas e nomeiem o que de fato cederá quando a realidade apertar. Uma boa resposta classifica o trabalho por sua restrição vinculante e aplica o método correspondente de forma deliberada, mantendo o fluxo baseado em capacidade e a entrega baseada em data como disciplinas separadas. A resposta irrealista promete escopo total, na data fixa, dentro de capacidade fixa, e espera.

6. **Qual é a nossa cadência de repriorização, e temos a disciplina de manter a ordem estável entre as revisões?**
   As prioridades devem ser revisitadas à luz de novas evidências, mas num ritmo — uma revisão mensal ou trimestral do portfólio, com refinamento mais leve no intervalo —, porque a repriorização constante é tão danosa quanto nunca repriorizar: destrói o fluxo e não termina nada. A tensão é real: a realidade de fato muda, um novo sinal de segurança ou uma mudança de financiamento pode justificar reordenar, mas cada reembaralhamento no meio do percurso custa às equipes a sua pista e deixa trabalho pela metade encalhado. Na saúde e nos cuidados, onde as equipes de entrega costumam estar esticadas e as dependências atravessam várias organizações, a oscilação é cara e desmoralizante; assim, a pista estável entre as revisões é uma questão de produtividade e de retenção tanto quanto de entrega. Ângulos concretos: verifiquem quantas vezes, no último trimestre, o topo do backlog mudou fora de uma revisão agendada e o que foi entregue em consequência; acordem de antemão os critérios estreitos — uma emergência genuína, e não um interessado barulhento — que justificam quebrar a cadência. Uma boa resposta define uma cadência explícita, defende a pista entre as revisões e consegue apontar trabalho que de fato terminou porque a ordem se manteve. A resposta que fracassa reprioriza sempre que chega o último e-mail, confundindo movimento com capacidade de resposta enquanto nada cruza a linha.

## Na prática: um exemplo de saúde e cuidados

A equipe de portfólio digital de um ICB enfrentava doze propostas concorrentes e capacidade para talvez cinco. Historicamente, a ordem havia seguido a senioridade organizacional, e a dívida técnica nunca aparecia. Adotaram o WSJF para o trabalho de mudança e reservaram uma fatia fixa da capacidade para operação, dívida técnica e segurança.

Cada proposta foi pontuada em conjunto — valor de negócio, criticidade no tempo, redução de risco/habilitação de oportunidade e tamanho do trabalho — numa única sessão com vozes de entrega, clínica e finanças. Um prazo estatutário de devolução de dados pontuou muito alto em criticidade no tempo e, sendo de tamanho modesto, subiu ao topo pelo WSJF. Uma grande e popular plataforma de análises pontuou bem em valor, mas seu tamanho a empurrou para baixo na ordem — um resultado que seria impensável sob a classificação por senioridade e que o arcabouço tornou defensável. Uma atualização de banco de dados há muito adiada, antes invisível, foi financiada com a fatia reservada de operação antes que pudesse falhar.

De forma decisiva, o backlog ordenado e suas pontuações foram compartilhados com todas as organizações solicitantes. Quando um hospital pressionou para que sua proposta furasse a fila, a conversa não foi "quem você conhece?", mas "qual desses itens de maior pontuação deve descer e vocês estão confortáveis com o custo desse atraso?". A negociação aconteceu às claras, e o ICB pôde demonstrar ao seu conselho que a ordem refletia valor e custo do atraso, e não política.

## Perspectivas setoriais

### Startup

Uma startup de saúde digital limitada por financiamento prioriza acima de tudo contra o seu fôlego financeiro; por isso o método de ordenação deve ser leve e orientado por valor — um 2×2 de valor versus esforço ou uma pontuação RICE simples costuma bastar, e a elaborada maquinaria do WSJF é um exagero para um backlog de trinta itens. O custo do atraso dominante é existencial: perder a evidência de que uma avaliação do NICE ou um cliente líder precisa pode acabar com a empresa, o que supera nitidamente uma funcionalidade desejável. A disciplina mais difícil é reservar alguma capacidade para a dívida técnica e a remediação de segurança quando cada semana grita pela próxima funcionalidade de receita, mas pulá-la por completo é o que faz um produto jovem travar justamente quando escala. A repriorização é frequente e movida pelo fundador, de modo que o risco é a oscilação — o antídoto é manter uma ordem estável por ao menos um sprint curto, para que algo de fato seja entregue.

### Pequena empresa

Um pequeno prestador estabelecido — um consultório de clínica geral, uma farmácia comunitária, uma casa de repouso ou uma clínica de unidade única — prioriza com quase nenhuma folga: o mesmo punhado de pessoas toca o serviço e qualquer trabalho de mudança; assim, a ordenação precisa ser brutalmente simples, e um 2×2 de valor versus esforço que qualquer um da equipe consiga ler vale mais do que um modelo de pontuação que ninguém tem tempo de manter. O custo do atraso dominante costuma ser estatutário ou movido por segurança — um prazo do toolkit de segurança de dados, uma correção de segurança clínica, uma atualização de sistema obrigatória de um fornecedor nacional — e esses itens devem ficar no topo, porque um pequeno prestador carrega os mesmos deveres de um grande hospital sem os recursos para absorver uma falha. As melhorias discricionárias competem genuinamente com a operação do serviço; assim, a disciplina honesta é proteger uma fatia pequena e regular de tempo para o trabalho inegociável de operação e remediação, em vez de deixá-lo perder toda semana para as demandas voltadas aos pacientes. Com capacidade de TI dedicada escassa ou inexistente, grande parte do "como" é definida por fornecedores e contratos-quadro; portanto, a priorização costuma tratar de sequenciar as mudanças movidas pelo fornecedor e as poucas coisas que o consultório controla, e de manter uma ordem estável por tempo suficiente para que algo termine entre uma semana corrida e a seguinte.

### Grande organização

Um hospital do NHS ou um ICS conduz um portfólio de mudanças misto, com genuína criticidade no tempo e pesadas obrigações de operação, que é exatamente a forma para a qual o WSJF e uma fatia reservada de operação/dívida técnica/segurança foram concebidos. A política é o desafio real: várias organizações patrocinadoras, pressão HiPPO e expectativas herdadas de que a senioridade define a ordem; por isso a transparência do backlog ordenado e de suas pontuações é a principal ferramenta despolitizadora da grande organização. A priorização aqui abrange um escritório de portfólio e precisa conciliar o fluxo baseado em capacidade para a mudança de rotina com programas baseados em data que trabalham de trás para a frente a partir de entradas em produção regulatórias inamovíveis, flexibilizando o escopo por meio do MoSCoW. Como um hospital deve evidenciar relação custo-benefício ao seu conselho, a um ICB e a auditores, a justificativa da pontuação é guardada como um registro de governança, e não descartada depois de tomada a decisão.

### Governo

No NHS England, no DHSC ou num governo descentralizado, a priorização é a gestão de portfólio em escala nacional, formalizada pelo Management of Portfolios (MoP) e pelo modelo dos cinco casos do Tesouro, em que o custo do atraso é medido em saúde populacional, conformidade estatutária e bilhões de libras. Grande parte do portfólio é não discricionária — devoluções obrigatórias, prazos legais, compromissos ministeriais —, de modo que o método deve classificar o *como* e o *quando* do trabalho obrigatório, e não se deve fazê-lo, e os programas de data inamovível dominam. O apetite por risco é baixo e o escrutínio é adversarial: o National Audit Office e o Public Accounts Committee testarão se a ordem refletiu valor e custo do atraso ou mera conveniência política; assim, uma base de priorização explícita e publicada é uma defesa tanto quanto uma ferramenta de gestão. A equidade é uma dimensão estatutária do valor, de modo que um modelo de pontuação governamental deve ponderar o impacto sobre as populações menos atendidas, e não apenas o benefício agregado, ou favorecerá sistematicamente as já bem atendidas.

## Modos de falha comuns

- **Tudo é prioridade um.** Não existe ordem real, de modo que a voz mais alta ou o prazo mais próximo governa. *Correção:* impor uma classificação estrita; sem empates no topo.
- **Operação e dívida técnica sempre perdem.** O trabalho invisível de operação e remediação é esvaziado até falhar. *Correção:* capacidade reservada e protegida.
- **Anulação HiPPO.** A opinião da pessoa mais bem paga anula em silêncio a pontuação toda vez. *Correção:* pontuações transparentes e negociação aberta das concessões.
- **Teatro do arcabouço.** Uma pontuação elaborada produz um número sobre o qual ninguém age. *Correção:* deixar a pontuação informar uma ordem classificada real, sobre a qual se age.
- **Escopo fixo + data fixa + capacidade fixa.** As três restrições travadas, garantindo o fracasso. *Correção:* flexibilizar o escopo via MoSCoW, ou a capacidade, ou a data.
- **Oscilação.** As prioridades mudam toda semana; nada termina. *Correção:* uma cadência definida de repriorização e pistas estáveis entre elas.

## Modelo de maturidade

| Dimensão | Iniciar | Desenvolver | Padronizar | Gerir | Orquestrar |
|---|---|---|---|---|---|
| **Método e base** | Sem método; ordem por senioridade ou prazo | Um arcabouço usado de forma inconsistente ou só para algum trabalho | Um arcabouço principal aplicado de modo consistente; Custo do Atraso considerado | Insumos de pontuação governados e calibrados; decisões de priorização medidas com base nos resultados declarados | Arcabouço ajustado aos resultados/OKRs; métodos baseados em capacidade e em data usados deliberadamente |
| **Equilíbrio operação/mudança e dívida técnica** | Operação e dívida técnica invisíveis; só o trabalho novo é financiado | Alguma consciência de operação/dívida, mas sem capacidade protegida | Capacidade reservada para operação, dívida técnica e segurança | Fatia protegida acompanhada como métrica; remediação de operação/dívida e de segurança assegurada com base em meta | Equilíbrio operação/mudança gerido ativamente e revisto com base no valor |
| **Transparência e cadência** | Prioridades opacas; alteradas de forma reativa e constante | Backlog parcialmente visível; revisões irregulares | Backlog ordenado publicado; cadência fixa de repriorização | Adesão à cadência e rotatividade de repriorização acompanhadas; justificativa da pontuação guardada como registro governado para conselhos e auditores | Negociação aberta das concessões é a norma; cadência estável; pontuações checadas quanto à sanidade com base nos resultados |

## Lista de verificação

- [ ] Um arcabouço principal de priorização é escolhido e aplicado de modo consistente.
- [ ] O Custo do Atraso é explícito, especialmente para o trabalho de segurança e estatutário.
- [ ] A capacidade é reservada para operação, dívida técnica e trabalho de segurança/proteção.
- [ ] Os itens são pontuados com base nos resultados/OKRs, e não na senioridade do solicitante.
- [ ] Métodos baseados em capacidade e em data são usados para os itens certos.
- [ ] O backlog ordenado e sua pontuação são publicados aos interessados.
- [ ] As concessões são negociadas às claras: para subir um, outro desce.
- [ ] A repriorização ocorre numa cadência definida, com pistas estáveis entre elas.
- [ ] As pontuações são tratadas como estimativas; manipulação e falsa precisão são vigiadas.
- [ ] A ordem atual pode ser explicada e defendida perante o conselho.

## Fontes-chave

- Scaled Agile Framework (SAFe) — Weighted Shortest Job First (WSJF) e Custo do Atraso.
- Reinertsen, D. — *The Principles of Product Development Flow* (Custo do Atraso, economia de filas).
- Intercom — o modelo de pontuação RICE (Reach, Impact, Confidence, Effort).
- DSDM / Agile Business Consortium — priorização MoSCoW.
- Kano, N. — o modelo Kano de satisfação do cliente.
- Cabinet Office / AXELOS — Management of Portfolios (MoP) — priorização e equilíbrio de portfólio.
- NHS Digital Service Standard e GOV.UK Service Manual — priorizar as necessidades de usuário mais importantes; OKRs (Doerr, *Measure What Matters*) para alinhamento de resultados.

## Referências

1. Prioritization — Wikipedia — https://en.wikipedia.org/wiki/Prioritization
2. Cost of delay — Wikipedia — https://en.wikipedia.org/wiki/Cost_of_delay
3. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
4. MoSCoW method — Wikipedia — https://en.wikipedia.org/wiki/MoSCoW_method
5. Dynamic systems development method — Wikipedia — https://en.wikipedia.org/wiki/Dynamic_systems_development_method
6. Kano model — Wikipedia — https://en.wikipedia.org/wiki/Kano_model
7. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
8. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
9. Weighted Shortest Job First (WSJF) and Cost of Delay — Scaled Agile Framework (SAFe) — https://framework.scaledagile.com/wsjf
10. Reinertsen, D. — *The Principles of Product Development Flow* — Celeritas Publishing — https://www.celeritas.com/
11. The RICE scoring model (Reach, Impact, Confidence, Effort) — Intercom — https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
12. MoSCoW prioritisation — DSDM / Agile Business Consortium — https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html
13. Management of Portfolios (MoP) — AXELOS / Cabinet Office — https://www.axelos.com/
14. Doerr, J. — *Measure What Matters* (OKRs) — Portfolio/Penguin — https://www.whatmatters.com/
15. The Green Book: appraisal and evaluation in central government (five-case model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government
