# Emne 3.4 — Afdækningsfaser

**I én sætning:** Afdækning er den disciplinerede, tidsbegrænsede indsats for at forstå dine brugere og det reelle problem, *før* du forpligter penge, klinisk risiko eller omdømme til at bygge en løsning.

## Hvorfor det er vigtigt i sundhed og pleje

I de fleste sektorer spilder det at bygge det forkerte penge. I sundhed og pleje kan det også spilde klinisk tid, cementere uligheder i sundhed og – i det yderste – skade patienter. En digital tjeneste, der antager, at hver bruger har en smartphone, pålidelig bredbåndsforbindelse og selvsikkert engelsk, udelukker stille og roligt de skrøbelige, de fattige og de [digitalt marginaliserede](https://en.wikipedia.org/wiki/Digital_divide): netop de mennesker, NHS og socialpleje findes for at tjene. Afdækning er der, hvor du finder ud af det for prisen af nogle ugers forskning i stedet for efter en national udrulning.

Sundheds- og plejeudgifter er offentlige midler, der forvaltes i tillid, og meget af det flyder gennem lovbestemte pligter: [NHS Constitution](https://en.wikipedia.org/wiki/NHS_Constitution_for_England), den offentlige sektors ligestillingspligt under [Equality Act 2010](https://en.wikipedia.org/wiki/Equality_Act_2010) og Caldicott-principperne for håndtering af fortrolige patientoplysninger. Afdækning er den fase, hvor du tester, om en foreslået tjeneste er *nødvendig*, *lovlig*, *sikker* og *retfærdig* – før de spørgsmål bliver dyre at besvare. At springe den over fjerner ikke spørgsmålene; det udskyder dem blot til et punkt, hvor det ærlige svar er politisk umuligt at acceptere.

NHS Digital Service Standard og GOV.UK Service Manual gør begge afdækning til den obligatoriske første fase af enhver brugervendt digital tjeneste af netop denne grund. Det er ikke bureaukratisk teater. Det er den billigste forsikring, du nogensinde vil købe.

## Kernebegreber

**Afdækning, defineret.** Afdækning er en kort (typisk 6–10 ugers) fase, hvis mål er at forstå et problemfelt: hvem brugerne er, hvad de forsøger at gøre, hvad der stopper dem, hvad der allerede findes, og om der overhovedet er et problem, der er værd at løse. Dens output er *forståelse og evidens*, ikke et produkt. En god afdækning kan gyldigt konkludere "gør ingenting" eller "dette er et politikproblem, ikke et digitalt".

**Double Diamond.** [Design Councils](https://en.wikipedia.org/wiki/Design_Council) [Double Diamond](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)) (2005) rammesætter design som to sammenkædede diamanter. Den første – **Opdag** derefter **Definér** – divergerer for at udforske problemet bredt og konvergerer derefter for at indramme det præcist. Den anden – **Udvikl** derefter **Lever** – divergerer for at udforske løsninger og konvergerer derefter for at bygge én. Afdækning, som en leveringsfase, ligger næsten udelukkende i den første diamant. Det tilbagevendende svigt er teams, der sprinter ind i den anden diamant, før den første er færdig.

**Brugerbehov versus interessentønske.** Et *brugerbehov* er noget, et menneske forsøger at opnå, udtrykt fra deres synspunkt ("Jeg har brug for at vide, at min aftale er bekræftet, så jeg ikke tager en dag fri fra arbejde for ingenting"). Et *interessentønske* er en funktion eller løsning, nogen allerede har besluttet ("vi har brug for en app"). Afdækningens kernedisciplin er at oversætte ønsker tilbage til behov, fordi behov er stabile, og løsninger er billige og udskiftelige, når behovet er klart.

**Problemindramning.** Hvordan du formulerer et problem, begrænser enhver løsning, du vil overveje. "Patienter udebliver fra aftaler" inviterer til en påmindelsesapp. "Patienter kan ikke let omlægge aftaler, der ikke længere passer dem" inviterer til selvbetjent ombestilling. Samme symptom, forskelligt problem, radikalt forskellig tjeneste. Afdækning tjener sit brød i høj grad på kvaliteten af den [problemformulering](https://en.wikipedia.org/wiki/Problem_statement), den frembringer.

**Antagelser, hypoteser og evidens.** Ethvert projekt hviler på antagelser. Afdækning gør dem eksplicitte, rangordner dem efter risiko og tester de mest risikable med rigtige brugere. Målet er ikke sikkerhed – det er uopnåeligt – men *reduceret usikkerhed om de ting, der ville sænke projektet*.

## Bedste praksis

1. **Start fra et problem, ikke en løsning.** Skriv problemformuleringen, før nogen navngiver en teknologi. Hvis finansieringsansøgningen, bestyrelsesnotatet eller leverandørtilbuddet allerede specificerer "en app" eller "en portal", så behandl det som en antagelse, der skal testes, ikke en beslutning, der skal implementeres. Løsninger nået, før problemet er forstået, er næsten altid nogens vane, ikke brugerens behov.

2. **Lav reel [brugerforskning](https://en.wikipedia.org/wiki/User_research) med rigtige brugere.** Interview og observér de faktiske mennesker, der skal bruge tjenesten – patienter, pårørende, receptionister, kommunale sygeplejersker, socialrådgivere – i deres virkelige kontekst, ikke en workshop af ledere, der taler på deres vegne. Sigt efter dybde frem for volumen; et dusin velvalgte [kontekstuelle interviews](https://en.wikipedia.org/wiki/Contextual_inquiry) afslører mere end en spørgeundersøgelse med tusind svar. Rekruttér bevidst til de brugere, der er sværest at nå, for de er dem, en tjeneste oftest svigter.

3. **Kortlæg hele tjenesten, ikke den digitale flig.** Brugere oplever en ende-til-ende-tjeneste – en henvisning, en vurdering, en behandling, en opfølgning – hvoraf din digitale komponent er ét trin. Kortlæg det nuværende forløb på tværs af alle kanaler og organisationer, herunder papir-, telefon- og ansigt-til-ansigt-delene. Digitale ændringer fejler rutinemæssigt, fordi de optimerer ét trin og bryder de to på hver side af det.

4. **Indram problemet eksplicit, og få det aftalt.** Producér en skriftlig problemformulering og evidensen bag den, og sikr eksplicit enighed fra din senior sponsor. Dette artefakt er din kontrakt: det definerer, hvad "færdig" betyder for de næste faser, og giver dig stillingen til at sige nej til omfang, der ikke tjener det aftalte problem.

5. **Dimensionér muligheden og risikoen ærligt.** Anslå, hvor mange mennesker der er berørt, hvor slemt, og hvad det koster systemet i dag. Par dette med de risici, en løsning ville introducere – kliniske, informationsstyringsmæssige, ligestillingsmæssige, leveringsmæssige. Ledere finansierer afdækninger; de *beslutter* på grundlag af et forsvarligt mulighed-og-risiko-billede, så giv dem et.

6. **Design til kanterne fra dag ét.** Rekruttér forskningsdeltagere på tværs af spektret for digital inklusion, test mod forventninger til [Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) (WCAG 2.2 AA) tidligt, og behandl assisterede digitale og offlineveje som førsteklasses, ikke eftertanker. I sundhed og pleje er den udelukkede bruger ofte den højt-behovs-bruger; en tjeneste, der kun virker for de selvsikre og forbundne, udvider ulighed.

7. **Hold den tværfaglig og tidsbegrænset.** Bemand afdækningen med en brugerforsker, en servicedesigner, en produktansvarlig, en teknisk arkitekt og – for alt der berører pleje – klinisk input og input fra informationsstyring. Tidsbegræns den hårdt (uger, ikke kvartaler) for at gennemtvinge konvergens. En uafgrænset afdækning er et advarselstegn på, at teamet undgår en beslutning.

8. **Skriv ned, hvad der ville få jer til at stoppe.** Aftal ved starten de betingelser, under hvilke den ærlige anbefaling ville være "fortsæt ikke": intet reelt brugerbehov, en uoverstigelig IG- eller sikkerhedsbarriere, en bedre ikke-digital løsning eller et problem ejet af et andet team. En afdækning, der *ikke kan* anbefale at stoppe, er ikke en afdækning; det er en på forhånd begrundet udvikling.

## Spørgsmål at drøfte med dit team

1. **Hvad skulle vi se i afdækningen for ærligt at anbefale "fortsæt ikke", og har nogen i dette rum stillingen til at sige det?**
   Stopbetingelser er værdiløse, hvis de ikke kan udøves, og i sundhed og pleje er presset for ikke at udøve dem intenst: en direktør har annonceret appen, en leverandørkontrakt er halvt underskrevet, eller et finansieringsvindue lukker, hvis teamet tøver. Dette spørgsmål tvinger et team til at nævne den specifikke evidens – intet reelt brugerbehov, en uoverstigelig barriere for informationsstyring eller klinisk sikkerhed, en bedre ikke-digital løsning, et problem ejet af en anden tjeneste – der ville vende anbefalingen til at stoppe, og til at skrive den ned, før forskningen begynder, så den ikke i det stille kan omdefineres senere. Spændingen, der er værd at debattere, er mellem sponsortillid og forskeruafhængighed: en afdækning, der strukturelt ikke kan sige nej, er en på forhånd begrundet udvikling i afdækningens tøj. Overvej, hvem der beskytter forskerens fund mod redigering, om en udenforstående gennemgår evidensen, og hvad den sidste afdækning var, jeres organisation faktisk stoppede – hvis der ikke er nogen, er det i sig selv et fund. Et ærligt svar identificerer de reelle grunde til, at "nej" er svært her, og en konkret mekanisme (aftalte stopkriterier, en uafhængig udfordring, en sponsor, der offentligt har velsignet muligheden for at stoppe), der gør det sigbart.

2. **Hvem er de brugere, vi er mest tilbøjelige til at udelukke, og hvordan får vi dem ind i forskningen frem for at udskyde dem til beta?**
   I sundhed og pleje er den udelukkede bruger – den skrøbelige, den digitalt marginaliserede, personen med lav tillid til engelsk, den pårørende der jonglerer tre systemer – uforholdsmæssigt ofte den højt-behovs-bruger, tjenesten findes for at tjene, så stikprøver af bekvemmelighed stille og roligt designer ulighed ind i arkitekturen. Den afvejning, der skal debatteres, er dybde og inklusion versus tidsplan og rekrutteringsomkostning: at nå de sværest nåelige tager tid, lokalsamfundspartnere, incitamenter og assisterede eller offline forskningsmetoder, som en forhastet afdækning frister til at springe over "for nu". Konkrete vinkler omfatter eksplicit at kortlægge spektret for digital inklusion, at rekruttere gennem frivillighedssektoren og kliniske portvagter frem for en mailingliste og at behandle assisterede digitale og ikke-digitale veje som førsteklasses fund frem for eftertanker. Det er værd at nævne den offentlige sektors ligestillingspligt og Caldicott-konteksten, så inklusion forstås som en retlig og etisk forpligtelse, ikke en finesse. Et godt svar producerer en navngiven rekrutteringsplan, der bevidst overstikprøver kanterne, og en klar erklæring om, hvilke brugere teamet vil behandle som designets tyngdepunkt.

3. **Har vi indrammet et problem, eller har vi smuglet en løsning ind i problemformuleringen?**
   Hvordan et problem formuleres, begrænser i det stille enhver løsning, teamet vil overveje – "patienter glemmer aftaler" inviterer til en påmindelsesapp, mens "patienter kan ikke let omlægge aftaler, der ikke længere passer dem" inviterer til selvbetjent ombestilling og en gennemgang af tidspolitik – så formuleringen af problemformuleringen er der, hvor afdækning tjener det meste af sit brød. Debatten er, om finansieringsansøgningen, bestyrelsesnotatet eller leverandørtilbuddet allerede har fastlagt svaret ("en app", "en portal", "et AI-triageværktøj") og klædt det ud som et behov, og om teamet har disciplinen til at oversætte det ønske tilbage til det underliggende brugermål. Nyttige vinkler omfatter at forbyde løsningssubstantiver i problemformuleringen, at kortlægge hele ende-til-ende-tjenesten på tværs af alle kanaler og organisationer, så den digitale flig ses i sammenhæng, og at tjekke, at hvert angivet behov er udtrykt fra brugerens synspunkt frem for organisationens. Evidens betyder noget her: en indramning bør kunne spores til, hvad rigtige brugere sagde og gjorde, ikke til en vane eller et strategislide. Et ærligt svar bekræfter enten, at formuleringen nævner et stabilt brugerbehov med evidens bag, eller indrømmer, at en løsning er blevet antaget, og genåbner indramningen, før noget alfa afgrænses.

4. **Har vi de rette discipliner i rummet, og former klinisk sikkerhed og informationsstyring arbejdet frem for at godkende det til sidst?**
   En afdækning bemandet kun af en produktchef og en leveranceleder vil finde produkt- og leveringsproblemer; de brugere, klinikere og retlige pligter, den aldrig inviterer ind i rummet, bliver de risici, der dukker op dyrt i alfa eller, værre, efter idriftsættelsen. Spændingen er, at et reelt tværfagligt team – brugerforsker, servicedesigner, teknisk arkitekt, klinisk sikkerhedsansvarlig, ekspertise i informationsstyring og Caldicott – er knapt, konkurrenceudsat og langsomt at samle, så teams fristes til at "låne" en kliniker i en time eller bolte IG på som en sidste port. Den sekventering er fælden: klinisk sikkerhed og IG er billige at designe ind under indramningen og ruinerende dyre at eftermontere, når en arkitektur forudsætter, at data flyder på tværs af organisatoriske grænser. Konkrete vinkler omfatter at nævne en klinisk sikkerhedsansvarlig fra uge ét for alt, der berører pleje, at behandle en konsekvensanalyse vedrørende databeskyttelse som et levende afdækningsartefakt frem for en senere formalitet og at tjekke, om de mennesker, der forstår frontlinjens arbejdsgang, er bidragydere eller blot høringsparter. Et ærligt svar nævner, hvem der faktisk er i teamet, hvilke pligter der er repræsenteret af en person versus et afkrydsningsfelt, og hvor afdækningen ville være blind, fordi en disciplin mangler.

5. **Hvordan vil vi vide, at afdækningen er færdig, og hvad forhindrer den i at drive i måneder eller blive skåret af efter en fjortendages tid?**
   Afdækning har to modsatte fejlmønstre, og begge handler om tid: det uafgrænsede studie, der kortlægger alt og afgør intet, og den afkortede fjortendages periode, der haster mod en forudbestemt konklusion, fordi en leveringsdato blev fastsat, før forskningen begyndte. Den disciplin, Double Diamond kræver, er konvergens – at vide, hvornår problemet er forstået godt nok til at træffe en forsvarlig beslutning, ikke hvornår hvert spørgsmål er besvaret, fordi sikkerhed er uopnåelig og målet er reduceret usikkerhed om de ting, der ville sænke projektet. Den afvejning, der er værd at debattere, er dybde versus momentum: en hård tidsramme på uger tvinger teamet til at prioritere de mest risikable antagelser, men en ramme sat for snæver sulter den inkluderende, svært nåelige forskning, som dette område mest har brug for. Nyttige vinkler omfatter at aftale den beslutning, afdækningen skal informere, og de artefakter, en sponsor har brug for for at træffe den, at rangordne antagelser, så rammen bruges på det, der betyder noget, og at nævne et beslutningspunkt frem for at lade fasen dryppe over i et uerkendt alfa. Et ærligt svar angiver, hvor lang rammen er, hvordan "forstået nok" ser ud for dette problem, og hvem der kalder enden.

6. **Når afdækningen slutter, kan vi så give en finansieringsbestyrelse et forsvarligt billede af mulighed og risiko – eller kun en historie?**
   Ledere finansierer ikke forståelse; de finansierer beslutninger, og en afdækning, der producerer rig indsigt, men ingen bestyrelseslæselig redegørelse for, hvor mange mennesker der er berørt, hvor slemt, hvad det koster systemet i dag, og hvad en løsning ville sætte på spil, overlader beslutningen til den, der fortæller den mest selvsikre historie. Spændingen er mellem forskerens nuancerede, forbeholdsfulde fund og bestyrelsens behov for en dimensioneret, sammenlignelig, forsvarlig sag – komprimér for hårdt, og du mister ligestillings- og sikkerhedsnuancerne, der var pointen; nægt at komprimere, og evidensen når aldrig de mennesker, der tildeler penge. I sundhed og pleje skal billedet parre mulighed med de risici, en løsning introducerer – kliniske, informationsstyringsmæssige, ligestillingsmæssige, leveringsmæssige – fordi en bestyrelse, der kun ser fordele, bliver sat op til at træffe et dårligt væddemål. Konkrete vinkler omfatter at dimensionere den berørte population ud fra reelle data frem for et håbefuldt estimat, at gøre fund sporbare, så en skeptiker kan følge dem tilbage til, hvad brugerne sagde, og at indramme anbefalingen (herunder "fortsæt ikke" eller "alfa dette smallere") i termer, den næste fase kan handle på. Et ærligt svar viser, at teamet kan bevæge sig fra evidens til en anbefaling, en finansieringsbestyrelse kunne granske åbent uden at den falder fra hinanden.

## I praksis: et eksempel fra sundhed og pleje

Et integreret plejesystem (ICS) er under pres for at reducere raten af udeblevne aftaler (DNA, did not attend) på ambulante klinikker. En leverandør har pitchet en AI-drevet påmindelsesapp, og en direktør er ivrig efter at finansiere den. I stedet for at købe gennemfører ICS’et en otte ugers afdækning.

Brugerforskeren interviewer atten patienter, der for nylig udeblev fra aftaler, plus receptionister og to klinikledere. Et mønster viser sig, som påmindelsesteorien overså: mange "udeblevne" havde *forsøgt* at omlægge, men ramt en optaget telefonlinje i dagevis eller havde fået en aftale i arbejdstiden, de ikke kunne tage uden at miste løn. En delmængde var døde eller indlagt andetsteds og stod stadig på listen. Påmindelser ville ikke have berørt nogen af disse årsager.

Teamet kortlægger det ende-til-ende bestillingsforløb og finder tre organisationer, to patientadministrationssystemer og en faxmaskine i løkken. De omformulerer problemet fra "patienter glemmer aftaler" til "patienter kan ikke let nå os for at omlægge aftaler, der ikke længere fungerer for dem". De kvantificerer det: omkring 40 % af DNA’erne på de udtrukne klinikker involverede et fejlet forudgående kontaktforsøg. De markerer et informationsstyringsspørgsmål (et fælles ombestillingsværktøj ville krydse organisatoriske grænser) og et ligestillingsfund (de højeste DNA-rater var blandt patienter i de mest dårligt stillede postnumre, for hvem arbejdstidsslottet var barrieren).

Afdækningen anbefaler *imod* appen og *for* et alfa, der udforsker selvbetjent ombestilling plus en gennemgang af politikken for tidsplanlægning. Det omformulerede problem aftales af sponsoren, en klinisk sikkerhedsansvarlig udpeges til alfa, og en [konsekvensanalyse vedrørende databeskyttelse](https://en.wikipedia.org/wiki/Privacy_impact_assessment) bestilles. ICS’et har brugt otte uger og undgået at finansiere en løsning, der målbart ville have fejlet offentligt.

## Sektorperspektiver

### Startup

En digital sundheds-startup kører afdækning på en shoestring og mod uret – ofte er "afdækningen" grundlæggernes egen levede erfaring plus en fjortendages brugerinterviews presset ind mellem investormøder. Finansieringspresset er at vise traction, hvilket frister grundlæggere til at springe direkte til en demo; den disciplin, der betyder mest, er at nævne den mest risikable antagelse og dræbe idéen billigt, hvis den fejler, fordi en startup ikke har råd til at bygge det forkerte, selv én gang. Ansvaret går til investorer og tidlige adoptere frem for en lovbestemt bestyrelse, så stopbetingelser er kommercielle (ingen betalingsvillighed, intet nåeligt marked) lige så meget som kliniske. Fordelen er fart og friheden til at pivotere; risikoen er at forveksle en overbevisende grundlæggerfortælling med evidens for et reelt brugerbehov.

### Lille virksomhed

En etableret lille udbyder – en lægepraksis, et lokalt apotek, et plejehjem, et hjemmeplejefirma, en enkelt klinik eller en lille sundhedsteknologileverandør forbi fasen uden omsætning – har rigtige patienter og løbende drift, men sjældent en ledig brugerforsker eller servicedesigner til at bemande en formel afdækning. Her er afdækning let og opportunistisk: "forskningen" er receptionisten, der allerede ved, hvorfor patienter ikke kan komme igennem på telefonen, plejemedarbejderne, der dagligt ser papirdobbeltarbejdet, og en håndfuld bevidste samtaler med de brugere, en ændring ville berøre. Fælden er, at de samme lovbestemte pligter – Caldicott, UK GDPR, ligestillingspligten, klinisk sikkerhed – gælder fuldt ud, uanset om der er nogen internt, der ejer dem, så den disciplin, der betyder mest, er at indramme problemet ærligt og teste den mest risikable antagelse, før knap kontanter forpligtes til en leverandørs produkt. Fordi den løbende drift ikke kan holde pause, kører en lille udbyder ofte sin afdækning omkring ét konkret smertepunkt frem for et bredt problemfelt, og dens mest værdifulde stopbetingelse er at genkende, når løsningen er en procesændring eller en fælles regional platform frem for et system at købe.

### Stor virksomhed

Et NHS-hospital eller en stor sundhedsteknologileverandør kan bemande en ordentlig tværfaglig afdækning – brugerforskere, servicedesignere, klinisk sikkerhed, informationsstyring – men må kæmpe mod organisatorisk tyngdekraft: en eksisterende leverandørkontrakt, en bestyrelse der allerede har annonceret "appen", eller en business case, der på forhånd har afgjort løsningen. Her er afdækningens sværeste arbejde politisk – at omformulere en sanktioneret løsning tilbage til et brugerbehov uden at miste sponsorstøtte. Finansiering er årlig og udvalgsbundet, så afdækninger konkurrerer om pladser og må producere bestyrelseslæselige artefakter. Risikoappetitten er lav og ansvaret bredt (tilsynsmyndigheder, revisorer, offentligheden), hvilket gør et ærligt "fortsæt ikke" både mere værdifuldt og sværere at sige højt.

### Myndighed

Et nationalt eller lokalt offentligt organ – NHS England, DHSC, en delegeret regering, en kommune – kører afdækning under Service Standards fulde vægt, udgiftskontrolporte og offentlig granskning, hvor selve afdækningsrapporten kan blive offentliggjort og udfordret. Brugerbasen er enorm, og pligten til at inkludere de marginaliserede er et retligt, ikke valgfrit, anliggende, så inkluderende rekruttering og assisterede digitale veje er obligatoriske fra første uge. Ansvaret går til ministre, parlamentet og vælgerne, så en afdækning skal kunne forsvares åbent og kan standses af udgiftskontroller, når evidensen er svag. Afvejningen er stringens versus tempo: afdækning i en myndighed er langsommere og mere kvalitetssikret, hvilket beskytter offentlige midler, men kan frustrere teams vant til at bevæge sig hurtigt.

## Typiske fejlmønstre

- **At løsningsgøre for tidligt.** Teamet går ind i afdækningen med svaret allerede valgt og bruger ugerne på at bygge en business case for det. Modgift: forbyd løsningssubstantiver i problemformuleringen; gør den mest risikable antagelse til et forskningsspørgsmål.
- **Forskningsteater.** Nogle få venlige interessenter høres, svært nåelige brugere springes over "af tidshensyn", og fundene bekræfter belejligt planen. Modgift: rekruttér til kanterne; lad nogen uden for teamet udfordre forskningsfundene.
- **Afdækningen, der ikke kan sige nej.** Finansiering, politik eller en underskrevet kontrakt gør "fortsæt ikke" usigeligt, så afdækning bliver ritual. Modgift: aftal stopbetingelser på forhånd og beskyt forskerens uafhængighed.
- **At koge havet.** En uafgrænset afdækning driver i måneder, kortlægger alt og afgør intet. Modgift: en hård tidsramme og en navngiven beslutning til sidst.
- **At ignorere den ikke-digitale tjeneste.** Teamet studerer skærmen og overser telefonlinjen, brevet og receptionisten, der faktisk bærer forløbet. Modgift: kortlæg alle kanaler og organisationer fra ende til anden.
- **At behandle tilgængelighed og inklusion som senere.** Kantbrugere udskydes til beta, og på det tidspunkt udelukker arkitekturen dem. Modgift: rekruttér inkluderende og test mod WCAG fra den første prototype.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Problemindramning | Løsning antaget; ingen skriftlig problemformulering | Problem skrevet, men løsningsformet | Eksplicit, evidensbaseret problemformulering aftalt med sponsor | Indramningskvalitet kvalitetssikres mod aftalte kriterier ved en beslutningsport; hver formulerings evidens og omfang gennemgås | Problemindramning omformer rutinemæssigt strategi og stopper svage idéer |
| Brugerforskning | Lederes meninger står i stedet for brugere | Nogle brugerinterviews, bekvemmelighedsstikprøve | Kontekstuel forskning med en bevidst, inkluderende stikprøve | Inklusion og stikprøvedækning følges mod mål; forskningskvalitet kvalitetssikres gennem en gentagelig, styret proces | Kontinuerlig forskningskapabilitet; kantbrugere inkluderes rutinemæssigt |
| Beslutning om at fortsætte | Udvikling forudbestemt; afdækning er ritual | Go/no-go findes, men er sjældent "nej" | Dokumenterede stopbetingelser; "gør ingenting" er et reelt udfald | Beslutninger styres mod aftalte kriterier; stop- og fortsæt-rater og deres begrundelse følges og gennemgås | Triage på porteføljeniveau dræber svage afdækninger tidligt og billigt |
| Sundhedsspecifik risiko | Klinisk sikkerhed, IG, lighed overvejes efter udvikling | Rejses sent, ved undtagelse | Klinisk, IG- og ligestillingsinput indlejret i teamet | Risici for klinisk sikkerhed, IG og lighed logføres, kvantificeres og kvalitetssikres mod kontroller og mål | Sikkerheds- og ligestillingsfund former problemet, ikke kun godkendelsen |
| Output | Slidedæk, intet evidensspor | Rapport med blandet evidens | Sporbare fund, prioriterede antagelser, klar anbefaling | Outputkvalitet og optag måles; anbefalinger følges til de beslutninger, de informerede | Genbrugelig indsigt, der føder den bredere portefølje og genbruges på tværs af tjenester |

## Tjekliste

- [ ] Der er en skriftlig problemformulering, der nævner et brugerbehov, ikke en løsning.
- [ ] Rigtige brugere – herunder de sværest nåelige – er blevet interviewet eller observeret i kontekst.
- [ ] Den ende-til-ende tjeneste er kortlagt på tværs af alle kanaler og organisationer.
- [ ] De mest risikable antagelser er opregnet, rangordnet, og de øverste er testet.
- [ ] Klinisk sikkerhed, informationsstyring (Caldicott, UK GDPR/DPIA) og risici for uligheder i sundhed er identificeret.
- [ ] Tilgængelighed (WCAG 2.2 AA) og digital inklusion overvejes fra den første prototype.
- [ ] Stopbetingelser blev aftalt ved starten, og "fortsæt ikke" er et reelt muligt udfald.
- [ ] Muligheden er dimensioneret, og anbefalingen er forsvarlig over for en finansieringsbestyrelse.
- [ ] Et tværfagligt team (herunder klinisk/IG-input) kørte fasen inden for en fast tidsramme.
- [ ] Sponsoren har aftalt problemformuleringen, før noget alfa begynder.

## Centrale kilder

- NHS England — NHS Digital Service Manual og NHS Service Standard (service.nhs.uk).
- GOV.UK Service Manual — "How the discovery phase works" og Government Service Standard (Government Digital Service).
- Design Council — *The Double Diamond*-designprocesrammeværket.
- NHS England — Digital Technology Assessment Criteria (DTAC): klinisk sikkerhed, databeskyttelse, teknisk assurance, interoperabilitet, brugbarhed og tilgængelighed.
- NICE — Evidence Standards Framework for Digital Health Technologies.
- Web Content Accessibility Guidelines (WCAG) 2.2, W3C; og GOV.UK-vejledning om tilgængelighed og assisteret digital.
- Britiske Caldicott-principper og Data Protection Act 2018 / UK GDPR (konsekvensanalyser vedrørende databeskyttelse).
- Equality Act 2010 — den offentlige sektors ligestillingspligt (relevant for vurdering af uligheder i sundhed i afdækningen).

## Referencer

1. Double Diamond (design process model) — Wikipedia — https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)
2. Design Council — Wikipedia — https://en.wikipedia.org/wiki/Design_Council
3. User research — Wikipedia — https://en.wikipedia.org/wiki/User_research
4. Contextual inquiry — Wikipedia — https://en.wikipedia.org/wiki/Contextual_inquiry
5. Problem statement — Wikipedia — https://en.wikipedia.org/wiki/Problem_statement
6. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
7. Equality Act 2010 — Wikipedia — https://en.wikipedia.org/wiki/Equality_Act_2010
8. NHS Constitution for England — Wikipedia — https://en.wikipedia.org/wiki/NHS_Constitution_for_England
9. Digital divide — Wikipedia — https://en.wikipedia.org/wiki/Digital_divide
10. Privacy impact assessment (data protection impact assessment) — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
11. How the discovery phase works — Government Digital Service, GOV.UK Service Manual — https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
12. NHS service standard and NHS digital service manual — NHS England — https://service-manual.nhs.uk/
13. The Double Diamond — Design Council — https://www.designcouncil.org.uk/our-resources/the-double-diamond/
14. Web Content Accessibility Guidelines (WCAG) 2.2 — W3C — https://www.w3.org/TR/WCAG22/
15. Equality Act 2010 — UK legislation (legislation.gov.uk) — https://www.legislation.gov.uk/ukpga/2010/15/contents
16. Data protection impact assessments (DPIAs) — Information Commissioner's Office (ICO) — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/
17. The Caldicott Principles — National Data Guardian, GOV.UK — https://www.gov.uk/government/publications/the-caldicott-principles
18. Evidence standards framework for digital health technologies — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
