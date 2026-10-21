# Emne 1.1 — Driftsmodellen

**I én sætning:** En målrettet driftsmodel (TOM) er det bevidste design af, hvordan din organisations strategi flyder gennem værdistrømme, kapabiliteter, teams, styring, teknologi, data og leverandører for at levere digitale sundheds- og plejeresultater – og at få dens form rigtig afgør, om alt nedstrøms bliver hurtigt og sikkert eller langsomt og skrøbeligt.

## Hvorfor det er vigtigt i sundhed og pleje

De fleste digitale sundhedsorganisationer fejler ikke af mangel på talent eller teknologi; de fejler, fordi deres driftsmodel arbejder imod dem. Finansiering er knyttet til tidsbegrænsede projekter, beslutningsrettigheder er uklare, og hvert team genopbygger den samme infrastruktur til login, integration og revisionsspor. Resultatet er dobbelte omkostninger for offentlige midler, inkonsekvent klinisk sikkerhed og tjenester, der ikke kan dele data på tværs af et integreret plejesystem (ICS).

En driftsmodel er særegen på dette område, fordi den skal forene konkurrerende goder. Den skal være **føderal nok** til at respektere selvstændige organisationers autonomi – hospitaler, kommuner, lægepraksis – men samtidig **sammenhængende nok** til at give en patient én sikker oplevelse på tværs af dem. Den skal afveje **drift** (at holde kliniske systemer sikkert tilgængelige) mod **forandring** (at forbedre dem), når nedetid kan påvirke behandlingen. Og den skal bruge penge forholdsmæssigt: assurance tung nok til offentlig ansvarlighed og klinisk sikkerhed, men let nok til ikke at kvæle iteration. TOM’en er stedet, hvor disse afvejninger gøres eksplicitte i stedet for at blive overladt til tilfældighederne.

## Kernebegreber

**Lagene i en [driftsmodel](https://en.wikipedia.org/wiki/Operating_model).** En brugbar TOM er en stak, hvor hvert lag tjener det ovenfor:

- **Strategi og resultater** — de målbare befolknings- og serviceresultater, du eksisterer for at forbedre (ofte udtrykt som [OKR’er](https://en.wikipedia.org/wiki/Objectives_and_key_results); se emne 1.3 — Evidensbaserede beslutninger).
- **[Værdistrømme](https://en.wikipedia.org/wiki/Value_stream)** — de ende-til-ende-flows, der leverer værdi til en bruger, f.eks. "henvis, triagér og behandl en patient" – organiseret omkring borgerens forløb, ikke organisationsdiagrammet.
- **Kapabiliteter** — de ting, du skal kunne (identitet, tidsbestilling, klinisk dokumentation, analyse). Kapabiliteter er stabile, selv når løsninger skifter.
- **Teams** — de mennesker, der er organiseret til at levere kapabiliteter og værdistrømme (se Team Topologies nedenfor).
- **Styring og beslutningsrettigheder** — hvem der beslutter hvad, og hvordan assurance anvendes.
- **Teknologi og data** — de platforme, standarder og dataarkitektur, teamsene bygger på.
- **Leverandører** — det marked, du køber fra, og hvordan du forvalter det.

Design oppefra og ned (strategi → værdistrømme → kapabiliteter) holder teams og teknologi afstemt efter resultater frem for efter arvede strukturer.

**Centraliserede, føderale og platformsmodeller.** En **centraliseret** model koncentrerer leverancen i ét team eller ét armslængdeorgan: ensartet og billig at standardisere, men en flaskehals og ofte fjern fra lokale behov. En **føderal** model uddelegerer leverancen til hospitaler og lokalområder: lydhør og lokalt ejet, men tilbøjelig til dobbeltarbejde og divergens. En **platforms**model er det forsonende mønster: et centralt team leverer fælles, genbrugelige kapabiliteter (identitet, interoperabilitet, hosting, designsystem) som en *platform*, og føderale teams bygger oven på i fart. De fleste modne sundhedssystemer ender med "platform plus føderation".

**Team Topologies.** Rammeværket navngiver fire teamtyper – strømorienterede (ejer en værdistrøm), platform (leverer selvbetjente kapabiliteter), understøttende (coacher andre op i en kapabilitet) og komplicerede delsystemer (dybt specialistarbejde, f.eks. en algoritme) – og understreger friktionsfri interaktion mellem dem. Det passer klart til platformsmodellen: platformsteams mindsker den kognitive belastning på strømorienterede teams, så de kan fokusere på bruger- og klinisk værdi.

**Drift versus forandring.** *Drift* er at holde tjenester i drift sikre og tilgængelige; *forandring* er at forbedre eller bygge dem. Produktteams, der både bygger og driver en tjeneste ("you build it, you run it"), lukker feedbackløkken og forbedrer sikkerheden, men balancen skal finansieres ærligt – at sulte driften for at finansiere forandring er sådan, kliniske systemer forfalder.

**Den tyndest mulige platform (TVP).** Fra Team Topologies: en platform bør være det *mindste* sæt af fælles tjenester, der reelt mindsker friktionen for strømteams – ikke mere. En overbygget platform bliver sin egen flaskehals og sit eget legacy. Start med de få kapabiliteter, alle teams virkelig har brug for (autentificering, et interoperabilitetslag, hosting, et designsystem), og voks kun på dokumenteret efterspørgsel.

## Bedste praksis

1. **Design modellen fra resultaterne og ned, ikke fra organisationsdiagrammet og op.** Begynd med de befolknings- og serviceresultater, du skal flytte, udled de værdistrømme, der leverer dem, og design først derefter teams og teknologi. En TOM forankret i det eksisterende hierarki automatiserer blot de nuværende siloer.

2. **Vælg en platform-plus-føderation-form.** Stil fælles kapabiliteter til rådighed centralt som en selvbetjent platform, og lad strømorienterede teams på hospitaler og i lokalområder bygge oven på. Det giver national konsistens i sikkerhed og interoperabilitet med lokal fart og lokalt ejerskab – den forsoning, området kræver.

3. **Finansiér produkter, ikke projekter.** Flyt penge fra tidsbegrænsede projekter til vedvarende finansierede produktteams afstemt efter værdistrømme. Projektfinansiering tvinger teams til at opløses netop på det tidspunkt, hvor de har lært domænet; produktfinansiering fastholder den sikkerhedsviden og iteration, sundhedstjenester har brug for (se emne 5.0 — Produktledet arbejde).

4. **Gør udgiftskontrol forholdsmæssig og trinvis.** Brug trinvis finansiering knyttet til evidens – frigiv penge ved afdækning, alfa, beta og drift frem for at godkende et helt program på forhånd. Udgiftskontroller i [GDS](https://en.wikipedia.org/wiki/Government_Digital_Service)-stil og NHS’ assurance-rute findes for at forhindre store tabte omkostninger på ubeviste ideer; anvend dem som tærskler skaleret efter risiko og værdi, ikke som generelt bureaukrati.

5. **Gør beslutningsrettigheder eksplicitte med et RACI- eller RAPID-kort.** Uklar beføjelse er den hyppigste årsag til gået i stå-leverancer. Navngiv for hver væsentlig beslutningstype, hvem der er Responsible/Accountable/Consulted/Informed ([RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)), eller hvem der Recommends, Agrees, Performs, har Input og Decides (RAPID). Offentliggør det, så teams holder op med at eskalere beslutninger, de har beføjelse til at træffe.

6. **Hold platformen tynd og efterspørgselsstyret.** Byg fælles kapabiliteter kun, når to eller flere teams påviseligt har brug for det samme, og behandl platformen som et produkt med sine egne brugere (de interne teams). Modstå trangen til at forudbygge en stor platform; den tyndest mulige platform tjener sit omfang gennem adoption.

7. **Styr leverandører som en del af modellen, ikke uden for den.** Beslut bevidst, hvilke kapabiliteter der er strategiske (byg/eje), og hvilke der er standardvarer (køb), undgå [lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) til én leverandør på centrale kliniske data, og kræv åbne standarder og udtrædelsesrettigheder i kontrakter. Dine leverandører er et lag i din driftsmodel, og deres arbejdsmåder skal være forenelige med dine.

8. **Gør beslutningsrettigheder eksplicitte.** En driftsmodel virker kun, hvis folk ved, hvem der beslutter hvad – hvilke valg der hører til et produktteam, hvilke til en klinisk sikkerhedsmyndighed, og hvilke der skal helt op til en bestyrelse. Kortlæg beslutningsrettigheder og skub hver beslutning ned på det laveste niveau, der sikkert kan bære den, så leverancen ikke kvæles af unødvendig eskalering. Uklar beføjelse er en af de hyppigste årsager til langsom, defensiv leverance.

9. **Behandl driftsmodellen som et produkt, du udvikler.** En målrettet driftsmodel fastlægges ikke én gang og indrammes på en væg; efterse den, når efterspørgsel, teknologi og partnerskaber ændrer sig, og tilpas den på baggrund af evidens. Hold øje med nogle få signaler – arbejdets flow, tid til beslutning, omarbejde og teamtrivsel – og ændr strukturer, når de påviseligt står i vejen, ikke som svar på omorganiseringsmoder.

## Spørgsmål at drøfte med dit team

1. **Er vores driftsmodel designet fra resultater og værdistrømme og ned, eller har den blot automatiseret vores eksisterende organisationsdiagram og dets siloer?**
   Dette spørgsmål rammer emnets centrale advarsel om, at en TOM forankret i det nuværende hierarki blot cementerer de siloer, du allerede har, så det er værd at lægge på bordet før enhver omorganisering. Det er vigtigt i sundhed og pleje, fordi værdistrømme følger borgerens forløb – henvis, triagér, behandl – på tværs af selvstændige organisationer, mens organisationsdiagrammer følger institutionelle grænser, og en model bygget på det sidste vil fortsat producere fragmenterede, ikke-interoperable tjenester for offentlige midler. Spændingen, der skal drøftes ærligt, er, at design oppefra fra resultater er reelt forstyrrende: det skærer på tværs af afdelingsejerskab, budgetter og rapporteringslinjer, som ledende folk har bygget karrierer omkring, så der er en reel politisk pris ved at gøre det ordentligt. Test jer selv konkret ved at navngive jeres tre vigtigste resultater og spore, om jeres faktiske teamgrænser og finansieringslinjer følger disse værdistrømme eller afdelingerne; hvis teams passer rent på afdelinger, er det jeres svar. Et godt, ærligt svar indrømmer, hvor modellen er formet af organisationsdiagrammet, peger på mindst én værdistrøm, der i dag er splittet på tværs af siloer til skade for den, og er realistisk om, hvilke strukturelle grænser organisationen er villig til at omtegne.

2. **Hvad hører til i vores tyndest mulige platform, og hvordan forhindrer vi, at den enten bliver overbygget til en flaskehals eller underbygget, så hvert team genopbygger den samme infrastruktur?**
   Platform-plus-føderation-formen virker kun, hvis platformen forbliver tynd og efterspørgselsstyret, og dette spørgsmål får teamet til at se på begge de fejlmønstre, emnet nævner – den store platform, der bliver sin egen legacy-flaskehals, og fraværet, der tvinger hvert team til at genopbygge login, integration og revisionsspor. Det er vigtigt, fordi platformen i et ICS reelt er fælles infrastruktur (identitet, et FHIR-interoperabilitetslag, hosting med sikkerhedsbaselines, et designsystem), og forkert omfang multiplicerer enten omkostning eller friktion på tværs af alle strømteams. Afvejningen, der skal drøftes, er timing og evidens: byg for tidligt, og du gætter forkert og skaber en flaskehals; byg for sent, og dobbeltarbejdet er allerede stivnet – så testen "to eller flere teams har påviseligt brug for det samme" er kernen, og teamet bør stresstest, om de faktisk anvender den eller bare bygger det, der virker oplagt centralt. Se på, hvad I i dag behandler som platform, versus hvad teams genopbygger, og spørg, om platformen drives som et produkt med egne interne brugere og SLA’er eller som en kø, alle venter bag. Et ærligt svar nævner de specifikke kapabiliteter, der i dag består to-teams-testen, modstår fristelsen til at forudbygge resten og forpligter sig til at behandle platformsteamets interne brugere som rigtige kunder med rigtige serviceniveauer.

3. **Hvor er vores beslutningsrettigheder reelt uklare, og hvad eskalerer teams i dag, som de burde have beføjelse til at beslutte selv?**
   Uklar beføjelse nævnes som den hyppigste årsag til gået i stå-leverancer, så dette spørgsmål bringer den daglige friktion frem, som et offentliggjort RACI- eller RAPID-kort skal fjerne. Det er især vigtigt i et føderalt sundhedssystem, hvor lokalområdeteams, et ICS’ digitale bestyrelse, klinisk sikkerhed og informationsstyring alle har legitime krav på en beslutning, og uklare grænser betyder, at enten alt eskalerer, eller – værre – ingen ejer en afgørelse, før den går galt. Spændingen, der er værd at udforske, er, at uddelegering af beslutninger kræver tillid til teams inden for rammerne, hvilket ledere og bestyrelser ofte modsætter sig netop der, hvor klinisk sikkerhed eller offentlige midler er involveret – men netop det at tilbageholde denne tillid skaber eskaleringslåsen i første omgang. Gør det konkret ved at opregn de fem seneste beslutninger, der eskalerede, og for hver spørge, hvem der burde have besluttet, og hvilken ramme der ville have gjort det muligt; mønstret afslører som regel et lille antal tilbagevendende uklare beslutningstyper. Et godt svar frembringer en konkret, offentliggørbar erklæring om, hvem der beslutter hvad – med skelnen mellem platformsstandarder, servicedesign og godkendelse af klinisk sikkerhed – og er ærligt om, hvilke beslutninger organisationen reelt er villig til at uddelegere, og hvilke den beholder centralt, og hvorfor.

4. **Finansierer vi drift og forandring ærligt, eller sulter vi stiltiende driften af tjenester i drift for at betale for nye funktioner?**
   Emnet er ligefrem om, at det at sulte driften for at finansiere forandring er sådan, kliniske systemer forfalder, og dette spørgsmål tvinger balancen frem i lyset, før et udfald eller en sikkerhedshændelse gør det for dig. Det er vigtigt i sundhed og pleje, fordi "drift" ikke er bagkontoroverhead – det er tilgængeligheden af de systemer, klinikere er afhængige af i behandlingsøjeblikket, så et udhulet driftsbudget viser sig som nedetid, der kan påvirke patienter, ikke blot gene brugere. Afvejningen er ubehagelig, fordi forandring er synlig og fejret, mens drift er usynlig, indtil den svigter, så bestyrelser og køreplaner naturligt hælder mod det nye; en "you build it, you run it"-model hjælper ved at holde feedbackløkken lukket, men kun hvis teamets driftstid reelt er beskyttet frem for nominelt tildelt og så plyndret. Gør det konkret ved at se på, hvor stor en andel af hvert produktteams kapacitet der sidste kvartal faktisk gik til at holde tjenester sikre og tilgængelige, versus hvad der var planlagt, og om driftsarbejde spores og værdsættes eller behandles som afbrydelse. Et ærligt svar nævner, hvor drift i dag er underfinansieret, beskytter en realistisk driftsallokering som første udgiftspost frem for en rest og er åbent om, hvilke tjenester i drift der bærer akkumuleret operationel risiko.

5. **Hvilke kapabiliteter vælger vi bevidst at bygge og eje versus købe, og accepterer vi lock-in på vores centrale kliniske data uden at mene det?**
   Bedste praksis her er at beslutte bygge versus købe bevidst, undgå lock-in til én leverandør på centrale kliniske data og behandle leverandører som et lag i driftsmodellen frem for noget uden for den – dette spørgsmål afprøver, om de valg faktisk træffes eller blot sker som standard. Det er vigtigt, fordi den mest vidtrækkende lock-in i digital sundhed er omkring den kliniske journal og dens data, hvor et proprietært lager uden realistisk udgang kan fange et helt system i et årti og diktere, hvad enhver efterfølgende tjeneste kan. Spændingen er fart versus valgfrihed: at købe er hurtigere og ofte billigere i dag, især for et presset team, men hvert bekvemt køb uden åbne standarder eller udtrædelsesrettigheder indsnævrer stille morgendagens valg, og omkostningen bliver først synlig, når du prøver at forlade den. Gør det konkret ved at opregn jeres centrale kapabiliteter, markere hver som strategisk (byg/eje) eller standardvare (køb), og tjekke, om kontrakterne bag standardvarerne faktisk kræver åbne standarder (HL7 FHIR, SNOMED CT) og håndhævelige udtrædelsesrettigheder. Et godt svar skelner mellem de få reelt strategiske kapabiliteter og de mange, der trygt kan købes, er ærligt om, hvor organisationen allerede er låst på kliniske data, og forpligter sig til åbne standarder og udtrædelsesrettigheder i de kontrakter, der betyder mest.

6. **Hvordan vil vi vide, at vores driftsmodel skal ændres, og hvilke signaler ville fortælle os det – frem for at omorganisere efter mode eller fordi en ny leder ankommer?**
   Emnet beskriver driftsmodellen som et produkt, du udvikler på evidens, ikke et diagram indrammet på en væg, så dette spørgsmål beder teamet om på forhånd at definere, hvilken evidens der ville berettige at omforme den. Det er vigtigt i sundhed og pleje, fordi omorganisering er forstyrrende og dyr – den opløser hårdt tilkæmpet domæne- og klinisk sikkerhedsviden – og alligevel er sektoren tilbøjelig til strukturel omsætning drevet af politiske cyklusser og nye ansættelser frem for af, om den nuværende model faktisk står i vejen. Spændingen ligger mellem stabilitet og tilpasning: ændr modellen for let, og teams får aldrig lov at falde til ro eller opbygge sikkerhedsekspertise; ændr den for sjældent, og stivnede strukturer kvæler flowet længe efter, de holdt op med at passe til arbejdet. Gør det konkret ved at vælge et lille sæt signaler at holde øje med – arbejdets flow, tid til beslutning, omarbejde og teamtrivsel – og aftale, hvilken bevægelse i dem der ville udløse en bevidst redesign versus en mindre justering. Et ærligt svar forpligter sig til nogle få ledende indikatorer, skelner mellem evidensledet forandring og omorganiseringsteater og er klar om, hvem der er ansvarlig for at efterse modellen og handle, når signalerne siger, at den hæmmer leverancen.

## I praksis: et eksempel fra sundhed og pleje

Et ICS, der dækker fem lokalområder, har hvert hospital bygget sine egne patientvendte tidsbestillingsværktøjer. Omkostningerne fordobles, oplevelserne divergerer, og ingen deler data rent. ICS’et redesigner sin driftsmodel.

Det definerer tre resultater (reducér udeblivelser, skær ned på undgåelige indlæggelser, forbedr lighed i adgang) og de værdistrømme, der ligger bag. Det opretter et lille **platformsteam**, der ejer fire tyndest mulige kapabiliteter: et fælles identitets-/loginsystem, et [FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)-baseret interoperabilitetslag, fælles hosting med baselines for sikkerhed og klinisk sikkerhed samt et designsystem. Hvert lokalområde beholder et **strømorienteret team**, men bygger nu oven på platformen i stedet for fra bunden.

Finansieringen skifter fra årlige projektansøgninger til stående produktbudgetter for hver strøm, frigivet gennem afdækning/alfa/beta-porte. Et offentliggjort RAPID-kort gør det klart, at lokalområdeteams *beslutter* deres eget servicedesign inden for platformens og den kliniske sikkerheds rammer, mens ICS’ets digitale bestyrelse *beslutter* platformsstandarder. Inden for et år deler tre lokalområder én tidsbestillingskapabilitet, design- og sikkerhedsbaselinen er ensartet, og nye funktioner, der før krævede en projektcyklus, leveres på uger – fordi platformen absorberede det udifferentierede tunge løft.

## Sektorperspektiver

En driftsmodel dimensioneres efter den organisation, den tjener; de samme lag – værdistrømme, kapabiliteter, teams, styring, platform, leverandører – tegnes meget forskelligt af en startup, en stor virksomhed og en offentlig myndighed.

### Startup

I en lille digital sundhedsvirksomhed er driftsmodellen mest implicit, og det er fint: et eller to strømorienterede teams, en grundlægger der holder de fleste beslutningsrettigheder, og intet platformsteam, fordi der endnu intet er at gøre til platform. Disciplinen er at gøre de få reelle beslutninger eksplicitte tidligt – bygge versus købe for det kliniske datalager, hvilke åbne standarder man forpligter sig til – så dagens genvej ikke bliver morgendagens lock-in. Drift og forandring ligger i de samme hænder, så risikoen er, at det at holde lyset tændt for de første kunder sulter køreplanen; en enkel, ærlig deling af udviklingstiden er den lette ækvivalent til et beskyttet driftsbudget. Leverandører vælges efter fart, men en startup bør stadig afvise lock-in på centrale kliniske data, fordi dens fremtidige NHS-købere vil kræve udtrædelsesrettigheder.

### Lille virksomhed

En etableret lille udbyder – en lægepraksis, et lokalt apotek, et plejehjem eller en hjemmeplejeudbyder, en enkelt klinik eller en lille sundhedsteknologileverandør forbi fasen uden omsætning – har rigtige patienter og løbende drift, men intet platformsteam, ingen dedikeret digital eller IT-kapacitet og lille slækkelse i kontanter eller personale. Her er driftsmodellen i vid udstrækning et sæt købte kapabiliteter syet sammen, så de afgørende valg er leverandørvalg: insistér på åbne standarder og udtrædelsesrettigheder i de kliniske systemer, du indkøber, fordi du bærer de samme interoperabilitets- og kliniske sikkerhedspligter som et stort hospital uden dets købekraft eller interne ekspertise. Drift og forandring falder sammen på de samme få mennesker, som også leverer pleje, så den ærlige disciplin er at beskytte lidt tid til at holde systemer sikre og opdaterede frem for kun at slukke brande. Beslutningsrettighederne er enkle – som regel beslutter en partner eller ejerleder – men det gør det let at udskyde digitale beslutninger i det uendelige, så værdien ligger i at navngive de få, der betyder noget (hvilken klinisk journal, hvilken fælles regional platform man tilslutter sig) og træffe dem bevidst. Hvor et ICS eller et nationalt organ tilbyder en fælles identitets-, interoperabilitets- eller designplatform, er den lille virksomheds bedste træk ofte at bygge på den frem for at genopfinde og låne den kapabilitet, den ikke selv kan bemande.

### Stor virksomhed

Et NHS-hospital eller et ICS er der, hvor platform-plus-føderation-formen tjener sig ind: selvstændige organisationer, der skal føles som én tjeneste for en patient. De svære problemer er lige så meget politiske som tekniske – at flytte penge fra tidsbegrænsede projektansøgninger til stående produktbudgetter og at offentliggøre et RACI-/RAPID-kort, så lokalområdeteams holder op med at eskalere beslutninger, de ejer. En stor sundhedsteknologi- eller medicinalvirksomhed har platformsudviklingsmusklerne, men risikerer at overbygge en stor intern platform, der bliver sin egen flaskehals; testen for den tyndest mulige platform – to eller flere teams har påviseligt brug for det samme – er bremsen. På denne skala er beslutningsrettigheder og finansieringsstrømme driftsmodellen; teknologien er som regel ikke begrænsningen.

### Myndighed

Et nationalt eller lokalt offentligt organ designer driftsmodeller, som andre organisationer skal bo i, så dets valg om standarder og platforme er reelt national infrastruktur. NHS England eller DHSC, der stiller et fælles identitetslag, en interoperabilitetsrygrad eller et designsystem til rådighed, er platformsmønsteret anvendt i befolkningsskala, og dets udgiftskontroller og trinvise assurance-porte er måden, offentlige midler holdes til regnskab på. Fejlmønstret er en centraliseret model, der bliver en fjern flaskehals og pålægger én løsning for enhver lokal kontekst; modgiften er at gøre de reelt fælles kapabiliteter til platform og føderere resten til hospitaler og kommuner. Ansvar over for parlamentet betyder også, at bygge/købe og leverandørstyring er genstand for offentlig registrering, så åbne standarder og udtrædelsesrettigheder ikke blot er fornuftige, men forventede.

## Typiske fejlmønstre

- **Automatisering af organisationsdiagrammet.** At designe teams omkring eksisterende afdelinger frem for værdistrømme, så TOM’en cementerer siloer. Modgift: design fra resultater og værdistrømme og ned.
- **Platformen, der bliver en flaskehals.** Et overdimensioneret centralt platformsteam, som alle anmodninger skal stå i kø bag. Modgift: tyndest mulige platform, behandlet som et produkt med SLA’er.
- **Projektfinansiering til produktarbejde.** Penge, der udløber, tvinger til opløsning og genopbygning. Modgift: vedvarende produktfinansiering med trinvise porte.
- **Drift udsultet til fordel for forandring.** Underfinansiering af driften af tjenester i drift, til kliniske systemer forfalder. Modgift: finansiér drift og forandring eksplicit og beskyt driftsbudgettet.
- **Ejerløse beslutninger.** Ingen ved, hvem der beslutter, så alt eskalerer. Modgift: et offentliggjort RACI/RAPID.
- **Lock-in som standard.** Centrale kliniske data fanget i en proprietær leverandørs system uden udgang. Modgift: åbne standarder og udtrædelsesrettigheder i enhver strategisk kontrakt.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Struktur | Styret af organisationsdiagrammet, i siloer | Nogen afstemning efter værdistrømme | Platform-plus-føderation etableret | Grænser styres og gennemgås mod flowmetrikker | Løbende omformet omkring resultater |
| Finansiering | Årlige projekter | Blandet projekt/produkt | Produktfinansiering med trinvise porte | Udgifter og leverance følges mod KPI’er, porte kvalitetssikres | Resultatbaseret, evidensfrigivet finansiering |
| Beslutningsrettigheder | Uklare, alt eskalerer | Delvist dokumenteret | RACI/RAPID offentliggjort og anvendt | Beslutningsforsinkelse og eskaleringer måles og styres | Uddelegeret inden for klare rammer, eskaleres sjældent |
| Platform | Ingen; hvert team genopbygger | Tilfældige fælles dele | Tyndest mulige platform, efterspørgselsstyret | Platforms-SLA’er, adoption og pålidelighed følges mod mål | Platform som et modent internt produkt |
| Leverandører | Lock-in, taktiske køb | Nogle standarder krævet | Bygge/købe afgjort bevidst | Leverandørydelse og standardoverholdelse kvalitetssikres | Åbne standarder, udtrædelsesrettigheder, sundt marked |

## Tjekliste

- [ ] Driftsmodellen er designet ud fra resultater og værdistrømme, ikke det eksisterende hierarki.
- [ ] Fælles kapabiliteter leveres som en tyndest mulig platform, hvor strømteams bygger oven på.
- [ ] Produktteams er vedvarende finansieret og afstemt efter værdistrømme.
- [ ] Udgiftskontrol er trinvis (afdækning/alfa/beta/drift-porte) og forholdsmæssig i forhold til risiko og værdi.
- [ ] Beslutningsrettigheder er dokumenteret (RACI eller RAPID) og offentliggjort.
- [ ] Drift og forandring er finansieret eksplicit, og driftsbudgettet er beskyttet.
- [ ] Teamtyper (strømorienterede, platform, understøttende, komplicerede delsystemer) er forstået og anvendt.
- [ ] Bygge/købe er et bevidst valg pr. kapabilitet; centrale kliniske data undgår lock-in.
- [ ] Kontrakter kræver åbne standarder (f.eks. HL7 FHIR, [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)) og udtrædelsesrettigheder.

## Centrale kilder

- Matthew Skelton & Manuel Pais — *Team Topologies* (strømorienterede, platforms-, understøttende og komplicerede-delsystem-teams; tyndest mulige platform).
- GOV.UK Service Manual — *spend controls* og trinvis assurance (afdækning/alfa/beta/drift); Government Digital Service.
- NHS digital servicemanual — *NHS service standard* (service-manual.nhs.uk).
- AXELOS — *Management of Portfolios (MoP)* og *Managing Successful Programmes (MSP)* til porteføljestyring og programstyring.
- Bain & Company — *RAPID*-rammeværket for beslutningsrettigheder; og RACI-modellen for ansvarsfordeling.
- John Doerr — *Measure What Matters* (OKR’er) til definition af resultater.

## Referencer

1. Operating model — Wikipedia — https://en.wikipedia.org/wiki/Operating_model
2. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
3. Objectives and key results (OKRs) — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Responsibility assignment matrix (RACI) — Wikipedia — https://en.wikipedia.org/wiki/Responsibility_assignment_matrix
5. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
6. Government Digital Service — Wikipedia — https://en.wikipedia.org/wiki/Government_Digital_Service
7. Fast Healthcare Interoperability Resources (HL7 FHIR) — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
8. SNOMED CT — Wikipedia — https://en.wikipedia.org/wiki/SNOMED_CT
9. *Team Topologies: Organizing Business and Technology Teams for Fast Flow* — Matthew Skelton & Manuel Pais, IT Revolution — https://teamtopologies.com/book
10. Spend controls and staged assurance (discovery/alpha/beta/live) — GOV.UK Service Manual, Government Digital Service — https://www.gov.uk/service-manual/agile-delivery
11. NHS service standard — NHS digital service manual, NHS England — https://service-manual.nhs.uk/standards-and-technology/service-standard
12. *Managing Successful Programmes (MSP)* and *Management of Portfolios (MoP)* — AXELOS/PeopleCert — https://www.axelos.com/
13. *Measure What Matters* (OKRs) — John Doerr — https://www.whatmatters.com/the-book
