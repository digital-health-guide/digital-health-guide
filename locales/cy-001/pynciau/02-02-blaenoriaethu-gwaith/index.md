# Pwnc 2.2 — Blaenoriaethu Gwaith

**Mewn un frawddeg:** Blaenoriaethu yw trefnu bwriadol, tryloyw y gwaith a oroesodd frysbennu — gan gydbwyso gwerth, brys, risg ac ymdrech yn erbyn capasiti cyfyngedig — fel bod y sefydliad ar unrhyw adeg yn gwneud y pethau mwyaf gwerthfawr y gall, ac yn gallu egluro pam.

## Pam mae hyn yn bwysig ym maes iechyd a gofal

Blaenoriaethu yw lle mae strategaeth yn dod yn real. Nid cynllun cyhoeddedig sefydliad yw ei wir strategaeth ond y drefn y mae'n gwneud pethau ynddi mewn gwirionedd — ac ym maes iechyd a gofal mae'r drefn honno'n cario canlyniadau i ddiogelwch, tegwch ac arian cyhoeddus. Gostyngwch flaenoriaeth y gwaith rhyngweithredadwyedd ac mae cofnod gofal a rennir yn arafu; gostyngwch flaenoriaeth dyled dechnegol ac mae system yn methu am 2 y bore ar ŵyl y banc; gostyngwch flaenoriaeth y trwsiad hygyrchedd ac rydych yn allgáu'r bobl sydd angen y gwasanaeth fwyaf.

Mae'r pwysau'n strwythurol: mae galw bob amser yn fwy na chapasiti, ac mae llawer o'r galw hwnnw'n ddilys. Felly mae angen dulliau ar arweinwyr sy'n gwneud cyfnewidiadau'n eglur ac yn amddiffynadwy, nid proses lle mae'r e-bost olaf yn ennill neu bob prosiect yn "brif flaenoriaeth." Mae blaenoriaethu tryloyw hefyd yn newid y tywydd gwleidyddol: pan all rhanddeiliaid weld y meini prawf a'r drefn, mae trafod yn symud o lobïo i sgwrs a rennir am werth a chost oedi. Mae'r pwnc hwn yn dilyn derbyn (Pwnc 2.0) a brysbennu (Pwnc 2.1); mae'n tybio bod gennych eisoes ôl-groniad gweladwy, wedi'i asesu i'w drefnu, ac mae'n bwydo'r cylch bywyd darparu (Pynciau 3.4–8) a rheoli portffolio (Pwnc 5.3 — EPPM).

## Cysyniadau craidd

Mae **[blaenoriaethu](https://en.wikipedia.org/wiki/Prioritization)** yn trefnu ôl-groniad neu bortffolio; mae'n wahanol i frysbennu (a asesodd ac a gyfeiriodd bob eitem ar wahân). Mae blaenoriaethu yn cymharu eitemau *yn erbyn ei gilydd* ar gyfer capasiti cyfyngedig, ac yn ailwneud y gymhariaeth honno wrth i realiti newid.

**[Cost Oedi](https://en.wikipedia.org/wiki/Cost_of_delay)** (Cost of Delay) yw'r lens economaidd sydd o dan y dulliau gorau: beth mae'n ei gostio — o ran gwerth, niwed neu arian — am bob wythnos *nad* yw hyn yn cael ei wneud? Mae gwneud cost oedi'n eglur yn ailfframio blaenoriaethu o "beth sydd bwysicaf?" (popeth) i "beth sydd ddrutaf i'w ohirio?" (cwestiwn y gellir ei raddio).

**Fframweithiau cyffredin**, pob un â'i ffit:

- **WSJF (Weighted Shortest Job First)**, o'r [Scaled Agile Framework](https://en.wikipedia.org/wiki/Scaled_agile_framework) (SAFe): sgoriwch Gost Oedi (gwerth defnyddiwr/busnes + hanfodoldeb amser + lleihau risg/galluogi cyfle) a rhannwch â maint y gwaith. Gwneir y WSJF uchaf yn gyntaf. Mae'n naturiol yn ffafrio gwaith bach, o werth uchel, sy'n hanfodol o ran amser, ac yn anwybyddu cost suddedig.
- **RICE** (Cyrhaeddiad × Effaith × Hyder ÷ Ymdrech, a boblogeiddiwyd gan Intercom): sgôr rheoli cynnyrch sy'n lliniaru brwdfrydedd â ffactor Hyder.
- **[MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method)** (Must / Should / Could / Won't-this-time, sef Rhaid / Dylai / Gallai / Ddim y tro hwn), o [DSDM](https://en.wikipedia.org/wiki/Dynamic_systems_development_method): categoreiddio, rhagorol ar gyfer cwmpasu datganiad neu raglen dyddiad penodol, yn wannach fel trefn fanwl.
- **Gwerth yn erbyn ymdrech** (2×2): y ffordd weledol gyflym o sylwi ar enillion cyflym a phyllau arian; yn fras ond yn gyflym.
- **[Model Kano](https://en.wikipedia.org/wiki/Kano_model)**: yn dosbarthu nodweddion fel rhai sylfaenol (rhaid eu cael), perfformiad, neu ryfeddodau — defnyddiol ar gyfer cydbwyso'r hanfodion yn erbyn gwahaniaethwyr.

Nid oes unrhyw fframwaith yn "gywir"; mae pob un yn ymgorffori diffiniad gwahanol o werth, ac mae'r weithred o sgorio gyda'ch gilydd yn aml yn fwy gwerthfawr na'r rhif.

**Rhedeg yn erbyn newid** yw'r cydbwysedd ar lefel portffolio: gwaith gweithredol "cadw'r goleuadau ymlaen" (rhedeg) yn erbyn gallu newydd (newid). Rhaid i flaenoriaethu rychwantu'r ddau, neu mae'r gwaith rhedeg anweledig — gan gynnwys **[dyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt)** ac **adfer diogelwch/seiberddiogelwch** — yn colli pob cystadleuaeth yn erbyn nodweddion newydd sgleiniog nes ei fod yn methu'n drychinebus.

**Yn seiliedig ar gapasiti yn erbyn yn seiliedig ar ddyddiad**: mae trefnu sy'n seiliedig ar gapasiti yn llenwi trwybwn hysbys, cyfyngedig (cyflymder cynaliadwy); mae trefnu sy'n seiliedig ar ddyddiad yn gweithio am yn ôl o derfyn amser na ellir ei symud (mynd yn fyw rheoleiddiol) ac yn defnyddio MoSCoW i hyblygu cwmpas. Mae angen y ddau ar y rhan fwyaf o bortffolios, wedi'u cymhwyso at eitemau gwahanol.

## Arferion gorau

1. **Dewiswch un prif fframwaith a'i gymhwyso'n gyson.** Dewiswch y dull sy'n gweddu i'ch gwaith — WSJF ar gyfer portffolio newid cymysg â hanfodoldeb amser gwirioneddol, RICE ar gyfer ôl-groniadau nodweddion cynnyrch, MoSCoW ar gyfer datganiadau dyddiad penodol — a'i ddefnyddio'n gyson fel bod sgoriau'n gymaradwy. Mae newid fframweithiau fesul eitem yn gwneud yr ôl-groniad yn anghymaradwy ac yn gwahodd chwarae'r system.

2. **Gwnewch Gost Oedi yn eglur, yn enwedig ar gyfer gwaith diogelwch a statudol.** Gofynnwch am bob eitem, "beth mae oedi o fis yn ei gostio?" Ar gyfer trwsiad diogelwch neu derfyn amser rheoleiddiol mae'r ateb yn aml yn ddifrifol ac yn aflinol, a dyna'n union pam y mae'n rhaid eu sgorio, nid eu tybio. Cost Oedi yw'r arian cyfred cyffredin sy'n gadael i derfyn amser cydymffurfedd a gwelliant profiad defnyddiwr gael eu cymharu'n onest.

3. **Neilltuwch gapasiti eglur ar gyfer rhedeg, dyled dechnegol a diogelwch.** Peidiwch â gadael i waith cadw'r goleuadau ymlaen, dyled dechnegol, ac adfer diogelwch/seiberddiogelwch gystadlu nodwedd wrth nodwedd â gallu newydd — byddant yn colli nes bod rhywbeth yn torri. Neilltuwch ganran sefydlog o gapasiti'n ddiogel (rheol gyffredin yw darn ystyrlon, a ddiogelir) ar gyfer y gwaith hwn, a'i drin fel un diamod.

4. **Blaenoriaethwch ar sail canlyniadau a gwerth, nid safle'r ceisydd.** Sgoriwch yn erbyn canlyniadau a blaenoriaethau datganedig y sefydliad (yn ddelfrydol ei [OKRs](https://en.wikipedia.org/wiki/Objectives_and_key_results) — gweler Pwnc 10.0) yn hytrach na phwy a ofynnodd. Pan fo eitem uwch randdeiliad yn sgorio'n isel, dyna'r system yn gweithio; mae'r fframwaith yn rhoi sail deg, anbersonol i chi gael y sgwrs honno.

5. **Cydweddwch y dull â'r cyfyngiad: capasiti neu ddyddiad.** Ar gyfer llif cynaliadwy o newid, trefnwch yn ôl gwerth a thynnwch waith i gapasiti hysbys. Ar gyfer dyddiad na ellir ei symud, gweithiwch am yn ôl a defnyddiwch MoSCoW i warchod y "Rhaid" a hyblygu'r "Gallai." Cymysgu'r ddau — ceisio ffitio cwmpas sefydlog i amser sefydlog a chapasiti sefydlog — yw'r llwybr clasurol at raglen fethedig.

6. **Blaenoriaethwch yn dryloyw a thrafodwch yn yr agored.** Cyhoeddwch yr ôl-groniad wedi'i raddio a'r sgorio y tu ôl iddo. Mae tryloywder yn troi blaenoriaethu o gyfres o gytundebau preifat yn drafodaeth a rennir lle mae cyfnewidiadau'n weladwy: i symud eich eitem i fyny, rhaid i rywbeth arall symud i lawr, a gall pawb weld y gost. Dyma'r symudiad dad-wleidyddoli unigol mwyaf pwerus sydd ar gael i arweinydd darparu.

7. **Ailflaenoriaethwch ar gylch rheolaidd — a dim ond bryd hynny.** Pennwch rythm (er enghraifft adolygiad portffolio misol neu chwarterol, ynghyd â mireinio ôl-groniad ysgafnach rhyngddynt) lle caiff blaenoriaethau eu hailystyried yn erbyn tystiolaeth newydd. Rhwng adolygiadau, daliwch y llinell fel y caiff timau redfeydd sefydlog. Mae ailflaenoriaethu cyson mor niweidiol ag peidio byth ag ailflaenoriaethu — mae'n dinistrio llif ac yn gorffen dim.

8. **Gwarchodwch rhag chwarae'r system a manylder ffug.** Amcangyfrifon yw sgoriau cymharol (Fibonacci, meintiau crys-T), nid gwirioneddau; nid yw WSJF o 8.3 yn well mewn modd ystyrlon na 7.9. Defnyddiwch y rhifau i *hysbysu* sgwrs wedi'i graddio, gwyliwch am fewnbynnau chwyddedig, a gadewch i farn brofiadol drechu sgôr amlwg wrthnysig — wrth gofnodi pam.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Beth yw ein hateb gonest i "beth mae oedi o fis yn ei gostio mewn gwirionedd?" ar gyfer y gwaith rydym yn dal i'w ohirio?**
   Cost oedi yw'r arian cyfred cyffredin sy'n gadael i derfyn amser cydymffurfedd a mân newid profiad defnyddiwr gael eu cymharu'n onest, ac eto nid yw'r rhan fwyaf o sefydliadau byth yn ei wneud yn eglur ac felly maent yn dychwelyd i'r rhagosodiad "mae popeth yn bwysig" — nad yw'n ddatganiad y gellir ei raddio. Mae hyn yn bwysig yn ddirfawr ym maes iechyd a gofal oherwydd bod cost oedi rhai mathau o waith yn ddifrifol ac yn aflinol: gall trwsiad diogelwch neu ddibyniaeth rhyngweithredadwyedd a ohiriwyd eistedd yn ddiniwed am fisoedd ac yna fethu'n drychinebus, tra bo nodwedd hwylustod a ohiriwyd yn costio bron dim. Dylai'r tîm drafod a allant fynegi'r gost oedi ar gyfer eu heitemau dadleuol uchaf mewn gwirionedd, ac wynebu'r achosion anghyfforddus lle mai'r ateb gonest yw "ychydig iawn" i brosiect poblogaidd a "digwyddiad difrifol o bosibl" i un anweledig. Onglau pendant: cymerwch dair eitem sydd ar hyn o bryd yn sownd yng nghanol yr ôl-groniad a gorfodwch frawddeg cost oedi ar gyfer pob un; gofynnwch a yw dyled dechnegol ac adfer diogelwch erioed wedi'u sgorio ar gost oedi o gwbl, neu'n syml yn colli pob cystadleuaeth drwy beidio byth â mynd i mewn iddi. Mae ateb da yn gwahaniaethu rhwng eitemau y mae eu cost oedi tua llinol a'r rhai lle mae'n bigo ar derfyn amser neu bwynt methu, ac yn defnyddio'r siâp hwnnw i gyfiawnhau'r drefn. Mae'r fersiwn anonest yn cuddio y tu ôl i "mae'r cyfan yn flaenoriaeth," sef yr union absenoldeb blaenoriaethu y bwriedir i'r cwestiwn hwn ei ddatgelu.

2. **Faint o gapasiti ydym ni'n fodlon ei neilltuo'n ddiogel ar gyfer rhedeg, dyled dechnegol a diogelwch — ac a fyddwn yn ei amddiffyn pan ddaw cynnig newydd sgleiniog?**
   Dyma'r cyfnewidiad sydd fwyaf dibynadwy'n mynd o'i le: mae gwaith cadw'r goleuadau ymlaen, dyled dechnegol, ac adfer diogelwch neu seiberddiogelwch yn anweledig ac yn colli nodwedd wrth nodwedd yn erbyn gallu newydd nes bod rhywbeth yn torri am 2 y bore ar ŵyl y banc. Nid yw'r ddadl ynghylch a ddylid gwarchod rhywfaint o gapasiti — mae bron pawb yn cytuno mewn egwyddor — ond y ganran benodol, ac, yn llawer anoddach, a fydd arweinyddiaeth yn dal y llinell honno mewn gwirionedd y tro cyntaf y bydd prosiect cyffrous uwch noddwr eisiau ysbeilio'r neilltuad. Ym maes iechyd a gofal mae'r polion yn cynnwys diogelwch cleifion a dibynadwyedd systemau y mae clinigwyr yn dibynnu arnynt, felly mae trin y darn fel un diamod yn safbwynt diogelwch, nid dim ond hylendid da. Onglau pendant: edrychwch yn ôl ar y digwyddiad mawr neu'r digwyddiad a fu bron â digwydd diwethaf a gofynnwch a yw'n olrhain at waith rhedeg neu ddyled a ohiriwyd na enillodd gystadleuaeth flaenoriaeth erioed; enwch y person ag awdurdod i wrthod ysbeilio'r capasiti a ddiogelir a phrofwch a fyddai mewn gwirionedd. Mae ateb cryf yn ymrwymo i ddarn penodol, a ddiogelir ac, yn hollbwysig, yn disgrifio'r llywodraethiant sy'n ei gadw wedi'i ddiogelu dan bwysau yn hytrach nag ymddiried mewn bwriadau da. Mae'r fersiwn onest yn cyfaddef mai dim ond os yw'n goroesi cyswllt â'r rhanddeiliad mwyaf pwerus yn yr ystafell y mae'r neilltuad yn real.

3. **Pan fo eitem uwch randdeiliad yn sgorio'n isel, a oes gennym y tryloywder a'r dewrder i adael i'r drefn sefyll?**
   Mae blaenoriaethu ar sail canlyniadau yn hytrach na safle'r ceisydd yn swnio'n amlwg, ond effaith HiPPO — Barn y Person â'r Cyflog Uchaf yn trechu'r sgorio'n dawel — yw'r methiant rhagosodedig mewn lleoliadau hierarchaidd y GIG a'r llywodraeth, ac mae'n gyrydol yn union oherwydd ei fod yn dawel. Y tensiwn yw bod eitem uwch sy'n sgorio'n isel yn aml yn dangos y system yn gweithio'n gywir, ac eto heb drefn gyhoeddedig dryloyw a'i rhesymeg sgorio, nid oes gan yr arweinydd darparu unrhyw sail anbersonol i gael y sgwrs honno ac fel arfer bydd yn plygu. Dylai'r tîm drafod a yw eu hôl-groniad a'u sgoriau'n wirioneddol weladwy i'r sefydliadau sy'n gofyn, oherwydd mai trafod cyfnewidiadau yn yr agored — "i symud eich un chi i fyny, pa eitem sy'n sgorio'n uwch sy'n symud i lawr, ac a ydych yn gyfforddus â chost yr oedi hwnnw?" — yw'r symudiad dad-wleidyddoli unigol mwyaf pwerus sydd ar gael, a dim ond yn yr agored y mae'n gweithio. Onglau pendant: cofiwch y tro diwethaf y neidiodd cais uwch y ciw a gofynnwch beth fyddai wedi digwydd pe bai'r drefn wedi bod yn gyhoeddus; ystyriwch gadw'r rhesymeg sgorio fel cofnod llywodraethiant y gallech ei ddangos i fwrdd, ICB neu archwilwyr. Mae ateb da yn pârio tryloywder (cyhoeddi'r drefn a'r sgoriau) â sgript anbersonol, ymarferedig ar gyfer y sgwrs diystyru, ac yn nodi pwy sydd â'r statws i'w dal. Mae'r ateb ymosgoi yn trin hyn fel rhywbeth damcaniaethol; mewn gwirionedd mae'n digwydd y rhan fwyaf o wythnosau, ac mae angen i'r cynllun ei oroesi.

4. **A ydym wedi ymrwymo i un fframwaith blaenoriaethu mewn gwirionedd, neu a ydym yn sgorio pob eitem yn dawel yn ôl pa ddull bynnag sy'n ei gweniaethu?**
   Dewis un prif fframwaith a'i gymhwyso'n gyson yw'r hyn sy'n gwneud ôl-groniad yn gymaradwy; y funud y defnyddir WSJF ar gyfer un cynnig, pwl gwerth-yn-erbyn-ymdrech ar gyfer un arall, a "mae'r cyfarwyddwr eisiau hyn yn fawr" ar gyfer trydydd, mae'r drefn yn rhoi'r gorau i olygu dim ac mae chwarae'r system yn ymlusgo i mewn. Y tensiwn yw nad oes unrhyw fframwaith unigol yn gweddu i bob math o waith — mae WSJF yn gweddu i bortffolio newid cymysg, RICE i ôl-groniad nodweddion cynnyrch, MoSCoW i ddatganiad dyddiad penodol — felly'r ddadl onest yw pa un yw eich *prif* ddull a ble caniateir ail un yn ddilys yn hytrach nag fel ffordd ddihangfa gyfleus. Ym maes iechyd a gofal mae hyn yn bwysig oherwydd bod rhaid pwyso terfyn amser cydymffurfedd, nodwedd a ofynnwyd gan glinigwr ac uwchraddio cronfa ddata ar yr un raddfa, a dim ond dull cyson sy'n gadael i eitem statudol ac eitem hwylustod gael eu graddio yn erbyn ei gilydd heb ymbil arbennig. Onglau pendant: archwiliwch y dwsin penderfyniad blaenoriaethu diwethaf a gwiriwch a gymhwyswyd yr un dull mewn gwirionedd, neu a symudodd y dull i gyfiawnhau ateb a bennwyd ymlaen llaw; gwyliwch am "theatr fframwaith," lle mae sgorio manwl yn cynhyrchu rhif nad oes neb wedyn yn gweithredu arno. Mae ateb da yn enwi'r prif fframwaith, yn egluro'r achosion cul, egwyddorol y defnyddir un arall ynddynt, ac yn trin y sgôr fel un sy'n hysbysu sgwrs wedi'i graddio yn hytrach na gwirionedd. Mae'r ateb gwan yn gadael i bob ceisydd ddod â'i fathemateg ei hun, sy'n anwahanadwy oddi wrth beidio â chael dull o gwbl.

5. **A ydym yn onest ynghylch pa waith sy'n rhwym wrth gapasiti a pha un sy'n rhwym wrth ddyddiad — neu a ydym yn ceisio gosod cwmpas, dyddiad a chapasiti i gyd ar unwaith?**
   Rhaid i flaenoriaethu gydweddu â'r cyfyngiad: caiff llif cynaliadwy o newid ei drefnu yn ôl gwerth a'i dynnu i gapasiti hysbys, tra bo mynd yn fyw rheoleiddiol na ellir ei symud yn cael ei weithio am yn ôl o'r dyddiad â MoSCoW yn gwarchod y "Rhaid" ac yn hyblygu'r "Gallai." Y llwybr clasurol at raglen fethedig yw cymysgu'r ddau — cloi cwmpas, dyddiad a chapasiti ar yr un pryd — ac mae'n arbennig o hudolus ym maes iechyd a gofal, lle mae terfyn amser statudol yn teimlo'n ddiamod ac mae rhanddeiliaid yn tybio bod y cwmpas llawn yr un mor ddiamod. Dylai'r tîm drafod, eitem wrth eitem, a yw pob darn mawr o waith yn rhwym wrth gapasiti neu wrth ddyddiad mewn gwirionedd, oherwydd bod trin rhaglen a yrrir gan ddyddiad fel pe bai ganddi amser elastig, neu lif busnes-fel-arfer fel pe bai ganddo derfyn amser caled, yn camflaenoriaethu popeth i lawr yr afon. Onglau pendant: cymerwch fynd yn fyw na ellir ei symud a gofynnwch pa ofynion sy'n wirioneddol yn "Rhaid" ar gyfer y lleiafswm cyfreithiol yn erbyn "Dylai" neu "Gallai" a smyglwyd i'r set orfodol; chwiliwch am y rhaglen lle mae'r tri chyfyngiad wedi'u gosod yn dawel ac enwch beth fydd yn ildio mewn gwirionedd pan fydd realiti'n brathu. Mae ateb da yn dosbarthu gwaith yn ôl ei gyfyngiad rhwymol ac yn cymhwyso'r dull cyfatebol yn fwriadol, gan gadw llif sy'n seiliedig ar gapasiti a darparu sy'n seiliedig ar ddyddiad fel disgyblaethau ar wahân. Mae'r ateb afrealistig yn addo cwmpas llawn, ar y dyddiad penodedig, o fewn capasiti sefydlog, ac yn gobeithio.

6. **Beth yw ein rhythm ailflaenoriaethu, ac a oes gennym y ddisgyblaeth i ddal y drefn yn gyson rhwng adolygiadau?**
   Rhaid ailystyried blaenoriaethau yn erbyn tystiolaeth newydd, ond ar rythm — adolygiad portffolio misol neu chwarterol gyda mireinio ysgafnach rhyngddynt — oherwydd bod ailflaenoriaethu cyson mor niweidiol ag peidio byth ag ailflaenoriaethu: mae'n dinistrio llif ac yn gorffen dim. Mae'r tensiwn yn real: mae realiti'n newid mewn gwirionedd, a gall signal diogelwch newydd neu newid cyllid gyfiawnhau ailddosbarthu, ac eto mae pob ad-drefnu canol-hedfan yn costio eu rhedfa i dimau ac yn gadael gwaith hanner-adeiledig ar ei hyd. Ym maes iechyd a gofal, lle mae timau darparu'n aml dan bwysau a dibyniaethau'n rhychwantu sawl sefydliad, mae newid cyfeiriad yn gyson yn ddrud ac yn sugno morâl, felly mae'r rhedfa sefydlog rhwng adolygiadau yn fater cynhyrchiant a chadw staff cymaint â mater darparu. Onglau pendant: gwiriwch sawl gwaith y chwarter diwethaf y newidiodd brig yr ôl-groniad y tu allan i adolygiad wedi'i drefnu, a beth a ddarparwyd o ganlyniad; cytunwch ymlaen llaw ar y meini prawf cul — argyfwng gwirioneddol, nid rhanddeiliad swnllyd — sy'n cyfiawnhau torri'r rhythm. Mae ateb da yn gosod rhythm eglur, yn amddiffyn y rhedfa rhwng adolygiadau, a gall bwyntio at waith a orffennodd mewn gwirionedd oherwydd bod y drefn wedi dal. Mae'r ateb sy'n methu'n ailflaenoriaethu pryd bynnag y bydd yr e-bost olaf yn glanio, gan gamgymryd symudiad am ymatebolrwydd tra nad oes dim yn croesi'r llinell.

## Yn ymarferol: enghraifft iechyd a gofal

Roedd tîm portffolio digidol ICB yn wynebu deuddeg cynnig yn cystadlu a chapasiti ar gyfer pump efallai. Yn hanesyddol roedd y drefn wedi dilyn hynafedd sefydliadol, ac nid oedd dyled dechnegol yn ymddangos o gwbl. Mabwysiadodd y tîm WSJF ar gyfer gwaith newid a neilltuo darn sefydlog o gapasiti'n ddiogel ar gyfer rhedeg, dyled dechnegol a diogelwch.

Sgoriwyd pob cynnig gyda'i gilydd — gwerth busnes, hanfodoldeb amser, lleihau risg/galluogi cyfle, a maint y gwaith — mewn un sesiwn gyda lleisiau darparu, clinigol ac ariannol. Sgoriodd terfyn amser dychweliadau data statudol yn uchel iawn ar hanfodoldeb amser a, chan ei fod yn gymedrol o ran maint, cododd i'r brig ar WSJF. Sgoriodd platfform dadansoddeg mawr, poblogaidd yn dda ar werth ond gwthiodd ei faint ef i lawr y drefn — canlyniad a fyddai wedi bod yn annychmygol o dan raddio ar sail hynafedd, ac a wnaeth y fframwaith yn amddiffynadwy. Ariannwyd uwchraddio cronfa ddata a ohiriwyd ers tro, yn anweledig o'r blaen, o'r darn rhedeg a neilltuwyd cyn y gallai fethu.

Yn hollbwysig, rhannwyd yr ôl-groniad wedi'i raddio a'i sgoriau â'r holl sefydliadau a oedd yn gofyn. Pan wthiodd un ymddiriedolaeth i'w chynnig neidio'r ciw, nid "pwy ydych chi'n ei adnabod?" oedd y sgwrs ond "pa un o'r eitemau hyn sy'n sgorio'n uwch a ddylai symud i lawr, ac a ydych yn gyfforddus â chost yr oedi hwnnw?" Digwyddodd y trafod yn yr agored, a gallai'r ICB ddangos i'w fwrdd fod y drefn yn adlewyrchu gwerth a chost oedi, nid gwleidyddiaeth.

## Golwg drwy wahanol sectorau

### Busnes newydd

Mae busnes newydd iechyd digidol a gyfyngir gan arian yn blaenoriaethu yn erbyn y cyfnod y gall yr arian bara uwchlaw popeth, felly dylai ei ddull trefnu fod yn ysgafn ac yn arwain gan werth — 2×2 gwerth-yn-erbyn-ymdrech neu sgôr RICE syml sydd fel arfer yn ddigon, ac mae peirianwaith WSJF manwl yn orwneud ar gyfer ôl-groniad o ddeg ar hugain o eitemau. Mae'r gost oedi amlycaf yn ddirfodol: gall methu'r dystiolaeth y mae gwerthusiad NICE neu brif gwsmer ei hangen ddod â'r cwmni i ben, sy'n graddio'n llawer uwch na nodwedd ddymunol. Y ddisgyblaeth anoddaf yw neilltuo unrhyw gapasiti ar gyfer dyled dechnegol ac adfer diogelwch pan fo pob wythnos yn sgrechian am y nodwedd refeniw nesaf, ac eto hepgor hyn yn llwyr sy'n achosi i gynnyrch ifanc ymgloi yn union wrth iddo raddio. Mae ailflaenoriaethu'n aml ac a yrrir gan y sylfaenydd, felly'r risg yw newid cyfeiriad yn gyson — y gwrthgyffur yw dal drefn sefydlog am sbrint byr o leiaf fel y bydd rhywbeth yn cael ei ryddhau.

### Busnes bach

Mae darparwr bach sefydledig — practis meddyg teulu, fferyllfa gymunedol, cartref gofal neu glinig un safle — yn blaenoriaethu heb fawr o le i symud: mae'r un llond llaw o bobl yn rhedeg y gwasanaeth ac unrhyw waith newid, felly mae'n rhaid i drefnu fod yn eithriadol o syml, ac mae 2×2 gwerth-yn-erbyn-ymdrech y gall unrhyw un yn y tîm ei ddarllen yn werth mwy na model sgorio nad oes gan neb amser i'w gynnal. Fel arfer mae'r gost oedi amlycaf yn statudol neu a yrrir gan ddiogelwch — terfyn amser pecyn cymorth diogelwch data, trwsiad diogelwch clinigol, uwchraddio system gorfodol gan gyflenwr cenedlaethol — a rhaid i'r rhain eistedd ar y brig oherwydd bod darparwr bach yn cario'r un dyletswyddau ag ymddiriedolaeth fawr heb yr adnoddau i amsugno methiant. Mae gwelliannau dewisol yn cystadlu'n wirioneddol â rhedeg y gwasanaeth, felly'r ddisgyblaeth onest yw gwarchod darn bach, rheolaidd o amser ar gyfer y gwaith rhedeg ac adfer diamod yn hytrach na gadael iddo golli bob wythnos i alw sy'n wynebu cleifion. Gyda gallu TG penodedig tenau neu ddim, mae llawer o'r "sut" yn cael ei osod gan gyflenwyr a chontractau fframwaith, felly mae blaenoriaethu'n aml yn ymwneud â dilyniannu newidiadau a yrrir gan gyflenwyr a'r ychydig bethau y gall y practis eu rheoli, a dal trefn gyson yn ddigon hir i rywbeth orffen rhwng un wythnos brysur a'r nesaf.

### Menter fawr

Mae ymddiriedolaeth GIG neu ICS yn rhedeg portffolio newid cymysg â hanfodoldeb amser gwirioneddol a rhwymedigaethau rhedeg trwm, sef yn union y siâp y cynlluniwyd WSJF a darn rhedeg/dyled dechnegol/diogelwch a neilltuwyd yn ddiogel ar ei gyfer. Y wleidyddiaeth yw'r her wirioneddol: sawl sefydliad noddi, pwysau HiPPO, a disgwyliadau etifeddol bod hynafedd yn gosod y drefn, felly tryloywder yr ôl-groniad wedi'i raddio a'i sgoriau yw prif offeryn dad-wleidyddoli'r fenter. Mae blaenoriaethu yma'n rhychwantu swyddfa bortffolio ac yn gorfod cysoni llif sy'n seiliedig ar gapasiti ar gyfer newid busnes-fel-arfer â rhaglenni sy'n seiliedig ar ddyddiad sy'n gweithio am yn ôl o fynd yn fyw rheoleiddiol na ellir ei symud, gan hyblygu cwmpas drwy MoSCoW. Gan fod yn rhaid i ymddiriedolaeth ddangos gwerth am arian i'w bwrdd, ICB ac archwilwyr, cedwir y rhesymeg sgorio fel cofnod llywodraethiant, nid ei daflu unwaith y gwneir y penderfyniad.

### Llywodraeth

Yn GIG Lloegr, yr Adran Iechyd a Gofal Cymdeithasol, neu lywodraeth ddatganoledig, rheoli portffolio ar raddfa genedlaethol yw blaenoriaethu, wedi'i ffurfioli drwy Reoli Portffolios (MoP) a model pum achos y Trysorlys, lle mesurir cost oedi o ran iechyd y boblogaeth, cydymffurfedd statudol a biliynau o bunnoedd. Mae llawer o'r portffolio'n anwirfoddol — dychweliadau gorfodol, terfynau amser cyfreithiol, ymrwymiadau gweinidogol — felly rhaid i'r dull raddio'r *sut* a'r *pryd* ar gyfer gwaith a orfodir yn hytrach na *ph'un ai* ei wneud, a rhaglenni dyddiad na ellir ei symud sy'n dominyddu. Mae archwaeth risg yn isel a chraffu'n wrthwynebus: bydd y Swyddfa Archwilio Genedlaethol a'r Pwyllgor Cyfrifon Cyhoeddus yn profi a oedd y drefn yn adlewyrchu gwerth a chost oedi neu ond cyfleustra gwleidyddol, felly mae sail flaenoriaethu eglur, gyhoeddedig yn amddiffyniad cymaint ag yn offeryn rheoli. Mae tegwch yn ddimensiwn statudol o werth, felly dylai model sgorio'r llywodraeth bwyso effaith ar y poblogaethau a wasanaethir leiaf, nid dim ond y budd cyfanredol, neu bydd yn ffafrio'r rhai a wasanaethir yn dda eisoes yn systematig.

## Ffyrdd cyffredin o fethu

- **Mae popeth yn flaenoriaeth un.** Nid oes unrhyw drefn go iawn yn bodoli, felly mae'r llais uchaf neu'r terfyn amser agosaf yn llywodraethu. *Ateb:* gorfodwch drefn lem; ni chaniateir cyfartaleddau ar y brig.
- **Rhedeg a dyled dechnegol bob amser yn colli.** Mae gwaith gweithredol ac adfer anweledig yn cael ei amddifadu nes ei fod yn methu. *Ateb:* capasiti wedi'i neilltuo a'i ddiogelu.
- **Diystyru HiPPO.** Mae Barn y Person â'r Cyflog Uchaf yn diystyru'r sgorio'n dawel bob tro. *Ateb:* sgoriau tryloyw a thrafod cyfnewidiadau yn yr agored.
- **Theatr fframwaith.** Mae sgorio manwl yn cynhyrchu rhif nad oes neb yn gweithredu arno. *Ateb:* gadewch i'r sgôr hysbysu trefn wedi'i graddio y gweithredir arni mewn gwirionedd.
- **Cwmpas sefydlog + dyddiad sefydlog + capasiti sefydlog.** Pob un o'r tri chyfyngiad wedi'u cloi, sy'n gwarantu methiant. *Ateb:* hyblygwch gwmpas drwy MoSCoW, neu gapasiti, neu ddyddiad.
- **Newid cyfeiriad yn gyson.** Mae blaenoriaethau'n newid yn wythnosol; nid oes dim yn gorffen. *Ateb:* cylch ailflaenoriaethu penodedig a rhedfeydd sefydlog rhyngddynt.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
|---|---|---|---|---|---|
| **Dull a sail** | Dim dull; trefn yn ôl hynafedd neu derfyn amser | Fframwaith a ddefnyddir yn anghyson neu ar gyfer rhywfaint o waith yn unig | Un prif fframwaith wedi'i gymhwyso'n gyson; Cost Oedi'n cael ei hystyried | Mewnbynnau sgorio'n cael eu llywodraethu a'u graddnodi; penderfyniadau blaenoriaethu'n cael eu mesur yn erbyn canlyniadau datganedig | Fframwaith wedi'i diwnio i ganlyniadau/OKRs; dulliau sy'n seiliedig ar gapasiti a dyddiad yn cael eu defnyddio'n fwriadol |
| **Cydbwysedd rhedeg/newid a dyled dechnegol** | Rhedeg a dyled dechnegol yn anweledig; dim ond gwaith newydd yn cael ei ariannu | Peth ymwybyddiaeth o redeg/dyled ond dim capasiti a ddiogelir | Capasiti wedi'i neilltuo'n ddiogel ar gyfer rhedeg, dyled dechnegol a diogelwch | Darn a ddiogelir yn cael ei olrhain fel metrig; adfer rhedeg/dyled a diogelwch wedi'i sicrhau yn erbyn targed | Cydbwysedd rhedeg/newid yn cael ei reoli'n weithredol a'i adolygu yn erbyn gwerth |
| **Tryloywder a rhythm** | Blaenoriaethau'n anhryloyw; yn newid yn ymatebol ac yn gyson | Ôl-groniad yn weladwy'n rhannol; adolygiadau afreolaidd | Ôl-groniad wedi'i raddio wedi'i gyhoeddi; rhythm ailflaenoriaethu sefydlog | Cadw at y rhythm a newid ailflaenoriaethu'n cael eu holrhain; rhesymeg sgorio'n cael ei chadw fel cofnod llywodraethedig ar gyfer byrddau ac archwilwyr | Trafod cyfnewidiadau yn yr agored yw'r norm; rhythm yn sefydlog; sgoriau'n cael eu gwirio'n rheolaidd yn erbyn canlyniadau |

## Rhestr wirio

- [ ] Dewisir un prif fframwaith blaenoriaethu a'i gymhwyso'n gyson.
- [ ] Gwneir Cost Oedi yn eglur, yn enwedig ar gyfer gwaith diogelwch a statudol.
- [ ] Neilltuir capasiti'n ddiogel ar gyfer rhedeg, dyled dechnegol a gwaith diogelwch/seiberddiogelwch.
- [ ] Sgorir eitemau yn erbyn canlyniadau/OKRs, nid hynafedd y ceisydd.
- [ ] Defnyddir dulliau sy'n seiliedig ar gapasiti a dyddiad ar gyfer yr eitemau cywir.
- [ ] Cyhoeddir yr ôl-groniad wedi'i raddio a'i sgorio i randdeiliaid.
- [ ] Trafodir cyfnewidiadau yn yr agored: i symud un i fyny, mae un arall yn symud i lawr.
- [ ] Ailflaenoriaethir ar gylch penodedig, gyda rhedfeydd sefydlog rhyngddynt.
- [ ] Trinir sgoriau fel amcangyfrifon; gwylir am chwarae'r system a manylder ffug.
- [ ] Gellir egluro ac amddiffyn y drefn gyfredol i'r bwrdd.

## Prif ffynonellau

- Scaled Agile Framework (SAFe) — Weighted Shortest Job First (WSJF) and Cost of Delay.
- Reinertsen, D. — *The Principles of Product Development Flow* (Cost of Delay, queueing economics).
- Intercom — the RICE scoring model (Reach, Impact, Confidence, Effort).
- DSDM / Agile Business Consortium — MoSCoW prioritisation.
- Kano, N. — the Kano model of customer satisfaction.
- Cabinet Office / AXELOS — Management of Portfolios (MoP) — portfolio prioritisation and balance.
- NHS Digital Service Standard & GOV.UK Service Manual — prioritising the most important user needs; OKRs (Doerr, *Measure What Matters*) for outcome alignment.

## Cyfeiriadau

1. Prioritization — Wikipedia — https://en.wikipedia.org/wiki/Prioritization
2. Cost of delay — Wikipedia — https://en.wikipedia.org/wiki/Cost_of_delay
3. Scaled agile framework — Wikipedia — https://en.wikipedia.org/wiki/Scaled_agile_framework
4. MoSCoW method — Wikipedia — https://en.wikipedia.org/wiki/MoSCoW_method
5. Dynamic systems development method — Wikipedia — https://en.wikipedia.org/wiki/Dynamic_systems_development_method
6. Kano model — Wikipedia — https://en.wikipedia.org/wiki/Kano_model
7. Technical debt — Wikipedia — https://en.wikipedia.org/wiki/Technical_debt
8. Objectives and key results — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
9. Weighted Shortest Job First (WSJF) and Cost of Delay — Scaled Agile Framework (SAFe) — https://framework.scaledagile.com/wsjf
10. Reinertsen, D. — *The Principles of Product Development Flow* — Celeritas Publishing — https://www.celeritas.com/
11. The RICE scoring model (Reach, Impact, Confidence, Effort) — Intercom — https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
12. MoSCoW prioritisation — DSDM / Agile Business Consortium — https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html
13. Management of Portfolios (MoP) — AXELOS / Cabinet Office — https://www.axelos.com/
14. Doerr, J. — *Measure What Matters* (OKRs) — Portfolio/Penguin — https://www.whatmatters.com/
15. The Green Book: appraisal and evaluation in central government (five-case model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government
