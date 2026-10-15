# Viðfangsefni 1.4 — Hættuhlutföll

**Í einni setningu:** Hættuhlutfall er þétt, víða tilkynnt og víða misskilin samantekt á því hversu hratt atburðir gerast í einum hópi samanborið við annan – og að lesa það vel merkir að spyrja alltaf „yfir hvaða eftirfylgni, í hvaða þýði og hvað kaupir það í algildum skilmálum?“ áður en þú leyfir því að knýja þjónustukaupa-, mats- eða skýrsluákvörðun.

## Hvers vegna þetta skiptir máli í heilbrigðis- og velferðarþjónustu

Þegar glæra söluaðila segir „inngrip okkar náði hættuhlutfalli 0,75“ er stjórnandi boðið að finna 25% minnkun á einhverju slæmu. Tilfinningin er yfirleitt sterkari en staðreyndin réttlætir. [Hættuhlutfall](https://en.wikipedia.org/wiki/Hazard_ratio) (HR) er ein algengasta tölfræðin í klínískum og lýðheilsusönnunargögnum, og ein sú áreiðanlegast misskilda – ekki af tölfræðingum, heldur af stjórnum, þjónustukaupendum og samskiptateymum sem bregðast við henni. Í heilbrigðis- og velferðarþjónustu er bilið milli þess sem HR segir og þess sem fólk heldur að það segi ekki fræðilegur óþægindi. Það breytir því hvað er keypt, hvað er skalað og hvers sjúklingum er sagt að vænta.

Þetta viðfangsefni er hagnýtur förunautur Viðfangsefnis 1.3 — Ákvarðanir byggðar á sönnunargögnum. Það viðfangsefni hélt því fram að þú ættir að samræma styrk sönnunargagna við áhættustig og halda klínískum og afhendingarsönnunargögnum aðgreindum. Þetta fer einu lagi dýpra í eina tölfræði sem endurtekur sig í klínísku sönnunargögnunum sem þú verður beðinn að vega: hvernig á að lesa hana, hvar hún villir og hvað á að krefjast samhliða. Þú þarft ekki að reikna hættuhlutfall. Þú þarft að vita að sama höfuð-HR getur samsvarað lífsbreytandi ávinningi eða vart greinanlegum eftir staðreyndum sem glæran sleppti – og að leiðtogi sem getur ekki beðið um þær staðreyndir er á valdi hvers sem valdi rammann. Þar sem þessar tölur móta opinber skilaboð og klínískar leiðir er að fá þær rangar spurning um traust og jafnræði, ekki bara nákvæmni.

## Lykilhugtök

**Hættan og hættuhlutfallið.** *Hætta* (hazard) er augnabliks tíðnin sem atburður (dauði, sjúkrahúsinnlögn, bakslag) á sér stað meðal þeirra sem eru enn í áhættu á tilteknu augnabliki. [Hættuhlutfall](https://en.wikipedia.org/wiki/Hazard_ratio) er hlutfall þeirrar tíðni í meðferðarhópi og tíðninnar í samanburðarhópi. HR undir 1 þýðir að atburðurinn gerist hægar í meðferðarhópnum; yfir 1, hraðar; nákvæmlega 1, enginn munur. Það sprettur úr [lifunargreiningu](https://en.wikipedia.org/wiki/Survival_analysis) — grein tölfræðinnar fyrir „tími-til-atburðar“ gögn — og er yfirleitt metið með [hlutfallslega hættulíkaninu](https://en.wikipedia.org/wiki/Proportional_hazards_model), þekkt eftir höfundi sínum sem Cox-líkanið. Mikilvægt er að HR lýsir *tíðni*, ekki *líkindum*, og ekki magni vinnins tíma.

**Hlutfallslega hættuforsendan.** Þægindi Cox-líkansins hvíla á forsendu: að hættuhlutfallið sé *fast* — sama eftir þrjá mánuði og eftir þrjú ár, sama fyrir 50 ára og 80 ára. Þetta er hlutfallslega hættuforsendan, og hún er oft röng. Raunveruleg áhrif breytast yfir eftirfylgnitíma (skurðaðgerð getur hækkað áhættu snemma og lækkað síðar) og yfir undirhópa (aldur, kyn, fylgisjúkdómar, skerðing). Þegar forsendan bregst er einstaka tilkynnta HR *meðaltal* yfir tiltekinn eftirfylgnigluggga tilraunarinnar og þýðisblöndu — vegin blanda, ekki algildur fasti sem þú getur lyft inn í annað umhverfi.

**Hlutfallslegt, líkindahlutfall og algilt.** HR er auðvelt að rugla saman við þrjá nágranna. [Hlutfallsleg áhætta](https://en.wikipedia.org/wiki/Relative_risk) (eða áhættuhlutfall) ber saman *uppsöfnuð líkindi* atburðar fyrir tiltekinn tíma, ekki tíðnina; hún er nálægt HR þegar atburðir eru sjaldgæfir en víkur þegar þeir eru algengir. [Líkindahlutfallið](https://en.wikipedia.org/wiki/Odds_ratio) (odds ratio) ber saman *líkindahlutföll* frekar en líkindi og getur litið dramatískt út þegar undirliggjandi áhætta er há. Öll þrjú eru *hlutfallslegir* mælikvarðar. Það sem sjúklingar og greiðendur láta sig varða er *algilt*: [algild áhættuminnkun](https://en.wikipedia.org/wiki/Risk_difference) (áhættumunur) — hversu mörgum færri atburðum á hundrað manns — og andhverfa hennar, [fjöldi sem þarf að meðhöndla](https://en.wikipedia.org/wiki/Number_needed_to_treat) (NNT), fjöldi fólks sem þú verður að meðhöndla til að koma í veg fyrir einn atburð. Hlutfallslegur mælikvarði án algilds félaga er hálf setning.

**Ritskoðun og lifunarferill.** Tilraunir enda; fólk flytur burt, dregur sig til baka eða hefur einfaldlega ekki fengið atburðinn þegar gögn eru læst. [Ritskoðun (tölfræði)](https://en.wikipedia.org/wiki/Censoring_(statistics)) er hvernig lifunargreining meðhöndlar þessi að hluta til séð líf, og hún er styrkur — en mikil eða ójöfn ritskoðun veikir það sem HR getur sagt þér. Heiðarlegi sjónræni förunauturinn við sérhvert HR er [Kaplan–Meier mat](https://en.wikipedia.org/wiki/Kaplan%E2%80%93Meier_estimator) ferillinn, þrepaða ritið af hlutfalli án atburðar yfir tíma. Tveir ferlar sem aðskiljast jafnt segja aðra sögu en tveir sem skerast eða renna saman — en allir þrír geta gefið sama höfuð-HR.

**Truflun og óhrynjanleiki.** HR úr athugunarrannsókn getur verið skekkt af [truflun](https://en.wikipedia.org/wiki/Confounding): einhver þriðji þáttur knýr bæði hver fær meðferðina og hver fær atburðinn. Slembiraðaðar tilraunir verjast þessu; raunheimssamanburður gerir það ekki, nema vandlega aðlagaður. Það er líka lúmskari gildra sértæk fyrir hlutföll eins og HR, kölluð *óhrynjanleiki* (non-collapsibility): jafnvel án truflunar getur hlutfallið sem þú færð eftir aðlögun að áhættuþætti verið frábrugðið óaðlagaða, eingöngu sem afurð þess hvernig hlutföll hegða sér. Lærdómurinn er sá sami — HR er bundið nákvæmu líkaninu og þýðinu sem framleiddi það, og ferðast ekki jafn frjálst og hreina einstaka tala þess gefur til kynna.

**Hvað HR kaupir í árum.** Fólk þýðir „HR 0,75“ í „ég mun lifa lengur“, en stærð þess ávinnings veltur algjörlega á grunnáhættu og hversu þjappað dánartíðni þýðis er þegar. Hugsaðu um það sem að losa um eitt hólf í hættuspili: að minnka *tíðni* kaupir mikinn aukatíma þegar grunnáhætta er há og dreifð, og mjög lítinn þegar flestir lifa þegar til elli og dauðsföll eru pökkuð í þröngan seinan glugga. Sama hlutfallslega minnkun breytist í mismunandi magn [lífslíkna](https://en.wikipedia.org/wiki/Life_expectancy) eftir þeirri grunnlínu — sem er ástæða þess að ekki er hægt að lesa HR sem fastan fjölda viðbótarára án þess að þekkja þýðið sem það kom frá.

**Tölfræðileg á móti klínískri marktækni.** Að lokum getur HR verið [tölfræðilega marktækt](https://en.wikipedia.org/wiki/Statistical_significance) — öryggisbil þess útilokar 1 — meðan áhrifin sem það bendir á eru klínískt léttvæg, sérstaklega í mjög stórri tilraun. Marktækni svarar „er þetta greinanlegt frá tilviljun?“; hún svarar ekki „er þetta þess virði að breyta leið fyrir?“ Báðar spurningar skipta máli, og aðeins sú síðari ætti að ráða fjárfestingu.

## Bestu starfsvenjur

1. **Spyrðu alltaf „yfir hvaða eftirfylgni, og í hvaða þýði?“** HR er meðaltal yfir tiltekinn tilraunaglugga og tiltekinn skráðan hóp. Áður en þú bregst við því, festu lengd eftirfylgni og inntöku- og útilokunarskilyrði — tilraunir sem útilokuðu hina elstu, hina yngstu eða fólk með algenga fylgisjúkdóma lýsa kannski alls ekki þýði þínu. Meðhöndlaðu HR án þessa samhengis sem ófullkomna tölu, ekki fyrirsögn.

2. **Krefstu algildra talna við hlið hverrar hlutfallslegrar.** Fyrir hvert HR eða hlutfallslega áhættu, biddu um algilda áhættuminnkun og fjölda sem þarf að meðhöndla í viðeigandi þýði. „HR 0,75“ finnst stórt; „einn afstýrður atburður á hverja 200 meðhöndlaða yfir þrjú ár“ segir þér hvort það er kostnaðarins, vinnuflæðisbreytingarinnar og aukaverkana virði. Hlutfallslegir og algildir mælikvarðar ættu alltaf að birtast saman, og samskipti til almennings ættu að leiða með því algilda.

3. **Krefstu þess að sjá Kaplan–Meier ferlana.** Eitt HR þjappar heilli sögu í eina tölu og felur hvort áhrifin eru snemma, seint, vaxandi, minnkandi eða snúast við. Biddu um lifunarferlana og horfðu á lögun þeirra: aðskiljast þeir hreint, skerast eða renna saman? Ferlar sem skerast eru sýnilegt merki um að hlutfallslega hættuforsendan hafi brugðist og einstaka HR villi.

4. **Ekki framreikna stutta tilraun yfir ævi.** Hættuhlutfall mælt yfir þrjú ár gefur ekki leyfi til fullyrðingar um þrjátíu. Áhrif geta dvínað, snúist við eða safnast upp, og hlutfallslega hættuforsendan stenst nánast aldrei yfir æviskeið. Gættu sérstaklega að hagfræðilíkönum og fjölmiðlalínum sem framreikna skammtíma-HR áfram í dramatískan ávinning í lífsárum; spyrðu hvaða forsenda vinnur það verk, eins og tekið er á í Viðfangsefni 6.1 — Heilsuhagfræði.

5. **Aðgreindu tölfræðilega frá klínískri marktækni.** Öryggisbil sem útilokar 1 segir þér að áhrif eru líklega raunveruleg; það segir ekkert um hvort áhrifin eru nógu stór til að skipta máli. Í stórum tilraunum verða léttvægir munir „marktækir“. Dæmdu *stærðina* — algilda ávinninginn — gegn byrði og kostnaði inngripsins, og láttu klínískt starfsfólk og sjúklinga skilgreina hvað telst þess virði.

6. **Meðhöndlaðu athugunar-HR með aukinni tortryggni.** Utan slembiraðaðrar tilraunar getur HR endurspeglað truflun — sjúkara eða heilbrigðara fólk sem velur sig í meðferð — frekar en sönn áhrif. Spyrðu hvað var aðlagað fyrir og hvort ómæld truflunaráhrif eru trúverðug. Raunheimssönnunargögn eru verðmæt (sjá Viðfangsefni 8.6 — Rannsóknir og raunheimsmat) en hættuhlutföll þeirra þarfnast meiri rýni, ekki minni.

7. **Athugaðu hvort HR er endurnotað úr samhengi.** HR úr einu þýði, skammti eða eftirfylgni er reglulega vitnað í eins og það sé algilt. Þegar tölu er vitnað í, raktu hana til upprunarannsóknar og staðfestu að þýði og endapunktur passi við ákvörðun þína. Óhrynjanleiki og ólíkar grunnlínur þýða að tala sem var sönn þar gæti hljóðlega verið röng hér.

8. **Skýrðu frá heiðarlega, og leiddu með því sem fólk getur brugðist við.** Þegar eigin skipulagsheild birtir niðurstöður, paraðu hvert HR við algildar tölur og látlaust málframsetningu, segðu eftirfylgni og þýði og forðastu að gefa í skyn ævilangan ávinning úr skammtímagögnum. Þetta tengist beint hvernig þú velur mælikvarða í Viðfangsefni 10.1 — Lykilárangursvísar (KPI): mælikvarðinn sem þú setur í fyrirsögn mótar hvað fólk trúir.

## Spurningar til að ræða með teyminu

1. **Þegar hættuhlutfall lendir á stjórn okkar, vitum við hvernig á að biðja um eftirfylgnina, þýðið og algilda ávinninginn – eða bregðumst við hlutfallslegu tölunni einni?**
   Þessi spurning prófar hvort forysta ykkar getur yfirheyrt algengast misskildu tölfræðina sem hún mun mæta. Hún skiptir máli því HR er meðaltal yfir tiltekinn tilraunaglugga og tiltekinn skráðan hóp, og sama talan getur táknað umbreytandi ávinning eða hverfandi eftir grunnáhættunni og eftirfylgninni sem glæran sleppti. Spennan er að hlutfallslega talan er tilfinningalega sannfærandi og auðvelt að endurtaka, en algilda talan — fjöldi sem þarf að meðhöndla, afstýrðir atburðir á hundrað manns — er daufari og erfiðara að fá, svo henni er reglulega sleppt. Vinnið gegnum raunverulegt nýlegt dæmi: takið HR sem hafði áhrif á ákvörðun og endurgerið hvaða eftirfylgni það náði yfir, hverjir voru útilokaðir og hvaða algilda ávinning það fól í sér fyrir þýði ykkar. Spyrjið hvort nokkur bað um þær staðreyndir þá, og hvort svarið hefði breytt ákvörðuninni. Góð umræða endar á föstum væntingum um að ekkert HR sé brugðist við án eftirfylgni þess, þýðis og algilds félaga hjá sér.

2. **Hvar gætum við verið að framreikna skammtíma hættuhlutfall í langtíma- eða ævilanga fullyrðingu – í viðskiptarökum, ávinningslíkani eða opinberum skilaboðum?**
   Viðfangsefnið varar við að HR mælt yfir nokkur ár gefur ekki leyfi til fullyrðinga um áratugi, því áhrif dvína, snúast við eða safnast upp og hlutfallslega hættuforsendan stenst sjaldan yfir æviskeið. Þetta skiptir máli því heilsuhagfræðilíkön og samskiptateymi hafa bæði sterka hvata til að framreikna skammtíma hlutfallslegar minnkanir fram í fyrirsagnaávinning í lífsárum eða kostnaðarsparnaði, og þær framreikningar geta hljóðlega orðið réttlætingin fyrir stórum fjárfestingum. Málamiðlunin er raunveruleg: þú verður að áætla og líkana handan tilraunatímans, en sérhvert ár sem þú framreiknar framhjá sönnunargögnunum er forsenda, ekki niðurstaða. Dragið fram lifandi viðskiptarök eða ávinningsraungerðarlíkan og spyrjið hvaða tímahorf HR-leiddir ávinningar þess gera ráð fyrir, og hvað myndi gerast við málið ef áhrifin flöttust eftir tilraunatímabilið. Íhugið líka hvort sjúklingamiðuð skilaboð gefa í skyn ævi viðbótarára úr skammtímagögnum. Heiðarlegt svar nefnir hvar framreikningur vinnur þungt verk og skuldbindur sig til að segja forsenduna opinskátt frekar en að grafa hana í töflureikni.

3. **Aðgreinum við stöðugt „er þetta raunverulegt?“ frá „er þetta nógu stórt til að skipta máli?“ – eða ræður tölfræðileg marktækni ein ákvörðunum okkar?**
   Þessi spurning mætir ruglingnum milli tölfræðilegrar og klínískrar marktækni, þar sem öryggisbil sem útilokar 1 er meðhöndlað sem grænt ljós án tillits til stærðar áhrifanna. Hún skiptir máli því stórar tilraunir og stór raunheimsgagnasöfn gera léttvæga mun tölfræðilega marktæka, og stafræn heilbrigðisinngrip getur sýnt „marktækt“ hættuhlutfall meðan það skilar ávinningi of litlum til að réttlæta kostnað sinn, vinnuflæðisröskun eða fórnarkostnað gegn annarri notkun sama fjár. Dýpri spennan er að stærð er klínískur og gildisdómur — hvað telst þess virði veltur á ástandinu, byrði meðferðar og vali sjúklings — svo hana má ekki fela p-gildi eða sjálfvirknivæða. Takið ákvörðun sem teymi ykkar tók að hluta á styrk marktækrar niðurstöðu og spyrjið hver algilda áhrifastærðin var í raun, og hver ákvað að hún væri nógu stór til að bregðast við. Kannið hvort klínískt starfsfólk og, helst, sjúklingar voru fengnir að því að dæma hvort ávinningurinn væri þess virði að hafa. Sterkt svar sýnir að teymið biður reglulega um stærð, ekki bara marktækni, og meðhöndlar þetta tvennt sem aðskilin hlið sem bæði verður að fara í gegnum.

4. **Þegar hættuhlutfall kemur úr venjubundnum gögnum eða raunheimsgagnasafni söluaðila frekar en slembiraðaðri tilraun, spyrjum við hvað var aðlagað fyrir og hvort ómæld truflun gæti skýrt áhrifin?**
   Í vaxandi mæli eru hættuhlutföllin sem ná ákvörðun ekki úr hreinum tilraunum heldur úr athugunaruppsprettum — fyrir/eftir greiningu birgis, skrá eða eigin venjubundnar skrár — þar sem fólkið sem fékk inngrip er kerfisbundið ólíkt þeim sem fengu það ekki. Þetta skiptir máli því truflun vegna ábendingar er normið frekar en undantekningin: heilbrigðari eða sjúkari sjúklingar velja sig í meðferð, og nema það sé vandlega aðlagað mælir HR sem af hlýst hver var meðhöndlaður jafn mikið og hvað meðferðin gerði. Spennan er að raunheimssönnunargögn eru ósvikið verðmæt og oft einu sönnunargögnin í boði fyrir stafræna þjónustu innleidda í stórum stíl, en þægindi þeirra freista teyma til að lesa þau sem orsakabundin þegar þau eru aðeins tengslabundin. Yfirheyrið raunverulegt athugunar-HR sem teymi ykkar hefur reitt sig á: spyrjið hvaða breytur voru aðlagaðar fyrir, hvaða trúverðug truflunaráhrif voru skilin eftir ómæld og hvort stefna líklegu skekkjunnar smjaðrar eða rýrir áhrifin. Íhugið hvort óhrynjanleiki — hvernig aðlögun fyrir áhættuþátt getur breytt hlutfalli jafnvel án truflunar — hefur verið tekin með í hvernig talan er vitnuð. Heiðarlegt svar meðhöndlar athugunarhættuhlutföll sem tilgátur sem þarfnast meiri rýni, ekki minni, og getur sagt hreint út hvað þyrfti að vera satt til að áhrifin séu raunveruleg.

5. **Skoðum við reglulega Kaplan–Meier ferlana að baki hættuhlutfalli, og myndum við þekkja þegar hlutfallslega hættuforsendan hefur brugðist?**
   Eitt HR meðaltalar hljóðlega alla lögun áhrifa í eina tölu og leynir hvort ávinningurinn er snemma, seint, vaxandi, minnkandi eða snúast við yfir eftirfylgnina. Þetta skiptir máli því Cox-líkanið sem framleiðir flest hættuhlutföll gerir ráð fyrir að hlutfallið sé fast yfir tíma, og sú forsenda er oft röng — skurðaðgerð eða aðgerð getur hækkað áhættu snemma og lækkað síðar, og ferlar sem skerast eða renna saman geta gefið sama hreina höfuð-HR og ferlar sem aðskiljast hreint. Málamiðlunin er að lesa lifunarferla krefst meiri fyrirhafnar og sérþekkingar en að endurtaka eina tölu, og ferlarnir eru oft fjarverandi úr samantektarglærunni einmitt því þeir flækja söguna. Takið hættuhlutfall sem teymi ykkar brást við og spyrjið hvort nokkur sá Kaplan–Meier ritið, hvað lögun ferlanna fól í sér um hvenær ávinningurinn féll til og hvort hlutfallslega hættuforsendan var nokkru sinni prófuð. Ræðið hver í teyminu hefur tölfræðilæsið til að koma auga á skerandi eða samrennandi línur og segja hvað þær merkja fyrir þýði ykkar. Gott svar gerir að sjá ferlana að fastri væntingu, ekki sérfræðigreiða, og meðhöndlar vantandi feril sem ástæðu til að spyrja frekar en smáatriði til að sleppa.

6. **Höfum við athugað hvort eitt hættuhlutfall felur ójafna dreifingu ávinnings yfir aldur, fylgisjúkdóma og skerðingu í fólkinu sem við þjónum í raun?**
   Eitt höfuð-HR setur áhrif fram eins og þau lendi jafnt, en ávinningur meðaltalaður yfir skráðan hóp tilraunar getur fallið mjög ólíkt yfir eldra, sjúkara og skertara fólkið sem myndar mikið af raunverulegu heilbrigðis- og velferðarþýði. Þetta skiptir máli því að bregðast við heildartölunni getur víkkað ójöfnuð meðan það virðist bæta niðurstöður í heild: inngrip sem hjálpar hraustari undirhópi og gerir lítið fyrir veikburða birtir samt aðlaðandi meðaltals-HR. Spennan er að sundurliðun krefst gagna, tölfræðiafls og vilja til að sjá óþægilegan breytileika, á meðan einstaka talan er einfaldari að skýra frá og auðveldara að berjast fyrir. Skoðið ákvörðun knúna af einu hættuhlutfalli og spyrjið hvort áhrifin voru nokkru sinni sundurliðuð eftir aldursbandi, fylgisjúkdómum eða skerðingu, og hvort tilraunin skráði yfirleitt nóg af þýði ykkar til að styðja slíka sundurliðun. Íhugið hvernig þið munuð vakta fyrir ójafnan ávinning þegar þjónusta er lifandi, tengt raunheimsmati ykkar og jafnræðisskyldum. Heiðarlegt svar viðurkennir að jafnt-útlítandi HR getur falið ójafnan veruleika, og skuldbindur sig til að skoða sundurliðaða, algilda myndina áður en skalað er.

## Í reynd: dæmi úr heilbrigðis- og velferðarþjónustu

Samþætt umönnunarkerfi (ICS) er boðin fjarvöktunarþjónusta fyrir fólk með hjartabilun. Miðlæga fullyrðing söluaðilans er hættuhlutfall 0,72 fyrir samsetta niðurstöðu dauða eða óáætlaðrar innlagnar, lýst sem „28% minnkun“ og parað við framreikning verulegra unninna lífsára yfir þýðið.

Stafrænu og klínísku leiðtogarnir meðhöndla töluna sem upphafsspurningu, ekki niðurstöðu. Þeir biðja um upprunarannsóknina og finna eina slembiraðaða tilraun með miðgildi eftirfylgni átján mánuði, sem skráði sjúklinga undir 75 ára með nýlega innlögn og enga marktæka vitræna skerðingu — hraustari, yngri hóp en raunverulegt hjartabilunarþýði ICS, sem hallast eldra og með fleiri fylgisjúkdóma. Þeir biðja um [Kaplan–Meier mats](https://en.wikipedia.org/wiki/Kaplan%E2%80%93Meier_estimator) ferlana og sjá línurnar tvær aðskiljast aðallega fyrstu sex mánuðina, síðan renna nokkurn veginn samsíða — vísbending um að ávinningurinn sé þéttur snemma og að fasta-HR forsendan sé völt yfir lengra tímahorf.

Síðan biðja þeir um algildi. Þýtt yfir í tilraunaþýðið samsvarar HR hóflegri [algildri áhættuminnkun](https://en.wikipedia.org/wiki/Risk_difference) og [fjölda sem þarf að meðhöndla](https://en.wikipedia.org/wiki/Number_needed_to_treat) um 20 yfir átján mánuði til að koma í veg fyrir einn samsettan atburð — marktækt, en langtum minna dramatískt en „28% minnkun“ gaf til kynna, og trúlega enn minna í eldra þýði þeirra. Heilsuhagfræðiteymið er beðið að endurbyggja líkan sitt án þess að framreikna átján mánaða HR yfir ævi, og að prófa hvað gerist ef snemmbúni ávinningurinn varir ekki. Klínísku öryggis- og upplýsingastjórnarháttaleiðtogarnir meta þjónustuna á eigin verðleikum (Viðfangsefni 1.6 — Klínískt öryggi og áhættustýring). ICS heldur áfram — en sem vaktaða, þrepaskipta útfærslu með eigin raunheimsmati, og leiðbeinir samskiptateymi sínu að leiða með algilda ávinningnum og heiðarlegu takmörkunum, ekki hlutfallslegu fyrirsögninni. Þegar staðarblað spyr síðar um „28% töluna“ getur ICS útskýrt nákvæmlega hvað hún þýðir og þýðir ekki.

## Geirasjónarhorn

Allir sem lesa HR skulda sömu skyldu túlkunar, en þrýstingurinn og öryggisvarnirnar eru mismunandi eftir skipulagsheild.

### Sprotafyrirtæki

Hvati sprotafyrirtækis er að setja fram smjaðrandi sönnustu töluna, og hlutfallslegt hættuhlutfall er oft smjaðrandi sannasta talan í boði — svo „HR 0,7“ birtist á sölukynningunni án eftirfylgni, þýðis eða algilds ávinnings sem myndi rétta hana af. Heiðarlega og að lokum trúverðugri hreyfingin er að leiða með algildu áhrifunum og fjölda sem þarf að meðhöndla, segja eftirfylgni og útilokanir tilraunarinnar skýrt og standast að framreikna skammtímaniðurstöður yfir ævi í viðskiptarökunum. Áreiðanleikakönnunar-NHS-matsaðilar og alvarlegir fjárfestar vita í vaxandi mæli að spyrja þessara spurninga, svo teymi sem býður fram samhengið lítur sterkara út, ekki veikara. Aginn kostar næstum ekkert og verndar stofnendur gegn síðari, skaðlegri leiðréttingu.

### Lítil fyrirtæki

Rótgróinn lítill veitandi — heimilislæknastofa, samfélagsapótek, hjúkrunarheimili eða stakstaða stofa sem vegur vöktunartæki eða fullyrðingu birgis — hefur raunverulega sjúklinga í húfi en engan innanhústölfræðing og lítinn tíma til að lesa tilraun. Hagnýta áhættan er að hlutfallslegt hættuhlutfall söluaðilans er tekið á nafnvirði því enginn er til að endurgera eftirfylgnina, þýðið og algilda ávinninginn, og engin greiningarteymi til að prófa það gegn lista stofunnar. Hlutfallslegt svar er ekki að ná tökum á lifunargreiningu heldur að spyrja þriggja einfaldra spurninga hvers birgis — yfir hvaða eftirfylgni, í hvaða sjúklingum og hversu marga myndum við meðhöndla til að koma í veg fyrir einn atburð — og að styðjast við sameiginleg úrræði eins og leiðbeiningar NICE, lyfjafræðing ICS eða jafningjanet frekar en að dæma töluna eina. Lítill veitandi sem krefst algilda ávinningsins og útilokana tilraunarinnar fyrir undirritun verndar sjúklinga sína og fjárlög án þess að þurfa tölfræðiafl stórs sjúkrahúss.

### Stórfyrirtæki

NHS-sjúkrahússamsteypa eða ICS hefur greiningargetuna og sjúklingamagnið til að yfirheyra HR almennilega — og ábyrgðina sem krefst þess, því að innleiða í stórum stíl á misskilinni tölfræði er klínísk öryggis- og opinbert fjáráhætta í senn. Einkennandi bilunin er stofnanalegur áhugi: sannfærandi hlutfallsleg tala studd af virtum lækni, tekin upp áður en nokkur endurgerir algilda ávinninginn fyrir raunverulegt, oft eldra og sjúkara, þýði samsteypunnar. Mótvægið er föst venja — sérhvert HR í stjórnarskjali berst með eftirfylgni sinni, þýði, algildri áhættuminnkun og Kaplan–Meier ferlum, og sérhver framreikningur nefnir forsendu sína. Stórfyrirtæki mynda líka eigin athugunar-HR úr venjubundnum gögnum, þar sem truflun er sífelld hætta og aðlögun verður að vera skýr.

### Hið opinbera

Landsstofnun — NICE, NHS England, UK Health Security Agency, DHSC — ákveður oft hvernig sönnunargögn eru römmuð fyrir allt kerfið, svo meðhöndlun hennar á hættuhlutföllum mótar opinberan skilning á þýðiskvarða. Ákvarðanir hér draga að sér eftirlits-, þing- og fjölmiðlarýni, og hlutfallsleg tala vitnuð án algilds félaga síns getur villt milljónir og rýrt traust þegar hún er síðar leiðrétt. Skyldan er að birta algildi samhliða hlutfallslegum, segja þýði og eftirfylgni og vera hreinskilin um hvar hlutfallslega hættuforsendan og stutt tilraunatímahorf takmarka hvað hægt er að fullyrða. Á þessum kvarða er heiðarleg römmun ekki kurteisi heldur tæki jafnræðis: ávinningur sem lítur jafn út í einu HR getur fallið ójafnt yfir aldur og skerðingu, og aðeins sundurliðaða, algilda myndin leiðir það í ljós.

## Algeng mistök

- **Hlutfallsleg-eingöngu skýrslugjöf.** Að vitna í „28% minnkun“ án algildrar áhættuminnkunar eða fjölda sem þarf að meðhöndla. Mótvægi: paraðu sérhvern hlutfallslegan mælikvarða við algilda félagann og leiddu opinber skilaboð með því algilda.
- **Ævilöng framreikningur.** Að framreikna HR úr stuttri tilraun yfir áratugi í hagfræðilíkani eða fjölmiðlalínu. Mótvægi: líkanaðu aðeins að sönnunartímahorfinu og nefndu hverja forsendu handan þess.
- **Að hunsa þýðið.** Að beita HR tilraunar á eldri, sjúkari eða skertari hópa sem tilraunin útilokaði. Mótvægi: athugaðu inntöku- og útilokunarskilyrði gegn raunverulegu þýði þínu.
- **Að gera ráð fyrir stöðugleika.** Að meðhöndla eitt HR sem gilt á hverjum aldri og tímapunkti. Mótvægi: skoðaðu Kaplan–Meier ferlana fyrir skerandi eða samrennandi línur.
- **Marktækni mistekin fyrir mikilvægi.** Að bregðast við tölfræðilega marktæku HR sem áhrif eru klínískt léttvæg. Mótvægi: dæmdu stærð sérstaklega, með klínísku og sjúklingaframlagi.
- **Að treysta athugunar-HR gagnrýnislaust.** Að lesa raunheims-HR sem orsakabundið án þess að spyrja um truflun. Mótvægi: spyrðu hvað var aðlagað fyrir og hvort ómæld truflunaráhrif eru trúverðug.
- **Tölu-þvottur.** Að endurnota HR úr upprunasamhengi sínu eins og það sé algilt. Mótvægi: raktu sérhverja vitnaða tölu til upprunarannsóknar og endapunkts.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Hlutfallslegt á móti algildu | Aðeins hlutfallslegar tölur | Algildi stundum beðið um | Algild áhættuminnkun og NNT krafist með hverju HR | Fylgni við algildisskýrslureglu endurskoðuð og rakin sem mælikvarði | Algildi leiða alla skýrslugjöf og opinber skilaboð |
| Þýðispassi | Tilraunaþýði hunsað | Tekið eftir óformlega | Inntöku-/útilokunarskilyrði athuguð gegn staðbundnu þýði | Hlutfall ákvarðana með skjalfestan staðbundinn þýðispassa vaktað gegn markmiði | Áhrif sundurliðuð eftir aldri, fylgisjúkdómum, skerðingu |
| Tími og forsendur | Skammtíma-HR framreiknað frjálslega | Einhver varúð um tímahorf | Líkanagerð takmörkuð við sönnunartímahorf; forsendur nefndar | Framreikningsforsendur skráðar, stýrt og næmnisprófaðar gegn samþykktum þröskuldum | Hlutfallslega hættuforsendan prófuð; ferlar skoðaðir |
| Marktækni | P-gildi meðhöndlað sem ákvörðun | Áhrifastærð stundum tekin eftir | Tölfræðileg og klínísk marktækni dæmd sérstaklega | Lágmarks klínískt mikilvægur munur skilgreindur og ákvarðanir mældar gegn honum | Stærð dæmd með klínísku og sjúklingaframlagi |
| Uppruni | Tölur endurnotaðar gagnrýnislaust | Uppruni stundum athugaður | Sérhvert HR rakið til uppruna, endapunkts, eftirfylgni | Uppruni haldinn í skrá og tilvitnunarnákvæmni tryggð með endurskoðun | Truflun og óhrynjanleiki reglulega íhuguð |

## Gátlisti

- [ ] Sérhvert hættuhlutfall berst með lengd eftirfylgni og inntöku- og útilokunarskilyrðum tilraunarinnar.
- [ ] Hver hlutfallslegur mælikvarði (HR, hlutfallsleg áhætta) er paraður við algilda áhættuminnkun og fjölda sem þarf að meðhöndla.
- [ ] Kaplan–Meier ferlar eru yfirfarnir fyrir lögun áhrifanna og hvaða skurð eða samruna.
- [ ] Tilraunaþýðið er athugað gegn raunverulegu, staðbundnu þýði þínu áður en brugðist er við.
- [ ] Ekkert skammtíma-HR er framreiknað yfir ævi án skýrt tilgreindrar forsendu.
- [ ] Tölfræðileg og klínísk marktækni eru dæmd sem aðskilin hlið.
- [ ] Athugunar-HR eru rýnd fyrir truflun og hvað var aðlagað fyrir.
- [ ] Sérhvert vitnað HR er rakið til upprunarannsóknar sinnar, endapunkts og eftirfylgni.
- [ ] Opinber og stjórnarsamskipti leiða með algildum ávinningi og heiðarlegum takmörkunum.

## Helstu heimildir

- Wikipedia — *Hazard ratio*, *Proportional hazards model*, *Survival analysis* (grunnskilgreiningar).
- BMJ / *The BMJ Statistics Notes* röðin — Douglas Altman og J. Martin Bland — látlausar skýringar á hættuhlutföllum, lifunarferlum og algildri á móti hlutfallslegri áhættu.
- David Spiegelhalter — *The Art of Statistics: Learning from Data* (Pelican, 2019) — um að miðla hlutfallslegri og algildri áhættu heiðarlega.
- Gerd Gigerenzer o.fl. — *Helping Doctors and Patients Make Sense of Health Statistics* (Psychological Science in the Public Interest, 2007) — um hvers vegna hlutfallslegar tölur villa.
- Cochrane — *Handbook for Systematic Reviews of Interventions* — um túlkun áhrifamælikvarða.
- dynomight — ritgerð um hættuhlutföll og lífslíkur (dynomight.net) — rússnesku-rúllettu innsæið fyrir hvers vegna hlutfallslegar minnkanir jafngilda ekki lífsárum, og hvers vegna inngrip hafa ólík hættuhlutföll á ólíkum aldri.
- Equator Network — *CONSORT* skýrslugjafarleiðbeiningar — um hvernig tilraunaáhrif, þar á meðal tími-til-atburðar niðurstöður, ættu að vera tilkynnt.

## Tilvísanir

1. Hazard ratio — Wikipedia — https://en.wikipedia.org/wiki/Hazard_ratio
2. Proportional hazards model — Wikipedia — https://en.wikipedia.org/wiki/Proportional_hazards_model
3. Survival analysis — Wikipedia — https://en.wikipedia.org/wiki/Survival_analysis
4. Relative risk — Wikipedia — https://en.wikipedia.org/wiki/Relative_risk
5. Odds ratio — Wikipedia — https://en.wikipedia.org/wiki/Odds_ratio
6. Risk difference (absolute risk reduction) — Wikipedia — https://en.wikipedia.org/wiki/Risk_difference
7. Number needed to treat — Wikipedia — https://en.wikipedia.org/wiki/Number_needed_to_treat
8. Censoring (statistics) — Wikipedia — https://en.wikipedia.org/wiki/Censoring_(statistics)
9. Kaplan–Meier estimator — Wikipedia — https://en.wikipedia.org/wiki/Kaplan%E2%80%93Meier_estimator
10. Confounding — Wikipedia — https://en.wikipedia.org/wiki/Confounding
11. Life expectancy — Wikipedia — https://en.wikipedia.org/wiki/Life_expectancy
12. Statistical significance — Wikipedia — https://en.wikipedia.org/wiki/Statistical_significance
13. *The Art of Statistics: Learning from Data* — David Spiegelhalter, Pelican — https://www.penguin.co.uk/books/294857/the-art-of-statistics-by-spiegelhalter-david/9780241398630
14. *Helping Doctors and Patients Make Sense of Health Statistics* — Gerd Gigerenzer et al., Psychological Science in the Public Interest — https://doi.org/10.1111/j.1539-6053.2008.00033.x
15. *Statistics Notes* (survival and risk) — Douglas Altman & J. Martin Bland, The BMJ — https://www.bmj.com/specialties/statistics-notes
16. *Cochrane Handbook for Systematic Reviews of Interventions* — Cochrane — https://training.cochrane.org/handbook
17. Hazard ratios and life expectancy — dynomight — https://dynomight.net/
18. CONSORT reporting guideline — Equator Network — https://www.equator-network.org/reporting-guidelines/consort/
