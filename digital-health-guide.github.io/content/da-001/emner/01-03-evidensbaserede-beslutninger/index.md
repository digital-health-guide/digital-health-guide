# Emne 1.3 — Evidensbaserede beslutninger

**I én sætning:** Evidensbaseret beslutningstagning betyder at beslutte, hvad man skal bygge, købe og skalere, på grundlag af den bedste tilgængelige evidens – klinisk og leveringsmæssig – forholdsmæssig i forhold til risikoen, og at registrere begrundelsen, så den overlever de mennesker, der traf beslutningen.

## Hvorfor det er vigtigt i sundhed og pleje

I de fleste sektorer koster en dårlig produktbeslutning penge. I sundhed og pleje kan den koste sikkerhed, lighed og tillid – og den træffes med offentlige midler under lovbestemt pligt. En beslutning om at udrulle en digital diagnostik, der aldrig er blevet evalueret, er ikke et kommercielt spil; det er en klinisk risiko. Det hæver kravet til evidens langt over "demoen så godt ud".

Området er også særegent, fordi det kræver **to slags evidens på én gang**. *Klinisk evidens* besvarer "virker teknologien, og er den sikker og effektiv for patienter?" *Leveringsevidens* besvarer "bygger vi det rigtige godt, og bliver det taget i brug og anvendt?" En tjeneste kan være klinisk sund, men en leveringsfiasko (ingen bruger den), eller en leveringssucces, men klinisk ubevist (udbredt brugt, aldrig valideret). Ledere skal kræve begge og aldrig lade den ene optræde som den anden. Og fordi sundhedsbeslutninger tiltrækker granskning – fra tilsynsmyndigheder, offentligheden og klinikere – er *registreringen* af, hvorfor du besluttede, lige så vigtig som selve beslutningen.

## Kernebegreber

**[Evidenshierarkiet](https://en.wikipedia.org/wiki/Hierarchy_of_evidence).** [Evidensbaseret medicin](https://en.wikipedia.org/wiki/Evidence-based_medicine) rangerer undersøgelsesdesign efter, hvor godt de kontrollerer bias: øverst [systematiske reviews](https://en.wikipedia.org/wiki/Systematic_review) og [metaanalyser](https://en.wikipedia.org/wiki/Meta-analysis) af [randomiserede kontrollerede forsøg](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RCT’er); derefter enkelte RCT’er; så kohorte- og case-kontrol-studier; så serier af tilfælde; og nederst ekspertmening og anekdote. Hierarkiet er en vejledning, ikke en spændetrøje – men det disciplinerer dig til at bemærke, når en påstand hviler på anekdote forklædt som bevis.

**NICE’s Evidence Standards Framework (ESF) for digitale sundhedsteknologier.** NICE har sammen med NHS England og partnere skabt ESF for at fastlægge, hvilket niveau af evidens en digital sundhedsteknologi (DHT) har brug for, forholdsmæssigt i forhold til dens funktion og den risiko, den indebærer. Den inddeler DHT’er efter potentiel risiko – fra enkle systemtjenester, over værktøjer der informerer eller driver pleje, til dem der direkte diagnosticerer eller behandler – og specificerer den kliniske effekt- og økonomiske evidens, der forventes på hvert niveau. Jo højere klinisk risiko, jo stærkere evidens kræves. ESF er referencepunktet for bestillere og udviklere, der afgør, om en DHT er klar.

**Virkelighedsnære data og [virkelighedsnær evidens](https://en.wikipedia.org/wiki/Real_world_evidence).** Virkelighedsnære data (RWD) kommer fra rutinepleje – elektroniske patientjournaler, registre, patientrapporterede udfald, enhedstelemetri – frem for kontrollerede forsøg. Analyseret godt (gennem prospektive observationsstudier, pragmatiske forsøg eller omhyggelig journalanalyse) bliver de til virkelighedsnær evidens (RWE) om, hvordan en teknologi klarer sig i praksis. RWE er afgørende for teknologier, der lærer eller ændrer sig (AI, wearables), hvor et enkeltstående forsøg ikke kan fange den løbende adfærd, men den bærer risici for confounding, der skal håndteres ærligt.

**Klinisk evidens versus leveringsevidens.** Hold disse på separate akser. Klinisk evidens bruger hierarkiet ovenfor og ESF: virkning, sikkerhed, effektivitet. Leveringsevidens bruger produkt- og serviceanalyse: er tjenesten brugbar, taget i brug, fuldfører den brugerens opgave, reducerer den fejlefterspørgsel? Begge er nødvendige; at blande dem sammen er en klassisk fejl (et højt brugstal er ikke klinisk bevis).

**Evalueringsdesign.** En **[logisk model](https://en.wikipedia.org/wiki/Logic_model)** (eller [forandringsteori](https://en.wikipedia.org/wiki/Theory_of_change)) gør eksplicit, hvordan input og aktiviteter er tænkt at frembringe output og resultater – den er det kort, enhver evaluering tester. En **RCT** giver det stærkeste kausale svar, men er langsom, dyr og undertiden upraktisk eller uetisk for en hurtigt bevægelig tjeneste. **Pragmatisk evaluering** – pragmatiske forsøg, [afbrudte tidsserier](https://en.wikipedia.org/wiki/Interrupted_time_series), før/efter med kontroller, serviceevaluering med blandede metoder – bytter noget sikkerhed for fart og virkelighedsnær relevans. Vælg det design, der er forholdsmæssigt i forhold til risikoen og den beslutning, der står på spil.

**[A/B-test](https://en.wikipedia.org/wiki/A/B_testing) og analyse.** For leveringsspørgsmål med lavere risiko (hvilken formulering øger fremmødet til aftaler? hvilket flow mindsker frafald?) giver kontrollerede onlineeksperimenter (A/B-test) hurtig, kausal leveringsevidens. De er stærke til optimering, men må aldrig bruges til at foretage uvurderede kliniske ændringer og skal respektere samtykke og grænser for informationsstyring.

**HiPPO-beslutninger.** "HiPPO" – Highest-Paid Person’s Opinion, den bedst betalte persons mening – betegner den fejl, hvor anciennitet tilsidesætter evidens. Evidensdrevne kulturer gør det trygt og normalt at spørge "hvad viser data?" til enhver i rummet og behandler en leders mavefornemmelse som en hypotese, der skal testes, ikke en konklusion.

**Beslutningsregistreringer.** En beslutningsregistrering (eller beslutningslog / [arkitekturbeslutningsregistrering](https://en.wikipedia.org/wiki/Architectural_decision)) fastholder kort: beslutningen, de overvejede muligheder, den vejede evidens, hvem der besluttede, og hvornår. Den gør begrundelsen reviderbar, overlever personaleudskiftning og forhindrer, at den samme diskussion føres igen hvert kvartal.

## Bedste praksis

1. **Afstem evidensens styrke efter risikoniveauet.** Brug NICE ESF-niveauerne som målestok: et lavrisiko-systemværktøj kræver let evidens; et værktøj, der diagnosticerer eller driver behandling, kræver klinisk effektevidens af høj kvalitet. Forholdsmæssighed lader dig bevæge dig hurtigt på det sikre og langsomt på det farlige frem for at anvende én barre på alt.

2. **Kræv klinisk evidens og leveringsevidens, og forveksl dem aldrig.** For enhver væsentlig investering stilles to separate spørgsmål – "er det klinisk effektivt og sikkert?" og "er det brugbart og taget i brug?" – og der kræves evidens for hvert. Adoptionsmetrikker er ikke en erstatning for klinisk validering, og et positivt forsøg er ikke en garanti for brug i virkeligheden.

3. **Start hvert initiativ med en logisk model.** Før du bygger, skriv ned, hvordan du tror, interventionen vil frembringe det resultat, du ønsker. Det afslører uprøvede antagelser tidligt, definerer de metrikker, der betyder noget, og giver din senere evaluering noget konkret at teste.

4. **Brug virkelighedsnær evidens til teknologier, der lærer eller består.** For AI, algoritmer og langlivede tjenester skal indledende forsøg suppleres eller følges af struktureret overvågning af rutinedata – prospektive observationsdesign, pragmatisk evaluering – så du ved, hvordan ydeevnen holder i praksis, og kan fange drift.

5. **Eksperimentér med leveringsspørgsmål; evaluér kliniske.** Brug A/B-test og analyse frit til leveringsoptimering (formulering, flow, prompts) inden for grænserne for informationsstyring og samtykke. Forbehold formel evaluering (forsøg, pragmatiske studier) til spørgsmål om klinisk effekt. Led hvert spørgsmål til den rette metode.

6. **Dræb HiPPO-beslutninger kulturelt, ikke kun proceduremæssigt.** Gør det eksplicit acceptabelt at bede enhver beslutningstager om evidensen, præsentér ledelsens synspunkter som hypoteser, og forpligt dig på forhånd til, hvilken evidens der ville få dig til at ændre mening. Et team, der trygt kan udfordre anciennitet, træffer bedre beslutninger.

7. **Registrér beslutninger og deres evidens.** Før en let beslutningslog for hvert væsentligt valg – hvad, hvorfor, hvilken evidens, hvem, hvornår. Det skaber reviderbarhed over for tilsynsmyndigheder og offentligheden, forhindrer endeløs genforhandling og bevarer den institutionelle hukommelse gennem personaleudskiftning.

8. **Vær opmærksom på dataetik.** Evidensarbejde bruger patientdata; behandl lovlighed, samtykke, proportionalitet og retfærdighed som designbegrænsninger. Vær på vagt over for skæve datasæt, der cementerer ulighed, respektér tavshedspligten, og sørg for, at dine evidenspraksisser selv ville overleve offentlig granskning.

## Spørgsmål at drøfte med dit team

1. **Kan vi for vores seneste vigtigste beslutning pege på både klinisk evidens og leveringsevidens – holdt adskilt – eller trådte den ene stille og roligt i stedet for den anden?**
   Dette spørgsmål afprøver emnets insisteren på, at klinisk evidens ("virker det, og er det sikkert?") og leveringsevidens ("er det brugbart og taget i brug?") ligger på separate akser, og at det at blande dem er en klassisk, farlig fejl. Det er vigtigt, fordi en tjeneste kan være klinisk sund, men ubrugt, eller meget brugt, men klinisk uvalideret, og i sundhed og pleje kan det at forveksle et højt brugstal med klinisk bevis bringe patienter i fare, mens det ligner succes. Spændingen, der skal frem, er, at leveringsevidens er hurtig, billig og smigrende – analysedashboards fyldes hurtigt – mens klinisk evidens er langsom, dyr og ofte inkonklusiv, så der er konstant pres for at lade adoptionsmetrikker bære argumentet. Tag et rigtigt bestyrelsesnotat eller en investeringssag og gennemgå den: er de to slags evidens adskilt, er hver faktisk til stede, og hviler den kliniske påstand på noget mere end leverandørens demo eller et enkeltstående studie fra ét sted? Et godt, ærligt svar peger på en specifik beslutning, indrømmer, hvor en evidenstype var tynd eller fraværende, og forpligter sig til at kræve begge eksplicit og adskilt ved fremtidige væsentlige valg frem for at lade et stærkt brugstal berolige alle.

2. **Hvor forholdsmæssig er vores evidensbarre egentlig – kræver vi guldstandardforsøg til lavrisikoændringer, mens vi vinker højere risikoværktøjer igennem på tynd evidens?**
   Emnet rammesætter forholdsmæssighed gennem NICE ESF-niveauerne: let evidens til et lavrisiko-systemværktøj, klinisk effektevidens af høj kvalitet til et værktøj, der diagnosticerer eller driver behandling, så dette spørgsmål tjekker, om jeres organisation faktisk kalibrerer barren efter risiko eller anvender én sløv standard. Det er vigtigt, fordi begge fejlretninger er dyre – analyselammelse standser en nyttig lavrisiko-indholdsændring bag en unødvendig RCT, mens et utilstrækkeligt granskede AI-værktøj, der informerer kliniske beslutninger, slipper igennem på en overbevisende demo – og hver af dem underminerer tilliden til evidenskulturen. Afvejningen, der skal drøftes, er, at forholdsmæssighed kræver skøn og selvtillid til at forsvare det, hvilket er sværere end en ensartet regel; et generelt "alt kræver et forsøg" eller "hvis det er digitalt, så kør bare en pilot" er lettere at administrere, men forkert. Gennemgå to eller tre nuværende eller nylige teknologier, placér hver i sit ESF-niveau sammen, og tjek, om den evidens, I krævede, svarede til niveauet eller var drevet af, hvem der var fortaler. Et ærligt svar viser, at teamet kan placere en teknologis risikoniveau, indrømmer, hvor barren er sat forkert i begge retninger, og behandler forholdsmæssighed som en eksplicit, forsvarlig standard frem for en instinktiv fornemmelse.

3. **Hvor trygt er det, kulturelt, at spørge den mest seniore person i rummet "hvad er evidensen?" – og hvornår behandlede vi sidst en leders mavefornemmelse som en hypotese, der skal testes, frem for en beslutning?**
   Dette spørgsmål konfronterer HiPPO-fejlen direkte, hvor den bedst betalte persons mening tilsidesætter evidens, og afprøver, om jeres erklærede forpligtelse til evidens overlever mødet med hierarkiet og den leverandørdemo, der imponerede en respekteret direktør. Det er vigtigt, fordi en demodrevet beslutning om at udrulle et uvurderet værktøj i sundhed og pleje ikke er et kommercielt spil, men en risiko for klinisk sikkerhed og offentlige midler, og i det øjeblik, udfordring bliver utryg, holder evidens op med at styre beslutninger. Den reelle spænding er, at psykologisk tryghed ikke kan påbydes ved politik; den bygges af ledere, der synligt inviterer til udfordring, præsenterer deres egne synspunkter som hypoteser og på forhånd forpligter sig til, hvilken evidens der ville ændre deres mening – adfærd, der føles blottende og er nem at springe over under tidspres. Forankr samtalen i det konkrete: husk en nylig beslutning drevet mere af anciennitet eller begejstring end af data, og spørg, om nogen udfordrede den, om det føltes trygt, og hvad en beslutningsregistrering ville have fastholdt. Et godt svar er åbent om, hvor hierarkiet i dag vinder, nævner konkret adfærd, ledere vil tilegne sig for at gøre udfordring normal, og parrer den kulturelle forpligtelse med den lette beslutningslog, der gør begrundelsen reviderbar og forhindrer, at den samme diskussion føres igen.

4. **For de teknologier, der lærer eller består – vores AI, vores algoritmer, vores langlivede tjenester – hvordan ville vi egentlig vide, om deres ydeevne var drevet, siden vi validerede dem, og hvem holder øje?**
   Emnet er eksplicit om, at et enkeltstående forsøg ikke kan fange den løbende adfærd hos teknologier, der lærer eller ændrer sig, og at "evaluering én gang for alle" er et navngivet fejlmønster, hvis modgift er virkelighedsnær evidens og løbende overvågning. Dette spørgsmål er vigtigt, fordi faren er stille: en AI-model for forværring eller en triagealgoritme kan forringes, efterhånden som patientsammensætning, kodepraksis eller opstrøms datapipelines skifter, og i modsætning til en ødelagt funktion svigter intet åbenlyst – værktøjet bliver ved med at producere plausible outputs, mens dets fejlalarm- eller misserrate stille og roligt forværres. Spændingen, der skal frem, er, at overvågning er ufascinerende og ufinansieret i forhold til begejstringen ved udrulning: når en business case er underskrevet og gevinster er bogført, ressourcesætter få organisationer det prospektive observationsarbejde, driftmetrikkerne eller den navngivne ejer, der gennemgår dem. Vælg ét værktøj i drift med AI eller algoritme og følg dets liv efter udrulning konkret – hvilke rutinedata overvåges, mod hvilken baseline, i hvilken rytme, og hvem ville eskalere en forringelse, og til hvem. Et ærligt svar indrømmer, hvor valideringen stoppede ved idriftsættelsen, skelner mellem de værktøjer, der reelt har brug for kontinuerlig overvågning, og dem, der ikke har, og forpligter sig til en navngivet ejer, en metrik og en gennemgangsrytme frem for en vag intention om at "holde øje med det".

5. **Når en beslutning, vi træffer i dag, bliver draget i tvivl om to år – af en ny direktør, en tilsynsmyndighed eller offentligheden – hvad vil den skriftlige registrering da faktisk vise, og ville den overleve den granskning?**
   Emnet behandler beslutningsregistreringen som kerneinfrastruktur: en let log over beslutningen, mulighederne, den vejede evidens, hvem der besluttede, og hvornår, værdsat fordi den gør begrundelsen reviderbar, overlever personaleudskiftning og forhindrer, at den samme diskussion føres igen hvert kvartal. Dette spørgsmål er vigtigt, fordi sundheds- og plejebeslutninger tiltrækker tilsyns-, parlamentarisk og offentlig granskning på en måde, kommercielle sjældent gør, og det udførte eksempel i dette emne drejer sig netop om dette – to år senere sætter en ny direktør spørgsmålstegn ved et udrullet værktøj, og "registreringen svarer". Den reelle spænding er mellem disciplinens ubetydelige pris pr. beslutning og det kroniske pres for at springe den over: at skrive ned, hvorfor man besluttede, føles bureaukratisk i øjeblikket, og de mennesker, der mest har brug for registreringen, er fremtidige medarbejdere, som ikke er i rummet til at kræve den. Afprøv det mod virkeligheden ved at forsøge at rekonstruere begrundelsen bag et væsentligt valg truffet for tolv eller atten måneder siden – kan I finde, hvilken evidens der blev vejet, og hvilke alternativer der blev afvist, eller kun, at en beslutning blev truffet? Et godt svar tager stilling til, om registreringer reelt føres for væsentlige beslutninger eller kun for de nemme, om de fastholder evidens og muligheder frem for blot konklusioner, og om nogen nogensinde læser dem igen – for en ulæst log med kun konklusioner er revisionsteater, ikke institutionel hukommelse.

6. **Hvis data træner og validerer vores evidens, og er vi sikre på, at det ikke ville cementere ulighed – eller behandler vi dataetik som en blanket, der skal underskrives, frem for en designbegrænsning?**
   Emnet insisterer på, at evidensarbejde kører på patientdata, og at lovlighed, samtykke, proportionalitet og retfærdighed er designbegrænsninger, ikke papirarbejde, og advarer specifikt mod skæve datasæt, der cementerer ulighed, og mod "etik som papirarbejde" som fejlmønster. Dette spørgsmål er vigtigt, fordi en teknologi valideret på en ikke-repræsentativ befolkning kan yde dårligere for de grupper, der allerede er dårligst stillet – en model for forværring eller diagnostik trænet, hvor visse etniciteter, aldersgrupper eller komorbiditeter er underrepræsenterede, kan føre den skævhed ind i enhver fremtidig beslutning, og i national skala cementerer et godkendt datasæt den ulighed i hele systemet. Spændingen er, at retfærdighedsanalyse er sværere og langsommere end et overskriftstal for nøjagtighed: den kræver, at du udspørger, hvem der er i data, og hvem der mangler, opdeler ydeevnen på delgrupper og undertiden accepterer, at din evidens er svagere for de befolkningsgrupper, du mest har brug for at tjene. Gør det konkret ved at tage et nyligt eller foreslået værktøj og spørge, hvis journaler det blev bygget og testet på, om ydeevnen nogensinde blev undersøgt pr. delgruppe, og om informationsstyringens godkendelse overhovedet beskæftigede sig med retfærdighed eller blot bekræftede det lovlige grundlag. Et ærligt svar adskiller reel etisk granskning fra afkrydsning, indrømmer, hvor repræsentativitet aldrig blev tjekket, og behandler skævhed og retfærdighed som spørgsmål, evidensen selv må besvare, frem for et compliance-trin boltet på til sidst.

## I praksis: et eksempel fra sundhed og pleje

Et kommunalt sundhedshospital tilbydes et AI-værktøj, der markerer patienter i risiko for forværring ud fra målinger af vitale tegn. En HiPPO-beslutning ville udrulle det, fordi en respekteret direktør var imponeret over leverandørens demo.

I stedet behandler hospitalet tilbuddet som en hypotese. Det placerer værktøjet i det NICE ESF-risikoniveau, der passer til en teknologi, der informerer kliniske beslutninger, og beder leverandøren om effektevidens på det niveau; det stærkeste, der tilbydes, er et lille studie fra ét sted. Hospitalet skriver en **logisk model** (bedre tidlig varsling → tidligere eskalering → færre undgåelige forværringer) og designer en **pragmatisk evaluering**: en udrulning i skyggetilstand, hvor værktøjets alarmer logføres, men ikke handles på, sammenlignet med faktiske udfald, plus kvalitative interviews med sygeplejersker om, hvordan det passer ind i arbejdsgangen.

Parallelt indsamler det **leveringsevidens**: ville klinikere faktisk bemærke og stole på alarmerne? Det kører test i A/B-stil på præsentationen af alarmer. Lederne for informationsstyring og klinisk sikkerhed godkender databrugen og farelogen. Efter tre måneder viser RWE en beskeden, men reel forbedring og en acceptabel fejlalarmrate, og leveringsevidensen viser, at klinikere engagerer sig i de redesignede alarmer. Beslutningen om at gå videre – med trinvis udrulning og fortsat overvågning – skrives ind i en beslutningsregistrering, der citerer den vejede evidens. To år senere, da en ny direktør sætter spørgsmålstegn ved værktøjet, svarer registreringen.

## Sektorperspektiver

Alle skylder den samme pligt til at afstemme evidens efter risiko, men ressourcerne, incitamenterne og ansvaret omkring evidens varierer kraftigt efter organisation.

### Startup

En startups begrænsning er, at klinisk evidens af guldstandard er langsom og dyr, mens likviditeten er kort, så fristelsen er at sælge adoptionsmetrikker, som om de var bevis for klinisk effekt. Det ærlige træk er at placere produktet i det rette NICE ESF-niveau tidligt og være åben over for købere om evidenshullet, med en klar logisk model og en billig pragmatisk evaluering (en pilot i skyggetilstand, en afbrudt tidsserie mod ét enkelt sted) for at generere den første virkelighedsnære evidens. Beslutningsregistreringer koster næsten ingenting og er uforholdsmæssigt værdifulde for et lille team, idet de bevarer begrundelsen gennem hurtige kursskift og giver due diligence-orienterede investorer og NHS-vurderere et revisionsspor. Den disciplin, der betaler sig, er at modstå grundlæggerens HiPPO-mavefornemmelse og behandle hvert "demoen faldt godt" som en hypotese, der skal testes.

### Lille virksomhed

En etableret lille udbyder – en lægepraksis, et lokalt apotek, et plejehjem, en enkelt klinik, en lille sundhedsteknologileverandør forbi startup-fasen – bærer den samme pligt til at afstemme evidens efter risiko, men har rigtige patienter, stram kontantstrøm og ringe eller ingen dedikeret digital kapacitet til at gøre det med. Det realistiske træk er at læne sig op ad evidens, andre allerede har produceret, frem for at generere sin egen: brug NICE ESF-niveauet og DTAC-vurderingen af et kandidatværktøj som færdiglavet forholdsmæssighed, bed leverandører om den niveauspecifikke kliniske effektevidens, og afvis at lade jer overtale til et uvurderet produkt af en smart demo. Leveringsevidens er der, hvor en lille organisation reelt kan føre an, fordi den ser sine egne patienter tæt – nogle ugers ærlig observation af, om personalet faktisk bruger et værktøj, og om det reducerer fejlefterspørgsel, er virkelighedsnær evidens inden for rækkevidde. En enlinjers beslutningsregistrering – hvad vi valgte, hvilken evidens vi så, hvem der besluttede – koster et lille team næsten ingenting og beskytter det, når en partner forlader praksissen, eller en CQC-inspektør spørger hvorfor. Fælden, der skal undgås, er at antage, at det at være lille fritager én for evidensbarren; pligten over for patienter er identisk, kun ressourcerne er det ikke.

### Stor virksomhed

Et NHS-hospital eller ICS har rutinedata, patientvolumener og analysekapacitet til at gøre alvorlig evaluering – og det ansvar, der kræver det, fordi udrulning af et ubeviset værktøj i stor skala samtidig er en risiko for klinisk sikkerhed og offentlige midler. Fejlmønstret er institutionelt: en respekteret direktør, der går ind for en leverandørdemo, eller en business case bygget på forventede gevinster, ingen senere tjekker. Modgiften er at gøre det kulturelt trygt at spørge enhver beslutningstager "hvad er evidensen?", at holde klinisk evidens og leveringsevidens på separate akser i hvert bestyrelsesnotat og at finansiere løbende virkelighedsnær overvågning af AI og langlivede tjenester frem for at validere én gang. En stor medicinal- eller sundhedsteknologivirksomhed bringer formel forsøgsmaskineri med, men må vogte sig mod publikationsbias og confounding i den virkelighedsnære evidens, den genererer.

### Myndighed

Et nationalt organ – NICE, NHS England, DHSC, MHRA, UKHSA – fastsætter ofte den evidensbarre, andre skal klare, så dets arbejdsmåder former hele markedet: ESF, DTAC og regulering af software som medicinsk udstyr er redskaber for ansvar i befolkningsskala. Beslutninger her tiltrækker tilsyns-, parlamentarisk og offentlig granskning, så registreringen af, *hvorfor* en teknologi blev anbefalet eller indkøbt, er lige så vigtig som beslutningen, og gennemsigtighed om evidensens begrænsninger er en pligt, ikke en høflighed. Risikoen på denne skala er at pålægge en teknologi i hele systemet på tynd evidens eller omvendt at kræve en RCT for en lavrisikoændring og dermed standse nyttig innovation. Modgiften er forholdsmæssighed gjort eksplicit i offentliggjorte standarder samt opmærksomhed på dataetik og retfærdighed, fordi et skævt datasæt, der er nationalt godkendt, cementerer ulighed i stor skala.

## Typiske fejlmønstre

- **Demodrevne beslutninger.** At købe, fordi en demonstration imponerede en leder. Modgift: behandl tilbud som hypoteser; kræv niveauspecifik evidens.
- **Brug forvekslet med validering.** At citere adoptionstal som bevis for, at et værktøj er klinisk effektivt. Modgift: hold klinisk evidens og leveringsevidens på separate akser.
- **Evaluering én gang for alle.** At validere én gang og aldrig overvåge, især for AI, der driver. Modgift: virkelighedsnær evidens og løbende overvågning.
- **Analyselammelse.** At kræve en RCT for en lavrisiko-indholdsændring. Modgift: forholdsmæssige metoder; A/B og pragmatisk evaluering, hvor risikoen er lav.
- **Uregistrerede beslutninger.** Intet spor af, hvorfor et valg blev truffet, så det diskuteres igen og ikke kan revideres. Modgift: en let beslutningslog.
- **Etik som papirarbejde.** At behandle dataetik som en blanket, der skal underskrives, frem for en designbegrænsning. Modgift: byg lovlighed, samtykke og retfærdighed ind i evidensdesignet.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Grundlag for beslutninger | Anciennitet / demoer (HiPPO) | Nogle data konsulteres | Evidens kræves rutinemæssigt, afstemt efter risiko | Evidensbarren følges og kvalitetssikres mod risikoniveauer | Forhåndsforpligtede evidenstærskler; mavefornemmelser testes |
| Klinisk versus levering | Blandet sammen eller den ene ignoreret | Begge nævnes | Begge kræves og adskilles | Begge måles mod definerede tærskler | Begge overvåges kontinuerligt |
| Evaluering | Ingen eller bagefter | Lejlighedsvis, ad hoc | Logiske modeller + forholdsmæssige design | Evalueringer styres, med KPI’er fulgt mod mål | RWE og løbende evaluering indlejret |
| Dataetik | Eftertanke | Kun compliance | Etik designet ind | Retfærdighedsmetrikker gennemgås mod tærskler | Retfærdighed og skævhed overvåges aktivt |
| Beslutningsregistreringer | Ingen | Inkonsekvente noter | Standard beslutningslog | Logens fuldstændighed måles og kvalitetssikres | Logge genbruges, revideres og læres af |

## Tjekliste

- [ ] Hver teknologi er placeret i et NICE ESF-risikoniveau, med evidens krævet i overensstemmelse hermed.
- [ ] Hver væsentlig beslutning har både klinisk evidens og leveringsevidens, holdt adskilt.
- [ ] En logisk model findes, før der bygges, og nævner resultater og metrikker.
- [ ] Evalueringsdesignet er forholdsmæssigt i forhold til risiko (A/B og pragmatisk for lav; forsøg/RWE for høj).
- [ ] Virkelighedsnær evidens og overvågning er på plads for AI og langlivede tjenester.
- [ ] Det er kulturelt trygt at spørge enhver beslutningstager "hvad er evidensen?"
- [ ] Hver væsentlig beslutning er fastholdt i en beslutningslog (hvad, hvorfor, evidens, hvem, hvornår).
- [ ] Databrug er lovlig, samtykket, forholdsmæssig og tjekket for skævhed og retfærdighed.

## Centrale kilder

- NICE — *Evidence Standards Framework for digital health technologies (ESF)* (nice.org.uk).
- NHS England / NHSX — *Digital Technology Assessment Criteria (DTAC)*.
- MHRA — vejledning om *software og AI som medicinsk udstyr*.
- Oxford Centre for Evidence-Based Medicine — *Levels of Evidence* (evidenshierarkiet).
- HM Treasury — *The Magenta Book* (vejledning om evaluering, logiske modeller og evalueringsdesign).
- MRC — rammeværket *Developing and evaluating complex interventions*.
- Ron Kohavi et al. — *Trustworthy Online Controlled Experiments* (A/B-test).
- Michael Nygard — *Architecture Decision Records* (mønster for beslutningslog).

## Referencer

1. Hierarchy of evidence — Wikipedia — https://en.wikipedia.org/wiki/Hierarchy_of_evidence
2. Evidence-based medicine — Wikipedia — https://en.wikipedia.org/wiki/Evidence-based_medicine
3. Systematic review — Wikipedia — https://en.wikipedia.org/wiki/Systematic_review
4. Meta-analysis — Wikipedia — https://en.wikipedia.org/wiki/Meta-analysis
5. Randomized controlled trial — Wikipedia — https://en.wikipedia.org/wiki/Randomized_controlled_trial
6. Real world evidence — Wikipedia — https://en.wikipedia.org/wiki/Real_world_evidence
7. Logic model — Wikipedia — https://en.wikipedia.org/wiki/Logic_model
8. Theory of change — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_change
9. Interrupted time series — Wikipedia — https://en.wikipedia.org/wiki/Interrupted_time_series
10. A/B testing — Wikipedia — https://en.wikipedia.org/wiki/A/B_testing
11. Architectural decision (Architecture Decision Records) — Wikipedia — https://en.wikipedia.org/wiki/Architectural_decision
12. Evidence Standards Framework for digital health technologies (ESF) — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
13. Digital Technology Assessment Criteria (DTAC) — NHS England — https://www.nhs.uk/digital-technology-assessment-criteria-dtac/
14. Software and AI as a Medical Device — MHRA, GOV.UK — https://www.gov.uk/government/publications/software-and-artificial-intelligence-ai-as-a-medical-device
15. Oxford Centre for Evidence-Based Medicine: Levels of Evidence — University of Oxford — https://www.cebm.ox.ac.uk/resources/levels-of-evidence/ocebm-levels-of-evidence
16. *The Magenta Book* (guidance on evaluation) — HM Treasury, GOV.UK — https://www.gov.uk/government/publications/the-magenta-book
17. *Developing and evaluating complex interventions* — Medical Research Council (MRC) — https://www.mrc.ukri.org/documents/pdf/complex-interventions-guidance/
18. *Trustworthy Online Controlled Experiments* — Ron Kohavi, Diane Tang & Ya Xu, Cambridge University Press — https://experimentguide.com/
