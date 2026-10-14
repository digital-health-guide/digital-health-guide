# Ämne 7.0 — Teamstrukturer, roller och ansvar

**I en mening:** Digital hälso- och vårdleverans lyckas eller misslyckas på hur ni drar gränserna mellan team och hur tydligt ni namnger vem som gör vad — så strukturera team för snabbt, tryggt värdeflöde, bemanna dem tvärprofessionellt och gör ansvar uttryckligt.

## Varför detta är viktigt inom hälsa och vård

Det sätt ni organiserar era team på blir det sätt era tjänster beter sig. **[Conways lag](https://en.wikipedia.org/wiki/Conway%27s_law)** — att ett systems design speglar kommunikationsstrukturen i den organisation som byggde det — är inte en kuriositet inom hälsa och vård; det är en patientsäkerhetsrisk. Fragmenterade team ger fragmenterade vårdjournaler, sköra integrationer och överlämningar där klinisk risk gömmer sig.

Inom NHS och socialtjänsten spenderar ni också offentliga medel och bär lagstadgade plikter: klinisk säkerhet enligt DCB0129/DCB0160, informationsstyrning enligt UK GDPR och den sedvanerättsliga tystnadsplikten samt tillgänglighetsskyldigheter. Dessa plikter kan inte klistras på i slutet. De måste företrädas *inom* teamet, av namngivna personer med befogenhet och tid att fullgöra dem.

Får ni strukturen rätt levererar tvärprofessionella team fungerande programvara som kliniker litar på och patienter kan använda. Får ni den fel får ni upptagna specialister som optimerar sin egen silo medan tjänsten som helhet stannar av — det klassiska mönstret bakom sena, överbudgeterade och i tysthet övergivna digitala program.

## Grundläggande begrepp

**[Tvärprofessionella team](https://en.wikipedia.org/wiki/Interdisciplinarity) (multidisciplinary teams, MDT).** Ett digitalt leveransteam bör innehålla varje disciplin som behövs för att utforma, bygga och driva en tjänst utan ständigt externt beroende — produkt, leverans, design, forskning, teknik, data samt de kliniska och styrningsmässiga perspektiven. Det speglar det kliniska MDT-begrepp personalen redan känner: blandad expertis, delat ansvar för ett utfall.

**Team Topologies.** En modell (Skelton & Pais) som reducerar effektiv teamdesign till fyra grundläggande typer och tre samspelssätt, allt i tjänst av *snabbt värdeflöde*:

- **Strömjusterat team (stream-aligned team)** — organiserat kring en enda värdefull arbetsström (en tjänst, en användarresa, en produkt) och äger den från början till slut. Detta är standardteamtypen; de flesta bör sitta i ett sådant.
- **Plattformsteam (platform team)** — tillhandahåller interna självbetjäningsförmågor (gemensam infrastruktur, en integrationsmotor, en inloggningstjänst, ett API för delad vårdjournal) så att strömjusterade team går snabbare utan att uppfinna dem på nytt.
- **Möjliggörande team (enabling team)** — ett tidsbegränsat team av specialister (t.ex. klinisk säkerhet, tillgänglighet, testautomatisering) som coachar andra att höja en förmåga och sedan drar sig tillbaka.
- **Team för komplicerat delsystem (complicated-subsystem team)** — äger en del som kräver djup specialistkunskap (en riskpoängsalgoritm, ett NHS Spine-gränssnitt) och som skulle överbelasta ett generalistteam.

De tre **samspelssätten** styr hur två team förhåller sig till varandra: **samarbete (collaboration)** (nära samverkan under en definierad period, hög bandbredd, med tolererad ineffektivitet för att upptäcka saker), **X som tjänst (X-as-a-service)** (ett team konsumerar ett annats förmåga med minimalt krångel, den friktionsfria standarden i skala) och **underlättande (facilitating)** (ett team hjälper ett annat att lära). Att namnge sättet förhindrar den tvetydighet som föder förseningar och skuldbeläggning.

**[Kognitiv belastning (cognitive load)](https://en.wikipedia.org/wiki/Cognitive_load).** Ett team kan bara hålla så mycket i huvudet. Team Topologies hävdar att ni bör begränsa den *domän* varje team äger till det det tryggt kan resonera om — en avgörande princip när domänen är klinisk.

**Conways lag och den inverterade Conway-manövern.** Eftersom arkitekturen följer organisationsstrukturen — ett [sociotekniskt system](https://en.wikipedia.org/wiki/Sociotechnical_system)-synsätt som behandlar team och teknik som en enda design — forma team medvetet för att ge den arkitektur ni vill ha. Om ni vill ha en modulär, interoperabel vårdjournal, bygg den inte med ett enda monolitiskt team.

## Bästa praxis

1. **Bemanna ett fullständigt tvärprofessionellt team kring varje tjänst.** Inkludera som minimum en produktchef, en leveranschef, en användarforskare, en tjänste-/interaktionsdesigner, ingenjörer och en data-/analysförmåga, plus namngivet inflytande från klinisk säkerhet och informationsstyrning. Ett team som saknar en disciplin kommer antingen att vänta på någon annan eller hoppa över det arbetet — och det överhoppade arbetet inom hälsa är vanligen säkerhet, tillgänglighet eller styrning.

2. **Gör de flesta team strömjusterade och ge dem ägarskap från början till slut.** Organisera kring en användares resa (t.ex. ”öppenvårdsremiss”) snarare än ett teknikskikt (t.ex. ”databasteamet”). Ägarskap från början till slut förkortar återkopplingsslingor och stoppar de överlämningsglapp där klinisk risk ackumuleras.

3. **Bygg plattformar som produkter, konsumerade som en tjänst.** Behandla er integrationsmotor, identitetstjänst eller API för delad vårdjournal som en intern produkt med eget team, färdplan och användare. Publicera den ”som tjänst” så att strömjusterade team självbetjänar, i stället för att skriva ärenden och vänta.

4. **Använd möjliggörande team för att sprida knapp expertis, inte för att hamstra den.** Kliniska säkerhetsansvariga, tillgänglighetsspecialister och säkerhetsingenjörer är sällsynta. Sätt in dem för att coacha leveransteam till en högre standard och låt dem sedan gå vidare, i stället för att bli en permanent flaskhals alla team köar bakom.

5. **Namnge varje roll och dess beslutsrättigheter uttryckligen.** Använd en ansvarsmodell — [RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (ansvarig för genomförande, slutligt ansvarig, rådfrågad, informerad) eller en enklare uppdelning ”beslutsfattare/rådgivare” — för de beslut som spelar roll: klinisk säkerhetsgodkännande, driftsättning, godkännande av informationsstyrning, utgifter. Tvetydighet här är där ansvaret förångas.

6. **Ge den kliniska säkerhetsansvarige verklig befogenhet och verklig tid.** DCB0129/0160 kräver en namngiven, lämpligt utbildad klinisk säkerhetsansvarig (Clinical Safety Officer) som kan stoppa en release. Gör rollen uttrycklig i teamet, skydda dess tid och se till att den kan säga nej — en klinisk säkerhetsansvarig bara till namnet är ett styrningsmisslyckande som väntar på att hittas av en incident.

7. **Hantera kognitiv belastning genom att avgränsa domänen.** Om ett team äger för många tjänster eller en för komplex klinisk domän, dela det. Se efter signalen: ett team som inte längre med säkerhet kan förklara säkerhetskonsekvenserna av sin egen ändring är överbelastat.

8. **Tillämpa den inverterade Conway-manövern medvetet.** Dra teamgränserna så att de motsvarar den arkitektur och interoperabilitet ni vill ha — modulära team för modulära, standardbaserade (t.ex. [HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)) system. Låt inte ett oavsiktligt organisationsschema designa er vårdjournal åt er.

## Frågor att diskutera med ditt team

1. **Var designar vårt nuvarande organisationsschema redan vår arkitektur åt oss — och är det den arkitektur vi faktiskt vill ha?**
   Conways lag är inte valfri: oavsett formen på våra team kommer systemen att komma att spegla den, så det ärliga första draget är att se på vårdjournalen, integrationerna och överlämningarna vi redan har och fråga vilken teamgräns som gav upphov till varje söm. I hälso- och vårdmiljö är dessa sömmar där klinisk risk gömmer sig — en fragmenterad journal, ett skört Spine-gränssnitt, ett säkerhetsunderlag inget enskilt team äger — så detta är ett patientsäkerhetssamtal, inte ett estetiskt. Spänningen att debattera är att omdragning av teamgränser för att få den arkitektur vi vill ha (den inverterade Conway-manövern) är störande, hotar etablerade revir och skär tvärs genom finansierings- och linjeledningsstrukturer vi kanske inte fullt ut kontrollerar. Överväg att kartlägga två eller tre av era mest smärtsamma integrationer tillbaka till de team som äger vardera änden, och fråga om en strömjusterad gräns helt skulle ha undanröjt överlämningen. Ett bra svar namnger minst en konkret gräns ni skulle flytta, är ärligt om vem som skulle göra motstånd och varför, och skiljer förändringar värda störningen från sådana där ett gränssnitt som tjänst skulle lösa friktionen billigare.

2. **Sitter våra knappa specialister — klinisk säkerhet, informationsstyrning, tillgänglighet — inom team med verklig befogenhet, eller är de externa grindar alla köar bakom?**
   Varje tjänst i den här familjen bär lagstadgade plikter (klinisk säkerhet enligt DCB0129/0160, UK GDPR och den sedvanerättsliga tystnadsplikten, tillgänglighetslagstiftning) som inte kan klistras på i slutet, men dessa förmågor är sällsynta och dyra, vilket drar organisationer mot att hamstra dem centralt. Avvägningen är genuin: bädda in en klinisk säkerhetsansvarig i varje team och ni sprider tunn expertis tills den är utspädd; centralisera den och ni skapar den heroiska flaskhalsen där en person rådfrågas om allt och varje release väntar. Mönstret med möjliggörande team — tidsbegränsade specialister som coachar team att hålla sina egna riskworkshops och sedan drar sig tillbaka — är den föreslagna lösningen, men det fungerar bara om ledningen skyddar specialisternas tid att undervisa snarare än att göra. Se ärligt på er egen releasehistorik: hur ofta sköts driftsättningen upp i väntan på en enda namngiven person, och hade den personen befogenhet och skyddad tid att säga nej tryggt? Ett starkt svar möter knappheten rakt, väljer en medveten ståndpunkt om inbäddning kontra möjliggörande för varje plikt och namnger den specifika befogenhet (makten att stoppa en release) som aldrig får spädas ut hur kapaciteten än sprids.

3. **Hur skulle vi veta att ett team har tagit på sig mer kognitiv belastning än det tryggt kan bära — och vad skulle vi faktiskt göra åt det?**
   Kognitiv belastning är den tysta regulatorn av trygg leverans: ett team kan bara resonera om så mycket klinisk domän och så många tjänster innan dess tillit till säkerhetskonsekvenserna av sina egna ändringar börjar urholkas, och inom hälsa är den urholkningen osynlig tills en incident avslöjar den. Svårigheten är att överbelastning sällan tillkännager sig — den ser ut som något långsammare leverans, fler defekter, mer ”låt mig kolla med någon” och team under press tenderar att absorbera snarare än flagga det, särskilt när det är politiskt kostsamt att dela ett team eller bemanningen är fryst. Debattera vilka era tidiga varningssignaler skulle vara (ett team som inte längre med säkerhet kan förklara säkerhetsunderlaget för sin egen release är en stark) och om ni i dag har någon mekanism som skulle lyfta överbelastning innan leveransen synligt stannar. Beakta också motkraften: att dela team skapar nya gränser och överlämningar, så botemedlet kan återinföra fragmenteringsrisken från fråga ett. Ett ärligt svar enas om konkreta, observerbara signaler snarare än ett vagt ”vi skulle känna det”, namnger vem som har befogenhet att avgränsa ett teams domän eller dela det och erkänner avvägningen mellan belastningslindring och gränsförökning.

4. **Vilka av våra gemensamma förmågor bör drivas som plattformar konsumerade som tjänst, och resurssätter vi dem faktiskt så — eller döper vi bara om en ärendekö?**
   Löftet med ett plattformsteam är att strömjusterade team självbetjänar en integrationsmotor, en identitetstjänst eller ett API för delad vårdjournal utan att skriva ett ärende och vänta, så att hela systemet går snabbare; misslyckandet är att kalla något en ”plattform” medan det förblir en underbemannad central funktion alla fortfarande köar bakom. Avvägningen är verklig: att bygga en förmåga som en genuin intern produkt innebär att ge den ett eget team, färdplan, dokumentation och användare, vilket är en seriös investering som konkurrerar med att leverera användarvända funktioner, och i en kassabegränsad NHS-miljö är den investeringen lätt att skjuta upp i det oändliga. Inom hälsa och vård är insatserna skarpare eftersom de gemensamma förmågorna ofta är de säkerhetskritiska — personmatchningsindexet, FHIR-gränssnitten, granskningsspåret — där ett tunt plattformsteam blir en enskild felpunkt för varje tjänst ovanpå det. Se på de förmågor flera team redan beror av och fråga, för var och en, om samspelet verkligen är friktionsfritt X som tjänst eller ett förklätt samarbete med dolda väntetider. Ett ärligt svar namnger vilka förmågor som genuint motiverar plattformsinvestering nu kontra senare, är tydligt med vem som finansierar och bemannar dem och motstår frestelsen att utropa en plattform som saknar produktägare, färdplan och självbetjäningsväg.

5. **Var förlitar vi oss på upphandlade leverantörer eller lånad personal, och vilka roller måste vi behålla internt för att förbli en kunnig beställare i stället för en urholkad?**
   Mycket digital leverans inom hälsa och vård är utlagd, och en leverantör kan snabbt tillföra kapacitet och specialistkunskap — men om produktägarskapet, den tekniska kvalitetssäkringen och det kliniska säkerhetsgodkännandet alla lämnar byggnaden med avtalet förlorar organisationen förmågan att bedöma vad den säljs, specificera vad den behöver eller tryggt äga resultatet. Spänningen ligger mellan snabbhet och förmåga: bemanningsförstärkning och nyckelfärdiga byggen får något i drift snabbt, men de kan i tysthet urholka den interna muskel som låter er hålla en leverantör till svars, och de levererar ofta komponentformade, överlämningstunga strukturer snarare än strömjusterade team som äger ett utfall. I denna domän grupperas de icke förhandlingsbara behållna rollerna kring ansvar som inte kan delegeras — den ansvarige ägaren (Senior Responsible Owner), den kliniska säkerhetsansvariga som godkänner driftsättning, produktägaren som avgör prioriteringar och tillräcklig teknisk kvalitetssäkring för att granska det leverantörer bygger. Granska er nuvarande leverans och fråga vilka förmågor ni inte skulle kunna återskapa om en leverantör gick sin väg i morgon. Ett bra svar skiljer arbete som genuint är lämpligt att upphandla från den kunniga beställarkärna som måste stanna internt, insisterar på att upphandlade team hålls till utfallsägarskap snarare än konsultuthyrning och namnger de säkerhets- och styrningsbeslut som alltid måste vila hos era egna ansvariga personer.

6. **Hur ska vi veta att vår teamstruktur faktiskt producerar snabbt, tryggt värdeflöde — och vad skulle få oss att rita om den?**
   Teamdesign är ett medel, inte ett mål: poängen med strömjusterade team, plattformar och namngivna samspelssätt är snabbare, tryggare leverans av värde, men organisationer mäter sällan om strukturen levererar det, så omorganisationer sker på politik och magkänsla snarare än evidens. Svårigheten är att välja signaler som speglar flöde och säkerhet utan att kunna spelas — rå hastighet eller genomströmning i berättelsepoäng inbjuder fel beteende, medan flödesmått (ledtid från idé till drift, driftsättningsfrekvens, antal överlämningar per ändring) och säkerhetsindikatorer (hur snabbt risker stängs, om team äger sitt eget säkerhetsunderlag) säger mer om huruvida gränserna hjälper eller stjälper. Det finns en verklig spänning mot stabilitet: ständig omorganisation förstör den teamlängd och det delade kognitiva utrymme som gör leverans trygg, så ni behöver en hög tröskel och tydliga utlösare innan ni ritar om gränser. Diskutera vilken evidens som skulle tala om att en gräns är fel — ihållande väntan mellan team, ett säkerhetsunderlag inget enskilt team äger, en plattform ingen självbetjänar — och vem som har mandat att agera på det. Ett ärligt svar förbinder sig till en liten uppsättning flödes- och säkerhetssignaler ni faktiskt kommer att följa, sätter en medveten tröskel som skyddar teamstabilitet och namnger utlösande villkor och beslutsfattare för varje framtida omformning.

## I praktiken: ett exempel från hälsa och vård

Ett integrerat vårdsystem (ICS) rullar ut en **delad vårdjournal** över akutsjukvård, närsjukvård, psykiatri, primärvård och socialtjänst.

Instinkten är att skapa ett stort ”team för delad vårdjournal”. I stället tillämpar ICS Team Topologies. Ett **plattformsteam** äger journalens kärna: personmatchningsindexet, FHIR-API:erna och integrationsmotorn, publicerade som självbetjäningsförmågor. Flera **strömjusterade team** äger var och ett en verklig användarresa ovanpå den — ”se en patients journal på akuten”, ”socialarbetares skyddsvy”, ”läkemedelsavstämning i primärvården” — och konsumerar plattformen som tjänst. Ett **team för komplicerat delsystem** äger den probabilistiska patientmatchningsalgoritmen, där en falsk matchning är en genuin säkerhetsincident. Ett **möjliggörande team** av specialister på klinisk säkerhet och tillgänglighet roterar genom de strömjusterade teamen och coachar dem att hålla sina egna DCB0160-riskworkshops i stället för att göra det åt dem.

Varje team har en namngiven produktchef, leveranschef och klinisk säkerhetsansvarig, och en RACI gör det tydligt att driftsättning är *slutligt ansvar* för den ansvarige ägaren men *inte kan fortsätta* utan godkännande från den kliniska säkerhetsansvariga och informationsstyrningen. När akutteamet behöver ett nytt datafält är samspelssättet uttryckligt: X som tjänst från plattformsteamet via en dokumenterad API-begäran, inte ett sex veckor långt samarbete. Leveransen blir snabbare och, avgörande, säkerhetsunderlaget för varje resa ägs av det team som levererar den.

## Sektorperspektiv

### Startup-företag

Ett hälsotekniskt startup-företag med tio personer kan inte bemanna fyra skilda teamtyper — det *är* vanligen ett enda strömjusterat team där en person bär flera hattar (en ingenjör som också håller i användarforskning, en klinikergrundare som är den faktiska kliniska säkerhetsansvariga). Prioriteringen är att hålla hela teamet inom ett delat kognitivt utrymme så att beslut går snabbt; en formell RACI är överdrivet när alla sitter i samma rum. Den verkliga risken är grundarflaskhalsen: klinisk säkerhet och informationsstyrning vilar på en upptagen person, och skyldigheter enligt DCB0129/0160 är lätta att skjuta upp. När företaget vinner sitt första NHS-kontrakt bör de första specialistanställningarna vara de som minskar risken i den grinden — en namngiven klinisk säkerhetsansvarig och en ansvarig för informationsstyrning — innan teknikbemanningen skalas upp.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem eller en klinik på en enda ort — har verkliga patienter och löpande verksamhet men sällan ett dedikerat digitalt eller IT-team, så det finns ingen ”teamtopologi” att utforma; praktikchefen eller en klinisk ledare är i praktiken hela leveransförmågan vid sidan av sitt ordinarie arbete. Det realistiska draget är inte att bygga plattforms- och möjliggörande team utan att namnge ansvar uttryckligen på de människor ni redan har — vem är klinisk säkerhetsansvarig för de system ni driftsätter, vem äger informationsstyrningen, vem godkänner en ändring — även om det är deltidshattar på en handfull personal. Eftersom samma lagstadgade plikter (DCB0129/0160, UK GDPR, tillgänglighet) gäller som för ett stort sjukhus är det praktiska mönstret att luta sig mot era leverantörers och ert ICS:s gemensamma plattformar och möjliggörande stöd snarare än att uppfinna dem på nytt, medan ni behåller precis så mycket kunnig-beställarförmåga att ni kan hålla leverantörer till svars. Den enskilt största risken är enpersonsflaskhalsen: om den enda person som förstår det kliniska systemet slutar går både säkerhet och kontinuitet med, så att skriva ned RACI och korsutbilda en andra person betyder mer här än någon formell teammodell.

### Storföretag

Ett stort NHS-sjukhus eller ett hälsotekniskt företag har det motsatta problemet: för många team, dragna längs äldre komponent- och avdelningsgränser, med överlämningar överallt. Det är här en medveten teamdesignmodell förtjänar sin plats — att omforma komponentteam till strömjusterade, upprätta plattformsteam för gemensamma förmågor för vårdjournal och integration och använda möjliggörande team för att sprida knapp expertis inom klinisk säkerhet och tillgänglighet. RACI och uttryckliga beslutsrättigheter blir nödvändiga eftersom det stora antalet intressenter gör informell samordning omöjlig. Den inverterade Conway-manövern är en levande hävstång här: ett decennier gammalt organisationsschema formar redan arkitekturen, så ledare måste rita om teamgränser avsiktligt snarare än låta strukturen designa vårdjournalen åt dem.

### Staten

Ett nationellt organ (NHS England, DHSC) eller en kommun sätter de standarder andra bemannar efter — Government Digital and Data capability framework, Service Standard, DCB0129/0160 — och är ansvarigt inför parlamentet och allmänheten för hur pengar köper teamkapacitet. Strukturer här formas av upphandlings- och finansieringsregler: mycket leverans är utlagd till leverantörer, så de avgörande rollerna att behålla internt är de kunniga-beställarrollerna (produktägarskap, teknisk kvalitetssäkring, klinisk säkerhetsgodkännande) som förhindrar att förmåga urholkas. Ansvaret är formellt och granskningsbart — en namngiven ansvarig ägare, publicerade utgiftskontroller, transparensplikter — så ansvarsmodeller är en fråga om offentlig handling, inte valfri hygien. Den karakteristiska risken är att strukturen förstenas till permanenta programstyrelser och grindar som stryper flödet; motdraget är att hålla leverantörer till strömjusterade, utfallsägande team snarare än konsultuthyrning.

## Vanliga felmönster

- **Komponentteamsfällan.** Team uppdelade efter teknikskikt (”frontend-teamet”, ”databasteamet”) skapar överlämningar för varje funktion och äger inget utfall. Omorganisera kring värdeströmmar.
- **Cargo-kult-Spotify.** Att kopiera ”squads, tribes, chapters, guilds” som etiketter utan den underliggande autonomin, samstämmigheten och plattformsinvesteringen. Spotify-modellen var en ögonblicksbild av ett företag vid en tidpunkt — även Spotify har gått vidare. Låna principer, inte organisationsschemat.
- **Den heroiska flaskhalsen.** En klinisk säkerhetsansvarig, en arkitekt eller en ansvarig för informationsstyrning som rådfrågad part om allt, så att varje team väntar. Omvandla dem till en möjliggörande förmåga som höjer allas kompetens.
- **Styrning som en eftertanke.** Klinisk säkerhet och informationsstyrning representerade som externa grindar snarare än inbäddade teammedlemmar, så att deras invändningar kommer för sent för att kunna åtgärdas billigt.
- **Obegränsade team.** Ett team som fortsätter absorbera tjänster tills ingen förstår helheten. Kognitiv överbelastning visar sig som saktande leverans och urholkad säkerhetstillit.
- **Permanent samarbete.** Två team som ”samarbetar” på obestämd tid är vanligen en saknad gräns. Tidsbegränsa samarbete och gå över till ett rent gränssnitt som tjänst.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Teamform | Uppdelade efter teknikkomponent; överlämningar överallt | Vissa tvärfunktionella team, fortfarande beroendetunga | Strömjusterade team äger tjänster från början till slut | Teamformens hälsa följs mot flödesmått; överlämningar och gränser ses över regelbundet | Teamgränser formar medvetet arkitekturen (inverterad Conway) |
| Tvärprofessionell bemanning | Roller lånas ad hoc från silor | Kärnroller finns, klinisk/informationsstyrning på deltid | Fullt MDT inklusive namngiven klinisk säkerhetsansvarig med befogenhet | Bemanningsglapp mäts mot en förmågebaslinje och bemannas aktivt mot mål | Team självbedömer och fyller förmågeglapp proaktivt |
| Samspelstydlighet | Odefinierat; eskalering via relationer | Vissa processer, fortfarande ärendeköer | Samspelssätt namngivna per beroende | Beroendefriktion och väntetider mäts; SLA och gränssnitt förvaltas mot mål | Sätt ses över och utvecklas; friktionsfria plattformar dominerar |
| Ansvar | Oklart vem som beslutar | RACI finns på papper | RACI levande och använd för nyckelbeslut | Beslutsgenomströmning och godkännandeförseningar följs; ansvar kvalitetssäkras genom granskning | Beslutsrättigheter finjusteras kontinuerligt för att minska fördröjning |
| Kognitiv belastning | Överbelastade team, låg säkerhetstillit | Belastning erkänd men inte förvaltad | Domäner avgränsade till teamets kapacitet | Belastning kvantifierad mot uttryckliga tröskelvärden och styrd som ett förvaltat mått | Belastning övervakas aktivt; team delas före överbelastning |

## Checklista

- [ ] Varje tjänst har ett strömjusterat team som äger den från början till slut.
- [ ] Varje team innehåller, eller har namngiven tillgång till, produkt, leverans, forskning, design, teknik, data, klinisk säkerhet och informationsstyrning.
- [ ] En namngiven, utbildad klinisk säkerhetsansvarig per team har skyddad tid och befogenhet att stoppa en release.
- [ ] Gemensamma förmågor (integration, identitet, API:er för vårdjournal) drivs som interna plattformar konsumerade som tjänst.
- [ ] Knappa specialister arbetar genom tidsbegränsade möjliggörande team, inte permanenta flaskhalsar.
- [ ] En RACI (eller motsvarande) finns för klinisk godkännande, driftsättning, godkännande av informationsstyrning och utgifter, och används faktiskt.
- [ ] Varje beroende mellan team har ett namngivet samspelssätt (samarbete / X som tjänst / underlättande).
- [ ] Teamdomäner är avgränsade till en hanterbar kognitiv belastning; överbelastade team delas.
- [ ] Teamgränser väljs medvetet för att ge den arkitektur och interoperabilitet ni vill ha.

## Viktiga källor

- Team Topologies — Matthew Skelton & Manuel Pais (fyra teamtyper, tre samspelssätt, kognitiv belastning): teamtopologies.com
- NHS Digital Service Standard och NHS Service Manual — tvärprofessionella teamroller och arbetssätt
- GOV.UK Service Manual (GDS) — ”Set up a service team” och vägledning om agil leverans
- Government Digital and Data (tidigare DDaT) Profession Capability Framework — rolldefinitioner: ddat-capability-framework.service.gov.uk
- Standarderna för klinisk riskhantering DCB0129 (tillverkning) och DCB0160 (driftsättning), NHS Digital — rollen som klinisk säkerhetsansvarig
- Conways lag — Melvin Conway, ”How Do Committees Invent?” (1968)
- Spotifys ingenjörskultur (Henrik Kniberg) — squads/tribes/chapters/guilds, läst kritiskt som en tidsbunden modell

## Referenser

1. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
2. Cognitive load — Wikipedia — https://en.wikipedia.org/wiki/Cognitive_load
3. Responsibility assignment matrix (RACI) — Wikipedia — https://en.wikipedia.org/wiki/Responsibility_assignment_matrix
4. Interdisciplinarity — Wikipedia — https://en.wikipedia.org/wiki/Interdisciplinarity
5. Sociotechnical system — Wikipedia — https://en.wikipedia.org/wiki/Sociotechnical_system
6. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
7. Team Topologies: Organizing Business and Technology Teams for Fast Flow — Matthew Skelton & Manuel Pais — https://teamtopologies.com
8. NHS Service Manual and NHS Digital Service Standard — NHS England — https://service-manual.nhs.uk
9. Service Manual — Government Digital Service (GDS), GOV.UK — https://www.gov.uk/service-manual
10. Government Digital and Data Profession Capability Framework — GOV.UK — https://ddat-capability-framework.service.gov.uk
11. Clinical risk management standards DCB0129 and DCB0160 — NHS England — https://digital.nhs.uk/services/clinical-safety
12. "How Do Committees Invent?" (1968) — Melvin E. Conway — http://www.melconway.com/Home/Committees_Paper.html

*Se även Ämne 7.2 — Bemanningsplanering, Ämne 7.3 — Personalstrategi, Ämne 7.5 — Personal- och organisationsutveckling samt Ämne 8.1 — Förändringsledning.*
