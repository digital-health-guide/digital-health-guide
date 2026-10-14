# Ämne 1.0 — Arbetssätt inom digital hälsa och vård

**I en mening:** *Arbetssätt* är de medvetna, delade vanor — hur ni organiserar team, fattar beslut, hanterar risk och levererar värde — som låter en hälso- och vårdorganisation omvandla avsikt till trygga, jämlika, evidensbaserade utfall för patienter och medborgare.

## Varför detta är viktigt inom hälsa och vård

Varje organisation har arbetssätt, vare sig de är valda eller ärvda. Inom digital hälsa och vård är de ni ärver vanligen fel för uppgiften: de byggdes för byggliknande projekt med fast omfattning, inte för adaptiva tjänster som berör klinisk säkerhet, lagstadgade skyldigheter och offentliga medel. Att få dem rätt är ingen finess för bakre kontoret; det är skillnaden mellan en gemensam vårdjournal som kliniker litar på och en som står oanvänd.

Hälsa och vård är särpräglat på sätt som formar varje praxis i den här boken. **Säkerhet** är ofrånkomlig — ett fel i en digital tjänst kan skada en patient, så klinisk riskhantering (se Ämne 1.6 — Klinisk säkerhet och riskhantering) är invävd i leveransen, inte påbyggd. **Jämlikhet** spelar roll eftersom en tjänst som bara fungerar för de digitalt självsäkra vidgar [hälsoojämlikheter](https://en.wikipedia.org/wiki/Health_equity); Core20PLUS5-populationerna och människor med begränsad digital åtkomst måste utformas för, inte utformas bort. **Lagstadgade skyldigheter** — NHS:s åtagande om heltäckande vård, dataskyddslagstiftning, tystnadsplikten — begränsar vad ni får göra med data och hur ni måste samråda. **Offentliga medel** kräver proportionerlig utgiftskontroll och påvisbart värde. Och nästan ingenting levereras av ett enda organ ensamt: **partnerskap** över integrerade vårdsystem (ICS), lokala myndigheter, socialtjänstutförare och leverantörer är det normala driftsförhållandet.

Dessa fyra tryck — säkerhet, jämlikhet, skyldighet, pengar — är skälet till att ni inte bara kan kopiera en handbok från konsumentteknik. Ni behöver arbetssätt som är agila *och* ansvarsskyldiga, snabba *och* trygga, användarcentrerade *och* rättvisa mot befolkningen.

## Grundläggande begrepp

**Arbetssätt** verkar på tre nivåer. På **teamnivå** är de de dagliga rutinerna: stand-ups, användarforskning, iterativ leverans, parprogrammering. På **organisationsnivå** är de den operativa modellen — hur strategi blir värdeströmmar, förmågor, finansiering och beslutsrättigheter (se Ämne 1.1 — Den operativa modellen). På **systemnivå** är de hur oberoende organisationer samordnar sig: gemensamma standarder, interoperabilitet och gemensam styrning över ett ICS. Den här boken rör sig medvetet över alla tre.

**[Användarcentrerad design](https://en.wikipedia.org/wiki/User-centered_design)** innebär att utgå från behoven hos de människor som använder en tjänst — patienter, anhöriga, kliniker, administratörer — snarare än från en antagen lösning. Storbritanniens [Government Digital Service](https://en.wikipedia.org/wiki/Government_Digital_Service) (GDS) och NHS kodifierade detta i tjänstestandarder: förstå användare och deras behov innan ni bygger, och fortsätt testa med verkliga användare genomgående.

**[Agil, iterativ leverans](https://en.wikipedia.org/wiki/Agile_software_development)** innebär att tidigt få en fungerande tjänst framför verkliga användare, lära sig och anpassa sig — snarare än att specificera allt i förväg. NHS digitala tjänstemanual är uttrycklig med att agila, användarcentrerade arbetssätt minskar risken att bygga fel sak. Agilt är här en riskhanteringsstrategi lika mycket som en leveransmetod.

**[Multidisciplinära team (MDT)](https://en.wikipedia.org/wiki/Interdisciplinarity)** för samman, i ett bemyndigat team, den mix av färdigheter en tjänst behöver: produkt- och leveransledning, användarforskning och design, utveckling, klinisk expertis och expertis inom informationsstyrning samt verksamhetskunskap. NHS tjänstestandard kräver team som inkluderar multidisciplinära färdigheter och perspektiv — inklusive tillgång till specialistunderlag av klinisk, juridisk eller politisk art. MDT är leveransens atom inom digital hälsa; de flesta misslyckanden kan spåras till en saknad disciplin vid bordet.

**Produkt framför projekt.** Ett projekt har en början, ett slut och en överlämning; en [produkt](https://en.wikipedia.org/wiki/Product_management) finansieras och förvaltas under hela sitt liv. Skiftet från projekttänkande till produkttänkande (se Ämne 1.1 och Ämne 5.0 — Produktledt arbete) ändrar finansiering, team och ansvarsutkrävande, och det passar hälso- och sjukvårdstjänster — som är långlivade och ständigt utvecklas — långt bättre än engångsprojekt.

## Bästa praxis

1. **Utgå från användarbehov, belagda genom forskning.** Innan ni förbinder er till ett bygge, förstå vilka användarna är, vad de försöker göra och var den nuvarande tjänsten sviker dem. Finansiera en upptäcktsfas (se Ämne 3.4 — Upptäcktsfaser) och behandla ”vi antog” som en varningsflagga. Användarbehov, inte interna preferenser, är ankaret för varje senare beslut.

2. **Bygg multidisciplinära, bemyndigade och stabila team.** Sätt samman hela mixen av färdigheter — inklusive klinisk säkerhet och informationsstyrning — och ge teamet befogenhet att besluta inom tydliga ramar. Håll team samman kring en tjänst i stället för att upplösa dem vid varje projektgräns; stabila team ackumulerar den domän- och säkerhetskunskap som hälso- och sjukvårdstjänster kräver.

3. **Arbeta öppet och [iterera i små steg](https://en.wikipedia.org/wiki/Iterative_and_incremental_development).** Leverera tunna skivor, mät och justera. Små, frekventa utgåvor är säkrare än big-bang-lanseringar eftersom problem dyker upp medan de fortfarande är små, och de låter granskning av klinisk säkerhet och informationsstyrning hålla jämna steg med förändringen i stället för att bli en spärr i slutet.

4. **Gör säkerhet och jämlikhet förstklassiga från dag ett.** Kör klinisk riskhantering (DCB0129/DCB0160) och analys av jämlikhet/hälsoojämlikheter parallellt med leveransen, inte som godkännanden i slutskedet. Fråga tidigt vem som kan uteslutas eller skadas, och utforma för de svåraste fallen — assisterade digitala vägar, tillgänglighet ([WCAG](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines)) och offlinereservlösningar.

5. **Besluta med evidens och dokumentera beslutet.** Skilj klinisk evidens (fungerar det och är det säkert?) från leveransevidens (bygger vi det väl och används det?), och för en lättviktig beslutslogg så att resonemanget överlever personalomsättning (se Ämne 1.3 — Evidensdrivna beslut). Evidens slår den högst betalda personens åsikt.

6. **Utforma för interoperabilitet och återanvändning.** Hälso- och vårddata måste flöda säkert mellan organisationer; bygg enligt öppna standarder ([HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)) och återanvänd plattformar i stället för att uppfinna dem på nytt (se Ämne 1.1:s ”tunnaste fungerande plattform” och Ämne 4.3 — Interoperabilitet och datastandarder). En tjänst som inte kan dela data är en silo som väntar på att bli en risk.

7. **Styr proportionerligt.** Anpassa tyngden i kvalitetssäkringen efter risknivån. Högrisk-kliniska förändringar förtjänar djup granskning; lågrisk-innehållsändringar bör inte vänta veckor på en styrelse. Proportionerlig styrning håller er både trygga och snabba.

8. **Arbeta öppet.** Dela planer, beslut, färdplaner och — där det är säkert — kod, så att partner, kliniker och allmänhet kan se hur och varför val görs. Öppenhet bygger förtroende, minskar dubbelarbete över ett fragmenterat system och inbjuder till utmaning innan misstag hårdnar till driftsatta tjänster. Inom hälsa och vård är det i sig en förtroende- och säkerhetspraxis att vara transparent med vad en tjänst gör med data, och varför.

9. **Utforma för lång sikt och för överlämning.** Digitala tjänster inom hälsa överlever de team och avtal som bygger dem, så dokumentera beslut, undvik odokumenterad ”hjältekunskap” och utforma för de människor som ska driva och ändra tjänsten i åratal (se Ämne 10.3 — Kunskapshantering och dokumentation). Behandla hållbarhet — för teamet, tekniken och finansieringsmodellen — som en förstklassig restriktion, inte en eftertanke.

## Frågor att diskutera med ditt team

1. **Var är våra nuvarande arbetssätt ärvda snarare än valda, och vilken ärvd vana kostar oss mest i säkerhet, jämlikhet eller slösade utgifter?**
   Frågan tvingar fram en ärlig granskning av de rutiner ingen beslutade men alla följer — programfinansiering med fast omfattning, projektteam som upplöses och byggs upp på nytt, styrning som rådfrågas först vid driftsättning. Den spelar roll eftersom ärvda vanor vanligen är osynliga tills de namnges, och inom hälsa och vård bär de verklig kostnad: en gemensam journal kliniker inte litar på, en tjänst som utesluter Core20PLUS5-populationer eller en ombyggnad av samma inloggningsrörmokeri med offentliga medel. Spänningen att debattera är att ärvda sätt ofta känns trygga just därför att de är välbekanta och går att granska, så att avveckla dem ser ut som att ta på sig risk snarare än att ta bort den. Förankra diskussionen i konkreta artefakter — se på era tre senaste affärscase, er teamomsättning mellan projekt och när klinisk säkerhet först engagerades — snarare än att byta åsikter. Ett bra svar namnger en eller två specifika vanor med belägg för deras kostnad, skiljer de som är värda att behålla från de som aktivt skadar utfall och förbinder sig till en förändring som en högre ledare blir ansvarig för.

2. **Har våra team genuint hela den multidisciplinära färdighetsmixen — inklusive klinisk säkerhet och informationsstyrning — inom teamet, eller är de disciplinerna fortfarande påbyggda som spärrar i slutskedet?**
   Ämnet hävdar att MDT är leveransens atom och att de flesta misslyckanden kan spåras till en saknad disciplin vid bordet, så frågan prövar om den principen är verklig i er organisation eller bara önskvärd. Den spelar roll eftersom en klinisk säkerhetsansvarig eller en Caldicott Guardian som engageras först vid driftsättning tvingar fram antingen omarbete eller osäkra genvägar, medan en som är inbäddad från vecka ett håller en levande farologg som sätter takten för leveransen. Avvägningen som är värd att lyfta är kostnad och knapphet: specialisttid inom klinik, juridik och informationsstyrning är genuint begränsad, så ”bädda in alla i varje team” kolliderar med verkliga resursbegränsningar, och teamet måste avgöra var delade eller partiella roller är acceptabla och var inte. Se på en nuvarande tjänst och kartlägg vem som faktiskt ingår i det stående teamet kontra vem som rådfrågas som extern godkännare, och kontrollera om teamet har befogenhet att besluta inom ramar eller ständigt måste eskalera. Ett ärligt, bra svar är specifikt om vilka discipliner som saknas eller lånas, erkänner resursspänningen uppriktigt och föreslår en konkret modell — heltid, deltid eller jour — för att täppa till glappet utan att låtsas att knappheten inte finns.

3. **När har vi behandlat en digital tjänst som ett projekt med överlämning snarare än en produkt som förvaltas under hela sitt liv, och vad kostade det oss i förlorad domän- och säkerhetskunskap?**
   Produkt framför projekt är ett av ämnets bärande skiften, och frågan får teamet att konfrontera var de fortfarande finansierar och bemannar för avslut snarare än kontinuitet. Den spelar roll eftersom hälso- och sjukvårdstjänster är långlivade och ständigt utvecklas; ett team som upplöses vid projektgränsen tar med sig just den ackumulerade kliniska och operativa kunskap som håller en tjänst säker, och ”pilotpurgatoriet” är det återkommande symptomet. Den verkliga spänningen är finansiell och strukturell: produktfinansiering kräver stående budgetar och utmanar den årliga ansökningsmodell med tidsramar som ekonomi och styrning är byggda kring, så detta är lika mycket ett samtal om pengar och ansvarsutkrävande som om leverans. Betrakta en specifik tjänst som genomgick en överlämning — spåra vad som hände med dess farologg, dess användarforskning och dess team — och väg det mot den disciplin produktfinansiering kräver. Ett bra svar identifierar ett konkret fall, kvantifierar eller åtminstone karakteriserar den förlorade kunskapen och är uppriktigt om vilka organisatoriska hinder (finansieringscykler, resursregler, styrningsstrukturer) som skulle behöva flytta sig för att varaktiga produktteam ska bli normen.

4. **Vem är mest sannolikt att uteslutas eller skadas av de tjänster vi bygger, och kan vi peka på var vi utformade för dem först snarare än sist?**
   Ämnet insisterar på att jämlikhet är oförhandlingsbar och att en tjänst som bara fungerar för de digitalt självsäkra vidgar hälsoojämlikheter, så frågan prövar om ”utforma för de svåraste fallen” är en levande praxis eller en slogan. Den spelar roll eftersom utestängning inom hälsa och vård inte är en olägenhet utan en säkerhets- och tillgångsskada: Core20PLUS5-populationerna, människor med begränsad digital åtkomst, låg hälsolitteracitet eller ingen smartphone är just de vars behov är störst, och en tjänst som utformar bort dem koncentrerar skadan där den är minst överkomlig. Spänningen värd att lyfta är att utforma för marginalerna kostar tid och pengar i förväg — assisterade digitala vägar, tillgänglighet enligt WCAG, offline- och icke-digitala reservlösningar, översättning — och de kostnaderna är lätta att skjuta upp när ett leveransdatum närmar sig och den självsäkra majoriteten redan kan använda tjänsten. Se på en verklig tjänst och fråga vem som ingår i dess användarforskningsurval, om en analys av jämlikhet och hälsoojämlikheter faktiskt formade ett designbeslut och vad som händer med någon som inte kan eller inte vill gå online. Ett ärligt svar namnger de specifika grupper som är i riskzonen för den här tjänsten, visar minst ett konkret designval gjort för dem och är uppriktigt om var teamet bytte bort inkludering under tryck och hur det skulle försvara den avvägningen nästa gång.

5. **Var uppfinner vi rörmokeri som redan finns, och var skulle byggande enligt öppna standarder och återanvändning av gemensamma plattformar faktiskt ändra vad vi levererar?**
   Att utforma för interoperabilitet och återanvändning är en av ämnets bästa praxis, och frågan får teamet att konfrontera dragningen att bygga skräddarsytt snarare än återanvända — inloggningen, aviseringarna, journalintegrationen som ett dussin andra team också har byggt. Den spelar roll eftersom varje återuppfunnen komponent i ett fragmenterat system är offentliga medel spenderade två gånger och en ny silo som inte kan utbyta data säkert; omvänt är det att bygga enligt HL7 FHIR och SNOMED CT och återanvända den tunnaste fungerande plattformen det som överhuvudtaget låter en tjänst ta sig igenom upphandling och dela data över ett ICS. Den verkliga avvägningen är att återanvändning innebär beroende: en gemensam plattform kan vara långsammare, mindre skräddarsydd eller styras av någon annans färdplan, så teamet måste väga bromsen av en gemensam komponent mot den långsiktiga kostnaden och risken med en skräddarsydd silo. Granska ett aktuellt bygge och lista vad som är genuint nytt kontra vad som dubblerar en befintlig plattform, standard eller öppen komponent, och kontrollera om ”vi kan inte återanvända det” är en belagd restriktion eller ett oprövat antagande. Ett bra svar skiljer de delar som är värda att bygga från de som är värda att återanvända, är ärligt om mognaden och styrningen hos de plattformar som erbjuds och förbinder sig till öppna standarder för allt som måste utbyta data.

6. **Hur anpassar vi tyngden i vår styrning efter risknivån, och var är kvalitetssäkringen för närvarande antingen för tung för lågriskförändringar eller för lätt för högriskförändringar?**
   Proportionerlig styrning är en bärande idé i det här ämnet — högrisk-kliniska förändringar förtjänar djup granskning medan lågrisk-innehållsändringar inte bör vänta veckor på en styrelse — och frågan prövar om organisationen kalibrerar kvalitetssäkring mot risk eller tillämpar en enda trubbig process på allt. Den spelar roll eftersom felinställd styrning skadar åt båda håll: en tung spärr av typen en storlek passar alla får team att samla ihop förändringar och bromsar just den iteration som håller tjänster säkra, medan en genomgående lätt hand släpper igenom en genuint högrisk-klinisk förändring utan den granskning av klinisk säkerhet och informationsstyrning den behöver. Spänningen är att proportionalitet kräver omdöme, och omdöme är obekvämt för styrelser och revisorer som tycker att en enda obligatorisk checklista är lättare att försvara än en riskindelad väg. Se på hur era senaste tolv förändringar kvalitetssäkrades, sortera dem efter faktisk klinisk risk och datarisk, och se om den lagda insatsen följde risken eller kalendern. Ett ärligt svar identifierar konkreta exempel på både över- och understyrning, föreslår tydliga kriterier för att dela in förändringar efter risk och namnger vem som har befogenhet att avgöra nivån och vara ansvarig för den.

## I praktiken: ett exempel från hälsa och vård

Ett integrerat vårdsystem vill ge kliniker över tre akutsjukhus, närsjukvård och kommunal socialtjänst en **gemensam vårdjournal**. Det gamla sättet skulle upphandla ett program med fast omfattning, specificera varje skärm i förväg och integrera sent.

I stället bildar ICS ett multidisciplinärt team: en produktchef, en leveranschef, en användarforskare, en interaktionsdesigner, två utvecklare, en klinisk säkerhetsansvarig och en ansvarig för informationsstyrning, med tillgång till en Caldicott Guardian och en socialtjänstpraktiker. De kör en åtta veckor lång upptäcktsfas och observerar hur en distriktssköterska, en akutläkare och en socialsekreterare faktiskt försöker hitta information i dag. De upptäcker att den verkliga smärtan inte är ”inga data” utan ”data vars aktualitet de inte kan lita på”.

Teamet levererar en snäv alfa: skrivskyddad åtkomst till allergier, läkemedel och aktuell status för vårdplanen för ett kliniskt vårdförlopp, med en synlig stämpel för ”senast uppdaterad”. Klinisk säkerhet körs parallellt; en farologg förs från vecka ett. De mäter om kliniker slutar ringa andra team för att bekräfta information. Först när den tunna skivan visar sig värdefull och säker vidgar de journalen — finansierad som en fortlöpande produkt, inte ett avslutat projekt.

## Sektorperspektiv

Samma fyra tryck — säkerhet, jämlikhet, skyldighet, pengar — påverkar varje organisation, men de arbetssätt som möter dem förskjuts med skala, finansiering och ansvarsutkrävande.

### Startup-företag

Ett litet digitalt hälsoföretag lever eller dör på fokus, så dess arbetssätt är magra av nödvändighet: ett multidisciplinärt team, platt beslutsfattande och daglig kontakt med användare. Begränsningen är marginalen (runway), inte regler om antal anställda, så upptäckt mäts i veckor och evidens samlas in billigt — en handfull kliniska intervjuer, en klickbar prototyp, en ärlig farologg förd av en deltids klinisk säkerhetsansvarig. Faran är att hoppa över säkerhet och stringens i informationsstyrning för att nå ett investerarmål; den disciplin som håller för granskning är att behandla DCB0129 och en konsekvensbedömning avseende dataskydd som inträdeskriterier för en pilot, inte pappersarbete som skjuts upp tills ett sjukhus frågar. Interoperabilitet från dag ett (FHIR, SNOMED CT) är också en kommersiell tillgång, eftersom ett startup-företag som inte kan utbyta data aldrig kommer att ta sig igenom NHS upphandling.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem eller en hemtjänstorganisation, en klinik på en enda ort eller en blygsam hälsotekniksleverantör som passerat stadiet före intäkter — bär samma tryck från säkerhet, jämlikhet, skyldighet och pengar som ett stort sjukhus men med en bråkdel av förmågan att möta dem. Arbetssätt här måste vara radikalt proportionerliga: det finns sällan ett dedikerat digitalt team eller IG-team, så det ”multidisciplinära teamet” är ofta en handfull personer med flera hattar plus en delad eller utlagd resurs för klinisk säkerhet och dataskydd. Fällan är att anta att de lagstadgade skyldigheterna krymper med organisationen — det gör de inte, så klinisk säkerhet enligt DCB0129/DCB0160, en konsekvensbedömning avseende dataskydd och tillgänglighet gäller fullt ut även när en enda praktikchef är ansvarig för alla. Den praktiska disciplinen är att luta sig hårt mot återanvändning snarare än att bygga: anta ackrediterade standardsystem, insistera på att leverantörer uppfyller DTAC och öppna standarder (FHIR, SNOMED CT) och använd nationella och ICS-tillhandahållna plattformar så att säkerhet, interoperabilitet och informationsstyrning ärvs i stället för att uppfinnas på nytt med knappa medel.

### Storföretag

Ett NHS-sjukhus (trust) eller ICS har det motsatta problemet: överflöd av process och fragmenterat ägarskap. Arbetssätt här handlar lika mycket om att *avlära sig* — att avveckla programvanor med fast omfattning, lägga ned projektteam som upplöses och byggs upp på nytt — som om att anta nya praxis. Ansvarsutkrävandet är formellt och personligt (en senior responsible owner, en Caldicott Guardian, godkännande av klinisk säkerhet på styrelsenivå), så vinsten ligger i att bädda in de rollerna i leveransteamet i stället för att bygga på dem som spärrar. En stor leverantör av hälsoteknik eller läkemedel möter spegelbilden: stark teknisk mognad men avstånd till frontlinjens kliniska verklighet, vilket multidisciplinära team med verklig klinikertid finns till för att stänga.

### Staten

Ett nationellt eller lokalt offentligt organ — NHS England, DHSC, UKHSA, en lokal myndighet — sätter de standarder alla andra arbetar efter, så dess arbetssätt sprider sig utåt. Dess ansvarsutkrävande gäller parlamentet och allmänheten, vilket höjer ribban för transparens, utgiftskontroll och jämlikhet: en tjänstestandard, en publicerad kvalitetssäkringsväg och Core20PLUS5-skyldigheter är instrument för det ansvarsutkrävandet, inte valfria tillägg. Risken i denna skala är att utforma centralt för en genomsnittsmedborgare som inte finns och att föreskriva en lösning innan man förstått lokala behov. Botemedlet är samma användarcentrerade, iterativa disciplin som överallt annars, tillämpad med en benägenhet att sätta öppna standarder och återanvändbara plattformar som federerade organisationer kan bygga på — att styra systemet, inte bara leverera en tjänst.

## Vanliga felmönster

- **Lösningen först i leveransen.** Att förbinda sig till en namngiven produkt innan behovet är förstått. Motmedel: finansiera upptäcktsfas och gör användarbehov till inträdeskriteriet för bygge.
- **Styrning som sen spärr.** Klinisk säkerhet och informationsstyrning som rådfrågas först vid driftsättning, vilket tvingar fram omarbete eller osäkra genvägar. Motmedel: bädda in båda i teamet från dag ett.
- **Projektomsättning.** Att bygga upp och riva team, och förlora hårt förvärvad domän- och säkerhetskunskap. Motmedel: produktfinansiering och varaktiga team.
- **Pilotpurgatoriet.** Ändlösa piloter som aldrig skalar eftersom införande, utbildning och verksamhetsförändring aldrig resurssattes (se Ämne 8.1 — Förändringsledning). Motmedel: planera vägen till skala före piloten.
- **Jämlikhet som eftertanke.** Att utforma för den självsäkra majoriteten och utesluta dem som behöver vård mest. Motmedel: utforma för de svåraste fallen först.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Team | Roller lånas ad hoc per projekt | Vissa MDT, instabil sammansättning | Stående MDT med full färdighetsmix inklusive klinisk säkerhet | Teamstabilitet och glapp i färdighetsmix följs och bemannas mot mål | Bemyndigade produktteam, låg omsättning, djup domänkunskap |
| Leverans | Big-bang, fast omfattning | Enstaka iteration, mestadels vattenfall | Iterativ leverans mot användarbehov | Flöde, utgivningsfrekvens och kvalitet mäts och styrs mot mål | Kontinuerlig leverans där säkerheten håller jämna steg |
| Evidens | Beslut efter senioritet | Viss data samlas in, används sällan | Klinisk evidens och leveransevidens informerar beslut rutinmässigt | Beslutskvalitet och utfallsmått följs och granskas | Beslut loggas, utvärderas och omprövas |
| Säkerhet och jämlikhet | Påbyggt vid driftsättning | Bedöms en gång, sent | Klinisk risk- och jämlikhetsanalys körs parallellt | Farostängning och mått på ojämlikheter redovisas och granskas | Kontinuerlig bevakning av faror och ojämlikheter |
| Styrning | Tung, en storlek passar alla | Inkonsekvent | Proportionerlig mot risk | Kvalitetssäkringskontroller mäts och granskas mot risknivåer | Adaptiv, snabb för låg risk, rigorös för hög |

## Checklista

- [ ] Varje tjänst har ett namngivet, stabilt multidisciplinärt team med färdigheter inom klinisk säkerhet och informationsstyrning.
- [ ] Inget bygge startar utan belagda användarbehov från upptäcktsfasen.
- [ ] Klinisk riskhantering (DCB0129/DCB0160) körs från dag ett, med en levande farologg.
- [ ] En analys av jämlikhet / hälsoojämlikheter har gjorts, och assisterade digitala vägar finns.
- [ ] Leveransen sker i små, frekventa, mätbara skivor.
- [ ] Beslut dokumenteras, med klinisk evidens skild från leveransevidens.
- [ ] Tjänster byggs enligt öppna interoperabilitetsstandarder och återanvänder gemensamma plattformar.
- [ ] Styrningens tyngd är anpassad efter risk och känd av teamet.
- [ ] Det finns en finansierad väg från pilot till skala, inklusive utbildning och förändring.

## Viktiga källor

- NHS digital service manual — *NHS service standard* och dess punkter, inklusive ”Use agile ways of working” och ”Create a team that includes multidisciplinary skills and perspectives” (service-manual.nhs.uk).
- GOV.UK Service Manual och *Government Service Standard* — Government Digital Service (gov.uk/service-manual).
- NHS England / NHSX — *Digital Technology Assessment Criteria (DTAC)*.
- Standarderna för klinisk säkerhet *DCB0129* och *DCB0160* (NHS England / tidigare NHS Digital).
- NICE — *Evidence Standards Framework for digital health technologies* (nice.org.uk).
- NHS England — *Core20PLUS5*-ansatsen för att minska hälsoojämlikheter.

## Referenser

1. User-centered design — Wikipedia — https://en.wikipedia.org/wiki/User-centered_design
2. Government Digital Service — Wikipedia — https://en.wikipedia.org/wiki/Government_Digital_Service
3. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
4. Iterative and incremental development — Wikipedia — https://en.wikipedia.org/wiki/Iterative_and_incremental_development
5. Interdisciplinarity — Wikipedia — https://en.wikipedia.org/wiki/Interdisciplinarity
6. Product management — Wikipedia — https://en.wikipedia.org/wiki/Product_management
7. Health equity — Wikipedia — https://en.wikipedia.org/wiki/Health_equity
8. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
9. Fast Healthcare Interoperability Resources (HL7 FHIR) — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
10. SNOMED CT — Wikipedia — https://en.wikipedia.org/wiki/SNOMED_CT
11. NHS service standard — NHS digital service manual, NHS England — https://service-manual.nhs.uk/standards-and-technology/service-standard
12. Government Service Standard — Government Digital Service, GOV.UK — https://www.gov.uk/service-manual/service-standard
13. Digital Technology Assessment Criteria (DTAC) — NHS England — https://www.nhs.uk/digital-technology-assessment-criteria-dtac/
14. Clinical Risk Management: DCB0129 and DCB0160 — NHS England — https://digital.nhs.uk/services/clinical-safety
15. Evidence Standards Framework for digital health technologies — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
16. Core20PLUS5 — NHS England — https://www.england.nhs.uk/about/equality/equality-hub/national-healthcare-inequalities-improvement-programme/core20plus5/
