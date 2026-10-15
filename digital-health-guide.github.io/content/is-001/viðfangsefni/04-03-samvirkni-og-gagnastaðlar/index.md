# Viðfangsefni 4.3 — Samvirkni og gagnastaðlar

**Í heilbrigðis- og velferðarþjónustu er samvirkni ekki tæknilegt fínirí heldur krafa um klínískt öryggi og jafnræði: þegar kerfi geta ekki miðlað réttum gögnum, í réttu formi, með ótvíræðri merkingu, á þjónustustaðnum, verður fólk fyrir skaða og ójöfnuður magnast.**

## Hvers vegna þetta skiptir máli í heilbrigðis- og velferðarþjónustu

Umönnun manneskju fer sjaldan fram á einum stað. Eitt tilvik getur snert heimilislæknastofu, sjúkraflutningaþjónustu, bráðamóttöku, sjúkrahúsdeild, samfélagshjúkrunarfræðing, apótek, félagsþjónustuteymi og umönnunaraðila heima. Hver heldur hluta skrárinnar. Ef þessa hluta er ekki hægt að leiða saman örugglega og fljótt taka klínískir starfsmenn ákvarðanir með vantandi upplýsingar: ofnæmi sem ekki sást, lyf ávísað tvisvar, próf endurtekið að óþörfu, verndarflagg ósýnilegt teyminu sem þarf það.

Samvirkni er það sem breytir safni ótengdra kerfa í eitthvað sem hegðar sér, frá sjónarhóli sjúklingsins, eins og samhæfð þjónusta. Hún er lagnakerfið undir samþættri umönnun. Þegar hún virkar getur klínískur starfsmaður í einni skipulagsheild séð það sem önnur hefur skráð, og treyst því að það merki það sem hann heldur að það merki. Þegar hún bregst er bresturinn oft þögull þar til einhver verður fyrir skaða.

Þetta er líka jafnræðismál. Fólkið með flóknustu þarfirnar — veikburða eldri fullorðnir, þau með mörg langvinn ástönd, fólk sem færist milli þjónusta — er einmitt fólkið þar sem gögn eru mest sundruð. Slök samvirkni skaðar því mest þá berskjölduðustu. Og hún er spurning um almannatraust: fólk gerir eðlilega ráð fyrir að NHS miðli þegar upplýsingum þess skynsamlega, og er slegið að læra hve oft það gerir það ekki.

Að lokum ver samvirkni opinbert fé. Séreignarkerfi sem geta ekki skipst á gögnum læsa skipulagsheildir inn í dýra, erfitt-að-skipta-um samninga og knýja fram kostnaðarsamar punkt-til-punkts samþættingar. Að smíða að opnum stöðlum er hvernig þú heldur valkostum opnum, heldur birgjum heiðarlegum og forðast að greiða ítrekað fyrir að leysa sama vandann.

## Lykilhugtök

[Samvirkni](https://en.wikipedia.org/wiki/Interoperability) er geta ólíkra kerfa til að skiptast á upplýsingum og nota þær. Gagnlegt er að aðgreina tvö lög. Setningafræðileg eða tæknileg samvirkni þýðir að tvö kerfi geta skipst á skilaboði og hvort getur þáttað byggingu þess — umslagið berst og má opna. [Merkingarfræðileg samvirkni](https://en.wikipedia.org/wiki/Semantic_interoperability) þýðir að móttökukerfið skilur hvað innihaldið merkir á sama hátt og sendandinn gerði — að kóði fyrir „penisillínofnæmi“ sé túlkaður eins báðum megin. Tæknileg samvirkni án merkingarfræðilegrar er hættuleg: gögn flæða, en merking tapast eða aflagast.

Heilbrigðisgögnum er miðlað með stöðlum. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7) er staðlafjölskyldan sem mest er notuð í heilbrigðismálum. Eldri HL7 útgáfa 2 (v2) skilaboðaskipti, sem nota pípu-og-hatt afmarkaðan texta, undirbyggja enn gríðarlegt magn sjúkrahússskilaboða og munu gera um árabil. Nútímastaðall hennar, [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), líkir klínískar upplýsingar sem „auðlindir“ skipst á gegnum vefstíls [forritunarviðmót (API)](https://en.wikipedia.org/wiki/API), sem gerir nútímaþróunaraðilum mun auðveldara að vinna með hann.

Staðlar fyrir skilaboðið duga ekki; þú þarft líka staðlaðan orðaforða fyrir innihaldið. [SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)](https://en.wikipedia.org/wiki/SNOMED_CT) er klíníska hugtakasafnið sem fyrirskipað er yfir NHS-umönnun til að skrá greiningar, einkenni, aðgerðir og fleira. NHS Dictionary of medicines and devices (dm+d) er staðlaði orðaforðinn fyrir lyf og lækningatæki, og undirbyggir rafræna ávísun. [Alþjóðleg tölfræðiflokkun sjúkdóma, 10. og 11. endurskoðun (ICD-10 og ICD-11)](https://en.wikipedia.org/wiki/ICD-11), viðhaldin af Alþjóðaheilbrigðismálastofnuninni, eru notuð til flokkunar, tölfræði og endurgreiðslu frekar en daglegrar klínískrar skráningar. [openEHR](https://en.wikipedia.org/wiki/OpenEHR) er opin forskrift til að byggja upp sjálfa heilsuskrána gegnum sameiginleg, klínískt stýrð „frumsnið“ (archetypes), og er notuð af sumum skipulagsheildum til að halda klínískum gagnalíkönum óháðum nokkrum einum birgi.

Tvær hugmyndir til viðbótar eru grundvallaratriði. [NHS-númerið](https://en.wikipedia.org/wiki/NHS_number) er sameiginlega sjúklingaauðkennið sem leyfir að skrár um sömu manneskju séu tengdar áreiðanlega yfir skipulagsheildir; án sameiginlegs auðkennis er samsvörun ágiskun. Og [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise) birtir „snið“ sem tilgreina nákvæmlega hvernig á að sameina fyrirliggjandi staðla til að leysa áþreifanleg vandamál eins og að miðla skjölum, svo ólíkir birgjar útfæri þau eins.

Undir öllu þessu er stefnumótandi val. Að smíða að [opnum stöðlum](https://en.wikipedia.org/wiki/Open_standard) með birtum, endurnýtanlegum API heldur markaði samkeppnishæfum og gögnum þínum flytjanlegum. Að reiða sig á séreignarviðmót skapar [birgjalæsingu](https://en.wikipedia.org/wiki/Vendor_lock-in), þar sem að skipta um birgi verður svo dýrt að þú getur í reynd ekki. Ekkert af þessu skilar virði þó án [gagnagæða](https://en.wikipedia.org/wiki/Data_quality): nákvæm, tæmandi, tímanleg, samkvæmt kóðuð gögn eru forsenda samvirkni, ekki eftiráhugsun.

## Bestu starfsvenjur

1. **Aðgreindu merkingarfræðilega frá tæknilegri samvirkni, og hannaðu fyrir hvort tveggja.** Það er auðvelt að fagna að skilaboð flæði nú milli tveggja kerfa og missa af því að móttökuklínískur starfsmaðurinn getur ekki treyst merkingu þess örugglega. Spyrðu alltaf: túlkar hin hliðin þessa kóða, einingar og neitanir nákvæmlega eins og við? Fjárfestu í sameiginlegum hugtakasöfnum (SNOMED CT, dm+d) og gildasöfnum, ekki bara skilaboðasniðum, því rétt sent en misskilið ofnæmi er hættulegra en ekkert skilaboð.

2. **Smíðaðu að opnum stöðlum og endurnotaðu vettvanga frekar en að finna upp að nýju.** Taktu upp víða studdu regluna: smíða að opnum stöðlum, og endurnota fyrirliggjandi landsvettvanga og -þjónustur áður en þú smíðar eigin. Í NHS þýðir þetta að velja HL7 FHIR API, nota NHS-númerið sem auðkenni og tengjast landsþjónustum eins og Spine, GP Connect og sameiginlegum umönnunarskrám frekar en að skapa sérsmíðaðar punkt-til-punkts tengingar. Endurnotkun dregur úr kostnaði, dreifir viðhaldsbyrðinni og þýðir að gögn þín geta ferðast.

3. **Gerðu NHS-númerið ófrávíkjanlegt í hverri skrá og skilaboði.** Áreiðanleg skráartenging hvílir á traustu sameiginlegu auðkenni. Tryggðu að NHS-númerið sé skráð, staðfest gegn landslýðfræðiþjónustunni og borið á hverri viðeigandi skrá og viðmóti. Þar sem það vantar eða er óstaðfest, meðhöndlaðu það sem gagnagæðagalla til að leysa, því samsvörun eftir nafni og fæðingardegi einum framleiðir bæði hættulega ranga samsvörun og misstar tengingar.

4. **Meðhöndlaðu gagnagæði sem fyrsta flokks afurð.** Samvirkni flytur gagnagæðavandamál þín út til allra niðurstreymis. Greindu gögn þín, mældu tæmandi og kóðunarsamkvæmni og komdu á ráðsmennsku svo villur finnist og lagist við upptök. Kóðunarrek, frjáls texti þar sem skipulögð gögn þarf og ósamkvæmar einingar munu hljóðlega spilla sérhverri niðurstreymisgreiningu og klínískri sýn, svo fjármagnaðu þessa vinnu skýrt frekar en að gera ráð fyrir að hún gerist sjálf.

5. **Veldu API-fyrst, lauslega tengdar arkitektúrar fram yfir þéttar samþættingar.** Hannaðu svo getur séu afhjúpaðar gegnum vel skjalfest, útgáfumerkt API sem aðrir geta neytt án sérsniðinna samninga. Þetta er hægara í fyrstu en bein gagnagrunnstenging, en það er sem leyfir þér að skipta út einum íhlut án þess að endurbyggja allt kringum hann. Það samræmist líka hvernig landsþjónustur og nútímabirgjar búast nú við að samþætta, og styður afhendingaraðferðirnar í Viðfangsefni 3.5 — Afhendingarlífsferlar.

6. **Notaðu birt snið og samræmisprófanir, ekki staðbundnar túlkanir.** Staðlar eru sveigjanlegir, og tvö teymi geta útfært „sömu“ FHIR-auðlind ósamrýmanlega. Taktu upp landsútfærsluleiðbeiningar og IHE-snið sem negla niður smáatriðin, og krefstu þess að birgjar sýni samræmi gegn þeim fyrir opnun. Samræmisprófanir breyta „við styðjum FHIR“ — fullyrðingu sem merkir mjög lítið ein og sér — í sannreynanlega, samningsbundna staðreynd.

7. **Skrifaðu samvirkni- og opnastaðlakröfur inn í innkaup og samninga.** Ódýrasti tíminn til að forðast læsingu er áður en þú skrifar undir. Krefstu opinna, skjalfestra API, réttarins til að draga út eigin gögn á stöðluðu sniði, fylgni við nafngreinda staðla og engra gjalda fyrir staðlaðar samþættingar. Vinnðu með viðskiptasamstarfsfólki þínu (sjá Viðfangsefni 6.3 — Innkaup og viðskipti) svo þetta verði skyldubundin matsviðmið, ekki metnaður sem er samið burt síðar.

8. **Stýrðu samvirkni með klínískt öryggi og upplýsingastjórnarhætti í herberginu.** Sérhvert nýtt gagnaflæði breytir klínískri áhættu og meðhöndlun trúnaðarupplýsinga. Taktu klíníska öryggisfulltrúa og upplýsingastjórnarháttaleiðtoga inn í hönnunarákvarðanir frá byrjun, ekki sem lokaundirskrift, svo sameiginlegar skrár séu bæði öruggar og löglegar. Þetta tengist beint Viðfangsefni 1.6 — Klínískt öryggi og áhættustýring og Viðfangsefni 1.7 — Upplýsingastjórnarhættir, gagnavernd og netöryggi.

## Spurningar til að ræða með teyminu

1. **Hvar í umönnunarleiðum okkar skapa vantandi eða misskilin gögn mestu klínísku áhættuna í dag?** Samvirknifjárfesting ætti að fylgja skaða og virði, ekki arkitektúrtísku. Kortleggið ferðirnar sem flóknustu sjúklingar ykkar fara í raun og finnið yfirfærslurnar þar sem upplýsingar tapast, seinka eða berast án áreiðanlegrar merkingar. Spyrjið klíníska starfsmenn hvar þeir vinna reglulega blindir — flutningarnir, bilin utan dagvinnutíma, mörkin milli heilbrigðis- og félagsþjónustu. Aðgreinið staði þar sem gögn flæða alls ekki frá stöðum þar sem þau flæða en er ekki hægt að treysta, því þetta þarfnast ólíkra lagfæringa. Íhugið hvaða hópar verða mest fyrir áhrifum, þar sem sundrun fellur harðast á fólk með flóknustu þarfirnar. Svarið segir ykkur hvar á að byrja, og gefur ykkur klínískt öryggismál sem mun bera meiri þyngd en nokkur tæknileg röksemd.

2. **Hve afhjúpuð erum við fyrir birgjalæsingu, og hvað myndi það í raun kosta okkur að skipta um helstu klínísku kerfi okkar?** Margar skipulagsheildir uppgötva raunverulegt verð lokaðs kerfis aðeins þegar þær reyna að yfirgefa það. Vinnið áþreifanlega gegnum hvað það tæki að draga gögn ykkar út í nothæfu, stöðluðu formi og flytja til annars birgis. Skoðið samninga ykkar fyrir hver á gögnin, hvaða stöðluð viðmót eru til og hvort þið eruð rukkuð fyrir samþættingar sem ættu að vera venjubundnar. Greinið séreignarviðmótin og gagnasniðin sem þyrfti að leysa upp. Vegið þetta gegn opnun valkosta og landsvettvanga sem þið gætuð endurnotað í staðinn. Þetta snýst ekki um að skipta um birgja í sífellu; það snýst um að skilja áhrifamátt ykkar og draga úr áhættu þess að vegvísir eins birgis verði eini valkostur ykkar.

3. **Eru gögn okkar nógu góð til að deila örugglega, og hvernig myndum við vita það?** Að deila slökum gögnum vekur ekki bara skömm — það dreifir villum inn í ákvarðanir annarra klínískra starfsmanna. Spyrjið hvort þið mælið í raun tæmandi, nákvæmni, tímanleika og kóðunarsamkvæmni gagnanna sem þið ætlið að afhjúpa. Ræðið hver á gagnagæði í skipulagsheild ykkar og hvort þeir hafa tíma og umboð til að laga vandamál við upptök. Íhugið hvaða hlutfall skráa ber staðfest NHS-númer og hve mikið af klínískt mikilvægum upplýsingum situr enn í frjálsum texta frekar en kóðuðum reitum. Hugsið um hvernig þið mynduð greina kerfisbundna kóðunarvillu áður en hún næði sameiginlegri umönnunarskrá. Ef þið getið ekki svarað þessum spurningum með sönnunargögnum, meðhöndlið það sem niðurstöðu í sjálfu sér, og fjármagnið gagnagæðavinnuna áður en þið víkkið pípuna.

4. **Þegar birgir segir „við styðjum FHIR“, hvernig myndum við í raun staðfesta það fyrir opnun?** Staðlamerki er markaðsfullyrðing þar til það er prófað gegn tiltekinni útfærsluleiðbeiningu. Ræðið hvort skipulagsheild ykkar hefur nokkra samræmisprófunargetu sjálf, eða hvort þið takið birgja einfaldlega á orðinu. Tvö kerfi geta hvort fyrir sig verið „FHIR-samræmd“ og samt ófær um að skiptast á nothæfu skilaboði, því staðallinn er vísvitandi sveigjanlegur og merkingin lifir í sniðunum og gildasöfnunum sem negla hann niður. Spyrjið hvaða landsútfærsluleiðbeiningar og IHE-snið gilda um viðmótið sem um ræðir, og hver ykkar megin er hæfur til að lesa þær. Íhugið hvort samræmi er skrifað inn í samninginn sem skilyrði fyrir tengingu, eða uppgötvað sársaukafullt meðan á samþættingu stendur. Heiðarlegt svar nefnir tiltekna sniðið sem þið mynduð prófa gegn, manneskjuna eða fallið sem myndi keyra prófið og punktinn á tímalínunni þar sem birgir sem fellur er vísað frá frekar en veifað í gegn.

5. **Hver á staðla, hugtakasöfn og samræmi yfir skipulagsheild okkar, og hafa þeir umboð til að segja nei?** Samvirkni rýrnar án ráðsmennsku: gildasöfn reka, staðbundnar leiðbeiningar víkja og hvert nýtt verkefni finnur hljóðlega upp eigin túlkun. Spyrjið hvort nafngreint fall ber ábyrgð á stöðlum, SNOMED CT og dm+d undirsöfnum og samræmi, eða hvort þessi þekking situr í höfðum fárra einstaklinga. Íhugið spennuna milli miðlægs samræmis og staðbundins afhendingarhraða — teymi undir þrýstingi munu smíða fljótlegasta hlutinn nema staðlafall hafi raunverulegt vald til að krefjast endurnotkunar. Ræðið hvernig hugtakaviðhald er fjármagnað, miðað við að það er óglamúrlegt, samfellt og gagnast öllum frekar en neinu einu verkefni. Skoðið hvernig þið haldið útfærslum samræmdum eftir því sem FHIR, SNOMED CT og landsleiðbeiningar þróast, frekar en að frjósa við útgáfuna sem þið tókuð fyrst upp. Heiðarlegt svar greinir ábyrga eigandann, fjármögnun hans og nýlegt dæmi þar sem hann annaðhvort framfylgdi staðli eða mistókst.

6. **Eru manneskjurnar, sem skrár við erum að tengja saman, upplýstar og sáttar við hvernig gögn þeirra flæða?** Samvirkni er ekki aðeins tæknilegt og klínískt mál heldur spurning um almannatraust og lögmætan grundvöll. Fólk gerir eðlilega ráð fyrir að NHS miðli þegar upplýsingum þess skynsamlega, og er slegið bæði þegar það gerir það ekki og þegar það gerir það á vegu sem það bjóst ekki við. Ræðið hvort sjúklingar skilja hvaða skipulagsheildir geta séð sameiginlega skrá þeirra, hvernig National Data Opt-Out eða staðbundið samþykkislíkan er virt yfir flæðið og hvernig aðgangur er skráður og endurskoðanlegur. Íhugið jafnræðisvíddina: fólkið þar sem gögn eru mest sundruð — þau með flóknar þarfir — eru líka þau sem síst geta ratað um útskráningar og upplýsingatilkynningar. Takið upplýsingastjórnarhætti og, þar sem við á, sjúklinga eða fulltrúa þeirra inn í hönnunina frekar en að meðhöndla samþykki sem krossmerki í lokin. Heiðarlegt svar getur lýst lögmæta grundvellinum fyrir hvert flæði, hvernig manneskja myndi komast að því hver hefur séð skrá hennar og hvernig val hennar er virt frá enda til enda.

## Í reynd: dæmi úr heilbrigðis- og velferðarþjónustu

Samþætt umönnunarkerfi í Norður-Englandi tekur sér fyrir að gefa klínískum starfsmönnum eina sýn á sameiginleg lyf yfir heimilislæknastofu, sjúkrahús og samfélagsapótek, eftir að rannsókn alvarlegs atviks fann að sjúklingi hafði verið ávísað tveimur milliverkandi lyfjum af teymum sem sáu ekki skrár hvors annars.

Freistingin er að kaupa „lyfjamælaborð“ af einum birgi og tengja það beint í gagnagrunn hvers kerfis. Samvirkniforystan stendur gegn þessu. Þess í stað tekur áætlunin upp aðferð sem smíðar að opnum stöðlum. Hvert upptakakerfi afhjúpar lyfjagögn sem HL7 FHIR-auðlindir; hvert lyf er kóðað með dm+d svo „sama lyf“ merki það sama alls staðar; og hver skrá er lykluð á staðfest NHS-númer svo réttu lyfin festist við réttu manneskjuna. Gögn heimilislækna eru dregin gegnum GP Connect frekar en sérsmíðað straum, endurnota landsgetu í stað þess að finna upp staðbundna.

Snemma gagnagreining sannar gildi sitt strax. Kerfi einnar stofu hefur skráð ákveðin lyf í frjálsum texta frekar en sem kóðaðar dm+d færslur, sem þýðir að þau hefðu verið ósýnileg hverri sjálfvirkri milliverkunarathugun. Þetta er lagað við upptök fyrir opnun. Teymið finnur líka klasa skráa með óstaðfest NHS-númer og beinir þeim gegnum landslýðfræðiþjónustuna til samsvörunar.

Klíníski öryggisfulltrúinn og upplýsingastjórnarháttaleiðtoginn eru hluti af hönnunarhópnum allan tímann. Saman skilgreina þau nákvæmlega hvaða gögnum er miðlað, við hverja, á hvaða lögmæta grunni og hvernig aðgangur klínísks starfsmanns er skráður — áhyggjuefni Viðfangsefnis 1.7 — Upplýsingastjórnarhættir, gagnavernd og netöryggi. Birgjar verða að standast samræmisprófanir gegn landsFHIR-útfærsluleiðbeiningunni áður en þeir tengjast. Tólf mánuðum síðar er sameinaða lyfjasýnin lifandi, milliverkun sem áður hefði farið framhjá hefur þegar verið gripin og — þar sem allt var smíðað að opnum viðmótum — endurnotar annað notkunartilfelli, sameiginlegar ofnæmisupplýsingar, mest af sömu lögnum á broti af upphaflega kostnaðinum.

## Geirasjónarhorn

### Sprotafyrirtæki

Stafrænt heilbrigðissprotafyrirtæki lifir eða deyr á því hversu auðveldlega það tengist fyrirliggjandi kerfum, svo meðhöndlaðu samvirkni sem kjarnaeiginleika, ekki reglufylgnikvöð. Að smíða FHIR-API og nota SNOMED CT og dm+d frá upphafi gerir þig langtum auðveldara að kaupa og samþætta, og sendir þroskamerki til varkárra NHS-kaupenda. Stenstu þá hvöt að finna upp eigið gagnalíkan þegar staðall er til; aðgreining þín ætti að vera varan, ekki séreignarsnið sem verður skuldbinding. Að fá meðhöndlun NHS-númers og upplýsingastjórnarhætti rétta snemma er það sem leyfir þér að færast frá tilraun til innkaupa. Hannaðu svo viðskiptavinur gæti, í grundvallaratriðum, dregið út gögn sín og farið — þversagnarkennt er sú opnun það sem vinnur sér inn traustið til að halda þeim.

### Lítil fyrirtæki

Rótgróinn lítill veitandi — heimilislæknastofa, samfélagsapótek, hjúkrunarheimili eða stakstaða stofa — ber sömu skyldur til að miðla gögnum örugglega og stærsta samsteypan, en með brot af tæknigetunni. Hér er samvirkni aðallega innkaupa- og stillingaragi frekar en verkfræðiagi: veldu kerfi sem þegar tala FHIR, tengdu við landsþjónustur eins og GP Connect og Spine og kóðaðu með SNOMED CT og dm+d beint úr kassanum, svo þú erfir staðla í stað þess að smíða þá. Gerðu staðfesta NHS-númerskráningu hluta af daglegri starfsvenju, því án samþættingarteymis til að samræma ósamsvörun síðar er að fá auðkennið rétt við skráningu ódýrasta öryggisráðstöfun þín. Styddu þig við sameiginlegar umönnunarskráráætlanir og sameiginlega innviði samþætta umönnunarkerfisins ykkar frekar en að panta sérsmíðaðar tengingar sem þú getur ekki viðhaldið. Þegar þú skrifar undir eða endurnýjar kerfissamning, krefstu gagnaútdráttarréttinda og opinna viðmóta á einföldu máli, því lítil skipulagsheild finnur birgjalæsingu hvað sárast og hefur minnsta áhrifamátt til að flýja hana eftir á.

### Stórfyrirtæki

Stór veitandi eða birgir ber venjulega áratugi af arfi: HL7 v2 viðmót, mörg rafræn skráarkerfi og samþættingarvélar sem halda öllu saman. Raunsæja stefnan er ekki að rífa allt út heldur að setja API-fyrst, staðlabyggt lag fyrir framan eignina, flytja flæði smám saman í FHIR meðan v2 er haldið gangandi þar sem það verður. Gættu þín fast gegn læsingu við hverja endurnýjun, og krefstu samræmisprófana svo „staðlasamræmt“ sé staðfest frekar en fullyrt. Settu á fót innra staðla- og samræmisfall svo einstök verkefni finni ekki hvert upp eigin túlkun. Þetta er náskylt því hvernig þú stýrir kjarnarekstrarvettvöngum í Viðfangsefni 5.4 — Fyrirtækjaauðlindaáætlanagerð (ERP), þar sem sami endurnotkunar-og-opinna-viðmóta agi gildir.

### Hið opinbera

Lands- og svæðisstofnanir setja reglur markaðarins, svo val þeirra um staðla gárast um hverja skipulagsheild. Verðmætasta sem ríkisvald getur gert er að skylda opna staðla, birta skýrar útfærsluleiðbeiningar og samræmiskröfur og veita endurnýtanlega landsvettvanga — Spine, GP Connect, sameiginlega umönnunarskrárramma, NHS-númerþjónustuna — svo staðbundnar skipulagsheildir smíði einu sinni og endurnoti. Samkvæmni skiptir meira máli en fullkomnun: staðfastlega framfylgdur nógu góður staðall sigrar fræðilega betri sem allir útfæra ólíkt. Ríkisvaldið verður líka að fjármagna óglamúrlegu vinnuna við hugtakaviðhald og gagnagæðaumbætur, því þetta eru almannagæði sem engin einstök skipulagsheild mun fjármagna ein. Þetta ráðsmannshlutverk tengist Viðfangsefni 9.1 — Samstarf við staðbundin og landsstjórnvöld og hvernig samstarfsaðilar vinna saman í Viðfangsefni 9.0 — Samstarf við samstarfsstofnanir.

## Algeng mistök

- **Að rugla tæknilega tengingu við merkingarfræðilegan skilning.** Að lýsa yfir sigri þegar skilaboð flæðir, án þess að staðfesta að báðar hliðar túlki kóða þess, einingar og neitanir eins. Niðurstaðan eru gögn sem líta samþætt út en eru hljóðlega misskilin.
- **Að deila slökum gögnum hraðar.** Að víkka pípuna áður en gagnagæði eru löguð, svo kóðunarvillur, frjáls texti og vantandi NHS-númer dreifast inn í ákvarðanir annarra klínískra starfsmanna og sérhverja niðurstreymisgreiningu.
- **„Við styðjum FHIR“ sem tóm fullyrðing.** Að taka við staðlamerki án samræmisprófana gegn tiltekinni útfærsluleiðbeiningu, svo tvö „samræmd“ kerfi geta samt ekki talað saman.
- **Sérsmíðaðar punkt-til-punkts samþættingar.** Að smíða beinar tengingar milli hvers pars kerfa, sem framleiðir brothætt net sem verður veldisvísislega erfiðara og dýrara að viðhalda eftir því sem það vex.
- **Læsing sjálfgefið.** Að skrifa undir samninga með séreignarviðmótum og engum gagnaútdráttarréttindum, og uppgötva kostnað gildrunnar aðeins þegar þú reynir að skipta um birgi.
- **Að meðhöndla stjórnarhætti sem lokahlið.** Að taka klínískt öryggi og upplýsingastjórnarhætti inn aðeins til að undirrita, svo vandamál birtast seint og dýrt, eða eru veifuð í gegn undir afhendingarþrýstingi.
- **Staðlar án ráðsmennsku.** Að taka upp hugtakasöfn og snið en fjármagna engan til að viðhalda gildasöfnum, vakta samræmi eða halda útfærslum samræmdum eftir því sem staðlar þróast.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Staðlaupptaka | Tilfallandi, aðallega séreignar- eða heimasmíðuð viðmót | HL7 v2 og nokkur FHIR í notkun; val er mismunandi eftir verkefnum | FHIR, SNOMED CT og dm+d tekin upp sem sjálfgefin með staðbundnum leiðbeiningum | Samræmi við landsleiðbeiningar rakið og skýrt; frávik stýrð og tryggð | Fullt samræmi við landsútfærsluleiðbeiningar og IHE-snið, staðfest með prófunum |
| Auðkenni og tenging | NHS-númer oft vantandi eða óstaðfest | Skráð en ekki staðfest samkvæmt | Staðfest gegn landsþjónustu á flestum skrám | Staðfestingarhlutföll mæld gegn markmiðum, með ósamsvöruðum skrám virkt unnið | Staðfest alls staðar; samsvörunargæði virkt vöktuð |
| Gagnagæði | Ómæld; frjáls texti algengur þar sem kóðun þarf | Mæld sums staðar; lagfæringar viðbragðsbundnar | Greind, í eigu og bætt við upptök | Gæðamælikvarðar raktir gegn þröskuldum, með ráðsmennsku gerða ábyrga | Samfelld vöktun með sjálfvirkri gallagreiningu áður en gögnum er deilt |
| Arkitektúr | Punkt-til-punkts, þétt tengt | Samþættingarvél, blönduð tenging | API-fyrst, endurnýtir landsvettvanga | API-frammistaða og háðir vöktuð; breytingar stýrðar gegnum útgáfustýringu og prófanir | Lauslega tengt, staðlabyggt, íhlutir skiptanlegir án endurvinnu |
| Læsing og innkaup | Séreignarsamningar, engin útgönguréttindi | Nokkur staðlaákvæði, veikt framfylgd | Opnir staðlar og gagnaútdráttarréttindi krafist | Samningsfylgni og útgönguviðbúnaður yfirfarin og tryggð yfir safnið | Opin viðmót skylda og staðfest; ósvik skiptanleiki birgja |

## Gátlisti

- [ ] Sérhver viðeigandi skrá og viðmót ber staðfest NHS-númer, með ferli til að leysa vantandi eða ósamsvöruð.
- [ ] Ný viðmót nota HL7 FHIR og nafngreindar landsútfærsluleiðbeiningar, með HL7 v2 haldið aðeins þar sem flutningur er ekki enn réttlættur.
- [ ] Klínískt innihald er kóðað með SNOMED CT, og lyf með dm+d, gegn samþykktum gildasöfnum.
- [ ] Gagnagæði fyrir allt sem þú ætlar að deila eru greind, mæld, í eigu og bætt við upptök áður en pípan er víkkuð.
- [ ] Birgjar verða að standast samræmisprófanir gegn tilteknu sniði áður en þeir tengjast — „styður FHIR“ er aldrei samþykkt eitt og sér.
- [ ] Landsvettvangar (Spine, GP Connect, sameiginlegar umönnunarskrár) eru endurnotaðir áður en nokkur sérsmíðuð samþætting er smíðuð.
- [ ] Samningar skylda opin, skjalfest API, gagnaútdráttarréttindi á stöðluðu sniði og engin gjöld fyrir staðlaðar samþættingar.
- [ ] Klínískt öryggi og upplýsingastjórnarháttaleiðtogar eru í hönnunarhópnum frá byrjun, ekki bara við undirskrift.
- [ ] Arkitektúr er API-fyrst og lauslega tengdur, svo skipta megi um íhlut án þess að endurbyggja allt kringum hann.
- [ ] Nafngreint fall á staðla, samræmi og hugtakaviðhald yfir skipulagsheildina.

## Helstu heimildir

- NHS England — samvirknistaðlar, Spine, GP Connect og sameiginlegar umönnunarskráráætlanir.
- HL7 International — FHIR-staðallinn og HL7 v2 forskriftir.
- SNOMED International — SNOMED CT hugtakasafn og útfærsluleiðbeiningar.
- NHS Business Services Authority — Dictionary of medicines and devices (dm+d).
- Integrating the Healthcare Enterprise (IHE) — samvirkni snið.
- openEHR International — opnar forskriftir til að byggja upp heilsuskrána.
- Alþjóðaheilbrigðismálastofnunin — Alþjóðleg tölfræðiflokkun sjúkdóma (ICD-10 og ICD-11).

## Tilvísanir

1. Interoperability — Wikipedia — https://en.wikipedia.org/wiki/Interoperability
2. Semantic interoperability — Wikipedia — https://en.wikipedia.org/wiki/Semantic_interoperability
3. Health Level 7 — Wikipedia — https://en.wikipedia.org/wiki/Health_Level_7
4. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
5. SNOMED CT — Wikipedia — https://en.wikipedia.org/wiki/SNOMED_CT
6. ICD-11 — Wikipedia — https://en.wikipedia.org/wiki/ICD-11
7. ICD-10 — Wikipedia — https://en.wikipedia.org/wiki/ICD-10
8. openEHR — Wikipedia — https://en.wikipedia.org/wiki/OpenEHR
9. NHS number — Wikipedia — https://en.wikipedia.org/wiki/NHS_number
10. Integrating the Healthcare Enterprise — Wikipedia — https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise
11. Open standard — Wikipedia — https://en.wikipedia.org/wiki/Open_standard
12. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
13. API — Wikipedia — https://en.wikipedia.org/wiki/API
14. Data quality — Wikipedia — https://en.wikipedia.org/wiki/Data_quality
15. FHIR standard — HL7 International — https://www.hl7.org/fhir/
16. SNOMED CT — SNOMED International — https://www.snomed.org/
17. Dictionary of medicines and devices (dm+d) — NHS Business Services Authority — https://www.nhsbsa.nhs.uk/pharmacies-gp-practices-and-appliance-contractors/dictionary-medicines-and-devices-dmd
18. GP Connect — NHS England Digital — https://digital.nhs.uk/services/gp-connect
19. Spine — NHS England Digital — https://digital.nhs.uk/services/spine
20. International Classification of Diseases (ICD) — World Health Organization — https://www.who.int/standards/classifications/classification-of-diseases
