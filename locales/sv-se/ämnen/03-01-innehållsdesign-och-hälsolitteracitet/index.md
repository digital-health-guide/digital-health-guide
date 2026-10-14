# Ämne 3.1 — Innehållsdesign och hälsolitteracitet

**Inom hälsa och vård är orden och strukturen ni ställer framför en person en del av behandlingen, så innehåll som förvirrar, utesluter eller vilseleder är ett misslyckande för klinisk säkerhet och jämlikhet, inte ett kosmetiskt.**

## Varför detta är viktigt inom hälsa och vård

Det mesta av den digitala hälsotjänst en person faktiskt upplever är innehåll: ett brev, en skärm med instruktioner, en besökspåminnelse, ett samtyckesformulär, en uppsättning läkemedelsanvisningar, ett felmeddelande när en bokning misslyckas. Människor upplever inte er arkitektur, er datamodell eller er styrelse. De upplever orden, och om de orden hjälper dem att göra det de kom för att göra — boka, avboka, förstå ett provsvar, förbereda sig för ett ingrepp, ta ett läkemedel säkert, avgöra om de ska söka hjälp.

Insatserna är höga eftersom publiken per definition ofta är sjuk, orolig, trött, har ont, sörjer eller är i kris. Förståelsen sjunker under stress. En mening som läses bra för en policyförfattare på ett lugnt kontor kan vara oläslig för en rädd person klockan två på natten. Och glappet mellan hur innehåll skrivs och hur människor faktiskt läser är stort. I England har omkring fyra av tio vuxna i arbetsför ålder svårt med hälsoinformation som innehåller både text och tal; den andelen stiger kraftigt när tal är inblandade. Mycket klinisk information skrivs på flera läsåldrar över vad en stor del av befolkningen bekvämt kan använda.

Detta är inte en mindre användbarhetspunkt. Dålig förståelse är kopplad till missade besök, läkemedelsfel, undvikbara inläggningar, uteblivet deltagande i screening och sämre utfall överlag — och dessa skador drabbar hårdast människor som redan möter nackdelar, och fördjupar hälsoojämlikheter snarare än minskar dem. Om någon inte kan förstå hur man förbereder sig för en koloskopi är det kliniska ingreppet äventyrat innan det börjar. Om ett säkerhetsnätsbudskap (”kom tillbaka om du märker dessa symtom”) är begravt i jargong har säkerhetsnätet hål. Innehållsdesign är därför oskiljaktig från Ämne 1.6 — Klinisk säkerhet och riskhantering, från Ämne 1.9 — Digital inkludering och tillgänglighet och från forskningspraxisen i Ämne 3.0 — Användarforskning och tjänstedesign.

## Grundläggande begrepp

Innehållsdesign är en disciplin, populariserad av Storbritanniens [Government Digital Service](https://en.wikipedia.org/wiki/Government_Digital_Service) (GDS) och antagen av NHS Digital och NHS England, som behandlar skrivande som design: ni avgör vad en person behöver för att slutföra en uppgift och väljer sedan de ord, den ordning och det format som möter det behovet på enklaste sätt — vilket ibland är löpande text, men ofta en lista, en tabell, en steg-för-steg-anvisning eller inget innehåll alls. Den utgår från evidens om användarbehov snarare än från vad en organisation vill säga.

[Klarspråk (plain language)](https://en.wikipedia.org/wiki/Plain_language) — på engelska [plain English](https://en.wikipedia.org/wiki/Plain_English) — är skrivande vars ordval, struktur och utformning låter den avsedda läsaren hitta det den behöver, förstå det och använda det, vid första läsningen. Det är inte att ”förenkla ned”; det är precision som respekterar läsarens tid och ansträngning.

[Läsbarhet](https://en.wikipedia.org/wiki/Readability) är hur lätt en text kan förstås, och den kan skattas med formler såsom [Flesch–Kincaid-tester för läsbarhet](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests), som översätter meningslängd och ordkomplexitet till en ungefärlig läsålder eller skolnivå. Dessa formler är en användbar signal, inte en dom — de mäter ytlig svårighet, inte om innehållet är korrekt, sökbart eller användbart.

[Hälsolitteracitet (health literacy)](https://en.wikipedia.org/wiki/Health_literacy) är en persons förmåga att hitta, förstå och använda hälsoinformation och tjänster för att fatta beslut och agera. Det är inte ett fast personlighetsdrag; det är en relation mellan de krav ert innehåll ställer och de färdigheter, det sammanhang och det tillstånd personen har med sig. [Räknefärdighet (numeracy)](https://en.wikipedia.org/wiki/Numeracy) — förmågan att resonera med tal, risker, doser och datum — är en särskild och ofta svagare färdighet, vilket spelar enorm roll när ni kommunicerar sannolikheter, resultat eller läkemedelsmängder.

Tillgängligt innehåll är innehåll som fungerar för människor oavsett funktionsnedsättning eller kommunikationsbehov. Det styrs av [Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) (WCAG) för digitala produkter, och i NHS av Accessible Information Standard, som är ett lagkrav att identifiera, registrera och möta kommunikationsbehoven hos patienter och anhöriga. Tillgängliga format inkluderar [lättläst (easy read)](https://en.wikipedia.org/wiki/Easy_read) (korta meningar parade med bilder, för personer med intellektuell funktionsnedsättning), översättningar, stor stil, ljud och videor på [brittiskt teckenspråk (BSL)](https://en.wikipedia.org/wiki/British_Sign_Language) för döva vars förstaspråk är BSL, inte engelska.

[Hälsojämlikhet (health equity)](https://en.wikipedia.org/wiki/Health_equity) är principen att alla har en rättvis möjlighet att vara så friska som möjligt; innehåll som bara fungerar för självsäkra, digitalt inkluderade, engelsklästa användare vidgar aktivt klyftan och är därför en jämlikhetsfråga, och knyter detta ämne till förpliktelserna om [webbtillgänglighet](https://en.wikipedia.org/wiki/Web_accessibility) som gäller för alla offentliga organ.

## Bästa praxis

1. **Utgå från användarbehovet och uppgiften, inte budskapet.** Innan ni skriver något, var i stånd att ange, i en mening, vad personen försöker göra och vad den behöver veta för att göra det. Innehåll som finns för att skydda organisationen, lista varje förbehåll eller återge en policy är innehåll som sviker personen. Utforma det minsta som låter dem lyckas, och skär bort allt som inte tjänar den uppgiften.

2. **Skriv i klarspråk och kontrollera läsåldern.** Sikta på korta meningar, vanliga ord, aktiv form och en idé per mening. Använd läsbarhetsverktyg såsom Flesch–Kincaid eller SMOG som en snabb signal, med en målsättning på ungefär en läsålder på nio till elva för allmänt innehåll till allmänheten, lägre för innehåll med höga insatser eller kris. Behandla poängen som en brandvarnare, inte ett intyg — en text kan få goda poäng och ändå vara fel, tvetydig eller sakna det enda läsaren behövde.

3. **Sätt det viktigaste först, dela upp och strukturera för skumläsning.** Människor läser inte hälsoinnehåll linjärt; de skummar efter den del som gäller dem. Sätt den viktigaste informationen först, använd tydliga och ärliga rubriker, bryt innehållet i korta bitar och föredra listor och steg-för-steg-anvisningar framför täta stycken. Strukturerat innehåll — innehåll uppdelat i konsekventa, återanvändbara komponenter — gör också information lättare att översätta, återanvända över kanaler och hålla kliniskt korrekt på ett ställe.

4. **Utforma tal lika noggrant som ord.** Räknefärdighet är svagare än läsfärdighet i befolkningen, och tal bär innehållet med de mest konsekvensrika följderna: doser, frekvenser, risker och resultat. Använd naturliga frekvenser (”ungefär 1 av 10 personer”) snarare än nakna procenttal där ni kan, håll nämnare konsekventa, visa absolut såväl som relativ risk och låt aldrig läsaren göra huvudräkning för att vara säker. Testa numeriskt innehåll specifikt, eftersom en felläst dos är en direkt patientsäkerhetsskada.

5. **Anta en enda innehållsstil och återanvänd innehållsmönster.** En gemensam stilguide — NHS digital service manual-innehållets stilguide är referensstandarden i denna sektor — avgör tusentals små beslut (hur man skriver datum, telefonnummer, läkemedelsnamn, ”GP” kontra ”doctor”) så att skribenter inte uppfinner dem på nytt och läsare får konsekvens. Återanvändbara innehållsmönster för vanliga situationer (besökspåminnelser, provsvar, säkerhetsnät) höjer kvalitet och säkerhet i skala och minskar kostnaden för att få varje ny sida rätt.

6. **Uppfyll tillgänglighet och Accessible Information Standard som standard, inte på begäran.** Bygg till WCAG 2.2 AA, och behandla lättläst, översättningar, BSL-video, stor stil och ljud som del av tjänsten, inte en eftertanke som byggs på när någon klagar. Enligt Accessible Information Standard måste ni identifiera, flagga och möta kommunikationsbehov och dela dessa behov över vårdmiljöer — så tillgängligt innehåll är en rättslig och klinisk förpliktelse, inte ett trevligt-att-ha. Maskinöversättning kan hjälpa till vid triage men är inte säker för kliniskt innehåll utan mänsklig kontroll.

7. **Skriv för människor i stress, nöd eller kris.** Någon som läser om ett cancerbesked, en psykisk kris eller en sorg har mindre arbetsminne och mindre tålamod med en ton som är glättig, byråkratisk eller vag. Använd lugnt, direkt, mänskligt språk; säg vad som händer och vad man ska göra härnäst; gör vägen till akut hjälp omöjlig att missa; och ta bort allt som lägger till kognitiv belastning. Vänligt, tydligt innehåll i dessa stunder är en form av klinisk vård.

8. **Testa innehåll med verkliga och utestängda användare, och iterera.** Innehåll är en hypotes om vad som hjälper tills ni ser verkliga människor använda det. Kör förståelse- och uppgiftsbaserad testning — be människor tala om vad en sida betyder och vad de skulle göra — med ett urval som medvetet inkluderar människor med låg hälsolitteracitet, låg digital trygghet, intellektuell funktionsnedsättning och engelska som tilläggsspråk. Detta hänger direkt ihop med Ämne 3.0 — Användarforskning och tjänstedesign; innehåll som bara har godkänts av kliniker och jurister har inte testats.

## Frågor att diskutera med ditt team

1. **Vet vi faktiskt läsåldern och förståelsen för vårt innehåll med högst insatser, eller gissar vi?** De flesta organisationer kan inte säga vilken läsålder deras besöksbrev, samtyckesformulär eller läkemedelsinstruktioner är skrivna på, än mindre om patienter förstår dem. Välj era tio mest konsekvensrika innehållsdelar — de där missförstånd orsakar verklig skada — och mät dem: kör läsbarhetspoäng, men viktigare, kör förståelsetestning med verkliga användare. Be människor förklara, med egna ord, vad innehållet betyder och vad de skulle göra härnäst. Ni kommer vanligen att finna glapp mellan vad innehållet säger och vad människor tar med sig. Avgör vem som äger att stänga dessa glapp, och hur ni ska veta att de är stängda. Detta är en övning för klinisk säkerhet, inte språkgranskning.

2. **Vem får publicera innehåll, och vad hindrar osäkert eller otillgängligt innehåll från att gå live?** I många tjänster skrivs innehåll av den som råkar äga systemet — en utvecklare, en kliniker, en administratör — utan innehållsdesignkunskap, utan stilguide och utan tillgänglighetskontroll. Diskutera var innehåll sitter i er leveranslivscykel: är en innehållsdesigner involverad, finns en gemensam stilguide, finns ett granskningssteg som kontrollerar klarspråk och tillgänglighet före publicering? Beakta vad er motsvarighet till ett kliniskt säkerhetsgodkännande är för innehåll, och om det överhuvudtaget finns. Tala ärligt om avvägningen mellan hastighet och säkerhet, och om vem som är ansvarig när innehåll orsakar skada. Målet är en upprepbar väg till gott innehåll, inte hjältemod från individer.

3. **Hur betjänar vi de människor vårt innehåll för närvarande sviker, och mäter vi det?** Genomsnitt döljer utestängning: innehåll som fungerar för 80 % av användarna kan helt svika de 20 % som mest behöver tjänsten. Diskutera vilka grupper ert nuvarande innehåll utesluter — människor med låg läs- eller räknefärdighet, döva BSL-användare, människor som inte läser engelska, människor med intellektuell funktionsnedsättning, människor i kris — och om ni tillhandahåller lättläst, översättningar, BSL-video och alternativa format som standard. Fråga om ni uppfyller Accessible Information Standard i praktiken, inte bara på papperet. Beakta hur ni ens skulle upptäcka att en grupp utesluts, givet att de kanske helt enkelt faller bort i tysthet. Kom överens om vad ni ska mäta och vem som företräder dessa användare när beslut fattas, kopplat till Ämne 1.9 — Digital inkludering och tillgänglighet.

4. **När innehåll och klinisk träffsäkerhet drar åt motsatta håll, hur avgör vi?** Klarspråk och klinisk precision är vanligen allierade, men ibland konfliktar de: en kliniker insisterar på en teknisk term för exakthetens skull, juristerna vill ha ett förbehåll som förlänger och grumlar budskapet, eller en säkerhetsnätsinstruktion måste namnge ett symtom läsaren kanske inte förstår. Om ni alltid underkastar er klinikern eller juristen kommer ni att publicera innehåll människor inte kan använda; om ni alltid förenklar riskerar ni att skala bort en distinktion som håller någon säker. Diskutera hur ni löser dessa spänningar i praktiken — vem som är i rummet, vilken evidens som avgör och om förståelsetestning får åsidosätta en experts preferens. Beakta konkreta fall: att omformulera en läkemedelsinstruktion, mjuka upp en hotande varning för uteblivet besök eller förklara en riskfigur. Ett ärligt svar namnger en beslutsprocess, inte en standardvinnare, och visar att både förståelse och klinisk korrekthet behandlas som säkerhetskrav snarare än att den ena är ett trevligt-att-ha.

5. **Vem äger innehållet efter att det publicerats, och hur håller vi det korrekt när kliniska riktlinjer ändras?** Innehåll behandlas ofta som färdigt vid lansering, men en läkemedelsanvisning, ett screeningintervall eller en remissväg kan bli farligt fel när kliniska riktlinjer eller ett vårdförlopp ändras och ingen uppdaterar orden. Diskutera om varje innehållsdel med höga insatser har en namngiven ägare, en granskningscykel och ett sätt att hitta och rätta alla ställen där ett faktum förekommer — eller om samma påstående kopieras över brev, portaler och broschyrer utan en enda källa till sanning. Fråga vad som händer när en riktlinje ändras: vem får veta, hur snabbt följer innehållet och hur skulle ni ens veta att en sida hade blivit inaktuell. Beakta om strukturerat, återanvändbart innehåll skulle låta er ändra något en gång i stället för att jaga varje kopia. Ett ärligt svar konfronterar den oglamorösa verkligheten att det mesta av innehållet förfaller i tysthet, och anger hur ni upptäcker och förhindrar det förfallet.

6. **Behandlar vi AI-genererat och AI-översatt innehåll med den försiktighet patientsäkerheten kräver?** Team frestas alltmer att utkasta patientinnehåll, sammanfatta klinisk information eller översätta i skala med stora språkmodeller, eftersom det är snabbt och billigt. Faran är att flytande, självsäkra utdata maskerar fel som en stressad läsare kommer att agera på — en felaktig dos, en påhittad försäkran, en feloversatt instruktion — och det engelsktalande teamet ser aldrig misstaget. Diskutera var, om någonstans, ni tillåter genererat eller maskinöversatt innehåll, och vilken mänsklig klinisk och språklig kontroll som är obligatorisk innan det når en patient. Beakta skillnaden mellan att använda AI för att triagera eller utkasta internt och att använda den för att publicera ogranskat innehåll som talar om för någon vad de ska göra åt sin hälsa. Ett ärligt svar drar en tydlig gräns, namnger vem som är ansvarig för kontrollen och behandlar en overifierad maskinutdata på samma sätt som ni skulle behandla en okvalificerad person som skriver kliniska instruktioner.

## I praktiken: ett exempel från hälsa och vård

En integrerad vårdnämnd (integrated care board) rullar ut en digital tjänst som låter patienter boka sina egna uppföljningsbesök efter en sjukhusmottagning. Den första versionen byggs snabbt. Bekräftelseskärmen lyder: ”Din besöksbegäran har skickats in och väntar på klinisk validering. Observera att DNA-policy gäller.” Påminnelsemeddelandet lyder: ”Du har ett bes. på Ambulatoriska enheten ang. ditt senaste besök. Uteblivet besök kan leda till avskrivning enligt sjukhusets policy.”

Inom några veckor märker teamet ett mönster. Närvaron för denna kohort är sämre än för brev, inte bättre. Användarforskare och en innehållsdesigner sätter sig med femton patienter, medvetet inklusive två personer med intellektuell funktionsnedsättning, en döv BSL-användare, en person som läser lite engelska och flera äldre patienter med långvariga tillstånd. Fynden är påtagliga. Nästan ingen vet vad ”DNA” eller ”ambulatorisk” betyder; flera antar att ”DNA” syftar på ett gentest. ”Väntar på klinisk validering” får människor att tro att besöket inte är bekräftat, så de lägger inte in det i kalendern. Hotet om avskrivning skrämmer människor utan att tala om vad de ska göra. Den döva patienten engagerade sig aldrig i tjänsten alls, eftersom det inte fanns någon BSL-video som förklarade den och texten förutsatte flytande skriven engelska.

Innehållsdesignern skriver om mot NHS innehållsstilguide och testar varje version. Bekräftelsen blir: ”Ditt besök är bokat. Vi skickar en påminnelse. Om du behöver ändra det, tryck på ’Ändra besök’ eller ring 0300 000 0000.” Påminnelsen blir: ”Påminnelse: ditt besök är tisdagen den 12 augusti klockan 14.00 på St Mary's Hospital, Mottagning 4. Om du inte kan komma, tala om det för oss så att vi kan erbjuda tiden till någon annan: [länk].” Läsåldern sjunker från omkring femton till omkring nio. Teamet lägger till en lättläst version, en uppsättning översatta versioner kontrollerade av mänskliga översättare och en kort BSL-video som förklarar hur bokningen fungerar. De lägger till ett granskningssteg för klinisk säkerhet för allt innehåll som talar om för en patient vad den ska göra åt sin hälsa.

Tre månader senare har uteblivna besök i kohorten fallit under brevbaslinjen, klagomålen har minskat och den döva patienten har använt tjänsten självständigt för första gången. Den kliniska säkerhetsansvarige registrerar innehållsändringarna som en riskkontroll i tjänstens säkerhetsunderlag. Orden var insatsen.

## Sektorperspektiv

### Startup-företag

Ett hälsotekniskt startup-företag kan bygga in innehållskvalitet i sitt DNA billigt, eftersom det inte har något äldre innehåll att reda ut och kan anställa eller kontraktera en innehållsdesigner tidigt. Risken är att grundare behandlar innehåll som marknadsföringstext — övertygande, varumärkeskonsekvent, nyttofokuserad — snarare än som uppgiftsfokuserad design för människor som kan vara sjuka. Anta NHS innehållsstilguide från dag ett, sätt ett läsåldersmål och lägg in förståelsetestning i era användbarhetssessioner från den första prototypen. Om ni eftersträvar NHS- eller offentliga kontrakt är WCAG 2.2 AA och Accessible Information Standard inträdeskrav, inte särskiljande drag, så bygg till dem nu i stället för att eftermontera under upphandlingstryck.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem, en hemtjänstorganisation, en klinik på en enda ort eller en liten hälsotekniksleverantör som passerat startfasen — har verkliga patienter och samma rättsliga plikter som ett sjukhus, men ingen innehållsdesigner, ingen stilguide och ofta en person som sköter IT vid sidan av ett annat jobb. Den praktiska risken är att brev, samtyckesformulär, sms och webbinnehåll skrivs av den som har tid, i lokal jargong, och att lättläst, översättningar och BSL helt enkelt inte erbjuds, vilket i tysthet bryter mot Accessible Information Standard. Ni behöver inte bygga förmåga från grunden: anta den kostnadsfria NHS innehållsstilguiden och återanvänd dess färdiga mönster i stället för att skriva från ett blankt papper, och använd NHS vägledning om läsålder och tillgänglighet som er checklista. Prioritera er handfull poster med högst insatser — läkemedelsinstruktioner, besöks- och säkerhetsnätsmeddelanden — och få dessa i klarspråk och tillgängliga format först, med översättare från gemenskapen eller den frivilliga sektorn för era lokala språk snarare än okontrollerad maskinöversättning.

### Storföretag

En stor vårdgivare eller leverantör har tusentals innehållsdelar utspridda över brev, portaler, appar, broschyrer och tredjepartssystem, skrivna av många händer under många år utan gemensam stil. Storföretagsproblemet är konsekvens och styrning i skala: samma läkemedel eller tillstånd beskrivet på fem olika sätt, översättningar gjorda ad hoc, lättläst framställt reaktivt. Investera i en enda innehållsstil, ett bibliotek av återanvändbara innehållsmönster, en innehållsdesignförmåga som stödjer leveransteam och ett publiceringsflöde med tillgänglighets- och kliniska säkerhetskontroller inbyggda. Behandla innehåll med höga insatser — samtycke, läkemedel, provsvar, säkerhetsnät — som en förvaltad tillgång med namngivna ägare, versionshantering och en granskningscykel, på samma sätt som ni skulle behandla kliniska protokoll.

### Staten

Nationella organ och systemorgan sätter de standarder alla andra ärver, så deras innehållsbeslut får hävstång över miljontals interaktioner. GDS- och NHS-arvet — servicemanualen, innehållsstilguiden, Accessible Information Standard, WCAG-förpliktelserna enligt Public Sector Bodies Accessibility Regulations — finns just för att kvalitet och jämlikhet ska bakas in i offentliga tjänster snarare än överlåtas åt slumpen. Statens uppgift är att upprätthålla dessa gemensamma standarder, tillhandahålla återanvändbara mönster och komponenter, föreskriva tillgängliga format och hålla tjänster ansvariga genom utgiftskontroller och kvalitetssäkring. Felmönstret är att utfärda vägledning utan förmågan, verktygen eller finansieringen för frontlinjeteam att uppfylla den, vilket producerar innehåll som är förenligt på papperet men ändå utesluter människor.

## Vanliga felmönster

- **Att skriva för organisationen, inte läsaren.** Innehåll som listar varje förbehåll, skyddar institutionen eller återger policy, i stället för att hjälpa personen slutföra sin uppgift.
- **Jargong och oförklarade akronymer.** ”DNA”, ”ambulatorisk”, ”triage”, ”remissväg”, ”klinisk validering” — insiderspråk som läsare antingen missförstår eller finner alienerande.
- **Att förvirra läsaren med tal.** Nakna procenttal, inkonsekventa nämnare, relativ risk utan absolut risk och doser eller datum som tvingar läsaren att räkna.
- **Tillgänglighet som eftertanke.** Lättläst, översättningar och BSL framställda reaktivt, på begäran eller inte alls — vilket bryter mot Accessible Information Standard och utesluter de människor som mest behöver tjänsten.
- **Ingen innehållsdesign i teamet.** Innehåll skrivet av den som äger systemet, utan stilguide, utan kunskap om klarspråk och utan granskning, så att kvaliteten beror på tur.
- **Godkänt men aldrig testat.** Innehåll godkänt av kliniker och jurister för träffsäkerhet och risk, men aldrig sett i händerna på en verklig, icke-expert, stressad användare.
- **Att skrämma människor utan att hjälpa dem.** Hot (”du kan skrivas av”) och varningar utan en tydlig, lugn nästa handling, särskilt skadligt vid nöd eller kris.
- **Maskinöversättning använd okontrollerat för kliniskt innehåll,** som producerar fel som är osynliga för det engelsktalande team som publicerade det.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Klarspråk och läsålder | Innehåll skrivet ad hoc av systemägare; ingen medvetenhet om läsålder | Vissa skribenter utbildade; läsbarhet kontrolleras ibland | Stilguide antagen; läsåldersmål satta för innehållstyper | Läsålder följs mot mål över innehållstyper; resultat redovisas och förvaltas aktivt av namngivna ägare | Läsålder mäts och förbättras kontinuerligt; innehållsdesigners inbäddade i team |
| Tillgänglighet och alternativa format | Inget lättläst, inga översättningar eller BSL; täta WCAG-fel | Format framställs reaktivt på begäran; partiell WCAG-efterlevnad | Accessible Information Standard uppfylls; WCAG 2.2 AA som standard | Tillgänglighetsöverensstämmelse och formattäckning granskas och kvalitetssäkras, med glapp följda och stängda mot mål | Tillgängliga format samdesignade med de gemenskaper de betjänar; behov delas över vårdmiljöer |
| Räknefärdighet och riskkommunikation | Tal kopierade ur kliniska källor oredigerade | Viss insats för att förenkla procenttal | Standarder för att uttrycka risk, dos och resultat i stilguiden | Efterlevnad av standarder för räknefärdighet mäts och verkställs; förståelse av risk och dos följs som ett säkerhetsmått | Numeriskt innehåll testas rutinmässigt med användare med låg räknefärdighet |
| Testning med användare | Innehåll godkänns endast internt | Enstaka användbarhetstestning av visst innehåll | Förståelsetestning är rutin, inklusive utestängda användare | Förståelse- och utestängningsmått följs mot mål och granskas i styrningen | Kontinuerlig testning driver iteration; utestängning upptäcks och stängs aktivt |
| Styrning och säkerhet | Vem som helst kan publicera; ingen granskning | Redaktionell granskning finns men är inkonsekvent | Publiceringsflöde med tillgänglighets- och kliniska säkerhetskontroller | Publiceringskontroller kvalitetssäkras och granskas; innehållsrisker loggas och förvaltas som säkerhetskontroller med nyckeltal | Innehåll behandlas som en säkerhetskritisk tillgång med ägare, versionshantering och granskning |

## Checklista

- [ ] Ni kan ange användarbehovet och uppgiften varje innehållsdel tjänar i en mening.
- [ ] Ert innehåll med högst insatser är skrivet i klarspråk och kontrollerat mot ett läsåldersmål (omkring nio till elva, lägre för krisinnehåll).
- [ ] Tal, doser, risker och datum uttrycks så att ingen läsare behöver räkna för att vara säker.
- [ ] Ni använder NHS digital service manual-innehållets stilguide (eller en dokumenterad motsvarighet) och ett bibliotek av återanvändbara innehållsmönster.
- [ ] Innehållet uppfyller WCAG 2.2 AA och Accessible Information Standard, med lättläst, översättningar, BSL-video och alternativa format tillgängliga som standard.
- [ ] Översättningar av kliniskt innehåll kontrolleras av kvalificerade mänskliga översättare, inte enbart maskinöversättning.
- [ ] Innehåll med höga insatser har ett granskningssteg för klinisk säkerhet innan det går live.
- [ ] Innehållet förståelsetestas med verkliga användare, inklusive människor med låg hälsolitteracitet, låg digital trygghet, intellektuell funktionsnedsättning och engelska som tilläggsspråk.
- [ ] Det finns ett definierat publiceringsflöde; inte alla kan skicka innehåll live ogranskat.
- [ ] Ni mäter om innehållet utesluter specifika grupper, och ni har namngivna ägare för att stänga dessa glapp.

## Viktiga källor

- NHS digital service manual — innehållsstilguide, vägledning om tillgänglighet och innehållsmönster (service-manual.nhs.uk).
- GOV.UK:s vägledning om innehållsdesign och Government Digital Services stilguide (gov.uk).
- NHS England — Accessible Information Standard (DCB1605), den rättsliga standarden för att möta patienters kommunikationsbehov.
- Web Content Accessibility Guidelines (WCAG) 2.2, W3C Web Accessibility Initiative.
- Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.
- Health Education England / NHS — resurser om hälsolitteracitet och ”hur man gör”-guider för att göra information begriplig.
- Institute of Medicine / WHO — grundläggande rapporter om hälsolitteracitet och dess koppling till utfall och ojämlikheter.
- British Sign Language Act 2022.

## Referenser

1. Health literacy — Wikipedia — https://en.wikipedia.org/wiki/Health_literacy
2. Plain language — Wikipedia — https://en.wikipedia.org/wiki/Plain_language
3. Plain English — Wikipedia — https://en.wikipedia.org/wiki/Plain_English
4. Numeracy — Wikipedia — https://en.wikipedia.org/wiki/Numeracy
5. Readability — Wikipedia — https://en.wikipedia.org/wiki/Readability
6. Flesch–Kincaid readability tests — Wikipedia — https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests
7. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
8. Web accessibility — Wikipedia — https://en.wikipedia.org/wiki/Web_accessibility
9. Easy read — Wikipedia — https://en.wikipedia.org/wiki/Easy_read
10. British Sign Language — Wikipedia — https://en.wikipedia.org/wiki/British_Sign_Language
11. Government Digital Service — Wikipedia — https://en.wikipedia.org/wiki/Government_Digital_Service
12. Health equity — Wikipedia — https://en.wikipedia.org/wiki/Health_equity
13. NHS digital service manual — content style guide — NHS England — https://service-manual.nhs.uk/content
14. Content design: planning, writing and managing content — Government Digital Service — https://www.gov.uk/guidance/content-design
15. Accessible Information Standard (DCB1605) — NHS England — https://www.england.nhs.uk/about/equality/equality-hub/patient-equalities-programme/equality-frameworks-and-information-standards/accessibleinfo/
16. Web Content Accessibility Guidelines (WCAG) 2.2 — W3C Web Accessibility Initiative — https://www.w3.org/TR/WCAG22/
17. The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 — legislation.gov.uk — https://www.legislation.gov.uk/uksi/2018/952/contents/made
18. British Sign Language Act 2022 — legislation.gov.uk — https://www.legislation.gov.uk/ukpga/2022/34/contents
