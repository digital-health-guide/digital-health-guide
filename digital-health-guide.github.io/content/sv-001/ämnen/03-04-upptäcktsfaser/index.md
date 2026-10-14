# Ämne 3.4 — Upptäcktsfaser

**I en mening:** Upptäckt (discovery) är den disciplinerade, tidsbegränsade insatsen att förstå era användare och det verkliga problemet *innan* ni förbinder pengar, klinisk risk eller anseende till att bygga en lösning.

## Varför detta är viktigt inom hälsa och vård

I de flesta sektorer innebär det att bygga fel sak slöseri med pengar. Inom hälsa och vård kan det också slösa klinisk tid, befästa hälsoojämlikheter och — i det yttersta fallet — skada patienter. En digital tjänst som förutsätter att varje användare har en smartphone, pålitligt bredband och trygg engelska utesluter i tysthet de skröpliga, de fattiga och de [digitalt marginaliserade](https://en.wikipedia.org/wiki/Digital_divide): just de människor som NHS och socialtjänsten finns till för. Upptäckt är där ni får reda på det till priset av några veckors forskning, i stället för efter en nationell utrullning.

Pengar till hälsa och vård är offentliga medel som förvaltas i förtroende, och mycket av det flödar genom lagstadgade plikter: [NHS Constitution](https://en.wikipedia.org/wiki/NHS_Constitution_for_England), den offentliga sektorns jämlikhetsplikt enligt [Equality Act 2010](https://en.wikipedia.org/wiki/Equality_Act_2010) och Caldicott-principerna för hantering av konfidentiell patientinformation. Upptäckt är den fas där ni prövar om en föreslagen tjänst är *behövd*, *laglig*, *säker* och *jämlik* — innan de frågorna blir dyra att besvara. Att hoppa över den tar inte bort frågorna; den skjuter dem bara till en tidpunkt då det ärliga svaret är politiskt omöjligt att acceptera.

NHS Digital Service Standard och GOV.UK Service Manual gör båda upptäckt till den obligatoriska första fasen för varje användarvänd digital tjänst av exakt detta skäl. Det är inte byråkratisk teater. Det är den billigaste försäkring ni någonsin kommer att köpa.

## Grundläggande begrepp

**Upptäckt, definierad.** Upptäckt är en kort (vanligen 6–10 veckor) fas vars mål är att förstå ett problemområde: vilka användarna är, vad de försöker göra, vad som hindrar dem, vad som redan finns och om det över huvud taget finns ett problem värt att lösa. Dess resultat är *förståelse och evidens*, inte en produkt. En god upptäckt kan med fog dra slutsatsen ”gör ingenting” eller ”detta är ett policyproblem, inte ett digitalt”.

**Double Diamond.** [Design Councils](https://en.wikipedia.org/wiki/Design_Council) [Double Diamond](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)) (2005) ramar in design som två länkade diamanter. Den första — **upptäck** och sedan **definiera** — divergerar för att utforska problemet brett och konvergerar sedan för att ramma in det precist. Den andra — **utveckla** och sedan **leverera** — divergerar för att utforska lösningar och konvergerar sedan för att bygga en. Upptäckt, som leveransfas, ligger nästan helt i den första diamanten. Det återkommande felet är team som rusar in i den andra diamanten innan den första är färdig.

**Användarbehov kontra intressentönskemål.** Ett *användarbehov* är något en person försöker åstadkomma, uttryckt ur deras synvinkel (”jag behöver veta att mitt besök är bekräftat så att jag inte tar ledigt en dag för ingenting”). Ett *intressentönskemål* är en funktion eller lösning någon redan har bestämt sig för (”vi behöver en app”). Upptäcktens kärndisciplin är att översätta önskemål tillbaka till behov, eftersom behov är stabila och lösningar är billiga och utbytbara när behovet väl är klart.

**Problemformulering.** Hur ni formulerar ett problem begränsar varje lösning ni kommer att överväga. ”Patienter missar besök” inbjuder till en påminnelseapp. ”Patienter kan inte enkelt boka om besök som inte längre passar dem” inbjuder till självbetjäning vid ombokning. Samma symtom, olika problem, radikalt olika tjänst. Upptäckt förtjänar sin plats till stor del i kvaliteten på det [problemuttalande](https://en.wikipedia.org/wiki/Problem_statement) den producerar.

**Antaganden, hypoteser och evidens.** Varje projekt vilar på antaganden. Upptäckt gör dem explicita, rangordnar dem efter risk och prövar de riskablaste med verkliga användare. Målet är inte säkerhet — det är ouppnåeligt — utan *minskad osäkerhet kring det som skulle sänka projektet*.

## Bästa praxis

1. **Utgå från ett problem, inte en lösning.** Skriv problemuttalandet innan någon namnger en teknik. Om finansieringsansökan, styrelsehandlingen eller leverantörens pitch redan anger ”en app” eller ”en portal”, behandla det som ett antagande att testa, inte ett beslut att genomföra. Lösningar som landat före problemet förståtts är nästan alltid någons vana, inte användarens behov.

2. **Gör verklig [användarforskning](https://en.wikipedia.org/wiki/User_research) med verkliga användare.** Intervjua och observera de faktiska människor som ska använda tjänsten — patienter, anhöriga, receptionister, distriktssköterskor, socialarbetare — i deras verkliga sammanhang, inte en workshop med chefer som talar å deras vägnar. Sikta på djup framför volym; ett dussin väl valda [kontextuella intervjuer](https://en.wikipedia.org/wiki/Contextual_inquiry) avslöjar mer än en enkät med tusen svar. Rekrytera medvetet de användare som är svårast att nå, eftersom det är dem en tjänst oftast sviker.

3. **Kartlägg hela tjänsten, inte den digitala skivan.** Användare upplever en tjänst från början till slut — en remiss, en bedömning, en behandling, en uppföljning — varav er digitala komponent är ett steg. Kartlägg den nuvarande resan över varje kanal och organisation, inklusive pappers-, telefon- och ansikte-mot-ansikte-delarna. Digitala förändringar misslyckas rutinmässigt för att de optimerar ett steg och förstör de två på var sida.

4. **Formulera problemet uttryckligen och få det godkänt.** Ta fram ett skriftligt problemuttalande och evidensen bakom det, och säkra ett uttryckligt godkännande från er högre sponsor. Denna artefakt är ert kontrakt: den definierar vad ”klart” betyder för de kommande faserna och ger er ställning att säga nej till omfång som inte tjänar det överenskomna problemet.

5. **Dimensionera möjligheten och risken ärligt.** Uppskatta hur många som berörs, hur illa och vad det kostar systemet i dag. Para detta med de risker en lösning skulle föra in — kliniska, informationsstyrning, jämlikhet, leverans. Ledare finansierar upptäckter; de *beslutar* på grundval av en försvarbar bild av möjlighet och risk, så ge dem en.

6. **Utforma för kanterna från dag ett.** Rekrytera forskningsdeltagare över hela spektrumet av digital inkludering, testa mot förväntningarna i [Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) (WCAG 2.2 AA) tidigt och behandla assisterade digitala och offlinevägar som förstklassiga, inte eftertankar. Inom hälsa och vård är den uteslutna användaren ofta användaren med högt behov; en tjänst som bara fungerar för de självsäkra och uppkopplade vidgar ojämlikheten.

7. **Håll den tvärdisciplinär och tidsbegränsad.** Bemanna upptäckten med en användarforskare, en tjänstedesigner, en produktperson, en teknisk arkitekt och — för allt som berör vård — klinisk input och input från informationsstyrning. Tidsbegränsa hårt (veckor, inte kvartal) för att tvinga fram konvergens. En öppen upptäckt utan slut är ett varningstecken på att teamet undviker ett beslut.

8. **Skriv ned vad som skulle få er att stanna.** Kom överens, i början, om de villkor under vilka den ärliga rekommendationen skulle vara ”gå inte vidare”: inget genuint användarbehov, ett oöverstigligt hinder för informationsstyrning eller säkerhet, en bättre icke-digital lösning eller ett problem som ägs av ett annat team. En upptäckt som *inte kan* rekommendera att stanna är ingen upptäckt; det är ett förhandsrättfärdigat bygge.

## Frågor att diskutera med ditt team

1. **Vad skulle vi behöva se i upptäckten för att ärligt rekommendera ”gå inte vidare”, och har någon i detta rum ställningen att säga det?**
   Stoppvillkor är värdelösa om de inte kan utövas, och inom hälsa och vård är trycket att inte utöva dem intensivt: en direktör har tillkännagivit appen, ett leverantörsavtal är halvsignerat eller ett finansieringsfönster stängs om teamet tvekar. Frågan tvingar ett team att namnge den specifika evidens — inget genuint användarbehov, ett oöverstigligt hinder för informationsstyrning eller klinisk säkerhet, en bättre icke-digital lösning, ett problem som ägs av en annan tjänst — som skulle vända rekommendationen till att stanna, och att skriva ned den innan forskningen börjar så att den inte i tysthet kan omdefinieras senare. Spänningen värd att debattera är den mellan sponsorns tillförsikt och forskarens oberoende: en upptäckt som strukturellt inte kan säga nej är ett förhandsrättfärdigat bygge i upptäcktens kläder. Beakta vem som skyddar forskarens fynd från redigering, om en utomstående granskar evidensen och vad den sista upptäckt er organisation faktiskt stoppade var — om det inte finns någon är det i sig ett fynd. Ett ärligt svar identifierar de verkliga skälen till att ”nej” är svårt här och en konkret mekanism (överenskomna stoppkriterier, en oberoende utmaning, en sponsor som offentligt välsignat möjligheten att stanna) som gör det sägbart.

2. **Vilka är de användare vi mest sannolikt utesluter, och hur får vi in dem i forskningen i stället för att skjuta upp dem till beta?**
   Inom hälsa och vård är den uteslutna användaren — de skröpliga, de digitalt marginaliserade, personen med låg tillit till sin engelska, den anhöriga som jonglerar tre system — oproportionerligt ofta den användare med högt behov som tjänsten finns till för, så att sampla för bekvämlighet bygger i tysthet in ojämlikhet i arkitekturen. Avvägningen att debattera är djup och inkludering kontra tidsplan och rekryteringskostnad: att nå de svårast nåbara tar tid, gemenskapspartner, incitament och assisterade eller offline-forskningsmetoder som en forcerad upptäckt frestas hoppa över ”tills vidare”. Konkreta vinklar inkluderar att uttryckligen kartlägga spektrumet av digital inkludering, rekrytera via den frivilliga sektorn och kliniska grindvakter snarare än en e-postlista och behandla assisterade digitala och icke-digitala vägar som förstklassiga fynd snarare än eftertankar. Det är värt att namnge den offentliga sektorns jämlikhetsplikt och Caldicott-sammanhanget så att inkludering förstås som en rättslig och etisk förpliktelse, inte en artighet. Ett bra svar producerar en namngiven rekryteringsplan som medvetet överrepresenterar kanterna, och ett tydligt uttalande om vilka användare teamet kommer att behandla som designens tyngdpunkt.

3. **Har vi formulerat ett problem, eller har vi smugit in en lösning i problemuttalandet?**
   Hur ett problem uttrycks begränsar i tysthet varje lösning teamet kommer att överväga — ”patienter glömmer besök” inbjuder till en påminnelseapp, medan ”patienter kan inte enkelt boka om besök som inte längre passar dem” inbjuder till självbetjäning vid ombokning och en översyn av tidspolicyn — så formuleringen av problemuttalandet är där upptäckten förtjänar det mesta av sin plats. Debatten gäller om finansieringsansökan, styrelsehandlingen eller leverantörens pitch redan har fastslagit svaret (”en app”, ”en portal”, ”ett AI-triageverktyg”) och klätt det som ett behov, och om teamet har disciplinen att översätta det önskemålet tillbaka till det underliggande användarmålet. Användbara vinklar inkluderar att förbjuda lösningssubstantiv i problemuttalandet, att kartlägga hela tjänsten från början till slut över varje kanal och organisation så att den digitala skivan ses i sitt sammanhang och att kontrollera att varje angivet behov uttrycks ur användarens synvinkel snarare än organisationens. Evidens spelar roll här: en ramning bör kunna spåras till vad verkliga användare sa och gjorde, inte till en vana eller en strategibild. Ett ärligt svar bekräftar antingen att uttalandet namnger ett stabilt användarbehov med evidens bakom, eller erkänner att en lösning har antagits och öppnar ramningen på nytt innan någon alfa avgränsas.

4. **Har vi rätt discipliner i rummet, och formar klinisk säkerhet och informationsstyrning arbetet snarare än att godkänna det i slutet?**
   En upptäckt bemannad enbart av en produktchef och en leveransansvarig kommer att hitta produkt- och leveransproblem; de användare, kliniker och rättsliga plikter den aldrig bjuder in i rummet blir de risker som dyrt dyker upp i alfa eller, värre, efter driftsättning. Spänningen är att ett genuint tvärdisciplinärt team — användarforskare, tjänstedesigner, teknisk arkitekt, klinisk säkerhetsansvarig, kompetens inom informationsstyrning och Caldicott — är knappt, eftertraktat och långsamt att sammankalla, så team frestas ”låna” en kliniker för en timme eller klistra på informationsstyrning som en slutlig grind. Den sekvenseringen är fällan: klinisk säkerhet och informationsstyrning är billiga att designa in under ramningen och ruinerande dyra att eftermontera när en arkitektur förutsätter att data flödar över organisationsgränser. Konkreta vinklar inkluderar att namnge en klinisk säkerhetsansvarig från vecka ett för allt som berör vård, att behandla en konsekvensbedömning avseende dataskydd (DPIA) som en levande upptäcktsartefakt snarare än en senare formalitet och att kontrollera om de som förstår frontlinjens arbetsflöde är bidragsgivare eller bara remissinstanser. Ett ärligt svar namnger vem som faktiskt ingår i teamet, vilka plikter som representeras av en person snarare än en kryssruta och var upptäckten skulle vara blind eftersom en disciplin saknas.

5. **Hur ska vi veta att upptäckten är klar, och vad hindrar den från att driva i månader eller kapas efter fjorton dagar?**
   Upptäckt har två motsatta felmönster och båda handlar om tid: den obegränsade studien som kartlägger allt och avgör ingenting, och den stympade fjortondagarsfasen som rusar mot en given slutsats eftersom ett leveransdatum fastställdes innan forskningen började. Den disciplin Double Diamond kräver är konvergens — att veta när problemet är tillräckligt förstått för att fatta ett försvarbart beslut, inte när varje fråga är besvarad, eftersom säkerhet är ouppnåelig och målet är minskad osäkerhet kring det som skulle sänka projektet. Avvägningen värd att debattera är djup kontra fart: en hård tidsram på veckor tvingar teamet att prioritera de riskablaste antagandena, men en ram satt för snävt svälter den inkluderande, svårnådda forskning som denna domän mest behöver. Användbara vinklar inkluderar att komma överens om det beslut upptäckten måste informera och de artefakter en sponsor behöver för att fatta det, att rangordna antaganden så att ramen spenderas på det som spelar roll och att namnge en beslutspunkt i stället för att låta fasen rinna ut i en oerkänd alfa. Ett ärligt svar anger hur lång ramen är, hur ”tillräckligt förstått” ser ut för detta problem och vem som avgör slutet.

6. **När upptäckten tar slut, kan vi lämna en finansieringsstyrelse en försvarbar bild av möjligheten och risken — eller bara en berättelse?**
   Ledare finansierar inte förståelse; de finansierar beslut, och en upptäckt som producerar rik insikt men ingen styrelseläsbar redogörelse för hur många som berörs, hur illa, vad det kostar systemet i dag och vad en lösning skulle riskera lämnar beslutet åt den som berättar den mest självsäkra historien. Spänningen är mellan forskarens nyanserade, förbehållsfyllda fynd och styrelsens behov av ett dimensionerat, jämförbart, försvarbart underlag — komprimerar ni för hårt förlorar ni de nyanser om jämlikhet och säkerhet som var poängen; vägrar ni komprimera når evidensen aldrig dem som fördelar pengarna. Inom hälsa och vård måste bilden para möjlighet med de risker en lösning för in — kliniska, informationsstyrning, jämlikhet, leverans — eftersom en styrelse som bara ser uppsidan sätts upp för att göra ett dåligt spel. Konkreta vinklar inkluderar att dimensionera den berörda populationen utifrån verkliga data snarare än en hoppfull uppskattning, att göra fynd spårbara så att en skeptiker kan följa dem tillbaka till vad användare sa och att formulera rekommendationen (inklusive ”gå inte vidare” eller ”alfa denna smalare sak”) i termer nästa fas kan agera på. Ett ärligt svar visar att teamet kan gå från evidens till en rekommendation som en finansieringsstyrelse kan granska öppet utan att den faller samman.

## I praktiken: ett exempel från hälsa och vård

Ett integrerat vårdsystem (ICS) är under press att minska andelen uteblivna besök (did-not-attend, DNA) på öppenvårdsmottagningar. En leverantör har pitchat en AI-driven påminnelseapp, och en direktör är ivrig att finansiera den. I stället för att köpa kör ICS en åtta veckor lång upptäckt.

Användarforskaren intervjuar arton patienter som nyligen missat besök, plus receptionister och två mottagningschefer. Ett mönster framträder som påminnelseteorin missade: många ”no-shows” hade *försökt* boka om men mötte en upptagen telefonlinje i dagar, eller hade fått en tid under arbetstid som de inte kunde ta utan att förlora lön. En delmängd hade avlidit eller blivit inlagd någon annanstans och stod fortfarande på listan. Påminnelser skulle inte beröra någon av dessa orsaker.

Teamet kartlägger bokningsresan från början till slut och finner tre organisationer, två patientadministrativa system och en faxmaskin i kedjan. De omformulerar problemet från ”patienter glömmer besök” till ”patienter kan inte enkelt nå oss för att boka om besök som inte längre fungerar för dem”. De kvantifierar det: ungefär 40 % av DNA vid de provtagna mottagningarna involverade ett misslyckat tidigare kontaktförsök. De flaggar en fråga om informationsstyrning (ett delat ombokningsverktyg skulle korsa organisationsgränser) och ett jämlikhetsfynd (de högsta DNA-andelarna fanns bland patienter i de mest utsatta postnummerområdena, för vilka arbetstidstiden var hindret).

Upptäckten rekommenderar *mot* appen, och *för* en alfa som utforskar självbetjäning vid ombokning plus en översyn av tidsbokningspolicyn. Det omformulerade problemet godkänns av sponsorn, en klinisk säkerhetsansvarig utses för alfan och en [konsekvensbedömning avseende dataskydd](https://en.wikipedia.org/wiki/Privacy_impact_assessment) beställs. ICS har spenderat åtta veckor och undvikit att finansiera en lösning som påvisbart skulle ha misslyckats offentligt.

## Sektorperspektiv

### Startup-företag

Ett digitalt hälsoföretag i startfasen driver upptäckt på knappa medel och mot klockan — ofta är ”upptäckten” grundarnas egen levda erfarenhet plus fjorton dagars användarintervjuer inklämda mellan investerarmöten. Finansieringstrycket är att visa dragkraft, vilket frestar grundare att hoppa rakt till en demo; den disciplin som spelar störst roll är att namnge det riskablaste antagandet och döda idén billigt om det misslyckas, eftersom ett startup-företag inte har råd att bygga fel sak ens en gång. Ansvarsskyldigheten gäller investerare och tidiga användare snarare än en lagstadgad styrelse, så stoppvillkor är kommersiella (ingen betalningsvilja, ingen nåbar marknad) lika mycket som kliniska. Uppsidan är hastighet och friheten att byta riktning; risken är att förväxla en övertygande grundarberättelse med evidens för ett verkligt användarbehov.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem, en hemtjänstorganisation, en klinik på en enda ort eller en liten hälsotekniksleverantör förbi stadiet före intäkter — har verkliga patienter och löpande verksamhet, men sällan en ledig användarforskare eller tjänstedesigner att bemanna en formell upptäckt. Här är upptäckten lättviktig och opportunistisk: ”forskningen” är receptionisten som redan vet varför patienter inte kommer fram på telefon, vårdbiträdena som dagligen ser dubbelarbetet med pappersarbete och en handfull medvetna samtal med de användare en förändring skulle beröra. Fällan är att samma lagstadgade plikter — Caldicott, UK GDPR, jämlikhetsplikten, klinisk säkerhet — gäller fullt ut oavsett om det finns någon internt som äger dem, så den disciplin som spelar störst roll är att formulera problemet ärligt och pröva det riskablaste antagandet innan knappa pengar förbinds till en leverantörs produkt. Eftersom den löpande verksamheten inte kan pausa kör en liten vårdgivare ofta sin upptäckt kring en enda konkret smärtpunkt snarare än ett brett problemområde, och dess mest värdefulla stoppvillkor är att känna igen när lösningen är en processförändring eller en delad regional plattform snarare än ett system att köpa.

### Storföretag

Ett NHS-sjukhus (trust) eller en stor hälsotekniksleverantör kan bemanna en riktig tvärdisciplinär upptäckt — användarforskare, tjänstedesigners, klinisk säkerhet, informationsstyrning — men måste kämpa mot organisationens tyngdkraft: ett befintligt leverantörsavtal, en styrelse som redan tillkännagivit ”appen” eller ett affärscase som förhandsavgjort lösningen. Här är upptäcktens svåraste arbete politiskt — att omformulera en sanktionerad lösning tillbaka till ett användarbehov utan att förlora sponsorns stöd. Finansieringen är årlig och kommittébunden, så upptäckter tävlar om platser och måste producera styrelseläsbara artefakter. Riskaptiten är låg och ansvarsskyldigheten bred (tillsynsmyndigheter, revisorer, allmänheten), vilket gör ett ärligt ”gå inte vidare” både mer värdefullt och svårare att säga högt.

### Staten

Ett nationellt eller lokalt offentligt organ — NHS England, DHSC, en decentraliserad regering, en kommun — driver upptäckt under hela tyngden av Service Standard, utgiftskontrollgrindar och offentlig granskning, där själva upptäcktsrapporten kan publiceras och ifrågasättas. Användarbasen är enorm och plikten att inkludera de marginaliserade är en rättslig, inte valfri, angelägenhet, så inkluderande rekrytering och assisterade digitala vägar är obligatoriska från första veckan. Ansvarsskyldigheten gäller ministrar, parlamentet och väljarkåren, så en upptäckt måste vara försvarbar i det öppna och kan stoppas av utgiftskontroller när evidensen är svag. Avvägningen är stringens kontra takt: statlig upptäckt är långsammare och mer kvalitetssäkrad, vilket skyddar offentliga medel men kan frustrera team vana vid att röra sig snabbt.

## Vanliga felmönster

- **Lösningstänkande för tidigt.** Teamet går in i upptäckten med svaret redan valt och spenderar veckorna på att bygga ett affärscase för det. Motmedel: förbjud lösningssubstantiv i problemuttalandet; gör det riskablaste antagandet till en forskningsfråga.
- **Forskningsteater.** Några vänligt inställda intressenter rådfrågas, svårnådda användare hoppas över ”på grund av tid” och fynden bekräftar bekvämt planen. Motmedel: rekrytera för kanterna; låt någon utanför teamet utmana forskningsfynden.
- **Upptäckten som inte kan säga nej.** Finansiering, politik eller ett undertecknat avtal gör ”gå inte vidare” osägbart, så upptäckten blir ritual. Motmedel: kom överens om stoppvillkor i förväg och skydda forskarens oberoende.
- **Att koka havet.** En obegränsad upptäckt driver i månader, kartlägger allt och avgör ingenting. Motmedel: en hård tidsram och ett namngivet beslut i slutet.
- **Att ignorera den icke-digitala tjänsten.** Teamet studerar skärmen och missar telefonlinjen, brevet och receptionisten som faktiskt bär resan. Motmedel: kartlägg alla kanaler och organisationer från början till slut.
- **Att behandla tillgänglighet och inkludering som senare.** Kantanvändare skjuts upp till beta, då arkitekturen redan utesluter dem. Motmedel: rekrytera inkluderande och testa mot WCAG från den första prototypen.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Problemformulering | Lösning antagen; inget skriftligt problemuttalande | Problem nedskrivet men lösningsformat | Uttryckligt, evidensbaserat problemuttalande överenskommet med sponsor | Formuleringskvalitet kvalitetssäkras mot överenskomna kriterier vid en beslutsgrind; varje uttalandes evidens och omfång granskas | Problemformulering omformar rutinmässigt strategin och stoppar svaga idéer |
| Användarforskning | Chefers åsikter står i för användare | Vissa användarintervjuer, bekvämlighetsurval | Kontextuell forskning med ett medvetet, inkluderande urval | Inkludering och urvalstäckning följs mot mål; forskningskvalitet kvalitetssäkras genom en repeterbar, styrd process | Kontinuerlig forskningsförmåga; kantanvändare ingår rutinmässigt |
| Beslut att gå vidare | Bygget var förhandsbestämt; upptäckten är ritual | Gå/stanna-beslut finns men det blir sällan ”stanna” | Dokumenterade stoppvillkor; ”gör ingenting” är ett verkligt utfall | Beslut styrs mot överenskomna kriterier; andelar stopp och fortsättning och deras motiv följs och granskas | Triage på portföljnivå dödar svaga upptäckter tidigt och billigt |
| Hälsospecifik risk | Klinisk säkerhet, informationsstyrning och jämlikhet beaktas efter bygget | Lyfts sent, som undantag | Klinisk input, input från informationsstyrning och jämlikhetsinput inbäddade i teamet | Risker inom klinisk säkerhet, informationsstyrning och jämlikhet loggas, kvantifieras och kvalitetssäkras mot kontroller och mål | Säkerhets- och jämlikhetsfynd formar problemet, inte bara godkännandet |
| Resultat | Bildspel, inget evidensspår | Rapport med blandad evidens | Spårbara fynd, prioriterade antaganden, tydlig rekommendation | Resultatkvalitet och genomslag mäts; rekommendationer följs till de beslut de informerade | Återanvändbar insikt som matar den bredare portföljen och återanvänds över tjänster |

## Checklista

- [ ] Det finns ett skriftligt problemuttalande som namnger ett användarbehov, inte en lösning.
- [ ] Verkliga användare — inklusive de svårast nåbara — har intervjuats eller observerats i sitt sammanhang.
- [ ] Tjänsten från början till slut är kartlagd över alla kanaler och organisationer.
- [ ] De riskablaste antagandena är listade, rangordnade och de främsta är testade.
- [ ] Risker inom klinisk säkerhet, informationsstyrning (Caldicott, UK GDPR/DPIA) och hälsoojämlikhet är identifierade.
- [ ] Tillgänglighet (WCAG 2.2 AA) och digital inkludering beaktas från den första prototypen.
- [ ] Stoppvillkor kom överens i början, och ”gå inte vidare” är ett genuint möjligt utfall.
- [ ] Möjligheten är dimensionerad och rekommendationen är försvarbar inför en finansieringsstyrelse.
- [ ] Ett tvärdisciplinärt team (inklusive klinisk input och input från informationsstyrning) drev fasen inom en fast tidsram.
- [ ] Sponsorn har godkänt problemuttalandet innan någon alfa börjar.

## Viktiga källor

- NHS England — NHS Digital Service Manual och NHS Service Standard (service.nhs.uk).
- GOV.UK Service Manual — ”How the discovery phase works” och Government Service Standard (Government Digital Service).
- Design Council — *The Double Diamond*, ramverk för designprocessen.
- NHS England — Digital Technology Assessment Criteria (DTAC): klinisk säkerhet, dataskydd, teknisk kvalitetssäkring, interoperabilitet, användbarhet och tillgänglighet.
- NICE — Evidence Standards Framework for Digital Health Technologies.
- Web Content Accessibility Guidelines (WCAG) 2.2, W3C; och GOV.UK:s vägledning om tillgänglighet och assisterad digital.
- UK Caldicott Principles och Data Protection Act 2018 / UK GDPR (konsekvensbedömningar avseende dataskydd).
- Equality Act 2010 — den offentliga sektorns jämlikhetsplikt (relevant för bedömning av hälsoojämlikhet i upptäckt).

## Referenser

1. Double Diamond (design process model) — Wikipedia — https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)
2. Design Council — Wikipedia — https://en.wikipedia.org/wiki/Design_Council
3. User research — Wikipedia — https://en.wikipedia.org/wiki/User_research
4. Contextual inquiry — Wikipedia — https://en.wikipedia.org/wiki/Contextual_inquiry
5. Problem statement — Wikipedia — https://en.wikipedia.org/wiki/Problem_statement
6. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
7. Equality Act 2010 — Wikipedia — https://en.wikipedia.org/wiki/Equality_Act_2010
8. NHS Constitution for England — Wikipedia — https://en.wikipedia.org/wiki/NHS_Constitution_for_England
9. Digital divide — Wikipedia — https://en.wikipedia.org/wiki/Digital_divide
10. Privacy impact assessment (data protection impact assessment) — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
11. How the discovery phase works — Government Digital Service, GOV.UK Service Manual — https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
12. NHS service standard and NHS digital service manual — NHS England — https://service-manual.nhs.uk/
13. The Double Diamond — Design Council — https://www.designcouncil.org.uk/our-resources/the-double-diamond/
14. Web Content Accessibility Guidelines (WCAG) 2.2 — W3C — https://www.w3.org/TR/WCAG22/
15. Equality Act 2010 — UK legislation (legislation.gov.uk) — https://www.legislation.gov.uk/ukpga/2010/15/contents
16. Data protection impact assessments (DPIAs) — Information Commissioner's Office (ICO) — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/
17. The Caldicott Principles — National Data Guardian, GOV.UK — https://www.gov.uk/government/publications/the-caldicott-principles
18. Evidence standards framework for digital health technologies — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
