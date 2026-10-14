# Ämne 4.3 — Interoperabilitet och datastandarder

**Inom hälsa och vård är interoperabilitet inte en teknisk finess utan ett krav på klinisk säkerhet och jämlikhet: när system inte kan dela rätt data, i rätt form, med entydig betydelse, vid vårdtillfället, skadas människor och ojämlikhet förstärks.**

## Varför detta är viktigt inom hälsa och vård

En persons vård sker sällan på ett ställe. Ett enda vårdtillfälle kan beröra en allmänläkarpraktik, en ambulanstjänst, en akutmottagning, en sjukhusavdelning, en distriktssköterska, ett apotek, ett socialtjänstteam och en anhörig i hemmet. Var och en av dessa håller en del av journalen. Om dessa delar inte kan föras samman tryggt och snabbt fattar kliniker beslut med saknad information: en allergi som inte syns, ett läkemedel som förskrivits dubbelt, ett prov som i onödan tas om, en flagga om skydd av utsatta personer som är osynlig för det team som behöver den.

Interoperabilitet är det som förvandlar en uppsättning frånkopplade system till något som, ur patientens synvinkel, beter sig som en sammanhängande tjänst. Det är rörmokeriet under integrerad vård. När det fungerar kan en kliniker i en organisation se vad en annan har registrerat, och kan lita på att det betyder det hen tror att det betyder. När det havererar är felet ofta tyst tills någon skadas.

Detta är också en jämlikhetsfråga. Människor med de mest komplexa behoven — skröpliga äldre, de med flera långvariga tillstånd, människor som rör sig mellan tjänster — är exakt de vars data är mest fragmenterad. Dålig interoperabilitet skadar därför de mest sårbara mest. Och det är en fråga om allmänhetens förtroende: människor antar med rätta att NHS redan delar deras information förnuftigt, och blir bestörta över att få veta hur ofta det inte gör det.

Slutligen skyddar interoperabilitet offentliga medel. Proprietära system som inte kan utbyta data låser fast organisationer i dyra, svårersatta avtal och tvingar fram kostsamma punkt-till-punkt-integrationer. Att bygga enligt öppna standarder är hur ni håller alternativen öppna, håller leverantörerna ärliga och undviker att betala upprepade gånger för att lösa samma problem.

## Grundläggande begrepp

[Interoperabilitet](https://en.wikipedia.org/wiki/Interoperability) är förmågan hos olika system att utbyta information och använda den. Det är användbart att skilja på två lager. Syntaktisk eller teknisk interoperabilitet innebär att två system kan utbyta ett meddelande och att vart och ett kan tolka dess struktur — kuvertet anländer och kan öppnas. [Semantisk interoperabilitet](https://en.wikipedia.org/wiki/Semantic_interoperability) innebär att det mottagande systemet förstår vad innehållet betyder på samma sätt som avsändaren — att en kod för ”penicillinallergi” tolkas identiskt på båda sidor. Teknisk interoperabilitet utan semantisk interoperabilitet är farlig: data flödar, men betydelsen går förlorad eller förvrängs.

Hälsodata utbyts med hjälp av standarder. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7) är den familj av standarder som oftast används inom hälso- och sjukvård. Dess äldre meddelandehantering enligt HL7 version 2 (v2), med textavgränsade pipe-och-cirkumflex-tecken, bär fortfarande en enorm mängd sjukhusmeddelanden och kommer att göra det i åratal. Dess moderna standard, [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), modellerar klinisk information som ”resurser” som utbyts över webbliknande [programmeringsgränssnitt (API:er)](https://en.wikipedia.org/wiki/API), vilket gör det långt lättare för moderna utvecklare att arbeta med.

Standarder för meddelandet räcker inte; ni behöver också standardiserade vokabulärer för innehållet. [SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)](https://en.wikipedia.org/wiki/SNOMED_CT) är den kliniska terminologi som är föreskriven över NHS-vård för att registrera diagnoser, symtom, ingrepp och mer. NHS Dictionary of medicines and devices (dm+d) är standardvokabulären för läkemedel och medicintekniska produkter, och underbygger elektronisk förskrivning. De [internationella sjukdomsklassifikationerna, 10:e och 11:e revisionen (ICD-10 och ICD-11)](https://en.wikipedia.org/wiki/ICD-11), förvaltade av Världshälsoorganisationen, används för klassificering, statistik och ersättning snarare än daglig klinisk registrering. [openEHR](https://en.wikipedia.org/wiki/OpenEHR) är en öppen specifikation för att strukturera själva hälsojournalen genom delade, kliniskt styrda ”arketyper”, och används av vissa organisationer för att hålla kliniska datamodeller oberoende av en enskild leverantör.

Två ytterligare idéer är grundläggande. [NHS-numret (NHS Number)](https://en.wikipedia.org/wiki/NHS_number) är den gemensamma patientidentifierare som låter journaler om samma person länkas tillförlitligt över organisationer; utan en delad identifierare är matchning gissning. Och [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise) publicerar ”profiler” som exakt anger hur befintliga standarder kombineras för att lösa konkreta problem såsom delning av dokument, så att olika leverantörer implementerar dem på samma sätt.

Under allt detta ligger ett strategiskt val. Att bygga enligt [öppna standarder](https://en.wikipedia.org/wiki/Open_standard) med publicerade, återanvändbara API:er håller en marknad konkurrenskraftig och era data portabla. Att förlita sig på proprietära gränssnitt skapar [leverantörsinlåsning (vendor lock-in)](https://en.wikipedia.org/wiki/Vendor_lock-in), där det blir så kostsamt att byta leverantör att ni i praktiken inte kan. Inget av det levererar dock värde utan [datakvalitet](https://en.wikipedia.org/wiki/Data_quality): korrekta, fullständiga, aktuella, konsekvent kodade data är förutsättningen för interoperabilitet, inte en eftertanke.

## Bästa praxis

1. **Skilj semantisk från teknisk interoperabilitet, och designa för båda.** Det är lätt att fira att ett meddelande nu flödar mellan två system och missa att den mottagande klinikern inte tryggt kan förlita sig på dess betydelse. Fråga alltid: tolkar den andra sidan dessa koder, enheter och negationer exakt som vi gör? Investera i delade terminologier (SNOMED CT, dm+d) och värdemängder (value sets), inte bara meddelandeformat, eftersom en korrekt överförd men missförstådd allergi är farligare än inget meddelande alls.

2. **Bygg enligt öppna standarder och återanvänd plattformar i stället för att uppfinna på nytt.** Anta den vitt omfattade principen: bygg enligt öppna standarder, och återanvänd befintliga nationella plattformar och tjänster innan ni bygger egna. Inom NHS innebär detta att föredra HL7 FHIR-API:er, använda NHS-numret som identifierare och ansluta till nationella tjänster såsom Spine, GP Connect och delade vårdjournaler i stället för att skapa skräddarsydda punkt-till-punkt-länkar. Återanvändning minskar kostnad, sprider underhållsbördan och innebär att era data kan färdas.

3. **Gör NHS-numret icke förhandlingsbart i varje journal och varje meddelande.** Tillförlitlig journalkoppling beror på en pålitlig gemensam identifierare. Se till att NHS-numret fångas, verifieras mot den nationella demografitjänsten och bärs på varje relevant journal och gränssnitt. Där det saknas eller är overifierat, behandla det som en datakvalitetsdefekt att lösa, eftersom matchning enbart på namn och födelsedatum producerar både farliga felmatchningar och missade länkar.

4. **Behandla datakvalitet som en förstklassig leverans.** Interoperabilitet exporterar era datakvalitetsproblem till alla nedströms. Profilera era data, mät fullständighet och kodningskonsekvens och inför dataförvaltning (stewardship) så att fel hittas och åtgärdas vid källan. Kodningsglidning, fri text där strukturerade data behövs och inkonsekventa enheter kommer i tysthet att korrumpera varje analys och klinisk vy nedströms, så finansiera detta arbete uttryckligen i stället för att anta att det sker av sig självt.

5. **Föredra API-först, löst kopplade arkitekturer framför tät integration.** Designa så att förmågor exponeras genom väldokumenterade, versionerade API:er som andra kan konsumera utan skräddarsydda förhandlingar. Detta är långsammare till en början än en direkt databaslänk, men det är vad som låter er ersätta en komponent utan att bygga om allt runt den. Det ligger också i linje med hur nationella tjänster och moderna leverantörer nu förväntar sig att integrera, och stödjer de leveransmetoder som beskrivs i Ämne 3.5 — Leveranslivscykler.

6. **Använd publicerade profiler och konformitetstestning, inte lokala tolkningar.** Standarder är flexibla, och två team kan implementera ”samma” FHIR-resurs oförenligt. Anta nationella implementeringsguider och IHE-profiler som fastställer detaljerna, och kräv att leverantörer visar konformitet mot dem före driftsättning. Konformitetstestning förvandlar ”vi stödjer FHIR” — ett påstående som betyder mycket lite i sig — till verifierbart, avtalsenligt faktum.

7. **Skriv in krav på interoperabilitet och öppna standarder i upphandling och avtal.** Den billigaste tiden att undvika inlåsning är innan ni skriver under. Kräv öppna, dokumenterade API:er, rätten att extrahera era egna data i ett standardformat, efterlevnad av namngivna standarder och inga avgifter för standardintegrationer. Arbeta med era kommersiella kollegor (se Ämne 6.3 — Upphandling och kommersiella frågor) så att dessa blir obligatoriska utvärderingskriterier, inte aspirationer som förhandlas bort senare.

8. **Styr interoperabilitet med klinisk säkerhet och informationsstyrning i rummet.** Varje nytt dataflöde förändrar klinisk risk och hanteringen av konfidentiell information. Ta in kliniska säkerhetsansvariga och ansvariga för informationsstyrning i designbesluten från början, inte som ett slutligt godkännande, så att delade journaler är både säkra och lagliga. Detta kopplar direkt till Ämne 1.6 — Klinisk säkerhet och riskhantering och Ämne 1.7 — Informationsstyrning, dataskydd och cybersäkerhet.

## Frågor att diskutera med ditt team

1. **Var i våra vårdförlopp skapar saknade eller missförstådda data störst klinisk risk i dag?** Investeringar i interoperabilitet bör följa skada och värde, inte arkitektonisk mode. Kartlägg de resor era mest komplexa patienter faktiskt gör och hitta de överlämningar där information går förlorad, försenas eller anländer utan tillförlitlig betydelse. Fråga kliniker var de rutinmässigt arbetar i blindo — överflyttningarna, glappen utanför kontorstid, gränsen mellan hälso- och socialvård. Skilj platser där data inte flödar alls från platser där de flödar men inte går att lita på, eftersom dessa behöver olika åtgärder. Beakta vilka populationer som drabbas mest, eftersom fragmentering tenderar att falla hårdast på människor med de mest komplexa behoven. Svaret talar om var ni ska börja, och ger er ett kliniskt säkerhetsargument som väger tyngre än något tekniskt argument.

2. **Hur exponerade är vi för leverantörsinlåsning, och vad skulle det faktiskt kosta oss att byta våra huvudsakliga kliniska system?** Många organisationer upptäcker det sanna priset för ett slutet system först när de försöker lämna det. Gå konkret igenom vad som skulle krävas för att extrahera era data i en användbar, standardiserad form och flytta till en annan leverantör. Granska era avtal för vem som äger data, vilka standardgränssnitt som finns och om ni debiteras för integrationer som borde vara rutin. Identifiera de proprietära gränssnitt och dataformat som skulle behöva nystas upp. Väg detta mot öppenheten hos alternativ och nationella plattformar ni kunde återanvända i stället. Detta handlar inte om att byta leverantörer i onödan; det handlar om att förstå er hävstång och minska risken att en enda leverantörs färdplan blir ert enda alternativ.

3. **Är våra data tillräckligt bra för att delas tryggt, och hur skulle vi veta?** Att dela dåliga data är inte bara pinsamt — det sprider fel in i andra klinikers beslut. Fråga om ni faktiskt mäter fullständighet, korrekthet, aktualitet och kodningskonsekvens hos de data ni avser exponera. Diskutera vem som äger datakvalitet i er organisation och om de har tid och mandat att åtgärda problem vid källan. Beakta vilken andel av journalerna som bär ett verifierat NHS-nummer och hur mycket kliniskt viktig information som fortfarande ligger i fri text snarare än kodade fält. Tänk på hur ni skulle upptäcka ett systematiskt kodningsfel innan det nådde en delad vårdjournal. Om ni inte kan besvara dessa frågor med evidens, behandla det som ett fynd i sig, och finansiera datakvalitetsarbetet innan ni vidgar röret.

4. **När en leverantör säger ”vi stödjer FHIR”, hur skulle vi faktiskt verifiera det före driftsättning?** En standardetikett är ett marknadsföringspåstående tills den testats mot en specifik implementeringsguide. Diskutera om er organisation har någon egen förmåga till konformitetstestning, eller om ni helt enkelt tar leverantörer på orden. Två system kan vart och ett vara ”FHIR-förenliga” och ändå inte kunna utbyta ett användbart meddelande, eftersom standarden är avsiktligt flexibel och betydelsen bor i de profiler och värdemängder som fastställer den. Fråga vilka nationella implementeringsguider och IHE-profiler som gäller för gränssnittet i fråga, och vem på er sida som är kompetent att läsa dem. Beakta om konformitet skrivs in i avtalet som ett villkor för att ansluta, eller upptäcks smärtsamt under integrationen. Ett ärligt svar namnger den specifika profil ni skulle testa mot, den person eller funktion som skulle köra testet och den punkt i tidslinjen där en leverantör som misslyckas avvisas snarare än släpps igenom.

5. **Vem äger standarder, terminologi och konformitet över vår organisation, och har de mandat att säga nej?** Interoperabilitet förfaller utan förvaltarskap: värdemängder glider, lokala guider divergerar och varje nytt projekt uppfinner i tysthet sin egen tolkning. Fråga om det finns en namngiven funktion ansvarig för standarder, SNOMED CT- och dm+d-delmängder och konformitet, eller om denna kunskap sitter i huvudet på ett fåtal individer. Beakta spänningen mellan central konsekvens och lokal leveranshastighet — team under press bygger det snabbaste om inte en standardfunktion har verklig befogenhet att kräva återanvändning. Diskutera hur underhåll av terminologi finansieras, givet att det är oglamoröst, kontinuerligt och gynnar alla snarare än något enskilt projekt. Titta på hur ni håller implementeringar i linje när FHIR, SNOMED CT och nationella guider utvecklas, i stället för att frysa vid den version ni först antog. Ett ärligt svar identifierar den ansvariga ägaren, deras finansiering och ett färskt exempel där de antingen verkställde en standard eller misslyckades.

6. **Är de människor vars journaler vi kopplar samman informerade och nöjda med hur deras data flödar?** Interoperabilitet är inte bara en teknisk och klinisk fråga utan en fråga om allmänhetens förtroende och rättslig grund. Människor antar med rätta att NHS redan delar deras information förnuftigt, och blir bestörta både när det inte gör det och när det gör det på sätt de inte förväntade sig. Diskutera om patienter förstår vilka organisationer som kan se deras delade journal, hur National Data Opt-Out eller en lokal samtyckesmodell respekteras genom flödet och hur åtkomst registreras och är granskningsbar. Beakta jämlikhetsdimensionen: de människor vars data är mest fragmenterad — de med komplexa behov — är också de som minst klarar att navigera opt-outs och informationsmeddelanden. Ta in informationsstyrning och, där det är relevant, patienter eller deras företrädare i designen i stället för att behandla samtycke som en ruta som kryssas i slutet. Ett ärligt svar kan beskriva den rättsliga grunden för varje flöde, hur en person skulle få veta vem som har sett deras journal och hur deras val respekteras från början till slut.

## I praktiken: ett exempel från hälsa och vård

Ett integrerat vårdsystem i norra England sätter sig för att ge kliniker en enda vy över delade läkemedel över allmänläkarpraktik, sjukhus och apotek, efter att en granskning av en allvarlig incident funnit att en patient hade förskrivits två interagerande läkemedel av team som inte kunde se varandras journaler.

Frestelsen är att köpa en ”läkemedelsinstrumentpanel” från en leverantör och koppla den direkt till varje systems databas. Interoperabilitetsansvarig motstår detta. I stället antar programmet en ansats att bygga enligt öppna standarder. Varje källsystem exponerar läkemedelsdata som HL7 FHIR-resurser; varje läkemedel kodas med dm+d så att ”samma läkemedel” betyder detsamma överallt; och varje journal nycklas på ett verifierat NHS-nummer så att rätt läkemedel kopplas till rätt person. Allmänläkardata hämtas genom GP Connect i stället för ett skräddarsytt flöde, vilket återanvänder en nationell förmåga i stället för att uppfinna en lokal.

Tidig dataprofilering visar sitt värde omedelbart. En praktiks system har registrerat vissa läkemedel i fri text snarare än som kodade dm+d-poster, vilket innebär att de skulle ha varit osynliga för varje automatisk interaktionskontroll. Detta åtgärdas vid källan före driftsättning. Teamet finner också ett kluster av journaler med overifierade NHS-nummer och dirigerar dem genom den nationella demografitjänsten för matchning.

Den kliniska säkerhetsansvarige och ansvarig för informationsstyrning ingår i designgruppen hela tiden. Tillsammans definierar de exakt vilka data som delas, med vem, under vilken rättslig grund och hur en klinikers åtkomst registreras — de frågor som behandlas i Ämne 1.7 — Informationsstyrning, dataskydd och cybersäkerhet. Leverantörer måste klara konformitetstestning mot den nationella FHIR-implementeringsguiden innan de ansluter. Tolv månader senare är den sammanhängande läkemedelsvyn i drift, en interaktion som tidigare skulle ha missats har redan fångats och — eftersom allt byggdes mot öppna gränssnitt — återanvänder ett andra användningsfall, delad allergiinformation, det mesta av samma rörmokeri till en bråkdel av den ursprungliga kostnaden.

## Sektorperspektiv

### Startup-företag

Ett digitalt hälsoföretag i startfasen lever eller dör på hur lätt det kopplar in sig i befintliga system, så behandla interoperabilitet som en kärnfunktion, inte en efterlevnadsbörda. Att bygga FHIR-API:er och använda SNOMED CT och dm+d från början gör er långt lättare att köpa och integrera, och signalerar mognad till försiktiga NHS-köpare. Motstå lusten att uppfinna en egen datamodell när en standard finns; er särart bör vara er produkt, inte ett proprietärt format som blir ett ansvar. Att få hanteringen av NHS-numret och informationsstyrningen rätt tidigt är det som låter er gå från pilot till upphandling. Designa så att en kund i princip kunde extrahera sina data och lämna — paradoxalt nog är den öppenheten det som förtjänar det förtroende som behåller dem.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem eller en klinik på en enda ort — bär samma plikter att dela data tryggt som det största sjukhuset, men med en bråkdel av den tekniska förmågan. Här är interoperabilitet mestadels en upphandlings- och konfigurationsdisciplin snarare än en teknisk: välj system som redan talar FHIR, anslut till nationella tjänster såsom GP Connect och Spine, och koda med SNOMED CT och dm+d direkt ur lådan, så att ni ärver standarder i stället för att bygga dem. Gör verifierad registrering av NHS-numret till en del av vardagen, eftersom ni utan integrationsteam att stämma av felmatchningar senare har registreringstillfället som ert billigaste skydd. Luta er mot program för delade vårdjournaler och ert integrerade vårdsystems gemensamma infrastruktur i stället för att beställa skräddarsydda länkar ni inte kan underhålla. När ni skriver under eller förnyar ett systemavtal, insistera på rättigheter till dataextraktion och öppna gränssnitt i klarspråk, eftersom en liten organisation känner leverantörsinlåsning mest akut och har minst hävstång att fly den i efterhand.

### Storföretag

En stor vårdgivare eller leverantör bär vanligen decennier av äldre arv: HL7 v2-gränssnitt, flera elektroniska journalsystem och integrationsmotorer som håller ihop allt. Den realistiska strategin är inte att riva ut allt utan att sätta ett API-först-, standardbaserat lager framför beståndet, migrera flöden till FHIR stegvis medan v2 hålls igång där det måste. Skydda er hårt mot inlåsning vid varje förnyelse, och insistera på konformitetstestning så att ”standardförenlig” verifieras snarare än påstås. Inrätta en intern funktion för standarder och konformitet så att enskilda projekt inte var och en uppfinner sin egen tolkning. Detta är nära besläktat med hur ni förvaltar centrala operativa plattformar i Ämne 5.4 — Affärssystem (ERP), där samma disciplin om återanvändning och öppna gränssnitt gäller.

### Staten

Nationella och regionala organ sätter marknadens regler, så deras val om standarder fortplantar sig över varje organisation. Det mest värdefulla staten kan göra är att föreskriva öppna standarder, publicera tydliga implementeringsguider och konformitetskrav och tillhandahålla återanvändbara nationella plattformar — Spine, GP Connect, ramverk för delade vårdjournaler, NHS-nummertjänsten — så att lokala organisationer bygger en gång och återanvänder. Konsekvens spelar större roll än perfektion: en fast verkställd, tillräckligt god standard slår en teoretiskt överlägsen som alla implementerar olika. Staten måste också finansiera det oglamorösa arbetet med terminologiunderhåll och datakvalitetsförbättring, eftersom dessa är kollektiva nyttigheter som ingen enskild organisation kommer att finansiera ensam. Denna förvaltarroll kopplar till Ämne 9.1 — Samarbete med lokala och nationella myndigheter och till hur partner samarbetar i Ämne 9.0 — Samarbete med partnerorganisationer.

## Vanliga felmönster

- **Att förväxla teknisk anslutning med semantisk förståelse.** Att förklara seger när ett meddelande flödar, utan att bekräfta att båda sidor tolkar dess koder, enheter och negationer identiskt. Resultatet är data som ser integrerade ut men i tysthet läses fel.
- **Att dela dåliga data snabbare.** Att vidga röret innan datakvaliteten åtgärdats, så att kodningsfel, fri text och saknade NHS-nummer sprids in i andra klinikers beslut och varje analys nedströms.
- **”Vi stödjer FHIR” som ett tomt påstående.** Att acceptera en standardetikett utan konformitetstestning mot en specifik implementeringsguide, så att två ”förenliga” system ändå inte kan tala med varandra.
- **Skräddarsydda punkt-till-punkt-integrationer.** Att bygga direkta länkar mellan varje par av system, vilket producerar ett bräckligt nät som blir exponentiellt svårare och dyrare att underhålla när det växer.
- **Inlåsning som standard.** Att skriva under avtal med proprietära gränssnitt och inga rättigheter till dataextraktion, och upptäcka fällans kostnad först när man försöker byta leverantör.
- **Att behandla styrning som en slutlig grind.** Att ta in klinisk säkerhet och informationsstyrning bara för godkännande, så att problem dyker upp sent och dyrt, eller släpps igenom under leveranstryck.
- **Standarder utan förvaltarskap.** Att anta terminologier och profiler men inte finansiera någon att underhålla värdemängder, övervaka konformitet eller hålla implementeringar i linje när standarder utvecklas.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Standardantagande | Ad hoc, mestadels proprietära eller handbyggda gränssnitt | HL7 v2 och en del FHIR används; val varierar per projekt | FHIR, SNOMED CT och dm+d antagna som standard med lokala guider | Konformitet mot nationella guider följs och redovisas; avvikelser styrs och kvalitetssäkras | Full konformitet mot nationella implementeringsguider och IHE-profiler, verifierad genom testning |
| Identifierare och länkning | NHS-numret saknas ofta eller är overifierat | Fångat men inte konsekvent verifierat | Verifierat mot nationell tjänst på de flesta journaler | Verifieringsgrader mäts mot mål, med ej matchade journaler aktivt bearbetade | Verifierat överallt; matchningskvalitet övervakas aktivt |
| Datakvalitet | Omätt; fri text vanlig där kodning behövs | Mäts på vissa ställen; åtgärder reaktiva | Profilerad, ägd och förbättrad vid källan | Kvalitetsmått följs mot tröskelvärden, med dataförvaltning ansvarsskyldig | Kontinuerlig övervakning med automatisk defektdetektering innan data delas |
| Arkitektur | Punkt-till-punkt, tätt kopplad | Integrationsmotor, blandad koppling | API-först, återanvänder nationella plattformar | API-prestanda och beroenden övervakas; ändringar styrs genom versionering och testning | Löst kopplad, standardbaserad, komponenter utbytbara utan omarbete |
| Inlåsning och upphandling | Proprietära avtal, inga utträdesrättigheter | Vissa standardklausuler, svagt verkställda | Öppna standarder och rättigheter till dataextraktion krävs | Avtalsefterlevnad och beredskap för utträde granskas och kvalitetssäkras över portföljen | Öppna gränssnitt obligatoriska och verifierade; genuin utbytbarhet av leverantörer |

## Checklista

- [ ] Varje relevant journal och gränssnitt bär ett verifierat NHS-nummer, med en process för att lösa saknade eller ej matchade.
- [ ] Nya gränssnitt använder HL7 FHIR och namngivna nationella implementeringsguider, med HL7 v2 kvar endast där migrering ännu inte är motiverad.
- [ ] Kliniskt innehåll kodas med SNOMED CT och läkemedel med dm+d, mot överenskomna värdemängder.
- [ ] Datakvaliteten för allt ni avser dela är profilerad, mäts, ägs och förbättras vid källan innan röret vidgas.
- [ ] Leverantörer måste klara konformitetstestning mot en specifik profil innan de ansluter — ”stödjer FHIR” accepteras aldrig ensamt.
- [ ] Nationella plattformar (Spine, GP Connect, delade vårdjournaler) återanvänds innan någon skräddarsydd integration byggs.
- [ ] Avtal föreskriver öppna, dokumenterade API:er, rättigheter till dataextraktion i ett standardformat och inga avgifter för standardintegrationer.
- [ ] Ansvariga för klinisk säkerhet och informationsstyrning ingår i designgruppen från början, inte bara vid godkännande.
- [ ] Arkitekturen är API-först och löst kopplad, så att en komponent kan ersättas utan att bygga om allt runt den.
- [ ] En namngiven funktion äger standarder, konformitet och terminologiunderhåll över organisationen.

## Viktiga källor

- NHS England — interoperabilitetsstandarder, Spine, GP Connect och program för delade vårdjournaler.
- HL7 International — FHIR-standarden och HL7 v2-specifikationerna.
- SNOMED International — terminologin SNOMED CT och vägledning för implementering.
- NHS Business Services Authority — Dictionary of medicines and devices (dm+d).
- Integrating the Healthcare Enterprise (IHE) — interoperabilitetsprofiler.
- openEHR International — öppna specifikationer för att strukturera hälsojournalen.
- Världshälsoorganisationen — den internationella sjukdomsklassifikationen (ICD-10 och ICD-11).

## Referenser

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
