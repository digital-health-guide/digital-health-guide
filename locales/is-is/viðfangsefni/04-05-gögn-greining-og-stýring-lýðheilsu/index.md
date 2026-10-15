# Viðfangsefni 4.5 — Gögn, greining og stjórnun lýðheilsu þýðis

**Í heilbrigðis- og velferðarþjónustu er greining aðeins þess virði að smíða ef hún breytir ákvörðun, leið eða lífi — að breyta gögnum í innsæi sem nær til fólksins sem mest þarfnast þess, og gera það á vegu sem almenningur getur treyst.**

## Hvers vegna þetta skiptir máli í heilbrigðis- og velferðarþjónustu

Viðfangsefni 4.3 — Samvirkni og gagnastaðlar snýst um að flytja gögn örugglega milli kerfa svo þau berist þangað sem þeirra er þörf. Þetta viðfangsefni snýst um hvað gerist næst: að breyta þeim gögnum í innsæi, og innsæi í aðgerð. Þetta tvennt er auðvelt að rugla saman og dýrt að blanda. Þú getur haft gallalausa samvirkni og samt tekið slakar ákvarðanir, og þú getur haft ríka greiningu sem snertir aldrei umönnun eins sjúklings.

Greining í heilbrigðis- og velferðarþjónustu ber þyngd sem greining í smásölu eða flutningum gerir ekki. Þegar þú flokkar þýði og beinir inngripi ertu að ákveða hvers astmaskoðun gerist fyrst, hvaða veikburða eldra fólk fær fyrirbyggjandi símtal fyrir vetrarkreppu og hvar mannfá samfélagsteymi eyðir takmörkuðum tíma sínum. Fáðu greininguna ranga — hlutdrægt áhættulíkan, gagnagæðabil sem vanmetur fátækt hverfi, mælaborð sem smjaðrar um frammistöðu — og þú getur víkkað einmitt ójöfnuðinn sem þú ætlaðir að loka. Afleiðingarnar eru klínískar og siðferðilegar, ekki bara viðskiptalegar.

Almannatraust er hin hömlunin sem gerir þetta svið sérstakt. Fólk er almennt fúst til að gögn þess bæti umönnun og styðji rannsóknir, en aðeins þegar það sér að þeim er meðhöndlað örugglega, löglega og í lögmætum tilgangi. Bilun care.data áætlunarinnar á Englandi 2014, yfirgefin eftir að almenningur og klínískir starfsmenn misstu traust á hvernig gögn yrðu dregin út og notuð, er varnaðarsagan sem hver heilbrigðisgreiningarleiðtogi ætti að þekkja. Traust, einu sinni tapað, er hægt og kostnaðarsamt að endurbyggja, og það takmarkar hvað þú getur gert árum saman á eftir. Svo „hvernig“ greiningar — vettvangurinn, aðgangsleiðin, stjórnarhættirnir, gagnsæið — er ekki bakvinnslulagnir. Það er hluti af klínísku öryggis-, jafnræðis- og almannatraustssamkomulaginu sem liggur gegnum alla þessa bók.

## Lykilhugtök

[Viðskiptagreind](https://en.wikipedia.org/wiki/Business_intelligence) er safn starfsvenja og tækni til að greina gögn til að upplýsa ákvarðanir — mælaborð, skýrslur og fyrirspurnirnar sem liggja að baki. Hún hvílir á [gagnagreiningu](https://en.wikipedia.org/wiki/Data_and_information_visualization) sett fram gegnum góða [gagnasjónrænu](https://en.wikipedia.org/wiki/Data_and_information_visualization), því mynd sem annasamur klínískur starfsmaður eða forstjóri getur lesið á sekúndum slær töflu sem enginn opnar.

Gagnleg leið til að lýsa greiningarmetnaði er þroskastiginn: lýsandi greining (hvað gerðist), greinandi greining (hvers vegna það gerðist), [spáandi greining](https://en.wikipedia.org/wiki/Predictive_analytics) (hvað er líklegt að gerist næst) og [ráðleggjandi greining](https://en.wikipedia.org/wiki/Prescriptive_analytics) (hvað þú ættir að gera í því). Flestar skipulagsheildir eyða mestum tíma sínum á fyrsta þrepinu, og það er oft rétti staðurinn — áreiðanleg lýsandi mynd, treyst og brugðist við, er meira virði en brothætt spálíkan sem enginn notar.

Undir þessu öllu liggur gagnavettvangur. [Gagnavöruhús](https://en.wikipedia.org/wiki/Data_warehouse) geymir skipulögð, líkanuð gögn fyrir skýrslugerð; [gagnavatn](https://en.wikipedia.org/wiki/Data_lake) geymir hrá gögn í hvaða lögun sem er fyrir síðari vinnslu; „vatnahúsið“ (lakehouse) blandar hvoru tveggja. Hvort sem þú velur, er vettvangurinn aðeins jafn traustverðugur og [gagnagæði](https://en.wikipedia.org/wiki/Data_quality) hans — tæmandi, nákvæmni, tímanleiki og samkvæmni undirliggjandi skráa — og [gagnastjórnarhættir](https://en.wikipedia.org/wiki/Data_governance) hans, ábyrgur rammi eignarhalds, skilgreininga og aðgangsákvarðana sem heldur gögnum hæfum til notkunar. Náskyld er [stýring grunngagna](https://en.wikipedia.org/wiki/Master_data_management) (master data management) — að viðhalda einni, viðurkenndri útgáfu af kjarnaviðmiðunargögnum eins og sjúklingum, starfsfólki og skipulagsheildum — svo greining sundrist ekki yfir ósamkvæm auðkenni.

[Stjórnun lýðheilsu þýðis](https://en.wikipedia.org/wiki/Population_health) (population health management) er hagnýta fræðigreinin í hjarta þessa viðfangsefnis: að nota tengd gögn til að skilja heilsu skilgreinds þýðis, skipta því í hópa með svipaðar þarfir, lagskipta áhættu og beina inngripum að þeim sem munu njóta mest. Vel gert er hún eitt skarpasta tól sem völ er á til að takast á við [heilsujafnræði](https://en.wikipedia.org/wiki/Health_equity) — að beina fyrirbyggjandi umönnun að vanþjónuðum hópum frekar en að bíða eftir að þeir leiti í kreppu. Ekkert af því virkar án [gagnalæsis](https://en.wikipedia.org/wiki/Data_literacy) — getu leiðtoga, klínískra starfsmanna og greinenda jafnt til að lesa, véfengja og bregðast við gögnum heiðarlega.

Að lokum er Öruggt gagnaumhverfi (SDE) — alþjóðlega, Trusted Research Environment (TRE) — stýrða leiðin sem rannsakendur og skipuleggjendur greina viðkvæm gögn gegnum. Frekar en að afrita gögn út til greinandans er greinandinn færður að gögnunum inni í öruggu, endurskoðuðu umhverfi, og aðeins samanlagðar, ópersónugreinanlegar niðurstöður fara út. Þetta er líkanið sem sættir greiningarmetnað við almannatraustið sem fjallað er um í Viðfangsefni 1.8 — Gagnasiðfræði, samþykki og almannatraust.

## Bestu starfsvenjur

1. **Byrjaðu á ákvörðuninni, ekki gögnunum.** Áður en þú pantar mælaborð eða líkan, nefndu ákvörðunina sem það mun breyta, hver á þá ákvörðun og hvað þau munu gera öðruvísi þegar þau sjá innsæið. Ef þú getur ekki svarað þessum spurningum ertu að smíða skýrslu sem enginn mun bregðast við. Þessi agi — að vinna aftur á bak frá fyrirhugaðri aðgerð — er áreiðanlegasta vörnin gegn útbreiðslu ónotaðrar greiningar, og tengist beint sönnunargögn-í-aðgerð venjum Viðfangsefnis 1.3 — Ákvarðanir byggðar á sönnunargögnum.

2. **Klífðu greiningarstigann vísvitandi, ekki viðbragðsbundið.** Lýsandi og greinandi greining svarar flestum rekstrarspurningum og er ódýrari, útskýranlegri og meira treyst en spáandi eða ráðleggjandi vinna. Gríptu til spálíkans aðeins þegar ákvörðun þarf ósvikið framsýni og þú getur brugðist við spánni í tæka tíð til að skipta máli. Áhættustig sem greinir sjúklinga sem þú hefur enga getu til að hjálpa er fræðileg æfing, ekki stjórnun lýðheilsu þýðis.

3. **Meðhöndlaðu gagnagæði sem fyrsta flokks vöru, ekki hreinsun eftirá.** Mældu tæmandi, nákvæmni og tímanleika lykilgagnaflæða þinna, birtu þær mælingar og gerðu nafngreinda eigendur ábyrga fyrir þeim. Slök kóðun þjóðernis, fátæktar eða fötlunar er ekki tæknileg neðanmálsgrein — hún felur kerfisbundið þýðin sem þú þarft mest að sjá, svo gæðabil verða jafnræðisbil. Lagaðu gagnagæði við upptök í rekstrarkerfum hvar sem þú getur, því niðurstreymisleiðrétting er endalaus og tapsöm.

4. **Rektu skýrt rekstrarlíkan greinenda og gagnaverkfræði.** Aðgreindu vinnuna að verkfræða áreiðanlegar, vel líkanaðar gagnaleiðslur frá vinnunni að greina og túlka. Taktu upp sameiginlegar skilgreiningar, útgáfustýringu, jafningjayfirferð greiningarkóða og endurgerðanlegar aðferðir svo tala merki það sama fyrir alla og megi endurgera hana eftir þörfum. Enska „Reproducible Analytical Pipelines“ hreyfingin í opinbera geiranum er hagnýtt líkan sem vert er að fá að láni.

5. **Gerðu sjálfsafgreiðslu kleift, en stýrðu skilgreiningunum miðlægt.** Leyfðu teymum að kanna gögn og smíða eigin sýnir, því miðlægt teymi getur aldrei svarað hverri spurningu nógu hratt. Gættu gegn sundrungu með því að smíða stýrt merkingarlag — vottuð gagnasett og samþykktar skilgreiningar mælikvarða eins og „biðlista“ eða „forðanlega innlögn“ — svo sjálfsafgreiðsla margfaldi innsæi frekar en ágreining um hvað tölurnar merkja.

6. **Notaðu stjórnun lýðheilsu þýðis til að beina að jafnræði, og athugaðu hlutdrægni.** Skiptu þýðinu og lagskiptu áhættu til að beina fyrirbyggjandi umönnun að þeim sem munu njóta mest, þar með talið vísvitandi hópum sem hafa sögulega leitað seint eða alls ekki. Yfirheyrðu hvert líkan fyrir hlutdrægni: ef áhættulagskiptingartól gefur fátækum eða minnihlutahópi lægra stig því gögn þeirra eru strjálli mun það hljóðlega beina auðlindum frá þeim. Endurskoðaðu niðurstöður eftir verndarflokkum og fátækt, ekki bara í heild.

7. **Gerðu Örugg gagnaumhverfi að sjálfgefnu leiðinni að viðkvæmum gögnum.** Fyrir rannsóknir, áætlanagerð og aukanotkun, færðu greinendur að gögnunum inni í SDE eða TRE frekar en að draga út afrit. Þetta minnkar árásarflöt þinn, skapar fulla endurskoðunarslóð og gefur almenningi verjanlega, gagnsæja sögu um hvernig gögn þeirra eru notuð. Birtu hver hefur aðgang, í hvaða tilgangi og undir hvers samþykki, og tengdu nálgun þína við stjórnarhættina sem fjallað er um í Viðfangsefni 1.7 — Upplýsingastjórnarhættir, gagnavernd og netöryggi.

8. **Lokaðu lykkjunni frá greiningu til niðurstaðna og virðis.** Fyrir hverja verulega greiningarvöru, raktu hvort fyrirhuguð aðgerð gerðist og hvort niðurstaðan batnaði — ekki bara hvort mælaborðið var skoðað. Afnemdu vörur sem breyta ekki lengur ákvörðunum. Hvar sem þú getur, tengdu greiningarinnsæi við mælt virði með aðferðum Viðfangsefnis 6.1 — Heilsuhagfræði, svo fjárfesting í gagnavettvöngum sé réttlætt af niðurstöðum frekar en virkni.

9. **Stýrðu gagnagæðum sem mældum aga, því greining og gervigreind erfa hvern galla undir sér.** Skilgreindu og vaktaðu tæmandi, nákvæmni, tímanleika og réttmæti mikilvægra gagnaflæða þinna, settu þröskulda og bregstu við þegar þau renna frekar en að uppgötva bilið í stjórnarskýrslu. Líkan eða mælaborð getur ekki risið yfir skrárnar sem fóðra það, svo meðhöndlaðu gæði sem áframhaldandi rekstrarfall með nafngreindum eigendum, ekki einskipta hreinsun fyrir verkefni. Þetta skiptir mestu fyrir reitina sem bera jafnræði — þjóðerni, fátækt, fötlun — þar sem strjál eða ósamkvæm kóðun hljóðlega aflagar sérhverja niðurstreymisniðurstöðu.

10. **Komdu á stýringu grunngagna fyrir kjarnaviðmiðunargögn þín.** Haltu einni, viðurkenndri útgáfu af einingunum sem allt annað tengist — sjúklinga lyklaða á NHS-númerið, starfsfólk og skipulagsheildir — með skýrri ráðsmennsku um hvernig hver er búin til, samsvöruð og afskráð. Án hennar birtist sami sjúklingur undir nokkrum auðkennum og sama þjónusta undir nokkrum nöfnum, svo greining sundrast og heildartölur ganga aldrei upp. Að fjárfesta í traustverðugum grunngögnum er óglamúrlegt, en í stórum stíl getur eitt tvírætt auðkenni beint umönnun á ranga leið og mistúlkað frammistöðu yfir heilt kerfi.

## Spurningar til að ræða með teyminu

1. **Hvaða mælaborð og skýrslur myndi einhver taka eftir ef við slökktum á þeim á morgun – og hvað segir svarið okkur?** Flestar greiningareignir safnast upp yfir árin, og stór hluti þess sem þær framleiða er sjaldan eða aldrei skoðað. Þessi spurning knýr fram heiðarlega skrá: fyrir hverja verulega vöru, getið þið nefnt ákvörðunina sem hún upplýsir, manneskjuna sem á þá ákvörðun og síðast þegar hún breytti einni? Að slökkva á, eða bjóða að slökkva á, er hröð greining — raunverulegt uppnám afhjúpar hvað skiptir máli, þögn afhjúpar hvað gerir það ekki. Teymin sem dafna eru miskunnarlaus í að afnema hið ónotaða, því hvert dautt mælaborð eyðir enn viðhaldi, tærir traust þegar tölur þess reka og grefur skýrslurnar sem skipta máli. Að endurúthluta þeirri losuðu fyrirhöfn að handfylli vel notaðra, vel stýrðra vara hækkar nær alltaf virði allrar eignarinnar. Varist viðbragðið að halda öllu „til öryggis“ — það viðbragð er einmitt hvernig þið komist að greiningu sem enginn bregst við.

2. **Gera greiningar okkar heilsuójöfnuð sýnilegri, eða fela þær hann?** Samanlagðir mælikvarðar — einn biðtími yfir alla samsteypuna, heildarbólusetningarhlutfall — geta litið fullvissandi út meðan þeir fela skarpan mun undir. Prófið er hvort staðalvörur ykkar sundurliða niðurstöður eftir fátækt, þjóðerni, fötlun og öðrum viðeigandi einkennum, og hvort gögn ykkar eru nógu góð til að gera það heiðarlega. Ef þjóðerni er illa kóðað eða fátækt er ekki tengd eru greiningar ykkar byggingarlega blindar á þýðin sem þið þurfið mest að ná til, og sú blinda mun móta hvert auðlindir flæða. Ræðið hvar núverandi gagnagæði ykkar bregðast jafnræðisgreiningu, og hvað þyrfti til að laga það við upptök. Íhugið líka hvort spálíkön ykkar hafa verið athuguð fyrir hlutdrægni gegn vanþjónuðum hópum. Þetta samtal tengir greiningar ykkar beint við jafnræðishrygginn í bókinni og við siðfræði Viðfangsefnis 1.8 — Gagnasiðfræði, samþykki og almannatraust.

3. **Ef blaðamaður spyrði hvernig við notum gögn sjúklinga fyrir greiningar og rannsóknir, gætum við gefið skýrt, heiðarlegt, fullvissandi svar í dag?** Almannatraust er leyfið sem öll aukanotkun heilbrigðisgagna hvílir á, og það er auðveldara að tapa en að vinna. Vinnið gegnum raunverulega svarið: hvar sitja gögnin, hver getur nálgast þau, gegnum hvaða samþykki, í hvaða tilgangi og hvernig myndi almennur borgari komast að því. Ef heiðarlega svarið felur í sér afrit af persónugreinanlegum gögnum dreifð um töflureikna og sameiginleg drif hafið þið bæði öryggisvandamál og traustvandamál. Berið það saman við Öruggt gagnaumhverfi aðferð, þar sem aðgangur er stýrður, endurskoðaður og hægt að birta. Ræðið hverju skipulagsheild ykkar þyrfti að breyta til að vera ósvikið ánægð með opinbera skoðun — áður en atvik knýr spurninguna. Munið care.data: tæknin var ekki bilunarpunkturinn; bresturinn var almennt traust á hvernig gögn yrðu notuð.

4. **Þegar við grípum til spálíkans, getum við í raun brugðist við því sem það segir okkur – og höfum við unnið okkur inn rétt til að treysta lýsandi laginu undir því?** Það er freistandi að leggja þroska greiningar að jöfnu við fágun, og að meðhöndla „gervigreindardrifna“ eða spáandi vinnu sem áfangastað. En áhættustig sem greinir sjúklinga sem þið hafið enga getu til að ná í er fræðileg æfing, og spálíkan byggt á völtum lýsandi grunni sjálfvirknivæðir bara fyrirliggjandi villur á hraða. Yfirheyrið hvert fyrirhugað líkan gegn tveimur prófum: er til raunveruleg ákvörðun sem ósvikið þarfnast framsýni frekar en áreiðanlegrar baksýnismyndar, og er rekstrargeta til staðar til að bregðast við spánni í tæka tíð til að breyta niðurstöðu? Heiðarlegt svar nefnir tiltekna inngripið sem spáin mun kveikja og teymið sem mun afhenda það, og er hreinskilið um hvort lýsandi og greinandi þrepin eru nógu traustverðug til að byggja á. Að klífa stigann vísvitandi, þrep fyrir þrep, skilar yfirleitt meira virði en að stökkva efst og uppgötva að ekkert grípur fallið.

5. **Erum við sammála um hvað kjarnatölur okkar í raun merkja – og hvar myndu tvö teymi gefa ólík svör við sömu spurningu?** Eftir því sem sjálfsafgreiðslugreining breiðist út færist áhættan frá of fáum tölum til of margra útgáfa af hverri: „biðlistinn“, „forðanlega innlögnin“, „virki sjúklingurinn“ reka hljóðlega í sundur yfir mælaborð þar til fundir þræta um hverrar tala er rétt frekar en hvað á að gera. Prófið þetta áþreifanlega með því að biðja tvö teymi að framleiða sama fyrirsagnarmælikvarða óháð og bera saman ekki bara svarið heldur skilgreininguna og fyrirspurnina að baki. Heiðarlega samtalið dregur fram hvar stýrt merkingarlag og vottuð gagnasett vantar, og hvar miðlægar skilgreiningar hafa ekki haldið í við staðbundna uppfinningu. Málamiðlunin er raunveruleg — klemmdu of fast og þú kæfir könnunina sem gerir sjálfsafgreiðslu verðmæta; láttu óstýrt og innsæi sundrast í ágreining. Þroskað svar lýsir hvaða mælikvarðar eru vottaðir og í miðlægu eignarhaldi og hverjir eru vísvitandi skildir opnir fyrir staðbundna könnun, frekar en að þykjast að öll eignin geti verið annað hvort.

6. **Lögum við gagnagæði þar sem þau eru búin til, eða leiðréttum við þau endalaust niðurstreymis?** Sérhvert mælaborð og líkan erfir galla rekstrarskránna undir sér, svo afdrifaríkustu greiningarákvarðanirnar eru oft teknar langt uppstreymis — í hvernig ástand er kóðað á þjónustustaðnum, eða hvort sami sjúklingur og sama þjónusta leysist upp í eitt auðkenni. Ræðið hvar skipulagsheild ykkar plástrar gæði nú í skýrslulaginu, og hvað þyrfti til að laga þau vandamál við upptök í staðinn, viðurkennandi að niðurstreymisleiðrétting er bæði endalaus og tapsöm. Þetta er óaðskiljanlegt frá stýringu grunngagna: án einnar, viðurkenndrar útgáfu af sjúklingum, starfsfólki og skipulagsheildum ganga heildartölur aldrei upp og sama manneskjan sundrast yfir skrár. Jafnræðishagsmunirnir eru mestir fyrir reitina sem erfiðast er að kóða vel — þjóðerni, fátækt, fötlun — þar sem strjál eða ósamkvæm skráning hljóðlega aflagar sérhverja niðurstreymisniðurstöðu. Heiðarlegt svar nefnir hver á gæði fyrir hvert mikilvægt flæði, hvort sú eign nær inn í rekstrarkerfin og hvar fjarvera traustverðugra viðmiðunargagna er hljóðlega að grafa undan tölunum.

## Í reynd: dæmi úr heilbrigðis- og velferðarþjónustu

Samþætt umönnunarstjórn (ICB) í blönduðu þéttbýlis- og strandsvæði vill draga úr óáætluðum innlögnum meðal fólks með veikburða ástand, og gera það án þess að víkka bilið milli efnaða markaðsbæjarins og fátæku strandhverfanna.

Lýðheilsuþýðisteymið byrjar á tengdu gagnasetti dregnu úr grunnþjónustu, samfélagsþjónustu og sjúkrahússskrám, greindu inni í Öruggu gagnaumhverfi svæðisins svo engin persónugreinanleg útdráttur yfirgefi stýrða umhverfið. Þau skipta þýðinu yfir 65 ára og lagskipta veikleikaáhættu, en áður en þau beina nokkrum rekja þau jafnræðisathugun. Hún afhjúpar að líkanið vanmetur íbúa strandhverfanna, því þær stofur hafa sögulega kóðað langvinn ástönd minna tæmandi — gagnagæðabil dulbúið sem minni þörf. Frekar en að halda áfram á hlutdrægu stigi pantar teymið markvissa kóðunarumbótarherferð á áhrifuðu stofunum og stillir líkanið, og meðhöndlar gagnagæðalagfæringuna sem hluta af sjálfu inngripinu.

Með sanngjarnari áhættulagskiptingu á sínum stað greina þau um það bil 1.400 manns í mikilli áhættu sem enn eru óþekkt samfélagsþjónustu. Þverfaglegt teymi býður fyrirbyggjandi yfirferðir, byrjar vísvitandi á strandhverfunum. Mikilvægt er að greiningin stoppar ekki við að beina. Einfalt lýsandi mælaborð rekur, eftir hverfi og fátæktartugabroti, hve margar fyrirbyggjandi yfirferðir gerðust og hvernig innlagnir hreyfðust næstu sex mánuði — lokar lykkjunni frá innsæi til aðgerðar til niðurstöðu. Þegar yfirferðir einnar byggðar stöðvast dregur mælaborðið það fram snemma, og teymið rannsakar frekar en að bíða eftir ársskýrslunni. Í samvinnu við fjármála- og heilsuhagfræðisamstarfsfólk ICB þýða þau forðuðu innlagnirnar í virðismál sem réttlætir að halda áætluninni áfram. Engin spáandi töfrabrögð voru nauðsynleg umfram vel stýrt áhættustig; virðið kom frá gagnagæðum, jafnræðisagi, traustri aðgangsleið og linnulausri eftirfylgni.

## Geirasjónarhorn

### Sprotafyrirtæki

Heilbrigðistæknisprotafyrirtæki lifir eða deyr yfirleitt á þröngri greiningarfullyrðingu — að tól þess greini réttu sjúklingana, eða bæti niðurstöðu — svo forgangur þess eru sönnunargögn, ekki breidd. Smíðaðu granna, endurgerðanlega leiðslu og tækjavæddu vöru þína til að mæla hvort hún breyti ákvörðunum og niðurstöðum, því þau sönnunargögn eru það sem viðskiptavinir og eftirlitsaðilar munu krefjast. Stenst freistinguna að lofa of miklu um spáandi eða „gervigreindardrifna“ getu áður en lýsandi grunnar og gagnagæði eru traust. Þegar þú meðhöndlar NHS- eða umönnunargögn, búðu þig undir að vinna inni í Öruggu gagnaumhverfi viðskiptavinarins eða uppfylla jafngilda stjórnarhætti; að meðhöndla það sem fyrsta flokks hönnunarhömlu, frekar en seint kemur á óvart, er oft það sem skilur sprotafyrirtækin sem skala frá þeim sem stöðvast.

### Lítil fyrirtæki

Rótgróinn lítill veitandi — heimilislæknastofa, samfélagsapótek, hjúkrunarheimili eða stakstaða stofa — hefur yfirleitt raunverulega sjúklinga og lögbundnar skyldur en engan sérstakan greinanda eða gagnateymi, svo hagnýta markmiðið er traustverðug lýsandi mynd, ekki þroskastigi. Styddu þig við greininguna sem er innbyggð í kerfin sem þú rekur þegar og við traust landsgagnasett eða ICB-veitt gagnasett og mælaborð frekar en að setja upp vettvang sem þú getur ekki viðhaldið. Lagaðu gagnagæði við upptök í eigin rekstrarkóðun, því það er eini stýrilinn algerlega í þínum höndum og það er það sem fóðrar hvert svæðislíkan af þýði þínu. Þegar þú verður að deila gögnum fyrir lýðheilsu þýðis eða rannsóknir, notaðu Öruggt gagnaumhverfi ICB eða lands frekar en að senda útdrætti í tölvupósti, sem heldur þér innan sömu skyldna og stórar skipulagsheildir án auðlinda þeirra. Einn vel valinn mælikvarði sem þú bregst í raun við — listi yfir sjúklinga sem eiga yfirferð á gjalddaga — slær safn skýrslna sem enginn hefur tíma til að opna.

### Stórfyrirtæki

Stór veitandi eða kerfissamþættir hefur yfirleitt gagnstæða vandann: of marga vettvanga, of margar ósamrýmanlegar skilgreiningar og langan hala arfaskýrslna. Verkefni stórfyrirtækisins er sameining og stjórnarhættir — sniðið merkingarlag, vottuð gagnasett og skýrt rekstrarlíkan greinenda og gagnaverkfræði — svo sjálfsafgreiðsla margfaldi innsæi í stað þess að margfalda ágreining. Fjárfestu í óglamúrlegu vinnunni við gagnagæði og grunnskilgreiningar, því í stórfyrirtækjastærð getur einn tvíræður mælikvarði beint milljónum punda á ranga leið. Gættu þín gegn veldi mælaborða með því að mæla notkun og afnema hið ónotaða. Jafnaðu miðlæga staðla við staðbundið sjálfstæði, annars munt þú annaðhvort kæfa nýsköpun eða missa stjórn á tölunum.

### Hið opinbera

Lands- og svæðisstofnanir bera ráðsmannshlutverk sem einkaskipulagsheildir gera ekki: þær setja staðlana, reka stærstu Örugg gagnaumhverfin og svara almenningi fyrir hvernig þýðisgögn eru notuð. Forgangsatriðin eru lögmæti og jafnræði — gagnsæjar aðgangsreglur, birtir gagnagæðastaðlar og greiningar sem virkt draga ójöfnuð fram yfir allt þýðið. Ríkisvaldið er einnig einstakt í aðstöðu til að draga úr tvítekningu, með því að veita traust landsgagnasett og endurgerðanlegar leiðslur sem hvert staðbundið teymi getur byggt á frekar en að finna upp að nýju. Yfirgnæfandi lærdómurinn frá care.data er að almenn þátttaka er ekki eftiráhugsun í samskiptum heldur hönnunarinntak; hreyfðu þig hraðar en traust leyfir og þú setur alla áætlunina aftur um ár.

## Algeng mistök

- **Mælaborð sem enginn bregst við.** Greining smíðuð til að sýna gögn frekar en breyta ákvörðun, fjölgar sér þar til hið gagnlega er grafið undir hið hunsaða.
- **Að leysa fyrir tólið, ekki spurninguna.** Að kaupa vettvang eða vélnámsgetu áður en vitað er hvaða ákvarðanir hún verður að bæta.
- **Gagnagæðablinda.** Að kynna örugga tölu byggða á ófullkomnum eða hlutdrægum gögnum, sérstaklega þar sem slök kóðun þjóðernis eða fátæktar felur vanþjónaða hópa.
- **Útdráttadreifing.** Afrit viðkvæmra gagna dreifast yfir töflureikna og drif, sem skapar bæði öryggisáhættu og almannatraustsskuldbindingu sem Öruggt gagnaumhverfi hefði forðað.
- **Skilgreiningarrek.** Sami mælikvarði merkir ólíka hluti í ólíkum skýrslum, svo fundir þræta um hverrar tala er rétt í stað þess hvað á að gera.
- **Spáleikhús.** Að smíða fáguð líkön sem skipulagsheildin hefur enga getu til að bregðast við, eða sem hljóðlega kóða hlutdrægni gegn þýðunum í mestri þörf.
- **Að hreyfa sig hraðar en traust.** Að sækja greiningarmetnað án almennrar þátttöku, og tapa samfélagsleyfinu sem öll aukanotkun gagna hvílir á.
- **Innsæi án lykkju.** Að athuga aldrei hvort fyrirhuguð aðgerð gerðist eða niðurstaðan batnaði, svo enginn lærir og ekkert er afnumið.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Greiningarstiginn | Tilfallandi töflureiknar; aðallega handvirk lýsandi skýrslugerð | Samkvæm lýsandi mælaborð; einhver greinandi borun | Greinandi staðlað; spáandi notað þar sem það breytir ákvörðunum | Spáandi notkun stýrð og vöktuð; frammistaða líkana og ákvörðunaráhrif mæld gegn markmiðum | Spáandi og ráðleggjandi innbyggt þar sem þau sannanlega bæta við virði |
| Gagnavettvangur og gæði | Sundraðar uppsprettur; gæði ómæld | Miðlægt vöruhús eða vatn að koma fram; gæði mæld sums staðar | Stýrður vettvangur; gagnagæðamælikvarðar í eigu og birtir | Gæðaþröskuldar settir og tryggðir; frammistaða vettvangs og leiðslna virkt stýrð gegn samþykktu þjónustustigi | Nútímavettvangur með sjálfvirkri gæðavöktun og endurgerðanlegum leiðslum |
| Stjórnarhættir og aðgangur | Persónugreinanlegir útdrættir afritaðir tilfallandi | Aðgangsreglur til en beitt ósamkvæmt | Öruggt gagnaumhverfi sem sjálfgefin leið; aðgangur endurskoðaður | SDE-aðgangsstýringar tryggðar og vaktaðar; aðgangsbeiðnir og endurskoðunarniðurstöður stýrð gegn skilgreindum stöðlum | SDE þroskað, gagnsætt almenningi, aðgangur birtur |
| Lýðheilsa þýðis og jafnræði | Engin þýðissýn; aðeins viðbragð | Grunnskipting; jafnræði skoðað stöku sinnum | Áhættulagskipting með reglulegum jafnræðissundurliðunum | Jafnræðismælikvarðar raktir yfir tíma; beining og hlutdrægnisathuganir stýrðar og stjórnað gegn samþykktum markmiðum | Hlutdrægnisendurskoðuð beining sannanlega að þrengja ójöfnuð |
| Virði og læsi | Árangur mældur með skýrslumagni | Einhver notkunarrakning; vasar gagnalæsis | Vörur tengdar ákvörðunum; læsisáætlun til staðar | Vöruvirði mælt gegn markmiðum; afnám og læsi stýrð sem stýrð, endurtekin lota | Niðurstöður og virði raktar; ónotaðar vörur afnumdar; læsi útbreitt |

## Gátlisti

- [ ] Sérhver veruleg greiningarvara nefnir ákvörðunina sem hún breytir og hver á þá ákvörðun.
- [ ] Gagnagæðamælikvarðar (tæmandi, nákvæmni, tímanleiki) eru mældir, í eigu og birtir fyrir lykilflæði.
- [ ] Kóðun þjóðernis, fátæktar og fötlunar er nógu góð til að styðja heiðarlega jafnræðisgreiningu — og bætt þar sem hún er það ekki.
- [ ] Stýrt merkingarlag skilgreinir kjarnamælikvarða samkvæmt yfir sjálfsafgreiðslutól.
- [ ] Greiningarkóði er útgáfustýrður, jafningjayfirfarinn og endurgerðanlegur.
- [ ] Viðkvæmum gögnum fyrir rannsóknir og áætlanagerð er nálgast gegnum Öruggt gagnaumhverfi, ekki afrituð út.
- [ ] Áhættulagskipting og spálíkön eru endurskoðuð fyrir hlutdrægni gegn vanþjónuðum hópum.
- [ ] Staðlaðar skýrslur sundurliða niðurstöður eftir fátækt og viðeigandi verndareinkennum.
- [ ] Hver vara rekur hvort fyrirhuguð aðgerð gerðist og niðurstaðan batnaði.
- [ ] Ónotuð mælaborð og skýrslur eru yfirfarin og afnumin í reglulegri lotu.
- [ ] Opinber skýring á hvernig sjúklingagögn eru notuð fyrir greiningar er til og er heiðarleg.
- [ ] Gagnalæsisáætlun styður leiðtoga og klíníska starfsmenn, ekki bara greinendur.

## Helstu heimildir

- NHS England — *Population Health Management* úrræði og Population Health Management Development Programme.
- NHS England — *Secure Data Environment for NHS Health and Social Care* stefnuleiðbeiningar.
- Office for National Statistics / UK Government Analysis Function — *Reproducible Analytical Pipelines (RAP)* stefna og leiðbeiningar.
- The Health Foundation og The King's Fund — greiningar á stjórnun lýðheilsu þýðis og heilsuójöfnuði.
- Understanding Patient Data — opinber úrræði um traust rannsóknarumhverfi og lærdóm care.data.
- Data Saves Lives — gagnastefna Englands fyrir heilbrigðis- og félagsþjónustu.

## Tilvísanir

1. Business intelligence — Wikipedia — https://en.wikipedia.org/wiki/Business_intelligence
2. Data and information visualization — Wikipedia — https://en.wikipedia.org/wiki/Data_and_information_visualization
3. Predictive analytics — Wikipedia — https://en.wikipedia.org/wiki/Predictive_analytics
4. Prescriptive analytics — Wikipedia — https://en.wikipedia.org/wiki/Prescriptive_analytics
5. Data warehouse — Wikipedia — https://en.wikipedia.org/wiki/Data_warehouse
6. Data lake — Wikipedia — https://en.wikipedia.org/wiki/Data_lake
7. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
8. Data governance — Wikipedia — https://en.wikipedia.org/wiki/Data_governance
9. Population health — Wikipedia — https://en.wikipedia.org/wiki/Population_health
10. Health equity — Wikipedia — https://en.wikipedia.org/wiki/Health_equity
11. Data literacy — Wikipedia — https://en.wikipedia.org/wiki/Data_literacy
12. Population Health Management — NHS England — https://www.england.nhs.uk/integratedcare/what-is-integrated-care/phm/
13. Secure Data Environment for NHS Health and Social Care policy guidelines — NHS England — https://www.gov.uk/government/publications/secure-data-environment-policy-guidelines
14. Reproducible Analytical Pipelines (RAP) — UK Government Analysis Function — https://analysisfunction.civilservice.gov.uk/support/reproducible-analytical-pipelines/
15. Data saves lives: reshaping health and social care with data — Department of Health and Social Care — https://www.gov.uk/government/publications/data-saves-lives-reshaping-health-and-social-care-with-data
16. The care.data programme and lessons for data trust — Understanding Patient Data — https://understandingpatientdata.org.uk/
17. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
