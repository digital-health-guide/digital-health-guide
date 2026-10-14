# Ämne 3.0 — Användarforskning och tjänstedesign

**Inom hälsa och vård är det att förstå de människor som använder och levererar en tjänst inte en inledande artighet utan den primära disciplinen för säkerhet, jämlikhet och förtroende, som avgör om något ni bygger faktiskt hjälper.**

## Varför detta är viktigt inom hälsa och vård

Den första punkten i NHS Service Standard, ärvd från Government Digital Service (GDS), är ”förstå användare och deras behov”. Den placeras först med avsikt. Nästan varje undvikbart misslyckande i en digital hälsotjänst kan spåras till en tjänst som utformats kring ett antagande om människor snarare än evidens om dem: ett bokningsflöde som förutsätter att alla har en smartphone och en stabil adress, en symtomkontroll som bara validerats på personer som läser flytande engelska, ett utskrivningsbrev skrivet för kliniker och räckt till en rädd patient.

I de flesta sektorer producerar missförstånd av användare slöseri. Inom hälsa och vård kan det producera skada. En person som inte kan slutföra en remiss på nätet överger inte bara en varukorg; de kan klara sig utan vård, söka senare och sjukare eller falla helt ur ett vårdförlopp. Eftersom de människor som mest behöver vård ofta är de som minst kan navigera en dåligt utformad tjänst — äldre, personer med kognitiv nedsättning, människor i kris, människor som inte talar engelska, människor utan digital åtkomst — vidgar dålig design aktivt ojämlikhet. Detta hänger direkt ihop med Ämne 1.9 — Digital inkludering och tillgänglighet, och det är skälet till att användarforskning i denna sektor är en styrningsfråga, inte bara en designfiness.

Hälso- och sjukvårdstjänster är också ovanligt komplexa att förstå. ”Användaren” är sällan en person som agerar ensam. Det är en patient och en anhörig, en receptionist och en allmänläkare, en distriktssköterska och en sjukhusfarmaceut, var och en med olika behov, som rör sig genom ett vårdförlopp som korsar organisatoriska gränser. Tjänstedesign ger er verktygen att se hela det systemet snarare än den enda skärmen framför er. Att göra detta arbete väl är hur ni förtjänar rätten att fatta evidensdrivna beslut (Ämne 1.3 — Evidensdrivna beslut) i stället för att försvara åsikter i ett mötesrum.

## Grundläggande begrepp

[Användarcentrerad design](https://en.wikipedia.org/wiki/User-centered_design) (UCD) är ett ramverk där behoven, egenskaperna, uppgifterna och miljön hos de människor som ska använda en produkt eller tjänst ägnas varaktig uppmärksamhet i varje skede, så att tjänsten anpassar sig till människor snarare än tvingar människor att anpassa sig till den. Dess bredare släkting, [människocentrerad design (human-centred design)](https://en.wikipedia.org/wiki/Human-centered_design) (HCD), tillämpar samma filosofi på hela system, tjänster och policyer, och är kodifierad i den internationella standarden ISO 9241-210.

[Tjänstedesign](https://en.wikipedia.org/wiki/Service_design) är praxis att planera och ordna de människor, den infrastruktur, den kommunikation och de materiella komponenter som en tjänst består av för att förbättra dess kvalitet och samspelet mellan tjänsten och dess användare. Den skiljer sig från — och beror på — smalare discipliner: interaktionsdesign formar hur en person rör sig genom ett enskilt gränssnitt, och innehållsdesign säkerställer att orden, strukturen och informationen möter ett användarbehov på klaraste möjliga sätt. Tjänstedesign zoomar ut till hela resan, inklusive de delar som sker offline, per telefon eller mellan personal.

[Double Diamond](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)), populariserad av UK Design Council, beskriver design som två länkade faser av divergerande och sedan konvergerande tänkande: **upptäck** (utforska problemet brett), **definiera** (konvergera på rätt problem att lösa), **utveckla** (utforska möjliga lösningar) och **leverera** (konvergera på en som fungerar och förfina den). Den första diamanten skyddar mot att lösa fel problem; den andra mot att bygga lösningen dåligt. Den kartläggs naturligt på Ämne 3.4 — Upptäcktsfaser.

Er evidens kommer från [kvalitativ forskning](https://en.wikipedia.org/wiki/Qualitative_research) — icke-numeriska data som förklarar *varför* och *hur* människor beter sig — och kvantitativ forskning, som talar om *hur många* och *hur ofta*. Kvalitativa metoder inkluderar [kontextuell undersökning (contextual inquiry)](https://en.wikipedia.org/wiki/Contextual_inquiry) och [etnografi](https://en.wikipedia.org/wiki/Ethnography), där ni observerar människor i deras verkliga miljö; djupintervjuer; och [användbarhetstestning](https://en.wikipedia.org/wiki/Usability_testing), där ni ser en person försöka utföra verkliga uppgifter med en prototyp eller en levande tjänst. Kvantitativa metoder inkluderar enkäter, analys och A/B-testning. Ni behöver båda: tal visar var ett problem finns; berättelser visar vad det är.

Ni gör fynd användbara genom designartefakter. En [persona](https://en.wikipedia.org/wiki/Persona_(user_experience)) är en evidensbaserad, representativ karakterisering av en grupp användare. En [användarresekarta (user journey)](https://en.wikipedia.org/wiki/User_journey) spårar en persons upplevelse över tid och kontaktpunkter och blottlägger var ansträngning och oro klumpar sig. En [tjänsteritning (service blueprint)](https://en.wikipedia.org/wiki/Service_blueprint) förlänger resan under ”synlighetslinjen” för att visa de personalhandlingar och stödsystem på scen och bakom scenen som gör varje steg möjligt.

Slutligen är [samproduktion (co-production)](https://en.wikipedia.org/wiki/Co-production_(approach)) en ansats där patienter, anhöriga och allmänheten inte bara rådfrågas utan är genuina partner i att tänka ut, utforma och driva en tjänst. I NHS överlappar detta med patient- och allmänhetsmedverkan (patient and public involvement, PPI), förväntan att människor som berörs av en tjänst hjälper till att forma den.

## Bästa praxis

1. **Börja med ett behov, inte en lösning.** Skriv ned användarbehovet innan någon skissar en skärm eller namnger en teknik. Ett gott behovsuttalande uttrycks ur användarens synvinkel (”Som någon som nyligen skrivits ut behöver jag veta vem jag ska ringa om mitt sår ser fel ut, så att jag inte hamnar tillbaka på akuten”). Om ni inte kan belägga behovet med forskning arbetar ni från ett antagande — märk det som sådant och gå ut och testa det innan ni spenderar pengar på det.

2. **Utforska hela tjänsten, inte gränssnittet.** Kartlägg resan från början till slut, inklusive telefonsamtalet, brevet, väntrummet och överlämningen mellan team. Bygg en tjänsteritning så att det osynliga arbetet bakom scenen — personalen som knappar in data på nytt, jagar svar eller kringgår ett trasigt system — blir synligt. Det mesta av den smärta patienter känner skapas i skarvarna mellan organisationer, vilket är exakt dit en omdesign av en enda skärm inte når.

3. **Använd blandade metoder och triangulera.** Para kvalitativt djup med kvantitativ bredd så att var och en kontrollerar den andra. Analys kan visa ett stort avhopp vid ett visst steg; intervjuer och användbarhetssessioner talar om att det beror på att formuleringen antyder en avgift som inte finns. Låt inte en övertygande anekdot åsidosätta data, eller ett stort dataset dölja den mänskliga orsaken bakom mönstret. Små, frekventa forskningsrundor slår en stor studie som levereras för sent för att ändra något.

4. **Rekrytera för kanterna, medvetet.** Om ni bara rekryterar självsäkra, digitalt kapabla, engelsktalande människor kommer ni att bygga en tjänst som fungerar för dem och utesluter alla andra. Sätt uttryckliga rekryteringskvoter för människor som är äldre, digitalt utestängda, kliniskt sårbara, neurodivergenta eller som använder hjälpmedelsteknik, och gå till dem i stället för att förvänta er att de kommer till er. Samarbeta med välgörenhetsorganisationer, gemenskapsgrupper och kliniska team för att nå människor ni inte kan rekrytera genom en panel.

5. **Gör forskningen etisk och trygg genom design.** Ta informerat samtycke på allvar, förklara tydligt hur data kommer att användas och låt människor dra sig ur när som helst. Ha en plan för skydd av utsatta personer vid sessioner med kliniskt eller känslomässigt sårbara deltagare, inklusive vad ni gör om någon berättar om risk eller blir upprörd, och betala deltagare rättvist för deras tid. Där forskning går över i verksamhet som kräver formellt godkännande — till exempel att involvera patienter som forskningsobjekt — kontrollera om Health Research Authority (HRA) styrning och etikgodkännande gäller, och involvera din Caldicott Guardian och informationsstyrningskollegor tidigt (se Ämne 1.7 — Informationsstyrning, dataskydd och cybersäkerhet).

6. **Samproducera, rådfråga inte bara.** Rör er uppför stegen från att informera människor, till att rådfråga dem, till att genuint dela makt med patienter, anhöriga och frontlinjepersonal genom hela arbetet. Ta in partner med egen levd erfarenhet i teamet från upptäckt och framåt, ge dem verkligt inflytande över beslut och ersätt dem ordentligt. Samråd ber människor reagera på er färdiga idé; samproduktion innebär att de hjälpte till att forma den, vilket ger bättre tjänster och långt större förtroende.

7. **Driv forskningsoperationer som delad infrastruktur.** Behandla ”ResearchOps” som en förmåga, inte en eftertanke: standardiserade samtyckesblanketter, en rekryteringspipeline för deltagare, ersättningsprocesser, etiska checklistor och framför allt ett sökbart forskningsarkiv där fynd, klipp och insikter lagras och taggas. Utan detta forskar varje team om samma saker på nytt, insikter avdunstar när människor flyttar och samma sårbara deltagare får samma frågor upprepade gånger.

8. **Utforma inkluderande och testa med hjälpmedelsteknik.** Inkluderande forskning och tillgänglig design är samma disciplin sedd från två ändar. Testa era prototyper med skärmläsare, förstoring, navigering enbart med tangentbord och innehåll i klarspråk, och inkludera personer med funktionsnedsättning i er deltagarpool som standard snarare än som en särskild studie. Att uppfylla Web Content Accessibility Guidelines (WCAG) är ett golv, inte ett tak; att observera en verklig skärmläsaranvändare slutföra en uppgift lär er saker en checklista aldrig gör (Ämne 1.9 — Digital inkludering och tillgänglighet).

9. **Sluta slingan från insikt till beslut till produkt.** Forskning skapar bara värde när den ändrar vad som byggs. Koppla insikter till efterfrågelistan så att prioritering speglar evidens för behov (Ämne 5.0 — Produktledt arbete), och för tillbaka forskning till deltagare och personal så att de ser att deras bidrag spelade roll. För en synlig förteckning över ”vad vi lärde oss och vad vi ändrade”, vilket skyddar arbetet när prioriteringar utmanas och bygger organisationens minne.

## Frågor att diskutera med ditt team

1. **Vems behov utformar vi faktiskt för, och vem saknas i rummet?** Innan ni godtar en forskningsplan, förhör urvalet. Lista varje typ av person som kommer att beröra tjänsten — patienter, anhöriga och de specifika personalrollerna — och markera ärligt vilka av dem ni har verklig evidens om och vilka ni gissar om. Var särskilt uppmärksamma på människor i marginalerna: de utan digital åtkomst, de i kris, de som inte talar engelska, de med kognitiva eller sensoriska nedsättningar. Fråga vad som skulle krävas för att nå dem och vad kostnaden för att inte nå dem skulle vara i termer av skada och ojämlikhet. Om er evidensbas lutar mot det lätt-att-rekrytera kommer er tjänst att göra det också. Detta är skillnaden mellan en tjänst som verkar fungera i en demo och en som fungerar i samhället.

2. **Var säger vi ”vi antar” och kallar det ”vi vet”?** Samla teamet och lista de föreställningar er nuvarande plan beror på — om hur människor beter sig, vad de vill, vad de kan göra och vad som hjälper dem. För varje föreställning, fråga vilken evidens ni har: är det direkt observation, en intressents åsikt, en leverantörs påstående eller genuint ingens idé klädd som fakta? Rangordna antagandena efter hur skadligt det skulle vara om de visade sig vara fel. De riskablaste obeprövade antagandena är dit er nästa forskningsrunda bör gå, för det är där pengar och säkerhet är mest exponerade. Att göra antaganden explicita är obekvämt men långt billigare än att upptäcka dem efter lansering. Ett moget team behandlar ”vi antog” som en varningsflagga att undersöka, inte en fras att försvara.

3. **Hur kommer forskning att ändra ett beslut, och vad händer om den inte gör det?** Det är möjligt att göra mycket forskning som inte ändrar något, vilket är värre än ingen alls eftersom det förbrukar välvilja och deltagartid. För varje planerad studie, kom i förväg överens om vilket beslut den ska informera och vad olika fynd skulle leda er att göra annorlunda. Diskutera vem som äger beslutet, hur insikter når dem och om teamet genuint är villigt att ändra kurs — inklusive att sluta — om evidensen pekar åt det hållet. Beakta hur ni håller insikt levande: ett arkiv ingen söker i är en kyrkogård. Prata om hur ni för tillbaka fynd till deltagare och frontlinjepersonal så att medverkan känns verklig snarare än utvinnande. Om det ärliga svaret är att beslutet redan är fattat, säg det och spara allas insats.

4. **Utforskar vi hela tjänsten, eller bara den del vi råkar äga?** Det mesta av den skada och frustration patienter upplever tillverkas i skarvarna — mellan brevet och telefonlinjen, mellan primär- och sekundärvård, mellan den digitala ingången och människan som måste knappa in på nytt det den fångade. Fråga ärligt hur långt er forskning når: stannar den vid kanten av er skärm, eller följer den personen in i väntrummet, callcentret och det arbete bakom scenen som personalen utför för att hålla tjänsten uppe? Diskutera om ni faktiskt har skuggat receptionister, bokningsmedarbetare och sjuksköterskor vars kringgåenden håller vårdförloppet vid liv, eftersom deras osynliga arbete vanligen är där det verkliga designproblemet sitter. Var försiktiga med ett bekvämt omfång som matchar ert teams uppdrag snarare än patientens resa, eftersom organisationsgränser är exakt där ansvar avdunstar. Ett ärligt svar namnger de delar av resan ni inte kan se och förbinder sig till en tjänsteritning som gör det bakom scenen synligt, även när den implicerar system ni inte kontrollerar. Att avgränsa bort skarvarna är hur en omdesign av en skärm slutar med att lösa ingenting.

5. **Hur håller vi deltagare trygga, och behandlar vi deras tid och berättelser som en kostnad vi är skyldiga?** Forskning inom hälsa och vård berör rutinmässigt människor som är sjuka, rädda, sörjande eller i kris, och en dåligt hanterad session kan göra verklig skada eller återtraumatisera någon. Gå igenom er plan för skydd av utsatta personer före fältarbetet: vad ni gör om en deltagare berättar om risk eller blir upprörd, vem som är i beredskap och när ni avbryter en session för personens skull snarare än studiens. Granska samtycke som en pågående relation snarare än en undertecknad blankett — människor måste förstå hur deras data och ord kommer att användas och kunna dra sig ur när som helst utan påföljd. Diskutera betalning rakt på sak, eftersom att förvänta sig att sårbara människor ska ge sin tid gratis är både utvinnande och snedvrider ert urval mot dem som har råd att vara frivilliga. Beakta om ni ställer samma överforskade gemenskaper samma frågor igen, och vad ni är skyldiga dem i gengäld. Ett ärligt svar behandlar omsorg, samtycke och rättvis ersättning som oförhandlingsbara villkor för att göra arbetet, inte som valfri polish.

6. **När evidensen kolliderar med vad ledningen, en kliniker eller en leverantör vill ha, vems version vinner?** Forskning förtjänar sin plats just när den levererar obekväma fynd, och det är i det ögonblicket organisatorisk dragningskraft drar hårdast mot att begrava dem. Diskutera vad som faktiskt händer i ert team när en studie motsäger ett affärscase, en senior klinikers intuition eller en leverantörs färdplan: granskas fyndet, eller uppmuntras forskaren i tysthet att mjuka upp det? Utforska hur oberoende era forskare verkligen är — om de kan rapportera att flaggskeppsprodukten utesluter de människor den var avsedd att betjäna utan att det kostar dem deras ställning eller nästa uppdrag. Namnge trycken ärligt, inklusive kommersiella incitament, sjunkna kostnader och motviljan att öppna ett beslut som kändes avgjort. Beakta att bygga in skydd: fynd delade råa med det bredare teamet, en synlig förteckning över vad som lärdes och en väg för obekväm evidens att nå beslutsfattare ofiltrerad. Ett ärligt svar erkänner var teamet tidigare har låtit auktoritet eller kommersiellt tryck åsidosätta evidens, och anger vad det ska göra annorlunda nästa gång.

## I praktiken: ett exempel från hälsa och vård

Ett integrerat vårdsystem (ICS) vill minska uteblivna öppenvårdsbesök, som är höga i en deprivierad stadsdel. Den uppenbara lösningen på bordet är en ny sms-påminnelse och en app för självbetjäning vid ombokning. Leveransansvarig insisterar på en tvåveckors upptäckt innan budgeten förbinds.

Teamet rekryterar medvetet för kanterna: vid sidan av självsäkra smartphoneanvändare inkluderar de en äldre man som delar en telefon med sin hustru, en kvinna som läser lite engelska och förlitar sig på sin vuxna dotter för att översätta brev och en man i tillfälligt boende vars adress ändras varje månad. De kör kontextuell undersökning i människors hem och skuggar reception- och bokningspersonal i två dagar. En tjänsteritning avslöjar sanningen bakom scenen: besöksbrev genereras centralt och postas, och anländer ofta efter besöket för människor som flyttar; de ”bekräftade” mobilnumren i patientjournalen är år gamla; och receptionspersonalen lägger timmar på att knappa in rättelser som aldrig når källsystemet.

Användarresekartan visar att de flesta ”missade” besök aldrig verkligen erbjöds — människor visste inte, kunde inte komma fram på telefonlinjen som öppnar klockan åtta eller hade inte råd med bussen den dagen. Antagandet att patienter valde att inte komma kollapsar under observation. En panel med levd erfarenhet, som samproducerar varje vecka, påpekar att en ombokningsapp skulle utesluta just de människor som missar besök nu.

Teamet omformulerar problemet från ”påminn människor bättre” till ”gör det möjligt att känna till, nå och ha råd med sitt besök”. De bygger fortfarande påminnelser, men de rättar också dataflödet för adress och telefonnummer, lägger till ett återuppringningsalternativ, erbjuder tider närmare hemmet och skriver om brevet i klarspråk med en översättningsväg. Samtycke, skydd av utsatta personer och godkännande av informationsstyrning ordnades före något hembesök, med Caldicott Guardian rådfrågad. Fynd, anonymiserade klipp och ritningen går in i ett delat arkiv så att nästa team ärver kunskapen. Uteblivna besök minskar — och, viktigare, de minskar mest bland dem som sviks hårdast.

## Sektorperspektiv

### Startup-företag

Ett digitalt hälsoföretag i startfasen lever eller dör på att hitta verkligt användarbehov snabbt, och dess fördel är hastighet. Ni kan köra gerillaanvändbarhetssessioner och veckointervjuer utan tung process, och det bör ni, eftersom att bygga fel sak är det vanligaste sättet tidiga företag dör. Faran är att förväxla entusiasm från tidiga användare — typiskt unga, digitalt självsäkra och friska — med evidens för brett behov i en klinisk population. Rekrytera åtminstone några genuint representativa och sårbara användare tidigt, även när det är långsamt och dyrt, och för ett lättviktigt arkiv från dag ett så att hårt förvärvad insikt inte går förlorad i nästa kursändring. Om ni planerar att sälja in i NHS är det att förstå hela tjänsten och dess säkerhetssammanhang vad som skiljer en demo från en driftsättningsbar produkt.

### Småföretag

En etablerad liten vårdgivare — en läkarpraktik, ett närapotek, ett vårdhem, en hemtjänstorganisation eller en klinik på en enda ort — betjänar redan verkliga patienter varje dag men har sällan en designer, forskare eller dedikerad IT-förmåga att ty sig till. Formell användarforskning känns som en lyx, men dessa organisationer håller något ett startup-företag skulle avundas: en receptionist, en praktikchef och kliniker som ständigt talar med tjänstanvändare och kan berätta exakt var den nuvarande processen brister. Det praktiska draget är att göra den vardagliga kontakten medveten — för en enkel logg över de frågor och klagomål människor tar upp, gå resan själva från ytterdörren till uppföljningen och rimlighetskontrollera varje ny leverantörs produkt mot hur era mest sårbara patienter faktiskt beter sig snarare än demon. Ni måste ändå uppfylla samma skyldigheter om samtycke, skydd av utsatta personer och tillgänglighet som ett stort sjukhus, så luta er mot delade NHS-mallar och standarder i stället för att uppfinna egna. Att välja ett system som genuint har utformats kring patienter och personal, och att säga ifrån när det inte har det, är det mest hävstångsrika forskningsbeslut en liten vårdgivare fattar.

### Storföretag

En stor vårdgivare eller leverantör har skala, befintliga användare och rika data, men har ofta forskning fragmenterad över team som aldrig delar vad de lär sig. Möjligheten är en genuin funktion för forskningsoperationer: ett delat arkiv, standardiserade etik- och samtyckesprocesser, en förvaltad deltagarpool och en disciplin att triangulera kvalitativ insikt med den analys ni redan håller. Risken är forskningsteater — studier beställda för att motivera beslut som redan tagits, eller personor tryckta på affischer som ingen använder. Insistera på att forskning kopplas till verkliga beslut och till efterfrågelistan, och skydda forskares oberoende så att de kan rapportera obekväma fynd utan karriärrisk.

### Staten

I brittisk förvaltning och NHS är användarcentrerad design inte valfri: NHS Service Standard och GDS tjänstebedömningar kräver att ni visar att ni förstår användare och deras behov, och tjänster bedöms mot detta vid fasgränser. Detta är en styrka, eftersom det ger forskare ett mandat och en plats vid bordet. Förpliktelserna går djupare än efterlevnad: offentliga tjänster måste fungera för hela befolkningen, inklusive de mest utestängda, vilket gör inkluderande rekrytering och samproduktion till en plikt snarare än en artighet. Arbeta öppet, publicera fynd där ni kan och var uppmärksamma på lagstadgade plikter om medverkan och jämlikhet. Felmönstret är att behandla tjänstebedömningen som ett hinder att klara snarare än ett genuint test av om ni har förstått de människor ni betjänar.

## Vanliga felmönster

- **”Vi antog” klätt som fakta.** Beslut byggda på intressenters åsikter eller leverantörspåståenden, utan användarevidens, och ingen som skiljer de två åt.
- **Att bara rekrytera de nåbara.** Urval som lutar mot digitalt självsäkra, engelsktalande, friska människor, så att tjänsten utesluter dem som behöver den mest.
- **Tunnelseende på gränssnittet.** Att omdesigna en skärm medan man ignorerar brev, telefonlinjer, personalens kringgåenden och överlämningar mellan organisationer där den verkliga smärtan finns.
- **Forskningsteater.** Studier som körs för att motivera ett redan fattat beslut, eller för att tillfredsställa en bedömning, utan vilja att ändra kurs.
- **Samråd som utger sig för samproduktion.** Att visa patienter en färdig design och kalla deras reaktion ”medverkan”, utan att någonsin dela verklig makt.
- **Insiktskyrkogården.** Fynd fångade i bildspel och individuella minnen, så att team forskar om samma frågor på nytt och bränner deltagares välvilja.
- **Utvinnande forskning.** Att ta människors tid och berättelser, ibland om smärtsamma ämnen, utan omsorg om samtycke, skydd av utsatta personer, rättvis betalning eller att någonsin tala om för dem vad som förändrades.
- **Tillgänglighet som eftertanke.** Att bara testa med kapabla användare och bygga på en WCAG-granskning i slutet, i stället för att utforma och forska inkluderande från början.

## Mognadsmodell

| Dimension | Initiera | Utveckla | Standardisera | Styra | Orkestrera |
|---|---|---|---|---|---|
| Evidens för behov | Beslut baserade på antagande och åsikt | Enstaka forskning, ofta efter bygget | Forskning föregår bygget; antaganden görs explicita och prövas | Evidenstäckning och antaganderisk följs; glapp i evidensbasen förvaltas aktivt mot överenskomna tröskelvärden | Kontinuerlig upptäckt matar en levande evidensbas; behov kontrolleras om över tid |
| Designens omfång | Enskilda skärmar och formulär | Resor kartlagda för vissa tjänster | Resor från början till slut och tjänsteritningar, inklusive bakom scenen | Ritningar hålls aktuella och överlämningspunkter mäts, med smärta i skarvarna bevakad och ägd | Hela vårdförlopp över organisationer utformas och mäts tillsammans |
| Deltagares inkludering | Bekvämlighetsurval av lätt nådda användare | Medvetenhet om glapp; viss uppsökande verksamhet | Uttryckliga kvoter för utestängda och sårbara grupper; testning med hjälpmedelsteknik | Rekrytering mot inkluderingskvoter mäts och kvalitetssäkras; representationsglapp redovisas och korrigeras | Samproduktion med partner med levd erfarenhet inbäddad från upptäckt |
| Forskningsoperationer | Ad hoc, per person | Delade mallar och viss etikpraxis | Funktion för ResearchOps: arkiv, samtycke, skydd av utsatta personer, rekryteringspipeline | Arkivanvändning, samtyckesefterlevnad och kontroller för skydd av utsatta personer bevakas mot definierade standarder | Arkivet används aktivt över team; återanvändning av insikter är normen |
| Påverkan på beslut | Forskning ändrar sällan något | Fynd informerar ibland efterfrågelistan | Insikter länkade till prioritering och återförda till deltagare | Forskningens inflytande på beslut följs, med varje studies beslut och utfall registrerade och granskade | Evidens driver synligt, och stoppar ibland, investeringsbeslut |

## Checklista

- [ ] Användarbehovet är skrivet ur användarens synvinkel och backat av evidens, inte antagande.
- [ ] Ni har identifierat varje användartyp — patienter, anhöriga och varje personalroll — och vet var er evidens är tunn.
- [ ] Rekryteringen inkluderar digitalt utestängda, kliniskt sårbara, icke-engelsktalande och användare av hjälpmedelsteknik, enligt uttrycklig kvot.
- [ ] Informerat samtycke, planer för skydd av utsatta personer, rättvis deltagarersättning och godkännande av informationsstyrning finns på plats före fältarbete; HRA- och Caldicott-vägar kontrollerade där det är relevant.
- [ ] Ni har kartlagt resan från början till slut och byggt en tjänsteritning som visar scenen och bakom scenen.
- [ ] Kvalitativa och kvantitativa metoder används tillsammans och trianguleras.
- [ ] Prototyper testas med verklig hjälpmedelsteknik och innehåll i klarspråk.
- [ ] Patienter och personal samproducerar arbetet med genuint inflytande, inte bara samråd.
- [ ] Ett sökbart forskningsarkiv håller fynd, är taggat och används faktiskt av andra team.
- [ ] Varje studie har ett namngivet beslut den informerar, och det finns en synlig förteckning över vad ni lärde er och vad ni ändrade.

## Viktiga källor

- NHS Service Standard — NHS England — den nationella standard vars första punkt är att förstå användare och deras behov.
- GOV.UK Service Manual — Government Digital Service — praktisk vägledning om användarforskning, användarbehov och att driva tjänster användaren först.
- Design Council: Framework for Innovation (the Double Diamond) — Design Council — den kanoniska beskrivningen av upptäck, definiera, utveckla, leverera.
- ISO 9241-210: Human-centred design for interactive systems — International Organization for Standardization — den internationella standarden för HCD-processen.
- Health Research Authority guidance — HRA — styrning och etikgodkännande för forskning som involverar patienter och allmänheten.
- NIHR guidance on patient and public involvement and co-production — National Institute for Health and Care Research — standarder för att involvera människor i hälsoforskning och tjänstedesign.

## Referenser

1. NHS Service Standard — NHS England — https://service-manual.nhs.uk/standards-and-technology/service-standard
2. Government Service Manual: User research — Government Digital Service — https://www.gov.uk/service-manual/user-research
3. Framework for Innovation: The Double Diamond — Design Council — https://www.designcouncil.org.uk/our-resources/the-double-diamond/
4. User-centered design — Wikipedia — https://en.wikipedia.org/wiki/User-centered_design
5. Human-centered design — Wikipedia — https://en.wikipedia.org/wiki/Human-centered_design
6. Service design — Wikipedia — https://en.wikipedia.org/wiki/Service_design
7. Double Diamond (design process model) — Wikipedia — https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)
8. Qualitative research — Wikipedia — https://en.wikipedia.org/wiki/Qualitative_research
9. Contextual inquiry — Wikipedia — https://en.wikipedia.org/wiki/Contextual_inquiry
10. Ethnography — Wikipedia — https://en.wikipedia.org/wiki/Ethnography
11. Usability testing — Wikipedia — https://en.wikipedia.org/wiki/Usability_testing
12. Persona (user experience) — Wikipedia — https://en.wikipedia.org/wiki/Persona_(user_experience)
13. User journey — Wikipedia — https://en.wikipedia.org/wiki/User_journey
14. Service blueprint — Wikipedia — https://en.wikipedia.org/wiki/Service_blueprint
15. Co-production (approach) — Wikipedia — https://en.wikipedia.org/wiki/Co-production_(approach)
16. ISO 9241-210: Ergonomics of human-system interaction — Human-centred design for interactive systems — International Organization for Standardization — https://www.iso.org/standard/77520.html
17. Health Research Authority — HRA — https://www.hra.nhs.uk/
18. Patient and public involvement and engagement — National Institute for Health and Care Research — https://www.nihr.ac.uk/patients-carers-and-the-public
