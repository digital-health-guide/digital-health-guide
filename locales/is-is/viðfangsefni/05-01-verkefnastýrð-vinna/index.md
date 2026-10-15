# Viðfangsefni 5.1 — Verkefnastýrð vinna

**Í einni setningu:** Verkefnastýrð vinna er rétta tólið þegar verkið hefur skilgreint umfang, endanlegan líftíma og skýrt lokaástand — tímabundið, stýrt átak afhent á samþykktum tíma, kostnaði og gæðum, síðan lokað.

## Hvers vegna þetta skiptir máli í heilbrigðis- og velferðarþjónustu

Ekki er allt lifandi þjónusta. Sumt mikilvægasta verkið í heilbrigðis- og velferðarþjónustu er ósvikið endanlegt: að [flytja](https://en.wikipedia.org/wiki/Data_migration) úr einni [rafrænni sjúkraskrá](https://en.wikipedia.org/wiki/Electronic_health_record) í aðra, útbreiða Wi-Fi yfir sjúkrahúseign, skipta út netþjónum við lok líftíma, afnema arfakerfi áður en birgjasamningur rennur út eða afhenda stafræna hluta nýrrar sjúkrahússbyggingar. Þetta verk hefur upphaf, miðju og ákveðinn endi. Að stýra því sem opinni vöru myndi sóa fé og þoka ábyrgð; það þarfnast aga verkefnis.

[Verkefnastjórnun](https://en.wikipedia.org/wiki/Project_management) vinnur sér hér inn tilverurétt einmitt því hagsmunirnir eru miklir og hömlurnar harðar. Gagnaflutningsumskipti hafa fasta opnunarhelgi, sjúklingaöryggisáhættu ef skrár tapast eða spillast og samningsbundið hengiflug ef gamla kerfið slokknar. Opinbert fé er skuldbundið gegn viðskiptamáli, og þing, endurskoðendur og stjórnir munu spyrja hvort það var notað eins og samþykkt. Verkefnastýrð vinna veitir stjórnarhættina — viðskiptamál, áfangahlið og stýrða lokun — sem leyfa stjórn að skuldbinda fjármagn með sjálfstrausti og stöðva verkið hreint ef réttlætingin fellur burt.

Hættan er að nota þetta tól í rangt verk. Verkefnastýrðir stjórnarhættir beittir á þróandi stafræna þjónustu framleiða „smíða og yfirgefa“ meinsemdina sem lýst er í Viðfangsefni 5.0 — Vörustýrð vinna. Þetta viðfangsefni útskýrir hvar verkefnastýrð vinna er rétta tækið og hvar takmörk hennar byrja. Það situr við hlið Viðfangsefnis 5.2 — Áætlunarstýrð vinna, sem samhæfir mörg verkefni, og Viðfangsefnis 5.3 — Fyrirtækjasafns- og verkefnastjórnun (EPPM), sem velur milli þessara tóla.

## Lykilhugtök

**Verkefni.** Tímabundin skipulagsheild stofnuð til að afhenda eitt eða fleiri skilgreind úttök að samþykktri forskrift, innan hamla tíma, kostnaðar og gæða. Skilgreinandi eiginleikinn er að það er *tímabundið* — það er til til að ná skilgreindum endi og leysast síðan upp.

**[Járnþríhyrningurinn](https://en.wikipedia.org/wiki/Project_management_triangle) (umfang, tími, kostnaður).** Klassíska hömlulíkanið: umfang, áætlun og fjárlög eru innbyrðis háð, og gæði verða fyrir áhrifum af hvernig þau eru jöfnuð. Breyttu einu og þú breytir hinum; verkefnastýring er að mestu agi þess að stýra þessari málamiðlun gagnsætt.

**[PRINCE2](https://en.wikipedia.org/wiki/PRINCE2) (PRojects IN Controlled Environments).** Skipulögð verkefnaaðferð bresku ríkisstjórnarinnar, víða notuð yfir NHS og opinbera geirann. Hún er byggð á meginreglum (áframhaldandi viðskiptaréttlæting, skilgreind hlutverk, stýra eftir áföngum, stýra eftir undantekningum, einbeita sér að afurðum, læra af reynslu, sníða að umhverfinu) og skipuleggur vinnu í stýrða áfanga með verkefnastjórn sem veitir stefnu.

**PMI / PMBOK.** *[Guide to the Project Management Body of Knowledge](https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge)* frá [Project Management Institute](https://en.wikipedia.org/wiki/Project_Management_Institute) er ríkjandi alþjóðlegi mótaðilinn, sem rammar verkefnavinnu kringum frammistöðusvið og meginreglur frekar en forskrifað áfangaferli. PRINCE2 og PMBOK eru viðbótarlinsur á sömu fræðigrein.

**[Viðskiptamál](https://en.wikipedia.org/wiki/Business_case).** Skjalið sem réttlætir verkefnið: vandinn, valkostirnir metnir, væntur ávinningur, kostnaður og áhættur. Í PRINCE2 er viðskiptamálið lifandi — það er athugað við hver áfangamörk, og ef áframhaldandi réttlæting hverfur er rétta ákvörðunin að stöðva. Í breskum opinberum stofnunum er þetta venjulega byggt eftir Five Case Model [HM Treasury](https://en.wikipedia.org/wiki/HM_Treasury) (stefnumótandi, hagrænt, viðskiptalegt, fjárhagslegt, stjórnunarlegt).

**[Áfangahlið](https://en.wikipedia.org/wiki/Phase-gate_process).** PRINCE2-verkefni er skipt í stjórnunaráfanga aðskilda með ákvörðunarhliðum. Við hver mörk tekur verkefnastjórn vísvitandi stöðva/halda áfram ákvörðun: hún yfirfer framvindu og viðskiptamál, samþykkir næstu áfangaáætlun og skuldbindur auðlindir aðeins fyrir þann áfanga. Þannig heldur stjórn stjórn og forðast að kasta góðu fé á eftir slæmu.

**RAID-skrá.** Ein skrá yfir áhættur (Risks), forsendur (Assumptions), vandamál (Issues) og háðir (Dependencies) — kjarnastýringargripur verkefnastjórans. RAID gerir óvissu sýnilega og viðráðanlega: áhættur eru hlutir sem gætu gerst, vandamál eru hlutir sem hafa gerst, forsendur eru það sem áætlunin reiðir sig á og háðir eru það sem áætlunin þarf annars staðar frá.

## Bestu starfsvenjur

1. **Byrjaðu á heiðarlegu viðskiptamáli og haltu því lifandi.** Notaðu viðurkennda byggingu (Five Case Model í breskum opinberum stofnunum) til að meta raunverulega valkosti, ekki eitt fyrirfram ákveðið svar. Meðhöndlaðu síðan viðskiptamálið sem lifandi skjal yfirfarið við hvert áfangahlið — áframhaldandi viðskiptaréttlæting er fyrsta PRINCE2 meginreglan, og að tapa henni er lögmæt ástæða til að stöðva.

2. **Skilgreindu umfang nákvæmlega og stýrðu breytingum á því.** Virði verkefnis er skýr, afmörkuð skilgreining á „lokið“. Samþykktu umfangið, grunnsettu það og láttu hverja fyrirhugaða breytingu fara gegnum breytingastýringarferli svo [umfangsskrið](https://en.wikipedia.org/wiki/Scope_creep) neyti ekki hljóðlega fjárlaga og tímalínu.

3. **Stýrðu eftir áföngum með raunverulegum ákvörðunarhliðum.** Brjóttu vinnuna í stjórnunaráfanga og haltu ósvikna stöðva/halda áfram yfirferð við hver mörk. Hlið sem segir alltaf „haltu áfram“ er leikhús; agi virkar aðeins ef að stöðva eða endurskipuleggja er raunverulegur valkostur sem stjórn mun nýta.

4. **Rektu lifandi RAID-skrá og stigmagnaðu eftir undantekningum.** Haltu áhættum, forsendum, vandamálum og háðum á einum stað, yfirfarðu reglulega og notaðu „stýra eftir undantekningum“ PRINCE2 — verkefnastjórinn starfar innan samþykktra vikmarka og stigmagnar til stjórnar aðeins þegar vikmörkum er ógnað. Þetta heldur tíma æðri stjórnenda einbeittum að raunverulegum ákvörðunum.

5. **Úthlutaðu skýrri, eins-punkts ábyrgð.** PRINCE2 krefst skilgreindra hlutverka: verkefnastjórn með ábyrgan æðri eiganda/framkvæmdastjóra sem á viðskiptamálið, æðri notanda sem táknar þá sem munu nota úttakið og æðri birgi. Tvíræð ábyrgð er algengasta orsök reks.

6. **Skipuleggðu umskiptin í lifandi þjónustu áður en þú byrjar.** Verkefni afhendir úttak; einhver verður að reka það á eftir. Samþykktu móttökuteymið, stuðningslíkanið og klíníska öryggisyfirfærslu (DCB0160 fyrir innleiðingu) sem hluta af verkefninu, svo opnun sé ekki hengiflug inn í eignarhaldsvakúm.

7. **Bakaðu inn klínískt öryggi, upplýsingastjórnarhætti og prófanir.** Fyrir hvert kerfi sem snertir sjúklingagögn eru klíníska öryggismálið, DPIA og umskipta-/afturköllunarprófanir ekki valkvæðar viðbætur — þær eru hliðarafurðir. Flutningur án prófaðrar afturköllunaráætlunar er ekki tilbúinn að fara í loftið.

8. **Lokaðu verkefninu vísvitandi og fangaðu lærdóm.** Skilgreindur endi þýðir skilgreind lokun: staðfestu að úttök séu samþykkt, afhentu rekstri, slepptu teyminu og skráðu lærdóm (lærdómaskrá PRINCE2). Ólokað verkefni lekur auðlindum og ábyrgð endalaust.

## Spurningar til að ræða með teyminu

1. **Er verkið fyrir framan okkur ósvikið endanlegt með skilgreint lokaástand, eða erum við að grípa til verkefnastjórnarhátta því það er fjármögnunarleiðin sem við þekkjum?**
   Þetta er úrslitaspurningin sem viðfangsefnið snýst um, því verkefnastýrður agi er rétta tækið aðeins þegar verkið hefur ósvikið upphaf, miðju og ákveðinn endi. Í heilbrigðis- og velferðarskipulagsheild er togið í átt að verkefnalögun sterkt — fjármagnsfjárlagagerð, viðskiptamálavél og stjórnarskýrslugerð eru öll smíðuð fyrir það — svo þróandi stafræn þjónusta getur verið klædd sem verkefni einfaldlega því þannig er fé losað, sem framleiðir síðan smíða-og-yfirgefa meinsemdina. Umræðan ætti að skoða hvern frambjóðanda heiðarlega: skipting á meinafræðikerfi áður en birgir dregur stuðning til baka hefur harða samningsbundna hengiflug og er ótvírætt endanleg, meðan „bæta sjúklingaforritið“ hefur ekkert lokaástand og tilheyrir Viðfangsefni 5.0. Íhugið hvort raunveruleg opnun er til eftir hvern teymið ætti að leysast upp, eða hvort einhver þurfi að halda áfram að bæta hlutinn endalaust. Gott svar stenst það að nota verkefnastjórnarhætti sem vana, nefnir áþreifanlega lokaástandið og atburðinn sem skilgreinir „lokið“, og er fúst til að segja að sumt af því sem við rekum nú sem verkefni hefði aldrei átt að vera verkefni.

2. **Við áfangahlið okkar, myndi þessi stjórn í raun stöðva eða endurskipuleggja verkefni sem hefur tapað réttlætingu sinni – og getum við bent á skipti þegar við gerðum það?**
   Áfangahlið eru aðeins stýring ef að stöðva er raunverulegur valkostur sem stjórn mun nýta; hlið sem segir alltaf „haltu áfram“ er leikhús, og áframhaldandi viðskiptaréttlæting er fyrsta PRINCE2 meginreglan einmitt því að tapa henni ætti að enda verkið. Spennan í heilbrigðis- og velferðarþjónustu er bráð: að stöðva hálfbyggðan EPR-flutning eða rannsóknarstofukerfisumskipti finnst eins og að viðurkenna bilun, sóa sokknum kostnaði og trufla klíníska starfsmenn sem hafa þegar breytt áætlunum sínum, svo stjórnir rökstyðja að þrýsta áfram meðan viðskiptamálið gufar hljóðlega upp. Komið með raunverulegt dæmi í umræðuna — verkefni þar sem prófun afhjúpaði að gagnakortlagningaráhættan var verri en gert var ráð fyrir, eða þar sem ávinningur seinkaði — og spyrjið hvort hliðið var notað eins og hannað eða stimplað. Íhugið hvaða vikmörk kveikja stigmögnun, hver við stjórnina hefur stöðuna til að kalla stöðvun og hvort sokkins-kostnaðar rökstuðningur er nefndur og véfengdur í herberginu. Heiðarlegt svar viðurkennir hvar hlið hafa verið formsatriði, lýsir skilyrðunum þar sem stjórnin myndi ósvikið stöðva eða endurskilgreina og meðhöndlar valdið til að stöðva fyrir opinbert afskrift sem raunverulegt gildi fræðigreinarinnar frekar en ógn.

3. **Hver tekur við úttaki hvers verkefnis sem lifandi þjónustu, og hvernig gerum við klíníska öryggisyfirfærslu og áframhaldandi eignarhald að hliðarafurð frekar en hengiflugi?**
   Verkefni afhendir úttak; eitthvað endanlegt endar, en það sem það framleiddi verður að vera rekið, bætt og haldið öruggu löngu eftir að teymið leysist upp — og algengasta hljóðláta bilunin er að enginn á það hinum megin. Í kerfi sem snertir sjúklingagögn er þetta ekki stjórnsýslusnyrtimennska: DCB0160 innleiðingaröryggismálið, DPIA, prófuð afturköllun og nafngreint móttökuteymi eru það sem stendur milli stýrðrar opnunar og eignarhaldsvakúms þar sem öryggisáhættur safnast óstýrðar. Umræðan ætti að knýja fram skýrleika um umskiptin áður en verkefnið byrjar, ekki á opnunarhelgi: hvaða rekstrarteymi tekur við, hvert stuðningslíkanið er og hvort það teymi hefur getuna og vinnulagið (vörustýrt, samkvæmt Viðfangsefni 5.0) til að halda áfram að bæta það. Íhugið áþreifanlegar nýlegar opnanir og hvort yfirfærslan var skipulögð eða spunnin, og hvort „verkefninu er lokið“ var látið þýða „og nú er það ekki neins verk“. Gott svar nefnir móttökuteymið og stuðningslíkanið fyrirfram, meðhöndlar öryggisyfirfærsluna sem hlið sem verkefnið getur ekki farið framhjá og úthlutar skýrt áframhaldandi umbótum lifandi þjónustunnar til réttrar vinnuaðferðar frekar en að skilja það eftir að reka.

4. **Þegar járnþríhyrningurinn bítur og umfang, tími og kostnaður rekast saman, hvaða hömlu sveigjum við, og er sjúklingaöryggi nokkru sinni látið vera breytan sem gefur eftir?**
   Sérhvert raunverulegt verkefni stendur að lokum frammi fyrir augnablikinu þegar áætlun, fjárlög og lofað umfang geta ekki öll haldið, og hvernig teymið leysir þá kreistingu afhjúpar hvers það metur í raun. Gildran í heilbrigðis- og velferðarþjónustu er sérstök: því lokadagsetningin er oft hörð samningsbundin hengiflug — birgir dregur stuðning, leigusamningur rennur út, gagnaver lokar — er tími oft ekki hægt að færa, svo þrýstingurinn lendir hljóðlega á gæðum, sem í klínísku kerfi þýðir að skera prófanir, þjappa staðfestingu eða senda með þekkta gagnakortlagningargalla. Umræðan ætti að nefna fyrirfram hvaða horn þríhyrningsins skipulagsheildin mun vernda og hvert hún fórnar, og vera skýr um að klínískt öryggi og upplýsingastjórnarhættir eru ekki þrýstiloki jafnvel þegar allt annað er fast. Lítið á nýleg umskipti og spyrjið hvað gaf hljóðlega eftir þegar dagsetningar héldu: var það afturköllunaræfingin, klíníski staðfestingarglugginn, þjálfunin? Íhugið hver hefur umboð til að færa opnunardagsetninguna frekar en að rýra öryggismörkin, og hvort það samtal gerist opinskátt hjá stjórn eða sjálfgefið á vettvangi. Heiðarlegt svar segir forgangsröðina fyrir þrengingarnar, meðhöndlar seinkaða dagsetningu eða endurskipulagðan áfanga sem lögmæta niðurstöðu og neitar að láta ósagðan áætlunarþrýsting breytast í óskráða klíníska áhættu.

5. **Er RAID-skráin okkar lifandi tæki sem breytir því sem við gerum, eða skjal sem við höldum til að líta stjórnuð út – og myndi hún draga fram áhættuna sem í raun sekkur verkefninu?**
   RAID-skrá vinnur sér stað sinn aðeins ef yfirferð hennar breytir ákvörðunum; algengi bresturinn er skrá skrifuð við upphaf, kynnt á stjórnarfundum og aldrei ósvikið brugðist við meðan áhætturnar sem skipta máli þroskast óvaktaðar. Í flutningi eða umskiptum eru úrslitaáhætturnar oft sértækar og þekkjanlegar — sögulegar niðurstöður sem kortleggjast ekki hreint á ný viðmiðunargildi, háð á eldveggsbreytingum annars teymis, forsenda um að klínísk staðfestingarauðlind verði laus þegar hennar er þörf — og spurningin er hvort skráin nefnir þær áþreifanlega eða felur sig á bak við almennar færslur eins og „auðlindahömlur“. Umræðan ætti að prófa hvort stigmögnun eftir undantekningum er raunveruleg: starfar verkefnastjórinn innan samþykktra vikmarka og vekur athygli stjórnar aðeins þegar eitt er í hættu, eða helst allt annaðhvort þögult eða verður kreppa? Íhugið hvort næstum-slys og raungerð vandamál fóðra aftur hvernig næsti áfangi er skipulagður, eða eru einfaldlega skráð og gleymd. Gott svar getur bent á ákvörðun sem RAID-skráin raunverulega breytti, aðgreinir tvær eða þrjár áhættur sem gætu ósvikið stöðvað verkefnið frá langa hala minniháttar áhætta og meðhöndlar skrána sem vinnustýringu frekar en grip framleiddan fyrir tryggingu.

6. **Eftir að við lokum og leysum upp, athugar nokkur hvort ávinningurinn í viðskiptamálinu raungerðist í raun – og myndum við vita ef hann gerði það ekki?**
   Viðskiptamálið lofar ávinningi til að réttlæta útgjöldin, en verkefnastýrð vinna endar eðlilega við opnun og teymislosun, svo augnablik sannleikans — dró flutningurinn í raun úr áhættu, skar kostnað eða bætti umönnun — fellur venjulega eftir að allir hafa haldið áfram og enginn ber ábyrgð á að staðfesta það. Þetta skiptir bráðu máli í opinberri heilbrigðis- og velferðarþjónustu, þar sem fé er skuldbundið gegn Five Case viðskiptamáli sem þing, endurskoðendur og stjórnir voru sagðir að myndi skila tilteknum niðurstöðum, en samt er ávinningsraungerving skrefið sem oftast er sleppt því verkefnið sem hefði átt hana er ekki lengur til. Umræðan ætti að ákveða hver erfir ávinningsrakningu þegar verkefnið lokar, yfir hvaða tímabil og gegn hvaða grunnlínumælingum — sem verður að fanga fyrir opnun annars glatast þær. Íhugið nýlega lokið verkefni og spyrjið hreint út hvort nokkur hefur síðan athugað lofaðan ávinning þess, og hvort halli myndi nokkru sinni ná til stjórnarinnar sem samþykkti það. Heiðarlegt svar úthlutar eftirlokunar ávinningseignarhaldi til fasts falls frekar en upplausna teymisins, fangar grunnlínuna meðan verkefnið er enn lifandi og er fúst til að skrá að verkefni afhenti úttak sitt á tíma og innan fjárlaga en skilaði ekki virðinu sem réttlætti það.

## Í reynd: dæmi úr heilbrigðis- og velferðarþjónustu

Bráðasamsteypa verður að skipta út öldruðu upplýsingakerfi meinafræðirannsóknarstofu áður en núverandi birgir dregur stuðning til baka eftir 14 mánuði. Þetta er skólabókardæmi um verkefnastýrða vinnu: föst lokadagsetning, skilgreint umfang, hart samningsbundið hengiflug og bráð sjúklingaöryggisáhætta ef niðurstöður tapast í flutningi.

Samsteypan skrifar Five Case viðskiptamál sem metur þrjá valkosti (uppfæra á staðnum, útvega nýtt kerfi, deila svæðisbundnu tilviki), velur innkaup og setur á fót PRINCE2-verkefni með skýra stjórn: framkvæmdastjóra sem á viðskiptamálið, æðri notanda (yfirlífeindafræðing) og æðri birgi. Vinnunni er skipt í stjórnunaráfanga — innkaup, smíði og stillingu, gagnaflutning, prófanir og opnun — hver endar í ákvörðunarhliði.

Verkefnastjórinn rekur RAID-skrá. Lykiláhætta er að sögulegar niðurstöður kortleggjast ef til vill ekki hreint á viðmiðunargildi nýja kerfisins; háð er eldveggsbreytingar netteymisins; forsenda er að klínísk staðfestingarauðlind verði laus fyrir prófanir. Við flutningsáfangahliðið afhjúpa prófanir að gagnakortlagningaráhættan er verri en gert var ráð fyrir, svo stjórnin notar hliðið eins og hannað: hún heldur ekki blindandi áfram, heldur samþykkir endurskipulagðan áfanga með lengdum staðfestingarglugga og prófaðri afturköllunaráætlun, og verndar sjúklingaöryggi fram yfir upprunalegu áætlunina.

Opnun gerist yfir stýrða helgi með afturköllunaráætlun í viðbragðsstöðu og DCB0160 klínískri öryggisundirskrift. Kerfið er samþykkt, afhent rekstrarteyminu sem mun reka það, lærdómur skráður og verkefninu formlega lokað. Teymið leysist upp — réttilega, því verkinu er ósvikið lokið. Það sem kemur næst (samfelld umbót lifandi þjónustunnar) er önnur vinnuaðferð, og samsteypan gætir þess að halda ekki fullu verkefnateymi gangandi endalaust til að sinna því.

## Geirasjónarhorn

### Sprotafyrirtæki

Lítið stafrænt heilbrigðisfyrirtæki rekur sjaldan formleg PRINCE2-verkefni, en ósvikið endanleg vinna birtist samt — einskipta gagnaflutningur á nýjan skýjavettvang, Cyber Essentials- eða DTAC-vottunarátak, úrbætur eftir innbrotspróf fyrir stóran NHS-samning. Sprotafyrirtækið meðhöndlar þetta sem létt, tímabundin átök með nafngreindum eiganda og skýrri skilgreiningu á lokið, og fær lánaðan agann (fast umfang, lokadagsetning, fara/ekki fara) án seremóníunnar (engin formleg verkefnastjórn, engin fimm-áfanga hliðun). Fjármögnun er í raun athygli stofnenda og flugbraut, svo áhættan er að endanleg vinna kreistist milli vörusprett og verði aldrei lokið. Lagfæringin er að nefna einn eiganda og harða tímamörk, og meðhöndla vottunina eða flutninginn sem búinn og gerðan frekar en endalaust „í vinnslu“.

### Lítil fyrirtæki

Rótgróinn lítill veitandi — heimilislæknastofa, samfélagsapótek, hjúkrunarheimili eða stakstaða stofa — mætir verkefnastýrðri vinnu sem stöku en óhjákvæmilegum atburðum: að skipta um birgja klínísks kerfis, flytja á nýjan stofustjórnunarvettvang eða skipta út lokalífstækjum áður en stuðningur rennur út. Skipulagsheildin hefur raunverulega sjúklinga og áframhaldandi rekstur en enga sérstaka verkefna- eða upplýsingatæknistarfsemi, svo „verkefnateymið“ er yfirleitt stofustjórinn eða skráði stjórinn að sinna þessu samhliða dagvinnu, oft styðjandi sig á væntanlegan birgi til að reka flutninginn. Agi sem lifir af snertingu við þennan veruleika er létti kjarninn: skýrt lokaástand, grunnsett umfang svo birgirinn víkki það ekki hljóðlega, nafngreind ábyrg manneskja og prófuð afturköllun fyrir hver umskipti sem snerta sjúklingaskrár. Gildran er að útvista ekki aðeins vinnunni heldur dómgreindinni — að samþykkja opnunardagsetningu birgisins og gagnakortlagningartryggingar án óháðrar athugunar — því sömu klínísku öryggis- og upplýsingastjórnarháttaskyldur (DCB0160, DPIA) gilda óháð því hve lítil skipulagsheildin er. Lagfæringin er að halda eignarhaldi á fara/ekki fara ákvörðuninni og samþykktarviðmiðunum innanhúss, jafnvel þegar hver önnur hönd tilheyrir söluaðilanum.

### Stórfyrirtæki

Stór NHS-sjúkrahússamsteypa eða samþætt umönnunarkerfi (ICS) er þar sem verkefnastýrð vinna er mest heima: EPR-skipti, Wi-Fi yfir alla eign, gagnaversútgöngur og umskipti bera öll hörð samningsbundin og sjúklingaöryggis hengiflug. Hér er allur búnaðurinn réttlættur — Five Case viðskiptamál, PRINCE2-stjórn með nafngreindum framkvæmdastjóra/SRO, æðri notanda og æðri birgi, stjórnunaráföngum með raunverulegum hliðum og lifandi RAID-skrá — því upphæðirnar eru stórar, öryggisafhjúpunin bráð og innri endurskoðun og stjórn munu rýna útgjöldin. Einkennandi bresturinn í þessum mæli er að beita sömu stjórnarháttum óaðgreint á lifandi þjónustur (Viðfangsefni 5.0 — Vörustýrð vinna) og endanlega vinnu, svo safnsýn (Viðfangsefni 5.3 — Fyrirtækjasafns- og verkefnastjórnun) sem beinir hverju verki í rétta vinnuaðferð skiptir máli. Klínískt öryggi (DCB0160) og prófuð afturköllun eru hliðarafurðir, ekki valkvæðar viðbætur.

### Hið opinbera

Á lands- eða stórverkefnisstigi situr verkefnastýrð vinna inni í tryggingarfyrirkomulagi ríkisvaldsins: Infrastructure and Projects Authority rekur gáttayfirferðir, Green Book og Five Case Model HM Treasury stýra viðskiptamálinu, og stærstu verkefnin fara inn í Government Major Projects Portfolio með birtri ábyrgð gagnvart þinginu og National Audit Office. Ábyrgð er ákaflega opinber — ábyrgi æðri eigandinn ber persónulega ábyrgð og má kalla fyrir fastanefnd — svo áfangahlið og valkostamat eru lögbundin stýring, ekki leikhús. Fjármögnun er losuð hlut fyrir hlut gegn samþykktum viðskiptamálum og áhættufýsi er lítil, því bilun verður forsíðufrétt. Raunverulegt gildi fræðigreinarinnar hér er valdið til að stöðva eða endurskilgreina bilandi verkefni áður en það verður opinber afskrift.

## Algeng mistök

- **Að verkefnastýra þróandi þjónustu.** Að beita föstu-umfangi, leysa-upp-í-lokin stjórnarháttum á lifandi stafræna vöru framleiðir yfirgefningarmeinsemdina. Lagfæring: notaðu vörustýrða vinnu (Viðfangsefni 5.0) þar sem þjónustan er áframhaldandi.
- **Viðskiptamálið sem einskipta miði að fjármögnun.** Skrifað einu sinni til að losa fé, síðan aldrei heimsótt aftur. Lagfæring: yfirfarðu það við hvert áfangahlið; vertu fús til að stöðva.
- **Stimplunaráfangahlið.** Hlið sem segja aldrei „stöðvið“ veita enga stjórn. Lagfæring: gerðu að stöðva eða endurskipuleggja raunverulegan valkost stjórnar og notaðu hann.
- **Umfangsskrið án breytingastýringar.** Óstýrðar viðbætur sprengja tíma og kostnað. Lagfæring: grunnsettu umfang og beindu hverri breytingu gegnum breytingastýringu.
- **Engin umskiptaáætlun í þjónustu.** Verkefninu lýkur og enginn á úttakið. Lagfæring: samþykktu móttökuteymið og stuðningslíkanið fyrir opnun.
- **RAID sem skjalaskápur.** Skrá sem er skrifuð og aldrei brugðist við. Lagfæring: yfirfarðu RAID reglulega og stigmagnaðu eftir undantekningum.
- **Að loka aldrei í raun.** Uppvakningaverkefni sem éta auðlindir án enda. Lagfæring: vísvitandi lokun með samþykki, yfirfærslu og lærdóm skráðan.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Réttlæting | Fjármögnunar leitað án valkostamats | Viðskiptamál skrifað einu sinni, síðan lagt á hilluna | Lifandi viðskiptamál (Five Case) yfirfarið við hvert hlið | Viðskiptamál rakið gegn megindlegum ávinningsmarkmiðum og tryggt við hvert hlið | Stjórn stöðvar/endurskipuleggur reglulega verkefni sem missa réttlætingu |
| Umfangsstýring | Umfang óskýrt; skrið óstýrt | Umfang skilgreint en breytingar tilfallandi | Umfang grunnsett með formlegri breytingastýringu | Áhrif breytinga magngreind; afköst og afgangsskrið mæld gegn grunnlínu | Breytingastýring er hröð, gagnsæ og treyst |
| Stjórnarhættir | Engin skýr stjórn eða hlutverk | Stjórn til en hlið formsatriði | PRINCE2-hlutverk skýr; raunveruleg stöðva/halda áfram hlið | Vikmörk sett og vöktuð; hliðarákvarðanir studdar raktum mælikvörðum | Stýring eftir undantekningum losar tíma æðri stjórnenda fyrir raunverulegar ákvarðanir |
| Áhætta og stýring | Áhættur raktar óformlega eða alls ekki | RAID-skrá til en úrelt | Lifandi RAID; stigmögnun eftir undantekningum | Áhættuafhjúpun magngreind og stýringar tryggðar gegn samþykktri fýsi | RAID knýr ákvarðanir; næstum-slys fóðra lærdóm |
| Lokun og umskipti | Verkefni reka, aldrei formlega lokað | Yfirfærsla tilfallandi | Vísvitandi lokun; þjónustuumskipti skipulögð | Lokun og ávinningsraungerving mæld eftir yfirfærslu gegn grunnlínu | Lærdómur kerfisbundið endurnotaður yfir verkefni |

## Gátlisti

- [ ] Er verkið ósvikið endanlegt með skilgreint umfang og lokaástand (ekki áframhaldandi þjónusta)?
- [ ] Er lifandi viðskiptamál (Five Case Model) yfirfarið við hvert áfangahlið?
- [ ] Er umfang grunnsett, með virku breytingastýringarferli?
- [ ] Eru vinnuáfangarnir skilgreindir, hver endandi í raunverulegu stöðva/halda áfram ákvörðunarhliði?
- [ ] Eru hlutverk verkefnastjórnar skýr — framkvæmdastjóri/SRO, æðri notandi, æðri birgir?
- [ ] Er lifandi RAID-skrá viðhaldin, með stigmögnun eftir undantekningum?
- [ ] Eru klínískt öryggi (DCB0160), DPIA og umskipta-/afturköllunarprófanir hliðarafurðir?
- [ ] Er móttökurekstrarteymið og stuðningslíkanið samþykkt fyrir opnun?
- [ ] Er vísvitandi lokun: samþykki, yfirfærsla, teymislosun, lærdómur skráður?
- [ ] Hefur áframhaldandi umbót lifandi þjónustunnar verið úthlutað til réttrar vinnuaðferðar?

## Helstu heimildir

- AXELOS / PeopleCert — *Managing Successful Projects with PRINCE2* (7. útgáfa) og PRINCE2 meginreglur, þemu og ferli.
- Project Management Institute (PMI) — *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* og *The Standard for Project Management*.
- HM Treasury — *Guide to Developing the Project Business Case* (Five Case Model / Green Book).
- Infrastructure and Projects Authority (IPA), Cabinet Office — leiðbeiningar um tryggingu og gáttayfirferðir fyrir stórverkefni.
- NHS Digital klínískur öryggisstaðall DCB0160 (innleiðing heilbrigðisupplýsingatæknikerfa).
- NHS England — NHS Service Manual og Digital Service Standard (fyrir þjónustuumskipti og notendaþarfasamhengi).

## Tilvísanir

1. Project management — Wikipedia — https://en.wikipedia.org/wiki/Project_management
2. PRINCE2 — Wikipedia — https://en.wikipedia.org/wiki/PRINCE2
3. Project management triangle (iron triangle) — Wikipedia — https://en.wikipedia.org/wiki/Project_management_triangle
4. Project Management Institute — Wikipedia — https://en.wikipedia.org/wiki/Project_Management_Institute
5. Project Management Body of Knowledge — Wikipedia — https://en.wikipedia.org/wiki/Project_Management_Body_of_Knowledge
6. Business case — Wikipedia — https://en.wikipedia.org/wiki/Business_case
7. Phase-gate process (stage gates) — Wikipedia — https://en.wikipedia.org/wiki/Phase-gate_process
8. Scope creep — Wikipedia — https://en.wikipedia.org/wiki/Scope_creep
9. Data migration — Wikipedia — https://en.wikipedia.org/wiki/Data_migration
10. Electronic health record — Wikipedia — https://en.wikipedia.org/wiki/Electronic_health_record
11. HM Treasury — Wikipedia — https://en.wikipedia.org/wiki/HM_Treasury
12. *Managing Successful Projects with PRINCE2* (7th edition) — AXELOS / PeopleCert — https://www.peoplecert.org/browse-certifications/project-programme-and-portfolio-management/PRINCE-2-1005
13. *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* — Project Management Institute — https://www.pmi.org/
14. *The Green Book* and *Guide to Developing the Project Business Case* (Five Case Model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent
15. Assurance and gateway review guidance for major projects — Infrastructure and Projects Authority, Cabinet Office — https://www.gov.uk/government/organisations/infrastructure-and-projects-authority
16. Clinical risk management standard DCB0160 — NHS England — https://digital.nhs.uk/services/clinical-safety
