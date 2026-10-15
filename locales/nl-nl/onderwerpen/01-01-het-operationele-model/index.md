# Onderwerp 1.1 — Het operationele model

**In één zin:** Een doeloperationeel model (target operating model, TOM) is het bewuste ontwerp van hoe de strategie van uw organisatie door waardestromen, capaciteiten, teams, bestuur, technologie, data en leveranciers stroomt om uitkomsten in digitale gezondheid en zorg te leveren – en of de vorm ervan goed is, bepaalt of alles stroomafwaarts snel en veilig is of traag en broos.

## Waarom dit ertoe doet in gezondheid en zorg

De meeste organisaties voor digitale gezondheid falen niet door gebrek aan talent of technologie; ze falen omdat hun operationele model hen tegenwerkt. Financiering is gebonden aan projecten met een beperkte looptijd, beslisrechten zijn dubbelzinnig en elk team bouwt dezelfde inlog-, integratie- en auditleidingen opnieuw. Het resultaat is dubbele kosten van publiek geld, inconsistente klinische veiligheid en diensten die geen data kunnen delen over een geïntegreerd zorgsysteem (ICS).

Een operationeel model is in dit domein onderscheidend omdat het concurrerende goederen moet verzoenen. Het moet **gefedereerd genoeg** zijn om de autonomie van soevereine organisaties – ziekenhuizen, lokale overheden, huisartsenpraktijken – te respecteren, maar **samenhangend genoeg** om een patiënt over hen heen één veilige ervaring te geven. Het moet **run** (klinische systemen veilig beschikbaar houden) afwegen tegen **change** (ze verbeteren), terwijl uitval de zorg kan raken. En het moet evenredig uitgeven: borging zwaar genoeg voor publieke verantwoording en klinische veiligheid, licht genoeg om iteratie niet te wurgen. Het TOM is waar die afwegingen expliciet worden gemaakt in plaats van aan het toeval overgelaten.

## Kernbegrippen

**De lagen van een [operationeel model](https://en.wikipedia.org/wiki/Operating_model).** Een bruikbaar TOM is een stapel, waarin elke laag de laag erboven dient:

- **Strategie en uitkomsten** — de meetbare uitkomsten voor bevolking en diensten die u bestaat om te verbeteren (vaak uitgedrukt als [OKR’s](https://en.wikipedia.org/wiki/Objectives_and_key_results); zie Onderwerp 1.3 — Op bewijs gebaseerde besluitvorming).
- **[Waardestromen](https://en.wikipedia.org/wiki/Value_stream)** — de ketens van begin tot eind die waarde aan een gebruiker leveren, bijv. “verwijs, triageer en behandel een patiënt” — georganiseerd rond het traject van de burger, niet rond het organigram.
- **Capaciteiten** — wat u moet kunnen (identiteit, afspraken boeken, klinische documentatie, analyse). Capaciteiten zijn stabiel ook als oplossingen veranderen.
- **Teams** — de mensen die zijn georganiseerd om capaciteiten en waardestromen te leveren (zie Team Topologies hieronder).
- **Bestuur en beslisrechten** — wie wat beslist en hoe borging wordt toegepast.
- **Technologie en data** — de platforms, normen en dataarchitectuur waarop de teams bouwen.
- **Leveranciers** — de markt waarvan u koopt en hoe u haar beheert.

Van boven naar beneden ontwerpen (strategie → waardestromen → capaciteiten) houdt teams en technologie afgestemd op uitkomsten in plaats van op legacystructuren.

**Gecentraliseerde, gefedereerde en platformmodellen.** Een **gecentraliseerd** model concentreert levering in één team of verzelfstandigd orgaan: consistent en goedkoop te standaardiseren, maar een knelpunt en vaak ver van de lokale behoefte. Een **gefedereerd** model schuift levering door naar ziekenhuizen en plaatsen: responsief en lokaal bezeten, maar gevoelig voor duplicatie en divergentie. Een **platformmodel** is het verzoenende patroon: een centraal team levert gedeelde, herbruikbare capaciteiten (identiteit, interoperabiliteit, hosting, designsysteem) als *platform*, en gefedereerde teams bouwen er in hoog tempo bovenop. De meeste volwassen zorgstelsels convergeren naar “platform plus federatie”.

**Team Topologies.** Dit kader noemt vier teamtypen — stream-aligned (eigenaar van een waardestroom), platform (levert zelfbediening van capaciteiten), enabling (coacht anderen in een capaciteit) en complicated-subsystem (diep specialistisch werk zoals een algoritme) — en benadrukt interactie met weinig frictie tussen hen. Het sluit netjes aan op het platformmodel: platformteams verminderen de cognitieve belasting van stream-aligned teams zodat die zich op gebruikers- en klinische waarde kunnen richten.

**Run versus change.** *Run* is live diensten veilig en beschikbaar houden; *change* is ze verbeteren of bouwen. Productteams die een dienst zowel bouwen als runnen (“you build it, you run it”) sluiten de terugkoppelingslus en verbeteren de veiligheid, maar het evenwicht moet eerlijk worden gefinancierd — run uithongeren om change te financieren is hoe klinische systemen vervallen.

**Het dunste levensvatbare platform (thinnest viable platform, TVP).** Uit Team Topologies: een platform moet de *kleinste* set gedeelde diensten zijn die de frictie voor stroomteams werkelijk vermindert — niet meer. Een te veel gebouwd platform wordt zijn eigen knelpunt en zijn eigen legacy. Begin met de weinige capaciteiten die elk team werkelijk nodig heeft (authenticatie, een interoperabiliteitslaag, hosting, een designsysteem) en groei alleen bij aangetoonde vraag.

## Beste praktijken

1. **Ontwerp het model van uitkomsten naar beneden, niet van het organigram naar boven.** Begin bij de uitkomsten voor bevolking en diensten die u moet bewegen, leid de waardestromen af die ze leveren en ontwerp pas dan teams en technologie. Een TOM verankerd in de bestaande hiërarchie automatiseert slechts de huidige silo’s.

2. **Neem een vorm van platform plus federatie aan.** Lever gedeelde capaciteiten centraal als zelfbedieningsplatform en laat stream-aligned teams in ziekenhuizen en plaatsen erop bouwen. Dit geeft u nationale consistentie in veiligheid en interoperabiliteit met lokale snelheid en eigenaarschap — de verzoening die het domein eist.

3. **Financier producten, geen projecten.** Verplaats geld van projecten met een vast tijdsbestek naar blijvend gefinancierde productteams afgestemd op waardestromen. Projectfinanciering dwingt teams uiteen te gaan precies op het moment dat zij het domein hebben geleerd; productfinanciering houdt de veiligheidskennis en iteratie in stand die zorgdiensten nodig hebben (zie Onderwerp 5.0 — Productgestuurd werken).

4. **Maak uitgavenbeheersing evenredig en gefaseerd.** Gebruik gefaseerde financiering gekoppeld aan bewijs — geef geld vrij bij de poorten van discovery, alpha, beta en live in plaats van een heel programma vooraf goed te keuren. Spend controls in de stijl van de [GDS](https://en.wikipedia.org/wiki/Government_Digital_Service) en het borgingstraject van de NHS bestaan om grote verzonken kosten voor onbewezen ideeën te voorkomen; pas ze toe als drempels geschaald naar risico en waarde, niet als algemene bureaucratie.

5. **Maak beslisrechten expliciet met een RACI- of RAPID-kaart.** Dubbelzinnig gezag is de meest voorkomende oorzaak van vastgelopen levering. Noem voor elk significant type beslissing wie Responsible/Accountable/Consulted/Informed is ([RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)) of wie Recommends, Agrees, Performs, Input heeft en Decides (RAPID). Publiceer haar zodat teams ophouden beslissingen te escaleren die zij mogen nemen.

6. **Houd het platform dun en vraaggestuurd.** Bouw gedeelde capaciteiten alleen wanneer twee of meer teams aantoonbaar hetzelfde nodig hebben en behandel het platform als product met eigen gebruikers (de interne teams). Weersta de neiging een groots platform vooraf te bouwen; het dunste levensvatbare platform verdient zijn reikwijdte via adoptie.

7. **Beheer leveranciers als deel van het model, niet erbuiten.** Besluit bewust welke capaciteiten strategisch zijn (bouwen/bezitten) en welke gemeengoed (kopen), vermijd [lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) bij één leverancier voor klinische kerndata en eis open normen en uitstaprechten in contracten. Uw leveranciers zijn een laag van uw operationele model, en hun werkwijzen moeten verenigbaar zijn met de uwe.

8. **Maak beslisrechten expliciet.** Een operationeel model werkt alleen als mensen weten wie wat beslist — welke keuzes bij een productteam liggen, welke bij een autoriteit voor klinische veiligheid en welke een bestuur moeten bereiken. Breng beslisrechten in kaart en duw elke beslissing naar het laagste niveau dat haar veilig kan dragen, zodat levering niet wordt gesmoord door onnodige escalatie. Dubbelzinnig gezag is een van de meest voorkomende oorzaken van trage, defensieve levering.

9. **Behandel het operationele model als een product dat u laat evolueren.** Een doeloperationeel model wordt niet eenmaal vastgesteld en ingelijst aan de muur; inspecteer het naarmate vraag, technologie en partnerschappen veranderen en pas het aan op bewijs. Let op enkele signalen — doorstroming van werk, tijd tot beslissing, herwerk en teamgezondheid — en wijzig structuren wanneer zij aantoonbaar in de weg zitten, niet als reactie op reorganisatiemode.

## Vragen om met uw team te bespreken

1. **Is ons operationele model van uitkomsten en waardestromen naar beneden ontworpen, of heeft het simpelweg ons bestaande organigram en zijn silo’s geautomatiseerd?**
   Deze vraag gaat naar de centrale waarschuwing van het onderwerp dat een TOM verankerd in de huidige hiërarchie de silo’s die u al hebt slechts verankert, dus het is de moeite waard haar op tafel te leggen vóór enige reorganisatie. Het doet ertoe in een setting van gezondheid en zorg omdat waardestromen het traject van de burger volgen — verwijzen, triageren, behandelen — over soevereine organisaties heen, terwijl organigrammen institutionele grenzen volgen, en een model gebouwd op het laatste zal blijven gefragmenteerde, niet-interoperabele diensten voortbrengen op publiek geld. De spanning om eerlijk te bespreken is dat van uitkomsten naar beneden ontwerpen werkelijk ontwrichtend is: het snijdt dwars door afdelingseigenaarschap, budgetten en rapportagelijnen waarrond senior mensen carrières hebben opgebouwd, dus het goed doen heeft echte politieke kosten. Toets uzelf concreet door uw drie belangrijkste uitkomsten te noemen en na te gaan of uw werkelijke teamgrenzen en financieringslijnen die waardestromen volgen of de afdelingen; als teams netjes op afdelingen afbeelden, is dat uw antwoord. Een goed, eerlijk antwoord erkent waar het model de vorm van het organigram heeft, identificeert ten minste één waardestroom die nu ten nadele over silo’s is verdeeld en is realistisch over welke structurele grenzen de organisatie bereid is opnieuw te trekken.

2. **Wat hoort in ons dunste levensvatbare platform, en hoe voorkomen wij dat het ofwel te veel wordt gebouwd tot een knelpunt ofwel te weinig zodat elk team dezelfde leidingen opnieuw bouwt?**
   De vorm van platform plus federatie werkt alleen als het platform dun en vraaggestuurd blijft, en deze vraag laat het team beide faalpatronen confronteren die het onderwerp noemt — het grote platform dat zijn eigen legacyknelpunt wordt, en de afwezigheid die elk team dwingt inlog, integratie en audit opnieuw te bouwen. Het doet ertoe omdat het platform in een ICS feitelijk gedeelde infrastructuur is (identiteit, een FHIR-interoperabiliteitslaag, hosting met veiligheidsbasislijnen, een designsysteem) en de reikwijdte ervan verkeerd hebben ofwel kosten ofwel frictie vermenigvuldigt over elk stroomteam. De afweging om te bespreken is timing en bewijs: te vroeg bouwen en u raadt verkeerd en creëert een knelpunt; te laat bouwen en duplicatie is al verstard — dus de toets “twee of meer teams hebben aantoonbaar hetzelfde nodig” is de kern, en het team moet toetsen of het die werkelijk toepast of gewoon bouwt wat duidelijk centraal lijkt. Kijk naar wat u nu als platform behandelt tegenover wat teams opnieuw bouwen, en vraag of het platform wordt gerund als product met eigen interne gebruikers en SLA’s of als rij waarachter iedereen wacht. Een eerlijk antwoord noemt de specifieke capaciteiten die de twee-teamtoets vandaag doorstaan, weerstaat de verleiding de rest vooraf te bouwen en verbindt zich ertoe de interne gebruikers van het platformteam te behandelen als echte klanten met echte serviceniveaus.

3. **Waar zijn onze beslisrechten werkelijk dubbelzinnig, en wat escaleren teams nu dat zij zelf zouden mogen beslissen?**
   Dubbelzinnig gezag wordt genoemd als de meest voorkomende oorzaak van vastgelopen levering, dus deze vraag brengt de dagelijkse frictie aan het licht die een gepubliceerde RACI- of RAPID-kaart moet wegnemen. Het doet scherp ertoe in een gefedereerd zorgstelsel waar plaatsteams, een digitaal bestuur van het ICS, klinische veiligheid en informatiebeheer allemaal legitieme aanspraken op een beslissing hebben, en onduidelijke grenzen betekenen dat ofwel alles escaleert ofwel, erger, niemand een besluit bezit totdat het misgaat. De spanning die het onderzoeken waard is, is dat beslissingen delegeren vertrouwen in teams binnen vangrails vereist, wat senior leiders en besturen vaak weerstaan juist waar klinische veiligheid of publiek geld in het geding is — maar dat vertrouwen onthouden is wat de escalatiestilstand in de eerste plaats creëert. Maak het concreet door de laatste vijf beslissingen die escaleerden op te lijsten en per geval te vragen wie had moeten beslissen en welke vangrail het hen had laten doen; het patroon onthult gewoonlijk een klein aantal terugkerende dubbelzinnige beslissingstypen. Een goed antwoord produceert een specifieke, publiceerbare verklaring van wie wat beslist — met onderscheid tussen platformnormen, servicedesign en goedkeuring van klinische veiligheid — en is eerlijk over welke beslissingen de organisatie werkelijk bereid is te delegeren tegenover welke zij centraal houdt en waarom.

4. **Financieren wij run en change eerlijk, of hongeren wij stilletjes de operatie van live diensten uit om nieuwe functies te betalen?**
   Het onderwerp is bot dat run uithongeren om change te financieren is hoe klinische systemen vervallen, en deze vraag dwingt het evenwicht naar buiten voordat een storing of een veiligheidsincident het voor u doet. Het doet ertoe in gezondheid en zorg omdat “run” geen overhead van de backoffice is — het is de beschikbaarheid van systemen waarvan clinici op het zorgmoment afhangen, dus een verslechterd runbudget toont zich als uitval die patiënten kan raken, niet louter gebruikers hindert. De afweging is ongemakkelijk omdat change zichtbaar is en gevierd wordt terwijl run onzichtbaar is totdat het faalt, dus besturen en roadmaps neigen natuurlijk naar het nieuwe; een model van “you build it, you run it” helpt door de terugkoppelingslus gesloten te houden, maar alleen als de runtijd van het team werkelijk wordt beschermd en niet louter nominaal toegewezen en dan geplunderd. Maak het concreet door te kijken welk deel van de capaciteit van elk productteam het afgelopen kwartaal werkelijk ging naar het veilig en beschikbaar houden van diensten tegenover wat gepland was, en of runwerk wordt gevolgd en gewaardeerd of als onderbreking behandeld. Een eerlijk antwoord noemt waar run nu ondergefinancierd wordt, beschermt een realistische runtoewijzing als eerste last in plaats van als residu en is open over welke live diensten opgebouwd operationeel risico dragen.

5. **Welke capaciteiten kiezen wij bewust te bouwen en te bezitten tegenover te kopen, en aanvaarden wij ongewild lock-in op onze klinische kerndata?**
   De beste praktijk hier is bewust te beslissen over bouwen versus kopen, lock-in bij één leverancier op klinische kerndata te vermijden en leveranciers te behandelen als laag van het operationele model in plaats van iets erbuiten — deze vraag toetst of die keuzes werkelijk worden gemaakt of standaard gebeuren. Het doet ertoe omdat in digitale gezondheid de ingrijpendste lock-in rond het klinische dossier en zijn data zit, waar een bedrijfseigen opslag zonder realistische uitgang een heel stelsel een decennium kan vangen en dicteren wat elke dienst stroomafwaarts kan doen. De spanning is snelheid versus optionaliteit: kopen is sneller en vaak vandaag goedkoper, vooral voor een uitgerekt team, maar elke gemakkelijke aankoop zonder open normen of uitstaprechten versmalt stilletjes de keuzes van morgen, en de kosten worden pas zichtbaar wanneer u probeert te vertrekken. Maak het concreet door uw kerncapaciteiten op te lijsten, elk te markeren als strategisch (bouwen/bezitten) of gemeengoed (kopen) en te controleren of de contracten achter de gemeengoedcapaciteiten werkelijk open normen (HL7 FHIR, SNOMED CT) en afdwingbare uitstaprechten vereisen. Een goed antwoord onderscheidt de weinige werkelijk strategische capaciteiten van de vele die veilig gekocht kunnen worden, is eerlijk over waar de organisatie al vastzit op klinische data en verbindt zich aan open normen en uitstaprechten in de contracten die het meest tellen.

6. **Hoe zullen wij weten wanneer ons operationele model moet veranderen, en welke signalen zouden het ons vertellen — in plaats van te reorganiseren op mode of op de komst van een nieuwe leider?**
   Het onderwerp kadert het operationele model als product dat u op bewijs laat evolueren, niet als diagram ingelijst aan de muur, dus deze vraag vraagt het team vooraf te definiëren welk bewijs het hervormen ervan zou rechtvaardigen. Het doet ertoe in gezondheid en zorg omdat reorganisatie ontwrichtend en duur is — zij ontbindt hard verworven domein- en klinische-veiligheidskennis — maar de sector gevoelig is voor structurele onrust gedreven door beleidscycli en nieuwe benoemingen in plaats van door de vraag of het huidige model werkelijk in de weg zit. De spanning ligt tussen stabiliteit en aanpassing: verander het model te gemakkelijk en teams komen nooit tot rust of bouwen nooit veiligheidsexpertise op, verander het te zelden en verstarde structuren smoren de doorstroming lang nadat ze ophielden bij het werk te passen. Maak het concreet door een kleine set signalen te kiezen om te volgen — doorstroming van werk, tijd tot beslissing, herwerk en teamgezondheid — en af te spreken welke beweging erin een bewust herontwerp tegenover een kleinere aanpassing zou triggeren. Een eerlijk antwoord verbindt zich aan een paar vooruitlopende indicatoren, onderscheidt op bewijs gebaseerde verandering van reorganisatietheater en is duidelijk over wie verantwoordelijk is het model te inspecteren en te handelen wanneer de signalen zeggen dat het de levering belemmert.

## In de praktijk: een voorbeeld uit gezondheid en zorg

Een ICS dat vijf plaatsen bestrijkt, laat elk ziekenhuis zijn eigen afsprakenhulpmiddelen voor patiënten bouwen. Kosten dupliceren, ervaringen divergeren en geen enkele deelt data netjes. Het ICS herontwerpt zijn operationele model.

Het definieert drie uitkomsten (minder niet-verschenen afspraken, minder vermijdbare opnames, betere billijkheid van toegang) en de waardestromen erachter. Het zet een klein **platformteam** op dat vier dunste levensvatbare capaciteiten bezit: een gedeelde identiteit/inlog, een op [FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources) gebaseerde interoperabiliteitslaag, gemeenschappelijke hosting met basislijnen voor beveiliging en klinische veiligheid en een designsysteem. Elke plaats houdt een **stream-aligned team** maar bouwt nu op het platform in plaats van van nul.

Financiering verschuift van jaarlijkse projectbiedingen naar vaste productbudgetten voor elke stroom, vrijgegeven via poorten van discovery/alpha/beta. Een gepubliceerde RAPID-kaart maakt duidelijk dat plaatsteams hun eigen servicedesign *beslissen* binnen de vangrails van platform en klinische veiligheid, terwijl het digitale bestuur van het ICS platformnormen *beslist*. Binnen een jaar delen drie plaatsen één boekingscapaciteit, is de basislijn voor ontwerp en veiligheid consistent en worden nieuwe functies die ooit een projectcyclus kostten in weken opgeleverd — omdat het platform het ongedifferentieerde zware werk absorbeerde.

## Sectorperspectieven

Een operationeel model wordt gedimensioneerd naar de organisatie die het dient; dezelfde lagen — waardestromen, capaciteiten, teams, bestuur, platform, leveranciers — worden heel anders getekend door een startup, een grote onderneming en een overheidsorgaan.

### Startup

In een klein bedrijf voor digitale gezondheid is het operationele model grotendeels impliciet en dat is prima: een of twee stream-aligned teams, een oprichter die de meeste beslisrechten houdt en geen platformteam omdat er nog niets is om te platformen. De discipline is de weinige echte beslissingen vroeg expliciet te maken — bouwen versus kopen voor de klinische dataopslag, aan welke open normen men zich verbindt — zodat de sluipweg van vandaag niet de lock-in van morgen wordt. Run en change zitten in dezelfde handen, dus het risico is dat de lichten aanhouden voor vroege klanten de roadmap uithongert; een eenvoudige, eerlijke verdeling van engineeringtijd is het lichtgewicht equivalent van een beschermd runbudget. Leveranciers worden gekozen op snelheid, maar een startup moet toch lock-in op klinische kerndata weigeren, omdat haar toekomstige NHS-kopers uitstaprechten zullen eisen.

### Klein bedrijf

Een gevestigde kleine aanbieder — een huisartsenpraktijk, een gemeenschapsapotheek, een verzorgingshuis of thuiszorgaanbieder, een kliniek met één vestiging of een kleine leverancier van gezondheidstechnologie voorbij het stadium zonder omzet — heeft echte patiënten en lopende operaties maar geen platformteam, geen toegewijde digitale of IT-capaciteit en weinig speling in geld of personeel. Het operationele model is hier grotendeels een set aan elkaar genaaide gekochte capaciteiten, dus de bepalende keuzes zijn die van leveranciers: sta erop dat de klinische systemen die u inkoopt open normen en uitstaprechten hebben, omdat u dezelfde plichten voor interoperabiliteit en klinische veiligheid draagt als een groot ziekenhuis zonder zijn inkoopkracht of eigen expertise. Run en change vallen samen op dezelfde handvol mensen die ook zorg leveren, dus de eerlijke discipline is wat tijd te beschermen om systemen veilig en actueel te houden in plaats van alleen te blussen. Beslisrechten zijn eenvoudig — gewoonlijk beslist een maat of eigenaar-manager — maar dat maakt het gemakkelijk digitale beslissingen onbepaald uit te stellen, dus de waarde is de weinige die ertoe doen te benoemen (welk klinisch dossier, welk gedeeld regionaal platform) en ze bewust te nemen. Waar een ICS of nationaal orgaan een gedeelde identiteit, interoperabiliteit of designplatform biedt, is de beste zet van het kleine bedrijf vaak erop te bouwen in plaats van opnieuw uit te vinden, de capaciteit lenend die het zelf niet kan bemensen.

### Grote onderneming

Een NHS-ziekenhuis of ICS is waar de vorm van platform plus federatie haar brood verdient: soevereine organisaties die voor een patiënt als één dienst moeten voelen. De harde problemen zijn evenzeer politiek als technisch — geld verplaatsen van projectbiedingen met beperkte looptijd naar vaste productbudgetten, en een RACI/RAPID-kaart publiceren zodat plaatsteams ophouden beslissingen te escaleren die zij bezitten. Een grote onderneming voor gezondheidstechnologie of farmacie heeft de platformengineeringspier maar riskeert een groots intern platform te veel te bouwen dat zijn eigen knelpunt wordt; de toets van het dunste levensvatbare platform — twee of meer teams hebben aantoonbaar hetzelfde nodig — is de rem. Op deze schaal zijn beslisrechten en geldstroom het operationele model; de technologie is gewoonlijk niet de beperking.

### Overheid

Een nationaal of lokaal publiek orgaan ontwerpt operationele modellen die andere organisaties moeten bewonen, dus zijn keuzes over normen en platforms zijn feitelijk nationale infrastructuur. NHS England of DHSC die een gedeelde identiteitslaag, een interoperabiliteitsruggengraat of een designsysteem leveren is het platformpatroon toegepast op bevolkingsschaal, en zijn spend controls en gefaseerde borgingspoorten zijn hoe publiek geld ter verantwoording wordt geroepen. Het faalpatroon is een gecentraliseerd model dat een ver knelpunt wordt en voor elke lokale context één oplossing verplicht; het tegengif is de werkelijk gemeenschappelijke capaciteiten te platformen en de rest te federeren naar ziekenhuizen en lokale overheden. Verantwoording aan het Parlement betekent ook dat bouwen/kopen en leveranciersbeheer zaken van publiek record zijn, dus open normen en uitstaprechten zijn niet louter verstandig maar verwacht.

## Veelvoorkomende faalpatronen

- **Het organigram automatiseren.** Teams ontwerpen rond bestaande afdelingen in plaats van waardestromen, zodat het TOM silo’s verankert. Tegengif: ontwerp van uitkomsten en waardestromen naar beneden.
- **Het platform dat een knelpunt wordt.** Een te ruim afgebakend centraal platformteam waarachter elk verzoek moet wachten. Tegengif: dunste levensvatbare platform, behandeld als product met SLA’s.
- **Projectfinanciering voor productwerk.** Geld dat verloopt dwingt tot onrust van ontbinden en herbouwen. Tegengif: blijvende productfinanciering met gefaseerde poorten.
- **Run uitgehongerd om change te voeden.** Operatie van live diensten ondergefinancierd totdat klinische systemen vervallen. Tegengif: financier run en change expliciet en bescherm het runbudget.
- **Beslissingen zonder eigenaar.** Niemand weet wie beslist, dus alles escaleert. Tegengif: een gepubliceerde RACI/RAPID.
- **Lock-in bij verstek.** Klinische kerndata gevangen in een bedrijfseigen leveranciersysteem zonder uitgang. Tegengif: open normen en uitstaprechten in elk strategisch contract.

## Volwassenheidsmodel

| Dimensie | Initiëren | Ontwikkelen | Standaardiseren | Besturen | Orkestreren |
|---|---|---|---|---|---|
| Structuur | Gedreven door organigram, gesiloeerd | Enige afstemming op waardestromen | Platform-plus-federatie ingesteld | Grenzen bestuurd en getoetst tegen doorstromingsmaten | Voortdurend hervormd rond uitkomsten |
| Financiering | Jaarlijkse projecten | Gemengd project/product | Productfinanciering met gefaseerde poorten | Uitgaven en levering gevolgd tegen KPI’s, poorten geborgd | Op uitkomsten gebaseerde, op bewijs vrijgegeven financiering |
| Beslisrechten | Dubbelzinnig, alles escaleert | Deels gedocumenteerd | RACI/RAPID gepubliceerd en gebruikt | Beslisvertraging en escalaties gemeten en beheerd | Gedevolueerd binnen duidelijke vangrails, zelden geëscaleerd |
| Platform | Geen; elk team bouwt opnieuw | Ad-hocgedeelde onderdelen | Dunste levensvatbare platform, vraaggestuurd | SLA’s, adoptie en betrouwbaarheid van het platform gevolgd tegen doelen | Platform als volwassen intern product |
| Leveranciers | Lock-in, tactische aankopen | Enige normen vereist | Bouwen/kopen bewust beslist | Leveranciersprestatie en naleving van normen geborgd | Open normen, uitstaprechten, gezonde markt |

## Checklist

- [ ] Het operationele model is ontworpen vanuit uitkomsten en waardestromen, niet de bestaande hiërarchie.
- [ ] Gedeelde capaciteiten worden geleverd als dunste levensvatbare platform, waarop stroomteams bouwen.
- [ ] Productteams zijn blijvend gefinancierd en afgestemd op waardestromen.
- [ ] Uitgavenbeheersing is gefaseerd (poorten voor discovery/alpha/beta/live) en evenredig aan risico en waarde.
- [ ] Beslisrechten zijn gedocumenteerd (RACI of RAPID) en gepubliceerd.
- [ ] Run en change worden expliciet gefinancierd, met beschermd runbudget.
- [ ] Teamtypen (stream-aligned, platform, enabling, complicated-subsystem) worden begrepen en gebruikt.
- [ ] Bouwen/kopen is per capaciteit een bewuste keuze; klinische kerndata vermijdt lock-in.
- [ ] Contracten vereisen open normen (bijv. HL7 FHIR, [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)) en uitstaprechten.

## Belangrijkste bronnen

- Matthew Skelton & Manuel Pais — *Team Topologies* (stream-aligned, platform, enabling, complicated-subsystem teams; thinnest viable platform).
- GOV.UK Service Manual — *spend controls* en gefaseerde borging (discovery/alpha/beta/live); Government Digital Service.
- NHS digital service manual — *NHS service standard* (service-manual.nhs.uk).
- AXELOS — *Management of Portfolios (MoP)* en *Managing Successful Programmes (MSP)* voor bestuur van portfolio en programma.
- Bain & Company — het kader voor beslisrechten *RAPID*; en het toewijzingsmodel voor verantwoordelijkheid RACI.
- John Doerr — *Measure What Matters* (OKR’s) voor het definiëren van uitkomsten.

## Referenties

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
