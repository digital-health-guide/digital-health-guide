# Emne 7.0 — Teamstrukturer, roller og ansvar

**I én sætning:** Digital sundhedsleverance lykkes eller fejler på, hvordan I trækker grænserne mellem teams, og hvor klart I nævner, hvem der gør hvad — så strukturér teams til hurtigt, sikkert værdiflow, bemand dem tværfagligt, og gør ansvar eksplicit.

## Hvorfor det er vigtigt i sundhed og pleje

Den måde, I organiserer jeres teams på, bliver den måde, jeres tjenester opfører sig på. **[Conways lov](https://en.wikipedia.org/wiki/Conway%27s_law)** — at et systems design afspejler kommunikationsstrukturen i den organisation, der byggede det — er ikke en kuriositet i sundhed og pleje; det er en patientsikkerhedsrisiko. Fragmenterede teams producerer fragmenterede omsorgsjournaler, skrøbelige integrationer og overgange, hvor klinisk risiko gemmer sig.

I NHS og socialplejen bruger I også offentlige penge og bærer lovbestemte pligter: klinisk sikkerhed under DCB0129/DCB0160, informationsstyring under UK GDPR og den almindelige retlige tavshedspligt samt tilgængelighedsforpligtelser. Disse pligter kan ikke boltes på til sidst. De skal være repræsenteret *inde i* teamet af navngivne personer med beføjelse og tid til at opfylde dem.

Får I strukturen rigtig, leverer tværfaglige teams fungerende software, som klinikere stoler på, og patienter kan bruge. Får I den forkert, får I travle specialister, der optimerer deres egen silo, mens tjenesten som helhed går i stå — det klassiske mønster bag forsinkede, overskredne og i det stille opgivne digitale programmer.

## Kernebegreber

**[Tværfaglige teams](https://en.wikipedia.org/wiki/Interdisciplinarity) (MDT’er).** Et digitalt leveranceteam bør indeholde alle de discipliner, der skal til for at designe, bygge og drive en tjeneste uden konstant ekstern afhængighed — produkt, levering, design, forskning, udvikling, data og de kliniske og styringsmæssige perspektiver. Det spejler det kliniske MDT-begreb, personalet allerede kender: blandet ekspertise, delt ansvar for et resultat.

**Team Topologies.** En model (Skelton & Pais), der reducerer effektivt teamdesign til fire grundlæggende typer og tre interaktionsmåder, alle i *hurtigt værdiflows* tjeneste:

- **Strømtilpasset team (stream-aligned)** — organiseret omkring en enkelt værdifuld strøm af arbejde (en tjeneste, et brugerforløb, et produkt) og ejer den fra ende til ende. Det er standardteamtypen; de fleste bør være på et.
- **Platformsteam** — leverer interne selvbetjeningskapabiliteter (fælles infrastruktur, en integrationsmotor, en login-tjeneste, et API til en fælles omsorgsjournal), så strømtilpassede teams går hurtigere uden at genopfinde dem.
- **Understøttende team (enabling)** — et tidsbegrænset team af specialister (f.eks. klinisk sikkerhed, tilgængelighed, testautomatisering), der coacher andre til at løfte en kapabilitet og derefter trækker sig tilbage.
- **Komplekst-delsystem-team** — ejer en del, der kræver dyb specialistviden (en risikoscoringsalgoritme, en NHS Spine-grænseflade), og som ville overbelaste et generalistteam.

De tre **interaktionsmåder** styrer, hvordan to teams forholder sig til hinanden: **samarbejde** (tæt arbejde i en defineret periode, høj båndbredde, tolerance for noget ineffektivitet for at opdage ting), **X-as-a-service** (ét team forbruger et andets kapabilitet med minimalt besvær, den friktionsfattige standard i skala) og **faciliterende** (ét team hjælper et andet med at lære). At nævne måden forhindrer den flertydighed, der avler forsinkelser og skyldfordeling.

**[Kognitiv belastning](https://en.wikipedia.org/wiki/Cognitive_load).** Et team kan kun holde så meget i hovedet. Team Topologies argumenterer for, at I bør begrænse det *domæne*, hvert team ejer, til det, det kan ræsonnere sikkert om — et afgørende princip, når domænet er klinisk.

**Conways lov og det omvendte Conway-greb.** Da arkitektur følger organisationsstruktur — et [sociotekniske system](https://en.wikipedia.org/wiki/Sociotechnical_system)-syn, der behandler teams og teknologi som ét design — så form teams bevidst til at producere den arkitektur, I ønsker. Hvis I vil have en modulær, interoperabel omsorgsjournal, byg den ikke med ét monolitisk team.

## Bedste praksis

1. **Bemand et fuldt tværfagligt team omkring hver tjeneste.** Inkludér som minimum en produktansvarlig, en leveranceleder, en brugerforsker, en service-/interaktionsdesigner, udviklere og en data-/analysekapabilitet samt navngivet input fra klinisk sikkerhed og informationsstyring. Et team, der mangler en disciplin, vil enten vente på en anden eller springe det arbejde over — og det oversprungne arbejde i sundhed er som regel sikkerhed, tilgængelighed eller styring.

2. **Gør de fleste teams strømtilpassede, og giv dem ejerskab fra ende til ende.** Organisér omkring en brugers forløb (f.eks. "ambulant henvisning") frem for et teknologilag (f.eks. "databaseholdet"). Ejerskab fra ende til ende forkorter feedbackløkker og stopper de overgangshuller, hvor klinisk risiko akkumuleres.

3. **Byg platforme som produkter, forbrugt som en tjeneste.** Behandl jeres integrationsmotor, identitetstjeneste eller API til den fælles omsorgsjournal som et internt produkt med sit eget team, sin egen køreplan og sine egne brugere. Udgiv den "as-a-service", så strømtilpassede teams betjener sig selv, frem for at oprette tickets og vente.

4. **Brug understøttende teams til at sprede knap ekspertise, ikke til at hamstre den.** Klinisk sikkerhedsansvarlige, tilgængelighedsspecialister og sikkerhedsudviklere er sjældne. Udsend dem til at coache leveranceteams til en højere standard og gå derefter videre, frem for at blive en permanent flaskehals, hvert team stiller sig i kø ved.

5. **Nævn hver rolle og dens beslutningsret eksplicit.** Brug en ansvarsmodel — [RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (Responsible, Accountable, Consulted, Informed) eller en enklere "beslutter/rådgiver"-opdeling — til de beslutninger, der betyder noget: klinisk sikkerhedsgodkendelse, go-live, informationsstyringsgodkendelse, forbrug. Flertydighed her er der, hvor ansvar fordamper.

6. **Giv den kliniske sikkerhedsansvarlige reel beføjelse og reel tid.** DCB0129/0160 kræver en navngiven, passende uddannet klinisk sikkerhedsansvarlig (CSO), der kan stoppe en udgivelse. Gør rollen eksplicit i teamet, beskyt dens tid, og sørg for, at den kan sige nej — en CSO kun af navn er et styringssvigt, der venter på at blive fundet af en hændelse.

7. **Styr kognitiv belastning ved at afgrænse domænet.** Hvis et team ejer for mange tjenester eller et for komplekst klinisk domæne, så del det. Hold øje med signalet: et team, der ikke længere trygt kan forklare sikkerhedskonsekvenserne af sin egen ændring, er overbelastet.

8. **Anvend det omvendte Conway-greb bevidst.** Tegn teamgrænserne, så de matcher den arkitektur og interoperabilitet, I ønsker — modulære teams til modulære, standardbaserede (f.eks. [HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)) systemer. Lad ikke et tilfældigt organisationsdiagram designe jeres omsorgsjournal for jer.

## Spørgsmål at drøfte med dit team

1. **Hvor designer vores nuværende organisationsdiagram allerede vores arkitektur for os — og er det den arkitektur, vi faktisk ønsker?**
   Conways lov er ikke valgfri: uanset formen på vores teams vil systemerne komme til at spejle den, så det ærlige første træk er at se på den omsorgsjournal, de integrationer og de overgange, vi allerede har, og spørge, hvilken teamgrænse der producerede hver søm. I en sundheds- og plejesammenhæng er de sømme der, hvor klinisk risiko gemmer sig — en fragmenteret journal, en skrøbelig Spine-grænseflade, en sikkerhedscase ingen enkelt team ejer — så dette er en patientsikkerhedssamtale, ikke en æstetisk. Spændingen at debattere er, at det at tegne teamgrænser om for at få den arkitektur, vi ønsker (det omvendte Conway-greb), er forstyrrende, truer etablerede len og skærer på tværs af finansierings- og linjeledelsesstrukturer, vi måske ikke fuldt kontrollerer. Overvej at kortlægge to eller tre af jeres mest smertefulde integrationer tilbage til de teams, der ejer hver ende, og spørg, om en strømtilpasset grænse helt ville have fjernet overgangen. Et godt svar nævner mindst én konkret grænse, I ville flytte, er ærligt om, hvem der ville modsætte sig det og hvorfor, og skelner ændringer, der er forstyrrelsen værd, fra dem, hvor en as-a-service-grænseflade ville rette friktionen billigere.

2. **Sidder vores knappe specialister — klinisk sikkerhed, informationsstyring, tilgængelighed — inde i teams med reel beføjelse, eller er de eksterne porte, alle står i kø ved?**
   Hver tjeneste i denne familie bærer lovbestemte pligter (DCB0129/0160 klinisk sikkerhed, UK GDPR og den retlige tavshedspligt, tilgængelighedslovgivning), der ikke kan boltes på til sidst, men disse kapabiliteter er sjældne og dyre, hvilket trækker organisationer mod at hamstre dem centralt. Afvejningen er reel: indlejr en klinisk sikkerhedsansvarlig i hvert team, og I spreder tynd ekspertise, til den er fortyndet; centralisér den, og I skaber den heroiske flaskehals, hvor én person skal høres om alt, og hver udgivelse venter. Det understøttende team-mønster — tidsbegrænsede specialister, der coacher teams til at køre deres egne farerworkshops og derefter trækker sig — er den foreslåede løsning, men det virker kun, hvis ledelsen beskytter specialisternes tid til at undervise frem for at gøre. Se ærligt på jeres egen udgivelseshistorik: hvor ofte skred go-live, fordi den ventede på en enkelt navngiven person, og havde den person beføjelsen og den beskyttede tid til at sige nej sikkert? Et stærkt svar ser knapheden i øjnene, vælger en bevidst position om indlejre-versus-understøtte for hver pligt og nævner den specifikke beføjelse (magten til at stoppe en udgivelse), der aldrig må fortyndes, uanset hvordan I spreder kapaciteten.

3. **Hvordan ville vi vide, at et team har taget mere kognitiv belastning på, end det kan bære sikkert — og hvad ville vi faktisk gøre ved det?**
   Kognitiv belastning er den stille regulator for sikker levering: et team kan kun ræsonnere om så meget klinisk domæne og så mange tjenester, før dets tillid til sikkerhedskonsekvenserne af sine egne ændringer begynder at erodere, og i sundhed er den erosion usynlig, til en hændelse afslører den. Vanskeligheden er, at overbelastning sjældent annoncerer sig selv — den ser ud som lidt langsommere levering, flere fejl, flere "lad mig lige tjekke med nogen", og teams under pres har tendens til at absorbere frem for at flage det, især når det er politisk dyrt at dele et team, eller headcount er frosset. Debatter, hvad jeres tidlige varselssignaler ville være (et team, der ikke længere trygt kan forklare sikkerhedscasen for sin egen udgivelse, er et stærkt), og om I har nogen mekanisme i dag, der ville bringe overbelastning frem, før leveringen synligt går i stå. Overvej også modtrykket: at dele teams skaber nye grænser og overgange, så kuren kan genindføre fragmenteringsrisikoen fra spørgsmål ét. Et ærligt svar aftaler konkrete, observerbare signaler frem for et vagt "vi ville fornemme det", nævner hvem der har beføjelse til at afgrænse et teams domæne eller dele det og indrømmer afvejningen mellem belastningslettelse og grænseformering.

4. **Hvilke af vores fælles kapabiliteter bør drives som platforme forbrugt as-a-service, og ressourcesætter vi dem faktisk sådan — eller omdøber vi blot en ticketkø?**
   Løftet fra et platformsteam er, at strømtilpassede teams betjener sig selv med en integrationsmotor, en identitetstjeneste eller et API til en fælles omsorgsjournal uden at oprette en ticket og vente, så hele systemet går hurtigere; svigtet er at kalde noget en "platform", mens det forbliver en underbemandet central funktion, alle stadig står i kø ved. Afvejningen er reel: at bygge en kapabilitet som et ægte internt produkt betyder at give det sit eget team, sin egen køreplan, dokumentation og brugere, hvilket er en seriøs investering, der konkurrerer med at levere brugervendte funktioner, og i en kontantbegrænset NHS-sammenhæng er den investering let at udskyde i det uendelige. I sundhed og pleje er indsatsen skarpere, fordi de fælles kapabiliteter ofte er de sikkerhedskritiske — personmatchningsindekset, FHIR-grænsefladerne, revisionssporet — hvor et tyndt platformsteam bliver et enkeltfejlpunkt for hver tjeneste ovenpå. Se på de kapabiliteter, flere teams allerede afhænger af, og spørg for hver, om interaktionen reelt er friktionsfattig X-as-a-service eller et forklædt samarbejde med skjulte ventetider. Et ærligt svar nævner, hvilke kapabiliteter der berettiger platformsinvestering nu versus senere, er klart om, hvem der finansierer og bemander dem, og modstår fristelsen til at erklære en platform, der ikke har nogen produktejer, ingen køreplan og ingen selvbetjeningsvej.

5. **Hvor støtter vi os til kontraherede leverandører eller lånt personale, og hvilke roller må vi beholde internt for at forblive en intelligent kunde frem for en udhulet?**
   Meget digital levering i sundhed og pleje er kontraheret ud, og en leverandør kan hurtigt bringe kapacitet og specialisme — men hvis produktejerskab, teknisk assurance og klinisk sikkerhedsgodkendelse alle forlader bygningen med kontrakten, mister organisationen evnen til at bedømme, hvad den bliver solgt, specificere, hvad den har brug for, eller sikkert eje resultatet. Spændingen er mellem hastighed og kapabilitet: bemandingsforøgelse og nøglefærdige bygninger får noget hurtigt i drift, men de kan i det stille erodere den interne muskel, der lader jer holde en leverandør til regnskab, og de leverer ofte komponentformede, overgangstunge strukturer frem for strømtilpassede teams, der ejer et resultat. I dette domæne klynger de uomtvistelige fastholdte roller sig omkring ansvar, der ikke kan delegeres — Senior Responsible Owner, den kliniske sikkerhedsansvarlige, der godkender go-live, den produktejer, der beslutter prioriteter, og nok teknisk assurance til at inspicere det, leverandører bygger. Undersøg jeres nuværende levering, og spørg, hvilke kapabiliteter I ikke kunne genskabe, hvis en leverandør gik i morgen. Et godt svar skelner arbejde, der reelt er fint at kontraktere, fra den intelligent-kunde-kerne, der må blive internt, insisterer på, at kontraherede teams holdes til resultatejerskab frem for bemandingsagentur og nævner de sikkerheds- og styringsbeslutninger, der altid må ligge hos jeres egne ansvarlige folk.

6. **Hvordan ved vi, at vores teamstruktur faktisk producerer hurtigt, sikkert værdiflow — og hvad ville få os til at tegne den om?**
   Teamdesign er et middel, ikke et mål: pointen med strømtilpassede teams, platforme og nævnte interaktionsmåder er hurtigere, sikrere levering af værdi, men organisationer instrumenterer sjældent, om strukturen leverer det, så omorganiseringer sker på politik og intuition frem for evidens. Vanskeligheden er at vælge signaler, der afspejler flow og sikkerhed uden at blive spillet — rå velocity eller story points-gennemløb inviterer den forkerte adfærd, mens flowmetrikker (gennemløbstid fra idé til drift, udrulningsfrekvens, antal overgange pr. ændring) og sikkerhedsindikatorer (hvor hurtigt farer lukkes, om teams ejer deres egen sikkerhedscase) fortæller mere om, om grænser hjælper eller skader. Der er en reel spænding med stabilitet: konstant omorganisering ødelægger den teamlevetid og det delte kognitive rum, der gør levering sikker, så I har brug for en høj tærskel og klare udløsere, før I tegner grænser om. Drøft, hvilken evidens der ville fortælle jer, at en grænse er forkert — vedvarende ventetider på tværs af teams, en sikkerhedscase ingen enkelt team ejer, en platform ingen betjener sig selv af — og hvem der er bemyndiget til at handle på det. Et ærligt svar forpligter sig til et lille sæt flow-og-sikkerhedssignaler, I faktisk vil følge, fastsætter en bevidst tærskel, der beskytter teamstabilitet, og nævner udløserbetingelserne og beslutningstageren for enhver fremtidig omformning.

## I praksis: et eksempel fra sundhed og pleje

Et integreret plejesystem (ICS) udruller en **fælles omsorgsjournal** på tværs af akut, kommunal, psykiatrisk, primær og social pleje.

Instinktet er at oprette ét stort "fælles omsorgsjournal-team". I stedet anvender ICS’et Team Topologies. Et **platformsteam** ejer journalens kerne: personmatchningsindekset, FHIR-API’erne og integrationsmotoren, udgivet som selvbetjeningskapabiliteter. Flere **strømtilpassede teams** ejer hver et reelt brugerforløb ovenpå — "se en patients journal på skadestuen", "socialarbejderens beskyttelsesvisning", "praktiserende lægers medicinafstemning" — og forbruger platformen as-a-service. Et **komplekst-delsystem-team** ejer den probabilistiske patientmatchningsalgoritme, hvor en falsk match er en reel sikkerhedshændelse. Et **understøttende team** af kliniske sikkerheds- og tilgængelighedsspecialister roterer gennem de strømtilpassede teams og coacher dem til at køre deres egne DCB0160-farerworkshops frem for at gøre det for dem.

Hvert team har en navngiven produktansvarlig, leveranceleder og klinisk sikkerhedsansvarlig, og en RACI gør klart, at go-live er *ansvaret* hos Senior Responsible Owner, men *ikke kan fortsætte* uden godkendelse fra CSO og informationsstyring. Når skadestueholdet har brug for et nyt datafelt, er interaktionsmåden eksplicit: X-as-a-service fra platformsteamet via en dokumenteret API-anmodning, ikke et seks ugers samarbejde. Leveringen er hurtigere og, afgørende, sikkerhedscasen for hvert forløb ejes af det team, der leverer det.

## Sektorperspektiver

### Startup

En digital sundhedsstartup på ti personer kan ikke bemande fire forskellige teamtyper — den *er* som regel ét enkelt strømtilpasset team, hvor én person bærer flere hatte (en udvikler, der også kører brugerforskning, en kliniker-grundlægger, der er de facto klinisk sikkerhedsansvarlig). Prioriteten er at holde hele teamet inde i ét delt kognitivt rum, så beslutninger er hurtige; en formel RACI er overkill, når alle er i samme rum. Den reelle risiko er grundlæggerflaskehalsen: klinisk sikkerhed og informationsstyring hviler på én travl person, og DCB0129/0160-forpligtelser er lette at udskyde. Når virksomheden vinder sin første NHS-kontrakt, bør de første specialistansættelser være dem, der de-risikerer den port — en navngiven CSO og en informationsstyringsleder — før udviklingsheadcount skaleres.

### Lille virksomhed

En etableret lille udbyder — en lægepraksis, et lokalt apotek, et plejehjem eller en enkelt klinik — har reelle patienter og løbende drift, men sjældent et dedikeret digitalt eller it-team, så der er ingen "teamtopologi" at designe; praksislederen eller en klinisk leder er reelt hele leveringskapabiliteten ved siden af sit daglige arbejde. Det realistiske træk er ikke at bygge platforms- og understøttende teams, men at nævne ansvar eksplicit på de mennesker, I allerede har — hvem er klinisk sikkerhedsansvarlig for de systemer, I udruller, hvem ejer informationsstyring, hvem godkender en ændring — selv om det er deltidshatte på en håndfuld personale. Fordi de samme lovbestemte pligter (DCB0129/0160, UK GDPR, tilgængelighed) gælder som for et stort hospital, er det praktiske mønster at læne sig op ad jeres leverandørers og jeres ICS’s fælles platforme og understøttende støtte frem for at genopfinde dem, mens I beholder netop nok intelligent-kunde-kapabilitet til at holde leverandører til regnskab. Den største enkelte risiko er enkeltpersonflaskehalsen: hvis den eneste, der forstår det kliniske system, forlader jer, går både sikkerhed og kontinuitet med, så at skrive RACI’en ned og krydsuddanne en anden person betyder mere her end nogen formel teammodel.

### Stor virksomhed

Et stort NHS-hospital eller sundhedsteknologifirma har det modsatte problem: for mange teams, tegnet langs legacy-komponent- og afdelingslinjer, med overgange overalt. Her tjener en bevidst teamdesignmodel sin plads — at omforme komponentteams til strømtilpassede, oprette platformsteams til fælles omsorgsjournal- og integrationskapabiliteter og bruge understøttende teams til at sprede knap klinisk sikkerheds- og tilgængelighedsekspertise. RACI og eksplicit beslutningsret bliver afgørende, fordi det rene antal interessenter gør uformel koordinering umulig. Det omvendte Conway-greb er en levende løftestang her: et årtier gammelt organisationsdiagram former allerede arkitekturen, så ledere skal tegne teamgrænser om bevidst frem for at lade strukturen designe omsorgsjournalen for dem.

### Myndighed

Et nationalt organ (NHS England, DHSC) eller en lokal myndighed fastsætter de standarder, andre bemander efter — Government Digital and Data-kapabilitetsrammen, Service Standard, DCB0129/0160 — og er ansvarlig over for parlamentet og offentligheden for, hvordan penge køber teamkapacitet. Strukturer her formes af indkøbs- og finansieringsregler: meget levering er kontraheret til leverandører, så de afgørende roller at beholde internt er de intelligent-kunde-roller (produktejerskab, teknisk assurance, klinisk sikkerhedsgodkendelse), der forhindrer kapabilitet i at blive udhulet. Ansvar er formelt og reviderbart — en navngiven Senior Responsible Owner, offentliggjorte udgiftskontroller, gennemsigtighedspligter — så ansvarsmodeller er et spørgsmål om offentlig registrering, ikke valgfri hygiejne. Den karakteristiske risiko er, at strukturen forstener til permanente programbestyrelser og porte, der kvæler flowet; modtrækket er at holde leverandører til strømtilpassede, resultatejende teams frem for bemandingsagenturer.

## Typiske fejlmønstre

- **Komponentteam-fælden.** Teams delt efter teknologilag ("frontend-holdet", "databaseholdet") skaber overgange på hver funktion og ejer intet resultat. Omorganisér omkring værdistrømme.
- **Cargo cult-Spotify.** At kopiere "squads, tribes, chapters, guilds" som etiketter uden den underliggende autonomi, afstemning og platformsinvestering. Spotify-modellen var et øjebliksbillede af ét firma på ét tidspunkt — selv Spotify er gået videre. Lån principper, ikke organisationsdiagrammet.
- **Den heroiske flaskehals.** Én CSO, én arkitekt eller én informationsstyringsleder som part, der skal høres om alt, så hvert team venter. Omdan dem til en understøttende kapabilitet, der løfter alles kompetence.
- **Styring som eftertanke.** Klinisk sikkerhed og informationsstyring repræsenteret som eksterne porte frem for indlejrede teammedlemmer, så deres bekymringer ankommer for sent til at kunne handles på billigt.
- **Ubegrænsede teams.** Et team, der bliver ved med at absorbere tjenester, til ingen forstår helheden. Kognitiv overbelastning viser sig som langsommere levering og eroderende sikkerhedstillid.
- **Permanent samarbejde.** To teams, der "samarbejder" på ubestemt tid, er som regel en manglende grænse. Tidsbegræns samarbejde, og gå over til en ren as-a-service-grænseflade.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Teamform | Delt efter teknologikomponent; overgange overalt | Nogle tværfaglige teams, stadig afhængighedstunge | Strømtilpassede teams ejer tjenester fra ende til ende | Teamformens sundhed fulgt mod flowmetrikker; overgange og grænser gennemgået i rytme | Teamgrænser former bevidst arkitekturen (omvendt Conway) |
| Tværfaglig bemanding | Roller lånt ad hoc fra siloer | Kerneroller til stede, klinisk/informationsstyring på deltid | Fuldt MDT inkl. navngiven CSO med beføjelse | Bemandingshuller målt mod en kapabilitetsbaseline og aktivt ressourcesat til mål | Teams selvvurderer og fylder kapabilitetshuller proaktivt |
| Interaktionsklarhed | Udefineret; eskalering via relationer | Nogle processer, stadig ticketkøer | Interaktionsmåder nævnt pr. afhængighed | Afhængighedsfriktion og ventetider målt; SLA’er og grænseflader styret mod mål | Måder gennemgået og udviklet; friktionsfattige platforme dominerer |
| Ansvar | Uklart, hvem der beslutter | RACI findes på papiret | RACI levende og brugt til nøglebeslutninger | Beslutningsgennemløb og godkendelsesforsinkelser fulgt; ansvar kvalitetssikret gennem revision | Beslutningsret løbende tunet for at reducere forsinkelse |
| Kognitiv belastning | Overbelastede teams, sikkerhedstilliden lav | Belastning erkendt, men ikke styret | Domæner afgrænset til teamkapacitet | Belastning kvantificeret mod eksplicitte tærskler og styret som en styret metrik | Belastning aktivt overvåget; teams delt før overbelastning |

## Tjekliste

- [ ] Hver tjeneste har et strømtilpasset team, der ejer den fra ende til ende.
- [ ] Hvert team indeholder eller har navngiven adgang til produkt, levering, forskning, design, udvikling, data, klinisk sikkerhed og informationsstyring.
- [ ] En navngiven, uddannet klinisk sikkerhedsansvarlig pr. team har beskyttet tid og beføjelse til at stoppe en udgivelse.
- [ ] Fælles kapabiliteter (integration, identitet, omsorgsjournal-API’er) drives som interne platforme forbrugt as-a-service.
- [ ] Knappe specialister arbejder gennem tidsbegrænsede understøttende teams, ikke permanente flaskehalse.
- [ ] En RACI (eller tilsvarende) findes for klinisk godkendelse, go-live, informationsstyringsgodkendelse og forbrug og bruges faktisk.
- [ ] Hver afhængighed på tværs af teams har en navngiven interaktionsmåde (samarbejde / X-as-a-service / faciliterende).
- [ ] Teamdomæner er afgrænset til en håndterbar kognitiv belastning; overbelastede teams deles.
- [ ] Teamgrænser er valgt bevidst for at producere den arkitektur og interoperabilitet, I ønsker.

## Centrale kilder

- Team Topologies — Matthew Skelton & Manuel Pais (fire teamtyper, tre interaktionsmåder, kognitiv belastning): teamtopologies.com
- NHS Digital Service Standard og NHS Service Manual — tværfaglige teamroller og arbejdsmåder
- GOV.UK Service Manual (GDS) — "Set up a service team" og vejledning i agil levering
- Government Digital and Data (tidligere DDaT) Profession Capability Framework — rolledefinitioner: ddat-capability-framework.service.gov.uk
- Clinical Risk Management-standarderne DCB0129 (fremstilling) og DCB0160 (udrulning), NHS Digital — rollen som klinisk sikkerhedsansvarlig
- Conways lov — Melvin Conway, "How Do Committees Invent?" (1968)
- Spotifys ingeniørkultur (Henrik Kniberg) — squads/tribes/chapters/guilds, læst kritisk som en model fra et bestemt tidspunkt

## Referencer

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

*See also Topic 7.2 — Workforce Planning, Topic 7.3 — Workforce Strategy, Topic 7.5 — People & Organisational Development, and Topic 8.1 — Change Management.*
