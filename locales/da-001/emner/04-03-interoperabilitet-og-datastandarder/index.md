# Emne 4.3 — Interoperabilitet og datastandarder

**I sundhed og pleje er interoperabilitet ikke en teknisk finesse, men et krav til klinisk sikkerhed og lighed: når systemer ikke kan dele de rette data, i den rette form, med entydig betydning, i behandlingsøjeblikket, kommer mennesker til skade, og ulighed forstærkes.**

## Hvorfor det er vigtigt i sundhed og pleje

Et menneskes pleje foregår sjældent ét sted. En enkelt episode kan berøre en lægepraksis, en ambulancetjeneste, en skadestue, en hospitalsafdeling, en kommunal sygeplejerske, et apotek, et socialplejeteam og en pårørende i hjemmet. Hver af dem rummer en del af journalen. Hvis disse dele ikke kan bringes sammen sikkert og hurtigt, træffer klinikere beslutninger med manglende information: en allergi der ikke blev set, en medicin der blev dobbeltordineret, en prøve der unødigt blev gentaget, et beskyttelsesflag usynligt for det team, der har brug for det.

Interoperabilitet er det, der forvandler et sæt usammenhængende systemer til noget, der fra patientens synspunkt opfører sig som en sammenhængende tjeneste. Det er rørføringen under integreret pleje. Når det virker, kan en kliniker i én organisation se, hvad en anden har registreret, og stole på, at det betyder det, de tror. Når det svigter, er svigtet ofte lydløst, indtil nogen kommer til skade.

Det er også et ligestillingsspørgsmål. Mennesker med de mest komplekse behov — skrøbelige ældre, dem med flere langvarige sygdomme, mennesker der bevæger sig mellem tjenester — er netop de mennesker, hvis data er mest fragmenterede. Dårlig interoperabilitet skader derfor de mest sårbare mest. Og det er et spørgsmål om offentlig tillid: folk antager med rimelighed, at NHS allerede deler deres oplysninger fornuftigt, og er forfærdede over at høre, hvor ofte det ikke gør.

Endelig beskytter interoperabilitet offentlige midler. Proprietære systemer, der ikke kan udveksle data, binder organisationer til dyre, svært udskiftelige kontrakter og tvinger kostbare punkt-til-punkt-integrationer. At bygge efter åbne standarder er måden at holde muligheder åbne, holde leverandører ærlige og undgå at betale gentagne gange for at løse det samme problem.

## Kernebegreber

[Interoperabilitet](https://en.wikipedia.org/wiki/Interoperability) er evnen hos forskellige systemer til at udveksle information og bruge den. Det er nyttigt at adskille to lag. Syntaktisk eller teknisk interoperabilitet betyder, at to systemer kan udveksle en besked, og hver kan fortolke dens struktur — kuverten ankommer og kan åbnes. [Semantisk interoperabilitet](https://en.wikipedia.org/wiki/Semantic_interoperability) betyder, at det modtagende system forstår, hvad indholdet betyder, på samme måde som afsenderen — at en kode for "penicillinallergi" fortolkes identisk på begge sider. Teknisk interoperabilitet uden semantisk interoperabilitet er farlig: data flyder, men betydning går tabt eller forvrænges.

Sundhedsdata udveksles ved hjælp af standarder. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7) er den standardfamilie, der bruges mest i sundhedsvæsenet. Dens ældre HL7 version 2 (v2) beskedudveksling, med pipe-og-caret-afgrænset tekst, understøtter stadig en enorm mængde hospitalsbeskeder og vil gøre det i årevis. Dens moderne standard, [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), modellerer klinisk information som "ressourcer", der udveksles over webagtige [applikationsprogrammeringsgrænseflader (API’er)](https://en.wikipedia.org/wiki/API), hvilket gør det langt lettere for moderne udviklere at arbejde med.

Standarder for beskeden er ikke nok; I har også brug for standardordforråd til indholdet. [SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)](https://en.wikipedia.org/wiki/SNOMED_CT) er den kliniske terminologi, der er påbudt i hele NHS-plejen til registrering af diagnoser, symptomer, procedurer med mere. NHS Dictionary of medicines and devices (dm+d) er standardordforrådet for lægemidler og medicinsk udstyr og understøtter elektronisk ordination. [International Classification of Diseases, 10. og 11. revision (ICD-10 og ICD-11)](https://en.wikipedia.org/wiki/ICD-11), vedligeholdt af Verdenssundhedsorganisationen, bruges til klassifikation, statistik og refusion snarere end daglig klinisk registrering. [openEHR](https://en.wikipedia.org/wiki/OpenEHR) er en åben specifikation til at strukturere selve sundhedsjournalen gennem fælles, klinisk styrede "arketyper", og bruges af nogle organisationer til at holde kliniske datamodeller uafhængige af en enkelt leverandør.

To idéer mere er fundamentale. [NHS-nummeret](https://en.wikipedia.org/wiki/NHS_number) er den fælles patientidentifikator, der lader journaler om den samme person kobles pålideligt på tværs af organisationer; uden en fælles identifikator er matching gætværk. Og [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise) udgiver "profiler", der specificerer præcis, hvordan eksisterende standarder kombineres for at løse konkrete problemer som deling af dokumenter, så forskellige leverandører implementerer dem ens.

Under alt dette ligger et strategisk valg. At bygge efter [åbne standarder](https://en.wikipedia.org/wiki/Open_standard) med offentliggjorte, genbrugelige API’er holder et marked konkurrencedygtigt og jeres data portable. At støtte sig til proprietære grænseflader skaber [leverandørlåsning](https://en.wikipedia.org/wiki/Vendor_lock-in), hvor skift af leverandør bliver så dyrt, at I reelt ikke kan. Intet af det leverer dog værdi uden [datakvalitet](https://en.wikipedia.org/wiki/Data_quality): nøjagtige, komplette, rettidige, konsekvent kodede data er forudsætningen for interoperabilitet, ikke en eftertanke.

## Bedste praksis

1. **Skel mellem semantisk og teknisk interoperabilitet, og design til begge.** Det er let at fejre, at en besked nu flyder mellem to systemer, og overse, at den modtagende kliniker ikke sikkert kan stole på dens betydning. Spørg altid: fortolker den anden side disse koder, enheder og negationer præcis som vi gør? Invester i fælles terminologier (SNOMED CT, dm+d) og værdisæt, ikke blot beskedformater, fordi en korrekt transmitteret, men misforstået allergi er farligere end ingen besked overhovedet.

2. **Byg efter åbne standarder, og genbrug platforme frem for at genopfinde.** Tag det bredt anbefalede princip i brug: byg efter åbne standarder, og genbrug eksisterende nationale platforme og tjenester, før I bygger jeres egne. I NHS betyder det at foretrække HL7 FHIR-API’er, bruge NHS-nummeret som identifikator og forbinde til nationale tjenester som Spine, GP Connect og fælles omsorgsjournaler frem for at skabe skræddersyede punkt-til-punkt-forbindelser. Genbrug mindsker omkostning, spreder vedligeholdelsesbyrden og betyder, at jeres data kan rejse.

3. **Gør NHS-nummeret ufravigeligt i hver journal og besked.** Pålidelig journalkobling afhænger af en troværdig fælles identifikator. Sørg for, at NHS-nummeret indfanges, verificeres mod den nationale demografiske tjeneste og bæres på hver relevant journal og grænseflade. Hvor det mangler eller er uverificeret, behandl det som en datakvalitetsfejl, der skal løses, fordi matching alene på navn og fødselsdato producerer både farlige fejlmatch og oversete koblinger.

4. **Behandl datakvalitet som en førsteklasses leverance.** Interoperabilitet eksporterer jeres datakvalitetsproblemer til alle nedstrøms. Profilér jeres data, mål fuldstændighed og kodningskonsistens, og indfør forvaltning, så fejl findes og rettes ved kilden. Kodningsdrift, fritekst hvor der er brug for struktureret data og inkonsistente enheder vil stille og roligt korrumpere enhver nedstrøms analyse og klinisk visning, så finansiér dette arbejde eksplicit frem for at antage, at det sker af sig selv.

5. **Foretræk API-først, løst koblede arkitekturer frem for tætte integrationer.** Design, så kapabiliteter eksponeres gennem veldokumenterede, versionerede API’er, andre kan forbruge uden skræddersyet forhandling. Det er langsommere i begyndelsen end et direkte databaselink, men det er det, der lader jer udskifte én komponent uden at genopbygge alt omkring den. Det passer også til, hvordan nationale tjenester og moderne leverandører nu forventer at integrere, og understøtter leveringstilgangene i emne 3.5 — Leveranceforløb.

6. **Brug offentliggjorte profiler og overensstemmelsestest, ikke lokale fortolkninger.** Standarder er fleksible, og to teams kan implementere "den samme" FHIR-ressource uforeneligt. Tag nationale implementeringsvejledninger og IHE-profiler i brug, der fastlåser detaljerne, og kræv, at leverandører påviser overensstemmelse mod dem før idriftsættelse. Overensstemmelsestest forvandler "vi understøtter FHIR" — en påstand, der alene betyder meget lidt — til verificerbart, kontraktligt faktum.

7. **Skriv interoperabilitets- og åbne-standarder-krav ind i indkøb og kontrakter.** Den billigste tid til at undgå lock-in er før I underskriver. Kræv åbne, dokumenterede API’er, retten til at udtrække jeres egne data i et standardformat, overholdelse af navngivne standarder og ingen gebyrer for standardintegrationer. Arbejd med jeres kommercielle kolleger (se emne 6.3 — Indkøb og kommercielt arbejde), så disse bliver obligatoriske evalueringskriterier, ikke aspirationer, der senere forhandles væk.

8. **Styr interoperabilitet med klinisk sikkerhed og informationsstyring i rummet.** Hvert nyt dataflow ændrer klinisk risiko og håndteringen af fortrolig information. Tag kliniske sikkerhedsansvarlige og informationsstyringsledere med i designbeslutninger fra starten, ikke som en endelig godkendelse, så fælles journaler er både sikre og lovlige. Det hænger direkte sammen med emne 1.6 — Klinisk sikkerhed og risikostyring og emne 1.7 — Informationsstyring, databeskyttelse og cybersikkerhed.

## Spørgsmål at drøfte med dit team

1. **Hvor i vores plejeforløb skaber manglende eller misforståede data i dag den største kliniske risiko?** Interoperabilitetsinvestering bør følge skade og værdi, ikke arkitektonisk mode. Kortlæg de forløb, jeres mest komplekse patienter faktisk tager, og find de overdragelser, hvor information går tabt, forsinkes eller ankommer uden pålidelig betydning. Spørg klinikere, hvor de rutinemæssigt arbejder i blinde — overflytningerne, hullerne uden for åbningstid, grænsen mellem sundhed og socialpleje. Skel mellem steder, hvor dataene slet ikke flyder, og steder, hvor de flyder, men ikke kan stoles på, fordi disse kræver forskellige rettelser. Overvej, hvilke befolkningsgrupper der er mest berørt, da fragmentering har tendens til at ramme hårdest mennesker med de mest komplekse behov. Svaret fortæller, hvor I skal starte, og giver jer et klinisk sikkerhedsargument, der vil veje tungere end ethvert teknisk.

2. **Hvor eksponerede er vi for leverandørlåsning, og hvad ville det faktisk koste os at skifte vores hovedsystemer?** Mange organisationer opdager den sande pris for et lukket system først, når de prøver at forlade det. Gennemgå konkret, hvad der skulle til for at udtrække jeres data i en brugbar standardform og flytte til en anden leverandør. Undersøg jeres kontrakter for, hvem der ejer dataene, hvilke standardgrænseflader der findes, og om I opkræves for integrationer, der burde være rutine. Identificér de proprietære grænseflader og dataformater, der skulle rodes op. Vej dette mod alternativernes åbenhed og nationale platforme, I kunne genbruge i stedet. Det handler ikke om at skifte leverandør hele tiden; det handler om at forstå jeres løftestang og mindske risikoen for, at én leverandørs køreplan bliver jeres eneste mulighed.

3. **Er vores data gode nok til at dele sikkert, og hvordan ville vi vide det?** At dele dårlige data forlegner jer ikke blot — det forplanter fejl ind i andre klinikeres beslutninger. Spørg, om I faktisk måler fuldstændighed, nøjagtighed, rettidighed og kodningskonsistens for de data, I agter at eksponere. Drøft, hvem der ejer datakvalitet i jeres organisation, og om de har tid og mandat til at rette problemer ved kilden. Overvej, hvilken andel af journaler der bærer et verificeret NHS-nummer, og hvor meget klinisk vigtig information der stadig sidder i fritekst frem for kodede felter. Tænk over, hvordan I ville opdage en systematisk kodningsfejl, før den nåede en fælles omsorgsjournal. Kan I ikke besvare disse spørgsmål med evidens, så behandl det som et fund i sig selv, og finansiér datakvalitetsarbejdet, før I gør røret bredere.

4. **Når en leverandør siger "vi understøtter FHIR", hvordan ville vi faktisk verificere det før idriftsættelse?** En standardetiket er en markedsføringspåstand, indtil den er testet mod en specifik implementeringsvejledning. Drøft, om jeres organisation har nogen kapabilitet til overensstemmelsestest, eller om I blot tager leverandører på ordet. To systemer kan hver være "FHIR-kompatible" og stadig være ude af stand til at udveksle en brugbar besked, fordi standarden bevidst er fleksibel, og betydningen bor i de profiler og værdisæt, der fastlåser den. Spørg, hvilke nationale implementeringsvejledninger og IHE-profiler der gælder for grænsefladen, og hvem på jeres side der er kompetent til at læse dem. Overvej, om overensstemmelse er skrevet ind i kontrakten som betingelse for at forbinde, eller opdaget smertefuldt under integrationen. Et ærligt svar nævner den specifikke profil, I ville teste mod, den person eller funktion, der ville køre testen, og det punkt i tidslinjen, hvor en leverandør, der dumper, afvises frem for vinkes igennem.

5. **Hvem ejer standarder, terminologi og overensstemmelse på tværs af vores organisation, og har de mandat til at sige nej?** Interoperabilitet forfalder uden forvaltning: værdisæt driver, lokale vejledninger divergerer, og hvert nyt projekt opfinder stille sin egen fortolkning. Spørg, om der er en navngiven funktion med ansvar for standarder, SNOMED CT- og dm+d-delmængder og overensstemmelse, eller om den viden sidder i få enkeltpersoners hoveder. Overvej spændingen mellem central konsistens og lokal leveringsfart — teams under pres vil bygge det hurtigste, medmindre en standardfunktion har reel beføjelse til at kræve genbrug. Drøft, hvordan terminologivedligeholdelse finansieres, da den er uglamourøs, kontinuerlig og kommer alle til gode frem for noget enkelt projekt. Se på, hvordan I holder implementeringer afstemt, efterhånden som FHIR, SNOMED CT og nationale vejledninger udvikler sig, frem for at fryse ved den version, I først tog i brug. Et ærligt svar identificerer den ansvarlige ejer, deres finansiering og et nyligt eksempel, hvor de enten håndhævede en standard eller fejlede.

6. **Er de mennesker, hvis journaler vi kobler sammen, informerede og tilfredse med, hvordan deres data flyder?** Interoperabilitet er ikke kun et teknisk og klinisk anliggende, men et spørgsmål om offentlig tillid og lovligt grundlag. Folk antager med rimelighed, at NHS allerede deler deres oplysninger fornuftigt, og er forfærdede både når det ikke gør, og når det gør det på måder, de ikke forventede. Drøft, om patienter forstår, hvilke organisationer der kan se deres fælles journal, hvordan en National Data Opt-Out eller en lokal samtykkemodel respekteres på tværs af flowet, og hvordan adgang registreres og kan revideres. Overvej ligestillingsdimensionen: de mennesker, hvis data er mest fragmenterede — dem med komplekse behov — er også dem, der er mindst i stand til at navigere opt-outs og informationsmeddelelser. Tag informationsstyring og, hvor det er relevant, patienter eller deres repræsentanter med ind i designet frem for at behandle samtykke som et felt, der krydses af til sidst. Et ærligt svar kan beskrive det lovlige grundlag for hvert flow, hvordan en person ville finde ud af, hvem der har set deres journal, og hvordan deres valg respekteres fra ende til anden.

## I praksis: et eksempel fra sundhed og pleje

Et integreret plejesystem i det nordlige England sætter sig for at give klinikere et enkelt overblik over fælles medicin på tværs af lægepraksis, hospital og kommunalt apotek, efter en gennemgang af en alvorlig hændelse fandt, at en patient var blevet ordineret to interagerende lægemidler af teams, der ikke kunne se hinandens journaler.

Fristelsen er at købe et "medicin-dashboard" fra én leverandør og kable det direkte ind i hvert systems database. Interoperabilitetslederen modstår dette. I stedet tager programmet en byg-efter-åbne-standarder-tilgang i brug. Hvert kildesystem eksponerer medicindata som HL7 FHIR-ressourcer; hvert lægemiddel kodes med dm+d, så "det samme lægemiddel" betyder det samme overalt; og hver journal er nøglet på et verificeret NHS-nummer, så de rette lægemidler knyttes til den rette person. Data fra lægepraksis trækkes gennem GP Connect frem for et skræddersyet feed, hvilket genbruger en national kapabilitet i stedet for at opfinde en lokal.

Tidlig dataprofilering viser straks sit værd. Ét lægepraksis’ system har registreret visse lægemidler i fritekst frem for som kodede dm+d-indførsler, hvilket ville have gjort dem usynlige for enhver automatisk interaktionskontrol. Det rettes ved kilden før idriftsættelsen. Teamet finder også en klynge af journaler med uverificerede NHS-numre og router dem gennem den nationale demografiske tjeneste til matching.

Den kliniske sikkerhedsansvarlige og informationsstyringslederen er med i designgruppen hele vejen. Sammen definerer de præcis, hvilke data der deles, med hvem, på hvilket lovligt grundlag og hvordan en klinikers adgang registreres — de anliggender, der er behandlet i emne 1.7 — Informationsstyring, databeskyttelse og cybersikkerhed. Leverandører skal bestå overensstemmelsestest mod den nationale FHIR-implementeringsvejledning, før de forbinder. Tolv måneder senere er det sammenkoblede medicinoverblik i drift, en interaktion, der tidligere ville være blevet overset, er allerede fanget, og – fordi alt blev bygget til åbne grænseflader – genbruger en anden anvendelse, fælles allergioplysninger, det meste af den samme rørføring til en brøkdel af den oprindelige pris.

## Sektorperspektiver

### Startup

En digital sundheds-startup lever og dør af, hvor let den plugger ind i eksisterende systemer, så behandl interoperabilitet som en kernefunktion, ikke en overholdelsesbyrde. At bygge FHIR-API’er og bruge SNOMED CT og dm+d fra starten gør jer langt lettere at købe og integrere og signalerer modenhed til forsigtige NHS-købere. Modstå trangen til at opfinde jeres egen datamodel, når en standard findes; jeres differentiering bør være jeres produkt, ikke et proprietært format, der bliver et ansvar. At få håndteringen af NHS-nummeret og informationsstyring rigtigt tidligt er det, der lader jer bevæge jer fra pilot til indkøb. Design, så en kunde i princippet kunne udtrække sine data og forlade jer — paradoksalt er den åbenhed det, der optjener tilliden til at beholde dem.

### Lille virksomhed

En etableret lille udbyder — en lægepraksis, et lokalt apotek, et plejehjem eller en enkelt klinik — bærer de samme pligter til at dele data sikkert som det største hospital, men med en brøkdel af den tekniske kapabilitet. Her er interoperabilitet mest en indkøbs- og konfigurationsdisciplin frem for en teknisk: vælg systemer, der allerede taler FHIR, forbind til nationale tjenester som GP Connect og Spine, og kod med SNOMED CT og dm+d ud af boksen, så I arver standarder i stedet for at bygge dem. Gør verificeret NHS-nummerregistrering til en del af hverdagspraksis, fordi uden et integrationsteam til at afstemme fejlmatch senere er det at få identifikatoren rigtig ved registreringen jeres billigste sikkerhedsforanstaltning. Læn jer op ad programmer for fælles omsorgsjournaler og jeres integrerede plejesystems fælles infrastruktur frem for at bestille skræddersyede forbindelser, I ikke kan vedligeholde. Når I underskriver eller fornyer en systemkontrakt, insistér i klare vendinger på dataudtrækningsrettigheder og åbne grænseflader, fordi en lille organisation føler leverandørlåsning mest akut og har mindst løftestang til at slippe fri bagefter.

### Stor virksomhed

En stor udbyder eller leverandør bærer typisk årtiers legacy: HL7 v2-grænseflader, flere elektroniske journalsystemer og integrationsmotorer, der holder det hele sammen. Den realistiske strategi er ikke at rive alt ud, men at sætte et API-først, standardbaseret lag foran landskabet og migrere flows til FHIR trinvis, mens v2 holdes kørende, hvor det må. Vogt hårdt mod lock-in ved hver fornyelse, og insistér på overensstemmelsestest, så "standardkompatibel" verificeres frem for påstås. Etablér en intern standard- og overensstemmelsesfunktion, så enkelte projekter ikke hver opfinder deres egen fortolkning. Det hænger nært sammen med, hvordan I styrer centrale operationelle platforme i emne 5.4 — Virksomhedsressourceplanlægning (ERP), hvor den samme genbrugs- og åben-grænseflade-disciplin gælder.

### Myndighed

Nationale og regionale organer fastsætter markedets regler, så deres valg om standarder breder sig til hver organisation. Det mest værdifulde, en myndighed kan gøre, er at påbyde åbne standarder, offentliggøre klare implementeringsvejledninger og overensstemmelseskrav og levere genbrugelige nationale platforme — Spine, GP Connect, rammer for fælles omsorgsjournaler, NHS-nummertjenesten — så lokale organisationer bygger én gang og genbruger. Konsistens betyder mere end perfektion: en fast håndhævet god-nok standard slår en teoretisk overlegen, alle implementerer forskelligt. Myndigheden må også finansiere det uglamourøse arbejde med terminologivedligeholdelse og datakvalitetsforbedring, fordi disse er offentlige goder, ingen enkelt organisation vil finansiere alene. Denne forvalterrolle hænger sammen med emne 9.1 — Samarbejde med lokale og nationale myndigheder og med, hvordan partnere samarbejder i emne 9.0 — Samarbejde med partnerorganisationer.

## Typiske fejlmønstre

- **At forveksle teknisk forbindelse med semantisk forståelse.** At erklære sejr, når en besked flyder, uden at bekræfte, at begge sider fortolker dens koder, enheder og negationer identisk. Resultatet er data, der ser integrerede ud, men i det stille misforstås.
- **At dele dårlige data hurtigere.** At gøre røret bredere, før datakvaliteten er rettet, så kodningsfejl, fritekst og manglende NHS-numre forplanter sig ind i andre klinikeres beslutninger og enhver nedstrøms analyse.
- **"Vi understøtter FHIR" som en tom påstand.** At acceptere en standardetiket uden overensstemmelsestest mod en specifik implementeringsvejledning, så to "kompatible" systemer stadig ikke kan tale sammen.
- **Skræddersyede punkt-til-punkt-integrationer.** At bygge direkte links mellem hvert par af systemer, hvilket producerer et skrøbeligt net, der bliver eksponentielt sværere og dyrere at vedligeholde, efterhånden som det vokser.
- **Lock-in som standard.** At underskrive kontrakter med proprietære grænseflader og ingen dataudtrækningsrettigheder og først opdage fældens pris, når I forsøger at skifte leverandør.
- **At behandle styring som en afsluttende port.** At bringe klinisk sikkerhed og informationsstyring ind kun for at godkende, så problemer dukker op sent og dyrt eller vinkes igennem under leveringspres.
- **Standarder uden forvaltning.** At tage terminologier og profiler i brug, men ikke finansiere nogen til at vedligeholde værdisæt, overvåge overensstemmelse eller holde implementeringer afstemt, efterhånden som standarder udvikler sig.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Standardadoption | Ad hoc, for det meste proprietære eller hjemmestrikkede grænseflader | HL7 v2 og noget FHIR i brug; valg varierer pr. projekt | FHIR, SNOMED CT og dm+d taget i brug som standard med lokale vejledninger | Overensstemmelse med nationale vejledninger følges og rapporteres; afvigelser styres og kvalitetssikres | Fuld overensstemmelse med nationale implementeringsvejledninger og IHE-profiler, verificeret ved test |
| Identifikator og kobling | NHS-nummer ofte manglende eller uverificeret | Indfanget, men ikke konsekvent verificeret | Verificeret mod national tjeneste på de fleste journaler | Verifikationsrater måles mod mål, med umatchede journaler aktivt bearbejdet | Verificeret overalt; matchkvalitet overvåges aktivt |
| Datakvalitet | Ikke målt; fritekst almindelig, hvor kodning er nødvendig | Målt nogle steder; rettelser reaktive | Profileret, ejet og forbedret ved kilden | Kvalitetsmetrikker følges mod tærskler, med forvaltere holdt til regnskab | Kontinuerlig overvågning med automatisk fejldetektion, før data deles |
| Arkitektur | Punkt-til-punkt, tæt koblet | Integrationsmotor, blandet kobling | API-først, genbruger nationale platforme | API-ydeevne og afhængigheder overvåges; ændringer styres gennem versionering og test | Løst koblet, standardbaseret, komponenter kan udskiftes uden omarbejde |
| Lock-in og indkøb | Proprietære kontrakter, ingen udtrædelsesrettigheder | Nogle standardklausuler, svagt håndhævet | Åbne standarder og dataudtrækningsrettigheder krævet | Kontraktoverholdelse og udtrædelsesparathed gennemgås og kvalitetssikres på tværs af porteføljen | Åbne grænseflader obligatoriske og verificerede; reel leverandørsubstituerbarhed |

## Tjekliste

- [ ] Hver relevant journal og grænseflade bærer et verificeret NHS-nummer, med en proces til at løse manglende eller umatchede.
- [ ] Nye grænseflader bruger HL7 FHIR og navngivne nationale implementeringsvejledninger, med HL7 v2 bevaret kun, hvor migrering endnu ikke er berettiget.
- [ ] Klinisk indhold kodes med SNOMED CT og lægemidler med dm+d, mod aftalte værdisæt.
- [ ] Datakvalitet for alt, I agter at dele, profileres, måles, ejes og forbedres ved kilden, før røret gøres bredere.
- [ ] Leverandører skal bestå overensstemmelsestest mod en specifik profil, før de forbinder — "understøtter FHIR" accepteres aldrig alene.
- [ ] Nationale platforme (Spine, GP Connect, fælles omsorgsjournaler) genbruges, før nogen skræddersyet integration bygges.
- [ ] Kontrakter påbyder åbne, dokumenterede API’er, dataudtrækningsrettigheder i et standardformat og ingen gebyrer for standardintegrationer.
- [ ] Kliniske sikkerheds- og informationsstyringsledere er i designgruppen fra starten, ikke kun ved godkendelsen.
- [ ] Arkitekturen er API-først og løst koblet, så en komponent kan udskiftes uden at genopbygge alt omkring den.
- [ ] En navngiven funktion ejer standarder, overensstemmelse og terminologivedligeholdelse på tværs af organisationen.

## Centrale kilder

- NHS England — interoperabilitetsstandarder, Spine, GP Connect og programmer for fælles omsorgsjournaler.
- HL7 International — FHIR-standarden og HL7 v2-specifikationerne.
- SNOMED International — SNOMED CT-terminologi og implementeringsvejledning.
- NHS Business Services Authority — Dictionary of medicines and devices (dm+d).
- Integrating the Healthcare Enterprise (IHE) — interoperabilitetsprofiler.
- openEHR International — åbne specifikationer til at strukturere sundhedsjournalen.
- Verdenssundhedsorganisationen — International Classification of Diseases (ICD-10 og ICD-11).

## Referencer

1. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
2. Semantic interoperability — Wikipedia — https://en.wikipedia.org/wiki/Semantic_interoperability
3. Health Level 7 — Wikipedia — https://en.wikipedia.org/wiki/Health_Level_7
4. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
5. SNOMED CT — Wikipedia — https://en.wikipedia.org/wiki/SNOMED_CT
6. ICD-11 — Wikipedia — https://en.wikipedia.org/wiki/ICD-11
7. ICD-10 — Wikipedia — https://en.wikipedia.org/wiki/ICD-10
8. openEHR — Wikipedia — https://en.wikipedia.org/wiki/OpenEHR
9. NHS number — Wikipedia — https://en.wikipedia.org/wiki/NHS_number
10. Integrating the Healthcare Enterprise — Wikipedia — https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise
11. Open standard — Wikipedia — https://en.wikipedia.org/wiki/Open_standard
12. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
13. API — Wikipedia — https://en.wikipedia.org/wiki/API
14. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
15. FHIR standard — HL7 International — https://www.hl7.org/fhir/
16. SNOMED CT — SNOMED International — https://www.snomed.org/
17. Dictionary of medicines and devices (dm+d) — NHS Business Services Authority — https://www.nhsbsa.nhs.uk/pharmacies-gp-practices-and-appliance-contractors/dictionary-medicines-and-devices-dmd
18. GP Connect — NHS England Digital — https://digital.nhs.uk/services/gp-connect
19. Spine — NHS England Digital — https://digital.nhs.uk/services/spine
20. International Classification of Diseases (ICD) — World Health Organization — https://www.who.int/standards/classifications/classification-of-diseases
