# Viðfangsefni 3.7 — Prófanir og gæðatrygging

**Í einni setningu:** Í heilbrigðis- og velferðarþjónustu eru [prófanir](https://en.wikipedia.org/wiki/Software_testing) og [gæðatrygging](https://en.wikipedia.org/wiki/Quality_assurance) ekki fasi sem þú gerir fyrir útgáfu heldur samfelldur agi sem veitir mikið af sönnunargögnunum um að þjónusta sé klínískt örugg, aðgengileg, örugg gegn árásum og hæf til að snerta umönnun sjúklings.

## Hvers vegna þetta skiptir máli í heilbrigðis- og velferðarþjónustu

Sérhver stafræn þjónusta ber galla; einu spurningarnar eru hversu margir, hversu alvarlegir og hvort þú finnur þá áður en eða eftir að sjúklingur verður fyrir áhrifum. Í neytendaforriti sóar óuppgötvuð villa síðdegi notanda. Í klínísku kerfi getur hún sýnt ofnæmi rangs sjúklings, rangt rúnnað barnalyfjaskammt eða þegjandi sleppt tilvísun í biðröð sem enginn vaktar. Prófanir eru skipulögð viðleitni til að finna þá galla snemma, og gæðatrygging er víðara kerfi stýringa sem heldur gæðum frá því að velta á heppni eða hetjudáðum.

Þess vegna eru prófanir í heilbrigðisupplýsingatækni óaðskiljanlegar frá klínísku öryggi. Hætturnar skráðar í DCB0129/0160 hættuskrá (sjá Viðfangsefni 1.6 — Klínískt öryggi og áhættustýring) eru aðeins ósvikið dregnar úr þegar próf sannar að úrræðið virki og haldi áfram að virka eftir hverja síðari breytingu. Öryggismál sem fullyrðir „kerfið kemur í veg fyrir tvítekna lyfseðla“ án endurtakanlegs prófs að baki er fullyrðing, ekki trygging. Prófanir eru sönnunargagnagrunnurinn undir klínísku öryggisröksemdinni.

Hagsmunirnir snúast líka um jafnræði og almannatraust. Þjónusta sem aldrei hefur verið prófuð gegn aðgengisstöðlum mun útiloka fatlaða notendur sjálfgefið (sjá Viðfangsefni 1.9 — Stafræn þátttaka og aðgengi). Þjónusta prófuð aðeins með afritum af lifandi sjúklingaskrám stofnar til gagnabrots sem tærir traustið sem NHS reiðir sig á. Og féð er ekki léttvægt: að endurvinna galla fundinn í lifandi rekstri kostar margfalt meira en að grípa hann í hönnun, og alvarlegt klínískt atvik kostar langtum meira en hvort tveggja. Ónóg prófun er ekki sparnaður; það er frestaður og uppblásinn reikningur, stundum greiddur í skaða.

## Lykilhugtök

**Prófanir á móti gæðatryggingu.** *Prófanir* eru athöfnin að beita kerfi til að finna galla og staðfesta hegðun. *Gæðatrygging* er víðara safn ferla — staðla, yfirferða, skilgreininga á lokið, hliða — sem byggja gæði inn frekar en að skoða þau inn í lokin. Prófanir segja þér hvort þessi smíði virki; gæðatrygging er ástæðan fyrir því að smíðar þínar virka yfirleitt. Hvort tveggja skiptir máli, og leiðtogar fjármagna oft hið fyrra meðan þeir vanrækja hið síðara.

**Prófapýramídinn og vinstri-færsla.** Heilbrigð prófastefna hefur margar hraðar, ódýrar [einingarprófanir](https://en.wikipedia.org/wiki/Unit_testing) (sem athuga einstök föll), færri [samþættingarprófanir](https://en.wikipedia.org/wiki/Integration_testing) (sem athuga að íhlutir vinni saman) og fáeinar hægar, dýrar enda-á-enda prófanir (sem athuga heilar notendaferðir). Þessi „prófapýramídi“ heldur endurgjöf hraðri og viðhaldi viðráðanlegu. Hann pararst við [vinstri-færslu prófana](https://en.wikipedia.org/wiki/Shift-left_testing) — að færa prófanir fyrr í lífsferilinn, svo gallar séu hannaðir út ódýrt frekar en fundnir í tryllingslegum hamagangi fyrir útgáfu. Öfugur pýramídi (aðallega handvirkar enda-á-enda prófanir) er hægur, brothættur og viðvörunarmerki.

**Virknilegar og óvirknilegar prófanir.** *Virknilegar prófanir* spyrja „gerir kerfið það sem það á að gera?“ — réttar útreikningar, rétt vinnuflæði, rétt gögn. [Óvirknilegar prófanir](https://en.wikipedia.org/wiki/Non-functional_testing) spyrja „hversu vel hegðar það sér?“ — frammistaða og álag (helst það svarfært þegar öll samsteypan skráir sig inn klukkan 08:00?), öryggi (er hægt að brjótast inn?), áreiðanleiki og aðgengi. Í heilbrigðis- og velferðarþjónustu eru óvirknilegar bilanir oft hættulegastar: kerfi sem er virknilega fullkomið en tímamarkast út í endurlífgunarútkalli hefur brugðist klínískt.

**Aðhvarfsprófanir.** [Aðhvarfsprófanir](https://en.wikipedia.org/wiki/Regression_testing) keyra fyrirliggjandi próf aftur eftir breytingu til að staðfesta að lagfæring eða viðbót eins hlutar hafi ekki brotið annan. Í lifandi klínískum kerfum er þetta mikilvægasti öryggisvaninn: flest klínísk hugbúnaðaratvik koma ekki af nýjum eiginleikum heldur breytingum sem hljóðlega brutu virka hegðun. Traust aðhvarfspróf er það sem leyfir þér að breyta lifandi kerfi án þess að halda niðri í þér andanum.

**Prófasjálfvirkni og samfelld samþætting.** [Prófasjálfvirkni](https://en.wikipedia.org/wiki/Test_automation) notar hugbúnað til að keyra próf endurtakanlega, svo stórt safn keyrist á mínútum við hverja breytingu. Samanlagt við [samfellda samþættingu](https://en.wikipedia.org/wiki/Continuous_integration) — að sameina og prófa breytingar sjálfvirkt oft — breytir þetta prófunum úr stöku atburði í stöðugt öryggisnet (sjá Viðfangsefni 3.5 — Afhendingarlífsferlar). Sjálfvirkni kemur ekki í stað mannlegrar dómgreindar; hún frelsar fólk til að gera kannandi og klínískar prófanir sem vélar geta ekki.

**Samþykktarprófanir.** [Samþykktarprófanir](https://en.wikipedia.org/wiki/Acceptance_testing), og sérstaklega *notendasamþykktarprófanir (UAT)*, eru þar sem raunverulegir klínískir starfsmenn og notendur staðfesta að kerfið virki í raunverulegu samhengi þeirra áður en það fer í loftið. Rekstrarsamþykktarprófanir (OAT) staðfesta að hægt sé að reka þjónustuna, afrita og endurheimta. UAT með ósviknum endanotendum grípur vinnuflæðisósamræmin sem engin þróunarpróf munu.

**Prófaumhverfi og örugg prófagögn.** [Innleiðingarumhverfi](https://en.wikipedia.org/wiki/Deployment_environment) er kerfi þar sem hugbúnaður keyrir — venjulega þróunar-, prófunar-, sviðsetningar- og framleiðslustig. Prófanir þarfnast umhverfa sem líkjast framleiðslu en mega aldrei að óathuguðu máli nota lifandi sjúklingagögn. Örugg starfsvenja notar [gervigögn](https://en.wikipedia.org/wiki/Synthetic_data) (tilbúin) eða almennilega nafnlaus gögn, svo prófun á tilvísunareyðublaði geti ekki lekið greiningu raunverulegs borgara.

**Gæðahlið, skilgreining á lokið og gallastjórnun.** *Skilgreining á lokið* segir hvað „klárað“ merkir (prófað, aðgengilegt, skjalfest, öryggisyfirfarið) svo gæði séu ekki samningsatriði eftir eiginleikum. *Gæðahlið* eru eftirlitsstöðvar sem breyting verður að standast til að halda áfram. *Gallaflokkun* er agaða ferlið að meta fundna galla fyrir alvarleika og klínísk áhrif, og ákveða hvað á að laga, hvenær og hvað má senda sem þekkt vandamál.

## Bestu starfsvenjur

1. **Byggðu pýramídann og færðu prófanir til vinstri.** Fjárfestu í breiðum grunni hraðra sjálfvirkra einingar- og samþættingarprófana, keyrðum við hverja breytingu, svo gallar birtist innan mínútna frá ritun frekar en vikum síðar í UAT. Taktu frá hægar enda-á-enda prófanir fyrir fáeinar mikilvægar ferðir — lyfseðilinn, tilvísunina, auðkennissamsvörunina. Þetta gerir prófanir ódýrari og hraðari, sem er það sem raunverulega fær teymi til að gera meira af þeim.

2. **Meðhöndlaðu aðhvarfsprófanir sem klíníska öryggisstýringu.** Áður en nokkur breyting nær lifandi klínísku kerfi verður sjálfvirkt aðhvarfspróf að staðfesta að fyrirliggjandi, öryggisviðeigandi hegðun virki enn. Kortleggðu hæstu hætturnar úr DCB0129/0160 hættuskránni beint á nafngreind aðhvarfspróf, svo breyting sem myndi endurinnleiða þekkta hættu falli á smíðinni sjálfvirkt. Þetta er vélbúnaðurinn sem leyfir þér að endurtaka á lifandi kerfum án þess að safna hljóðlátri klínískri áhættu.

3. **Prófaðu aldrei með lifandi sjúklingagögnum sjálfgefið.** Útvegaðu prófunar- og sviðsetningarumhverfi með gervigögnum eða rækilega nafnlausum gögnum, stýrð af sama upplýsingastjórnarháttaaga og DPIA og framleiðsla (sjá Viðfangsefni 1.7 — Upplýsingastjórnarhættir, gagnavernd og netöryggi). Ef tiltekið próf krefst í raun framleiðslulíkra gagna, meðhöndlaðu það sem stýrða undantekningu með skjalfestum lögmætum grundvelli, lágmörkun og endurskoðun — ekki sem venjubundin þægindi. Prófunargagnagrunnur er enn sjúklingagagnagrunnur.

4. **Prófaðu óvirknilegar kröfur af jafn mikilli alvöru og virknilegar.** Keyrðu frammistöðu- og álagspróf gegn raunhæfri hámarkseftirspurn — vaktaskiptum, mánudagsmorgunsinnskráningum, svæðisbilun sem beinir umferð annað — því klínískt kerfi sem hægir í skrið undir álagi hefur brugðist þegar mest á reynir. Hafðu öryggisprófanir og aðgengisprófanir gegn [Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) (WCAG) sem fastar, ófrávíkjanlegar prófategundir. Óvirknilegir gallar eru auðveldir að fresta og dýrir að uppgötva í framleiðslu.

5. **Sjálfvirknivæddu aðgengisprófanir, staðfestu þær síðan með fólki.** Sjálfvirkar WCAG-athuganir grípa marktækan hluta vandamála (vantar merkimiða, slakt birtuskil, uppbygging) ódýrt við hverja smíði, en þær missa af þeim sem skipta mestu máli fyrir raunverulega notendur hjálpartækni. Paraðu sjálfvirka skönnun við handvirkar prófanir fólks sem notar skjálesara, lyklaborðsleiðsögn eingöngu og stækkun. Aðgengi er lagaskylda opinberra stofnana og klínískt öryggismál þegar útilokaði notandinn er klínískur starfsmaður eða sjúklingur sem stýrir eigin umönnun.

6. **Keyrðu notendasamþykktarprófanir með raunverulegum klínískum starfsmönnum við raunhæfar aðstæður.** Tímasettu UAT með fólkinu sem mun í raun nota kerfið — hjúkrunarfræðingum, heimilislæknum, stjórnendum, lyfjafræðingum — sem beita raunverulegum vinnuflæðum, helst í umhverfi sem speglar deildina eða stofuna, ekki hljóðlátt fundarherbergi. Endurgjöf þeirra grípur hættuleg vinnuflæðisósamræmi (viðvörun sýnd á röngu augnabliki, sjálfgefið gildi sem býður villu) sem einingarprófanir geta ekki. Gerðu ráð fyrir klínískri afleysingu í fjárlögum svo UAT sé gert almennilega, ekki kreist inn á velvild.

7. **Gerðu skilgreiningu á lokið og gæðahlið skýr og framfylgd.** Samþykktu hvað „lokið“ merkir í ykkar samhengi — standast próf, aðgengissamræmi, öryggisskönnun hrein, klínísk öryggisyfirferð lokið, skjölun uppfærð — og framfylgdu því sem hliði, ekki ósk. Skilgreining á lokið sem er skrifuð en venjulega felld úr gildi undir tímapressu er verri en engin, því hún þvær óörugga vinnu sem lokna. Hlið ættu að vera sjálfvirk þar sem mögulegt er svo ekki sé hægt að sleppa þeim hljóðlega.

8. **Flokkaðu og stýrðu göllum með klínískan alvarleika í forgrunni.** Metðu hvern galla ekki aðeins fyrir tæknilegan alvarleika heldur klínísk áhrif og líkindi, með sömu áhættulinsu og hættuskráin. Snyrtigalli getur beðið; galli sem gæti stuðlað að röngum skammti hindrar útgáfu óháð opnunardagsetningu. Haltu sýnilegri gallaskrá, og vertu heiðarlegur um þekkt vandamál send sem samþykktar, dregnar úr áhættur frekar en faldar.

9. **Fléttaðu prófanir inn í afhendingarleiðsluna, ekki eftir hana.** Tengdu sjálfvirk próf, öryggisskönnun og aðgengisathuganir inn í samfelldu samþættingar- og afhendingarleiðsluna svo hver breyting sé prófuð áður en hún getur haldið áfram (sjá Viðfangsefni 3.5 — Afhendingarlífsferlar). Þetta gerir gæði samfelld og ódýr, og það þýðir að hæfileikinn til að innleiða prófaða lagfæringu hratt — í sjálfu sér öryggisstýring — er alltaf tiltækur. Handvirkir prófunarfasar í verkefnislok eru hægir, seinir og það fyrsta sem fórnað er þegar tími þrýtur.

## Spurningar til að ræða með teyminu

1. **Ef við breytum einu í lifandi klínísku kerfi okkar á morgun, hversu viss erum við um að við myndum komast að því – áður en sjúklingur gerir það – ef það bryti eitthvað annað?**
   Þessi spurning kannar þroska aðhvarfsprófana ykkar og heiðarleika öryggisfullyrðinga ykkar. Flest alvarleg klínísk hugbúnaðaratvik eru ekki framandi nýjar bilanir heldur aðhvörf: breyting sem hljóðlega braut hegðun sem allir gerðu ráð fyrir að væri stöðug, uppgötvuð aðeins þegar klínískur starfsmaður eða sjúklingur rakst á hana. Góð umræða rekur nýlega raunverulega breytingu til prófanna sem hefðu gripið aðhvarf, og spyr hvort hæstu hætturnar í DCB0129/0160 hættuskránni séu hver studd sjálfvirku prófi sem fellur þegar hættan kemur aftur. Spennan til að draga fram er milli þrýstingsins að senda lagfæringar hratt og agans að sanna að ekkert annað hafi brotnað — og hvort leiðsla ykkar gerir þá sönnun sjálfvirka eða skilur hana eftir hjá einhverjum sem man að athuga. Íhugið hve lengi prófasafnið ykkar tekur að keyra, hvort það keyrir við hverja breytingu og hvort einhver hefur hljóðlega slökkt á föllnum prófum til að ná frest. Heiðarlegt svar aðgreinir „við höfum aðhvarfssafn tengt klínískum hættum okkar og treystum því“ frá „við prófum breytinguna sem við gerðum og vonum það besta“. Ef svarið er hið síðara berið þið klíníska áhættu sem þið sjáið ekki.

2. **Hvaðan koma prófagögn okkar, og gæti próf nokkru sinni afhjúpað upplýsingar raunverulegs sjúklings?**
   Prófunarumhverfi eru algeng og vanrannsökuð leið að gagnabroti, því teymi undir þrýstingi grípa auðveldustu raunsæju gögnin — afrit af framleiðslu — og sjúklingaskrárnar sem þannig fást sitja síðan í minna vernduðum prófunarkerfum, fartölvum eða birgjaumhverfum. Þessi spurning biður teymið að rekja hvert prófunar- og sviðsetningarumhverfi aftur til gagnaupptaka síns, og horfast heiðarlega í augu við hvort „bara í þetta sinn“ afrit af lifandi gögnum hafi orðið rútína. Málamiðlunin sem þrætt er um er raunsæi á móti öryggi: gervigögn og nafnlaus gögn eru öruggari en geta misst af sóðalegum jaðartilfellum sem raunveruleg gögn innihalda, meðan lifandi gögn eru raunsæ en stjórnarhátta- og brotaskuldbinding, og sönn nafnleynd er erfiðari en hún lítur út því hægt er að endurgreina skrár þegar þær eru sameinaðar. Áþreifanleg sjónarhorn fela í sér hver hefur aðgang að prófunarumhverfum, hvort prófunargagnagrunnar eru dulkóðaðir og endurskoðaðir eins og framleiðsla og hvort prófunarumhverfi birgja ykkar uppfylla sömu kröfu. Sterkt svar lýsir vísvitandi stefnu — gervigögn sjálfgefið, nafnleynd gerð almennilega, lifandi gögn aðeins sem skjalfest, lágmörkuð, tímabundin undantekning — frekar en slysi sem bíður upplýsingastjórnarháttarannsóknar.

3. **Þegar opnunardagsetning og gæðaviðmið rekast á, hvað gefur í raun eftir – og hver ákveður?**
   Sérhver afhending stendur að lokum frammi fyrir augnablikinu þegar prófunum er ekki lokið, galli er óleystur eða aðgengissamræmi ófullkomið, og opnunardagsetning vofir yfir; hvernig skipulagsheild ykkar hegðar sér á því augnabliki afhjúpar hvort gæði séu ósvik stýring eða aðeins metnaður. Þessi spurning biður teymið að rifja upp síðast þegar það gerðist og lýsa heiðarlega hvað var skorið: var það snyrtibakskráin, eða voru það aðhvarfsprófanir, UAT eða aðgengisúttektin? Spennan er raunveruleg og ætti ekki að veifa burt — dagsetningar skipta máli, fjármögnunarlotur eru miskunnarlausar, og endalausar prófanir geta sjálfar verið bilunarháttur — en lausnin verður að vera stýrð af klínískri og jafnræðisáhættu, ekki þeim sem hrópar hæst. Ræðið hver hefur umboð til að halda opnun á gæðagrunni án starfsáhættu, hvort skilgreining ykkar á lokið er nokkru sinni formlega felld úr gildi og af hverjum, og hvort þekktir gallar sendir við opnun eru skráðir sem samþykktar áhættur eða hljóðlega grafnir. Gott svar sýnir skýra, nafngreinda ákvörðunarleið, björt mörk undir hverjum galli hindrar útgáfu óháð dagsetningu (allt sem gæti stuðlað að sjúklingaskaða) og menningu þar sem að segja „ekki enn, það er ekki öruggt“ er umbunað frekar en refsað.

4. **Þekja prófin okkar í raun það sem gæti skaðað sjúkling, eða bara það sem er auðvelt að prófa?**
   Græn smíði er aðeins fullvissandi ef prófin að baki beita raunverulegum klínískum hættum, og það er óþægilega algengt að heilbrigð-útlítandi þekjutala sitji ofan á safni sem athugar léttvæg get- og setföll meðan versnunarstigið, auðkennissamsvörunin og ofnæmissýningin eru óprófuð. Þessi spurning biður teymið að halda prófasafninu upp að DCB0129/0160 hættuskránni og áhættumestu notendaferðunum og spyrja, hætta fyrir hættu, „hvaða nafngreinda próf myndi falla ef þetta færi úrskeiðis?“ Spennan er að þekjumælikvarðar umbuna magn, ekki áhættuviðeigandi, og teymi freistast til að elta prósentu frekar en að horfast í augu við óþægilegu, erfið-að-sjálfvirknivæða tilfellin — mörkagildi, vantandi inntak, óvenjulegar klínískar samsetningar — sem eru einmitt þar sem sjúklingar meiðast. Áþreifanleg sjónarhorn fela í sér að yfirfara hvort mörk og jaðartilfelli eru prófuð, hvort kannandi og klínískar prófanir (dómgreindin sem vélar geta ekki leyst af hólmi) eiga stað samhliða sjálfvirkni og hvort nokkur hefur nokkru sinni rakið raunverulegt atvik til bils sem prófin hefðu átt að grípa. Heiðarlegt svar talar um áhættuvegna þekju og getur nefnt prófin sem verja efstu hætturnar, frekar en að vitna í eina prósentu eins og hún væri trygging.

5. **Þegar við prófum aðgengi, eru raunverulegir fatlaðir notendur og raunverulegir klínískir starfsmenn í herberginu, eða bara sjálfvirkur skanni?**
   Sjálfvirkar WCAG-athuganir eru ódýrar og tilheyra hverri smíði, en þær greina aðeins brot af hindrununum sem í raun útiloka fólk, og þjónusta getur staðist hverja sjálfvirka reglu meðan hún er óbrúkleg með skjálesara eða lyklaborð eitt og sér. Þessi spurning spyr hvort aðgengis- og notendasamþykktarprófanir ykkar nái til raunverulegs fólks sem notar hjálpartækni og raunverulegra klínískra starfsmanna sem vinna gegnum ósvik vinnuflæði, eða hvort „við prófuðum aðgengi“ þýðir hljóðlega „skanninn var grænn.“ Málamiðlunin til að draga fram er kostnaður og skipulag á móti heiðarleika: að ráða notendur hjálpartækni og afleysa klínískan tíma fyrir raunhæft UAT er dýrt og auðvelt að sleppa, en að sleppa því er hvernig lagaskylda er brotin og hvernig hættulegt vinnuflæðisósamræmi — viðvörun á röngu augnabliki, sjálfgefið gildi sem býður villu — nær lifandi deild. Ræðið hverja þið takið með, hversu dæmigerð þau eru, hvort prófanir gerast í umhverfi sem speglar stofuna frekar en hljóðlátt fundarherbergi og hvað þið gerið við það sem þau finna. Sterkt svar lýsir sjálfvirkum athugunum paraðum við handvirkar prófanir fatlaðra notenda og klínískt leitt UAT sem fasta, fjárlagða starfsvenju, ekki einskipta krossmerki fyrir opnun.

6. **Þegar breyting fer yfir mörk milli kerfis okkar og kerfis einhvers annars, hver prófar samskeytin – og myndum við vita ef þau brotnuðu?**
   Nútíma heilbrigðis- og velferðarþjónustur eru samsetningar samþættra kerfa — rafræn sjúkraskrá, landsþjónusta, meinafræðistreymi, eining þriðja aðila birgis — og hættulegustu gallarnir lifa oft ekki innan neins eins íhlutar heldur í samskeytum milli þeirra, þar sem breyting á annarri hlið viðmóts hljóðlega brýtur hina. Þessi spurning biður teymið að kortleggja mikilvægar samþættingar sínar og spyrja, fyrir hverja, hver á enda-á-enda prófið, hvaða gervigögn flæða yfir mörkin og hvernig brotleg breyting í útgáfu birgis yrði greind áður en hún næði sjúklingum. Spennan er að ekkert eitt teymi finnst fullkomlega ábyrgt fyrir sameiginlegu viðmóti, samningar og breytingaráðgjafarnefndir hreyfast á ólíkum hraða og prófanir yfir skipulagsmörk eru hægar, pólitískar og auðvelt að láta tilviljun ráða. Áþreifanleg sjónarhorn fela í sér samnings- og viðmótspróf, sameiginleg prófunarumhverfi, hvernig tilkynningum birgja um breytingar er sinnt og hvort aðhvarfssafn ykkar beitir samþættu ferðinni (tilvísun send, móttekin, kvittuð) en ekki aðeins ykkar helmingi. Heiðarlegt svar nefnir hver er ábyrgur fyrir hverju samskeyti og sýnir vélbúnað — sjálfvirkan þar sem mögulegt — sem grípur aðhvarf yfir mörk, frekar en að gera ráð fyrir að hinn aðilinn hafi það á hreinu.

## Í reynd: dæmi úr heilbrigðis- og velferðarþjónustu

Bráðasjúkrahússamsteypa NHS er að innleiða nýja rafræna mælinga- og viðvörunarstigseiningu (EWS) innan rafrænu sjúkraskrárinnar sinnar, sem kemur í stað pappírsrita þar sem hjúkrunarfræðingar skrá lífsmörk og kerfið reiknar versnunarstig. Klíníska hættan er augljós: rangt stig gæti þýtt að versnandi sjúklingur sé ekki stigmagnaður.

Teymið byggir pýramídann frá byrjun. Einingarprófanir þekja EWS útreikninginn gegn landsstigareglum, þar með talin mörkatilfelli (nákvæmu þröskuldarnir þar sem stig tippar í stigmögnun) og óþægileg inntök (vantandi öndunartíðni, sjúklingur á viðbótarsúrefni). Samþættingarprófanir staðfesta að stigið flæði rétt til stigmögnunarviðvörunarinnar og hjúkrunarverkefnalistans. Lítið safn enda-á-enda prófa beitir allri ferðinni frá færslu við rúm til kveiktrar viðvörunar. Hver hætta í DCB0160 hættuskránni er kortlögð á nafngreind próf, og allt safnið keyrir sjálfvirkt við hverja breytingu í samfelldu samþættingarleiðslunni.

Prófunarumhverfi eru útveguð með gervisjúklingum — raunsæjum lífsmarkamynstrum þar með talin versnunarferlar — svo engin raunveruleg skrá yfirgefi framleiðslu. Frammistöðuprófanir líkja eftir fullri stofugangi við vaktaskipti og staðfesta að viðvaranir kvikni innan sekúndna undir hámarksálagi. Aðgengisprófanir, sjálfvirkar við hverja smíði og staðfestar handvirkt með hjúkrunarfræðingi sem notar skjástækkun, grípa viðvörunarborða með lágu birtuskili.

UAT á tilraunadeild, með raunverulegum hjúkrunarfræðingum sem vinna gegnum líkt atburðarás, afhjúpar vinnuflæðisgalla sem enginn þróunaraðili hafði séð: staðfestingargluggi birtist eftir stiginu, sem freistaði starfsfólks til að afskrifa hann ósjálfrátt. Teymið endurhannar flæðið og bætir við aðhvarfsprófi. Við opnun eru þrír snyrtigallar sendir sem skjalfest, samþykkt vandamál; tveir sem snertu útreikninginn voru lagaðir og hindruðu útgáfu þar til þeir stóðust, og öryggismálið vitnar beint í prófsönnunargögnin. Sex mánuðum inn í lifandi rekstur fellur rútínubreyting á verkefnalistanum aðhvarfspróf sem hefði, óuppgötvað, bælt stigmögnunarviðvörun — gripið í leiðslunni, lagað fyrir innleiðingu, náði aldrei deild.

## Geirasjónarhorn

### Sprotafyrirtæki

Lítið stafrænt heilbrigðisfyrirtæki hefur þann kost að byggja sjálfvirkar prófanir og samfellda samþættingu inn í DNA sitt frá degi eitt, án arfaverkferla handvirkra prófana til að afvinda, og getur náð hraðri, öruggri endurtekningu sem stór samsteypa myndi öfunda. Hættan er að meðhöndla prófanir sem munað sem hægt er að fresta meðan elt er vöru-markaðspassi, og spara á óvirknilegum og klínískum öryggisprófunum sem enginn snemmbúinn viðskiptavinur krefst enn. Stofnandinn verður að muna að DCB0129 skyldur festast við framleiðandann óháð stærð fyrirtækis, svo aðhvarfssönnunargögnin að baki öryggisfullyrðingu eru ekki valkvæð jafnvel fyrir tekjur. Gervigögn eru einnig vinur sprotafyrirtækis: þau komast hjá stjórnarháttabyrðinni af því að meðhöndla raunveruleg sjúklingagögn áður en fyrirtækið hefur stýringarnar til að gera það örugglega.

### Lítil fyrirtæki

Rótgróinn lítill veitandi — heimilislæknastofa, samfélagsapótek, hjúkrunarheimili eða stakstaða stofa — kaupir yfirleitt klínísk kerfi sín frekar en að smíða þau, svo prófunarverk hans er samþykkt, ekki smíði: að staðfesta að uppfærsla birgis eða ný samþætting virki enn örugglega í raunverulegu vinnuflæði áður en starfsfólk reiðir sig á hana. Með litla eða enga sérstaka upplýsingatæknigetu er raunhæfi agi stuttur, endurtakanlegur gátlisti keyrður gegn áhættumestu ferðunum (bókun, ávísun, skráning mælinga) eftir hverja breytingu birgis, helst í prófunar- eða þjálfunarumhverfi með gervisjúklingum frekar en lifandi skrám. Sömu DCB0160 innleiðingaröryggis- og aðgengisskyldur gilda og um stóra samsteypu, en án prófunarteymisins, svo raunhæfa hreyfingin er að styðjast við tryggingu birgis meðan fáeinar staðbundnar samþykktarathuganir sem aðeins þú getur gert eru varðveittar — passar það hvernig þessi stofa í raun vinnur? Lítill veitandi sem sleppir jafnvel þessu og prófar breytingar beint á lifandi sjúklingum er einni slæmri uppfærslu frá öryggisatviki sem hann hefur enga leið til að grípa.

### Stórfyrirtæki

NHS-sjúkrahússamsteypa eða helsti birgir rekur prófanir í stórum stíl og undir fullri tryggingu: sérstök prófunarumhverfi, formlegt UAT með klínískri afleysingu, rekstrarsamþykktarprófanir, öryggisinnbrotsprófanir og breytingaráðgjafarnefndir sem hliða útgáfur í lifandi klínísk kerfi. Einkennandi áskorunin er arfur — stór, gömul kerfi með þunnri sjálfvirkri prófaþekju, þar sem hver breyting er óttuð því enginn er viss hvað hún gæti brotið, sem framleiðir hæga, dýra, handvirka aðhvarfshringi. Stefnumótandi hreyfingin er að fjárfesta jafnt og þétt í sjálfvirkri prófaþekju kringum áhættumestu svæðin, og umbreyta ótta í sjálfstraust og hægum útgáfum í hraðar, öruggar. Stórfyrirtæki bera líka samhæfingarbyrðina af prófunum yfir samþætt kerfi, þar sem breyting í vöru eins birgis getur brotið annars.

### Hið opinbera

Landsstofnun afhendir prófanir undir Service Standard, birtum þjónustumötum og hæsta mælikvarða opinberrar ábyrgðar, þar sem prófunarbrestur í landskerfi getur haft áhrif á milljónir og náð til þingsins. Aðgengisprófanir gegn WCAG eru lagaskylda framfylgt fyrir opinberar stofnanir, og óvirknilegar prófanir í landsstærð — álag, seigla, öryggi — eru tilvistarlegar frekar en valkvæðar. Áskorunin er að samhæfa gæðatryggingu yfir marga birgja og samþættar þjónustur, og halda samræmdri skilgreiningu á lokið yfir víðfeðma áætlun. Landsþjónustur móta líka vistkerfið: prófagögnin, tólin og staðlarnir sem ríkisstofnun skyldar eða birtir verða norm sem birgjar smíða að.

## Algeng mistök

- **Öfugi pýramídinn.** Prófanir eru aðallega hægar, handvirkar enda-á-enda athuganir; endurgjöf er hæg, þekja þunn og aðhvarfsprófanir sleppt undir tímapressu. Móteitur: fjárfestu í breiðum grunni hraðra sjálfvirkra einingar- og samþættingarprófana.
- **Prófanir sem lokafasi.** Prófanir eru stig troðið inn fyrir opnun og það fyrsta sem skorið er þegar áætlun rennur. Móteitur: færðu til vinstri og tengdu prófanir inn í samfelldu samþættingarleiðsluna svo þær séu samfelldar og ódýrar.
- **Lifandi gögn í prófunarumhverfum.** Raunverulegar sjúklingaskrár eru afritaðar í minna vernduð prófunarkerfi fyrir raunsæi, sem skapar brot í bið. Móteitur: gervi- og nafnlaus gögn sjálfgefið; lifandi gögn aðeins sem stýrð undantekning.
- **Græn smíði, ekkert sjálfstraust.** Próf standast en þekja smámuni meðan raunverulegu klínísku hætturnar eru óprófaðar. Móteitur: kortleggðu próf skýrt á hættuskrána og áhættumestu ferðir.
- **Aðgengi sem sjálfvirkt krossmerki.** Staðin sjálfvirk skönnun er meðhöndluð sem samræmi meðan raunverulegir notendur hjálpartækni taka aldrei þátt. Móteitur: paraðu sjálfvirkar athuganir við handvirkar prófanir fatlaðra notenda.
- **Felld skilgreining á lokið.** „Lokið“ er skilgreint en venjulega yfirhnekkt undir tímapressu, sem sendir óörugga vinnu sem lokna. Móteitur: sjálfvirknivæddu hlið og gefðu einhverjum umboð til að halda opnun á gæðagrunni.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Prófastefna | Tilfallandi handvirkar prófanir fyrir útgáfu | Nokkur sjálfvirk próf; öfugur pýramídi | Prófapýramídi með sjálfvirkni yfir stig | Þekja og staðningshlutföll rakin gegn markmiðum; stefnan mæld og virkt stýrð | Vinstri-færsluhefð; hröð, treyst endurgjöf við hverja breytingu |
| Aðhvarf og öryggistengsl | Engar kerfisbundnar aðhvarfsprófanir | Handvirkir aðhvarfshringir, ófullkomnir | Sjálfvirkt aðhvarfssafn kortlagt á hættuskrá | Hættu-til-prófs þekja mæld og tryggð; bil flaggað og lokað gegn markmiði | Hættutengd próf hliða hverja útgáfu sjálfvirkt |
| Prófagögn | Lifandi sjúklingagögn afrituð af léttúð | Blanda lifandi og nafnlausra, óstýrð | Gervi-/nafnlaus sjálfgefið, stýrð | Uppruni og aðgangur prófagagna endurskoðaður og skýrður; undantekningar raktar og tímabundnar | Öflug gervigögn með raunsæjum jaðartilfellum; lifandi gögn aldrei notuð |
| Óvirknilegar prófanir | Engar eða eftiráhugsun | Stöku álags-/öryggisathuganir | Frammistaða, öryggi, aðgengi prófað reglulega | Óvirknilegar niðurstöður mældar gegn skilgreindum þröskuldum og stýringar tryggðar | Samfelldar óvirknilegar prófanir í raunhæfri hámarksstærð |
| Gallar og lokið | Engin skilgreind „lokið“; gallar órakt | „Lokið“ skilgreint en oft fellt úr gildi | Framfylgd hlið; gallar flokkaðir eftir klínískum alvarleika | Gallaþróun og hliðfylgni rakin sem KPI og stýrt að markmiði | Gæði innbyggð; útgáfur leiðinlegar og afturkræfar |

## Gátlisti

- [ ] Prófapýramídi er til: breið sjálfvirk einingar-/samþættingarþekja, fá enda-á-enda próf, öll keyrð í samfelldri samþættingu.
- [ ] Hæstu hætturnar í DCB0129/0160 hættuskránni eru hver kortlögð á nafngreind, sjálfvirk aðhvarfspróf.
- [ ] Aðhvarfssafn keyrir og verður að standast áður en nokkur breyting nær lifandi klínísku kerfi.
- [ ] Prófunar- og sviðsetningarumhverfi nota gervi- eða nafnlaus gögn; lifandi sjúklingagögn eru aldrei notuð af léttúð.
- [ ] Frammistöðu- og álagspróf eru keyrð gegn raunhæfri hámarkseftirspurn fyrir mikilvægar klínískar ferðir.
- [ ] Öryggisprófanir og WCAG aðgengisprófanir (sjálfvirkar auk handvirkra með notendum hjálpartækni) eru fastar prófategundir.
- [ ] Notendasamþykktarprófanir eru keyrðar með raunverulegum klínískum starfsmönnum við raunhæfar aðstæður, með afleysingartíma í fjárlögum.
- [ ] Skilgreining á lokið og framfylgd gæðahlið eru til og eru ekki hljóðlega felld úr gildi undir tímapressu.
- [ ] Gallar eru flokkaðir eftir klínískum áhrifum, og þekkt vandamál send við opnun eru skráð sem samþykktar, dregnar úr áhættur.
- [ ] Prófsönnunargögn eru vitnuð beint í klínísku öryggismálsskýrslunni.

## Helstu heimildir

- NHS England Digital — DCB0129 og DCB0160 klínískir áhættustýringarstaðlar; hættuskrá og klínísk öryggismálsskýrsla.
- NHS England — NHS Service Standard og NHS Digital Service Manual (aðgengi, prófanir og rekstur áreiðanlegrar þjónustu).
- GOV.UK Service Manual (Government Digital Service) — leiðbeiningar um prófanir, prófagögn og umhverfi, aðgengi og samfellda afhendingu.
- W3C Web Accessibility Initiative — Web Content Accessibility Guidelines (WCAG) 2.2 og prófunartækni.
- NHS England — Digital Technology Assessment Criteria (DTAC), þar með talið klínískt öryggi, tæknileg trygging og nothæfi/aðgengi.
- ISTQB (International Software Testing Qualifications Board) — grunnorðaforði prófana og prófastig.
- Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018.
- Mike Cohn — hugmyndin um prófapýramídann; Martin Fowler / Continuous Delivery (Humble & Farley) — prófasjálfvirkni og CI/CD starfsvenja.

## Tilvísanir

1. Software testing — Wikipedia — https://en.wikipedia.org/wiki/Software_testing
2. Quality assurance — Wikipedia — https://en.wikipedia.org/wiki/Quality_assurance
3. Unit testing — Wikipedia — https://en.wikipedia.org/wiki/Unit_testing
4. Integration testing — Wikipedia — https://en.wikipedia.org/wiki/Integration_testing
5. Shift-left testing — Wikipedia — https://en.wikipedia.org/wiki/Shift-left_testing
6. Non-functional testing — Wikipedia — https://en.wikipedia.org/wiki/Non-functional_testing
7. Regression testing — Wikipedia — https://en.wikipedia.org/wiki/Regression_testing
8. Test automation — Wikipedia — https://en.wikipedia.org/wiki/Test_automation
9. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
10. Acceptance testing — Wikipedia — https://en.wikipedia.org/wiki/Acceptance_testing
11. Web Content Accessibility Guidelines — Wikipedia — https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines
12. Deployment environment — Wikipedia — https://en.wikipedia.org/wiki/Deployment_environment
13. Synthetic data — Wikipedia — https://en.wikipedia.org/wiki/Synthetic_data
14. Clinical risk management standards DCB0129 and DCB0160 — NHS England (Clinical Safety) — https://digital.nhs.uk/services/clinical-safety
15. NHS service standard and NHS digital service manual — NHS England — https://service-manual.nhs.uk/
16. Testing your service, and test data and environments — Government Digital Service, GOV.UK Service Manual — https://www.gov.uk/service-manual/technology
17. Web Content Accessibility Guidelines (WCAG) 2.2 — W3C Web Accessibility Initiative — https://www.w3.org/WAI/standards-guidelines/wcag/
18. Digital Technology Assessment Criteria (DTAC) — NHS England — https://www.nhs.uk/digital-tools/digital-technology-assessment-criteria-dtac/
19. Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018 — UK Government / GOV.UK — https://www.legislation.gov.uk/uksi/2018/952/contents/made
20. Continuous Delivery — Jez Humble and David Farley — https://continuousdelivery.com/
