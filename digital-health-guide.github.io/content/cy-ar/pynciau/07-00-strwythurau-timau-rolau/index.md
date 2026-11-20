# Pwnc 7.0 — Strwythurau Timau, Rolau a Chyfrifoldebau

**Mewn un frawddeg:** Mae darparu iechyd digidol yn llwyddo neu'n methu ar sut rydych yn tynnu'r ffiniau rhwng timau a pha mor glir rydych yn enwi pwy sy'n gwneud beth — felly strwythurwch dimau ar gyfer llif cyflym, diogel o werth, staffiwch hwy'n amlddisgyblaethol, a gwnewch gyfrifoldebau'n eglur.

## Pam mae hyn yn bwysig ym maes iechyd a gofal

Mae'r ffordd rydych yn trefnu eich timau'n dod yn ffordd y mae eich gwasanaethau'n ymddwyn. Nid chwilfrydedd yw **[Cyfraith Conway](https://en.wikipedia.org/wiki/Conway%27s_law)** — bod dyluniad system yn adlewyrchu strwythur cyfathrebu'r sefydliad a'i hadeiladodd — ym maes iechyd a gofal; mae'n risg diogelwch cleifion. Mae timau darniog yn cynhyrchu cofnodion gofal darniog, integreiddiadau bregus, a throsglwyddiadau lle mae risg glinigol yn cuddio.

Yn y GIG a gofal cymdeithasol rydych hefyd yn gwario arian cyhoeddus ac yn cario dyletswyddau statudol: diogelwch clinigol o dan DCB0129/DCB0160, llywodraethiant gwybodaeth o dan GDPR y DU a'r ddyletswydd cyfraith gyffredin o gyfrinachedd, a rhwymedigaethau hygyrchedd. Ni ellir ychwanegu'r dyletswyddau hyn ar y funud olaf ar y diwedd. Rhaid eu cynrychioli *y tu mewn* i'r tîm, gan bobl a enwir â'r awdurdod a'r amser i'w cyflawni.

Cael y strwythur yn iawn ac mae timau amlddisgyblaethol yn cludo meddalwedd weithredol y mae clinigwyr yn ymddiried ynddi a gall cleifion ei ddefnyddio. Ei gael yn anghywir ac mae gennych arbenigwyr prysur yn optimeiddio eu seilo eu hunain tra bo'r gwasanaeth cyfan yn arafu — y patrwm clasurol y tu ôl i raglenni digidol hwyr, dros y gyllideb, a roddir heibio'n dawel.

## Cysyniadau craidd

**[Timau amlddisgyblaethol](https://en.wikipedia.org/wiki/Interdisciplinarity) (MDTs).** Dylai tîm darparu digidol gynnwys pob disgyblaeth sydd ei hangen i ddylunio, adeiladu a rhedeg gwasanaeth heb ddibyniaeth allanol gyson — cynnyrch, darparu, dylunio, ymchwil, peirianneg, data, a'r safbwyntiau clinigol a llywodraethiant. Mae hyn yn adlewyrchu cysyniad yr MDT clinigol y mae staff yn ei adnabod eisoes: arbenigedd cymysg, atebolrwydd a rennir am ganlyniad.

**Team Topologies.** Model (Skelton a Pais) sy'n lleihau dylunio tîm effeithiol i bedwar math sylfaenol a thri dull rhyngweithio, i gyd er mwyn *llif cyflym o werth*:

- **Tîm wedi'i alinio â ffrwd** — wedi'i drefnu o amgylch un ffrwd werthfawr o waith (gwasanaeth, taith defnyddiwr, cynnyrch) ac yn berchen arni o'r dechrau i'r diwedd. Dyma'r math tîm rhagosodedig; dylai'r rhan fwyaf o bobl fod ar un.
- **Tîm platfform** — yn darparu galluoedd hunanwasanaeth mewnol (seilwaith a rennir, peiriant integreiddio, gwasanaeth mewngofnodi, API cofnod gofal a rennir) fel y gall timau wedi'u halinio â ffrwd fynd yn gyflymach heb eu hailddyfeisio.
- **Tîm galluogi** — tîm cyfyngedig o ran amser o arbenigwyr (e.e. diogelwch clinigol, hygyrchedd, awtomeiddio profion) sy'n hyfforddi eraill i godi gallu, yna'n tynnu'n ôl.
- **Tîm is-system gymhleth** — yn berchen ar ran sydd angen gwybodaeth arbenigol ddofn (algorithm sgorio risg, rhyngwyneb Asgwrn Cefn y GIG) a fyddai'n gorlwytho tîm cyffredinol.

Mae'r tri **dull rhyngweithio** yn llywodraethu sut mae unrhyw ddau dîm yn perthyn: **cydweithredu** (gweithio'n agos am gyfnod diffiniedig, lled band uchel, goddef rhywfaint o aneffeithlonrwydd i ddarganfod pethau), **X-fel-gwasanaeth** (un tîm yn defnyddio gallu un arall heb fawr o drafferth, y rhagosodiad ffrithiant isel ar raddfa), a **hwyluso** (un tîm yn helpu un arall i ddysgu). Mae enwi'r dull yn atal yr amwysedd sy'n magu oedi a beio.

**[Llwyth gwybyddol](https://en.wikipedia.org/wiki/Cognitive_load).** Gall tîm ddal cymaint yn unig yn ei ben. Mae Team Topologies yn dadlau y dylech gyfyngu ar y *parth* y mae pob tîm yn berchen arno i'r hyn y gall resymu amdano'n ddiogel — egwyddor bendant pan fo'r parth yn glinigol.

**Cyfraith Conway a'r Symudiad Conway Gwrthdro.** Gan fod pensaernïaeth yn dilyn strwythur sefydliad — golwg [sociodechnegol](https://en.wikipedia.org/wiki/Sociotechnical_system) sy'n trin timau a thechnoleg fel un dyluniad — llunnwch dimau'n fwriadol i gynhyrchu'r bensaernïaeth rydych ei eisiau. Os ydych eisiau cofnod gofal modiwlaidd, rhyngweithredol, peidiwch â'i adeiladu ag un tîm monolithig.

## Arferion gorau

1. **Staffiwch dîm amlddisgyblaethol llawn o amgylch pob gwasanaeth.** Cynhwyswch, o leiaf, reolwr cynnyrch, rheolwr darparu, ymchwilydd defnyddwyr, dylunydd gwasanaeth/rhyngweithio, peirianwyr, a gallu data/dadansoddeg, ynghyd â mewnbwn diogelwch clinigol a llywodraethiant gwybodaeth a enwir. Bydd tîm sy'n colli disgyblaeth naill ai'n aros ar rywun arall neu'n hepgor y gwaith hwnnw — a'r gwaith a hepgorir ym maes iechyd fel arfer yw diogelwch, hygyrchedd neu lywodraethiant.

2. **Gwnewch y rhan fwyaf o dimau wedi'u halinio â ffrwd a rhowch berchnogaeth o'r dechrau i'r diwedd iddynt.** Trefnwch o amgylch taith defnyddiwr (e.e. "atgyfeiriad cleifion allanol") yn hytrach nag haen dechnoleg (e.e. "y tîm cronfa ddata"). Mae perchnogaeth o'r dechrau i'r diwedd yn byrhau dolenni adborth ac yn atal y bylchau trosglwyddo lle mae risg glinigol yn cronni.

3. **Adeiladwch blatfformau fel cynhyrchion, a ddefnyddir fel gwasanaeth.** Trinwch eich peiriant integreiddio, gwasanaeth hunaniaeth, neu API cofnod gofal a rennir fel cynnyrch mewnol â'i dîm, map ffordd a defnyddwyr ei hun. Cyhoeddwch ef "fel-gwasanaeth" fel y gall timau wedi'u halinio â ffrwd hunanwasanaethu, yn hytrach na chodi tocynnau ac aros.

4. **Defnyddiwch dimau galluogi i ledaenu arbenigedd prin, nid i'w gelcio.** Mae swyddogion diogelwch clinigol, arbenigwyr hygyrchedd a pheirianwyr diogelwch yn brin. Defnyddiwch hwy i hyfforddi timau darparu i safon uwch ac yna symud ymlaen, yn hytrach na dod yn dagfa barhaol y mae pob tîm yn ciwio y tu ôl iddi.

5. **Enwch bob rôl a'i hawliau penderfynu'n benodol.** Defnyddiwch fodel cyfrifoldeb — [RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (Cyfrifol, Atebol, Ymgynghorwyd, Hysbyswyd) neu raniad symlach "penderfynwr/cynghorydd" — ar gyfer y penderfyniadau sy'n bwysig: cymeradwyo diogelwch clinigol, mynd yn fyw, cymeradwyo llywodraethiant gwybodaeth, gwariant. Amwysedd yma yw lle mae atebolrwydd yn anweddu.

6. **Rhowch awdurdod gwirioneddol ac amser gwirioneddol i'r Swyddog Diogelwch Clinigol.** Mae DCB0129/0160 yn gofyn am Swyddog Diogelwch Clinigol a enwir, wedi'i hyfforddi'n addas, a all stopio fersiwn. Gwnewch y rôl yn eglur yn y tîm, diogelwch ei hamser, a sicrhewch y gall ddweud na — mae CSO mewn enw yn unig yn fethiant llywodraethiant yn aros i gael ei ganfod gan ddigwyddiad.

7. **Rheolwch lwyth gwybyddol drwy ffinio'r parth.** Os yw tîm yn berchen ar ormod o wasanaethau neu barth clinigol rhy gymhleth, rhannwch ef. Gwyliwch am y signal: tîm na all bellach egluro'n hyderus oblygiadau diogelwch ei newid ei hun sy'n orlwythog.

8. **Cymhwyswch y Symudiad Conway Gwrthdro yn fwriadol.** Tynnwch ffiniau tîm i gyd-fynd â'r bensaernïaeth a'r rhyngweithredu rydych eu heisiau — timau modiwlaidd ar gyfer systemau modiwlaidd, seiliedig ar safonau (e.e. [HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)). Peidiwch â gadael i siart sefydliadol damweiniol ddylunio eich cofnod gofal i chi.

## Cwestiynau i'w trafod gyda'ch tîm

1. **Ble mae ein siart sefydliadol eisoes yn dylunio ein pensaernïaeth i ni — ac ai honno yw'r bensaernïaeth rydym ei eisiau mewn gwirionedd?**
   Nid yw Cyfraith Conway yn ddewisol: beth bynnag fo siâp ein timau, bydd y systemau'n dod i'w adlewyrchu, felly'r symudiad gonest cyntaf yw edrych ar y cofnod gofal, yr integreiddiadau a'r trosglwyddiadau sydd gennym eisoes a gofyn pa ffin tîm a gynhyrchodd bob gwythïen. Mewn lleoliad iechyd a gofal mae'r gwythiennau hynny'n lle mae risg glinigol yn cuddio — cofnod darniog, rhyngwyneb Asgwrn Cefn bregus, achos diogelwch nad oes unrhyw dîm yn berchen arno — felly mae hon yn sgwrs diogelwch cleifion, nid un esthetig. Y tensiwn i'w drafod yw bod ail-lunio ffiniau tîm i gael y bensaernïaeth rydym ei eisiau (y Symudiad Conway Gwrthdro) yn tarfu, yn bygwth tiriogaethau sefydledig, ac yn torri ar draws strwythurau ariannu a rheolaeth llinell na allwn eu rheoli'n llawn efallai. Ystyriwch fapio dau neu dri o'ch integreiddiadau mwyaf poenus yn ôl i'r timau sy'n berchen ar bob pen, a gofyn a fyddai ffin wedi'i halinio â ffrwd wedi dileu'r trosglwyddo'n gyfan gwbl. Mae ateb da yn enwi o leiaf un ffin goncrid y byddech yn ei symud, yn onest pwy fyddai'n gwrthsefyll a pham, ac yn gwahaniaethu newidiadau sy'n werth y tarfu oddi wrth y rhai lle byddai rhyngwyneb fel-gwasanaeth yn trwsio'r ffrithiant yn rhatach.

2. **A yw ein harbenigwyr prin — diogelwch clinigol, llywodraethiant gwybodaeth, hygyrchedd — yn eistedd y tu mewn i dimau ag awdurdod go iawn, neu a ydynt yn byrth allanol y mae pawb yn ciwio y tu ôl iddynt?**
   Mae pob gwasanaeth yn y teulu hwn yn cario dyletswyddau statudol (diogelwch clinigol DCB0129/0160, GDPR y DU a'r ddyletswydd cyfraith gyffredin o gyfrinachedd, cyfraith hygyrchedd) na ellir eu hychwanegu ar y funud olaf ar y diwedd, ac eto mae'r galluoedd hyn yn brin ac yn ddrud, sy'n tynnu sefydliadau tuag at eu celcio'n ganolog. Mae'r cyfnewidiad yn wirioneddol: mewnosodwch Swyddog Diogelwch Clinigol ym mhob tîm ac rydych yn lledaenu arbenigedd tenau nes ei fod wedi'i wanhau; canolbwyntiwch ef a chreu'r dagfa arwrol lle ymgynghorir ag un person ar bopeth ac mae pob fersiwn yn aros. Y patrwm tîm galluogi — arbenigwyr cyfyngedig o ran amser sy'n hyfforddi timau i redeg eu gweithdai peryglon eu hunain ac yna'n tynnu'n ôl — yw'r datrysiad arfaethedig, ond dim ond os yw arweinyddiaeth yn diogelu amser yr arbenigwyr i ddysgu yn hytrach na gwneud y mae'n gweithio. Edrychwch yn onest ar eich hanes rhyddhau eich hun: pa mor aml y llithrodd mynd yn fyw wrth aros ar un person a enwir, ac a oedd gan y person hwnnw'r awdurdod a'r amser gwarchodedig i ddweud na'n ddiogel? Mae ateb cryf yn wynebu'r prinder yn blaen, yn dewis safbwynt bwriadol ar fewnosod-yn-erbyn-galluogi ar gyfer pob dyletswydd, ac yn enwi'r awdurdod penodol (y grym i stopio fersiwn) na ddylid byth ei wanhau sut bynnag y lledaenwch y capasiti.

3. **Sut y byddem yn gwybod bod tîm wedi cymryd mwy o lwyth gwybyddol nag y gall ei gario'n ddiogel — a beth fyddem ni'n ei wneud amdano mewn gwirionedd?**
   Llwyth gwybyddol yw rheolydd tawel darparu diogel: gall tîm resymu am gymaint yn unig o barth clinigol a chymaint o wasanaethau cyn i'w hyder yn goblygiadau diogelwch ei newidiadau ei hun ddechrau erydu, ac ym maes iechyd mae'r erydiad hwnnw'n anweledig nes bod digwyddiad yn ei ddatgelu. Yr anhawster yw nad yw gorlwytho'n cyhoeddi ei hun fel arfer — mae'n edrych fel darparu ychydig yn arafach, mwy o ddiffygion, mwy o "gadewch i mi wirio gyda rhywun", ac mae timau dan bwysau'n tueddu i'w amsugno yn hytrach na'i fflagio, yn enwedig pan fo rhannu tîm yn gostus yn wleidyddol neu pan fo nifer y staff wedi'i rewi. Dadleuwch beth fyddai eich signalau rhybudd cynnar (mae tîm na all bellach egluro'n hyderus yr achos diogelwch ar gyfer ei ryddhad ei hun yn un cryf), ac a oes gennych unrhyw fecanwaith heddiw a fyddai'n dod â gorlwytho i'r wyneb cyn i ddarparu aros yn weladwy. Ystyriwch y gwrth-bwysau hefyd: mae rhannu timau'n creu ffiniau a throsglwyddiadau newydd, felly gall y feddyginiaeth ailgyflwyno risg darnio cwestiwn un. Mae ateb gonest yn cytuno ar signalau concrid, arsylladwy yn hytrach nag "byddem yn synhwyro", yn enwi pwy sydd â'r awdurdod i ffinio parth tîm neu ei hollti, ac yn cyfaddef y cyfnewidiad rhwng lleddfu llwyth a lluosogi ffiniau.

4. **Pa rai o'n galluoedd a rennir ddylai gael eu rhedeg fel platfformau a ddefnyddir fel-gwasanaeth, ac a ydym yn eu hadnoddi felly mewn gwirionedd — neu'n ail-labelu ciw tocynnau yn unig?**
   Addewid tîm platfform yw bod timau wedi'u halinio â ffrwd yn hunanwasanaethu peiriant integreiddio, gwasanaeth hunaniaeth, neu API cofnod gofal a rennir heb godi tocyn ac aros, fel bod y system gyfan yn mynd yn gyflymach; y methiant yw galw rhywbeth yn "blatfform" tra'i fod yn parhau'n swyddogaeth ganolog heb ddigon o staff y mae pawb yn dal i giwio y tu ôl iddi. Mae'r cyfnewidiad yn real: mae adeiladu gallu fel cynnyrch mewnol gwirioneddol yn golygu rhoi ei dîm, ei fap ffordd, ei ddogfennaeth a'i ddefnyddwyr ei hun iddo, sy'n fuddsoddiad difrifol sy'n cystadlu â chludo nodweddion sy'n wynebu defnyddwyr, ac mewn lleoliad GIG â chyllid cyfyngedig mae'r buddsoddiad hwnnw'n hawdd ei ohirio am gyfnod amhenodol. Ym maes iechyd a gofal mae'r polion yn fwy miniog oherwydd bod y galluoedd a rennir yn aml yn rhai hanfodol i ddiogelwch — y mynegai paru personau, y rhyngwynebau FHIR, y llwybr archwilio — lle mae tîm platfform tenau'n dod yn bwynt methiant unigol i bob gwasanaeth ar ei ben. Edrychwch ar y galluoedd y mae sawl tîm eisoes yn dibynnu arnynt a gofynnwch, ar gyfer pob un, a yw'r rhyngweithio'n wirioneddol X-fel-gwasanaeth ffrithiant isel neu'n gydweithredu cuddiedig ag aros cudd. Mae ateb gonest yn enwi pa alluoedd sy'n gwarantu buddsoddiad platfform nawr yn erbyn yn nes ymlaen, yn eglur pwy sy'n ariannu ac yn staffio, ac yn gwrthsefyll y demtasiwn i ddatgan platfform nad oes ganddo berchennog cynnyrch, map ffordd na llwybr hunanwasanaeth.

5. **Ble rydym yn dibynnu ar gyflenwyr contractedig neu staff a fenthycwyd, a pha rolau y mae'n rhaid i ni eu cadw'n fewnol i aros yn gleient deallus yn hytrach nag un a wagiwyd?**
   Mae llawer o ddarparu digidol ym maes iechyd a gofal yn cael ei gontractio allan, a gall cyflenwr ddod â chapasiti ac arbenigedd yn gyflym — ond os yw perchnogaeth cynnyrch, sicrwydd technegol a chymeradwyaeth diogelwch clinigol i gyd yn gadael yr adeilad gyda'r contract, mae'r sefydliad yn colli'r gallu i farnu'r hyn a werthir iddo, nodi'r hyn sydd ei angen arno, neu fod yn berchen yn ddiogel ar y canlyniad. Y tensiwn yw rhwng cyflymder a gallu: mae cynyddu staff a chaledu allweddi tro'n cael rhywbeth yn fyw'n gyflym, ond gallant erydu'n dawel y cyhyrau mewnol sy'n gadael i chi ddal cyflenwr i gyfrif, ac maent yn aml yn darparu strwythurau siâp cydran, trwm ar drosglwyddo yn hytrach na thimau wedi'u halinio â ffrwd sy'n berchen ar ganlyniad. Yn y parth hwn mae'r rolau a gedwir nad ydynt yn drafodadwy'n crynhoi o amgylch atebolrwydd na ellir ei ddirprwyo — y Perchennog Cyfrifol Uwch, y Swyddog Diogelwch Clinigol sy'n cymeradwyo mynd yn fyw, y perchennog cynnyrch sy'n penderfynu blaenoriaethau, a digon o sicrwydd technegol i archwilio'r hyn y mae cyflenwyr yn ei adeiladu. Archwiliwch eich darparu presennol a gofynnwch pa alluoedd na allech eu hailgyfansoddi pe bai cyflenwr yn cerdded i ffwrdd yfory. Mae ateb da'n gwahaniaethu gwaith sy'n berffaith iawn i'w gontractio oddi wrth y craidd cleient deallus y mae'n rhaid iddo aros yn fewnol, yn mynnu bod timau contractedig yn cael eu dal at berchnogaeth canlyniad yn hytrach na staffio siop gorff, ac yn enwi'r penderfyniadau diogelwch a llywodraethiant y mae'n rhaid iddynt orffwys bob amser gyda'ch pobl atebol eich hun.

6. **Sut y byddwn yn gwybod bod ein strwythur tîm yn cynhyrchu llif cyflym, diogel o werth mewn gwirionedd — a beth fyddai'n ein sbarduno i'w ail-lunio?**
   Modd, nid diwedd, yw dylunio tîm: pwynt timau wedi'u halinio â ffrwd, platfformau a dulliau rhyngweithio a enwir yw darparu gwerth yn gyflymach ac yn fwy diogel, ac eto anaml y mae sefydliadau'n offerynnu a yw'r strwythur yn cyflawni hynny, felly mae ad-drefniadau'n digwydd ar wleidyddiaeth a greddf yn hytrach na thystiolaeth. Yr anhawster yw dewis signalau sy'n adlewyrchu llif a diogelwch heb eu gamio — mae cyflymder crai neu drwybwn pwyntiau stori yn gwahodd yr ymddygiad anghywir, tra bod metrigau llif (amser arwain o syniad i fyw, amlder defnyddio, nifer y trosglwyddiadau fesul newid) a dangosyddion diogelwch (pa mor gyflym y caiff peryglon eu cau, a yw timau'n berchen ar eu hachos diogelwch eu hunain) yn dweud mwy wrthych a yw ffiniau'n helpu neu'n niweidio. Mae tensiwn go iawn â sefydlogrwydd: mae ad-drefnu cyson yn dinistrio hirhoedledd tîm a'r gofod gwybyddol a rennir sy'n gwneud darparu'n ddiogel, felly mae angen bar uchel a sbardunau clir arnoch cyn ail-lunio ffiniau. Trafodwch pa dystiolaeth fyddai'n dweud wrthych fod ffin yn anghywir — aros traws-dîm parhaus, achos diogelwch nad oes unrhyw un tîm yn berchen arno, platfform nad oes neb yn ei hunanwasanaethu — a phwy sydd wedi'i rymuso i weithredu arno. Mae ateb gonest yn ymrwymo i set fach o signalau llif-a-diogelwch y byddwch yn eu gwylio mewn gwirionedd, yn gosod trothwy bwriadol sy'n diogelu sefydlogrwydd tîm, ac yn enwi'r amodau sbarduno a'r penderfynwr ar gyfer unrhyw ail-lunio yn y dyfodol.

## Yn ymarferol: enghraifft iechyd a gofal

Mae system gofal integredig (ICS) yn cyflwyno **cofnod gofal a rennir** ar draws gofal acíwt, cymunedol, iechyd meddwl, sylfaenol a chymdeithasol.

Y reddf yw creu un "tîm cofnod gofal a rennir" mawr. Yn lle hynny mae'r ICS yn cymhwyso Team Topologies. Mae **tîm platfform** yn berchen ar graidd y cofnod a rennir: y mynegai paru personau, yr APIs FHIR, a'r peiriant integreiddio, wedi'u cyhoeddi fel galluoedd hunanwasanaeth. Mae sawl **tîm wedi'i alinio â ffrwd** pob un yn berchen ar daith defnyddiwr go iawn ar ei ben — "gweld cofnod claf mewn A&E", "golwg diogelu gweithiwr cymdeithasol", "cysoni meddyginiaethau meddyg teulu" — ac yn defnyddio'r platfform fel-gwasanaeth. Mae **tîm is-system gymhleth** yn berchen ar yr algorithm paru cleifion tebygolrwyddol, lle mae paru ffug yn ddigwyddiad diogelwch go iawn. Mae **tîm galluogi** o arbenigwyr diogelwch clinigol a hygyrchedd yn cylchdroi drwy'r timau wedi'u halinio â ffrwd, gan eu hyfforddi i redeg eu gweithdai peryglon DCB0160 eu hunain yn hytrach na'i wneud drostynt.

Mae gan bob tîm reolwr cynnyrch, rheolwr darparu a Swyddog Diogelwch Clinigol a enwir, ac mae RACI yn gwneud yn glir bod mynd yn fyw yn *atebol* i'r Perchennog Cyfrifol Uwch ond *na all fynd yn ei flaen* heb gymeradwyaeth CSO a llywodraethiant gwybodaeth. Pan fydd angen maes data newydd ar y tîm A&E, mae'r dull rhyngweithio'n benodol: X-fel-gwasanaeth o'r tîm platfform drwy gais API dogfenedig, nid cydweithredu chwe wythnos. Mae darparu'n gyflymach ac, yn hollbwysig, mae'r achos diogelwch ar gyfer pob taith yn eiddo i'r tîm sy'n ei gludo.

## Golwg drwy wahanol sectorau

### Busnes newydd

Ni all busnes newydd iechyd digidol o ddeg o bobl staffio pedwar math tîm gwahanol — fel arfer *mae'n* un tîm wedi'i alinio â ffrwd lle mae un person yn gwisgo sawl het (peiriannydd sydd hefyd yn rhedeg ymchwil defnyddwyr, sylfaenydd-glinigydd sy'n Swyddog Diogelwch Clinigol de facto). Y flaenoriaeth yw cadw'r tîm cyfan y tu mewn i un gofod gwybyddol a rennir fel bod penderfyniadau'n gyflym; mae RACI ffurfiol yn orlwyth pan fo pawb yn yr un ystafell. Y risg go iawn yw dagfa'r sylfaenydd: mae diogelwch clinigol a llywodraethiant gwybodaeth yn gorffwys ar un person prysur, ac mae rhwymedigaethau DCB0129/0160 yn hawdd eu gohirio. Wrth i'r cwmni ennill ei gontract GIG cyntaf, dylai'r penodiadau arbenigol cyntaf fod y rhai sy'n lleihau risg y porth hwnnw — CSO a enwir ac arweinydd llywodraethiant gwybodaeth — cyn graddio nifer y peirianwyr.

### Busnes bach

Mae gan ddarparwr bach sefydledig — practis meddyg teulu, fferyllfa gymunedol, cartref gofal, neu glinig un safle — gleifion go iawn a gweithrediadau parhaus ond anaml dîm digidol neu TG pwrpasol, felly nid oes "topoleg tîm" i'w dylunio; rheolwr y practis neu arweinydd clinigol yw'r gallu darparu cyfan i bob pwrpas ochr yn ochr â'u swydd bob dydd. Y symudiad realistig nid yw adeiladu timau platfform a galluogi ond enwi cyfrifoldebau'n benodol ar y bobl sydd gennych eisoes — pwy yw'r Swyddog Diogelwch Clinigol ar gyfer y systemau a ddefnyddiwch, pwy sy'n berchen ar lywodraethiant gwybodaeth, pwy sy'n cymeradwyo newid — hyd yn oed os ydynt yn hetiau rhan-amser ar lond llaw o staff. Gan fod yr un dyletswyddau statudol (DCB0129/0160, GDPR y DU, hygyrchedd) yn berthnasol ag i ymddiriedolaeth fawr, y patrwm ymarferol yw pwyso ar blatfformau a rennir a chymorth galluogi eich cyflenwyr a'ch ICS yn hytrach nag ailddyfeisio, wrth gadw digon o allu cleient deallus i ddal cyflenwyr i gyfrif. Y risg unigol fwyaf yw dagfa un person: os yw'r unig berson sy'n deall y system glinigol yn gadael, mae diogelwch a pharhad yn cerdded allan gyda hwy, felly mae ysgrifennu'r RACI i lawr a chroes-hyfforddi ail berson yn bwysicach yma nag unrhyw fodel tîm ffurfiol.

### Menter fawr

Mae gan ymddiriedolaeth fawr y GIG neu gwmni technoleg iechyd y broblem groes: gormod o dimau, wedi'u tynnu ar hyd llinellau cydran ac adrannol etifeddol, â throsglwyddiadau ym mhob man. Dyma lle mae model dylunio tîm bwriadol yn ennill ei le — ail-lunio timau cydran yn rhai wedi'u halinio â ffrwd, sefydlu timau platfform ar gyfer galluoedd cofnod gofal a rennir ac integreiddio, a defnyddio timau galluogi i ledaenu arbenigedd diogelwch clinigol a hygyrchedd prin. Mae RACI a hawliau penderfynu penodol yn hanfodol oherwydd bod nifer lethol y rhanddeiliaid yn gwneud cydgysylltu anffurfiol yn amhosibl. Mae'r Symudiad Conway Gwrthdro'n lifer byw yma: mae siart sefydliadol degawdau oed eisoes yn llunio'r bensaernïaeth, felly rhaid i arweinwyr ail-dynnu ffiniau tîm yn fwriadol yn hytrach na gadael i'r strwythur ddylunio'r cofnod gofal drostynt.

### Llywodraeth

Mae corff cenedlaethol (GIG Lloegr, DHSC) neu awdurdod lleol yn gosod y safonau y mae eraill yn staffio yn eu herbyn — Fframwaith gallu Digidol a Data'r Llywodraeth, y Safon Gwasanaeth, DCB0129/0160 — ac mae'n atebol i'r Senedd a'r cyhoedd am sut mae arian yn prynu capasiti tîm. Mae strwythurau yma'n cael eu llunio gan reolau caffael ac ariannu: mae llawer o ddarparu'n cael ei gontractio i gyflenwyr, felly'r rolau hanfodol i'w cadw'n fewnol yw'r rhai cleient deallus (perchnogaeth cynnyrch, sicrwydd technegol, cymeradwyaeth diogelwch clinigol) sy'n atal gallu rhag cael ei wagio. Mae atebolrwydd yn ffurfiol ac yn archwiliadwy — Perchennog Cyfrifol Uwch a enwir, rheolaethau gwariant cyhoeddedig, dyletswyddau tryloywder — felly mae modelau cyfrifoldeb yn fater o gofnod cyhoeddus, nid hylendid dewisol. Y risg nodweddiadol yw bod strwythur yn caledu'n fyrddau rhaglen a phyrth parhaol sy'n tagu llif; y gwrthsymudiad yw dal cyflenwyr at dimau wedi'u halinio â ffrwd, sy'n berchen ar ganlyniad yn hytrach na siopau corff cynyddu staff.

## Ffyrdd cyffredin o fethu

- **Trap y tîm cydran.** Mae timau a hollir yn ôl haen dechnoleg ("tîm blaen-ben", "tîm cronfa ddata") yn creu trosglwyddiadau ar bob nodwedd ac nid ydynt yn berchen ar unrhyw ganlyniad. Ad-drefnwch o amgylch ffrydiau gwerth.
- **Cwlt cargo Spotify.** Copïo "sgwadiau, llwythau, penodau, urddau" fel labeli heb yr ymreolaeth, aliniad a buddsoddiad platfform sylfaenol. Roedd model Spotify yn giplun o un cwmni ar un adeg — symudodd hyd yn oed Spotify ymlaen. Benthycwch egwyddorion, nid y siart sefydliadol.
- **Y dagfa arwrol.** Un CSO, un pensaer, neu un arweinydd llywodraethiant gwybodaeth fel parti yr ymgynghorir ag ef ar bopeth, felly mae pob tîm yn aros. Trowch hwy'n allu galluogi sy'n codi cymhwysedd pawb.
- **Llywodraethiant fel ôl-ystyriaeth.** Diogelwch clinigol a llywodraethiant gwybodaeth wedi'u cynrychioli fel pyrth allanol yn hytrach nag aelodau tîm wedi'u mewnosod, felly mae eu pryderon yn cyrraedd yn rhy hwyr i weithredu arnynt yn rhad.
- **Timau diderfyn.** Tîm sy'n parhau i amsugno gwasanaethau nes nad oes neb yn deall y cyfan. Mae gorlwytho gwybyddol yn dangos ei hun fel darparu sy'n arafu a hyder diogelwch yn erydu.
- **Cydweithredu parhaol.** Fel arfer ffin goll yw dau dîm yn "cydweithredu" am gyfnod amhenodol. Rhowch derfyn amser ar gydweithredu a symudwch i ryngwyneb fel-gwasanaeth glân.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
|---|---|---|---|---|---|
| Siâp tîm | Wedi'i hollti yn ôl cydran dechnoleg; trosglwyddiadau ym mhob man | Rhai timau trawsswyddogaethol, yn dal yn drwm ar ddibyniaethau | Timau wedi'u halinio â ffrwd yn berchen ar wasanaethau o'r dechrau i'r diwedd | Iechyd siâp tîm wedi'i dracio yn erbyn metrigau llif; trosglwyddiadau a ffiniau wedi'u hadolygu ar gadernid | Ffiniau tîm yn llunio pensaernïaeth yn fwriadol (Conway Gwrthdro) |
| Staffio amlddisgyblaethol | Rolau wedi'u benthyca ad hoc o seilos | Rolau craidd yn bresennol, clinigol/LlG rhan-amser | MDT llawn gan gynnwys CSO a enwir ag awdurdod | Bylchau staffio wedi'u mesur yn erbyn llinell sylfaen gallu ac wedi'u hadnoddi'n weithredol i darged | Timau'n hunanasesu ac yn llenwi bylchau gallu'n rhagweithiol |
| Eglurder rhyngweithio | Heb ei ddiffinio; uwchgyfeirio drwy berthynas | Rhai prosesau, yn dal yn giwiau tocynnau | Dulliau rhyngweithio wedi'u henwi fesul dibyniaeth | Ffrithiant dibyniaeth ac amseroedd aros wedi'u mesur; SLAs a rhyngwynebau wedi'u rheoli yn erbyn targedau | Dulliau wedi'u hadolygu a'u datblygu; platfformau ffrithiant isel yn dominyddu |
| Cyfrifoldebau | Aneglur pwy sy'n penderfynu | RACI yn bodoli ar bapur | RACI byw ac yn cael ei ddefnyddio ar gyfer penderfyniadau allweddol | Trwybwn penderfyniadau ac oedi cymeradwyo wedi'u tracio; atebolrwydd wedi'i sicrhau drwy archwilio | Hawliau penderfynu wedi'u tiwnio'n barhaus i leihau oedi |
| Llwyth gwybyddol | Timau wedi'u gorlwytho, hyder diogelwch yn isel | Llwyth wedi'i gydnabod ond heb ei reoli | Parthau wedi'u ffinio i gapasiti tîm | Llwyth wedi'i feintioli yn erbyn trothwyon penodol a'i lywodraethu fel metrig a reolir | Llwyth wedi'i fonitro'n weithredol; timau'n cael eu rhannu cyn gorlwytho |

## Rhestr wirio

- [ ] Mae gan bob gwasanaeth dîm wedi'i alinio â ffrwd sy'n berchen arno o'r dechrau i'r diwedd.
- [ ] Mae pob tîm yn cynnwys, neu'n cael mynediad a enwir at, gynnyrch, darparu, ymchwil, dylunio, peirianneg, data, diogelwch clinigol a llywodraethiant gwybodaeth.
- [ ] Mae gan Swyddog Diogelwch Clinigol a enwir, wedi'i hyfforddi fesul tîm amser gwarchodedig ac awdurdod i stopio fersiwn.
- [ ] Caiff galluoedd a rennir (integreiddio, hunaniaeth, APIs cofnod gofal) eu rhedeg fel platfformau mewnol a ddefnyddir fel-gwasanaeth.
- [ ] Mae arbenigwyr prin yn gweithio drwy dimau galluogi cyfyngedig o ran amser, nid tagfeydd parhaol.
- [ ] Mae RACI (neu gyfatebol) yn bodoli ar gyfer cymeradwyo clinigol, mynd yn fyw, cymeradwyo llywodraethiant gwybodaeth, a gwariant, ac yn cael ei ddefnyddio mewn gwirionedd.
- [ ] Mae gan bob dibyniaeth traws-dîm ddull rhyngweithio a enwir (cydweithredu / X-fel-gwasanaeth / hwyluso).
- [ ] Mae parthau tîm wedi'u ffinio i lwyth gwybyddol hylaw; caiff timau gorlwythog eu rhannu.
- [ ] Dewisir ffiniau tîm yn fwriadol i gynhyrchu'r bensaernïaeth a'r rhyngweithredu rydych eu heisiau.

## Prif ffynonellau

- Team Topologies — Matthew Skelton & Manuel Pais (four team types, three interaction modes, cognitive load): teamtopologies.com
- NHS Digital Service Standard and NHS Service Manual — multidisciplinary team roles and ways of working
- GOV.UK Service Manual (GDS) — "Set up a service team" and agile delivery guidance
- Government Digital and Data (formerly DDaT) Profession Capability Framework — role definitions: ddat-capability-framework.service.gov.uk
- Clinical Risk Management standards DCB0129 (manufacture) and DCB0160 (deployment), NHS Digital — Clinical Safety Officer role
- Conway's Law — Melvin Conway, "How Do Committees Invent?" (1968)
- Spotify engineering culture (Henrik Kniberg) — squads/tribes/chapters/guilds, read critically as a point-in-time model

## Cyfeiriadau

1. Conway's law — Wikipedia — https://en.wikipedia.org/wiki/Conway%27s_law
2. Cognitive load — Wikipedia — https://en.wikipedia.org/wiki/Cognitive_load
3. Responsibility assignment matrix (RACI) — Wikipedia — https://en.wikipedia.org/wiki/Responsibility_assignment_matrix
4. Interdisciplinarity — Wikipedia — https://en.wikipedia.org/wiki/Interdisciplinarity
5. Sociotechnical system — Wikipedia — https://en.wikipedia.org/wiki/Sociotechnical_system
6. Fast Healthcare Interoperability Resources — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
7. Team Topologies: Organizing Business and Technology Teams for Fast Flow — Matthew Skelton & Manuel Pais — https://teamtopologies.com
8. NHS Service Manual and NHS Digital Service Standard — NHS England — https://service-manual.nhs.uk
9. Service Manual — Government Digital Service (GDS), GOV.UK — https://www.gov.uk/service-manual
10. Government Digital and Data Profession Capability Framework — GOV.UK — https://ddat-capability-framework.service.gov.uk
11. Clinical risk management standards DCB0129 and DCB0160 — NHS England — https://digital.nhs.uk/services/clinical-safety
12. "How Do Committees Invent?" (1968) — Melvin E. Conway — http://www.melconway.com/Home/Committees_Paper.html

*Gweler hefyd Bwnc 7.2 — Cynllunio'r Gweithlu, Pwnc 7.3 — Strategaeth Weithlu, Pwnc 7.5 — Pobl a Datblygiad Sefydliadol, a Phwnc 8.1 — Rheoli Newid.*
