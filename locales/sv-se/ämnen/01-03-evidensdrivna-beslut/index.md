# Ämne 1.3 — Evidensdrivna beslut

**I en mening:** Evidensdrivet beslutsfattande innebär att avgöra vad som ska byggas, köpas och skalas upp utifrån styrkan i den bästa tillgängliga evidensen — klinisk och leveransmässig — proportionerlig mot risken, och att dokumentera resonemanget så att det överlever de människor som förde det.

## Varför detta är viktigt inom hälsa och vård

I de flesta sektorer kostar ett dåligt produktbeslut pengar. Inom hälsa och vård kan det kosta säkerhet, jämlikhet och förtroende — och det fattas med offentliga medel under lagstadgad skyldighet. Ett beslut att driftsätta en digital diagnostik som aldrig har utvärderats är inget kommersiellt spel; det är en klinisk risk. Det höjer ribban för evidens långt över ”demon såg bra ut”.

Området är också särpräglat genom att det kräver **två slags evidens samtidigt**. *Klinisk evidens* besvarar ”fungerar denna teknik, och är den säker och effektiv för patienter?” *Leveransevidens* besvarar ”bygger vi rätt sak väl, och införs och används den?” En tjänst kan vara kliniskt sund men ett leveransmisslyckande (ingen använder den), eller en leveransframgång men kliniskt obevisad (vitt använd, aldrig validerad). Seniora ledare måste kräva båda och aldrig låta den ena maskera sig som den andra. Och eftersom hälsobeslut drar till sig granskning — från tillsynsmyndigheter, allmänheten och kliniker — spelar *dokumentationen* av varför ni beslutade lika stor roll som beslutet.

## Grundläggande begrepp

**[Evidenshierarkin](https://en.wikipedia.org/wiki/Hierarchy_of_evidence).** [Evidensbaserad medicin](https://en.wikipedia.org/wiki/Evidence-based_medicine) rangordnar studiedesigner efter hur väl de kontrollerar bias: överst [systematiska översikter](https://en.wikipedia.org/wiki/Systematic_review) och [metaanalyser](https://en.wikipedia.org/wiki/Meta-analysis) av [randomiserade kontrollerade prövningar](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RCT); därefter enskilda RCT; därefter kohort- och fall-kontrollstudier; därefter fallserier; och längst ned expertutlåtanden och anekdoter. Hierarkin är en vägledning, inte en tvångströja — men den disciplinerar er att uppmärksamma när ett påstående vilar på anekdot klädd som bevis.

**NICE Evidence Standards Framework (ESF) för digitala hälsoteknologier.** NICE skapade, tillsammans med NHS England och partner, ESF för att fastställa vilken nivå av evidens en digital hälsoteknologi (DHT) behöver, proportionerlig mot dess funktion och den risk den bär. Den graderar DHT efter potentiell risk — från enkla systemtjänster, via verktyg som informerar eller driver vård, till sådana som direkt diagnostiserar eller behandlar — och specificerar den kliniska effektivitet och den ekonomiska evidens som förväntas på varje nivå. Ju högre klinisk risk, desto starkare evidens krävs. ESF är referenspunkten för beställare och utvecklare som avgör om en DHT är redo.

**Verklighetsdata och [verklighetsevidens (real-world evidence)](https://en.wikipedia.org/wiki/Real_world_evidence).** Verklighetsdata (RWD) kommer från rutinvård — elektroniska patientjournaler, register, patientrapporterade utfall, telemetri från enheter — snarare än kontrollerade prövningar. Analyserade väl (genom prospektiva observationsstudier, pragmatiska prövningar eller noggrann analys av journaldata) blir de verklighetsevidens (RWE) om hur en teknik presterar i praktiken. RWE är avgörande för teknologier som lär sig eller förändras (AI, bärbar teknik), där en engångsprövning inte kan fånga fortlöpande beteende, men den bär confounding-risker som måste hanteras ärligt.

**Klinisk evidens kontra leveransevidens.** Håll dessa på separata axlar. Klinisk evidens använder hierarkin ovan och ESF: effekt under idealiska förhållanden, säkerhet, effektivitet i praktiken. Leveransevidens använder produkt- och tjänsteanalys: är tjänsten användbar, införd, slutför användarens uppgift, minskar efterfrågan som orsakas av fel? Båda behövs; att blanda ihop dem är ett klassiskt fel (en hög användningssiffra är inte klinisk bevisning).

**Utvärderingsdesigner.** En **[logisk modell (logic model)](https://en.wikipedia.org/wiki/Logic_model)** (eller [förändringsteori](https://en.wikipedia.org/wiki/Theory_of_change)) gör uttryckligt hur insatser och aktiviteter är avsedda att producera prestationer och utfall — den är kartan varje utvärdering prövar. En **RCT** ger det starkaste kausala svaret men är långsam, kostsam och ibland opraktisk eller oetisk för en snabbrörlig tjänst. **Pragmatisk utvärdering** — pragmatiska prövningar, [avbruten tidsserie (interrupted time series)](https://en.wikipedia.org/wiki/Interrupted_time_series), före/efter med kontroller, tjänsteutvärdering med blandade metoder — byter en del visshet mot hastighet och verklighetsrelevans. Välj den design som är proportionerlig mot risken och beslutet som står på spel.

**[A/B-testning](https://en.wikipedia.org/wiki/A/B_testing) och analys.** För lågrisk-, leveransrelaterade frågor (vilken formulering ökar närvaron vid besök? vilket flöde minskar avhopp?) ger kontrollerade onlineexperiment (A/B-tester) snabb, kausal leveransevidens. De är kraftfulla för optimering men får aldrig användas för att göra obedömda kliniska ändringar, och måste respektera gränserna för samtycke och informationsstyrning.

**HiPPO-beslut.** ”HiPPO” — Highest-Paid Person's Opinion — namnger felmönstret där senioritet åsidosätter evidens. Evidensdrivna kulturer gör det tryggt och normalt att säga ”vad visar data?” till vem som helst i rummet, och behandlar en senior magkänsla som en hypotes att pröva, inte en slutsats.

**Beslutsloggar.** En beslutslogg (eller [arkitekturbeslutspost](https://en.wikipedia.org/wiki/Architectural_decision), architecture decision record) fångar, kortfattat: beslutet, övervägda alternativ, vägd evidens, vem som beslutade och när. Den gör resonemanget granskningsbart, överlever personalomsättning och förhindrar att samma diskussion förs om varje kvartal.

## Bästa praxis

1. **Anpassa evidensens styrka efter risknivån.** Använd NICE ESF:s nivåer som måttstock: ett lågrisk-systemverktyg behöver lätt evidens; ett verktyg som diagnostiserar eller driver behandling behöver evidens av hög kvalitet för klinisk effektivitet. Proportionalitet låter er röra er snabbt på det säkra och långsamt på det farliga, i stället för att tillämpa en ribba på allt.

2. **Kräv klinisk evidens och leveransevidens, och förväxla dem aldrig.** För varje betydande investering, ställ två separata frågor — ”är den kliniskt effektiv och säker?” och ”är den användbar och införd?” — och kräv evidens för vardera. Införandemått är inte en ersättning för klinisk validering, och en positiv prövning är ingen garanti för verklig användning.

3. **Starta varje initiativ med en logisk modell.** Innan ni bygger, skriv ned hur ni tror att insatsen ska ge det utfall ni vill ha. Det blottlägger obeprövade antaganden tidigt, definierar de mått som spelar roll och ger er senare utvärdering något konkret att pröva.

4. **Använd verklighetsevidens för teknologier som lär sig eller består.** För AI, algoritmer och långlivade tjänster, komplettera eller följ upp inledande prövningar med strukturerad bevakning av rutindata — prospektiva observationsdesigner, pragmatisk utvärdering — så att ni vet hur prestandan håller i praktiken och kan fånga drift.

5. **Experimentera på leveransfrågor; utvärdera kliniska.** Använd A/B-testning och analys fritt för leveransoptimering (formulering, flöde, påminnelser), inom gränserna för informationsstyrning och samtycke. Reservera formell utvärdering (prövningar, pragmatiska studier) för frågor om klinisk effekt. Led varje fråga till rätt metod.

6. **Avliva HiPPO-beslut kulturellt, inte bara procedurmässigt.** Gör det uttryckligen acceptabelt att be vilken beslutsfattare som helst om evidensen, ram in seniora synpunkter som hypoteser och förbind er i förväg till vilken evidens som skulle ändra er uppfattning. Ett team som tryggt kan utmana senioritet fattar bättre beslut.

7. **Dokumentera beslut och deras evidens.** För en lättviktig beslutslogg för varje betydande val — vad, varför, vilken evidens, vem, när. Det skapar granskningsbarhet för tillsynsmyndigheter och allmänheten, förhindrar ändlös omprövning och bevarar institutionellt minne genom personalomsättning.

8. **Beakta dataetik.** Evidensarbete använder patientdata; behandla laglighet, samtycke, proportionalitet och rättvisa som designrestriktioner. Skydda mot snedvridna dataset som befäster ojämlikhet, respektera tystnadsplikten och säkerställ att era evidenspraxis själva skulle klara offentlig granskning.

## Frågor att diskutera med ditt team

1. **För vårt viktigaste senaste beslut, kan vi peka på både klinisk evidens och leveransevidens — hållna isär — eller stod den ena i tysthet i för den andra?**
   Frågan prövar ämnets insisterande på att klinisk evidens (”fungerar det och är det säkert?”) och leveransevidens (”är det användbart och infört?”) ligger på separata axlar och att det är ett klassiskt, farligt fel att blanda ihop dem. Den spelar roll eftersom en tjänst kan vara kliniskt sund men oanvänd, eller flitigt använd men kliniskt ovaliderad, och inom hälsa och vård kan det att ta en hög användningssiffra för klinisk bevisning utsätta patienter för risk medan det ser ut som framgång. Spänningen att lyfta är att leveransevidens är snabb, billig och smickrande — analysinstrumentpaneler fylls snabbt — medan klinisk evidens är långsam, kostsam och ofta icke-avgörande, så det finns ett ständigt tryck att låta införandemått bära argumentet. Ta ett verkligt styrelsedokument eller investeringscase och granska det: är de två slagen av evidens åtskilda, finns var och en faktiskt där, och vilar det kliniska påståendet på något mer än leverantörens demo eller en studie på en enda ort? Ett bra, ärligt svar identifierar ett specifikt beslut, erkänner var en evidenstyp var tunn eller saknades och förbinder sig att kräva båda uttryckligen och separat i framtida betydande val i stället för att låta en stark användningssiffra lugna alla.

2. **Hur proportionerlig är vår evidensribba egentligen — kräver vi guldstandardprövningar för lågriskförändringar medan vi vinkar igenom högre riskverktyg på tunn evidens?**
   Ämnet ramar in proportionalitet genom NICE ESF:s nivåer: lätt evidens för ett lågrisk-systemverktyg, evidens av hög kvalitet för klinisk effektivitet för ett verktyg som diagnostiserar eller driver behandling, så frågan kontrollerar om er organisation faktiskt kalibrerar ribban efter risk eller tillämpar en trubbig standard. Den spelar roll eftersom båda felriktningarna är kostsamma — analysförlamning stoppar en användbar lågrisk-innehållsändring bakom en onödig RCT, medan ett underbedömt AI-verktyg som informerar kliniska beslut slinker igenom på en övertygande demo — och var och en undergräver förtroendet för evidenskulturen. Avvägningen att debattera är att proportionalitet kräver omdöme och mod att försvara, vilket är svårare än en enhetlig regel; ett generellt ”allt behöver en prövning” eller ”om det är digitalt, kör bara en pilot” är lättare att administrera men fel. Gå igenom två eller tre aktuella eller nyliga teknologier, placera var och en tillsammans i sin ESF-nivå och kontrollera om den evidens ni krävde matchade nivån eller drevs av vem som drev frågan. Ett ärligt svar visar att teamet kan placera en teknologis risknivå, erkänner var ribban har satts fel i någon riktning och behandlar proportionalitet som en uttrycklig, försvarbar standard snarare än en instinkt.

3. **Hur tryggt är det, kulturellt, att fråga den mest seniora personen i rummet ”vad är evidensen?” — och när behandlade vi senast en ledares magkänsla som en hypotes att pröva snarare än ett beslut?**
   Frågan konfronterar HiPPO-felmönstret direkt, där den högst betalda personens åsikt åsidosätter evidens, och prövar om ert uttalade åtagande för evidens överlever mötet med hierarki och leverantörens demo som imponerade på en respekterad direktör. Den spelar roll eftersom ett demodrivet beslut att driftsätta ett obedömt verktyg inom hälsa och vård inte är ett kommersiellt spel utan en risk för klinisk säkerhet och offentliga medel, och i det ögonblick utmaning blir otrygg slutar evidens att styra beslut. Den verkliga spänningen är att psykologisk trygghet inte kan föreskrivas i policy; den byggs av att seniora ledare synligt inbjuder till utmaning, ramar in sina egna synpunkter som hypoteser och i förväg förbinder sig till vilken evidens som skulle ändra deras uppfattning — beteenden som känns blottande och är lätta att hoppa över under tidspress. Förankra samtalet i specifika fall: minns ett nyligt beslut drivet mer av senioritet eller entusiasm än data, och fråga om någon utmanade det, om det kändes tryggt och vad en beslutslogg hade fångat. Ett bra svar är uppriktigt om var hierarkin för närvarande vinner, namnger konkreta beteenden ledare ska anta för att göra utmaning normal och parar den kulturella förbindelsen med den lättviktiga beslutslogg som gör resonemanget granskningsbart och förhindrar att samma diskussion förs om.

4. **För de teknologier som lär sig eller består — vår AI, våra algoritmer, våra långlivade tjänster — hur skulle vi faktiskt veta om deras prestanda hade driftat sedan vi validerade dem, och vem bevakar?**
   Ämnet är uttryckligt med att en engångsprövning inte kan fånga det fortlöpande beteendet hos teknologier som lär sig eller förändras, och att ”engångsutvärdering” är ett namngivet felmönster vars motmedel är verklighetsevidens och löpande bevakning. Frågan spelar roll eftersom faran är tyst: en AI-modell för försämringsupptäckt eller en triagealgoritm kan försämras när patientmix, kodningspraxis eller uppströms datapipelines skiftar, och till skillnad från en trasig funktion fallerar inget uppenbart — verktyget fortsätter att producera rimliga utdata medan dess andel falsklarm eller missar i tysthet förvärras. Spänningen att lyfta är att bevakning är oglamorös och ofinansierad i förhållande till upphetsningen vid driftsättning: när ett affärscase väl är undertecknat och nyttor bokförda resurssätter få organisationer det prospektiva observationsarbetet, driftmåtten eller den namngivna ägare som granskar dem. Välj ett levande AI- eller algoritmiskt verktyg och spåra dess liv efter driftsättning konkret — vilka rutindata som bevakas, mot vilken baslinje, med vilken kadens och vem som skulle eskalera en försämring och till vem. Ett ärligt svar erkänner var valideringen stannade vid driftsättning, skiljer de verktyg som genuint behöver kontinuerlig övervakning från de som inte gör det och förbinder sig till en namngiven ägare, ett mått och en granskningsrytm snarare än en vag avsikt att ”hålla ett öga på det”.

5. **När ett beslut vi fattar i dag ifrågasätts om två år — av en ny direktör, en tillsynsmyndighet eller allmänheten — vad kommer den skriftliga dokumentationen faktiskt att visa, och skulle den klara den granskningen?**
   Ämnet behandlar beslutsloggen som kärninfrastruktur: en lättviktig logg över beslutet, alternativen, den vägda evidensen, vem som beslutade och när, värderad eftersom den gör resonemanget granskningsbart, överlever personalomsättning och stoppar att samma diskussion förs om varje kvartal. Frågan spelar roll eftersom beslut inom hälsa och vård drar till sig regulatorisk, parlamentarisk och offentlig granskning på ett sätt kommersiella sällan gör, och det utarbetade exemplet i detta ämne vänder på just detta — två år senare ifrågasätter en ny direktör ett driftsatt verktyg och ”dokumentationen svarar”. Den verkliga spänningen ligger mellan disciplinens ringa kostnad per beslut och det kroniska trycket att hoppa över den: att skriva ned varför man beslutade känns byråkratiskt i stunden, och de som mest behöver dokumentationen är framtida personal som inte är i rummet för att kräva den. Pröva det mot verkligheten genom att försöka rekonstruera resonemanget bakom ett betydande val som gjordes för tolv eller arton månader sedan — kan ni hitta vilken evidens som vägdes och vilka alternativ som förkastades, eller bara att ett beslut fattades? Ett bra svar konfronterar om dokumentation verkligen förs för betydande beslut eller bara för de enkla, om den fångar evidens och alternativ snarare än bara slutsatser och om någon någonsin läser tillbaka den — eftersom en oläst logg med enbart slutsatser är granskningsteater, inte institutionellt minne.

6. **Vems data tränar och validerar vår evidens, och är vi säkra på att den inte skulle befästa ojämlikhet — eller behandlar vi dataetik som en blankett att skriva under snarare än en designrestriktion?**
   Ämnet insisterar på att evidensarbete drivs av patientdata och att laglighet, samtycke, proportionalitet och rättvisa är designrestriktioner, inte pappersarbete, och varnar särskilt för snedvridna dataset som befäster ojämlikhet och för ”etik som pappersarbete” som felmönster. Frågan spelar roll eftersom en teknik som validerats på en icke-representativ population kan prestera sämre för de grupper som redan är sämst betjänade — en modell för försämringsupptäckt eller diagnostik tränad där vissa etniciteter, åldrar eller samsjuklighetsgrupper är underrepresenterade kan föra den snedvridningen in i varje framtida beslut, och i nationell skala befäster ett godkänt dataset den ojämlikheten systemomfattande. Spänningen är att rättvisaanalys är svårare och långsammare än en rubrikuppgift om träffsäkerhet: den kräver att ni förhör vem som finns i data och vem som saknas, delar upp prestanda över delgrupper och ibland godtar att er evidens är svagare för de populationer ni mest behöver betjäna. Gör det konkret genom att ta ett nyligt eller föreslaget verktyg och fråga vems journaler det byggdes och testades på, om prestanda någonsin granskades per delgrupp och om godkännandet inom informationsstyrning överhuvudtaget engagerade sig i rättvisa eller bara bekräftade laglig grund. Ett ärligt svar skiljer genuin etisk granskning från rutatickning, erkänner var representativitet aldrig kontrollerades och behandlar bias och rättvisa som frågor evidensen själv måste besvara snarare än ett efterlevnadssteg som byggs på i slutet.

## I praktiken: ett exempel från hälsa och vård

En kommunal vårdorganisation (community trust) erbjuds ett AI-verktyg som flaggar patienter med risk för försämring utifrån värden för vitala tecken. Ett HiPPO-beslut skulle driftsätta det därför att en respekterad direktör imponerades av leverantörens demo.

I stället behandlar organisationen erbjudandet som en hypotes. Den placerar verktyget i den NICE ESF-risknivå som passar en teknik som informerar kliniska beslut och ber leverantören om effektivitetsevidens på den nivån; det starkaste som erbjuds är en liten studie på en enda ort. Organisationen skriver en **logisk modell** (bättre tidig varning → tidigare eskalering → färre undvikbara försämringar) och utformar en **pragmatisk utvärdering**: en skuggdriftsättning där verktygets larm loggas men inte agerar på, jämförda mot faktiska utfall, plus kvalitativa intervjuer med sjuksköterskor om passformen i arbetsflödet.

Parallellt samlar den **leveransevidens**: skulle kliniker faktiskt märka och lita på larmen? Den kör A/B-liknande tester på hur larmen presenteras. Ansvariga för informationsstyrning och klinisk säkerhet godkänner dataanvändningen och farologgen. Efter tre månader visar RWE en blygsam men verklig förbättring och en acceptabel andel falsklarm, och leveransevidensen visar att kliniker engagerar sig med de omdesignade larmen. Beslutet att gå vidare — med stegvis utrullning och fortsatt bevakning — skrivs in i en beslutslogg som citerar den vägda evidensen. Två år senare, när en ny direktör ifrågasätter verktyget, svarar dokumentationen.

## Sektorperspektiv

Alla har samma plikt att anpassa evidens efter risk, men resurserna, incitamenten och ansvarsutkrävandet kring evidens skiljer sig skarpt åt mellan organisationer.

### Startup-företag

Ett startup-företags begränsning är att klinisk evidens av guldstandard är långsam och dyr medan marginalen är kort, så frestelsen är att sälja införandemått som om de vore bevis på klinisk effekt. Det ärliga draget är att tidigt placera produkten i rätt NICE ESF-nivå och vara uppriktig mot köpare om evidensglappet, med en tydlig logisk modell och en billig pragmatisk utvärdering (en pilot i skuggdrift, en avbruten tidsserie mot en enda ort) för att generera den första verklighetsevidensen. Beslutsloggar kostar nästan ingenting och är oproportionerligt värdefulla för ett litet team, bevarar resonemanget genom snabba kursändringar och ger investerare som gör due diligence och NHS-bedömare ett spårbart underlag. Den disciplin som lönar sig är att motstå grundarens HiPPO-magkänsla och behandla varje ”demon landade bra” som en hypotes att pröva.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem, en klinik på en enda ort, en liten hälsotekniksleverantör som passerat startfasen — bär samma plikt att anpassa evidens efter risk men har verkliga patienter, snäv kassa och liten eller ingen dedikerad digital förmåga att göra det med. Det realistiska draget är att luta sig mot evidens som andra redan har tagit fram snarare än att generera egen: använd NICE ESF-nivån och DTAC-bedömningen av ett kandidatverktyg som färdig proportionalitet, be leverantörer om den klinisk-effektivitetsevidens som motsvarar nivån och vägra att låta er övertalas till en obedömd produkt av en slät demo. Leveransevidens är där en liten organisation genuint kan leda, eftersom den ser sina egna patienter på nära håll — några veckors ärlig observation av om personalen faktiskt använder ett verktyg och om det minskar efterfrågan som orsakas av fel är verklighetsevidens inom räckhåll. En beslutslogg på en rad — vad vi valde, vilken evidens vi såg, vem som beslutade — kostar ett litet team nästan ingenting och skyddar det när en partner lämnar eller en CQC-inspektör frågar varför. Fällan att undvika är att anta att det att vara liten befriar er från evidensribban; plikten mot patienter är identisk, bara resurserna är det inte.

### Storföretag

Ett NHS-sjukhus (trust) eller ICS har rutindata, patientvolymer och analysförmåga att göra seriös utvärdering — och det ansvarsutkrävande som kräver det, eftersom att driftsätta ett obeprövat verktyg i skala samtidigt är en risk för klinisk säkerhet och offentliga medel. Felmönstret är institutionellt: en respekterad direktör som driver en leverantörsdemo, eller ett affärscase byggt på prognostiserade nyttor ingen senare kontrollerar. Botemedlet är att göra det kulturellt tryggt att fråga vilken beslutsfattare som helst ”vad är evidensen?”, att hålla klinisk evidens och leveransevidens på separata axlar i varje styrelsedokument och att finansiera löpande verklighetsbevakning för AI och långlivade tjänster i stället för att validera en gång. Ett stort läkemedels- eller hälsotekniksföretag har formell prövningsmaskineri men måste skydda sig mot publikationsbias och confounding i den verklighetsevidens det genererar.

### Staten

Ett nationellt organ — NICE, NHS England, DHSC, MHRA, UKHSA — sätter ofta den evidensribba andra måste klara, så dess arbetssätt formar hela marknaden: ESF, DTAC och regleringen av programvara som medicinteknisk produkt är instrument för ansvarsutkrävande i befolkningsskala. Beslut här drar till sig regulatorisk, parlamentarisk och offentlig granskning, så dokumentationen av *varför* en teknik rekommenderades eller upphandlades spelar lika stor roll som beslutet, och transparens om evidensens begränsningar är en plikt, inte en artighet. Risken i denna skala är att föreskriva en teknik över hela systemet på tunn evidens, eller omvänt att kräva en RCT för en lågriskförändring och stoppa användbar innovation. Botemedlet är proportionalitet gjord explicit i publicerade standarder, plus uppmärksamhet på dataetik och rättvisa, eftersom ett snedvridet dataset som godkänns nationellt befäster ojämlikhet i skala.

## Vanliga felmönster

- **Demodrivna beslut.** Att köpa för att en demonstration imponerade på en senior ledare. Motmedel: behandla erbjudanden som hypoteser; kräv evidens som motsvarar nivån.
- **Användning förväxlad med validering.** Att åberopa införandesiffror som bevis för att ett verktyg är kliniskt effektivt. Motmedel: håll klinisk evidens och leveransevidens på separata axlar.
- **Engångsutvärdering.** Att validera en gång och aldrig bevaka, särskilt för AI som driftar. Motmedel: verklighetsevidens och löpande bevakning.
- **Analysförlamning.** Att kräva en RCT för en lågrisk-innehållsändring. Motmedel: proportionerliga metoder; A/B och pragmatisk utvärdering där risken är låg.
- **Odokumenterade beslut.** Inget spår av varför ett val gjordes, så det diskuteras om och går inte att granska. Motmedel: en lättviktig beslutslogg.
- **Etik som pappersarbete.** Att behandla dataetik som en blankett att skriva under snarare än en designrestriktion. Motmedel: bygg in laglighet, samtycke och rättvisa i evidensdesignen.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Beslutsunderlag | Senioritet / demon (HiPPO) | Viss data konsulteras | Evidens krävs rutinmässigt, graderad efter risk | Evidensribban följs och kvalitetssäkras mot risknivåer | Förbestämda evidenströsklar; magkänslor prövas |
| Klinisk kontra leverans | Blandade eller en ignorerad | Båda nämns | Båda krävs och skiljs åt | Båda mäts mot definierade tröskelvärden | Båda bevakas kontinuerligt |
| Utvärdering | Ingen eller i efterhand | Enstaka, ad hoc | Logiska modeller + proportionerliga designer | Utvärderingar styrs, med nyckeltal följda mot mål | RWE och löpande utvärdering inbäddade |
| Dataetik | Eftertanke | Endast efterlevnad | Etik inbyggd i designen | Rättvisemått granskas mot tröskelvärden | Rättvisa och bias bevakas aktivt |
| Beslutsloggar | Inga | Inkonsekventa anteckningar | Standardiserad beslutslogg | Loggens fullständighet mäts och kvalitetssäkras | Loggar återanvänds, granskas och lärs av |

## Checklista

- [ ] Varje teknik placeras i en NICE ESF-risknivå, med evidens som krävs att matcha.
- [ ] Varje betydande beslut har både klinisk evidens och leveransevidens, hållna isär.
- [ ] En logisk modell finns före bygget, som namnger utfall och mått.
- [ ] Utvärderingsdesignen är proportionerlig mot risk (A/B och pragmatisk för låg; prövningar/RWE för hög).
- [ ] Verklighetsevidens och bevakning finns på plats för AI och långlivade tjänster.
- [ ] Det är kulturellt tryggt att fråga vilken beslutsfattare som helst ”vad är evidensen?”
- [ ] Varje betydande beslut fångas i en beslutslogg (vad, varför, evidens, vem, när).
- [ ] Dataanvändningen är laglig, samtyckesbaserad, proportionerlig och kontrollerad för bias och rättvisa.

## Viktiga källor

- NICE — *Evidence Standards Framework for digital health technologies (ESF)* (nice.org.uk).
- NHS England / NHSX — *Digital Technology Assessment Criteria (DTAC)*.
- MHRA — vägledning om *software and AI as a medical device*.
- Oxford Centre for Evidence-Based Medicine — *Levels of Evidence* (evidenshierarkin).
- HM Treasury — *The Magenta Book* (vägledning om utvärdering, logiska modeller och utvärderingsdesigner).
- MRC — ramverket *Developing and evaluating complex interventions*.
- Ron Kohavi m.fl. — *Trustworthy Online Controlled Experiments* (A/B-testning).
- Michael Nygard — *Architecture Decision Records* (mönstret beslutslogg).

## Referenser

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
