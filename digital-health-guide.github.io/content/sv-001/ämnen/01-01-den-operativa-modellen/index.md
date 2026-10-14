# Ämne 1.1 — Den operativa modellen

**I en mening:** En målbild för den operativa modellen (target operating model, TOM) är den medvetna utformningen av hur organisationens strategi flödar genom värdeströmmar, förmågor, team, styrning, teknik, data och leverantörer för att leverera utfall inom digital hälsa och vård — och att få dess form rätt avgör om allt nedströms blir snabbt och tryggt eller långsamt och sprött.

## Varför detta är viktigt inom hälsa och vård

De flesta organisationer inom digital hälsa misslyckas inte av brist på talang eller teknik; de misslyckas därför att deras operativa modell motarbetar dem. Finansiering är knuten till tidsbegränsade projekt, beslutsrättigheter är oklara och varje team bygger upp samma inloggnings-, integrations- och granskningsrörmokeri på nytt. Resultatet är dubbla kostnader för offentliga medel, inkonsekvent klinisk säkerhet och tjänster som inte kan dela data över ett integrerat vårdsystem (ICS).

En operativ modell är särpräglad inom detta område eftersom den måste förena konkurrerande goda ting. Den måste vara **tillräckligt federerad** för att respektera suveräna organisationers autonomi — sjukhus (trusts), lokala myndigheter, läkarpraktiker — men **tillräckligt sammanhängande** för att ge en patient en enda trygg upplevelse över dem. Den måste balansera **drift** (att hålla kliniska system tryggt tillgängliga) mot **förändring** (att förbättra dem), när driftstopp kan påverka vården. Och den måste spendera proportionerligt: kvalitetssäkring tillräckligt tung för offentligt ansvarsutkrävande och klinisk säkerhet, men tillräckligt lätt för att inte strypa iteration. TOM är där dessa avvägningar görs uttryckliga i stället för att överlämnas åt slumpen.

## Grundläggande begrepp

**Lagren i en [operativ modell](https://en.wikipedia.org/wiki/Operating_model).** En användbar TOM är en stapel där varje lager tjänar det ovanför:

- **Strategi och utfall** — de mätbara befolknings- och tjänsteutfall ni finns till för att förbättra (ofta uttryckta som [OKR](https://en.wikipedia.org/wiki/Objectives_and_key_results); se Ämne 1.3 — Evidensdrivna beslut).
- **[Värdeströmmar](https://en.wikipedia.org/wiki/Value_stream)** — de helhetsflöden som levererar värde till en användare, t.ex. ”remittera, triagera och behandla en patient” — organiserade kring medborgarens resa, inte organisationsschemat.
- **Förmågor** — det ni måste kunna göra (identitet, tidsbokning, klinisk dokumentation, analys). Förmågor är stabila även när lösningar byts ut.
- **Team** — de människor som organiseras för att leverera förmågor och värdeströmmar (se Team Topologies nedan).
- **Styrning och beslutsrättigheter** — vem som beslutar vad, och hur kvalitetssäkring tillämpas.
- **Teknik och data** — de plattformar, standarder och dataarkitektur teamen bygger på.
- **Leverantörer** — den marknad ni köper från och hur ni förvaltar den.

Att utforma uppifrån och ned (strategi → värdeströmmar → förmågor) håller team och teknik i linje med utfall snarare än med äldre strukturer.

**Centraliserade, federerade och plattformsbaserade modeller.** En **centraliserad** modell koncentrerar leverans i ett team eller ett organ på armlängds avstånd: konsekvent och billig att standardisera, men en flaskhals och ofta avlägsen från lokala behov. En **federerad** modell delegerar leverans till sjukhus och orter: lyhörd och lokalt ägd, men benägen till dubbelarbete och divergens. En **plattformsmodell** är det förenande mönstret: ett centralt team tillhandahåller delade, återanvändbara förmågor (identitet, interoperabilitet, drift och hosting, designsystem) som en *plattform*, och federerade team bygger ovanpå i hög fart. De flesta mogna hälso- och sjukvårdssystem konvergerar mot ”plattform plus federation”.

**Team Topologies.** Ramverket namnger fyra teamtyper — strömjusterade (som äger en värdeström), plattform (som tillhandahåller självbetjäningsförmågor), stödjande (som coachar andra upp i en förmåga) och komplicerade delsystem (djupt specialistarbete såsom en algoritm) — och betonar friktionsfri interaktion mellan dem. Det passar rakt in på plattformsmodellen: plattformsteam minskar den kognitiva belastningen på strömjusterade team så att de kan fokusera på användar- och klinikvärde.

**Drift kontra förändring.** *Drift* är att hålla driftsatta tjänster trygga och tillgängliga; *förändring* är att förbättra eller bygga dem. Produktteam som både bygger och driver en tjänst (”you build it, you run it”) sluter återkopplingsslingan och förbättrar säkerheten, men balansen måste finansieras ärligt — att svälta driften för att finansiera förändring är hur kliniska system försämras.

**Den tunnaste fungerande plattformen (thinnest viable platform, TVP).** Från Team Topologies: en plattform bör vara den *minsta* uppsättning delade tjänster som genuint minskar friktionen för strömteam — inte mer. En överbyggd plattform blir sin egen flaskhals och sitt eget äldre system. Börja med de få förmågor varje team verkligen behöver (autentisering, ett interoperabilitetslager, drift och hosting, ett designsystem) och växa bara vid belagd efterfrågan.

## Bästa praxis

1. **Utforma modellen från utfall och nedåt, inte från organisationsschemat och uppåt.** Börja med de befolknings- och tjänsteutfall ni måste förflytta, härled de värdeströmmar som levererar dem och utforma först därefter team och teknik. En TOM förankrad i den befintliga hierarkin automatiserar bara de nuvarande silorna.

2. **Anta formen plattform-plus-federation.** Tillhandahåll delade förmågor centralt som en självbetjäningsplattform och låt strömjusterade team på sjukhus och orter bygga ovanpå. Det ger nationell konsekvens i säkerhet och interoperabilitet med lokal hastighet och lokalt ägande — den förening som området kräver.

3. **Finansiera produkter, inte projekt.** Flytta pengar från tidsbegränsade projekt till varaktigt finansierade produktteam anpassade till värdeströmmar. Projektfinansiering tvingar team att upplösas just när de har lärt sig domänen; produktfinansiering upprätthåller den säkerhetskunskap och iteration hälso- och sjukvårdstjänster behöver (se Ämne 5.0 — Produktledt arbete).

4. **Gör utgiftskontrollen proportionerlig och stegvis.** Använd stegvis finansiering knuten till evidens — frigör pengar vid portarna upptäckt, alfa, beta och drift snarare än att godkänna ett helt program i förväg. Utgiftskontroller i [GDS](https://en.wikipedia.org/wiki/Government_Digital_Service)-stil och NHS kvalitetssäkringsväg finns för att förhindra stora sjunkna kostnader på obeprövade idéer; tillämpa dem som tröskelvärden skalade efter risk och värde, inte som allmän byråkrati.

5. **Gör beslutsrättigheter explicita med en RACI- eller RAPID-karta.** Oklar befogenhet är den vanligaste orsaken till avstannad leverans. Namnge, för varje betydande beslutstyp, vem som är Responsible/Accountable/Consulted/Informed ([RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)) eller vem som Recommends, Agrees, Performs, har Input och Decides (RAPID). Publicera den så att team slutar eskalera beslut de är bemyndigade att fatta.

6. **Håll plattformen tunn och efterfrågestyrd.** Bygg delade förmågor först när två eller fler team påvisbart behöver samma sak, och behandla plattformen som en produkt med egna användare (de interna teamen). Motstå lusten att i förväg bygga en storslagen plattform; den tunnaste fungerande plattformen förtjänar sin omfattning genom införande.

7. **Förvalta leverantörer som en del av modellen, inte utanför den.** Avgör medvetet vilka förmågor som är strategiska (bygg/äg) och vilka som är standardvaror (köp), undvik [inlåsning](https://en.wikipedia.org/wiki/Vendor_lock-in) hos en enda leverantör för kärnkliniska data och kräv öppna standarder och utträdesrätter i avtal. Era leverantörer är ett lager i er operativa modell, och deras arbetssätt måste vara förenliga med era.

8. **Gör beslutsrättigheter explicita.** En operativ modell fungerar bara om människor vet vem som beslutar vad — vilka val som ligger hos ett produktteam, vilka hos en myndighet för klinisk säkerhet och vilka som måste nå en styrelse. Kartlägg beslutsrättigheter och lägg varje beslut på den lägsta nivå som säkert kan hålla det, så att leveransen inte stryps av onödig eskalering. Oklar befogenhet är en av de vanligaste orsakerna till långsam, defensiv leverans.

9. **Behandla den operativa modellen som en produkt ni utvecklar.** En målbild för den operativa modellen sätts inte en gång och rams in på en vägg; inspektera den allteftersom efterfrågan, teknik och partnerskap förändras, och anpassa den på evidens. Bevaka några få signaler — arbetsflöde, tid till beslut, omarbete och teamets hälsa — och ändra strukturer när de påvisbart står i vägen, inte som svar på omorganiseringsmode.

## Frågor att diskutera med ditt team

1. **Är vår operativa modell utformad från utfall och värdeströmmar och nedåt, eller har den helt enkelt automatiserat vårt befintliga organisationsschema och dess silor?**
   Frågan går till ämnets centrala varning att en TOM förankrad i den nuvarande hierarkin bara befäster de silor ni redan har, så den är värd att lägga på bordet före varje omorganisation. Den spelar roll inom hälsa och vård eftersom värdeströmmar följer medborgarens resa — remittera, triagera, behandla — över suveräna organisationer, medan organisationsscheman följer institutionella gränser, och en modell byggd på det senare fortsätter att producera fragmenterade, icke-interoperabla tjänster för offentliga medel. Spänningen att debattera ärligt är att utforma uppifrån och ned från utfall genuint är störande: det skär över avdelningars ägande, budgetar och rapporteringslinjer som seniora människor byggt karriärer kring, så det finns en verklig politisk kostnad för att göra det ordentligt. Pröva er själva konkret genom att namnge era tre främsta utfall och spåra om era faktiska teamgränser och finansieringslinjer följer de värdeströmmarna eller avdelningarna; om team kartläggs rent på avdelningar är det ert svar. Ett bra, ärligt svar erkänner var modellen är organisationsschemaformad, identifierar minst en värdeström som för närvarande är splittrad över silor till dess förfång och är realistiskt om vilka strukturella gränser organisationen är villig att dra om.

2. **Vad hör hemma i vår tunnaste fungerande plattform, och hur hindrar vi att den antingen överbyggs till en flaskhals eller underbyggs så att varje team bygger samma rörmokeri på nytt?**
   Formen plattform-plus-federation fungerar bara om plattformen förblir tunn och efterfrågestyrd, och frågan får teamet att konfrontera båda de felmönster ämnet namnger — den storslagna plattformen som blir sin egen äldre flaskhals, och frånvaron som tvingar varje team att bygga om inloggning, integration och granskning. Den spelar roll eftersom plattformen i ett ICS i praktiken är delad infrastruktur (identitet, ett FHIR-interoperabilitetslager, hosting med säkerhetsgrundnivåer, ett designsystem) och att få dess omfattning fel multiplicerar antingen kostnad eller friktion över varje strömteam. Avvägningen att debattera är tidpunkt och evidens: bygg för tidigt och ni gissar fel och skapar en flaskhals; bygg för sent och dubbelarbetet har redan förstenats — så testet ”två eller fler team behöver påvisbart samma sak” är kärnan, och teamet bör stresstesta om de faktiskt tillämpar det eller bara bygger det som verkar uppenbart centralt. Se på vad ni för närvarande behandlar som plattform kontra vad team bygger om, och fråga om plattformen drivs som en produkt med egna interna användare och servicenivåer eller som en kö alla väntar bakom. Ett ärligt svar namnger de specifika förmågor som klarar tvåteamstestet i dag, motstår frestelsen att i förväg bygga resten och förbinder sig att behandla plattformsteamets interna användare som verkliga kunder med verkliga servicenivåer.

3. **Var är våra beslutsrättigheter genuint oklara, och vad eskalerar team i dag som de borde vara bemyndigade att besluta själva?**
   Oklar befogenhet pekas ut som den vanligaste orsaken till avstannad leverans, så frågan lyfter fram den vardagliga friktion som en publicerad RACI- eller RAPID-karta är avsedd att ta bort. Den spelar akut roll i ett federerat hälso- och sjukvårdssystem där orts-team, en digital styrelse för ICS, klinisk säkerhet och informationsstyrning alla har legitima anspråk på ett beslut, och oklara gränser innebär att antingen allt eskaleras eller, värre, ingen äger ett avgörande förrän det går fel. Spänningen värd att utforska är att delegera beslut kräver att man litar på team inom ramar, vilket seniora ledare och styrelser ofta motsätter sig just där klinisk säkerhet eller offentliga medel är inblandade — men att hålla inne det förtroendet är det som skapar eskaleringslåsningen från första början. Gör det konkret genom att lista de fem senaste besluten som eskalerades och fråga, för vart och ett, vem som borde ha beslutat och vilken ram som hade låtit dem — mönstret avslöjar vanligen ett litet antal återkommande oklara beslutstyper. Ett bra svar producerar ett specifikt, publicerbart uttalande om vem som beslutar vad — med åtskillnad mellan plattformsstandarder, tjänstedesign och godkännande av klinisk säkerhet — och är ärligt om vilka beslut organisationen genuint är villig att delegera kontra vilka den behåller centralt och varför.

4. **Finansierar vi drift och förändring ärligt, eller svälter vi i tysthet driften av levande tjänster för att betala för nya funktioner?**
   Ämnet är rakt på sak med att svälta driften för att finansiera förändring är hur kliniska system försämras, och frågan tvingar in balansen i dagsljuset innan ett driftstopp eller en säkerhetsincident gör det åt er. Den spelar roll inom hälsa och vård eftersom ”drift” inte är administrativ overhead — den är tillgängligheten hos de system kliniker är beroende av vid vårdtillfället, så en försämrad driftbudget visar sig som driftstopp som kan påverka patienter, inte bara besvära användare. Avvägningen är obekväm eftersom förändring är synlig och firas medan drift är osynlig tills den fallerar, så styrelser och färdplaner lutar naturligt mot det nya; en ”you build it, you run it”-modell hjälper genom att hålla återkopplingsslingan sluten, men bara om teamets drifttid är genuint skyddad snarare än nominellt tilldelad och sedan plundrad. Gör det konkret genom att se på hur stor andel av varje produktteams kapacitet som faktiskt gick till att hålla tjänster trygga och tillgängliga förra kvartalet kontra vad som var planerat, och om driftarbete följs och värderas eller behandlas som avbrott. Ett ärligt svar namnger var driften underfinansieras i dag, skyddar en realistisk driftsallokering som en första kostnad snarare än ett restbelopp och är uppriktigt om vilka levande tjänster som bär ackumulerad operativ risk.

5. **Vilka förmågor väljer vi medvetet att bygga och äga kontra köpa, och accepterar vi inlåsning på våra kärnkliniska data utan att mena det?**
   Bästa praxis här är att avgöra bygga-kontra-köpa medvetet, undvika inlåsning hos en enda leverantör för kärnkliniska data och behandla leverantörer som ett lager i den operativa modellen snarare än något utanför den — frågan prövar om dessa val faktiskt görs eller sker som standard. Den spelar roll eftersom den mest konsekvensrika inlåsningen inom digital hälsa gäller den kliniska journalen och dess data, där ett proprietärt lager utan realistiskt utträde kan fånga ett helt system i ett decennium och diktera vad varje nedströmstjänst kan göra. Spänningen är hastighet kontra valfrihet: att köpa är snabbare och ofta billigare i dag, särskilt för ett ansträngt team, men varje bekvämt köp utan öppna standarder eller utträdesrätter snävar i tysthet in morgondagens val, och kostnaden blir synlig först när ni försöker lämna. Gör det konkret genom att lista era kärnförmågor, markera var och en som strategisk (bygg/äg) eller standardvara (köp), och kontrollera om avtalen bakom standardvarorna faktiskt kräver öppna standarder (HL7 FHIR, SNOMED CT) och verkställbara utträdesrätter. Ett bra svar skiljer de få genuint strategiska förmågorna från de många som tryggt kan köpas, är ärligt om var organisationen redan är inlåst på kliniska data och förbinder sig till öppna standarder och utträdesrätter i de avtal som spelar störst roll.

6. **Hur ska vi veta när vår operativa modell behöver ändras, och vilka signaler skulle tala om det för oss — i stället för att omorganisera på mode eller för att en ny ledare tillträder?**
   Ämnet ramar in den operativa modellen som en produkt ni utvecklar på evidens, inte ett diagram som rams in på en vägg, så frågan ber teamet att i förväg definiera vilken evidens som skulle motivera att den omformas. Den spelar roll inom hälsa och vård eftersom omorganisation är störande och dyr — den upplöser hårt förvärvad domän- och klinisk säkerhetskunskap — men sektorn är benägen till strukturell omsättning driven av politiska cykler och nya tillsättningar snarare än av om den nuvarande modellen faktiskt står i vägen. Spänningen ligger mellan stabilitet och anpassning: ändra modellen för lättvindigt och team får aldrig sätta sig eller ackumulera säkerhetsexpertis, ändra den för sällan och förstelnade strukturer stryper flödet långt efter att de slutat passa arbetet. Gör det konkret genom att välja en liten uppsättning signaler att bevaka — arbetsflöde, tid till beslut, omarbete och teamets hälsa — och komma överens om vilken rörelse i dem som skulle utlösa en medveten omdesign kontra en mindre justering. Ett ärligt svar förbinder sig till några få ledande indikatorer, skiljer evidensledd förändring från omorganiseringsteater och är tydligt med vem som är ansvarig för att inspektera modellen och agera när signalerna säger att den hindrar leveransen.

## I praktiken: ett exempel från hälsa och vård

Ett ICS som täcker fem orter har låtit varje sjukhus bygga sina egna patientvända tidsbokningsverktyg. Kostnaderna dubbleras, upplevelserna divergerar och inget delar data rent. ICS omdesignar sin operativa modell.

Det definierar tre utfall (minska uteblivna besök, skära ned undvikbara inläggningar, förbättra jämlikheten i tillgång) och värdeströmmarna bakom dem. Det inrättar ett litet **plattformsteam** som äger fyra tunnaste-fungerande förmågor: en gemensam identitet/inloggning, ett [FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)-baserat interoperabilitetslager, gemensam drift och hosting med grundnivåer för säkerhet och klinisk säkerhet samt ett designsystem. Varje ort behåller ett **strömjusterat team** men bygger nu på plattformen i stället för från grunden.

Finansieringen skiftar från årliga projektansökningar till stående produktbudgetar för varje ström, frigjorda genom portarna upptäckt/alfa/beta. En publicerad RAPID-karta gör klart att ortsteamen *beslutar* om sin egen tjänstedesign inom ramarna för plattform och klinisk säkerhet, medan ICS digitala styrelse *beslutar* om plattformsstandarder. Inom ett år delar tre orter en gemensam bokningsförmåga, design- och säkerhetsgrundnivån är konsekvent och nya funktioner som förut tog en projektcykel levereras på veckor — eftersom plattformen tog över det odifferentierade grovarbetet.

## Sektorperspektiv

En operativ modell dimensioneras efter den organisation den tjänar; samma lager — värdeströmmar, förmågor, team, styrning, plattform, leverantörer — ritas mycket olika av ett startup-företag, ett storföretag och ett statligt organ.

### Startup-företag

I ett litet digitalt hälsoföretag är den operativa modellen mestadels implicit, och det är bra så: ett eller två strömjusterade team, en grundare som håller de flesta beslutsrättigheter och inget plattformsteam eftersom det ännu inte finns något att bygga plattform av. Disciplinen är att göra de få verkliga besluten explicita tidigt — bygga kontra köpa för det kliniska datalagret, vilka öppna standarder man förbinder sig till — så att dagens genväg inte blir morgondagens inlåsning. Drift och förändring ligger i samma händer, så risken är att det att hålla lamporna tända åt tidiga kunder svälter färdplanen; en enkel, ärlig fördelning av utvecklingstid är den lättviktiga motsvarigheten till en skyddad driftbudget. Leverantörer väljs för snabbhet, men ett startup-företag bör ändå vägra inlåsning på kärnkliniska data, eftersom dess framtida NHS-köpare kommer att kräva utträdesrätter.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem eller en hemtjänstutförare, en klinik på en enda ort eller en liten hälsotekniksleverantör som passerat stadiet före intäkter — har verkliga patienter och pågående verksamhet men inget plattformsteam, ingen dedikerad digital eller IT-förmåga och litet utrymme i kassa eller personal. Här är den operativa modellen i stort sett en uppsättning inköpta förmågor hoplappade, så de avgörande valen är leverantörsval: att insistera på öppna standarder och utträdesrätter i de kliniska system ni upphandlar, eftersom ni bär samma skyldigheter om interoperabilitet och klinisk säkerhet som ett stort sjukhus utan dess köpkraft eller interna expertis. Drift och förändring kollapsar ned på samma handfull personer som också levererar vård, så den ärliga disciplinen är att skydda lite tid för att hålla system trygga och uppdaterade i stället för att bara släcka bränder. Beslutsrättigheter är enkla — vanligen beslutar en delägare eller ägare-chef — men det gör det lätt att skjuta upp digitala beslut på obestämd tid, så värdet ligger i att namnge de få som spelar roll (vilken klinisk journal, vilken gemensam regional plattform man ansluter till) och fatta dem medvetet. Där ett ICS eller ett nationellt organ erbjuder en gemensam identitets-, interoperabilitets- eller designplattform är det småföretagets bästa drag ofta att bygga på den i stället för att uppfinna den på nytt, och låna den förmåga det inte kan bemanna själv.

### Storföretag

Ett NHS-sjukhus (trust) eller ICS är där formen plattform-plus-federation förtjänar sin plats: suveräna organisationer som måste kännas som en enda tjänst för en patient. De svåra problemen är lika mycket politiska som tekniska — att flytta pengar från tidsbegränsade projektansökningar till stående produktbudgetar, och att publicera en RACI/RAPID-karta så att ortsteam slutar eskalera beslut de äger. Ett stort hälsoteknik- eller läkemedelsföretag har plattformsutvecklingsmuskler men riskerar att överbygga en storslagen intern plattform som blir sin egen flaskhals; testet för den tunnaste fungerande plattformen — två eller fler team behöver påvisbart samma sak — är bromsen. I denna skala är beslutsrättigheter och finansieringsflöde den operativa modellen; tekniken är vanligen inte begränsningen.

### Staten

Ett nationellt eller lokalt offentligt organ utformar operativa modeller som andra organisationer måste bebo, så dess val av standarder och plattformar är i praktiken nationell infrastruktur. NHS England eller DHSC som tillhandahåller ett gemensamt identitetslager, ett interoperabilitetsnav eller ett designsystem är plattformsmönstret tillämpat i befolkningsskala, och dess utgiftskontroller och stegvisa kvalitetsportar är hur offentliga medel hålls ansvariga. Felmönstret är en centraliserad modell som blir en avlägsen flaskhals och föreskriver en lösning för varje lokal kontext; botemedlet är att göra plattform av de verkligt gemensamma förmågorna och federera resten till sjukhus och lokala myndigheter. Ansvarsutkrävande inför parlamentet innebär också att bygga/köpa och leverantörsförvaltning är offentliga handlingar, så öppna standarder och utträdesrätter är inte bara kloka utan förväntade.

## Vanliga felmönster

- **Att automatisera organisationsschemat.** Att utforma team kring befintliga avdelningar snarare än värdeströmmar, så att TOM befäster silor. Motmedel: utforma från utfall och värdeströmmar och nedåt.
- **Plattformen som blir en flaskhals.** Ett överdimensionerat centralt plattformsteam som varje begäran måste köa bakom. Motmedel: tunnaste fungerande plattform, behandlad som en produkt med servicenivåer.
- **Projektfinansiering för produktarbete.** Pengar som löper ut tvingar fram omsättning med upplösning och återuppbyggnad. Motmedel: varaktig produktfinansiering med stegvisa portar.
- **Drift svälts för att mata förändring.** Att underfinansiera driften av levande tjänster tills kliniska system försämras. Motmedel: finansiera drift och förändring uttryckligen och skydda driftbudgeten.
- **Beslut utan ägare.** Ingen vet vem som beslutar, så allt eskaleras. Motmedel: en publicerad RACI/RAPID.
- **Inlåsning som standard.** Kärnkliniska data fångade i ett proprietärt leverantörssystem utan utträde. Motmedel: öppna standarder och utträdesrätter i varje strategiskt avtal.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Struktur | Styrd av organisationsschemat, i silor | Viss anpassning till värdeströmmar | Plattform-plus-federation etablerad | Gränser styrs och granskas mot flödesmått | Omformas kontinuerligt kring utfall |
| Finansiering | Årliga projekt | Blandat projekt/produkt | Produktfinansiering med stegvisa portar | Utgifter och leverans följs mot nyckeltal, portar kvalitetssäkras | Utfallsbaserad, evidensfrigjord finansiering |
| Beslutsrättigheter | Oklara, allt eskaleras | Delvis dokumenterade | RACI/RAPID publicerad och använd | Beslutsfördröjning och eskaleringar mäts och styrs | Delegerade inom tydliga ramar, eskaleras sällan |
| Plattform | Ingen; varje team bygger om | Ad hoc delade delar | Tunnaste fungerande plattform, efterfrågestyrd | Plattformens servicenivåer, införande och tillförlitlighet följs mot mål | Plattform som en mogen intern produkt |
| Leverantörer | Inlåsning, taktiska köp | Vissa standarder krävs | Bygga/köpa avgörs medvetet | Leverantörsprestation och standardefterlevnad kvalitetssäkras | Öppna standarder, utträdesrätter, en sund marknad |

## Checklista

- [ ] Den operativa modellen är utformad från utfall och värdeströmmar, inte den befintliga hierarkin.
- [ ] Delade förmågor tillhandahålls som en tunnaste fungerande plattform, med strömteam som bygger ovanpå.
- [ ] Produktteam är varaktigt finansierade och anpassade till värdeströmmar.
- [ ] Utgiftskontrollen är stegvis (portar för upptäckt/alfa/beta/drift) och proportionerlig mot risk och värde.
- [ ] Beslutsrättigheter är dokumenterade (RACI eller RAPID) och publicerade.
- [ ] Drift och förändring finansieras uttryckligen, med driftbudgeten skyddad.
- [ ] Teamtyper (strömjusterade, plattform, stödjande, komplicerade delsystem) förstås och används.
- [ ] Bygga/köpa är ett medvetet val per förmåga; kärnkliniska data undviker inlåsning.
- [ ] Avtal kräver öppna standarder (t.ex. HL7 FHIR, [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)) och utträdesrätter.

## Viktiga källor

- Matthew Skelton & Manuel Pais — *Team Topologies* (strömjusterade, plattforms-, stödjande och komplicerade-delsystem-team; tunnaste fungerande plattform).
- GOV.UK Service Manual — *spend controls* och stegvis kvalitetssäkring (upptäckt/alfa/beta/drift); Government Digital Service.
- NHS digital service manual — *NHS service standard* (service-manual.nhs.uk).
- AXELOS — *Management of Portfolios (MoP)* och *Managing Successful Programmes (MSP)* för portfölj- och programstyrning.
- Bain & Company — ramverket *RAPID* för beslutsrättigheter; och RACI-modellen för ansvarsfördelning.
- John Doerr — *Measure What Matters* (OKR) för utfallsdefinition.

## Referenser

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
