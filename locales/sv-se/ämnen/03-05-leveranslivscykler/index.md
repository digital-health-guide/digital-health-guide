# Ämne 3.5 — Leveranslivscykler

**I en mening:** En [leveranslivscykel](https://en.wikipedia.org/wiki/Systems_development_life_cycle) är den sekvens av faser och beslutsgrindar — upptäckt (Discovery), alfa (Alpha), beta (Beta), drift (Live) och slutligen avveckling — genom vilken en digital tjänst rör sig, med klinisk säkerhet, informationsstyrning och kvalitetssäkring invävda i varje fas i stället för påklistrade i slutet.

## Varför detta är viktigt inom hälsa och vård

En livscykel är hur en organisation omvandlar en idé till en säker, levande tjänst och, så småningom, avvecklar den ansvarsfullt. Inom hälsa och vård bär varje övergång lagstadgad och klinisk tyngd: ni kan inte driftsätta ett system som berör patientvård utan ett kliniskt säkerhetsunderlag, och ni kan inte behandla konfidentiella patientdata utan rättslig grund och en slutförd [konsekvensbedömning avseende dataskydd](https://en.wikipedia.org/wiki/Privacy_impact_assessment) (DPIA). En livscykel som behandlar dessa som pappersarbete i slutet av projektet producerar tjänster som är sena, osäkra eller båda.

Insatserna är asymmetriska. En konsumentapp som levererar en bugg irriterar användare; en delad vårdjournal som levererar en bugg kan visa en kliniker fel patients allergier. Det är därför NHS bäddar in GOV.UK:s fasmodell *och* standarderna för klinisk riskhantering DCB0129 och DCB0160 i samma livscykel. Att få livscykeln rätt är inte en styrningsartighet — det är mekanismen genom vilken säkerhet, jämlikhet och valuta för offentliga pengar faktiskt levereras snarare än bara utlovas.

Ledare behöver också livscykeln eftersom den gör framsteg *läsbara*. Namngivna faser och grindar låter en styrelse se var en tjänst befinner sig, vilken evidens som finns och vilket beslut som är förestående — och ersätter dimman av ”det är nästan klart” med ett försvarbart, stegvis åtagande av offentliga medel.

## Grundläggande begrepp

**Fasmodellen: upptäckt → alfa → beta → drift.** NHS:s och GOV.UK:s tjänstestandarder definierar fyra faser. **Upptäckt** (se Ämne 3.4 — Upptäcktsfaser) förstår problemet. **Alfa** bygger [engångsprototyper](https://en.wikipedia.org/wiki/Software_prototyping) för att testa om en lösning *kan* fungera och för att bränna ned de riskablaste antagandena. **Beta** bygger den verkliga tjänsten, först privat och sedan publikt, på produktionsinfrastruktur, med iteration tillsammans med verkliga användare i växande skala. **Drift** kör tjänsten i kontinuerlig verksamhet, fortfarande under iteration, tills den avvecklas. Faserna är en riskreducerande ramp: varje fas förbinder mer pengar och exponerar fler användare, motiverat av evidens från den förra.

**Kontinuerlig iteration, inte ett löpande band.** Faserna är inte en enkelriktad vattenfallsmodell. En tjänst i beta kan gå tillbaka till alfa för en svår funktion; en tjänst i drift itererar kontinuerligt. Modellens värde ligger i dess *grindar*, inte i ett löfte om att arbetet flödar i en riktning.

**Agil, vattenfall och hybrid.** *[Vattenfall (waterfall)](https://en.wikipedia.org/wiki/Waterfall_model)* fastställer omfånget i förväg och fortskrider i sekvens — lämpligt endast där krav är genuint stabila och kända (en datacentermigrering, en föreskriven regelförändring). *[Agil](https://en.wikipedia.org/wiki/Agile_software_development)* levererar i små inkrement och inspekterar och anpassar — lämpligt för osäkerheten i användarvända tjänster. *Hybrid* är den ärliga verkligheten för de flesta stora hälsoprogram: agila produktteam som verkar inom ett ramverk av milstolpar och finansiering som organisationen och dess tillsynsmyndigheter kräver. Matcha metoden mot osäkerheten, inte mot modet.

**Tjänstebedömningar och standardgrindar.** Vid övergångarna mellan faser — särskilt alfa-till-beta och före offentlig lansering — möter NHS- och GOV.UK-tjänster en **tjänstebedömning (service assessment)**: en oberoende panel som testar arbetet mot Service Standards punkter (användarbehov, tillgänglighet, säkerhet, tillförlitlighet, team, teknikval). Att klara den är grinden för att spendera mer och exponera fler användare. Bedömningen är evidensbaserad kollegial granskning, inte en gummistämpel.

**Klinisk säkerhet och informationsstyrning som livscykeltrådar.** DCB0129 (för tillverkaren/leverantören) och DCB0160 (för den driftsättande hälso- eller vårdorganisationen) kräver ett system för klinisk riskhantering, en **riskförteckning (hazard log)** och en **rapport om kliniskt säkerhetsunderlag** godkänd av en namngiven, utbildad klinisk säkerhetsansvarig (Clinical Safety Officer, CSO). Informationsstyrning kräver en rättslig grund, en DPIA och efterlevnad av Caldicott-principerna. Båda är *trådar* som löper genom upptäckt, alfa, beta och drift — inte grindar i slutet.

**Avveckling.** En livscykel har ett slut. Att avveckla en tjänst tryggt — migrera eller arkivera data enligt bevarandelagstiftning, omdirigera användare, underrätta kliniker och bevara journaler — är en egen fas, och en av de mest försummade.

## Bästa praxis

1. **Använd faserna som riskreducerande grindar, inte kalendermilstolpar.** Låt varje fas beslut vara ”finns det tillräckligt med evidens för att motivera nästa tranche pengar och användare?” En fas som slutar för att datumet kom, snarare än för att evidensen är inne, har hoppat över grindens poäng.

2. **Väv in klinisk säkerhet från alfa, inte före drift.** Utse en klinisk säkerhetsansvarig och öppna riskförteckningen så snart en lösnings form finns. Faror identifierade i alfa är billiga att designa bort; faror som upptäcks vid driftsättning är en lanseringsblockerande kris. Säkerhetsunderlaget mognar tillsammans med tjänsten, så DCB0129/0160-godkännande är en sammanfattning av redan utfört arbete, inte en panikåtgärd.

3. **Starta DPIA och informationsstyrningsarbetet i upptäckten och håll det levande.** Dataflöden, rättslig grund och Caldicott-överväganden formar arkitekturen, så lyft dem medan arkitekturen fortfarande är mjuk. En DPIA skriven efter bygget är en dokumentationsövning; en skriven vid sidan av designen minskar faktiskt risk och förhindrar omarbete.

4. **Automatisera vägen till produktion med [CI/CD](https://en.wikipedia.org/wiki/CI/CD) och [DevOps](https://en.wikipedia.org/wiki/DevOps).** [Kontinuerlig integration](https://en.wikipedia.org/wiki/Continuous_integration) och [kontinuerlig leverans](https://en.wikipedia.org/wiki/Continuous_delivery) — automatiserade pipelines för bygge, test och driftsättning — låter ett team leverera små, reversibla ändringar tryggt och ofta. I en säkerhetskritisk domän är förmågan att driftsätta en rättelse på minuter och rulla tillbaka rent i sig en säkerhetskontroll. Para det med övervakning, larm och [infrastruktur som kod](https://en.wikipedia.org/wiki/Infrastructure_as_code) så att den levande tjänsten är [observerbar](https://en.wikipedia.org/wiki/Observability_(software)) och reproducerbar.

5. **Matcha metoden mot osäkerheten.** Använd agilt där användarbehov är osäkra och upptäckten fortfarande lär er saker; acceptera vattenfallsliknande sekvensering endast där kraven är genuint fasta och risken för förändring är låg. Var uttryckliga med att köra en hybrid — agila team inom ett programramverk — i stället för att låtsas att en metod styr allt, vilket lurar ingen och frustrerar alla.

6. **Behandla tjänstebedömningen som ett designverktyg, inte ett prov.** Ta in kvalitetssäkrings-, kliniska säkerhets-, säkerhets- och tillgänglighetsgranskare *tidigt* och ofta, så att den formella bedömningen bekräftar en tjänst som redan byggts enligt standard. Team som först möter standarden veckan före bedömningen misslyckas långsamt och dyrt; team som internaliserar den klarar den som en biprodukt.

7. **Fortsätt iterera i drift — och resursera det.** En tjänst slutar inte behöva ett team när den går i drift. Drift är där verklig användning blottlägger de sista ojämlikheterna, de sällsynta men allvarliga kliniska gränsfallen och tillgänglighetsglappen. Finansiera ett stående produktteam för tjänstens driftliv (se Ämne 5.0 — Produktledt arbete); en levande tjänst utan team är teknisk skuld som ackumulerar klinisk risk.

8. **Planera avvecklingen innan ni behöver den.** Avgör, medan ni bygger, hur tjänsten så småningom ska avvecklas: databevarande och migrering enligt journallagstiftning, omdirigering av användare, underrättelse av kliniker och arkivering av det kliniska säkerhetsunderlaget och granskningsspåret. En oplanerad avveckling lämnar data och användare strandade; en planerad är en kontrollerad, granskningsbar fas.

## Frågor att diskutera med ditt team

1. **Styrs våra fasgrindar genuint av evidens, eller har de i tysthet blivit datum i en plan?**
   Hela värdet i modellen upptäckt–alfa–beta–drift är att varje övergång förbinder mer pengar och exponerar fler användare endast när evidensen från föregående fas motiverar det; i det ögonblick en grind utlöses för att kvartalet tog slut snarare än för att evidensen är inne slutar rampen minska risk och blir ”vattenfall i agil förklädnad”. Frågan ber ett team att ärligt titta på sina senaste övergångar och fråga vad som hade hänt om evidensen hade sagt ”inte än” — fanns det utrymme att vänta, att föra en beta tillbaka till alfa för en svår funktion, eller var driftsättningsdatumet politiskt orubbligt? Spänningen att debattera är den mellan organisationens behov av läsbara, styrelseschemalagda milstolpar och verkligheten att säkra tjänster rör sig i evidensens takt, och hybridleverans bor just i den friktionen. Konkreta vinklar inkluderar att namnge det specifika beslut och den evidens som förfaller vid nästa grind, att kontrollera om ”sprintar” faktiskt ändrar omfång eller bara följer en fast plan och att fråga vem som är bemyndigad att skjuta upp en grind utan karriärrisk. Ett bra svar kan peka på ett verkligt fall där evidens ändrade planen, och kan formulera vilken evidens som skulle motivera — eller blockera — nästa åtagande av offentliga medel och användare.

2. **Är klinisk säkerhet och informationsstyrning levande trådar genom varje fas, eller pappersarbete vi tänker slutföra före driftstart?**
   Inom hälsa och vård är DPIA och det kliniska riskarbetet enligt DCB0129/0160 inte godkännanden i slutet av projektet utan trådar som måste forma arkitektur och design från alfa och framåt, eftersom en fara som designas bort tidigt är billig medan en som upptäcks vid driftsättning är en lanseringsblockerande kris — eller värre, ett tryck att vifta igenom säkerhetsunderlaget. Frågan lyfter om en namngiven, utbildad klinisk säkerhetsansvarig och en öppen riskförteckning finns så snart en lösnings form framträder, och om DPIA och analysen av rättslig grund började i upptäckten medan dataflödena fortfarande var mjuka nog att ändra. Avvägningen värd att debattera är den kännbara bromsen av att göra detta kontinuerligt kontra den långt större kostnaden och kliniska risken av en eftermontering, särskilt för mindre team eller startup-företag där ingen tillsynsmyndighet ännu tittar men DCB0129-skyldigheten gäller tillverkaren oavsett. Beakta konkret evidens: visar riskförteckningen faror som hittats och mildrats i alfa, läses säkerhetsunderlaget som en sammanfattning av redan utfört arbete och kan DPIA spåras till verkliga designbeslut? Ett ärligt svar skiljer ett team som mognar sitt säkerhetsunderlag tillsammans med tjänsten från ett som styr mot en dokumentationspanik månaden före lansering.

3. **Hur ska denna tjänst drivas i drift och så småningom avvecklas — och vem är finansierad för att göra det?**
   Livscykler har en lång svans som organisationer rutinmässigt underfinansierar: drift är där verklig användning blottlägger de sista ojämlikheterna, sällsynta men allvarliga kliniska gränsfall och tillgänglighetsglapp, och den behöver ett stående produktteam, övervakning och snabb, reversibel driftsättning snarare än ett team som upplöses vid driftsättning och lämnar tjänsten att ruttna och i tysthet ackumulera klinisk risk. Lika försummad är avvecklingen — att avveckla en tjänst enligt bevarandelagstiftning, migrera eller arkivera data, omdirigera användare, underrätta kliniker och bevara riskförteckningen och granskningsspåret — vilket för ett nationellt system är ett stort program i sig, inte en eftertanke när ersättaren anländer. Spänningen att debattera är årliga finansieringscykler och trycket att förklara ett projekt ”klart” vid lansering kontra det helhetslivsansvar en säker tjänst faktiskt kräver. Användbara vinklar inkluderar om en CI/CD-pipeline med övervakning och snabb återställning behandlas som en säkerhetskontroll i drift, om en jourbudget och iterationsbudget överlever driftsättningsfirandet och om en utträdesplan skrevs medan ni byggde snarare än improviserades i panik. Ett bra svar namnger vem som äger tjänsten under dess driftliv och beskriver en kontrollerad, granskningsbar avveckling snarare än ett hopp om att någon tar hand om det senare.

4. **När lät vi senast en prototyps misslyckande stoppa oss — och bygger vi fortfarande saker för att kasta dem?**
   Alfa finns för att billigt bränna ned de riskablaste antagandena, vilket innebär att en engångsprototyp som misslyckas har gjort sitt jobb: den har köpt en kostsam läxa innan produktionspengar och verkliga patienter förbundits. Frågan prövar om ett team genuint behandlar alfa som engångsinlärning eller i tysthet har glidit in i att polera sin första prototyp till den slutliga produkten för att det känns slösaktigt att skrota kod — sunkenkostnadsfällan som gör en riskreducerande fas till ett dyrt åtagande gjort i blindo. Spänningen värd att lyfta är trycket att ”ha något att visa” och återanvända varje skriven rad mot disciplinen att bevisa att en lösning *kan* fungera innan den riktiga byggs på produktionsinfrastruktur. Konkreta vinklar inkluderar att fråga vilka antaganden den senaste alfan faktiskt testade, om någon prototyp någonsin övergavs på evidens och om den privata betabygget återanvände engångskod som borde ha skrivits om till produktionsstandard. Ett ärligt svar kan peka på ett specifikt antagande som en prototyp dödade eller bekräftade, och kan skilja inlärningsartefakter teamet var villigt att kasta från den kvalitetssäkrade kod det nu kör i drift.

5. **Kör vi en ärlig hybrid, eller flera förklädda metoder som i tysthet motsäger varandra?**
   De flesta stora hälsoprogram är genuint hybrida — agila produktteam som verkar inom ett ramverk av milstolpar och finansiering som organisationen och dess tillsynsmyndigheter kräver — och felet är inte hybriden i sig utan att låtsas att den är ren agil eller ren vattenfall, så att de två logikerna kolliderar ohanterat vid varje grind. Frågan ber ett team att namnge var de fasta, sekvenserade åtagandena faktiskt sitter (finansieringstrancher, regulatoriska milstolpar, integrationsfrysningar) och var den genuina iterationen sker, i stället för att låta ”agilt” och ”planen” var och en göra anspråk på hela programmet och frustrera alla. Avvägningen att debattera är organisationens legitima behov av förutsägbara milstolpar och granskningsbara utgifter mot leveransteamets behov att ändra omfång på evidens, och det ärliga draget är att göra skarvarna explicita så att båda kan planeras kring. Användbara vinklar inkluderar om omprioritering av efterfrågelistan någonsin överlever mötet med programplanen, om leverantörer kontrakteras för fast omfång medan de ombeds arbeta iterativt och om den rapportering en styrelse ser matchar hur arbetet faktiskt bedrivs. Ett bra svar beskriver en medvetet utformad hybrid med namngivna fasta punkter och namngivna flexibla utrymmen, inte en röra där metod åberopas för skens skull.

6. **Hur väl vet vi vad en levande tjänst faktiskt gör med sina användare just nu — och skulle vi märka skada innan de rapporterade den?**
   En levande hälsotjänst är bara så säker som dess observerbarhet: övervakning, larm och de kliniska säkerhetsinstinkter som gör ett mått till en fara är skillnaden mellan att fånga en defekt med inaktuella data på minuter och att få veta om den från en incidentrapport veckor senare. Frågan prövar om teamet kan se tjänsten i produktion — felfrekvenser, integrationsfel, tillgänglighetsavhopp, de jämlikhetsglapp som bara verklig användning avslöjar — och om någon tittar på instrumentpanelerna med klinisk risk i åtanke, inte bara infrastrukturens drifttid. Spänningen är kostnaden och disciplinen för ordentlig observerbarhet och jour mot det tysta antagandet att ”inga nyheter är goda nyheter” när en tjänst väl är i drift, vilket i en säkerhetskritisk domän är hur tyst skada ackumuleras. Konkreta vinklar inkluderar om riskförteckningen uppdateras från levande incidenter, om larm kopplas till klinisk påverkan snarare än bara serverhälsa och om en dålig utgåva kan upptäckas och rullas tillbaka innan den når många patienter. Ett ärligt svar beskriver specifika signaler teamet bevakar, en verklig incident som övervakningen fångade (eller missade) och hur levande evidens matas tillbaka in i nästa iteration.

## I praktiken: ett exempel från hälsa och vård

Ett NHS-sjukhus för närsjukvård (community trust) ersätter ett äldre system med papper och kalkylblad för schemaläggning av distriktssköterskors besök. Ut ur upptäckten (Ämne 3.4) går teamet in i **alfa** och bygger två engångsprototyper för att testa de riskablaste antagandena: att sjuksköterskor kommer att använda en telefon i patienters hem, och att schemat kan integreras med den elektroniska patientjournalen. En klinisk säkerhetsansvarig utses första dagen i alfa och öppnar en riskförteckning; en tidig fara — ett inaktuellt schema som visar ett besök som redan utförts av en kollega — driver ett designbeslut att visa synkroniseringsstatus i realtid. DPIA, påbörjad i upptäckten, flaggar att positionsdata för ensamarbetande behöver en definierad rättslig grund och bevarandegräns.

Vid **tjänstebedömningen alfa-till-beta** granskar en oberoende panel tillgänglighet (sjuksköterskor med synnedsättning), säkerhet och teamets resonemang. Tjänsten klarar sig med åtgärdspunkter. I **privat beta** använder tio sjuksköterskor det riktiga systemet på produktionsinfrastruktur; en CI/CD-pipeline låter teamet leverera dagligen och rulla tillbaka en dålig utgåva på under tio minuter. Användningen avslöjar ett jämlikhetsproblem — vikariepersonal utan sjukhusenheter — vilket leder till en webbläsarbaserad reservlösning. **Publik beta** skalar till tre lokalområden; rapporten om det kliniska säkerhetsunderlaget slutförs och godkänns enligt DCB0160 före bredare utrullning.

Tjänsten går i **drift** med ett stående produktteam, övervakningspaneler och en jourrota. Arton månader senare, när sjukhuset antar en regional plattform, **avvecklas** schemat enligt plan: data migreras enligt bevarandeschemat, sjuksköterskor utbildas om och omdirigeras, och riskförteckningen och säkerhetsunderlaget arkiveras för granskning. Varje övergång var ett beslut backat av evidens, inte ett datum i ett Gantt-schema.

## Sektorperspektiv

### Startup-företag

Ett startup-företags livscykel är komprimerad och i hög grad självstyrd: det finns ingen oberoende tjänstebedömningspanel, så disciplinen i grindarna alfa–beta–drift måste vara självpåförd annars kollapsar den till ”leverera kontinuerligt och hoppas”. Fördelen är att ett litet team kan köra genuin CI/CD från dag ett och iterera snabbare än något stort organ. Faran är att i tysthet släppa trådarna för klinisk säkerhet och DPIA eftersom ingen tillsynsmyndighet ännu tittar — ett ödesdigert misstag inom hälsa, där DCB0129-skyldigheter gäller tillverkaren oavsett företagets storlek, och en ohanterad fara kan avsluta både produkten och företaget. Startup-företag bör anta fasmodellens avsikt — evidens före exponering — även utan ceremonin, och utse en klinisk säkerhetsansvarig (ofta på deltid) så snart en lösnings form finns.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem eller en klinik på en enda ort — möter vanligen livscykeln som *driftsättare* snarare än byggare: den upphandlar eller konfigurerar en leverantörs system, så DCB0160-godkännande av driftsättning och en lokal DPIA faller på den även utan något digitalt team internt. Faserna gäller fortfarande, men komprimerade och utlagda: ”alfa” är en övervakad pilot på några få verkliga patienter, ”beta” är en stegvis utrullning över praktiken och drift är business as usual med leverantörens uppdateringar som anländer kontinuerligt och till stor del utanför praktikens kontroll. Organisationen måste namnge en klinisk säkerhetsansvarig (ofta en kliniker som tar rollen ovanpå ett ordinarie arbete) och föra en riskförteckning för hur systemet *används* lokalt, eftersom tillverkarens DCB0129-arbete inte täcker driftsättningens specifika risker. Med knapp kassa och ingen dedikerad IT är den realistiska disciplinen att luta sig mot leverantörens kvalitetssäkring medan man äger de få beslut som bara lokal kunskap kan fatta — vem som utbildas, vad reservrutinen är när systemet ligger nere och hur patientdata flödar i just denna miljö.

### Storföretag

Ett NHS-sjukhus (trust) eller en större leverantör kör livscykeln i dess fullaste, mest kvalitetssäkrade form: formella tjänstebedömningar, en namngiven klinisk säkerhetsansvarig, DCB0160-godkännande av driftsättning, ändringsråd (change advisory boards) och en årlig finansieringscykel som det agila arbetet måste rymmas inom. Den karakteristiska utmaningen är hybriden — agila leveransteam som verkar inom ett program- och milstolpsramverk som organisationen och dess revisorer kräver — och det klassiska felet är ”vattenfall i agil förklädnad”, där grindar i tysthet blir kalenderdatum. Storföretag har resurserna att göra CI/CD, observerbarhet och stående produktteam ordentligt, men organisatorisk tröghet och äldre integrationer bromsar ofta driftsättningen till ett kryp. Ansvarsskyldigheten är bred och sprängradien stor, så den stegvisa rampen från privat beta till drift är inte valfri försiktighet utan nödvändig riskkontroll.

### Staten

Ett nationellt organ levererar under hela Service Standard, publicerade tjänstebedömningar, utgiftskontroller och parlamentarisk granskning, så varje fasgrind är också en punkt för offentlig ansvarsskyldighet. Livscykler här är långa och exponeringen enorm — en levande NHS-omfattande tjänst kan beröra miljontals — vilket höjer insatserna för den stegvisa rampen, kvalitetssäkringen av klinisk säkerhet och avvecklingen av de äldre system som ersätts. Upphandlingsregler och fleråriga finansieringsöverenskommelser formar vad ”agilt” kan betyda i praktiken, och att avveckla ett nationellt system (med decennier av journaler och lagstadgade bevarandeplikter) är ett stort program i sig. Avvägningen är kvalitetssäkring kontra hastighet: statlig leverans är kraftigt grindad, vilket skyddar säkerhet och offentliga medel men kräver medveten ansträngning för att hålla team iterande snarare än att falla tillbaka på big-design-up-front.

## Vanliga felmönster

- **Vattenfall i agil förklädnad.** Teamet kör ”sprintar” men omfång, datum och design var alla fastställda i förväg; iteration är teater. Motmedel: låt evidens vid varje grind genuint ändra planen.
- **Säkerhet och informationsstyrning påklistrade i slutet.** Det kliniska säkerhetsunderlaget och DPIA skrivs månaden före driftsättning, vilket blockerar lanseringen eller, värre, viftas igenom under tryck. Motmedel: öppna riskförteckningen och DPIA i alfa och låt dem mogna kontinuerligt.
- **Den stora smällen (big bang).** Tjänsten hoppar över privat/publik beta och går rakt till full utrullning, vilket exponerar alla användare för obeprövad programvara. Motmedel: använd den stegvisa rampen; öka exponeringen med evidens.
- **Den övergivna tjänsten i drift.** Leveransteamet upplöses vid driftsättning; tjänsten ruttnar och klinisk risk ackumuleras i tysthet. Motmedel: finansiera ett stående produktteam för driftlivet.
- **Bedömningsplugg.** Standarder ignoreras tills bedömningen närmar sig och uppfylls sedan ytligt. Motmedel: ta kontinuerligt in kvalitetssäkrings- och kliniska granskare.
- **Ingen utträdesplan.** Tjänsten avvecklas i panik när ersättaren anländer, vilket lämnar data och användare strandade. Motmedel: planera avvecklingen som en förstklassig fas.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Fasdisciplin | Ad hoc; faser hoppas över eller byter namn | Faser namngivna men grindar är kalenderstyrda | Evidensbaserade grindar styr utgifter och exponering | Grindbeslut följs mot definierade kriterier; utgifter och exponering redovisas och kvalitetssäkras | Portföljomfattande stegvis finansiering; svaga tjänster stoppas tidigt |
| Metodpassning | En metod tvingas på allt arbete | Agilt används, men inom rigid fast omfattning | Metod matchad mot osäkerhet; hybrid gjord explicit | Metodpassning granskas mot leveransmått; hybridskarvar styrs och mäts | Team anpassar metod kontinuerligt när osäkerheten ändras |
| Klinisk säkerhet och informationsstyrning | Hanteras efter bygget, om alls | Lyfts sent; klinisk säkerhetsansvarig/DPIA en lanseringspanik | Riskförteckning, säkerhetsunderlag, DPIA underhålls från alfa | Faror och kontroller för informationsstyrning följs med nyckeltal och kvalitetssäkras mot mål | Säkerhets- och informationsstyrningsevidens formar designen; godkännande är rutin |
| CI/CD och drift | Manuella, sällsynta, riskfyllda driftsättningar | Viss automatisering; långsamma, fruktade utgåvor | Automatiserad pipeline, övervakning, snabb återställning | Mått för driftsättning och tillförlitlighet (DORA) följs och styrs mot mål | Kontinuerlig leverans som säkerhetskontroll; stark observerbarhet |
| Drift och avveckling | Inget stående team; ingen utträdesplan | Team behålls ad hoc; avveckling improviseras | Finansierat produktteam; avveckling planerad | Driftprestanda och beredskap för avveckling mäts och styrs | Helhetslivsansvar; avvecklingar kontrollerade och granskade |

## Checklista

- [ ] Tjänsten har en uttrycklig aktuell fas (upptäckt / alfa / beta / drift) och ett namngivet nästa beslut.
- [ ] Fasövergångar är grindade på evidens, inte på datum.
- [ ] En klinisk säkerhetsansvarig är utsedd och en riskförteckning är öppen (DCB0129/0160) från alfa och framåt.
- [ ] En DPIA och en bedömning av rättslig grund (Caldicott, UK GDPR) började i upptäckten och hålls aktuella.
- [ ] Leveransmetoden är matchad mot graden av osäkerhet, och varje hybridarrangemang är explicit.
- [ ] Tjänstebedömningar är planerade, och kvalitetssäkrings-, säkerhets- och tillgänglighetsgranskare tas in tidigt.
- [ ] En CI/CD-pipeline med övervakning och snabb återställning finns på plats före publik beta.
- [ ] Tjänsten exponeras för användare i en stegvis ramp (privat beta → publik beta → drift), inte big bang.
- [ ] Ett stående produktteam är finansierat för tjänstens driftliv (se Ämne 5.0).
- [ ] En avvecklingsplan täcker databevarande/migrering, omdirigering av användare och arkivering av säkerhets- och granskningsjournaler.

## Viktiga källor

- GOV.UK Service Manual — faserna i ett agilt projekt (upptäckt, alfa, beta, drift) och Government Service Standard.
- NHS England — NHS Service Standard och NHS Digital Service Manual; NHS-tjänstebedömningar.
- NHS England Digital — DCB0129 (Clinical Risk Management: its Application in the Manufacture of Health IT Systems) och DCB0160 (its Application in the Deployment and Use of Health IT Systems).
- NHS England — Digital clinical safety assurance; rollen som klinisk säkerhetsansvarig, riskförteckning och rapport om kliniskt säkerhetsunderlag.
- NHS England — Digital Technology Assessment Criteria (DTAC).
- UK Caldicott Principles; Data Protection Act 2018 / UK GDPR och konsekvensbedömningar avseende dataskydd.
- NICE — Evidence Standards Framework for Digital Health Technologies.
- DevOps och praxis för kontinuerlig leverans (t.ex. DORA-förmågorna: kontinuerlig integration, driftsättningsautomatisering, övervakning); GOV.UK Service Manuals vägledning om kontinuerlig leverans och att driva en tjänst.

## Referenser

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
