# Emne 2.2 — Prioritering af arbejde

**I én sætning:** Prioritering er den bevidste, gennemsigtige rangordning af det arbejde, der overlevede triage – hvor værdi, hastegrad, risiko og indsats afvejes mod begrænset kapacitet – så organisationen til enhver tid gør de mest værdifulde ting, den kan, og kan forklare hvorfor.

## Hvorfor det er vigtigt i sundhed og pleje

Prioritering er der, hvor strategi bliver virkelig. En organisations sande strategi er ikke dens offentliggjorte plan, men den rækkefølge, hvori den faktisk gør tingene – og i sundhed og pleje bærer den rækkefølge konsekvenser for sikkerhed, lighed og offentlige midler. Nedprioritér interoperabilitetsarbejdet, og en fælles omsorgsjournal går i stå; nedprioritér teknisk gæld, og et system svigter klokken to om natten på en helligdag; nedprioritér tilgængelighedsrettelsen, og du udelukker dem, der mest har brug for tjenesten.

Presset er strukturelt: efterspørgslen overstiger altid kapaciteten, og meget af den efterspørgsel er legitim. Ledere har derfor brug for metoder, der gør afvejninger eksplicitte og forsvarlige, ikke en proces, hvor den sidste e-mail vinder, eller hvert projekt er "topprioritet". Gennemsigtig prioritering ændrer også det politiske vejr: når interessenter kan se kriterierne og rangordenen, skifter forhandlingen fra lobbyisme til en fælles samtale om værdi og forsinkelsesomkostning. Dette emne følger efter indtag (emne 2.0) og triage (emne 2.1); det forudsætter, at du allerede har en synlig, vurderet backlog at rangordne, og det fødes ind i leveranceforløbet (emne 3.4–3.8) og porteføljestyring (emne 5.3 — Virksomhedsdækkende projektporteføljestyring (EPPM)).

## Kernebegreber

**[Prioritering](https://en.wikipedia.org/wiki/Prioritization)** rangordner en backlog eller portefølje; den er forskellig fra triage (som vurderede og routede hvert emne isoleret). Prioritering sammenligner emner *med hinanden* for begrænset kapacitet og gentager den sammenligning, efterhånden som virkeligheden ændrer sig.

**[Forsinkelsesomkostning (Cost of Delay)](https://en.wikipedia.org/wiki/Cost_of_delay)** er den økonomiske linse under de bedste metoder: hvad koster det – i værdi, skade eller penge – for hver uge, dette *ikke* gøres? At gøre forsinkelsesomkostning eksplicit omformulerer prioritering fra "hvad er vigtigst?" (alt) til "hvad er dyrest at udskyde?" (et spørgsmål, der kan rangordnes).

**Almindelige rammeværker**, hver med sin pasform:

- **WSJF (Weighted Shortest Job First)**, fra [Scaled Agile Framework](https://en.wikipedia.org/wiki/Scaled_agile_framework) (SAFe): scor forsinkelsesomkostning (bruger-/forretningsværdi + tidskritikalitet + risikoreduktion/muliggørelse af muligheder) og divider med jobbets størrelse. Højeste WSJF gøres først. Det favoriserer naturligt småt, højværdi-, tidskritisk arbejde og ignorerer tabte omkostninger.
- **RICE** (Reach × Impact × Confidence ÷ Effort, populariseret af Intercom): en produktledelsesscore, der tempererer begejstring med en sikkerhedsfaktor (Confidence).
- **[MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method)** (Must / Should / Could / Won’t-this-time), fra [DSDM](https://en.wikipedia.org/wiki/Dynamic_systems_development_method): en kategorisering, fremragende til at afgrænse en udgivelse eller et program med fast dato, svagere som finkornet rangordning.
- **Værdi versus indsats** (en 2×2): det hurtige visuelle overblik til at spotte hurtige gevinster og pengeslugere; groft, men hurtigt.
- **[Kano-modellen](https://en.wikipedia.org/wiki/Kano_model)**: klassificerer funktioner som basale (skal-have), præstationsfunktioner eller begejstringsfunktioner – nyttig til at afbalancere grundkrav mod differentiatorer.

Intet rammeværk er "korrekt"; hver koder en forskellig definition af værdi, og selve handlingen at score sammen er ofte mere værdifuld end tallet.

**Drift versus forandring** er balancen på porteføljeniveau: "hold-lyset-tændt"-driftsarbejde (drift) versus ny kapabilitet (forandring). Prioritering må spænde over begge, ellers taber det usynlige driftsarbejde – herunder **[teknisk gæld](https://en.wikipedia.org/wiki/Technical_debt)** og **sikkerheds-/it-sikkerhedsafhjælpning** – enhver konkurrence mod blændende nye funktioner, indtil det svigter katastrofalt.

**Kapacitetsbaseret versus datobaseret** prioritering: kapacitetsbaseret rangordning fylder et kendt, begrænset gennemløb (et bæredygtigt tempo); datobaseret rangordning arbejder baglæns fra en ufravigelig frist (en regulatorisk idriftsættelse) og bruger MoSCoW til at justere omfanget. De fleste porteføljer har brug for begge, anvendt på forskellige emner.

## Bedste praksis

1. **Vælg ét primært rammeværk, og anvend det konsekvent.** Vælg den metode, der passer til dit arbejde – WSJF til en blandet ændringsportefølje med reel tidskritikalitet, RICE til produktfunktions-backlogs, MoSCoW til udgivelser med fast dato – og brug den konsekvent, så scorer er sammenlignelige. At skifte rammeværk pr. emne gør backloggen usammenlignelig og inviterer til manipulation.

2. **Gør forsinkelsesomkostning eksplicit, især for sikkerheds- og lovbestemt arbejde.** Spørg for hvert emne: "hvad koster en måneds forsinkelse?" For en sikkerhedsrettelse eller en regulatorisk frist er svaret ofte alvorligt og ikke-lineært, hvilket netop er grunden til, at disse skal scores, ikke antages. Forsinkelsesomkostning er den fælles valuta, der lader en overholdelsesfrist og en brugeroplevelsesforbedring sammenlignes ærligt.

3. **Forbehold eksplicit kapacitet til drift, teknisk gæld og sikkerhed.** Lad ikke hold-lyset-tændt-arbejde, teknisk gæld og sikkerheds-/it-sikkerhedsafhjælpning konkurrere funktion for funktion med ny kapabilitet – de taber, indtil noget går i stykker. Indhegn en stående procentdel af kapaciteten (en almindelig tommelfingerregel er en meningsfuld, beskyttet andel) til dette arbejde, og behandl den som ufravigelig.

4. **Prioritér ud fra resultater og værdi, ikke anmoderens rang.** Scor mod organisationens erklærede resultater og prioriteter (helst dens [OKR’er](https://en.wikipedia.org/wiki/Objectives_and_key_results) — se emne 10.0) frem for hvem der spurgte. Når en senior interessents emne scorer lavt, er det systemet, der virker; rammeværket giver dig et fair, upersonligt grundlag for at føre den samtale.

5. **Afstem metoden efter begrænsningen: kapacitet eller dato.** For et bæredygtigt flow af forandring rangordn efter værdi og træk arbejde til en kendt kapacitet. For en ufravigelig dato arbejd baglæns og brug MoSCoW til at beskytte "Must" og justere "Could". At forveksle de to – at forsøge at presse fast omfang ind i fast tid og fast kapacitet – er den klassiske vej til et mislykket program.

6. **Prioritér gennemsigtigt, og forhandl åbent.** Offentliggør den rangordnede backlog og scoringen bag den. Gennemsigtighed forvandler prioritering fra en række private aftaler til en fælles forhandling, hvor afvejninger er synlige: for at flytte dit emne op må noget andet flytte ned, og alle kan se prisen. Det er det mest kraftfulde afpolitiserende træk, en leveranceleder har til rådighed.

7. **Genprioritér i en regelmæssig rytme – og kun da.** Fastsæt en rytme (for eksempel en månedlig eller kvartalsvis porteføljegennemgang plus lettere backlog-forfining imellem), hvor prioriteter genbesøges mod ny evidens. Mellem gennemgangene hold linjen, så teams får stabile landingsbaner. Konstant genprioritering er lige så skadelig som aldrig at genprioritere – den ødelægger flow og afslutter intet.

8. **Vær på vagt over for manipulation og falsk præcision.** Relative scorer (Fibonacci, t-shirt-størrelser) er estimater, ikke sandheder; en WSJF på 8,3 er ikke meningsfuldt bedre end 7,9. Brug tallene til at *informere* en rangordnet samtale, hold øje med oppustede input, og lad erfaret skøn tilsidesætte en åbenlyst perverteret score – mens du registrerer hvorfor.

## Spørgsmål at drøfte med dit team

1. **Hvad er vores ærlige svar på "hvad koster en måneds forsinkelse egentlig?" for det arbejde, vi bliver ved med at udskyde?**
   Forsinkelsesomkostning er den fælles valuta, der lader en overholdelsesfrist og en brugeroplevelsesjustering sammenlignes ærligt, men de fleste organisationer gør den aldrig eksplicit og falder derfor tilbage på "alt er vigtigt" – hvilket ikke er en påstand, der kan rangordnes. Det er akut vigtigt i sundhed og pleje, fordi omkostningen ved at udskyde noget arbejde er alvorlig og ikke-lineær: en udskudt sikkerhedsrettelse eller interoperabilitetsafhængighed kan ligge harmløst i måneder og så svigte katastrofalt, mens en udskudt bekvemmelighedsfunktion koster næsten ingenting. Teamet bør debattere, om de faktisk kan formulere forsinkelsesomkostningen for deres mest omstridte emner, og konfrontere de ubehagelige tilfælde, hvor det ærlige svar er "meget lidt" for et populært projekt og "potentielt en alvorlig hændelse" for et usynligt. Konkrete vinkler: tag tre emner, der i øjeblikket sidder fast midt i backloggen, og tving en sætning om forsinkelsesomkostning frem for hvert; spørg, om teknisk gæld og sikkerhedsafhjælpning nogensinde er blevet scoret på forsinkelsesomkostning overhovedet, eller blot taber hver konkurrence ved aldrig at komme ind i den. Et godt svar skelner mellem emner, hvis forsinkelsesomkostning er nogenlunde lineær, og dem, hvor den springer ved en frist eller et svigtpunkt, og bruger den form til at begrunde rækkefølgen. Den uærlige version gemmer sig bag "det hele er en prioritet", hvilket netop er fraværet af prioritering, dette spørgsmål er ment til at afsløre.

2. **Hvor meget kapacitet er vi villige til at indhegne til drift, teknisk gæld og sikkerhed – og vil vi forsvare den, når et blændende nyt tilbud ankommer?**
   Dette er den afvejning, der mest pålideligt går galt: hold-lyset-tændt-arbejde, teknisk gæld og sikkerheds- eller it-sikkerhedsafhjælpning er usynlige og taber funktion for funktion mod ny kapabilitet, indtil noget går i stykker klokken to om natten på en helligdag. Debatten handler ikke om, hvorvidt noget kapacitet skal beskyttes – næsten alle er enige i princippet – men om den specifikke procentdel og, langt sværere, om ledelsen faktisk vil holde den linje, første gang en senior sponsors spændende projekt vil plyndre indhegningen. I sundhed og pleje omfatter indsatsen patientsikkerhed og pålideligheden af de systemer, klinikere er afhængige af, så det at behandle andelen som ufravigelig er en sikkerhedsholdning, ikke blot god hygiejne. Konkrete vinkler: se tilbage på den seneste større hændelse eller næsten-hændelse og spørg, om den kan spores til udskudt drifts- eller gældsarbejde, der aldrig vandt en prioritetskonkurrence; nævn den person med beføjelse til at afvise en plyndring af den beskyttede kapacitet og test, om vedkommende virkelig ville. Et stærkt svar forpligter sig til en specifik, beskyttet andel og beskriver, afgørende, den styring, der holder den beskyttet under pres, frem for at stole på gode intentioner. Den ærlige version indrømmer, at indhegningen kun er reel, hvis den overlever mødet med den mest magtfulde interessent i rummet.

3. **Når en senior interessents emne scorer lavt, har vi så gennemsigtigheden og modet til at lade rangordenen stå?**
   At prioritere efter resultater frem for anmoderens rang lyder oplagt, men HiPPO-effekten – den bedst betalte persons mening, der i det stille tilsidesætter scoringen – er standardfejlen i hierarkiske NHS- og myndighedssammenhænge, og den er ætsende netop fordi den er stille. Spændingen er, at et lavtscorende senior-emne ofte er systemet, der virker korrekt, men uden en gennemsigtig, offentliggjort rangorden og dens scoringsbegrundelse har lederen af leverancen intet upersonligt grundlag for at føre den samtale og vil som regel bøje sig. Teamet bør debattere, om deres backlog og scorer reelt er synlige for de anmodende organisationer, fordi åben afvejningsforhandling – "for at flytte jeres op, hvilket højerescorende emne skal flytte ned, og er I trygge ved den forsinkelses omkostning?" – er det mest kraftfulde afpolitiserende træk, der findes, og det virker kun åbent. Konkrete vinkler: husk sidste gang en senior anmodning sprang køen over og spørg, hvad der ville være sket, hvis rangordenen havde været offentlig; overvej at beholde scoringsbegrundelsen som en styringsregistrering, I kunne vise en bestyrelse, et ICB eller revisorer. Et godt svar parrer gennemsigtighed (offentliggør rækkefølgen og scorerne) med et indøvet, upersonligt manuskript til tilsidesættelsessamtalen og identificerer, hvem der har stillingen til at holde den. Det undvigende svar behandler dette som hypotetisk; i virkeligheden sker det de fleste uger, og planen skal overleve det.

4. **Har vi faktisk forpligtet os til ét prioriteringsrammeværk, eller scorer vi i det stille hvert emne efter den metode, der smigrer det mest?**
   At vælge ét primært rammeværk og anvende det konsekvent er det, der gør en backlog sammenlignelig; i det øjeblik WSJF bruges til ét tilbud, en værdi-versus-indsats-fornemmelse til et andet og "direktøren vil virkelig gerne have det" til et tredje, holder rækkefølgen op med at betyde noget, og manipulation sniger sig ind. Spændingen er, at intet enkelt rammeværk passer til alle slags arbejde – WSJF passer til en blandet ændringsportefølje, RICE til en produktfunktionsbacklog, MoSCoW til en udgivelse med fast dato – så den ærlige debat er, hvilken der er jeres *primære* metode, og hvor en anden legitimt tillades frem for at være en bekvem nødudgang. I sundhed og pleje er dette vigtigt, fordi en overholdelsesfrist, en klinikeranmodet funktion og en databaseopgradering skal vejes på den samme skala, og kun en konsekvent metode lader et lovbestemt emne og et bekvemmelighedsemne rangordnes mod hinanden uden særbehandling. Konkrete vinkler: revidér de seneste tolv prioriteringsbeslutninger og tjek, om den samme metode reelt blev anvendt, eller om metoden skiftede for at begrunde et forudbestemt svar; hold øje med "rammeværksteater", hvor omstændelig scoring producerer et tal, ingen derefter handler på. Et godt svar nævner det primære rammeværk, forklarer de snævre, principielle tilfælde, hvor et andet bruges, og behandler scoren som noget, der informerer en rangordnet samtale, frem for en sandhed. Det svage svar lader hver anmoder medbringe sin egen matematik, hvilket ikke kan skelnes fra at have ingen metode overhovedet.

5. **Er vi ærlige om, hvilket arbejde der er kapacitetsbundet, og hvilket der er datobundet – eller forsøger vi at fastlåse omfang, dato og kapacitet på én gang?**
   Prioritering må afstemmes efter begrænsningen: et bæredygtigt flow af forandring rangordnes efter værdi og trækkes til en kendt kapacitet, mens en ufravigelig regulatorisk idriftsættelse arbejdes baglæns fra datoen, med MoSCoW, der beskytter "Must" og justerer "Could". Den klassiske vej til et mislykket program er at forveksle de to – at låse omfang, dato og kapacitet samtidig – og det er især forførende i sundhed og pleje, hvor en lovbestemt frist føles ufravigelig, og interessenter antager, at det fulde omfang er lige så ufravigeligt. Teamet bør debattere, emne for emne, om hvert større stykke arbejde reelt er kapacitetsbundet eller datobundet, fordi det at behandle et datodrevet program, som om det havde elastisk tid, eller et løbende driftsflow, som om det havde en hård frist, fejlprioriterer alt nedstrøms. Konkrete vinkler: tag en ufravigelig idriftsættelse og spørg, hvilke krav der reelt er "Must" for det juridiske minimum versus "Should" eller "Could", der er blevet smuglet ind i det obligatoriske sæt; led efter det program, hvor alle tre begrænsninger stille er fastlåst, og nævn, hvad der faktisk vil give efter, når virkeligheden bider. Et godt svar klassificerer arbejde efter dets bindende begrænsning og anvender den tilsvarende metode bevidst og holder kapacitetsbaseret flow og datobaseret leverance som separate discipliner. Det urealistiske svar lover fuldt omfang, på den faste dato, inden for fast kapacitet – og håber.

6. **Hvad er vores genprioriteringsrytme, og har vi disciplinen til at holde rækkefølgen stabil mellem gennemgangene?**
   Prioriteter skal genbesøges mod ny evidens, men i en rytme – en månedlig eller kvartalsvis porteføljegennemgang med lettere forfining imellem – fordi konstant genprioritering er lige så skadelig som aldrig at genprioritere: den ødelægger flow og afslutter intet. Spændingen er reel: virkeligheden ændrer sig faktisk, et nyt sikkerhedssignal eller et finansieringsskifte kan berettige omrangordning, men hver omrokering midt i flyvningen koster teams deres landingsbane og efterlader halvbygget arbejde strandet. I sundhed og pleje, hvor leveranceteams ofte er presset, og afhængigheder spænder over flere organisationer, er rystelser dyre og moralnedbrydende, så den stabile landingsbane mellem gennemgange er lige så meget et produktivitets- og fastholdelsesspørgsmål som et leveranceproblem. Konkrete vinkler: tjek, hvor mange gange i det seneste kvartal toppen af backloggen ændrede sig uden for en planlagt gennemgang, og hvad der blev leveret som følge heraf; aftal på forhånd de snævre kriterier – en reel nødsituation, ikke en højrøstet interessent – der berettiger at bryde rytmen. Et godt svar fastsætter en eksplicit rytme, forsvarer landingsbanen mellem gennemgange og kan pege på arbejde, der faktisk blev færdigt, fordi rækkefølgen holdt. Det fejlende svar genprioriterer, hver gang den seneste e-mail lander, og forveksler bevægelse med lydhørhed, mens intet krydser målstregen.

## I praksis: et eksempel fra sundhed og pleje

Et ICB’s digitale porteføljeteam stod over for tolv konkurrerende tilbud og kapacitet til måske fem. Historisk havde rækkefølgen fulgt organisatorisk anciennitet, og teknisk gæld indgik slet ikke. De tog WSJF i brug til ændringsarbejde og indhegnede en fast andel af kapaciteten til drift, teknisk gæld og sikkerhed.

Hvert tilbud blev scoret sammen – forretningsværdi, tidskritikalitet, risikoreduktion/muliggørelse af muligheder og jobstørrelse – i én session med stemmer fra leverance, klinik og økonomi. En lovbestemt datafrist scorede meget højt på tidskritikalitet og steg, da den var beskeden i størrelse, til toppen på WSJF. En stor, populær analyseplatform scorede godt på værdi, men dens størrelse skubbede den ned i rækkefølgen – et resultat, der ville have været utænkeligt under anciennitetsbaseret rangordning, og som rammeværket gjorde forsvarligt. En længe udskudt databaseopgradering, tidligere usynlig, blev finansieret fra den indhegnede driftsandel, før den kunne svigte.

Afgørende blev den rangordnede backlog og dens scorer delt med alle de anmodende organisationer. Da ét hospital pressede på for, at dets tilbud skulle springe køen over, var samtalen ikke "hvem kender du?" men "hvilke af disse højerescorende emner skal flytte ned, og er I trygge ved den forsinkelses omkostning?" Forhandlingen foregik åbent, og ICB’et kunne over for sin bestyrelse dokumentere, at rækkefølgen afspejlede værdi og forsinkelsesomkostning, ikke politik.

## Sektorperspektiver

### Startup

En finansieringsbegrænset digital sundheds-startup prioriterer mod likviditet frem for alt, så dens rangordningsmetode bør være let og værdiledet – en værdi-versus-indsats-2×2 eller en enkel RICE-score er som regel nok, og omstændeligt WSJF-maskineri er overkill for en backlog på tredive emner. Den dominerende forsinkelsesomkostning er eksistentiel: at gå glip af den evidens, en NICE-evaluering eller en førende kunde har brug for, kan afslutte virksomheden, hvilket klart overrangerer en rart-at-have-funktion. Den sværeste disciplin er at forbeholde nogen kapacitet til teknisk gæld og sikkerhedsafhjælpning, når hver uge skriger på den næste indtægtsfunktion, men at springe det helt over er det, der får et ungt produkt til at sætte sig fast, netop som det skalerer. Genprioritering er hyppig og grundlæggerdrevet, så risikoen er rystelser – modgiften er at holde en stabil rækkefølge i mindst et kort sprint, så noget faktisk bliver leveret.

### Lille virksomhed

En etableret lille udbyder – en lægepraksis, et lokalt apotek, et plejehjem eller en enkelt klinik – prioriterer med næsten ingen slækkelse: de samme få mennesker driver tjenesten og ethvert ændringsarbejde, så rangordningen må være brutalt enkel, og en værdi-versus-indsats-2×2, som alle i teamet kan læse, er mere værd end en scoremodel, ingen har tid til at vedligeholde. Den dominerende forsinkelsesomkostning er som regel lovbestemt eller sikkerhedsdrevet – en frist for datasikkerhedstoolkit, en klinisk sikkerhedsrettelse, en påbudt systemopgradering fra en national leverandør – og disse skal stå øverst, fordi en lille udbyder bærer de samme pligter som et stort hospital uden ressourcerne til at absorbere et svigt. Valgfri forbedringer konkurrerer reelt med at drive tjenesten, så den ærlige disciplin er at beskytte en lille, regelmæssig tidsandel til det ufravigelige drifts- og afhjælpningsarbejde frem for at lade det tabe hver uge til patientvendte krav. Med ringe eller ingen dedikeret it-kapacitet bestemmes meget af "hvordan" af leverandører og rammeaftaler, så prioritering handler ofte om at sekventere leverandørdrevne ændringer og de få ting, praksissen selv kan kontrollere, og om at holde en stabil rækkefølge længe nok til, at noget bliver færdigt mellem én travl uge og den næste.

### Stor virksomhed

Et NHS-hospital eller ICS driver en blandet ændringsportefølje med reel tidskritikalitet og tunge driftsforpligtelser, hvilket er præcis den form, WSJF og en indhegnet drifts-/teknisk gæld-/sikkerhedsandel er designet til. Politikken er den reelle udfordring: flere sponsorerende organisationer, HiPPO-pres og arvede forventninger om, at anciennitet fastsætter rækkefølgen, så gennemsigtighed i den rangordnede backlog og dens scorer er virksomhedens vigtigste afpolitiserende redskab. Prioritering spænder her over et porteføljekontor og må forene kapacitetsbaseret flow for løbende forandring med datobaserede programmer, der arbejder baglæns fra ufravigelige regulatoriske idriftsættelser, med omfang justeret via MoSCoW. Fordi et hospital skal dokumentere value for money over for sin bestyrelse, et ICB og revisorer, bevares scoringsbegrundelsen som en styringsregistrering og kasseres ikke, når beslutningen er truffet.

### Myndighed

Hos NHS England, DHSC eller en delegeret regering er prioritering porteføljestyring på nationalt niveau, formaliseret gennem Management of Portfolios (MoP) og Treasurys fem-case-model, hvor forsinkelsesomkostning måles i befolkningssundhed, lovbestemt overholdelse og milliarder af pund. Meget af porteføljen er ikke-diskretionær – påbudte indberetninger, retlige frister, ministerielle forpligtelser – så metoden må rangordne *hvordan* og *hvornår* for forpligtet arbejde frem for hvorvidt det skal gøres, og programmer med ufravigelig dato dominerer. Risikoappetitten er lav, og granskningen er kontradiktorisk: National Audit Office og Public Accounts Committee vil teste, om rækkefølgen afspejlede værdi og forsinkelsesomkostning eller blot politisk bekvemmelighed, så et eksplicit, offentliggjort prioriteringsgrundlag er lige så meget et forsvar som et ledelsesredskab. Lighed er en lovbestemt dimension af værdi, så en scoremodel i en myndighed bør vægte påvirkningen på de mindst betjente befolkningsgrupper, ikke blot den samlede gevinst, ellers vil den systematisk favorisere de allerede godt betjente.

## Typiske fejlmønstre

- **Alt er første prioritet.** Der findes ingen reel rangordning, så den højeste stemme eller den nærmeste frist styrer. *Løsning:* gennemtving en streng rang; uafgjorte er ikke tilladt i toppen.
- **Drift og teknisk gæld taber altid.** Usynligt drifts- og afhjælpningsarbejde sultes, til det svigter. *Løsning:* indhegnet, beskyttet kapacitet.
- **HiPPO-tilsidesættelse.** Den bedst betalte persons mening tilsidesætter hver gang scoringen i det stille. *Løsning:* gennemsigtige scorer og åben afvejningsforhandling.
- **Rammeværksteater.** Omstændelig scoring producerer et tal, ingen handler på. *Løsning:* lad scoren informere en reel, handlet-på rangordnet rækkefølge.
- **Fast omfang + fast dato + fast kapacitet.** Alle tre begrænsninger låst, hvilket garanterer fiasko. *Løsning:* justér omfang via MoSCoW, eller kapacitet, eller dato.
- **Rystelser.** Prioriteter ændres ugentligt; intet bliver færdigt. *Løsning:* en fast genprioriteringsrytme og stabile landingsbaner imellem.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| **Metode og grundlag** | Ingen metode; rækkefølge efter anciennitet eller frist | Et rammeværk brugt inkonsekvent eller kun til noget arbejde | Ét primært rammeværk anvendt konsekvent; forsinkelsesomkostning overvejet | Scoringsinput styres og kalibreres; prioriteringsbeslutninger måles mod erklærede resultater | Rammeværk afstemt efter resultater/OKR’er; kapacitets- og datobaserede metoder bruges bevidst |
| **Balance mellem drift/forandring og teknisk gæld** | Drift og teknisk gæld usynlige; kun nyt arbejde finansieres | Nogen bevidsthed om drift/gæld, men ingen beskyttet kapacitet | Indhegnet kapacitet til drift, teknisk gæld og sikkerhed | Beskyttet andel følges som metrik; drift/gæld og sikkerhedsafhjælpning kvalitetssikres mod mål | Balancen mellem drift og forandring styres aktivt og gennemgås mod værdi |
| **Gennemsigtighed og rytme** | Prioriteter uigennemsigtige; ændres reaktivt og konstant | Backlog delvist synlig; uregelmæssige gennemgange | Rangordnet backlog offentliggjort; fast genprioriteringsrytme | Rytmeoverholdelse og genprioriteringsomsætning følges; scoringsbegrundelse bevares som styret registrering for bestyrelser og revisorer | Åben afvejningsforhandling er normen; rytme stabil; scorer sanity-checket mod resultater |

## Tjekliste

- [ ] Ét primært prioriteringsrammeværk er valgt og anvendes konsekvent.
- [ ] Forsinkelsesomkostning er gjort eksplicit, især for sikkerheds- og lovbestemt arbejde.
- [ ] Kapacitet er indhegnet til drift, teknisk gæld og sikkerheds-/it-sikkerhedsarbejde.
- [ ] Emner scores mod resultater/OKR’er, ikke anmoderens anciennitet.
- [ ] Kapacitetsbaserede og datobaserede metoder bruges til de rette emner.
- [ ] Den rangordnede backlog og dens scoring er offentliggjort for interessenter.
- [ ] Afvejninger forhandles åbent: for at flytte ét op, flytter et andet ned.
- [ ] Genprioritering sker i en fast rytme, med stabile landingsbaner imellem.
- [ ] Scorer behandles som estimater; manipulation og falsk præcision overvåges.
- [ ] Den nuværende rækkefølge kan forklares og forsvares over for bestyrelsen.

## Centrale kilder

- Scaled Agile Framework (SAFe) — Weighted Shortest Job First (WSJF) og Cost of Delay.
- Reinertsen, D. — *The Principles of Product Development Flow* (forsinkelsesomkostning, køøkonomi).
- Intercom — RICE-scoringsmodellen (Reach, Impact, Confidence, Effort).
- DSDM / Agile Business Consortium — MoSCoW-prioritering.
- Kano, N. — Kano-modellen for kundetilfredshed.
- Cabinet Office / AXELOS — Management of Portfolios (MoP) — porteføljeprioritering og -balance.
- NHS Digital Service Standard & GOV.UK Service Manual — prioritering af de vigtigste brugerbehov; OKR’er (Doerr, *Measure What Matters*) til afstemning af resultater.

## Referencer

1. Prioritization — Wikipedia — https://en.wikipedia.org/wiki/Prioritization
2. Cost of delay — Wikipedia — https://en.wikipedia.org/wiki/Cost_of_delay
3. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
4. MoSCoW method — Wikipedia — https://en.wikipedia.org/wiki/MoSCoW_method
5. Dynamic systems development method — Wikipedia — https://en.wikipedia.org/wiki/Dynamic_systems_development_method
6. Kano model — Wikipedia — https://en.wikipedia.org/wiki/Kano_model
7. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
8. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
9. Weighted Shortest Job First (WSJF) and Cost of Delay — Scaled Agile Framework (SAFe) — https://framework.scaledagile.com/wsjf
10. Reinertsen, D. — *The Principles of Product Development Flow* — Celeritas Publishing — https://www.celeritas.com/
11. The RICE scoring model (Reach, Impact, Confidence, Effort) — Intercom — https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
12. MoSCoW prioritisation — DSDM / Agile Business Consortium — https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html
13. Management of Portfolios (MoP) — AXELOS / Cabinet Office — https://www.axelos.com/
14. Doerr, J. — *Measure What Matters* (OKRs) — Portfolio/Penguin — https://www.whatmatters.com/
15. The Green Book: appraisal and evaluation in central government (five-case model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government
