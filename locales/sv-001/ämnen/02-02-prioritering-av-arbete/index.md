# Ämne 2.2 — Prioritering av arbete

**I en mening:** Prioritering är den medvetna, transparenta ordningen av det arbete som överlevde triage — som balanserar värde, brådska, risk och insats mot ändlig kapacitet — så att organisationen vid varje ögonblick gör det mest värdefulla den kan, och kan förklara varför.

## Varför detta är viktigt inom hälsa och vård

Prioritering är där strategi blir verklighet. En organisations sanna strategi är inte dess publicerade plan utan den ordning i vilken den faktiskt gör saker — och inom hälsa och vård bär den ordningen konsekvenser för säkerhet, jämlikhet och offentliga medel. Nedprioritera interoperabilitetsarbetet och en gemensam vårdjournal avstannar; nedprioritera teknisk skuld och ett system havererar klockan två på natten en helgdag; nedprioritera tillgänglighetsrättelsen och ni utesluter de människor som mest behöver tjänsten.

Trycket är strukturellt: efterfrågan överstiger alltid kapaciteten, och mycket av den efterfrågan är legitim. Ledare behöver därför metoder som gör avvägningar uttryckliga och försvarbara, inte en process där det sista mejlet vinner eller varje projekt är ”högsta prioritet”. Transparent prioritering ändrar också det politiska vädret: när intressenter kan se kriterierna och ordningen skiftar förhandlingen från lobbying till ett gemensamt samtal om värde och fördröjningskostnad. Detta ämne följer intag (Ämne 2.0) och triage (Ämne 2.1); det förutsätter att ni redan har en synlig, bedömd efterfrågelista att ordna, och det matar leveranslivscykeln (Ämne 3.4–8) och portföljförvaltningen (Ämne 5.3 — Företagsövergripande projektportföljhantering (EPPM)).

## Grundläggande begrepp

**[Prioritering](https://en.wikipedia.org/wiki/Prioritization)** ordnar en efterfrågelista eller portfölj; den är skild från triage (som bedömde och dirigerade varje post isolerat). Prioritering jämför poster *mot varandra* för ändlig kapacitet, och gör om den jämförelsen när verkligheten förändras.

**[Fördröjningskostnad (Cost of Delay)](https://en.wikipedia.org/wiki/Cost_of_delay)** är den ekonomiska lins som ligger under de bästa metoderna: vad kostar det — i värde, skada eller pengar — för varje vecka detta *inte* görs? Att göra fördröjningskostnaden explicit omformulerar prioritering från ”vad är viktigast?” (allt) till ”vad är dyrast att fördröja?” (en rangordningsbar fråga).

**Vanliga ramverk**, vart och ett med en passform:

- **WSJF (Weighted Shortest Job First)**, från [Scaled Agile Framework](https://en.wikipedia.org/wiki/Scaled_agile_framework) (SAFe): poängsätt fördröjningskostnad (användar-/affärsvärde + tidskritikalitet + riskreduktion/möjliggörande av möjligheter) och dividera med jobbets storlek. Högst WSJF görs först. Det gynnar naturligt litet, högvärdigt, tidskritiskt arbete och ignorerar sjunkna kostnader.
- **RICE** (Reach × Impact × Confidence ÷ Effort, populariserad av Intercom): ett produktledningspoäng som dämpar entusiasm med en säkerhetsfaktor (Confidence).
- **[MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method)** (Must / Should / Could / Won't-this-time), från [DSDM](https://en.wikipedia.org/wiki/Dynamic_systems_development_method): en kategorisering, utmärkt för att avgränsa en utgåva eller ett program med fast datum, svagare som finkornig ordning.
- **Värde kontra insats** (en 2×2): den snabba visuella metoden för att upptäcka snabba vinster och pengagrävar; grov men snabb.
- **[Kano-modellen](https://en.wikipedia.org/wiki/Kano_model)**: klassificerar funktioner som grundläggande (måsten), prestanda eller förtjusare — användbar för att balansera insatsvaror mot särskiljande drag.

Inget ramverk är ”korrekt”; vart och ett kodar en olika definition av värde, och själva handlingen att poängsätta tillsammans är ofta mer värdefull än talet.

**Drift kontra förändring** är balansen på portföljnivå: ”håll-lamporna-tända”-driftarbete (drift) kontra ny förmåga (förändring). Prioritering måste spänna över båda, annars förlorar det osynliga driftarbetet — inklusive **[teknisk skuld](https://en.wikipedia.org/wiki/Technical_debt)** och **säkerhets-/skyddsåtgärder** — varje tävling mot glänsande nya funktioner tills det havererar katastrofalt.

**Kapacitetsbaserad kontra datumbaserad** prioritering: kapacitetsbaserad ordning fyller en känd, ändlig genomströmning (ett hållbart tempo); datumbaserad ordning arbetar bakåt från en oflyttbar tidsfrist (en regulatorisk driftsättning) och använder MoSCoW för att flexa omfattningen. De flesta portföljer behöver båda, tillämpade på olika poster.

## Bästa praxis

1. **Välj ett primärt ramverk och tillämpa det konsekvent.** Välj den metod som passar ert arbete — WSJF för en blandad förändringsportfölj med verklig tidskritikalitet, RICE för produktfunktionslistor, MoSCoW för utgåvor med fast datum — och använd den konsekvent så att poäng är jämförbara. Att byta ramverk per post gör efterfrågelistan ojämförbar och inbjuder till manipulation.

2. **Gör fördröjningskostnaden explicit, särskilt för säkerhets- och lagstadgat arbete.** Fråga om varje post: ”vad kostar en månads fördröjning?” För en säkerhetsrättelse eller en regulatorisk tidsfrist är svaret ofta svårt och icke-linjärt, vilket är just varför dessa måste poängsättas, inte antas. Fördröjningskostnaden är den gemensamma valuta som låter en efterlevnadstidsfrist och en förbättring av användarupplevelsen jämföras ärligt.

3. **Reservera uttrycklig kapacitet för drift, teknisk skuld och säkerhet.** Låt inte håll-lamporna-tända-arbete, teknisk skuld och säkerhets-/skyddsåtgärder konkurrera funktion för funktion med ny förmåga — de kommer att förlora tills något går sönder. Öronmärk en stående procentandel av kapaciteten (en vanlig tumregel är en meningsfull, skyddad andel) för detta arbete, och behandla den som oförhandlingsbar.

4. **Prioritera på utfall och värde, inte på begärandens rang.** Poängsätt mot organisationens angivna utfall och prioriteringar (helst dess [OKR](https://en.wikipedia.org/wiki/Objectives_and_key_results) — se Ämne 10.0) snarare än vem som frågade. När en senior intressents post får lågt poäng är det systemet som fungerar; ramverket ger er en rättvis, opersonlig grund för att ha det samtalet.

5. **Matcha metoden mot begränsningen: kapacitet eller datum.** För ett hållbart flöde av förändring, ordna efter värde och dra arbete till en känd kapacitet. För ett oflyttbart datum, arbeta bakåt och använd MoSCoW för att skydda ”Musts” och flexa ”Coulds”. Att blanda ihop de två — att försöka passa fast omfattning i fast tid och fast kapacitet — är den klassiska vägen till ett misslyckat program.

6. **Prioritera transparent och förhandla öppet.** Publicera den rangordnade efterfrågelistan och poängsättningen bakom den. Transparens förvandlar prioritering från en serie privata affärer till en gemensam förhandling där avvägningar är synliga: för att flytta upp er post måste något annat flyttas ned, och alla kan se kostnaden. Detta är det enskilt mest kraftfulla avpolitiserande drag en leveransledare förfogar över.

7. **Omprioritera i en regelbunden kadens — och bara då.** Sätt en rytm (till exempel en månatlig eller kvartalsvis portföljgranskning, plus lättare förfining av efterfrågelistan däremellan) i vilken prioriteringar omprövas mot ny evidens. Mellan granskningar, håll linjen så att team får stabila banor. Ständig omprioritering är lika skadlig som att aldrig omprioritera — den förstör flödet och slutför ingenting.

8. **Skydda mot manipulation och falsk precision.** Relativa poäng (Fibonacci, t-shirtstorlekar) är uppskattningar, inte sanningar; ett WSJF på 8,3 är inte meningsfullt bättre än 7,9. Använd talen för att *informera* ett rangordnat samtal, se upp för uppblåsta indata och låt erfaret omdöme åsidosätta ett uppenbart perverst poäng — samtidigt som ni registrerar varför.

## Frågor att diskutera med ditt team

1. **Vad är vårt ärliga svar på ”vad kostar en månads fördröjning egentligen?” för det arbete vi fortsätter skjuta upp?**
   Fördröjningskostnaden är den gemensamma valuta som låter en efterlevnadstidsfrist och en justering av användarupplevelsen jämföras ärligt, men de flesta organisationer gör den aldrig explicit och faller därför tillbaka på ”allt är viktigt” — vilket inte är ett rangordningsbart påstående. Detta spelar akut roll inom hälsa och vård eftersom kostnaden för att fördröja visst arbete är svår och icke-linjär: en uppskjuten säkerhetsrättelse eller ett interoperabilitetsberoende kan ligga ofarligt i månader och sedan haverera katastrofalt, medan en uppskjuten bekvämlighetsfunktion kostar nästan ingenting. Teamet bör debattera om de faktiskt kan artikulera fördröjningskostnaden för sina främsta omstridda poster, och konfrontera de obekväma fallen där det ärliga svaret är ”mycket litet” för ett populärt projekt och ”potentiellt en allvarlig incident” för ett osynligt. Konkreta vinklar: ta tre poster som för närvarande fastnat mitt i efterfrågelistan och tvinga fram en mening om fördröjningskostnad för var och en; fråga om teknisk skuld och säkerhetsåtgärder någonsin har poängsatts på fördröjningskostnad alls, eller bara förlorar varje tävling genom att aldrig delta. Ett bra svar skiljer poster vars fördröjningskostnad är ungefär linjär från sådana där den spikar vid en tidsfrist eller en haveripunkt, och använder den formen för att motivera ordningen. Den oärliga versionen gömmer sig bakom ”allt är en prioritet”, vilket är just frånvaron av prioritering som denna fråga är avsedd att blottlägga.

2. **Hur mycket kapacitet är vi villiga att öronmärka för drift, teknisk skuld och säkerhet — och kommer vi att försvara den när ett glänsande nytt bud anländer?**
   Detta är den avvägning som mest tillförlitligt går fel: håll-lamporna-tända-arbete, teknisk skuld och säkerhets- eller skyddsåtgärder är osynliga och förlorar funktion för funktion mot ny förmåga tills något går sönder klockan två på natten en helgdag. Debatten gäller inte om en del kapacitet ska skyddas — nästan alla håller med i princip — utan den specifika procentandelen och, långt svårare, om ledningen faktiskt kommer att hålla den linjen första gången en senior sponsors spännande projekt vill plundra öronmärkningen. Inom hälsa och vård inkluderar insatserna patientsäkerhet och tillförlitligheten hos system kliniker är beroende av, så att behandla andelen som oförhandlingsbar är en säkerhetshållning, inte bara god hygien. Konkreta vinklar: se tillbaka på den senaste stora incidenten eller det senaste tillbudet och fråga om det kan spåras till uppskjutet drift- eller skuldarbete som aldrig vann en prioriteringstävling; namnge den person med befogenhet att vägra en plundring av den skyddade kapaciteten och pröva om de verkligen skulle göra det. Ett starkt svar förbinder sig till en specifik, skyddad andel och beskriver, avgörande, den styrning som håller den skyddad under tryck snarare än att lita på goda avsikter. Den ärliga versionen erkänner att öronmärkningen bara är verklig om den överlever mötet med den mäktigaste intressenten i rummet.

3. **När en senior intressents post får lågt poäng, har vi transparensen och modet att låta rangordningen stå?**
   Att prioritera på utfall snarare än begärandens rang låter självklart, men HiPPO-effekten — den högst betalda personens åsikt som i tysthet åsidosätter poängsättningen — är det förvalda felmönstret i hierarkiska NHS- och statliga miljöer, och den är förtärande just för att den är tyst. Spänningen är att en lågpoängsatt senior post ofta är systemet som fungerar rätt, men utan en transparent, publicerad rangordning och dess poängsättningsmotivering har leveransledaren ingen opersonlig grund för att föra det samtalet och kommer vanligen att vika sig. Teamet bör debattera om deras efterfrågelista och poäng är genuint synliga för de begärande organisationerna, eftersom öppen förhandling om avvägningar — ”för att flytta upp er, vilken högre poängsatt post flyttar ned, och är ni bekväma med den fördröjningens kostnad?” — är det enskilt mest kraftfulla avpolitiserande draget, och det fungerar bara i det öppna. Konkreta vinklar: minns senaste gången en senior begäran hoppade över kön och fråga vad som hade hänt om rangordningen varit offentlig; överväg att behålla poängsättningsmotiveringen som en styrningshandling ni kunde visa en styrelse, ett ICB eller revisorer. Ett bra svar parar transparens (publicera ordningen och poängen) med ett repeterat, opersonligt manus för åsidosättandesamtalet, och identifierar vem som har ställningen att hålla det. Det undvikande svaret behandlar detta som hypotetiskt; i verkligheten händer det de flesta veckor, och planen måste överleva det.

4. **Har vi faktiskt förbundit oss till ett prioriteringsramverk, eller poängsätter vi i tysthet varje post efter den metod som smickrar den?**
   Att välja ett primärt ramverk och tillämpa det konsekvent är vad som gör en efterfrågelista jämförbar; i det ögonblick WSJF används för ett bud, en värde-kontra-insats-aning för ett annat och ”direktören vill verkligen ha det” för ett tredje slutar ordningen betyda något och manipulation smyger sig in. Spänningen är att inget enskilt ramverk passar varje slags arbete — WSJF passar en blandad förändringsportfölj, RICE en produktfunktionslista, MoSCoW en utgåva med fast datum — så den ärliga debatten är vilken som är er *primära* metod och var en andra legitimt tillåts snarare än en bekväm nödutgång. Inom hälsa och vård spelar detta roll eftersom en efterlevnadstidsfrist, en klinikerbegärd funktion och en databasuppgradering måste vägas på samma skala, och bara en konsekvent metod låter en lagstadgad post och en bekvämlighetspost rangordnas mot varandra utan särskilda vädjanden. Konkreta vinklar: granska de senaste tolv prioriteringsbesluten och kontrollera om samma metod genuint tillämpades, eller om metoden förskjöts för att motivera ett förutbestämt svar; se upp för ”ramverksteater”, där elaborerad poängsättning producerar ett tal ingen sedan agerar på. Ett bra svar namnger det primära ramverket, förklarar de snäva, principiella fall där ett annat används och behandlar poängen som något som informerar ett rangordnat samtal snarare än som en sanning. Det svaga svaret låter varje begärande ta med sig sin egen matematik, vilket inte går att skilja från att inte ha någon metod alls.

5. **Är vi ärliga om vilket arbete som är kapacitetsbundet och vilket som är datumbundet — eller försöker vi fixera omfattning, datum och kapacitet på en gång?**
   Prioritering måste matcha begränsningen: ett hållbart flöde av förändring ordnas efter värde och dras till en känd kapacitet, medan en oflyttbar regulatorisk driftsättning arbetas bakåt från datumet med MoSCoW som skyddar ”Musts” och flexar ”Coulds”. Den klassiska vägen till ett misslyckat program är att blanda ihop de två — att låsa omfattning, datum och kapacitet samtidigt — och den är särskilt förförisk inom hälsa och vård, där en lagstadgad tidsfrist känns oförhandlingsbar och intressenter antar att hela omfattningen är lika oförhandlingsbar. Teamet bör debattera, post för post, om varje större arbete verkligen är kapacitetsbundet eller datumbundet, eftersom att behandla ett datumdrivet program som om det hade elastisk tid, eller ett vardagligt flöde som om det hade en hård tidsfrist, felprioriterar allt nedströms. Konkreta vinklar: ta en oflyttbar driftsättning och fråga vilka krav som genuint är ”Must” för det lagliga minimum kontra ”Should” eller ”Could” som har smugglats in i den obligatoriska mängden; leta efter programmet där alla tre begränsningar i tysthet är fixerade och namnge vad som faktiskt kommer att ge efter när verkligheten slår till. Ett bra svar klassificerar arbete efter dess bindande begränsning och tillämpar den matchande metoden medvetet, och håller kapacitetsbaserat flöde och datumbaserad leverans som separata discipliner. Det orealistiska svaret utlovar full omfattning, på det fasta datumet, inom fast kapacitet, och hoppas.

6. **Vad är vår omprioriteringskadens, och har vi disciplinen att hålla ordningen stadig mellan granskningar?**
   Prioriteringar måste omprövas mot ny evidens, men i en rytm — en månatlig eller kvartalsvis portföljgranskning med lättare förfining däremellan — eftersom ständig omprioritering är lika skadlig som att aldrig omprioritera: den förstör flödet och slutför ingenting. Spänningen är verklig: verkligheten förändras genuint, en ny säkerhetssignal eller en finansieringsförskjutning kan motivera omordning, men varje omstokning mitt i flykten kostar team deras bana och lämnar halvfärdigt arbete strandat. Inom hälsa och vård, där leveransteam ofta är ansträngda och beroenden spänner över flera organisationer, är hakande dyrt och moralsänkande, så den stabila banan mellan granskningar är en produktivitets- och bibehållandefråga lika mycket som en leveransfråga. Konkreta vinklar: kontrollera hur många gånger under det senaste kvartalet toppen av efterfrågelistan ändrades utanför en schemalagd granskning, och vad som levererades som följd; kom i förväg överens om de snäva kriterier — ett genuint nödläge, inte en högljudd intressent — som motiverar att bryta kadensen. Ett bra svar sätter en uttrycklig kadens, försvarar banan mellan granskningar och kan peka på arbete som faktiskt slutfördes därför att ordningen höll. Det misslyckade svaret omprioriterar så fort det senaste mejlet landar, och förväxlar rörelse med lyhördhet medan ingenting korsar mållinjen.

## I praktiken: ett exempel från hälsa och vård

Ett ICB:s digitala portföljteam stod inför tolv konkurrerande bud och kapacitet för kanske fem. Historiskt hade ordningen följt organisatorisk senioritet, och teknisk skuld förekom aldrig alls. De antog WSJF för förändringsarbete och öronmärkte en fast andel av kapaciteten för drift, teknisk skuld och säkerhet.

Varje bud poängsattes tillsammans — affärsvärde, tidskritikalitet, riskreduktion/möjliggörande av möjligheter och jobbets storlek — i en enda session med röster från leverans, klinik och ekonomi. En lagstadgad tidsfrist för dataredovisning fick mycket hög tidskritikalitet och, eftersom den var blygsam i storlek, steg den till toppen på WSJF. En stor, populär analysplattform fick bra värde men dess storlek tryckte ned den i ordningen — ett resultat som hade varit otänkbart under senioritetsbaserad rangordning, och som ramverket gjorde försvarbart. En länge uppskjuten databasuppgradering, tidigare osynlig, finansierades ur den öronmärkta driftandelen innan den hann haverera.

Avgörande delades den rangordnade efterfrågelistan och dess poäng med alla begärande organisationer. När ett sjukhus drev på för att dess bud skulle hoppa över kön var samtalet inte ”vem känner du?” utan ”vilka av dessa högre poängsatta poster bör flytta ned, och är ni bekväma med den fördröjningens kostnad?” Förhandlingen skedde i det öppna, och ICB kunde belägga för sin styrelse att ordningen speglade värde och fördröjningskostnad, inte politik.

## Sektorperspektiv

### Startup-företag

Ett finansieringsbegränsat digitalt hälsoföretag prioriterar mot marginalen framför allt, så dess ordningsmetod bör vara lätt och värdeledd — en värde-kontra-insats-2×2 eller ett enkelt RICE-poäng räcker vanligen, och elaborerat WSJF-maskineri är överdrivet för en efterfrågelista på trettio poster. Den dominerande fördröjningskostnaden är existentiell: att missa den evidens en NICE-utvärdering eller en ledande kund behöver kan avsluta företaget, vilket kraftigt rangordnar över en trevlig-att-ha-funktion. Den svåraste disciplinen är att reservera någon kapacitet för teknisk skuld och säkerhetsåtgärder när varje vecka skriker efter nästa intäktsfunktion, men att hoppa över den helt är vad som får en ung produkt att fastna just när den skalar. Omprioritering är frekvent och grundardriven, så risken är hakande — motmedlet är att hålla en stabil ordning i åtminstone en kort sprint så att något faktiskt levereras.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem eller en klinik på en enda ort — prioriterar med nästan ingen slack: samma handfull personer driver tjänsten och allt förändringsarbete, så ordningen måste vara skoningslöst enkel, och en värde-kontra-insats-2×2 som vem som helst i teamet kan läsa är värd mer än en poängmodell ingen har tid att underhålla. Den dominerande fördröjningskostnaden är vanligen lagstadgad eller säkerhetsdriven — en tidsfrist för verktyget för datasäkerhet, en klinisk säkerhetsrättelse, en föreskriven systemuppgradering från en nationell leverantör — och dessa måste ligga överst eftersom en liten vårdgivare bär samma plikter som ett stort sjukhus utan resurser att absorbera ett haveri. Diskretionära förbättringar konkurrerar genuint med att driva tjänsten, så den ärliga disciplinen är att skydda en liten, regelbunden tidsandel för det oförhandlingsbara drift- och åtgärdsarbetet snarare än att låta det förlora varje vecka mot patientvänd efterfrågan. Med tunn eller ingen dedikerad IT-kapacitet sätts mycket av ”hur” av leverantörer och ramavtal, så prioritering handlar ofta om att sekvensera leverantörsdrivna förändringar och de få saker praktiken kan kontrollera, och att hålla en stadig ordning tillräckligt länge för att något ska bli färdigt mellan en hektisk vecka och nästa.

### Storföretag

Ett NHS-sjukhus (trust) eller ICS driver en blandad förändringsportfölj med genuin tidskritikalitet och tunga driftförpliktelser, vilket är exakt den form WSJF och en öronmärkt andel för drift/teknisk skuld/säkerhet utformades för. Politiken är den verkliga utmaningen: flera sponsrande organisationer, HiPPO-tryck och äldre förväntningar att senioritet sätter ordningen, så transparens i den rangordnade efterfrågelistan och dess poäng är storföretagets främsta avpolitiserande verktyg. Prioritering här spänner över ett portföljkontor och måste förena kapacitetsbaserat flöde för vardaglig förändring med datumbaserade program som arbetar bakåt från oflyttbara regulatoriska driftsättningar, och flexar omfattningen via MoSCoW. Eftersom ett sjukhus måste belägga valuta för pengarna inför sin styrelse, ett ICB och revisorer behålls poängsättningsmotiveringen som en styrningshandling, inte kastas när beslutet väl är fattat.

### Staten

Vid NHS England, DHSC eller en decentraliserad regering är prioritering portföljförvaltning i nationell skala, formaliserad genom Management of Portfolios (MoP) och Treasurys modell med fem case, där fördröjningskostnaden mäts i befolkningshälsa, lagstadgad efterlevnad och miljarder pund. Mycket av portföljen är icke-diskretionär — föreskrivna redovisningar, rättsliga tidsfrister, ministeråtaganden — så metoden måste rangordna *hur* och *när* för förpliktat arbete snarare än *om* det ska göras, och program med oflyttbart datum dominerar. Riskaptiten är låg och granskningen konfronterande: National Audit Office och Public Accounts Committee kommer att pröva om ordningen speglade värde och fördröjningskostnad eller bara politisk bekvämlighet, så en uttrycklig, publicerad prioriteringsgrund är ett försvar lika mycket som ett ledningsverktyg. Jämlikhet är en lagstadgad dimension av värde, så en statlig poängmodell bör väga in påverkan på de minst betjänade populationerna, inte bara aggregerad nytta, annars kommer den systematiskt att gynna de redan väl betjänade.

## Vanliga felmönster

- **Allt är prioritet ett.** Ingen verklig ordning finns, så den högljuddaste rösten eller närmaste tidsfristen styr. *Åtgärd:* tvinga fram en strikt rangordning; oavgjort är inte tillåtet i toppen.
- **Drift och teknisk skuld förlorar alltid.** Osynligt drift- och åtgärdsarbete svälts tills det havererar. *Åtgärd:* öronmärkt, skyddad kapacitet.
- **HiPPO-åsidosättande.** Den högst betalda personens åsikt åsidosätter i tysthet poängsättningen varje gång. *Åtgärd:* transparenta poäng och öppen förhandling om avvägningar.
- **Ramverksteater.** Elaborerad poängsättning producerar ett tal ingen agerar på. *Åtgärd:* låt poängen informera en verklig, agerad rangordnad ordning.
- **Fast omfattning + fast datum + fast kapacitet.** Alla tre begränsningar låsta, vilket garanterar misslyckande. *Åtgärd:* flexa omfattning via MoSCoW, eller kapacitet, eller datum.
- **Hakande.** Prioriteringar ändras varje vecka; ingenting blir klart. *Åtgärd:* en fast omprioriteringskadens och stabila banor däremellan.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| **Metod och grund** | Ingen metod; ordning efter senioritet eller tidsfrist | Ett ramverk används inkonsekvent eller för visst arbete | Ett primärt ramverk tillämpat konsekvent; fördröjningskostnad beaktas | Poängsättningens indata styrs och kalibreras; prioriteringsbeslut mäts mot angivna utfall | Ramverk trimmat mot utfall/OKR; kapacitets- och datumbaserade metoder används medvetet |
| **Balans drift/förändring och teknisk skuld** | Drift och teknisk skuld osynliga; endast nytt arbete finansieras | Viss medvetenhet om drift/skuld men ingen skyddad kapacitet | Öronmärkt kapacitet för drift, teknisk skuld och säkerhet | Skyddad andel följs som ett mått; drift/skuld och säkerhetsåtgärder kvalitetssäkras mot mål | Balansen drift/förändring förvaltas aktivt och granskas mot värde |
| **Transparens och kadens** | Prioriteringar ogenomskinliga; ändras reaktivt och ständigt | Efterfrågelistan delvis synlig; oregelbundna granskningar | Rangordnad efterfrågelista publicerad; fast omprioriteringskadens | Kadensefterlevnad och omprioriteringshakande följs; poängsättningsmotivering behålls som en styrd handling för styrelser och revisorer | Öppen förhandling om avvägningar är normen; kadens stabil; poäng rimlighetskontrolleras mot resultat |

## Checklista

- [ ] Ett primärt prioriteringsramverk är valt och tillämpas konsekvent.
- [ ] Fördröjningskostnaden görs explicit, särskilt för säkerhets- och lagstadgat arbete.
- [ ] Kapacitet öronmärks för drift, teknisk skuld och säkerhets-/skyddsarbete.
- [ ] Poster poängsätts mot utfall/OKR, inte begärandens senioritet.
- [ ] Kapacitetsbaserade och datumbaserade metoder används för rätt poster.
- [ ] Den rangordnade efterfrågelistan och dess poängsättning publiceras för intressenter.
- [ ] Avvägningar förhandlas öppet: för att flytta en upp flyttas en annan ned.
- [ ] Omprioritering sker i en fast kadens, med stabila banor däremellan.
- [ ] Poäng behandlas som uppskattningar; manipulation och falsk precision bevakas.
- [ ] Den nuvarande ordningen kan förklaras och försvaras inför styrelsen.

## Viktiga källor

- Scaled Agile Framework (SAFe) — Weighted Shortest Job First (WSJF) och Cost of Delay.
- Reinertsen, D. — *The Principles of Product Development Flow* (Cost of Delay, köekonomi).
- Intercom — poängmodellen RICE (Reach, Impact, Confidence, Effort).
- DSDM / Agile Business Consortium — MoSCoW-prioritering.
- Kano, N. — Kano-modellen för kundnöjdhet.
- Cabinet Office / AXELOS — Management of Portfolios (MoP) — portföljprioritering och balans.
- NHS Digital Service Standard & GOV.UK Service Manual — att prioritera de viktigaste användarbehoven; OKR (Doerr, *Measure What Matters*) för utfallsanpassning.

## Referenser

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
