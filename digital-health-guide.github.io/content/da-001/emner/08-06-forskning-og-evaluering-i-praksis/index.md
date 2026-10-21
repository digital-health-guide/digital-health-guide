# Emne 8.6 — Forskning og evaluering i praksis

**I sundhed og pleje er en digital innovation kun så pålidelig som den evidens, der viser, at den faktisk virker i praksis — så I må designe den evidens ind fra start, med en stringens proportional med risikoen og de krav, I fremsætter.**

## Hvorfor det er vigtigt i sundhed og pleje

Hvert digitalt produkt, I udruller, afgiver et stiltiende løfte: dette vil hjælpe patienter, personale eller systemet uden at forårsage skade. I de fleste sektorer koster et ubeviset løfte en kunde eller et kvartals omsætning. I sundhed og pleje kan det koste liv, udvide ulighed eller udhule den offentlige tillid, hele systemet afhænger af. Entusiasme og en god demo er ikke evidens, og en plausibel mekanisme er ikke bevis for gavn.

Digital sundheds historie er fuld af værktøjer, der så overbevisende ud og blev adopteret i stor skala, før nogen havde vist, at de virkede — og nogle, der i det stille forårsagede skade, oversete diagnoser eller drev klinikere til omveje. Regulatorer, bestillere og klinikere har svaret ved at hæve barren: de forventer nu troværdig, proportional evidens før, under og efter udrulning. Hvis I ikke kan påvise, at jeres tjeneste leverer de resultater, I påstår, bør I forvente at blive udfordret, afskåret fra finansiering eller trukket tilbage — og med rette.

Evidens er også et lighedsspørgsmål og et sikkerhedsspørgsmål, ikke en bureaukratisk hindring. Et værktøj, der forbedrer gennemsnitlige resultater, kan stadig skade en undergruppe — de digitalt udelukkede, mennesker med begrænset engelsk eller en befolkningsgruppe, der er underrepræsenteret i jeres træningsdata. Kun bevidst evaluering afslører det. At generere god evidens er derfor en del af jeres omsorgspligt, jeres forvaltning af offentlige midler og jeres troværdighed over for de mennesker, I tjener (se emne 1.3 — Evidensbaserede beslutninger og emne 1.6 — Klinisk sikkerhed og risikostyring).

## Kernebegreber

Start med et skel, der styrer alt andet: forskellen mellem **forskning**, **tjenesteevaluering** og [klinisk audit](https://en.wikipedia.org/wiki/Clinical_audit). Forskning sigter mod at generere ny, generaliserbar viden — fund, der er tænkt som sande ud over jeres lokale setting. Tjenesteevaluering spørger, hvor godt *denne* tjeneste virker *her*, ved hjælp af de standarder, tjenesten selv har tilsluttet sig. Klinisk audit sammenligner nuværende praksis med en eksisterende, aftalt standard og lukker løkken med forandring. Skellet er ikke akademisk pedanteri: det afgør jeres styringsvej. Forskning, der involverer patienter, personale eller data fra National Health Service (NHS), kræver næsten altid formel etisk godkendelse; det meste tjenesteevaluering og audit gør ikke. At fejlklassificere forskning som evaluering for at undgå godkendelser er et alvorligt styringssvigt.

I England løber forskningsstyring gennem [Health Research Authority](https://en.wikipedia.org/wiki/Health_Research_Authority) (HRA), et selvstændigt organ under Department of Health and Social Care. HRA beskytter og fremmer deltageres interesser og koordinerer godkendelser, så en undersøgelse gennemgås én gang for hele landet. Etisk gennemgang udføres af en Research Ethics Committee (REC) — Storbritanniens ækvivalent til en [institutional review board](https://en.wikipedia.org/wiki/Institutional_review_board) — som bedømmer, om en undersøgelse er etisk, proportional og sikker for deltagere. Ansøgninger indsendes gennem Integrated Research Application System (IRAS), en enkelt online portal, der leder jeres projekt til de RECs, HRA Approval og andre tilladelser, det har brug for. HRA’s online beslutningsværktøjer hjælper jer med at afgøre, om jeres projekt overhovedet tæller som forskning.

Meget digital sundhedsevidens bygges nu af [data fra den virkelige verden](https://en.wikipedia.org/wiki/Real_world_data) (real-world data, RWD) — information indsamlet uden for kontrollerede forsøg, såsom elektroniske journaler, enhedslogs, registre og refusionsdata — analyseret for at producere [evidens fra den virkelige verden](https://en.wikipedia.org/wiki/Real_world_evidence) (real-world evidence, RWE) om, hvordan en intervention præsterer under almindelige forhold. RWE er stærk, fordi digitale værktøjer genererer rige brugsdata som biprodukt, og fordi den afspejler den rodede virkelighed, forsøg ofte udelukker. Den er også skrøbelig: observationsdata er fulde af confounding og bias, så en naiv før-og-efter-sammenligning kan forveksle en sæsontendens eller en samtidig ændring med jeres effekt.

Det er derfor, evalueringens *design* betyder noget. Det stærkeste design til kausale påstande er stadig det [randomiserede kontrollerede forsøg](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RCT), som reducerer bias ved at allokere deltagere tilfældigt. Digitale kontekster favoriserer ofte pragmatiske varianter — klyngerandomiserede forsøg og det [stepped-wedge-forsøg](https://en.wikipedia.org/wiki/Stepped-wedge_trial), hvor lokationer skifter fra kontrol til intervention i randomiserede bølger, hvilket passer til en indfaset udrulning, I alligevel ville foretage. Hvor randomisering er upraktisk, hjælper kvasi-eksperimentelle designs: [afbrudt tidsserie](https://en.wikipedia.org/wiki/Interrupted_time_series)-analyse (ITS) følger et resultat over mange punkter før og efter go-live for at opdage ændringer i niveau og tendens og er ofte det bedste gennemførlige design til en systemdækkende digital ændring. Simpel før-og-efter-sammenligning er den svageste og mest vildledende, fordi den ikke kan adskille jeres effekt fra alt andet, der ændrede sig.

To yderligere ankre former arbejdet. Evidensbarren for digital sundhed i England fastsættes af Evidence Standards Framework for Digital Health Technologies, udgivet af [National Institute for Health and Care Excellence](https://en.wikipedia.org/wiki/National_Institute_for_Health_and_Care_Excellence) (NICE): den graduerer værktøjer efter potentiel risiko og angiver den evidensstyrke, der forventes for hvert niveau. Og en vedvarende forvridning at værne mod er [publikationsbias](https://en.wikipedia.org/wiki/Publication_bias) — tendensen til at dele positive resultater og begrave negative, hvilket smigrer hele feltet og lader ineffektive værktøjer sprede sig.

## Bedste praksis

1. **Klassificér jeres projekt, før I designer det.** Brug HRA’s beslutningsværktøjer til at afgøre, om jeres arbejde er forskning, tjenesteevaluering eller audit, og registrér begrundelsen. Dette ene trin fastsætter jeres styringsvej, tidslinje og tilladelser. Tag fejl i den optimistiske retning, og I risikerer at køre ugodkendt forskning på patienter; tag fejl i den forsigtige retning, og I belaster en enkel evaluering med måneders unødvendig proces.

2. **Byg evaluering ind fra start, ikke som en tilbygning.** Beslut, hvad "virker" betyder, og hvordan I vil måle det, under afdækningen — før en linje produktionskode (se emne 3.4 — Afdækningsfaser). Indfang en baseline *før* go-live, fordi I aldrig kan rekonstruere den bagefter, og instrumentér produktet til at udsende de resultat- og brugsdata, jeres design har brug for. At eftermontere evaluering på en tjeneste i drift giver næsten altid svagere evidens til højere pris og ofte ingen brugbar baseline overhovedet.

3. **Afstem stringensen med risikoen og påstanden.** Et bookingværktøj, der omordner en venteliste, har brug for mindre evidensvægt end en algoritme, der triagerer brystsmerter. Brug NICE Evidence Standards Framework til at lokalisere jeres værktøjs risikoniveau, og fremsæt påstande, jeres evidens kan bære: hvis I har en afbrudt tidsserie, der viser reducerede rater af udeblevne aftaler, så sig det — antyd ikke en dødelighedsgevinst. Proportionalitet beskytter patienter mod underbegrundet risiko og beskytter jer mod at spilde kræfter på at overbevise om lavindsatsværktøjer.

4. **Vælg det stærkeste gennemførlige design, og nævn dets grænser.** Ræk efter randomisering, når I kan, og overvej et stepped-wedge-design, når en indfaset udrulning gør en samtidig kontrolgruppe umulig. Når randomisering reelt er umulig, foretræk afbrudt tidsserie frem for naiv før-og-efter, og præspecificér jeres analyse for at modstå fristelsen til at fiske efter et gunstigt resultat. Hvert design har svagheder; angiv jeres ligeud, så læsere kan veje evidensen ærligt.

5. **Brug data fra den virkelige verden bevidst, og behandl confounding som fjenden.** Digitale tjenester genererer rigelige RWD, men overflod er ikke gyldighed. Planlæg, hvilke data I vil bruge, deres kvalitet og fuldstændighed og de bias, de bærer, og inddrag en analytiker eller metodolog tidligt frem for at grave i logs bagefter. Præregistrér jeres resultater og analyse, hvor muligt, så dataene ikke kan torteres til at fortælle jer, hvad I håbede at høre.

6. **Samarbejd med mennesker, der genererer evidens for at leve.** Universiteter, [National Institute for Health and Care Research](https://en.wikipedia.org/wiki/National_Institute_for_Health_and_Care_Research) (NIHR) og jeres regionale Health Innovation Network — organerne tidligere kendt som Academic Health Science Networks (AHSN’er) — bringer metodologisk stringens, uafhængighed, finansieringsveje og troværdighed, I ikke kan fremstille internt. Uafhængig evaluering vejer langt tungere hos bestillere og klinikere end en leverandørs egen analyse. Inddrag dem tidligt, for de bedste designs fastsættes før udrulning, ikke efter (se emne 9.0 — Samarbejde med partnerorganisationer).

7. **Mål resultater og økonomi, ikke blot aktivitet.** Logins, klik og tilfredshedsscorer er nødvendige, men ikke tilstrækkelige; bestillere finansierer resultater og værdi. Hvor I kan, knyt jeres evaluering til kliniske resultater, sikkerhedssignaler, lighed på tværs af undergrupper og omkostningskonsekvenser, i samarbejde med sundhedsøkonomer om at rammesætte gevinst i vendinger, beslutningstagere bruger (se emne 6.1 — Sundhedsøkonomi). Opdel altid resultater efter befolkningsgruppe, så et værktøj, der hjælper i gennemsnit, men skader en undergruppe, ikke kan skjule sig bag middelværdien.

8. **Offentliggør jeres resultater — også de skuffende.** Forpligt jer på forhånd til at dele fund, positive eller negative, gennem en rapport, et preprint eller en peer-reviewed artikel. At offentliggøre negative resultater er en faglig forpligtelse: det sparer andre organisationer fra at gentage jeres fejl og modvirker den publikationsbias, der lader ineffektive værktøjer formere sig. En kultur, der kan sige "vi evaluerede dette, og det virkede ikke, så vi stoppede", er mere troværdig, ikke mindre.

9. **Luk løkken, og handl på det, I lærer.** Evidens, der ikke ændrer nogen beslutning, er spild. Før fund tilbage i jeres køreplan, jeres business case og jeres indfasningsbeslutninger — skalér det, der virker, ret det, der halvt virker, og nedlæg det, der ikke gør (se emne 8.0 — Indfasning af innovation). Evaluér derefter igen, for et digitalt værktøj, der virkede i pilotskala i én setting, kan opføre sig anderledes i national skala eller i en anden befolkning.

## Spørgsmål at drøfte med dit team

1. **Er det, vi er ved at gøre, forskning, tjenesteevaluering eller audit — og hvor sikre er vi på det svar?** Dette er det første spørgsmål, fordi svaret fastsætter hele jeres styringsvej, og at tage fejl har alvorlige konsekvenser. Tal om, hvem jeres dataindivider er, om I randomiserer noget, om I har til hensigt at producere generaliserbar viden, og om I planlægger at offentliggøre — alle signaler, der skubber et projekt mod "forskning". Modstå ethvert pres for at kalde noget evaluering, blot fordi godkendelsesvejen er hurtigere; det pres er præcis, hvor styringssvigt begynder. Brug HRA’s beslutningsværktøj sammen, i rummet, og skriv jeres begrundelse ned og hvem der aftalte den. Et godt svar er ikke blot en etiket, men en dokumenteret, forsvarlig vurdering, jeres informationsstyrings- og kliniske sikkerhedskolleger har set. Hvis I reelt er usikre, er det ærlige træk at spørge HRA eller jeres R&D-kontor frem for at gætte i den retning, der passer til jeres tidsplan.

2. **Hvad ville tælle som overbevisende evidens for, at dette virker — og for hvem?** Forskellige målgrupper kræver forskellig evidens: en kliniker vil have sikkerheds- og resultatdata, en bestiller vil have omkostning og værdi, en regulator vil se det passende NICE-niveau opfyldt, og en patient vil vide, at det er sikkert og fair for mennesker som dem. Debatter, hvad "virker" egentlig betyder for jeres værktøj, og hvilket resultat der ville få jer til at *stoppe* — for et team, der ikke kan formulere en stopbetingelse, evaluerer ikke rigtigt. Overvej, hvilket design der er gennemførligt givet jeres udrulningsplan, jeres data og jeres budget, og vær ærlige om afvejningen mellem stringens og hastighed. Drøft, om I har brug for uafhængig evaluering for at blive troet, og hvis ja, hvem der bør udføre den. Et godt svar nævner beslutningstagerne, de resultater der ville bevæge dem, det design der troværdigt kan producere dem, og den tærskel, hvor I ville konkludere, at værktøjet har fejlet.

3. **Hvordan vil vi håndtere et negativt eller skuffende resultat?** Spørg om dette, før I har resultatet, for svaret er langt mere ærligt på forhånd. Undersøg, hvad I ville gøre, hvis evalueringen viste ingen gevinst, eller gevinst for flertallet, men skade for en udelukket undergruppe, og hvem der skulle høre det. Bring de reelle pres frem: sunk cost, leverandørrelationer, omdømmebekymring og de karriereincitamenter, der får folk til at ville have gode nyheder. Drøft jeres forudgående forpligtelse til at offentliggøre uanset udfald og hvilken styring der ville holde jer til det løfte, når resultatet er pinligt. Et godt svar behandler en veludført evaluering, der producerer et negativt resultat, som en procedurens succes, ikke teamets fiasko, og har en konkret plan for yndefuld nedlæggelse, åben kommunikation og beskyttelse af de mennesker, der leverede det ærlige fund.

4. **Hvad skal vi indfange og instrumentere før go-live — og har vi faktisk bygget det ind?** En evaluering er kun så god som baselinen og de data, den kan trække på, og begge er langt billigere at sikre før lancering end efter. Gennemgå, hvilken "før"-tilstand I har brug for — indlæggelsesrater, ventetider, fejlrater, nuværende forløbsomkostninger — og bekræft, at den registreres nu, opdelt efter de undergrupper, I bekymrer jer om, fordi I aldrig kan rekonstruere en baseline, I undlod at indfange. Tjek, om produktet selv vil udsende de resultat- og brugsdata, jeres valgte design har brug for, eller om den instrumentering stadig er et backlog-ønske. Debatter tidsspændingen: presset for at levere fjerner ofte måling for at nå en dato, og hvert sådant snit svækker i det stille den evidens, I senere vil blive bedt om at fremlægge. Involvér en analytiker eller metodolog, mens designet stadig er blødt, ikke når logs allerede flyder. Et godt svar er en konkret liste over, hvad der indfanges, fra hvornår, i hvilken granularitet og hvem der har bekræftet, at det er live — ikke en intention om at ordne det efter udrulning.

5. **Hvor gode er de data, vi agter at støtte os til, og hvad kunne forvirre vores konklusion?** Data fra den virkelige verden er rigelige, men sjældent rene, og et plausibelt diagram kan skjule sæsonudsving, en samtidig tjenesteændring, regression mod middelværdien eller et kodningsskift, der intet har med jeres værktøj at gøre. Udspørg proveniensen, fuldstændigheden og kvaliteten af hver kilde, I planlægger at bruge, og nævn de bias, hver bærer — hvem der mangler i elektroniske journaler, hvilke felter der er upålidelige, hvor konsekvent en kode anvendes. Spørg, hvad andet der ændrede sig i samme vindue som jeres go-live, fordi en afbrudt tidsserie eller før-og-efter, der ignorerer disse begivenheder, vil tilskrive jeres værktøj andres effekter. Beslut på forhånd, hvilken sammenligning eller hvilket design der giver jer det mest retfærdige kontrafaktiske, og præspecificér analysen, så dataene ikke i det stille kan omformes til at smigre resultatet. Et godt svar viser, at I ærligt har kortlagt dataenes svagheder og valgt et design, der kan overleve en skeptiker, der trækker i hver af dem.

6. **Hvem bør køre denne evaluering, og hvor uafhængig skal den være for at blive troet?** At rette sine egne lektier er den hurtigste måde at få troværdige fund afvist, så beslut tidligt, om en leverandørs eller intern analyse vil overbevise den målgruppe, I faktisk har brug for at bevæge. Afvej omkostningen og tiden ved at inddrage et NIHR-støttet akademisk team, et universitet eller et Health Innovation Network mod den omdømmemæssige og kommercielle værdi af uafhængig, publicerbar evidens. Drøft, hvor interessekonflikterne sidder — de mennesker, der byggede eller købte værktøjet, er sjældent de rette til at bedømme, om det virker — og hvordan I vil isolere evalueringen fra pres for at producere gode nyheder. Overvej, hvad partnere bringer ud over uafhængighed: metodologisk stringens, finansieringsveje og stående hos bestillere og klinikere, I ikke kan fremstille internt. Et godt svar afstemmer graden af uafhængighed med indsatsen og beslutningstagernes skepsis og sikrer det partnerskab, før designet er fastlagt, frem for efter resultaterne skuffer.

## I praksis: et eksempel fra sundhed og pleje

Et integreret plejesystem (ICS) bestiller en fjernovervågningsapp til patienter med kronisk hjertesvigt i håb om at skære uplanlagte indlæggelser. Leverandørens slides viser en reduktion på 30 % andetsteds, og der er pres for at udrulle hurtigt i alle tolv bydele før vinteren.

Den digitale leveranceleder pauser for at klassificere arbejdet. Fordi ICS’et vil have generaliserbare fund og har til hensigt at offentliggøre, og fordi det vil analysere identificerbare patientdata til et nyt formål, er dette forskning, ikke tjenesteevaluering — så en IRAS-ansøgning og REC-gennemgang er nødvendige. I stedet for at behandle det som en blokering henvender lederen sig til det regionale Health Innovation Network og et lokalt universitets NIHR-støttede forskerhold, som hjælper med at designe undersøgelsen og medskrive ansøgningen. I stedet for at tænde for alt på én gang tager de et stepped-wedge-design i brug: de tolv bydele går i drift i randomiserede bølger over ni måneder, så hver bydel til sidst får appen, mens den forskudte start giver en fair sammenligning. En baseline af indlæggelsesrater, opdelt efter afsavn og etnicitet, indfanges før første bølge.

Ved hjælp af NICE Evidence Standards Framework placerer teamet værktøjet i et niveau, der bærer klinisk risiko, og fastsætter evidensforventningen derefter, idet de præregistrerer indlæggelsesrater, dødelighed som sikkerhedssignal og omkostning pr. undgået indlæggelse som resultater. Ni måneder senere er den foreløbige analyse nøgtern: samlede indlæggelser falder beskedent, men blandt den mest dårligt stillede kohorte — der bruger appen mindst — er der ingen gevinst og en bekymrende stigning i sene henvendelser. Teamet begraver det ikke. De rapporterer det til ICS’ets bestyrelse, sætter udrulningen til de kohorter på pause, redesigner onboarding og tilføjer telefonsupport til digitalt udelukkede patienter og offentliggør både manglen og redesignet. Resultatet er en tjeneste, der reelt hjælper, og en beslutningsbestyrelse, der stoler på evidensen, fordi den har set teamet fortælle sandheden, da det gjorde ondt.

## Sektorperspektiver

### Startup

Et lille digitalt sundhedsfirma lever og dør af evidens, men har sjældent pengene eller den interne metodologi til at generere den alene. Jeres hurtigste troværdige vej er partnerskab: en NIHR-finansieret akademisk samarbejdspartner eller en Health Innovation Network-evaluering i den virkelige verden giver jer uafhængige fund, som investorer og NHS-købere faktisk tror på, langt mere end et selvudgivet whitepaper. Vær disciplinerede om proportionale påstande — at overdrive for at vinde et pilotforsøg er den hurtigste måde at bestå en senere evaluering forkert og miste jeres omdømme. Byg dataindfangning ind i jeres produktarkitektur fra dag ét, fordi eftermontering efter jeres seedrunde er dyr og giver et dårligere evidensgrundlag.

### Lille virksomhed

En etableret lille udbyder — en lægepraksis, et lokalt apotek, et plejehjem eller en enkelt klinik, der tager et digitalt værktøj i brug — forventes at evaluere det, den udruller, men har intet R&D-kontor, ingen metodolog og knap nok ledige hænder. Jeres realistiske træk er ikke at køre et forsøg, men at køre en disciplineret tjenesteevaluering: indfang en enkel baseline, før I tænder for det, aftal en håndfuld ærlige resultatmål, og registrér, hvad der faktisk ændrer sig for jeres patienter. Læn jer kraftigt op ad fælles infrastruktur, I ikke selv skal bygge — jeres Health Innovation Network, et lokalt universitet eller en federation eller et primærsundhedsnetværk, der kan samle data og ekspertise på tværs af flere små lokationer. Vær særligt på vagt over for at acceptere en leverandørs overskriftspåstand uden videre, når I ikke selv kan kontrollere den, og vær klare over, at klassificeringspligter stadig gælder jer, selv i lille skala. Proportional, veldokumenteret lokal evidens er både opnåelig og nok til at begrunde at fortsætte, tilpasse eller droppe værktøjet.

### Stor virksomhed

Et stort NHS-hospital eller ICS har et R&D-kontor, informationsstyringsmaskineri og eksisterende akademiske bånd — aktiver, en startup ville misunde — men også inertien til at udrulle værktøjer hospitalsdækkende, før de er evalueret. Jeres udfordring er at gøre "evaluér før I skalerer" til standarden og at modstå momentum fra en underskrevet virksomhedskontrakt, når tidlig evidens er svag. Brug jeres skala som en metodologisk fordel: flere lokationer gør stepped-wedge- og klyngerandomiserede designs gennemførlige på måder, en enkelt klinik ikke kan magte. Vær på vagt over for den interne politik omkring negative resultater, hvor en stor investering skaber stærke incitamenter til at erklære succes uanset.

### Myndighed

Et nationalt organ — NHS England, Department of Health and Social Care eller en delegeret regering — fastsætter de regler, andre følger, så dets evidensstandarder former hele markedet. Dets opgave er at forvalte rammerne (HRA-styringssystemet, NICE Evidence Standards Framework, DTAC) og at finansiere den infrastruktur — NIHR, Health Innovation Networks, betroede forskningsmiljøer — der lader alle generere god evidens. Når staten indkøber i national skala, er de evidensmæssige indsatser enorme: en dårligt dokumenteret udrulning kan forankre skade for millioner af borgere og er politisk næsten umulig at omgøre. Den bør derfor holde sig selv til den højeste barre, den kræver af andre, og offentliggøre sine egne evalueringer, også fiaskoerne, for at bevare offentlig tillid.

## Typiske fejlmønstre

- **Evidens som eftertanke.** At udrulle først og spørge "virkede det?" senere, uden indfanget baseline — hvilket efterlader jer ude af stand til at fremsætte nogen troværdig kausal påstand.
- **At fejlklassificere forskning som evaluering.** At vælge "evaluering"-etiketten for at undgå HRA- og REC-godkendelser, hvilket udsætter patienter for ugodkendt forskning og jeres organisation for et alvorligt styringsbrud.
- **Naiv før-og-efter.** At sammenligne to øjebliksbilleder og tilskrive al forandring til jeres værktøj, mens sæsonudsving, samtidige initiativer og regression mod middelværdien ignoreres.
- **Forfængelighedsmetrikker.** At rapportere logins, downloads og tilfredshed, mens man tier om kliniske resultater, sikkerhed, lighed og omkostning.
- **Gennemsnit, der skjuler skade.** At præsentere en overskriftsforbedring i middelværdien uden opdeling efter befolkningsgruppe, hvilket skjuler en undergruppe, værktøjet svigter eller skader.
- **At rette sine egne lektier.** At støtte sig udelukkende til leverandørgenereret evidens uden uafhængig evaluering, så intet skeptisk publikum tror på den.
- **At begrave dårlige nyheder.** At offentliggøre kun positive fund, hvilket nærer publikationsbias og lader ineffektive værktøjer sprede sig i systemet.
- **Overdrivelse.** At strække et beskedent resultat med svagt design til en stærk klinisk påstand, evidensen ikke kan understøtte.

## Modenhedsmodel

| Dimension | Igangsætte | Udvikle | Standardisere | Styre | Orkestrere |
|---|---|---|---|---|---|
| Evidensplanlægning | Evalueret kun hvis udfordret; ingen baseline | Evaluering tilføjet sent, efter go-live | Evaluering designet under afdækning, baseline indfanget før lancering | Evidensplan fulgt mod mål; baselinekvalitet og milepæle overvåget aktivt | Evidensstrategi fastsat ved indtag; gen-evalueret, når værktøjet skalerer |
| Styring og klassificering | Skellet forskning/evaluering/audit uklart eller ignoreret | Klassificering udført uformelt, sag for sag | HRA-beslutningsværktøjer brugt, IRAS/REC-vej fulgt hvor påkrævet, dokumenteret | Klassificeringsbeslutninger logget, kvalitetssikret og revideret; godkendelser fulgt i et register | Styring indlejret, R&D-kontor inddraget tidligt, gennemgået som rutine |
| Designstringens | Anekdote og demoer | Naiv før-og-efter | Kvasi-eksperimentelt (ITS) eller randomiseret hvor gennemførligt, grænser angivet | Designkvalitet og præspecificeret analyse kvalitetssikret mod metodestandarder før lancering | Design afstemt med risikoniveau; stepped-wedge/RCT brugt når praktisk |
| Partnerskaber | Ingen; kun leverandørpåstande | Lejlighedsvis akademisk kontakt | Regelmæssigt arbejde med NIHR, universiteter, Health Innovation Network | Partnerskaber styret med klare roller og metrikker; fundenes uafhængighed kvalitetssikret | Uafhængig evaluering er normen; medskabt, finansieret, offentliggjort |
| Deling af resultater | Intet offentliggjort | Positive resultater delt selektivt | Resultater rapporteret internt, positive og negative | Offentliggørelse og formidling fulgt som en styret forpligtelse mod en plan | Fund offentliggjort åbent, herunder fiaskoer; beslutninger ændret derefter |

## Tjekliste

- [ ] Klassificér projektet som forskning, tjenesteevaluering eller audit ved hjælp af HRA’s beslutningsværktøjer, og dokumentér begrundelsen.
- [ ] Hvis det er forskning, planlæg IRAS-ansøgningen og Research Ethics Committee-gennemgangen tidligt.
- [ ] Definér hvad "virker" betyder, og de resultater der ville bevise det, under afdækningen.
- [ ] Indfang en baseline — opdelt efter relevante undergrupper — før go-live.
- [ ] Lokalisér værktøjets risikoniveau i NICE Evidence Standards Framework, og afstem stringensen derefter.
- [ ] Vælg det stærkeste gennemførlige design (RCT, stepped-wedge eller afbrudt tidsserie), og registrér dets grænser.
- [ ] Planlæg jeres datakilder fra den virkelige verden, kvalitet og bias; præspecificér analysen.
- [ ] Inddrag en uafhængig partner (NIHR, universitet, Health Innovation Network), hvor troværdighed eller finansiering kræver det.
- [ ] Inkludér kliniske resultater, sikkerhedssignaler, lighed og omkostning — ikke blot aktivitetsmetrikker.
- [ ] Forpligt jer på forhånd til at offentliggøre resultater, også negative, og nævn hvor.
- [ ] Definér en stopbetingelse og en yndefuld nedlæggelsesplan, før I starter.
- [ ] Før fund tilbage i køreplanen, business casen og indfasningsbeslutningerne.

## Centrale kilder

- NICE — Evidence Standards Framework for Digital Health Technologies (ESF).
- Health Research Authority — "Is my study research?"-beslutningsværktøjer, HRA Approval og vejledning om forskningsetik.
- Integrated Research Application System (IRAS) — den enkelte portal for britiske sundheds- og socialplejeforskningsansøgninger.
- National Institute for Health and Care Research (NIHR) — finansiering, evalueringsstøtte og forskningsinfrastruktur.
- Health Innovation Network (tidligere Academic Health Science Networks) — evaluering i den virkelige verden og adoptionsstøtte.
- Medicines and Healthcare products Regulatory Agency (MHRA) — vejledning om data fra den virkelige verden og software/AI som medicinsk udstyr.
- NHS England — Digital Technology Assessment Criteria (DTAC).
- MRC/NIHR — Developing and evaluating complex interventions (rammevejledning).
- EQUATOR Network — rapporteringsretningslinjer (CONSORT, STROBE, TRIPOD) for gennemsigtig forskningsrapportering.

## Referencer

1. Real world evidence — Wikipedia — https://en.wikipedia.org/wiki/Real_world_evidence
2. Real world data — Wikipedia — https://en.wikipedia.org/wiki/Real_world_data
3. Clinical audit — Wikipedia — https://en.wikipedia.org/wiki/Clinical_audit
4. Health Research Authority — Wikipedia — https://en.wikipedia.org/wiki/Health_Research_Authority
5. Institutional review board — Wikipedia — https://en.wikipedia.org/wiki/Institutional_review_board
6. Randomized controlled trial — Wikipedia — https://en.wikipedia.org/wiki/Randomized_controlled_trial
7. Stepped-wedge trial — Wikipedia — https://en.wikipedia.org/wiki/Stepped-wedge_trial
8. Interrupted time series — Wikipedia — https://en.wikipedia.org/wiki/Interrupted_time_series
9. National Institute for Health and Care Research — Wikipedia — https://en.wikipedia.org/wiki/National_Institute_for_Health_and_Care_Research
10. National Institute for Health and Care Excellence — Wikipedia — https://en.wikipedia.org/wiki/National_Institute_for_Health_and_Care_Excellence
11. Publication bias — Wikipedia — https://en.wikipedia.org/wiki/Publication_bias
12. Evidence Standards Framework for Digital Health Technologies — National Institute for Health and Care Excellence (NICE) — https://www.nice.org.uk/about/what-we-do/digital-health/evidence-standards-framework-for-digital-health-technologies
13. Is my study research? — Health Research Authority — https://www.hra.nhs.uk/approvals-amendments/what-approvals-do-i-need/
14. Integrated Research Application System (IRAS) — Health Research Authority — https://www.myresearchproject.org.uk/
15. National Institute for Health and Care Research — NIHR — https://www.nihr.ac.uk/
16. Health Innovation Network — The Health Innovation Network — https://thehealthinnovationnetwork.co.uk/
17. Digital Technology Assessment Criteria (DTAC) — NHS England — https://www.nhs.uk/digital-technology-assessment-criteria-dtac/
18. Framework for developing and evaluating complex interventions — Medical Research Council / NIHR — https://www.bmj.com/content/374/bmj.n2061
19. Enhancing the QUAlity and Transparency Of health Research (EQUATOR) Network — https://www.equator-network.org/
