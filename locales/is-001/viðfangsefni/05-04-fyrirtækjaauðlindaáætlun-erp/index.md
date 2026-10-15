# Viðfangsefni 5.4 — Fyrirtækjaauðlindaáætlanagerð (ERP)

**Í einni setningu:** Enterprise Resource Planning er samþætta bakvinnslukerfið — fjármál, mannauður, launavinnsla, innkaup og aðfangakeðja — sem þjónar sem viðurkennt skráakerfi skipulagsheildarinnar fyrir fé, fólk og birgðir, og undirbyggir hljóðlega nánast hverja vinnuaðferð í þessari bók.

## Hvers vegna þetta skiptir máli í heilbrigðis- og velferðarþjónustu

Stafræn umbreyting í heilbrigðis- og velferðarþjónustu fær athygli sína frá klínískum kerfum — [rafrænu sjúkraskránni](https://en.wikipedia.org/wiki/Electronic_health_record), sameiginlegu umönnunarskránni, sjúklingaforritinu. En ekkert þeirra keyrir án óglamúrlegu bakvinnslunnar undir. Starfsfólk verður að vera ráðið, sett á vaktir og greitt; birgjar verða að vera samningsbundnir og gerðir upp; lyf, tæki og rekstrarvörur verða að vera pöntuð og rakin; og hvert pund verður að vera gert grein fyrir gegn þröngt hömluðum opinberum fjárlögum. ERP er þar sem það gerist, og þegar það bilar eru afleiðingarnar tafarlausar: ógreitt starfsfólk, stöðvuð innkaup, ósamræmdir reikningar og fjármálafall sem flýgur blint.

Umfangið er gífurlegt. [NHS Shared Business Services](https://en.wikipedia.org/wiki/NHS_Shared_Business_Services) (NHS SBS), samstarfsfyrirtæki stofnað 2004, rekur Oracle-byggðan landsfjármála- og innkaupavettvang sem vinnur milljónir reikninga og meðhöndlar mjög stóran hluta heildarútgjalda NHS fyrir yfir hundrað NHS-skipulagsheildir (sjá *Helstu heimildir*). ERP-ákvarðanir eru því ekki sérhæft fjármálaáhyggjuefni — þær móta vinnuaflsstjórnun, stjórn á opinberu fé og gagnagæðin sem sérhver niðurstreymisgreining veltur á. Fyrir forstjóra er ERP bæði grunnstoð og ein áhættusamasta áætlun sem skipulagsheild mun nokkru sinni reyna.

## Lykilhugtök

**Hvað ERP er.** Ein samþætt [fyrirtækjaauðlindaáætlanagerðar](https://en.wikipedia.org/wiki/Enterprise_resource_planning) lausn með einingum sem deila einum gagnagrunni og einu safni grunngagna, sem nær yfir kjarna stjórnsýsluferla fyrirtækisins: aðalbók og fjárhagsbókhald, viðskiptaskuldir og -kröfur, mannauðs- og vinnuaflsstjórnsýslu, [launavinnslu](https://en.wikipedia.org/wiki/Payroll), innkaup ([kaupa-til-greiða](https://en.wikipedia.org/wiki/Procure-to-pay)), birgðir og aðfangakeðju og í vaxandi mæli áætlanagerð og greiningu (FP&A — fjárhagsáætlun og -greining). Tilgangur „samþættingar“ er að innkaupapöntun, vörumóttaka og reikningur samræmast sjálfvirkt því þau eru sömu gögnin, ekki þrjú afrit.

**[Skráakerfi](https://en.wikipedia.org/wiki/System_of_record) (system of record).** ERP er viðurkennda uppsprettan fyrir fjármála- og auðlindagögn — bókin sem endurskoðendur treysta og launin sem starfsfólk er greitt eftir. Önnur kerfi kunna að halda rekstrarafritum, en ERP er útgáfa sannleikans fyrir fé og, oft, fyrir efnislega mannauðsskrá.

**[Grunngögn](https://en.wikipedia.org/wiki/Master_data_management).** Sameiginlegu viðmiðunargögnin sem allt annað veltur á: [reikningsplanið](https://en.wikipedia.org/wiki/Chart_of_accounts), kostnaðarstaðir, birgjaskrár, vöruskrá og starfsmannaskrár. Grunngögn eru hljóðlátur ákvarðandi þáttur ERP-árangurs — óhrein, tvítekin eða ósamkvæm grunngögn spilla skýrslugerð, brjóta samræmingu og grafa undan hverju ferli byggðu ofan á.

**Algengir vettvangar í heilbrigðis- og opinbera geiranum.** Í NHS og víðari breskum opinbera geiranum eru helstu ERP-vettvangarnir **Oracle** (ráðandi, aðallega gegnum NHS SBS og samtök eins og NEP), **SAP**, **Unit4** (víða valið af samsteypum, háskólum og sveitarfélögum) og **Microsoft Dynamics 365**. Sveitarfélög sem veita félagsþjónustu fyrir fullorðna reka sama flokk kerfa fyrir fjármál og innkaup. Nútímaþróunarátt er **ský-ERP** ([hugbúnaður sem þjónusta](https://en.wikipedia.org/wiki/Software_as_a_service)) frekar en uppsetningar á staðnum.

**[Sameiginleg þjónusta](https://en.wikipedia.org/wiki/Shared_services).** Í stað þess að hver skipulagsheild reki eigið ERP deila margar sameiginlegum vettvangi og sameiginlegum bakvinnslurekstri — NHS SBS líkanið, og NHS-samtök sem reka sniðmátuð Oracle Cloud tilvik. Sameiginleg þjónusta skiptir sumum staðbundnum sveigjanleika fyrir stöðlun, stærðarhagkvæmni og minni sameiginlega innleiðingar- og stuðningsbyrði.

## Bestu starfsvenjur

1. **Meðhöndlaðu grunngögn sem grunninn, ekki eftiráhugsun.** Hreinsaðu og afritaðu út reikningsplanið, birgjaskrár, vöruskrá og starfsmannagögn *áður en* [flutningur](https://en.wikipedia.org/wiki/Data_migration) hefst, og komdu á áframhaldandi gagnastjórnarháttaeignarhaldi. Skaðlegustu ERP-bilanirnar rekja til slæmra grunngagna sem ekkert magn góðs hugbúnaðar getur lagað; gagnagæðavinnustraumur er ekki valkvæður.

2. **Taktu upp staðalinn; lágmarkaðu sérsnið.** Stilltu ERP að staðalsniðmáti birgis eða samtaka hvar sem ferlið er ósvikið hversdagslegt, og taktu frá sértækar breytingar fyrir sjaldgæfa ósvika aðgreiningu. Þungt sérsnið blæs upp kostnað, rústar uppfærsluhæfni og endurflytur inn staðbundna óreiðuna sem þú varst að flýja — ský-ERP sérstaklega refsar „láttu það líta út eins og gamla kerfið okkar“ eðlishvötinni.

3. **Hannaðu samþættingarnar vísvitandi.** ERP stendur ekki eitt: það verður að skiptast á gögnum við vinnuafls- og vaktaáætlunarkerfi, klínísk og apótekskerfi (fyrir birgðir og kostnað), banka og greiningu. Kortleggðu hvert viðmót, eigðu gagnasamningana og prófaðu frá enda til enda — launavinnsla fóðruð af biluðu vaktaáætlunarflæði greiðir fólki rangt, og það er traustseyðandi bilun.

4. **Rektu ERP-skipti sem stóra áætlun, með breytingastjórnun í kjarnanum.** ERP-innleiðing er viðskiptabreytingaáætlun sem tengist hugbúnaði, ekki upplýsingatækniverkefni. Útvegaðu henni áætlunaragann (sjá Viðfangsefni 5.2 — Áætlunarstýrð vinna) og ósvikið [breytingastjórnunar](https://en.wikipedia.org/wiki/Change_management) átak (sjá Viðfangsefni 8.1 — Breytingastjórnun), því mestur ERP-sársauki er fólk og ferli, ekki tækni.

5. **Vertu heiðarlegur um ERP-áætlunaráhættu.** Stórar ERP-innleiðingar hafa vel áunnið orðspor fyrir að fara fram úr tíma og kostnaði og skila minna en lofað er; bilunarfræðin er mikil og þvert á geira. Byggðu inn varasjóð, forðastu stórahvells opnun þar sem þrepuð er framkvæmanleg og láttu aldrei bjartsýna tímalínu hnekkja viðbúnaði — seinkuð dagsetning er endurheimtanleg, misheppnuð launavinnslu- eða bókarumskipti eru það ekki.

6. **Verndaðu opnunina og tímabilið eftir hana.** Skipuleggðu gagnaumskipti, samhliða keyrslu, samræmingu og hypercare-stuðning í smáatriðum, og stenstu þrýsting að stytta þau. Vikurnar kringum opnun eru þegar birgjar fara ógreiddir og mánaðarlok brotna; vel mannað stöðugleikatímabil er munurinn á ójöfnu upphafi og opinberri kreppu.

7. **Notaðu ERP sem auðlindastjórnunarskráakerfið — og hannaðu vinnuaðferðir kringum það.** Láttu ERP vera einu uppsprettuna fyrir kostnaðarstaði, fjárlög, innkaupasamþykki og vinnuaflsstofnun, og samræmdu rekstrarferli þín að því frekar en að halda skuggatöflureiknum. Skuggakerfi endurinnleiða sundrunguna sem ERP er til að fjarlægja og láta gagnagæði hljóðlega rotna.

8. **Vegðu sameiginlega þjónustu og ský-ERP á raunverulegum málamiðlunum þeirra.** Sameiginlegir vettvangar (NHS SBS, NEP-líkar samtök) og ský-ERP bjóða stöðlun, stærð, samfelldar uppfærslur og léttari staðbundna byrði, á kostnað nokkurs staðbundins sveigjanleika og háðar veitandanum. Veldu vísvitandi: fyrir flestar skipulagsheildir vegur stöðlunarávinningurinn þyngra en sveigjanleikinn sem tapast, en ákvörðunin ætti að vera tekin með opin augu, ekki sjálfgefið.

## Spurningar til að ræða með teyminu

1. **Hve viss erum við — með sönnunargögnum, ekki fullvissu — um gæði grunngagnanna sem við tækjum með okkur inn í nýtt ERP, og hver á þau eftir opnun?**
   Grunngögn eru hljóðlátur ákvarðandi þáttur ERP-árangurs, en samt meðhöndluð reglulega sem flutningsþrifaverk frekar en grunnurinn sem þau eru, svo þessi spurning prófar hvort teymið hefur litið harkalega á reikningsplanið, birgjaskrár, vöruskrá og starfsmannagrunn eða vonast einfaldlega til að þau séu hrein. Í heilbrigðis- og velferðarsamhengi eru hagsmunirnir áþreifanlegir: tvítekin birgjaskrá brýtur kaupa-til-greiða samræmingu, starfsmannagrunnur sem er ósammála ESR greiðir fólki rangt og ósamkvæmt reikningsplan spillir hverri niðurstreymisfjárhagsskýrslu sem stjórnin og endurskoðendur reiða sig á. Spennan sem vert er að þræta um er togið að flytja allt í einu til að ná dagsetningu á móti mánuðum óglamúrlegrar hreinsunar og afritunar sem góð starfsvenja krefst, og hvort nokkur æðri er fús til að fjármagna gagnagæðavinnustraum sem sýnir enga sýnilega afurð. Sterkt svar vitnar í raunverulegar tölur — hve margar tvítekin birgjaskrár, hve margar ósamræmdar starfsmannaskrár — frekar en almenna tilfinningu að „gögnin séu aðallega í lagi“. Það ætti einnig að nefna manneskjuna og stjórnarháttavélbúnaðinn ábyrgan fyrir grunngagnagæðum *eftir* opnun, því gögn hreinsuð einu sinni og síðan látin óstýrð reka einfaldlega aftur í óreiðu.

2. **Hvar erum við í raun freistuð til að sérsníða ERP til að varðveita kunnuglegt ferli, og er sá munur ósvik aðgreining eða bara gamla óreiðan sem við erum að reyna að flýja?**
   Þungt sérsnið er klassíska fyrirtækja-ERP gildran: það blæs upp kostnað, rústar uppfærsluhæfni og endurflytur inn nákvæmlega staðbundnu sundrunguna sem áætlunin átti að fjarlægja, og ský-ERP sérstaklega refsar eðlishvötinni að „láta það líta út eins og gamla kerfið okkar“. Þessi spurning biður teymið að vera sértækt um hvaða ferli það mun krefjast að beygja hugbúnaðinn að, og rökstyðja hvert gegn hörðu prófi á hvort það er ósvik aðgreining eða aðeins þægilegur vani. Umræðan skiptir máli því í heilbrigðis- og velferðarþjónustu er næstum hvert bakvinnsluferli — aðalbók, innkaupasamþykki, launavinnslustjórnsýsla — ósvikið hversdagslegt, svo heiðarlega sjálfgefið ætti að vera að taka upp staðalsniðmát birgis eða samtaka og breyta ferlinu, ekki hugbúnaðinum. Áþreifanleg sjónarhorn fela í sér að telja upp hverja beiðni um sérsnið og spyrja hver nýtur góðs, hvaða uppfærslukostnað það læsir inn og hvort nágrannasamsteypa á sama sniðmáti komist af án þess. Gott svar aðgreinir sjaldgæfu lögmætu undantekninguna frá mörgum beiðnum drifnum af breytingaandúð, og viðurkennir að taka upp staðalinn er breytingastjórnunar- og forystuvandamál, ekki tæknilegt. Það ætti einnig að horfast í augu við langtímakostnaðinn: sérhver sérsmíðuð breyting er skattur greiddur við hverja framtíðarskýjaútgáfu.

3. **Höfum við heiðarlega útvegað mannlegu og ferlishlið þessarar ERP-breytingar – umskipti, samhliða keyrslu, hypercare, þjálfun og samþættingarprófanir – eða erum við hljóðlega að reka þetta sem upplýsingatækniverkefni?**
   Bilunarfræðin er ótvíræð um að mestur ERP-sársauki er fólk og ferli frekar en tækni, svo þessi spurning afhjúpar hvort áætlunin er ósvikið viðskiptabreytingaviðleitni eða upplýsingatækniskipti í áætlunarklæðum. Tímabilið kringum opnun er þegar birgjar fara ógreiddir, mánaðarlok brotna og starfsfólk fær laun seint, og hvert þeirra í opinberri heilbrigðisstofnun er ekki ójafnt upphaf heldur traustseyðandi, hugsanlega fréttnæm bilun. Spennan til að þræta um er stöðugur þrýstingur að stytta samhliða keyrslu, þynna hypercare-teymið og þjappa tímalínunni til að ná ákveðinni dagsetningu, á móti þeim veruleika að seinkuð dagsetning er endurheimtanleg meðan misheppnuð launavinnslu- eða bókarumskipti eru það ekki. Gagnleg sjónarhorn fela í sér að ganga gegnum hverja samþættingu — vaktaáætlun, ESR, apótekabirgðir, banka, greiningu — og spyrja hverjar hafa verið prófaðar frá enda til enda á móti gert ráð fyrir, og hvort ferliseigendur í fjármálum, innkaupum og mannauði hafa í raun verið fengnir að láni til að endurhanna vinnuflæði sín. Heiðarlegt svar sýnir nafngreinda breytingastjórnunar-, þjálfunar- og samræmingarauðlind í áætluninni frekar en línu sem segir „upplýsingatækni sér um það“, og er fúst til að þrepa opnun þar sem stórihvells umskipti bæta við forðanlegri áhættu. Það ætti einnig að viðurkenna að viðbúnaður, ekki dagatalið, verður að stýra ákvörðuninni um að halda áfram.

4. **Varðandi sameiginlega þjónustu og ský-ERP spurninguna, höfum við vegið stöðlunina sem við myndum öðlast gegn staðbundna sveigjanleikanum sem við myndum afsala – og tekið þá ákvörðun vísvitandi frekar en sjálfgefið?**
   Sameiginlegir vettvangar eins og NHS SBS og samtaka Oracle Cloud tilvik, og ský-ERP víðar, bjóða raunveruleg verðlaun — stærðarhagkvæmni, samfelldar uppfærslur, léttari staðbundna innleiðingar- og stuðningsbyrði — en kaupa þau með ósvikinni tapi staðbundinnar stjórnar og harðri háð á vegvísi veitandans og útgáfutakti. Þessi spurning knýr teymið til að nefna hvaða sveigjanleiki skiptir það í raun máli og prófa hvort hann sé þess virði kostnaðar við að reka, plástra og styðja sína eigin bakvinnslu sérstaklega. Spennan í heilbrigðis- og velferðarsamhengi er skerpt af að mest af bakvinnsluferli er hversdagslegt, svo stöðlunarávinningurinn vegur yfirleitt þyngra en sveigjanleikinn sem tapast — en „yfirleitt“ er ekki „alltaf“, og að reka inn í sameiginlegan vettvang án þess að skoða málamiðlunina er hvernig skipulagsheildir enda með gremju yfir sniðmáti sem þær völdu aldrei vísvitandi. Áþreifanleg sjónarhorn fela í sér að spyrja hvaða staðbundin ferli teymið myndi berjast fyrir að halda og hvers vegna, hvað gerist þegar samtökin breyta sniðmátinu undir þeim og hvort útgöngu- og gagnaflytjanleikaskilmálar eru skildir fyrir undirskrift. Sterkt svar meðhöndlar þetta sem stefnumótandi val tekið með opin augu, vegandi háð á veitanda og vegvísisáhættu gegn stærð og uppfærsluléttir, frekar en að sjálfgefa annaðhvort á sameiginlega valkostinn því hann er tískuvænn eða loða við sérsmíðaðan vettvang af vana.

5. **Hver er heiðarleg áætlun okkar um að koma í veg fyrir að skuggatöflureiknar og staðbundnar krókaleiðir birtist aftur eftir opnun, svo ERP haldist eina skráakerfið frekar en ein uppspretta meðal margra?**
   Allur tilgangur samþætts ERP er að fjarlægja sundrunguna sem skuggakerfi skapa, en samt hafa staðbundnir töflureiknar leið til að lifa af opnun og hljóðlega endursundra gögnunum sem áætlunin átti að sameina. Þessi spurning prófar hvort teymið hefur hugsað handan umskiptanna að varanlega rekstraraganum sem heldur kostnaðarstöðum, fjárlögum, innkaupasamþykki og vinnuaflsstofnun lifandi í ERP frekar en í einkavinnubók einhvers. Hún skiptir máli í heilbrigðis- og velferðarþjónustu því skuggavinnuaflsstofnunartöflureiknir sem er ósammála launavinnslu, eða rekjari innkaupa utan kerfis, rotnar hljóðlega gagnagæðin sem stjórnarskýrslugerð og endurskoðun velta á, og gerir það einmitt því hann er þægilegur fyrir manneskjuna sem heldur honum. Spennan sem vert er að draga fram er að skuggakerfi eru yfirleitt til af ástæðu — ERP-ferlið fannst hægara, eða raunverulegt bil var aldrei lokað — svo að banna þau einfaldlega mistekst nema undirliggjandi þörf sé sinnt. Gagnleg sjónarhorn fela í sér að spyrja hvaða núverandi töflureiknar þyrftu að deyja við opnun, hvers vegna hver er til og hvaða getu innan kerfisins eða ferlisbreyting myndi fjarlægja freistinguna að endurbyggja hann. Heiðarlegt svar parar skýra væntingu um að ERP sé viðurkennt við áætlun um að laga bilin sem knýja fólk af kerfinu, og nefnir hver mun taka eftir og véfengja skuggakerfi þegar það birtist aftur.

6. **Erum við ósvikið heiðarleg um ERP-áætlunaráhættu – feril geirans í framúrkeyrslu og vanskilum – og höfum við byggt tímalínu, varasjóð og opnunaraðferð kringum þann veruleika frekar en bjartsýna áætlun?**
   Stórar ERP-innleiðingar hafa vel áunnið, þvert á geira orðspor fyrir að fara fram úr tíma og kostnaði og skila minna en lofað er, og þessi spurning spyr hvort teymið hefur innhverft þá bilunarfræði eða gerir hljóðlega ráð fyrir að verða undantekningin. Hagsmunirnir í opinberri heilbrigðisstofnun eru miskunnarlausir: seinkuð dagsetning er endurheimtanleg, en misheppnuð launavinnslu- eða bókarumskipti eru fréttnæmur, traustseyðandi atburður með þinglegar og fjölmiðlaafleiðingar, svo bjartsýni sem hnekkir viðbúnaði er ekki hugrekki heldur ábyrgðarleysi. Spennan til að þræta um er stöðugur þrýstingur — frá áskilnum dagsetningum, sokknum kostnaði og ósk um að sýna framvindu — að þjappa tímalínunni, þynna varasjóð og kjósa stórahvells opnun fram yfir þrepaða sem væri öruggari en hægari. Áþreifanleg sjónarhorn fela í sér að spyrja hvað áætlunin gerir ráð fyrir að muni ganga rétt, hvar varasjóðurinn situr í raun, hvort þrepuð umskipti eru framkvæmanleg og hver eru skýru viðmiðin fyrir að seinka opnun ef viðbúnaður er ekki til staðar. Gott svar nefnir tilteknu áhætturnar sem þessi áætlun ber frekar en að vísa almennt í ERP-áhættu, byggir inn raunverulegan varasjóð og verjanlega þrepunarákvörðun, og meðhöndlar gagnadrifið „ekki enn“ sem lögmæta og væntanlega niðurstöðu frekar en taugabrest.

## Í reynd: dæmi úr heilbrigðis- og velferðarþjónustu

Bráða-NHS-samsteypa rekur fimmtán ára gamalt fjármála- og innkaupakerfi á staðnum sem birgir þess mun brátt hætta að styðja. Skýrslugerð tekur daga, kaupa-til-greiða er mikið handvirkt og vinnuaflsstofnunin lifir í flækju töflureikna sem aldrei samræmast alveg launavinnslu. Samsteypan ákveður að færa sig í ský-ERP afhent gegnum sniðmátað Oracle Cloud tilvik svæðisbundinna NHS-samtaka, ásamt nágrannaveitendum.

Fjármálastjórinn stendur gegn freistingunni að meðhöndla þetta sem upplýsingatækniskipti. Áætlun er sett á fót með framkvæmdabakhjarli, fullu starfi áætlunarstjóra og — mikilvægt — gagnagæðavinnustraumi sem eyðir mánuðum í að hreinsa reikningsplanið, afrita tólf þúsund birgjaskrár og samræma starfsmannagrunninn gegn ESR (rafrænu starfsmannaskrá NHS) áður en nokkur flutningur fer fram. Ferliseigendur í fjármálum, innkaupum og mannauði eru fengnir að láni til að [endurhanna vinnuflæði sín](https://en.wikipedia.org/wiki/Business_process_re-engineering) að samtakasniðmátinu frekar en að endurtaka gamla kerfið.

Samsteypan velur þrepaða opnun: fjármál og innkaup fyrst, vinnuafl og skýrslugerð í síðari bylgju, með samhliða keyrslu yfir tvenn mánaðarlok og vel mannað hypercare-teymi í viðbragðsstöðu. Samþættingar við vaktaáætlun, banka og greiningarvöruhús eru kortlagðar og prófaðar frá enda til enda. Opnunin er ekki sársaukalaus — birgjagreiðslubakskrá byggist upp í viku eitt og tekur hálfan mánuð að hreinsa — en þar sem samræming og hypercare voru almennilega fjármögnuð er ekkert starfsfólk greitt seint og mánaðarlok loka á tíma.

Ári síðar lokar samsteypan bókum sínum á dögum frekar en vikum, innkaupasamþykki eru framfylgd í kerfinu og stofnunin samræmist loks launavinnslu. Sameiginlegi samtakavettvangurinn þýðir líka að næsta uppfærsla berst sem venjuleg skýjaútgáfa frekar en enn eitt fjölára verkefni.

## Geirasjónarhorn

### Sprotafyrirtæki

Stafrænt heilbrigðissprotafyrirtæki rekur sjaldan fullt ERP; það saumar saman ský-SaaS tól — létt bókhaldsforrit, mannauðs- og launaforrit, nokkra töflureikna — því þungt samþætt safn er óhóflegt fyrir þrjátíu manna teymi. Skráakerfisagi skiptir samt máli: jafnvel á fræstigi koma eitt hreint reikningsplan og ein viðurkennd launauppspretta í veg fyrir samræmingaróreiðuna sem fælir fjárfesta í áreiðanleikakönnun. Rétta hreyfingin er að halda stakkinum einföldum, samþættanlegum og vel stýrðum, og fresta „raunverulegu“ ERP þar til umfang krefst þess í raun. Áhætta sprotafyrirtækisins er spegilmynd stórfyrirtækisins — ekki ofsérsnið, heldur dreifing: tylft ótengdra forrita án grunngagnaeiganda og enginn ábyrgur fyrir tölunum.

### Lítil fyrirtæki

Rótgróinn lítill veitandi — heimilislæknastofa, samfélagsapótek, hjúkrunarheimili, heimaþjónustufyrirtæki eða stakstaða stofa — ber fulla þyngd fjárhags-, launa- og innkaupaskyldna með nánast enga sérstaka fjármála- eða upplýsingatæknigetu, svo þungt ERP er utan seilingar en skráakerfisagi er ekki valkvæður. Hagnýta svarið er lítið, vel samþætt safn skýjaforrita — bókhald, laun og birgðir — valið svo eitt reikningsplan og ein viðurkennd launauppspretta haldi, því hjúkrunarheimili sem greiðir starfsfólki seint eða apótek þar sem birgðir og bók eru ósammála stendur frammi fyrir sömu reglugerðar- og reiðufjárafleiðingum og stór samsteypa en án bakvinnsluteymis til að taka á sig höggið. Freistingin að reka reksturinn á töflureikni stofnanda er sterkust hér og hættulegust, þar sem sjaldan er nokkur til að taka eftir þegar tölurnar reka. Þar sem fagfélag, sérleyfi eða staðbundið net býður sameiginlegan eða staðlaðan fjármálavettvang er að taka hann upp yfirleitt hyggna hreyfingin: hann kaupir stöðlunina og stuðninginn sem skipulagsheildin getur ekki útvegað sjálf. Aginn er að halda stakkinum einföldum og stýrðum af þeim sem á féð, og að standast sérsniðnar krókaleiðir sem aðeins sú eina manneskja skilur.

### Stórfyrirtæki

Stór samsteypa eða heilbrigðistæknifyrirtæki rekur fullt samþætt ERP sem verkefniskritískt skráakerfi, og að skipta því út er ein áhættusamasta áætlun sem hún mun nokkru sinni reyna. Fyrirtækjafreistingin er þungt sérsnið til að varðveita kunnuglega arfaferli; aginn er að taka upp staðalsniðmátið, útvega alvarlegan gagnagæðavinnustraum og reka opnun með samhliða keyrslu og vel mönnuðu hypercare-tímabili. Samþættingar margfaldast — vaktaáætlun, ESR, apótekabirgðir, banki, greining — og hver er traustseyðandi bilun ef hún brýtur hljóðlega launavinnslu eða mánaðarlokasamræmingu. Þar sem mestur sársauki er fólk og ferli frekar en tækni er breytingastjórnun (sjá Viðfangsefni 8.1 — Breytingastjórnun) þar sem fyrirtækjaáætlunin vinnst eða tapast. Ábyrgð gagnvart stjórn og endurskoðendum gerir misheppnuð bóka- eða launavinnsluumskipti að stjórnarháttaatviki, ekki bara upplýsingatæknibakslagi.

### Hið opinbera

Á lands- og sameiginlegu þjónustustigi er ERP stöðlunartæki: NHS Shared Business Services og samtaka Oracle Cloud tilvik eru til að gefa mörgum skipulagsheildum einn sniðmátaðan vettvang, sem verslar staðbundinn sveigjanleika fyrir stærðarhagkvæmni og samfelldar uppfærslur. Ríkisábyrgð bætir opinberri innkaupaskoðun (samkeppnisrömmum, virði-fyrir-fé tryggingu) við sérhverja stóra ERP-ákvörðun, og landsumskiptabilun hefur þinglegar og fjölmiðlaafleiðingar. Raunverulegur áhrifamáttur miðjunnar er að kalla saman — að skylda eða hvetja til sameiginlegra vettvanga svo tugir samsteypa og sveitarfélaga reki, plástri og bregðist hver sína eigin bakvinnslu sérstaklega. Skilgreinandi spennan er milli landsstöðlunar og staðbundins sjálfstæðis: ýttu sniðmátinu of fast og upptaka stöðvast í gremju; of mjúkt og sundrungin sem ERP er til að fjarlægja varir hljóðlega.

## Algeng mistök

- **Óhrein grunngögn flutt í heilu lagi.** Gamlar tvítekningar og ósamkvæmni eru borin inn í nýja kerfið, sem spillir skýrslugerð frá fyrsta degi. Lagfæring: hreinsaðu og stýrðu grunngögnum fyrir flutning, og eigðu þau eftir.
- **Að sérsníða til að endurtaka gamla kerfið.** Sérsmíðaðar breytingar gerðar til að forðast ferlisbreytingu blása upp kostnað og eyðileggja uppfærsluhæfni. Lagfæring: taktu upp staðalsniðmátið; breyttu ferli, ekki hugbúnaði.
- **ERP rekið sem upplýsingatækniverkefni.** Að meðhöndla það sem tækniskipti sveltir breytinga-, þjálfunar- og ferlisendurhönnunarviðleitnina. Lagfæring: rektu það sem viðskiptabreytingaáætlun með raunverulegri breytingastjórnun (Viðfangsefni 8.1).
- **Bjartsýn stórihvells opnun.** Þjappaðar tímalínur og ein umskipti breyta venjulegum vandamálum í opinberar kreppur. Lagfæring: Þrepaðu þar sem framkvæmanlegt, og verslaðu aldrei viðbúnað fyrir dagsetningu.
- **Bilaðar samþættingar.** Óprófað vaktaáætlunar-í-launavinnslu eða innkaupa-í-bók flæði greiðir fólki rangt eða brýtur samræmingu. Lagfæring: kortleggðu, eigðu og prófaðu frá enda til enda hvert viðmót.
- **Skuggatöflureiknar lifa af.** Staðbundnar krókaleiðir þrauka samhliða ERP, endursundra gögnunum. Lagfæring: gerðu ERP að eina skráakerfinu og afnemdu skuggana.

## Þroskalíkan

| Vídd | Upphaf | Þróun | Stöðlun | Stjórnun | Samhæfing |
|---|---|---|---|---|---|
| Kerfislandslag | Mörg aldrandi, ótengd bakvinnslukerfi | Kjarnafjármál sameinuð; mannauður/innkaup aðskilin | Samþætt ERP sem skráakerfi | Samþætt ERP með kerfisheilsu og vettvangsframmistöðu rakin gegn þjónustumarkmiðum | Ský-ERP á sameiginlegum/samtakavettvangi, uppfært samfellt |
| Grunngögn | Óeigin, tvítekin, ósamkvæm | Hreinsuð fyrir opnun, rekur síðan | Stýrð með skýru eignarhaldi | Gæði mæld gegn skilgreindum KPI, með ráðsmennskustýringar tryggðar | Virkt stýrð með gæðamælikvörðum og ráðsmennsku |
| Samþætting | Handvirk endurslátt milli kerfa | Punkt-til-punkts viðmót, brothætt | Kortlögð, prófuð, eigin viðmót | Viðmót vöktuð með samræmingar-KPI og viðvörun við bilun | Sjálfvirk, vöktuð, samræmd gagnaflæði |
| Innleiðingaragi | Upplýsingatæknistýrð, engin breytingastjórnun | Áætlunarbygging en veik breytingaviðleitni | Viðskiptabreytingaáætlun með þrepaðri opnun | Afhending og opnun stýrð gegn ávinningi, viðbúnaði og áhættumælikvörðum | Staðlað sniðmátsupptaka; uppfærslur eru rútína |
| Vinnuaðferðir | Skuggatöflureiknar alls staðar | Sum ferli í kerfinu | Ferli samræmd ERP skráakerfinu | Ferlisframmistaða og upptaka rakin gegn skýrslu-KPI og stýringum | ERP-gögn knýja áætlanagerð, kostnaðargreiningu og ákvarðanir |

## Gátlisti

- [ ] Reikningsplanið, birgja-, vöru- og starfsmannagrunngögn eru hreinsuð og afrituð út fyrir flutning.
- [ ] Áframhaldandi grunngagnaeignarhald og stjórnarhættir eru úthlutuð og fjármögnuð.
- [ ] Innleiðingin er afmörkuð og mönnuð sem viðskiptabreytingaáætlun, ekki upplýsingatækniverkefni.
- [ ] Sérsnið er lágmarkað; staðalsniðmát birgis eða samtaka er tekið upp fyrir hversdagsleg ferli.
- [ ] Sérhver samþætting (vaktaáætlun, laun/ESR, klínísk/apótek, banki, greining) er kortlögð, eigin og prófuð frá enda til enda.
- [ ] Opnunaraðferð (þrepuð eða stórihvellur) er valin á viðbúnaði, ekki áskilinni dagsetningu.
- [ ] Gagnaumskipti, samhliða keyrsla, samræming og hypercare-tímabil eru skipulögð og mönnuð.
- [ ] Breytingastjórnun, þjálfun og ferlisendurhönnun eru skýrt fjármögnuð (sjá Viðfangsefni 8.1).
- [ ] Sameiginleg þjónusta og ský-ERP valkostir eru metnir á raunverulegum stöðlunar-á-móti-sveigjanleika málamiðlunum.
- [ ] ERP er komið á sem eina skráakerfið, og skuggatöflureiknar eru afnumdir.

## Helstu heimildir

- NHS Shared Business Services (NHS SBS) — landsbundna Oracle-byggða fjármála- og innkaupa sameiginlega þjónustan fyrir NHS-skipulagsheildir. https://www.sbs.nhs.uk/
- Oracle, *NHS Shared Business Services with Oracle Fusion Cloud Applications* — umfang landsbundna NHS fjármálavettvangsins. https://www.oracle.com/uk/
- NHS North of England Commissioning / NEP consortium — sniðmátað Oracle Cloud ERP fyrir NHS-meðlimi. https://nepcloud.nhs.uk/
- Unit4, *Public sector and healthcare ERP* — ERP fyrir NHS-samsteypur, sveitarfélög og háskóla. https://www.unit4.com/industries/public-sector-software
- HFMA (Healthcare Financial Management Association), *Introductory Guide to NHS Finance* — fjármálaferlin sem ERP undirbyggir. https://www.hfma.org.uk/
- NHS Electronic Staff Record (ESR) — vinnuafls- og launakerfi NHS sem ERP verður að samþættast. https://www.electronicstaffrecord.nhs.uk/
- Sjá einnig Viðfangsefni 5.2 — Áætlunarstýrð vinna, Viðfangsefni 5.3 — Fyrirtækjasafns- og verkefnastjórnun og Viðfangsefni 8.1 — Breytingastjórnun.

## Tilvísanir

1. Enterprise resource planning — Wikipedia — https://en.wikipedia.org/wiki/Enterprise_resource_planning
2. System of record — Wikipedia — https://en.wikipedia.org/wiki/System_of_record
3. Master data management — Wikipedia — https://en.wikipedia.org/wiki/Master_data_management
4. Chart of accounts — Wikipedia — https://en.wikipedia.org/wiki/Chart_of_accounts
5. Payroll — Wikipedia — https://en.wikipedia.org/wiki/Payroll
6. Procure-to-pay — Wikipedia — https://en.wikipedia.org/wiki/Procure-to-pay
7. Software as a service — Wikipedia — https://en.wikipedia.org/wiki/Software_as_a_service
8. Shared services — Wikipedia — https://en.wikipedia.org/wiki/Shared_services
9. Data migration — Wikipedia — https://en.wikipedia.org/wiki/Data_migration
10. Change management — Wikipedia — https://en.wikipedia.org/wiki/Change_management
11. Business process re-engineering — Wikipedia — https://en.wikipedia.org/wiki/Business_process_re-engineering
12. Electronic health record — Wikipedia — https://en.wikipedia.org/wiki/Electronic_health_record
13. NHS Shared Business Services — Wikipedia — https://en.wikipedia.org/wiki/NHS_Shared_Business_Services
14. NHS Shared Business Services — the national Oracle-based finance and procurement shared service for NHS organisations — https://www.sbs.nhs.uk/
15. NHS Shared Business Services with Oracle Fusion Cloud Applications — Oracle — https://www.oracle.com/uk/
16. Public sector and healthcare ERP — Unit4 — https://www.unit4.com/industries/public-sector-software
17. Introductory Guide to NHS Finance — HFMA — https://www.hfma.org.uk/
18. NHS Electronic Staff Record (ESR) — the NHS workforce and payroll system ERP must integrate with — https://www.electronicstaffrecord.nhs.uk/
