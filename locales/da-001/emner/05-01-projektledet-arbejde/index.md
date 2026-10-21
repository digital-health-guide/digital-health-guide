# Emne 5.1 — Projektledet arbejde

**I én sætning:** Projektledet arbejde er det rette redskab, når opgaven har et defineret omfang, en afgrænset levetid og en klar sluttilstand — en midlertidig, kontrolleret indsats leveret til aftalt tid, pris og kvalitet og derefter afsluttet.

## Hvorfor det er vigtigt i sundhed og pleje

Ikke alt er en levende tjeneste. Noget af det vigtigste arbejde i sundhed og pleje er reelt afgrænset: [migrering](https://en.wikipedia.org/wiki/Data_migration) fra én [elektronisk patientjournal](https://en.wikipedia.org/wiki/Electronic_health_record) til en anden, udrulning af Wi-Fi på tværs af et hospitalsområde, udskiftning af servere ved ende på levetid, nedlæggelse af et legacy-system, før en leverandørkontrakt udløber, eller levering af den digitale del af et nyt hospitalsbyggeri. Dette arbejde har en begyndelse, en midte og en bestemt slutning. At styre det som et åbent produkt ville spilde penge og sløre ansvaret; det har brug for projektets disciplin.

[Projektledelse](https://en.wikipedia.org/wiki/Project_management) tjener sin plads her netop fordi indsatsen er høj, og begrænsningerne er hårde. En datamigreringsovergang har en fast go-live-weekend, en patientsikkerhedsrisiko, hvis journaler går tabt eller ødelægges, og en kontraktlig klippekant, hvis det gamle system slukkes. Offentlige midler er bundet til en business case, og parlamentet, revisorer og bestyrelser vil spørge, om de blev brugt som godkendt. Projektledet arbejde giver den styring — en business case, stage gates og en kontrolleret afslutning — der lader en bestyrelse forpligte kapital med tillid og stoppe arbejdet rent, hvis begrundelsen falder bort.

Faren er at bruge dette redskab til det forkerte arbejde. Projektstyring anvendt på en udviklende digital tjeneste producerer "byg det og opgiv det"-patologien beskrevet i emne 5.0 — Produktledet arbejde. Dette emne forklarer, hvor projektledet arbejde er det rette instrument, og hvor dets grænser begynder. Det står ved siden af emne 5.2 — Programledet arbejde, der koordinerer flere projekter, og emne 5.3 — Virksomhedsdækkende projektporteføljestyring (EPPM), der vælger mellem disse redskaber.

## Kernebegreber

**Projekt.** En midlertidig organisation oprettet for at levere ét eller flere definerede outputs efter en aftalt specifikation inden for begrænsninger af tid, pris og kvalitet. Det definerende træk er, at det er *midlertidigt* — det findes for at nå en defineret slutning og derefter opløses.

**[Jerntrekanten](https://en.wikipedia.org/wiki/Project_management_triangle) (omfang, tid, pris).** Den klassiske begrænsningsmodel: omfang, tidsplan og budget er indbyrdes afhængige, og kvaliteten påvirkes af, hvordan de balanceres. Ændr ét, og I ændrer de andre; projektstyring er i høj grad disciplinen at håndtere denne afvejning gennemsigtigt.

**[PRINCE2](https://en.wikipedia.org/wiki/PRINCE2) (PRojects IN Controlled Environments).** Den britiske regerings strukturerede projektmetode, udbredt i NHS og den offentlige sektor. Den bygger på principper (løbende forretningsmæssig begrundelse, definerede roller, styring i faser, styring ved undtagelse, fokus på produkter, læring af erfaring, tilpasning til omgivelserne) og organiserer arbejdet i kontrollerede faser med en projektbestyrelse, der giver retning.

**PMI / PMBOK.** [Project Management Institutes](https://en.wikipedia.org/wiki/Project_Management_Institute) *[Guide to the Project Management Body of Knowledge](https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge)* er den dominerende internationale pendant, der rammesætter projektarbejde omkring præstationsdomæner og principper frem for en foreskrevet faseopdelt proces. PRINCE2 og PMBOK er komplementære linser på den samme disciplin.

**[Business case](https://en.wikipedia.org/wiki/Business_case).** Dokumentet, der begrunder projektet: problemet, de vurderede muligheder, de forventede gevinster, omkostningerne og risiciene. I PRINCE2 er business casen levende — den kontrolleres ved hver fasegrænse, og hvis den løbende begrundelse forsvinder, er den rette beslutning at stoppe. I britiske offentlige organer er den normalt struktureret som [HM Treasury](https://en.wikipedia.org/wiki/HM_Treasury)s Five Case Model (strategisk, økonomisk, kommerciel, finansiel, ledelsesmæssig).

**[Stage gates](https://en.wikipedia.org/wiki/Phase-gate_process).** Et PRINCE2-projekt er opdelt i ledelsesfaser adskilt af beslutningsporte. Ved hver grænse træffer projektbestyrelsen en bevidst stop/fortsæt-beslutning: den gennemgår fremdrift og business case, godkender næste faseplan og forpligter kun ressourcer til den fase. Sådan bevarer en bestyrelse kontrollen og undgår at smide gode penge efter dårlige.

**RAID-log.** Ét enkelt register over Risici, Antagelser, Issues (problemer) og Afhængigheder (Dependencies) — projektlederens centrale kontrolartefakt. RAID gør usikkerhed synlig og håndterbar: risici er ting, der kan ske, issues er ting, der er sket, antagelser er det, planen støtter sig til, og afhængigheder er det, planen har brug for andetsteds fra.

## Bedste praksis

1. **Start med en ærlig business case, og hold den i live.** Brug en anerkendt struktur (Five Case Model i britiske offentlige organer) til at vurdere reelle muligheder, ikke ét forudbestemt svar. Behandl derefter business casen som et levende dokument gennemgået ved hver stage gate — løbende forretningsmæssig begrundelse er det første PRINCE2-princip, og at miste den er en legitim grund til at stoppe.

2. **Definér omfanget præcist, og kontrollér ændringer af det.** Et projekts værdi er en klar, afgrænset definition af "færdig". Aftal omfanget, baselin det, og led hver foreslået ændring gennem en ændringskontrolproces, så [scope creep](https://en.wikipedia.org/wiki/Scope_creep) ikke i det stille æder budgettet og tidsplanen.

3. **Styr i faser med reelle beslutningsporte.** Opdel arbejdet i ledelsesfaser, og hold en ægte stop/fortsæt-gennemgang ved hver grænse. En port, der altid siger "fortsæt", er teater; disciplinen virker kun, hvis det er en reel mulighed at stoppe eller omplanlægge, som bestyrelsen vil udøve.

4. **Kør en levende RAID-log, og eskalér ved undtagelse.** Vedligehold Risici, Antagelser, Issues og Afhængigheder ét sted, gennemgå dem regelmæssigt, og brug PRINCE2’s "styring ved undtagelse" — projektlederen arbejder inden for aftalte tolerancer og eskalerer kun til bestyrelsen, når en tolerance er truet. Det holder seniortid fokuseret på reelle beslutninger.

5. **Tildel klart, entydigt ansvar.** PRINCE2 insisterer på definerede roller: en projektbestyrelse med en senior ansvarlig ejer/direktør, der ejer business casen, en senior bruger, der repræsenterer dem, der skal bruge outputtet, og en senior leverandør. Tvetydigt ansvar er den hyppigste årsag til drift.

6. **Planlæg overgangen til drift, før I starter.** Et projekt leverer et output; nogen skal drifte det bagefter. Aftal det modtagende team, supportmodellen og den kliniske sikkerhedsoverdragelse (DCB0160 for udrulning) som en del af projektet, så go-live ikke er en klippekant ind i et ejerskabsvakuum.

7. **Byg klinisk sikkerhed, informationsstyring og test ind.** For ethvert system, der berører patientdata, er den kliniske sikkerhedscase, DPIA og overgangs-/rollback-test ikke valgfrie ekstraer — de er portgivende leverancer. En migrering uden en testet rollbackplan er ikke klar til at gå live.

8. **Afslut projektet bevidst, og indfang læring.** En defineret slutning betyder en defineret afslutning: bekræft, at outputs er accepteret, overdrag til drift, frigiv teamet og registrér erfaringer (PRINCE2’s erfaringslog). Et uafsluttet projekt lækker ressourcer og ansvar i det uendelige.

## Spørgsmål at drøfte med dit team

1. **Er det arbejde, vi står over for, reelt afgrænset med en defineret slutningstilstand, eller rækker vi ud efter projektstyring, fordi det er den finansieringsvej, vi kender?**
   Dette er det afgørende spørgsmål, emnet drejer sig om, fordi projektledet disciplin kun er det rette instrument, når opgaven reelt har en begyndelse, en midte og en bestemt slutning. I en sundheds- og plejeorganisation er trækket mod projektform stærkt — kapitalbudgettering, business case-maskineri og bestyrelsesrapportering er alle bygget til det — så en udviklende digital tjeneste kan blive klædt ud som et projekt blot fordi sådan frigives penge, hvilket så producerer byg-det-og-opgiv-det-patologien. Debatten bør undersøge hver kandidat ærligt: en udskiftning af et patologisystem, før en leverandør trækker støtten tilbage, har en hård kontraktlig klippekant og er utvetydigt afgrænset, mens "forbedr patientappen" ikke har nogen slutningstilstand og hører hjemme i emne 5.0. Overvej, om der er en reel go-live, hvorefter teamet bør opløses, eller om nogen skal blive ved med at forbedre tingen på ubestemt tid. Et godt svar modstår at bruge projektstyring som en vane, nævner den konkrete slutningstilstand og den begivenhed, der definerer "færdig", og er villigt til at sige, at noget af det, vi i dag kører som projekter, aldrig skulle have været projekter.

2. **Ved vores stage gates, ville denne bestyrelse faktisk stoppe eller omplanlægge et projekt, der har mistet sin begrundelse — og kan vi pege på et tidspunkt, hvor vi gjorde det?**
   Stage gates er kun en kontrol, hvis det at stoppe er en reel mulighed, bestyrelsen vil udøve; en port, der altid siger "fortsæt", er teater, og løbende forretningsmæssig begrundelse er det første PRINCE2-princip netop fordi tabet af den bør afslutte arbejdet. Spændingen i sundhed og pleje er akut: at standse en halvt bygget EPJ-migrering eller en laboratoriesystemovergang føles som at indrømme fiasko, spilde sunk cost og forstyrre klinikere, der allerede har ændret deres planer, så bestyrelser rationaliserer at presse på, selv mens business casen i det stille fordamper. Tag et reelt eksempel med til diskussionen — et projekt, hvor test afslørede, at datamapping-risikoen var værre end antaget, eller hvor gevinster skred — og spørg, om porten blev brugt som designet eller stemplet af. Overvej hvilke tolerancer der udløser eskalering, hvem i bestyrelsen der har stående til at kalde et stop, og om sunk cost-ræsonnement bliver navngivet og udfordret i rummet. Et ærligt svar indrømmer, hvor porte har været formaliteter, beskriver de betingelser, under hvilke bestyrelsen reelt ville standse eller omdefinere, og behandler beføjelsen til at stoppe før en offentlig afskrivning som disciplinens reelle værdi frem for en trussel.

3. **Hvem modtager hvert projekts output som en levende tjeneste, og hvordan gør vi klinisk sikkerhedsoverdragelse og løbende ejerskab til en portgivende leverance frem for en klippekant?**
   Et projekt leverer et output; noget afgrænset slutter, men det, det producerede, skal drives, forbedres og holdes sikkert længe efter, teamet er opløst — og den mest almindelige stille fejl er, at ingen ejer det på den anden side. I et system, der berører patientdata, er det ikke administrativ ryddelighed: DCB0160-udrulningssikkerhedscasen, DPIA’en, en testet rollback og et navngivet modtagende team er det, der står mellem en kontrolleret go-live og et ejerskabsvakuum, hvor sikkerhedsrisici akkumuleres uden styring. Debatten bør tvinge klarhed om overgangen, før projektet starter, ikke på go-live-weekenden: hvilket driftsteam tager det, hvad er supportmodellen, og har det team kapacitet og arbejdsform (produktledet, jf. emne 5.0) til at blive ved med at forbedre det. Overvej konkrete nylige go-lives og om overdragelsen var planlagt eller improviseret, og om "projektet er færdigt" fik lov at betyde "og nu er det ingens opgave". Et godt svar nævner det modtagende team og supportmodellen på forhånd, behandler sikkerhedsoverdragelsen som en port, projektet ikke kan passere uden, og tildeler eksplicit den løbende forbedring af den levende tjeneste til den rette arbejdsform frem for at lade den drive.

4. **Når jerntrekanten bider, og omfang, tid og pris kolliderer, hvilken begrænsning bøjer vi, og får patientsikkerhed nogensinde lov at være den variabel, der giver efter?**
   Hvert reelt projekt rammer til sidst øjeblikket, hvor tidsplanen, budgettet og det lovede omfang ikke alle kan holde, og hvordan teamet løser den klemme afslører, hvad det faktisk værdsætter. I sundhed og pleje er fælden særegen: fordi slutdatoen ofte er en hård kontraktlig klippekant — en leverandør, der trækker støtten tilbage, en lejekontrakt, der udløber, et datacenter, der lukker — kan tid ofte ikke flyttes, så presset lander lydløst på kvaliteten, hvilket i et klinisk system betyder at skære i test, komprimere validering eller sende med kendte datamappingfejl. Diskussionen bør på forhånd nævne, hvilket hjørne af trekanten organisationen vil beskytte, og hvilket den vil ofre, og være eksplicit om, at klinisk sikkerhed og informationsstyring ikke er sikkerhedsventilen, selv når alt andet er fast. Se på en nylig overgang, og spørg, hvad der i det stille gav efter, da datoerne holdt: var det rollbackøvelsen, det kliniske valideringsvindue, uddannelsen? Overvej, hvem der har beføjelse til at flytte go-live-datoen frem for at udhule sikkerhedsmarginen, og om den samtale foregår åbent i bestyrelsen eller som standard nede på gulvet. Et ærligt svar angiver prioritetsrækkefølgen før krisen, behandler en skredet dato eller en omplanlagt fase som et legitimt udfald og nægter at lade uudtalt tidspres konvertere til uloggede kliniske risici.

5. **Er vores RAID-log et levende instrument, der ændrer, hvad vi gør, eller et dokument, vi vedligeholder for at se styrede ud — og ville den bringe den risiko frem, der faktisk sænker projektet?**
   En RAID-log fortjener sin plads kun, hvis gennemgang af den ændrer beslutninger; den almindelige patologi er et register skrevet ved opstart, præsenteret for bestyrelser og aldrig reelt handlet på, mens de risici, der betyder noget, modner uset. I en migrering eller overgang er de afgørende risici ofte specifikke og kendelige — historiske resultater, der ikke mapper rent til nye referenceintervaller, en afhængighed af et andet teams firewall-ændringer, en antagelse om at klinisk valideringsressource vil være ledig, når den er nødvendig — og spørgsmålet er, om loggen nævner dem konkret eller gemmer sig bag generiske poster som "ressourcebegrænsninger". Debatten bør teste, om eskalering ved undtagelse er reel: arbejder projektlederen inden for aftalte tolerancer og rejser kun bestyrelsens opmærksomhed, når en er truet, eller forbliver alt enten tavst eller bliver en krise? Overvej, om næsten-hændelser og materialiserede issues føder tilbage i, hvordan næste fase planlægges, eller blot logges og glemmes. Et godt svar kan pege på en beslutning, RAID-loggen faktisk ændrede, skelner de to eller tre risici, der reelt kunne stoppe projektet, fra den lange hale af mindre, og behandler loggen som en arbejdende kontrol frem for en artefakt produceret til assurance.

6. **Efter vi har afsluttet og opløst, tjekker nogen så, om gevinsterne i business casen faktisk blev realiseret — og ville vi vide det, hvis de ikke gjorde?**
   Business casen lover gevinster for at begrunde udgiften, men projektledet arbejde slutter naturligt ved go-live og teamfrigivelse, så sandhedens øjeblik — reducerede migreringen faktisk risiko, skar omkostninger eller forbedrede plejen — falder som regel, efter alle er gået videre, og ingen er ansvarlig for at bekræfte det. Det betyder meget i offentlig sundhed og pleje, hvor penge er bundet til en Five Case business case, som parlamentet, revisorer og bestyrelser fik at vide ville levere specifikke resultater, og alligevel er gevinstrealisering det trin, der oftest springes over, fordi projektet, der ville have ejet det, ikke længere findes. Diskussionen bør afgøre, hvem der arver gevinstopfølgning, når projektet lukker, over hvilken periode og mod hvilke baselinemålinger — som skal indfanges før go-live, ellers går de tabt. Overvej et nylig afsluttet projekt, og spørg ligeud, om nogen siden har tjekket dets lovede gevinster, og om en mangel nogensinde ville nå bestyrelsen, der godkendte det. Et ærligt svar tildeler ejerskab af gevinster efter afslutning til en stående funktion frem for det opløste team, indfanger baselinen, mens projektet stadig er i live, og er villigt til at registrere, at et projekt leverede sit output til tiden og inden for budgettet, men ikke den værdi, der begrundede det.

## I praksis: et eksempel fra sundhed og pleje

Et akuthospital skal udskifte sit aldrende laboratorie-informationsstyringssystem for patologi, før den nuværende leverandør trækker støtten tilbage om 14 måneder. Det er lærebogseksemplet på projektledet arbejde: fast slutdato, defineret omfang, en hård kontraktlig klippekant og akut patientsikkerhedsrisiko, hvis resultater går tabt i migreringen.

Hospitalet skriver en Five Case business case, der vurderer tre muligheder (opgradering på stedet, indkøb af et nyt system, deling af en regional instans), vælger indkøb og opretter et PRINCE2-projekt med en klar bestyrelse: en direktør, der ejer business casen, en senior bruger (den ledende bioanalytiker) og den senior leverandør. Arbejdet er opdelt i ledelsesfaser — indkøb, bygning og konfiguration, datamigrering, test og go-live — der hver slutter i en beslutningsport.

Projektlederen kører en RAID-log. En central risiko er, at historiske resultater måske ikke mapper rent til det nye systems referenceintervaller; en afhængighed er netværksteamets firewall-ændringer; en antagelse er, at klinisk valideringsressource vil være tilgængelig til test. Ved migreringsfasens port afslører test, at datamapping-risikoen er værre end antaget, så bestyrelsen bruger porten som designet: den fortsætter ikke blindt, men godkender en omplanlagt fase med et udvidet valideringsvindue og en testet rollbackplan, der beskytter patientsikkerheden over den oprindelige tidsplan.

Go-live sker over en kontrolleret weekend med rollbackplanen i beredskab og en DCB0160-klinisk sikkerhedsgodkendelse. Systemet accepteres, overdrages til driftsteamet, der skal køre det, erfaringer logges, og projektet afsluttes formelt. Teamet opløses — korrekt, fordi jobbet reelt er færdigt. Det, der kommer derefter (kontinuerlig forbedring af den levende tjeneste), er en anden arbejdsform, og hospitalet er omhyggeligt med ikke at holde et fuldt projektteam kørende evigt for at gøre det.

## Sektorperspektiver

### Startup

Et lille digitalt sundhedsfirma kører sjældent formelle PRINCE2-projekter, men reelt afgrænset arbejde dukker stadig op — en engangsmigrering af data til en ny cloudplatform, et Cyber Essentials- eller DTAC-certificeringspush, pentest-udbedring før en stor NHS-kontrakt. Startuppen håndterer dem som lette, tidsbegrænsede indsatser med en navngiven ejer og en klar definition af færdig og låner disciplinen (fast omfang, en slutdato, en go/no-go) uden ceremonien (ingen formel projektbestyrelse, ingen femtrins-portstyring). Finansiering er reelt grundlæggeropmærksomhed og likviditet, så risikoen er, at afgrænset arbejde bliver klemt mellem produktsprints og aldrig reelt afsluttes. Rettelsen er at nævne en enkelt ejer og en hård deadline og behandle certificeringen eller migreringen som overstået frem for evigt "i gang".

### Lille virksomhed

En etableret lille udbyder — en lægepraksis, et lokalt apotek, et plejehjem eller en enkelt klinik — møder projektledet arbejde som lejlighedsvise, men uundgåelige begivenheder: skift af klinisk systemleverandør, migrering til en ny praksisstyringsplatform eller udskiftning af udtjente enheder, før supporten udløber. Organisationen har reelle patienter og løbende drift, men ingen dedikeret projekt- eller it-funktion, så "projektteamet" er som regel praksislederen eller en registreret leder, der gør det ved siden af det daglige arbejde og ofte læner sig op ad den kommende leverandør for at køre migreringen. Den disciplin, der overlever mødet med virkeligheden, er den lette kerne: en klar slutningstilstand, et baselinet omfang, så leverandøren ikke i det stille udvider det, en navngiven ansvarlig person og en testet rollback før enhver overgang, der berører patientjournaler. Fælden er at outsource ikke blot arbejdet, men dømmekraften — at acceptere leverandørens go-live-dato og datamapping-forsikringer uden uafhængig kontrol — fordi de samme pligter for klinisk sikkerhed og informationsstyring (DCB0160, en DPIA) gælder, uanset hvor lille organisationen er. Rettelsen er at beholde ejerskabet af go/no-go-beslutningen og acceptkriterierne internt, selv når alle andre hænder tilhører leverandøren.

### Stor virksomhed

Et stort NHS-hospital eller integreret plejesystem (ICS) er der, hvor projektledet arbejde er mest hjemme: EPJ-udskiftninger, Wi-Fi i hele området, datacenterudflytninger og overgange bærer alle hårde kontraktlige og patientsikkerhedsmæssige klippekanter. Her er hele apparatet berettiget — en Five Case business case, en PRINCE2-bestyrelse med en navngiven direktør/SRO, senior bruger og senior leverandør, ledelsesfaser med reelle porte og en levende RAID-log — fordi summerne er store, sikkerhedseksponeringen akut, og intern revision og bestyrelsen vil granske udgiften. Det karakteristiske svigt i denne skala er at anvende den samme styring vilkårligt på levende tjenester (emne 5.0 — Produktledet arbejde) og afgrænset arbejde, så et porteføljeoverblik (emne 5.3 — Virksomhedsdækkende projektporteføljestyring (EPPM)), der leder hvert stykke arbejde til den rette arbejdsform, betyder noget. Klinisk sikkerhed (DCB0160) og en testet rollback er portgivende leverancer, ikke valgfrie ekstraer.

### Myndighed

I national eller større projektskala sidder projektledet arbejde inde i regeringens assurance-regime: Infrastructure and Projects Authority kører gateway-reviews, HM Treasurys Green Book og Five Case Model styrer business casen, og de største projekter indgår i Government Major Projects Portfolio med offentliggjort ansvar over for parlamentet og National Audit Office. Ansvaret er intenst offentligt — den senior ansvarlige ejer er personligt ansvarlig og kan blive kaldt for et udvalg — så stage gates og mulighedsvurderinger er kontrol af lovbestemt kaliber, ikke teater. Finansiering frigives tranche for tranche mod godkendte business cases, og risikoappetitten er lav, fordi fiasko bliver forsidestof. Disciplinens reelle værdi her er beføjelsen til at stoppe eller omdefinere et fejlende projekt, før det bliver en offentlig afskrivning.

## Typiske fejlmønstre

- **Projektstyring af en udviklende tjeneste.** At anvende fast-omfang, opløs-ved-slutningen-styring på et levende digitalt produkt producerer opgivelsespatologien. Løsning: brug produktledet arbejde (emne 5.0), hvor tjenesten er løbende.
- **Business casen som en engangsbillet til finansiering.** Skrevet én gang for at låse penge op, derefter aldrig gensete. Løsning: gennemgå den ved hver stage gate; vær villige til at stoppe.
- **Gummistemplede stage gates.** Porte, der aldrig siger "stop", giver ingen kontrol. Løsning: gør det at stoppe eller omplanlægge til en reel bestyrelsesmulighed, og brug den.
- **Scope creep uden ændringskontrol.** Ukontrollerede tilføjelser sprænger tid og pris. Løsning: baselin omfanget, og led hver ændring gennem ændringskontrol.
- **Ingen plan for overgang til drift.** Projektet slutter, og ingen ejer outputtet. Løsning: aftal det modtagende team og supportmodellen før go-live.
- **RAID som arkivskab.** En log, der skrives og aldrig handles på. Løsning: gennemgå RAID regelmæssigt, og eskalér ved undtagelse.
- **Aldrig reelt at afslutte.** Zombieprojekter, der æder ressourcer uden slutning. Løsning: en bevidst afslutning med accept, overdragelse og indfangede erfaringer.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Begrundelse | Finansiering søges uden mulighedsvurdering | Business case skrevet én gang, derefter lagt på hylden | Levende business case (Five Case) gennemgået ved hver port | Business case følges mod kvantificerede gevinstmål og kvalitetssikres ved hver port | Bestyrelsen stopper/omplanlægger rutinemæssigt projekter, der mister begrundelse |
| Omfangskontrol | Omfang vagt; creep ustyret | Omfang defineret, men ændringer ad hoc | Omfang baselinet med formel ændringskontrol | Ændringspåvirkning kvantificeret; gennemløb og resterende creep målt mod baseline | Ændringskontrol er hurtig, gennemsigtig og betroet |
| Styring | Ingen klar bestyrelse eller roller | Bestyrelse findes, men porte er formaliteter | PRINCE2-roller klare; reelle stop/fortsæt-porte | Tolerancer sat og overvåget; portbeslutninger dokumenteret med fulgte metrikker | Styring ved undtagelse frigør seniortid til reelle beslutninger |
| Risiko og kontrol | Risici følges uformelt eller slet ikke | RAID-log findes, men forældet | Levende RAID; eskalering ved undtagelse | Risikoeksponering kvantificeret og kontroller kvalitetssikret mod aftalt appetit | RAID driver beslutninger; næsten-hændelser føder erfaringer |
| Afslutning og overgang | Projekter driver, afsluttes aldrig formelt | Overdragelse ad hoc | Bevidst afslutning; serviceovergang planlagt | Afslutning og gevinstrealisering målt efter overdragelse mod baseline | Erfaringer genbruges systematisk på tværs af projekter |

## Tjekliste

- [ ] Er arbejdet reelt afgrænset med et defineret omfang og en slutningstilstand (ikke en løbende tjeneste)?
- [ ] Findes en levende business case (Five Case Model) gennemgået ved hver stage gate?
- [ ] Er omfanget baselinet, med en fungerende ændringskontrolproces?
- [ ] Er arbejdsfaserne defineret, hver sluttende i en reel stop/fortsæt-beslutningsport?
- [ ] Er projektbestyrelsens roller klare — direktør/SRO, senior bruger, senior leverandør?
- [ ] Vedligeholdes en levende RAID-log, med eskalering ved undtagelse?
- [ ] Er klinisk sikkerhed (DCB0160), DPIA og overgangs-/rollback-test portgivende leverancer?
- [ ] Er det modtagende driftsteam og supportmodellen aftalt før go-live?
- [ ] Er der en bevidst afslutning: accept, overdragelse, teamfrigivelse, erfaringer logget?
- [ ] Er den løbende forbedring af den levende tjeneste tildelt den rette arbejdsform?

## Centrale kilder

- AXELOS / PeopleCert — *Managing Successful Projects with PRINCE2* (7. udgave) og PRINCE2’s principper, temaer og processer.
- Project Management Institute (PMI) — *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* og *The Standard for Project Management*.
- HM Treasury — *Guide to Developing the Project Business Case* (Five Case Model / Green Book).
- Infrastructure and Projects Authority (IPA), Cabinet Office — assurance- og gateway-review-vejledning for større projekter.
- NHS Digital-standarden for klinisk sikkerhed DCB0160 (udrulning af sundheds-it-systemer).
- NHS England — NHS Service Manual og Digital Service Standard (til servicetransition og brugerbehovskontekst).

## Referencer

1. Project management — Wikipedia — https://en.wikipedia.org/wiki/Project_management
2. PRINCE2 — Wikipedia — https://en.wikipedia.org/wiki/PRINCE2
3. Project management triangle (iron triangle) — Wikipedia — https://en.wikipedia.org/wiki/Project_management_triangle
4. Project Management Institute — Wikipedia — https://en.wikipedia.org/wiki/Project_Management_Institute
5. Project Management Body of Knowledge — Wikipedia — https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge
6. Business case — Wikipedia — https://en.wikipedia.org/wiki/Business_case
7. Phase-gate process (stage gates) — Wikipedia — https://en.wikipedia.org/wiki/Phase-gate_process
8. Scope creep — Wikipedia — https://en.wikipedia.org/wiki/Scope_creep
9. Data migration — Wikipedia — https://en.wikipedia.org/wiki/Data_migration
10. Electronic health record — Wikipedia — https://en.wikipedia.org/wiki/Electronic_health_record
11. HM Treasury — Wikipedia — https://en.wikipedia.org/wiki/HM_Treasury
12. *Managing Successful Projects with PRINCE2* (7th edition) — AXELOS / PeopleCert — https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE-2-1005
13. *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* — Project Management Institute — https://www.pmi.org/
14. *The Green Book* and *Guide to Developing the Project Business Case* (Five Case Model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent
15. Assurance and gateway review guidance for major projects — Infrastructure and Projects Authority, Cabinet Office — https://www.gov.uk/government/organisations/infrastructure-and-projects-authority
16. Clinical risk management standard DCB0160 — NHS England — https://digital.nhs.uk/services/clinical-safety
