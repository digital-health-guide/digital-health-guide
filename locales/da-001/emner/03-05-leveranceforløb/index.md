# Emne 3.5 — Leveranceforløb

**I én sætning:** Et [leveranceforløb](https://en.wikipedia.org/wiki/Systems_development_life_cycle) er den række af faser og beslutningsporte – Afdækning, Alfa, Beta, Drift og til sidst nedlæggelse – som en digital tjeneste bevæger sig igennem, med klinisk sikkerhed, informationsstyring og assurance vævet ind i hver fase i stedet for boltet på til sidst.

## Hvorfor det er vigtigt i sundhed og pleje

Et forløb er måden, en organisation omsætter en idé til en sikker tjeneste i drift og til sidst nedlægger den ansvarligt. I sundhed og pleje bærer hver overgang lovbestemt og klinisk vægt: du kan ikke udrulle et system, der berører patientpleje, uden et klinisk sikkerhedscase, og du kan ikke behandle fortrolige patientdata uden et lovligt grundlag og en gennemført [konsekvensanalyse vedrørende databeskyttelse](https://en.wikipedia.org/wiki/Privacy_impact_assessment) (DPIA). Et forløb, der behandler disse som papirarbejde til slut i projektet, producerer tjenester, der er forsinkede, usikre eller begge dele.

Indsatsen er asymmetrisk. En forbrugerapp, der leveres med en fejl, irriterer brugere; en fælles omsorgsjournal, der leveres med en fejl, kan vise en kliniker den forkerte patients allergier. Derfor indbygger NHS GOV.UK-fasemodellen *og* standarderne for klinisk risikostyring DCB0129 og DCB0160 i det samme forløb. At få forløbet rigtigt er ikke en styringsfinesse – det er den mekanisme, hvorigennem sikkerhed, lighed og value for money for offentlige midler faktisk leveres frem for blot lovet.

Ledere har også brug for forløbet, fordi det gør fremdrift *læselig*. Navngivne faser og porte lader en bestyrelse se, hvor en tjeneste er, hvilken evidens der findes, og hvilken beslutning der forfalder – og erstatter tågen af "det er næsten færdigt" med en forsvarlig, trinvis forpligtelse af offentlige midler.

## Kernebegreber

**Fasemodellen: Afdækning → Alfa → Beta → Drift.** NHS’ og GOV.UK’s servicestandarder definerer fire faser. **Afdækning** (se emne 3.4 — Afdækningsfaser) forstår problemet. **Alfa** bygger [kasseprototyper](https://en.wikipedia.org/wiki/Software_prototyping) for at teste, om en løsning *kunne* virke, og for at brænde de mest risikable antagelser af. **Beta** bygger den rigtige, først private og derefter offentlige tjeneste på produktionsinfrastruktur og itererer med rigtige brugere i voksende skala. **Drift** kører tjenesten i kontinuerlig operation, stadig med iteration, indtil den nedlægges. Faserne er en risikoreducerende rampe: hver forpligter flere penge og eksponerer flere brugere, begrundet af evidens fra den forrige.

**Kontinuerlig iteration, ikke et samlebånd.** Faserne er ikke et envejs vandfald. En tjeneste i beta kan gå tilbage til alfa for en svær funktion; en tjeneste i drift itererer kontinuerligt. Modellens værdi er dens *porte*, ikke et løfte om, at arbejdet flyder i én retning.

**Agil, vandfald og hybrid.** *[Vandfald](https://en.wikipedia.org/wiki/Waterfall_model)* fastlægger omfanget på forhånd og skrider frem i rækkefølge – egnet kun, hvor krav er reelt stabile og kendelige (en datacentermigrering, en påbudt regulatorisk ændring). *[Agil](https://en.wikipedia.org/wiki/Agile_software_development)* leverer i små inkrementer, inspicerer og tilpasser – egnet til usikkerheden i brugervendte tjenester. *Hybrid* er den ærlige virkelighed i de fleste store sundhedsprogrammer: agile produktteams, der opererer inden for et milepæls- og finansieringsomslag, som organisationen og dens tilsynsmyndigheder kræver. Afstem metoden efter usikkerheden, ikke efter mode.

**Servicevurderinger og standardporte.** Ved overgangene mellem faser – især alfa-til-beta og før offentlig lancering – møder NHS- og GOV.UK-tjenester en **servicevurdering**: et uafhængigt panel, der tester arbejdet mod Service Standards punkter (brugerbehov, tilgængelighed, sikkerhed, pålidelighed, team, teknologivalg). At bestå er porten til at bruge flere penge og eksponere flere brugere. Vurderingen er evidensbaseret kollegagennemgang, ikke et gummistempel.

**Klinisk sikkerhed og informationsstyring som forløbstråde.** DCB0129 (for producenten/leverandøren) og DCB0160 (for den udrullende sundheds- eller plejeorganisation) kræver et system til klinisk risikostyring, en **farelog** og en **klinisk sikkerhedscase-rapport** godkendt af en navngiven, uddannet klinisk sikkerhedsansvarlig (CSO). Informationsstyring kræver et lovligt grundlag, en DPIA og overholdelse af Caldicott-principperne. Begge er *tråde*, der løber gennem afdækning, alfa, beta og drift – ikke porte til sidst.

**Nedlæggelse.** Et forløb har en afslutning. At nedlægge en tjeneste sikkert – migrere eller arkivere data under opbevaringslovgivningen, omdirigere brugere, underrette klinikere og bevare journaler – er en fase i sig selv og en af de mest forsømte.

## Bedste praksis

1. **Brug faserne som risikoreducerende porte, ikke kalendermilepæle.** Lad hver fases beslutning være "er der nok evidens til at retfærdiggøre at forpligte den næste tranche penge og brugere?" En fase, der slutter, fordi datoen ankom, frem for fordi evidensen er kommet, har sprunget pointen med porten over.

2. **Væv klinisk sikkerhed ind fra alfa, ikke før Drift.** Udpeg en klinisk sikkerhedsansvarlig og åbn farelogen, så snart en løsningsform findes. Farer identificeret i alfa er billige at designe ud; farer fundet ved idriftsættelsen er en lanceringsblokerende krise. Sikkerhedscasen modnes sammen med tjenesten, så DCB0129/0160-godkendelse er et resumé af arbejde, der allerede er gjort, ikke et kaos.

3. **Start DPIA- og IG-arbejdet i afdækningen, og hold det levende.** Dataflows, lovligt grundlag og Caldicott-overvejelser former arkitekturen, så bring dem frem, mens arkitekturen stadig er blød. En DPIA skrevet efter udvikling er en dokumentationsøvelse; en skrevet sammen med designet reducerer faktisk risiko og forhindrer omarbejde.

4. **Automatisér vejen til produktion med [CI/CD](https://en.wikipedia.org/wiki/CI/CD) og [DevOps](https://en.wikipedia.org/wiki/DevOps).** [Kontinuerlig integration](https://en.wikipedia.org/wiki/Continuous_integration) og [kontinuerlig levering](https://en.wikipedia.org/wiki/Continuous_delivery) – automatiserede bygge-, test- og udrulningspipelines – lader et team levere små, reversible ændringer sikkert og ofte. I et sikkerhedskritisk område er evnen til at udrulle en rettelse på minutter og rulle rent tilbage i sig selv en sikkerhedskontrol. Par den med overvågning, alarmering og [infrastruktur som kode](https://en.wikipedia.org/wiki/Infrastructure_as_code), så tjenesten i drift er [observerbar](https://en.wikipedia.org/wiki/Observability_(software)) og reproducerbar.

5. **Afstem metoden efter usikkerheden.** Brug agil, hvor brugerbehov er usikre, og afdækning stadig lærer jer noget; accepter vandfaldslignende sekventering kun, hvor krav er reelt faste, og risikoen for ændring er lav. Vær eksplicit om at køre en hybrid – agile teams inden for et programomslag – frem for at foregive, at én metode styrer alt, hvilket ikke narrer nogen og frustrerer alle.

6. **Behandl servicevurderingen som et designværktøj, ikke en eksamen.** Tag assurance-, klinisk sikkerheds-, sikkerheds- og tilgængelighedsgennemgangere med *tidligt* og ofte, så den formelle vurdering bekræfter en tjeneste, der allerede er bygget til standarden. Teams, der først møder standarden ugen før vurderingen, fejler langsomt og dyrt; teams, der internaliserer den, består som et biprodukt.

7. **Bliv ved med at iterere i Drift – og ressourcesæt det.** En tjeneste holder ikke op med at have brug for et team, når den går i drift. Drift er der, hvor reel brug afslører de sidste uligheder, de sjældne, men alvorlige kliniske kanttilfælde og tilgængelighedshullerne. Finansiér et stående produktteam for tjenestens driftsliv (se emne 5.0 — Produktledet arbejde); en tjeneste i drift uden team er teknisk gæld, der akkumulerer klinisk risiko.

8. **Planlæg nedlæggelsen, før du får brug for den.** Beslut, mens du bygger, hvordan tjenesten til sidst vil blive nedlagt: dataopbevaring og -migrering under journalstyringslovgivningen, omdirigering af brugere, underretning af klinikere og arkivering af det kliniske sikkerhedscase og revisionssporet. En uplanlagt nedlæggelse efterlader data og brugere strandet; en planlagt er en kontrolleret, reviderbar fase.

## Spørgsmål at drøfte med dit team

1. **Er vores faseporte reelt styret af evidens, eller er de stille og roligt blevet til datoer på en plan?**
   Hele værdien af Afdækning–Alfa–Beta–Drift-modellen er, at hver overgang forpligter flere penge og eksponerer flere brugere, kun når evidensen fra den forrige fase retfærdiggør det; i det øjeblik en port udløses, fordi kvartalet sluttede, frem for fordi evidensen er kommet, holder rampen op med at reducere risiko og bliver til "vandfald i agilt kostume". Dette spørgsmål beder et team se ærligt på sine seneste overgange og spørge, hvad der ville være sket, hvis evidensen havde sagt "ikke endnu" – var der plads til at holde, til at sende en beta tilbage til alfa for en svær funktion, eller var idriftsættelsesdatoen politisk ufravigelig? Den spænding, der skal debatteres, er mellem organisationens behov for læselige, bestyrelsesplanlagte milepæle og virkeligheden, at sikre tjenester bevæger sig i evidensens tempo, og hybrid leverance lever netop i den friktion. Konkrete vinkler omfatter at nævne den specifikke beslutning og evidens, der forfalder ved den næste port, at tjekke, om "sprints" faktisk ændrer omfang eller blot følger en fast plan, og at spørge, hvem der har beføjelse til at udskyde en port uden karriererisiko. Et godt svar kan pege på et reelt tilfælde, hvor evidens ændrede planen, og kan formulere, hvilken evidens der ville retfærdiggøre – eller blokere – den næste forpligtelse af offentlige midler og brugere.

2. **Er klinisk sikkerhed og informationsstyring levende tråde gennem hver fase, eller papirarbejde, vi har til hensigt at færdiggøre før Drift?**
   I sundhed og pleje er DPIA’en og det kliniske DCB0129/0160-risikoarbejde ikke godkendelser til slut i projektet, men tråde, der skal forme arkitektur og design fra alfa og frem, fordi en fare designet ud tidligt er billig, mens en opdaget ved idriftsættelsen er en lanceringsblokerende krise – eller værre, et pres for at vinke sikkerhedscasen igennem. Dette spørgsmål bringer frem, om en navngiven, uddannet klinisk sikkerhedsansvarlig og en åben farelog findes, så snart en løsningsform viser sig, og om DPIA’en og analysen af lovligt grundlag begyndte i afdækningen, mens dataflowene stadig var bløde nok til at ændre. Den afvejning, der er værd at debattere, er den følte belastning ved at gøre dette kontinuerligt versus den langt større omkostning og kliniske risiko ved en eftermontering, især for mindre teams eller startups, hvor ingen tilsynsmyndighed endnu holder øje, men DCB0129-forpligtelsen knytter sig til producenten uanset. Overvej konkret evidens: viser farelogen farer fundet og afbødet i alfa, læses sikkerhedscasen som et resumé af arbejde, der allerede er gjort, og kan DPIA’en spores til reelle designbeslutninger? Et ærligt svar skelner et team, der modner sit sikkerhedscase sammen med tjenesten, fra et, der er på vej mod et dokumentationskaos måneden før lancering.

3. **Hvordan vil denne tjeneste blive drevet i Drift og til sidst nedlagt – og hvem er finansieret til at gøre det?**
   Forløb har en lang hale, som organisationer rutinemæssigt underfinansierer: Drift er der, hvor reel brug afslører de sidste uligheder, sjældne, men alvorlige kliniske kanttilfælde og tilgængelighedshuller, og den har brug for et stående produktteam, overvågning og hurtig, reversibel udrulning frem for et team, der opløses ved idriftsættelsen og lader tjenesten rådne og lydløst akkumulere klinisk risiko. Lige så forsømt er nedlæggelse – at nedlægge en tjeneste under journalopbevaringslovgivningen, migrere eller arkivere data, omdirigere brugere, underrette klinikere og bevare farelogen og revisionssporet – hvilket for et nationalt system er et større program i sig selv, ikke en eftertanke, når erstatningen ankommer. Den spænding, der skal debatteres, er årlige finansieringscyklusser og presset for at erklære et projekt "færdigt" ved lanceringen versus det helhedsejerskab, en sikker tjeneste faktisk kræver. Nyttige vinkler omfatter, om en CI/CD-pipeline med overvågning og hurtig tilbagerulning behandles som en sikkerhedskontrol i drift, om en vagtordning og et iterationsbudget overlever idriftsættelsesfejringen, og om en udgangsplan blev skrevet under udviklingen frem for improviseret i panik. Et godt svar nævner, hvem der ejer tjenesten i dens driftsliv, og beskriver en kontrolleret, reviderbar nedlæggelse frem for et håb om, at nogen tager sig af det senere.

4. **Hvornår lod vi sidst en prototypes fiasko stoppe os – og bygger vi stadig ting for at smide dem væk?**
   Alfa findes for at brænde de mest risikable antagelser af billigt, hvilket betyder, at en kasseprototype, der fejler, har gjort sit arbejde: den har købt en dyr lektie, før produktionspenge og rigtige patienter blev forpligtet. Dette spørgsmål undersøger, om et team reelt behandler alfa som disponibel læring eller i det stille er gledet over i at pudse sin første prototype til det endelige produkt, fordi det føles spild at skrotte kode – sunk cost-fælden, der forvandler en risikoreducerende fase til en dyr forpligtelse indgået blindt. Den spænding, der er værd at bringe frem, er presset for at "have noget at vise" og genbruge hver skrevet linje mod disciplinen at bevise, at en løsning *kunne* virke, før den rigtige bygges på produktionsinfrastruktur. Konkrete vinkler omfatter at spørge, hvilke antagelser det seneste alfa faktisk testede, om nogen prototype nogensinde blev opgivet på grund af evidens, og om privat-beta-udgaven genbrugte kasse-kode, der burde have været omskrevet til produktionsstandard. Et ærligt svar kan pege på en specifik antagelse, som en prototype dræbte eller bekræftede, og kan skelne mellem læringsartefakter, teamet var villigt til at kassere, og den kvalitetssikrede kode, det nu kører i Drift.

5. **Kører vi én ærlig hybrid, eller flere forklædte metoder, der stille modsiger hinanden?**
   De fleste store sundhedsprogrammer er reelt hybride – agile produktteams, der opererer inden for et milepæls- og finansieringsomslag, som organisationen og dens tilsynsmyndigheder kræver – og fejlen er ikke selve hybriden, men at foregive, at den er ren agil eller ren vandfald, så de to logikker støder sammen uden styring ved hver port. Dette spørgsmål beder et team nævne, hvor de faste, sekventerede forpligtelser reelt sidder (finansieringstrancher, regulatoriske milepæle, integrationsfrysninger), og hvor den ægte iteration sker, frem for at lade "agil" og "planen" hver gøre krav på hele programmet og frustrere alle. Den afvejning, der skal debatteres, er organisationens legitime behov for forudsigelige milepæle og reviderbare udgifter mod leveranceteamets behov for at ændre omfang på evidens, og det ærlige træk er at gøre sømmene eksplicitte, så begge kan planlægges omkring. Nyttige vinkler omfatter, om genprioritering af backlog nogensinde overlever mødet med programplanen, om leverandører kontraheres til fast omfang, mens de bedes arbejde iterativt, og om den rapportering, en bestyrelse ser, svarer til, hvordan arbejdet reelt udføres. Et godt svar beskriver en bevidst designet hybrid med navngivne faste punkter og navngivne fleksible rum, ikke et rod, hvor metoden påberåbes af hensyn til udseendet.

6. **Hvor godt ved vi, hvad en tjeneste i drift faktisk gør ved sine brugere lige nu – og ville vi bemærke skade, før de rapporterede den?**
   En sundhedstjeneste i drift er kun så sikker som dens observerbarhed: overvågning, alarmering og de kliniske sikkerhedsinstinkter, der omsætter en metrik til en fare, betyder forskellen mellem at fange en forældet-data-fejl på minutter og at høre om den i en hændelsesrapport uger senere. Dette spørgsmål undersøger, om teamet kan se tjenesten i produktion – fejlrater, integrationssvigt, tilgængelighedsfrafald, de ligestillingshuller, kun reel brug afslører – og om nogen holder øje med dashboards med klinisk risiko i tankerne, ikke kun infrastrukturens oppetid. Spændingen er omkostningen og disciplinen ved ordentlig observerbarhed og vagt mod den stille antagelse, at "ingen nyheder er gode nyheder", når en tjeneste først er i drift, hvilket i et sikkerhedskritisk område er sådan, lydløs skade akkumuleres. Konkrete vinkler omfatter, om farelogen opdateres fra hændelser i drift, om alarmer svarer til klinisk konsekvens frem for kun serverens tilstand, og om en dårlig udgivelse kan opdages og rulles tilbage, før den når mange patienter. Et ærligt svar beskriver specifikke signaler, teamet holder øje med, en reel hændelse, som overvågningen fangede (eller overså), og hvordan evidens fra drift føder den næste iteration.

## I praksis: et eksempel fra sundhed og pleje

Et kommunalt NHS-hospital erstatter et ældre papir-og-regneark-system til planlægning af distriktssygeplejerskers besøg. Ud af afdækningen (emne 3.4) går teamet ind i **alfa** og bygger to kasseprototyper for at teste de mest risikable antagelser: at sygeplejersker vil bruge en telefon i patienters hjem, og at planen kan integreres med den elektroniske patientjournal. En klinisk sikkerhedsansvarlig udpeges på alfaens første dag og åbner en farelog; en tidlig fare – en forældet plan, der viser et besøg, en kollega allerede har gennemført – driver en designbeslutning om at vise synkroniseringsstatus i realtid. DPIA’en, påbegyndt i afdækningen, markerer, at placeringsdata på enlige medarbejdere har brug for et defineret lovligt grundlag og en opbevaringsgrænse.

Ved **alfa-til-beta-servicevurderingen** undersøger et uafhængigt panel tilgængelighed (sygeplejersker med synsnedsættelser), sikkerhed og teamets ræsonnering. Tjenesten består med handlinger. I **privat beta** bruger ti sygeplejersker det rigtige system på produktionsinfrastruktur; en CI/CD-pipeline lader teamet levere dagligt og rulle en dårlig udgivelse tilbage på under ti minutter. Brug afslører et ligestillingsproblem – vikarpersonale uden betroede enheder – hvilket fører til en browserbaseret reserveløsning. **Offentlig beta** skalerer til tre lokalområder; den kliniske sikkerhedscase-rapport færdiggøres og godkendes under DCB0160, før bredere udrulning.

Tjenesten går i **Drift** med et stående produktteam, overvågningsdashboards og en vagtplan. Atten måneder senere, da hospitalet tager en regional platform i brug, **nedlægges** planen efter plan: data migreret under opbevaringsplanen, sygeplejersker genuddannet og omdirigeret, og farelogen og sikkerhedscasen arkiveret til revision. Hver overgang var en beslutning bakket op af evidens, ikke en dato på et Gantt-diagram.

## Sektorperspektiver

### Startup

En startups forløb er komprimeret og i vid udstrækning selvstyret: der er intet uafhængigt servicevurderingspanel, så disciplinen i Alfa–Beta–Drift-portene må være selvpålagt, ellers kollapser den til "lever kontinuerligt og håb". Fordelen er, at et lille team kan køre reel CI/CD fra dag ét og iterere hurtigere end ethvert stort organ. Faren er stille at droppe trådene for klinisk sikkerhed og DPIA, fordi ingen tilsynsmyndighed endnu holder øje – en fatal fejl i sundhed, hvor DCB0129-forpligtelser knytter sig til producenten uanset virksomhedens størrelse, og hvor én uhåndteret fare kan afslutte både produktet og virksomheden. Startups bør tage fasemodellens hensigt i brug – evidens før eksponering – selv uden ceremonien, og udpege en klinisk sikkerhedsansvarlig (ofte på deltid), så snart en løsningsform findes.

### Lille virksomhed

En etableret lille udbyder – en lægepraksis, et lokalt apotek, et plejehjem eller en enkelt klinik – møder normalt forløbet som *udrulleren* frem for bygger: den indkøber eller konfigurerer en leverandørs system, så DCB0160-udrulningsgodkendelse og en lokal DPIA falder på den, selv uden et internt digitalt team. Faserne gælder stadig, men komprimeret og outsourcet: "alfa" er en overvåget pilot på nogle få rigtige patienter, "beta" er en trinvis udrulning på tværs af praksissen, og Drift er hverdagen med leverandørens opdateringer, der ankommer kontinuerligt og i vid udstrækning uden for praksissens kontrol. Organisationen må udpege en klinisk sikkerhedsansvarlig (ofte en klinisk partner, der tager rollen ud over et fuldtidsjob) og føre en farelog for, hvordan systemet *bruges* lokalt, fordi producentens DCB0129-arbejde ikke dækker udrulningens specifikke risici. Med stram kontant situation og ingen dedikeret it er den realistiske disciplin at læne sig op ad leverandørens assurance, mens man ejer de få beslutninger, som kun lokal viden kan træffe – hvem der uddannes, hvad reserveløsningen er, når systemet er nede, og hvordan patientdata flyder i netop denne setting.

### Stor virksomhed

Et NHS-hospital eller en stor leverandør kører forløbet i dets fuldeste, mest kvalitetssikrede form: formelle servicevurderinger, en navngiven klinisk sikkerhedsansvarlig, DCB0160-udrulningsgodkendelse, ændringsrådgivende bestyrelser og en årlig finansieringscyklus, det agile arbejde skal passe ind i. Den karakteristiske udfordring er hybriden – agile leveranceteams, der opererer inden for et program-og-milepæls-omslag, som organisationen og dens revisorer kræver – og den klassiske fiasko er "vandfald i agilt kostume", hvor porte stille bliver til kalenderdatoer. Store virksomheder har ressourcerne til at gøre CI/CD, observerbarhed og stående produktteams ordentligt, men organisatorisk træghed og legacy-integration bremser ofte udrulning til en snegl. Ansvaret er bredt og sprængradius stor, så den trinvise rampe fra privat beta til drift er ikke valgfri forsigtighed, men afgørende risikokontrol.

### Myndighed

Et nationalt organ leverer under den fulde Service Standard, offentliggjorte servicevurderinger, udgiftskontroller og parlamentarisk granskning, så hver faseport også er et punkt for offentligt ansvar. Forløb her er lange og eksponeringen enorm – en NHS-dækkende tjeneste i drift kan berøre millioner – hvilket hæver indsatsen på den trinvise rampe, den kliniske sikkerhedsassurance og nedlæggelsen af de legacy-systemer, der erstattes. Indkøbsregler og flerårige finansieringsaftaler former, hvad "agil" kan betyde i praksis, og at nedlægge et nationalt system (med dets årtiers journaler og lovbestemte opbevaringspligter) er et større program i sig selv. Afvejningen er assurance versus fart: levering i en myndighed er stærkt portet, hvilket beskytter sikkerhed og offentlige midler, men kræver bevidst indsats for at holde teams iterende frem for at falde tilbage til stort-design-på-forhånd.

## Typiske fejlmønstre

- **Vandfald i agilt kostume.** Teamet kører "sprints", men omfang, datoer og design blev alle fastlagt på forhånd; iteration er teater. Modgift: lad evidens ved hver port reelt ændre planen.
- **Sikkerhed og IG boltet på til sidst.** Det kliniske sikkerhedscase og DPIA’en skrives måneden før idriftsættelsen, hvilket blokerer lanceringen eller, værre, vinkes igennem under pres. Modgift: åbn farelogen og DPIA’en i alfa, og modn dem kontinuerligt.
- **Big bang-lanceringen.** Tjenesten springer privat/offentlig beta over og går direkte til fuld udrulning, hvilket eksponerer hver bruger for uprøvet software. Modgift: brug den trinvise rampe; vokse eksponeringen med evidens.
- **Den opgivne tjeneste i drift.** Leveranceteamet opløses ved idriftsættelsen; tjenesten rådner, og klinisk risiko akkumuleres lydløst. Modgift: finansiér et stående produktteam for driftslivet.
- **Vurderingskaos.** Standarder ignoreres, til vurderingen truer, og opfyldes så overfladisk. Modgift: inddrag assurance- og kliniske gennemgangere kontinuerligt.
- **Ingen udgangsplan.** Tjenesten nedlægges i panik, når erstatningen ankommer, og efterlader data og brugere strandet. Modgift: planlæg nedlæggelse som en førsteklasses fase.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Fasedisciplin | Ad hoc; faser springes over eller omdøbes | Faser navngivet, men porte er kalenderdrevne | Evidensbaserede porte styrer udgifter og eksponering | Portbeslutninger følges mod definerede kriterier; udgifter og eksponering rapporteres og kvalitetssikres | Trinvis finansiering i hele porteføljen; svage tjenester stoppes tidligt |
| Metodepasform | Én metode tvunget ned over alt arbejde | Agil bruges, men inden for stift fast omfang | Metode afstemt efter usikkerhed; hybrid gjort eksplicit | Metodepasform gennemgås mod leveringsmetrikker; hybridsømme styres og måles | Teams justerer løbende metoden, efterhånden som usikkerheden ændrer sig |
| Klinisk sikkerhed og IG | Adresseret efter udvikling, hvis overhovedet | Rejst sent; CSO/DPIA er et lanceringskaos | Farelog, sikkerhedscase, DPIA vedligeholdt fra alfa | Farer og IG-kontroller følges med KPI’er og kvalitetssikres mod mål | Sikkerheds- og IG-evidens former design; godkendelse er rutine |
| CI/CD og drift | Manuelle, sjældne, risikable udrulninger | Noget automatisering; langsomme, frygtede udgivelser | Automatiseret pipeline, overvågning, hurtig tilbagerulning | Udrulnings- og pålidelighedsmetrikker (DORA) følges og styres mod mål | Kontinuerlig levering som sikkerhedskontrol; stærk observerbarhed |
| Drift og nedlæggelse | Intet stående team; ingen udgangsplan | Team fastholdt ad hoc; nedlæggelse improviseret | Finansieret produktteam; nedlæggelse planlagt | Ydelse i drift og nedlæggelsesparathed måles og styres | Helhedsejerskab; nedlæggelser kontrolleres og revideres |

## Tjekliste

- [ ] Tjenesten har en eksplicit nuværende fase (Afdækning / Alfa / Beta / Drift) og en navngiven næste beslutning.
- [ ] Faseovergange er porte på evidens, ikke på datoer.
- [ ] En klinisk sikkerhedsansvarlig er udpeget, og en farelog er åben (DCB0129/0160) fra alfa og frem.
- [ ] En DPIA og vurdering af lovligt grundlag (Caldicott, UK GDPR) begyndte i afdækningen og holdes aktuel.
- [ ] Leveringsmetoden er afstemt efter usikkerhedsniveauet, og enhver hybridordning er eksplicit.
- [ ] Servicevurderinger er planlagt, og assurance-/sikkerheds-/tilgængelighedsgennemgangere er inddraget tidligt.
- [ ] En CI/CD-pipeline med overvågning og hurtig tilbagerulning er på plads før offentlig beta.
- [ ] Tjenesten eksponeres for brugere i en trinvis rampe (privat beta → offentlig beta → drift), ikke big bang.
- [ ] Et stående produktteam er finansieret for tjenestens driftsliv (se emne 5.0).
- [ ] En nedlæggelsesplan dækker dataopbevaring/-migrering, omdirigering af brugere og arkivering af sikkerheds- og revisionsregistreringer.

## Centrale kilder

- GOV.UK Service Manual — faserne i et agilt projekt (Afdækning, Alfa, Beta, Drift) og Government Service Standard.
- NHS England — NHS Service Standard og NHS Digital Service Manual; NHS-servicevurderinger.
- NHS England Digital — DCB0129 (Clinical Risk Management: its Application in the Manufacture of Health IT Systems) og DCB0160 (its Application in the Deployment and Use of Health IT Systems).
- NHS England — Digital clinical safety assurance; den kliniske sikkerhedsansvarliges rolle, farelog og klinisk sikkerhedscase-rapport.
- NHS England — Digital Technology Assessment Criteria (DTAC).
- Britiske Caldicott-principper; Data Protection Act 2018 / UK GDPR og konsekvensanalyser vedrørende databeskyttelse.
- NICE — Evidence Standards Framework for Digital Health Technologies.
- DevOps- og kontinuerlig leverancepraksis (f.eks. DORA-kapabiliteterne: kontinuerlig integration, udrulningsautomatisering, overvågning); GOV.UK Service Manual-vejledning om kontinuerlig levering og drift af en tjeneste.

## Referencer

1. Systems development life cycle — Wikipedia — https://en.wikipedia.org/wiki/Systems_development_life_cycle
2. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
3. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
4. Software prototyping — Wikipedia — https://en.wikipedia.org/wiki/Software_prototyping
5. CI/CD — Wikipedia — https://en.wikipedia.org/wiki/CI/CD
6. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
7. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
8. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
9. Infrastructure as Code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
10. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
11. Privacy impact assessment (data protection impact assessment) — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
12. Agile delivery: the phases of an agile project — Government Digital Service, GOV.UK Service Manual — https://www.gov.uk/service-manual/agile-delivery
13. NHS service standard and NHS digital service manual — NHS England — https://service-manual.nhs.uk/
14. Clinical risk management standards DCB0129 and DCB0160 — NHS England (Clinical Safety) — https://digital.nhs.uk/services/clinical-safety
15. DevOps Research and Assessment (DORA) capabilities — Google Cloud / DORA — https://dora.dev/
16. Continuous delivery — Jez Humble and David Farley — https://continuousdelivery.com/
17. Data protection impact assessments (DPIAs) — Information Commissioner's Office (ICO) — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/
18. Evidence standards framework for digital health technologies — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
