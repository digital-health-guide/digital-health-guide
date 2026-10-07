# Pwnc 1.1 — Y Model Gweithredu

**Mewn un frawddeg:** Model gweithredu targed (TOM) yw'r modd bwriadol y caiff strategaeth eich sefydliad ei llunio i lifo drwy ffrydiau gwerth, galluoedd, timau, llywodraethiant, technoleg, data a chyflenwyr i ddarparu canlyniadau iechyd a gofal digidol — ac mae cael ei siâp yn iawn yn penderfynu a fydd popeth sy'n dilyn yn gyflym ac yn ddiogel neu'n araf ac yn fregus.

## Pam mae hyn yn bwysig ym maes iechyd a gofal

Nid prinder talent neu dechnoleg yw'r rheswm pam mae'r rhan fwyaf o sefydliadau iechyd digidol yn methu; maent yn methu am fod eu model gweithredu yn eu herbyn. Mae cyllid wedi'i glymu wrth brosiectau cyfyngedig o ran amser, mae hawliau penderfynu yn amwys, ac mae pob tîm yn ailadeiladu'r un seilwaith mewngofnodi, integreiddio ac archwilio. Y canlyniad yw cost ddyblyg ar arian cyhoeddus, diogelwch clinigol anghyson, a gwasanaethau na allant rannu data ar draws system gofal integredig (ICS).

Mae model gweithredu'n arbennig yn y maes hwn oherwydd bod rhaid iddo gysoni nodau sy'n cystadlu â'i gilydd. Rhaid iddo fod yn **ddigon ffederal** i barchu ymreolaeth sefydliadau sofran — ymddiriedolaethau, awdurdodau lleol, practisau meddygon teulu — ac eto'n **ddigon cydlynol** i roi un profiad diogel i glaf ar draws pob un ohonynt. Rhaid iddo gydbwyso **rhedeg** (cadw systemau clinigol ar gael yn ddiogel) yn erbyn **newid** (eu gwella), pan all amser segur effeithio ar ofal. A rhaid iddo wario'n gymesur: sicrwydd sy'n ddigon trwm ar gyfer atebolrwydd cyhoeddus a diogelwch clinigol, ond yn ddigon ysgafn i beidio â thagu ailadrodd. Y TOM yw'r man lle caiff y cyfnewidiadau hyn eu gwneud yn eglur yn hytrach na'u gadael i ddamwain.

## Cysyniadau craidd

**Haenau [model gweithredu](https://en.wikipedia.org/wiki/Operating_model).** Mae TOM defnyddiol yn bentwr, a phob haen yn gwasanaethu'r un uwch ei phen:

- **Strategaeth a chanlyniadau** — y canlyniadau mesuradwy i'r boblogaeth a'r gwasanaeth y mae eich sefydliad yn bodoli i'w gwella (a fynegir yn aml fel [OKRs](https://en.wikipedia.org/wiki/Objectives_and_key_results); gweler Pwnc 1.3 — Penderfyniadau Seiliedig ar Dystiolaeth).
- **[Ffrydiau gwerth](https://en.wikipedia.org/wiki/Value_stream)** — y llifoedd o'r dechrau i'r diwedd sy'n rhoi gwerth i ddefnyddiwr, e.e. "atgyfeirio, brysbennu a thrin claf" — wedi'u trefnu o amgylch taith y dinesydd, nid y siart sefydliadol.
- **Galluoedd** — y pethau y mae'n rhaid i chi allu eu gwneud (hunaniaeth, archebu apwyntiadau, dogfennaeth glinigol, dadansoddeg). Mae galluoedd yn aros yn sefydlog hyd yn oed wrth i atebion newid.
- **Timau** — y bobl a drefnir i ddarparu galluoedd a ffrydiau gwerth (gweler Team Topologies isod).
- **Llywodraethiant a hawliau penderfynu** — pwy sy'n penderfynu beth, a sut y cymhwysir sicrwydd.
- **Technoleg a data** — y platfformau, y safonau a'r bensaernïaeth data y mae'r timau'n adeiladu arnynt.
- **Cyflenwyr** — y farchnad rydych yn prynu ohoni a sut rydych yn ei rheoli.

Mae cynllunio o'r brig i lawr (strategaeth → ffrydiau gwerth → galluoedd) yn cadw timau a thechnoleg wedi'u halinio â chanlyniadau yn hytrach nag â strwythurau etifeddol.

**Modelau canolog, ffederal a phlatfform.** Mae model **canolog** yn crynhoi'r gwaith darparu mewn un tîm neu gorff hyd braich: yn gyson ac yn rhad i'w safoni, ond yn dagfa ac yn aml ymhell o anghenion lleol. Mae model **ffederal** yn datganoli'r gwaith darparu i ymddiriedolaethau a lleoedd: yn ymatebol ac yn eiddo i'r ardal, ond yn dueddol o ddyblygu ac ymwahanu. Model **platfform** yw'r patrwm cysoni: mae tîm canolog yn darparu galluoedd a rennir y gellir eu hailddefnyddio (hunaniaeth, rhyngweithredadwyedd, lletya, system ddylunio) fel *platfform*, ac mae timau ffederal yn adeiladu arno'n gyflym. Mae'r rhan fwyaf o systemau iechyd aeddfed yn closio at "platfform a ffederasiwn".

**Team Topologies.** Mae'r fframwaith hwn yn enwi pedwar math o dîm — wedi'i alinio â ffrwd (yn berchen ar ffrwd gwerth), platfform (yn darparu galluoedd hunanwasanaeth), galluogi (yn hyfforddi eraill mewn gallu), ac is-system gymhleth (gwaith arbenigol dwfn fel algorithm) — ac mae'n pwysleisio rhyngweithio â ffrithiant isel rhyngddynt. Mae'n cyfateb yn daclus i'r model platfform: mae timau platfform yn lleihau'r baich gwybyddol ar dimau wedi'u halinio â ffrwd fel y gallant ganolbwyntio ar werth i ddefnyddwyr a gwerth clinigol.

**Rhedeg yn erbyn newid.** *Rhedeg* yw cadw gwasanaethau byw yn ddiogel ac ar gael; *newid* yw eu gwella neu eu hadeiladu. Mae timau cynnyrch sy'n adeiladu ac yn rhedeg gwasanaeth ("rydych yn ei adeiladu, rydych yn ei redeg") yn cau'r ddolen adborth ac yn gwella diogelwch, ond rhaid ariannu'r cydbwysedd yn onest — amddifadu'r gwaith rhedeg i ariannu newid yw sut y mae systemau clinigol yn dirywio.

**Y platfform hyfyw teneuaf (TVP).** O Team Topologies: dylai platfform fod y set *leiaf* o wasanaethau a rennir sy'n lleihau ffrithiant yn wirioneddol i dimau ffrwd — dim mwy. Mae platfform sydd wedi'i or-adeiladu yn troi'n dagfa ac yn system etifeddol ei hun. Dechreuwch â'r ychydig alluoedd y mae pob tîm eu hangen go iawn (dilysu, haen rhyngweithredadwyedd, lletya, system ddylunio) a thyfwch dim ond pan fo galw a ategir gan dystiolaeth.

## Arferion gorau

1. **Cynlluniwch y model o ganlyniadau i lawr, nid o'r siart sefydliadol i fyny.** Dechreuwch â'r canlyniadau i'r boblogaeth a'r gwasanaeth y mae'n rhaid i chi eu gwella, deilliwch y ffrydiau gwerth sy'n eu darparu, ac yna'n unig cynlluniwch dimau a thechnoleg. Mae TOM sydd wedi'i angori yn yr hierarchaeth bresennol yn awtomeiddio'r seilos presennol yn unig.

2. **Mabwysiadwch siâp platfform a ffederasiwn.** Darparwch alluoedd a rennir yn ganolog fel platfform hunanwasanaeth, a gadewch i dimau sydd wedi'u halinio â ffrwd mewn ymddiriedolaethau a lleoedd adeiladu arno. Mae hyn yn rhoi cysondeb cenedlaethol o ran diogelwch a rhyngweithredadwyedd i chi, ynghyd â chyflymder a pherchnogaeth leol — y cysoni y mae'r maes yn ei fynnu.

3. **Ariennwch gynnyrch, nid prosiectau.** Symudwch arian o brosiectau amser-gyfyngedig i dimau cynnyrch a ariennir yn barhaus ac a gaiff eu halinio â ffrydiau gwerth. Mae cyllid prosiect yn gorfodi timau i ymwahanu ar yr union adeg y maent wedi dysgu'r maes; mae cyllid cynnyrch yn cynnal y wybodaeth am ddiogelwch a'r ailadrodd y mae gwasanaethau iechyd eu hangen (gweler Pwnc 5.0 — Gwaith dan Arweiniad Cynnyrch).

4. **Gwnewch y gwaith o reoli gwariant yn gymesur ac yn gamau.** Defnyddiwch gyllid mewn camau wedi'i glymu wrth dystiolaeth — rhyddhewch arian ar byrth darganfod, alffa, beta a byw yn hytrach na chymeradwyo rhaglen gyfan ymlaen llaw. Mae rheolaethau gwariant yn null [GDS](https://en.wikipedia.org/wiki/Government_Digital_Service) a llwybr sicrwydd y GIG yn bodoli i atal costau suddedig mawr ar syniadau heb eu profi; cymhwyswch hwy fel trothwyon wedi'u graddio yn ôl risg a gwerth, nid fel biwrocratiaeth gyffredinol.

5. **Gwnewch hawliau penderfynu yn eglur gyda map RACI neu RAPID.** Awdurdod amwys yw achos mwyaf cyffredin gwaith darparu sy'n arafu. Enwch, ar gyfer pob math arwyddocaol o benderfyniad, pwy sy'n Gyfrifol/Atebol/Ymgynghorir/Hysbysir ([RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)) neu pwy sy'n Argymell, Cytuno, Perfformio, cael Mewnbwn, a Phenderfynu (RAPID). Cyhoeddwch ef fel y gall timau roi'r gorau i uwchgyfeirio penderfyniadau y mae ganddynt y grym i'w gwneud.

6. **Cadwch y platfform yn denau ac wedi'i yrru gan alw.** Adeiladwch alluoedd a rennir dim ond pan fo dau dîm neu fwy yn amlwg angen yr un peth, a thriniwch y platfform fel cynnyrch â'i ddefnyddwyr ei hun (y timau mewnol). Gwrthsafwch y demtasiwn i adeiladu platfform mawreddog ymlaen llaw; mae'r platfform hyfyw teneuaf yn ennill ei gwmpas drwy gael ei fabwysiadu.

7. **Rheolwch gyflenwyr fel rhan o'r model, nid y tu allan iddo.** Penderfynwch yn fwriadol pa alluoedd sy'n strategol (adeiladu/bod yn berchen arnynt) a pha rai sy'n nwyddau (prynu), osgowch [gaethiwo](https://en.wikipedia.org/wiki/Vendor_lock-in) gan un cyflenwr ar ddata clinigol craidd, a mynnwch safonau agored a hawliau ymadael mewn contractau. Mae eich cyflenwyr yn haen o'ch model gweithredu, a rhaid i'w ffyrdd o weithio fod yn gydnaws â'ch rhai chi.

8. **Gwnewch hawliau penderfynu yn eglur.** Dim ond os yw pobl yn gwybod pwy sy'n penderfynu beth y mae model gweithredu'n gweithio — pa ddewisiadau sydd gan dîm cynnyrch, pa rai sydd gan awdurdod diogelwch clinigol, a pha rai y mae'n rhaid iddynt gyrraedd bwrdd. Mapiwch hawliau penderfynu a gwthiwch bob penderfyniad i'r lefel isaf a all ei ddal yn ddiogel, fel nad yw'r gwaith darparu'n cael ei dagu gan uwchgyfeirio diangen. Awdurdod amwys yw un o achosion mwyaf cyffredin gwaith darparu araf ac amddiffynnol.

9. **Trinwch y model gweithredu fel cynnyrch yr ydych yn ei ddatblygu.** Ni phennir model gweithredu targed unwaith a'i fframio ar wal; archwiliwch ef wrth i'r galw, y dechnoleg a'r partneriaethau newid, a'i addasu ar sail tystiolaeth. Gwyliwch ychydig o arwyddion — llif gwaith, yr amser i benderfynu, ailwneud gwaith, ac iechyd y tîm — a newidiwch strwythurau pan fo'n amlwg eu bod yn rhwystro, nid mewn ymateb i ffasiwn ad-drefnu.

## Cwestiynau i'w trafod gyda'ch tîm

1. **A yw ein model gweithredu wedi'i gynllunio o ganlyniadau a ffrydiau gwerth i lawr, ynteu a yw wedi awtomeiddio ein siart sefydliadol presennol a'i seilos yn unig?**
   Mae'r cwestiwn hwn yn mynd at rybudd canolog y pwnc fod TOM sydd wedi'i angori yn yr hierarchaeth bresennol yn cadarnhau'r seilos sydd gennych eisoes, felly mae'n werth ei roi ar y bwrdd cyn unrhyw ad-drefnu. Mae'n bwysig mewn lleoliad iechyd a gofal oherwydd bod ffrydiau gwerth yn dilyn taith y dinesydd — atgyfeirio, brysbennu, trin — ar draws sefydliadau sofran, tra bo siartiau sefydliadol yn dilyn ffiniau sefydliadol, a bydd model a adeiladir ar yr olaf yn dal i gynhyrchu gwasanaethau darniog, anrhyngweithredol ar arian cyhoeddus. Y tensiwn i'w drafod yn onest yw bod cynllunio o'r brig i lawr o ganlyniadau yn tarfu'n wirioneddol: mae'n torri ar draws perchnogaeth adrannol, cyllidebau a llinellau adrodd y mae pobl uwch wedi adeiladu gyrfaoedd o'u hamgylch, felly mae cost wleidyddol wirioneddol i'w wneud yn iawn. Profwch eich hunain yn bendant drwy enwi eich tri phrif ganlyniad a thracio a yw ffiniau eich timau a'ch llinellau cyllido yn dilyn y ffrydiau gwerth hynny neu'r adrannau; os yw timau'n mapio'n daclus ar adrannau, dyna eich ateb. Mae ymateb da a gonest yn cyfaddef ble mae'r model wedi'i lunio ar sail y siart sefydliadol, yn nodi o leiaf un ffrwd werth sydd ar hyn o bryd wedi'i hollti ar draws seilos er anfantais iddi, ac yn realistig ynghylch pa ffiniau strwythurol y mae'r sefydliad yn barod i'w hail-lunio.

2. **Beth ddylai fod yn ein platfform hyfyw teneuaf, a sut y byddwn yn ei atal rhag cael ei or-adeiladu'n dagfa neu ei dan-adeiladu fel bod pob tîm yn ailadeiladu'r un seilwaith?**
   Dim ond os yw'r platfform yn aros yn denau ac wedi'i yrru gan alw y mae'r siâp platfform a ffederasiwn yn gweithio, ac mae'r cwestiwn hwn yn gwneud i'r tîm wynebu'r ddwy ffordd o fethu y mae'r pwnc yn eu henwi — y platfform mawreddog sy'n troi'n dagfa etifeddol ei hun, a'i absenoldeb sy'n gorfodi pob tîm i ailadeiladu mewngofnodi, integreiddio ac archwilio. Mae'n bwysig oherwydd, mewn ICS, mae'r platfform i bob pwrpas yn seilwaith a rennir (hunaniaeth, haen rhyngweithredadwyedd FHIR, lletya â llinellau sylfaen diogelwch, system ddylunio) ac mae cael ei gwmpas yn anghywir yn lluosogi cost neu ffrithiant ar draws pob tîm ffrwd. Y cyfnewidiad i'w drafod yw amseru a thystiolaeth: adeiladwch yn rhy gynnar a byddwch yn dyfalu'n anghywir ac yn creu tagfa; adeiladwch yn rhy hwyr ac mae dyblygu eisoes wedi caledu — felly'r prawf "mae dau dîm neu fwy yn amlwg angen yr un peth" yw'r craidd, a dylai'r tîm brofi'n drylwyr a ydynt yn ei gymhwyso mewn gwirionedd neu ddim ond yn adeiladu'r hyn sy'n ymddangos yn amlwg ganolog. Edrychwch ar yr hyn a drinnir ar hyn o bryd fel platfform o'i gymharu â'r hyn y mae timau'n ei ailadeiladu, a gofynnwch a yw'r platfform yn cael ei redeg fel cynnyrch â'i ddefnyddwyr mewnol a'i gytundebau lefel gwasanaeth ei hun neu fel ciw y mae pawb yn aros y tu ôl iddo. Mae ateb gonest yn enwi'r galluoedd penodol sy'n pasio'r prawf dau dîm heddiw, yn gwrthsefyll y demtasiwn i adeiladu'r gweddill ymlaen llaw, ac yn ymrwymo i drin defnyddwyr mewnol y tîm platfform fel cwsmeriaid go iawn â lefelau gwasanaeth go iawn.

3. **Ble mae ein hawliau penderfynu yn wirioneddol amwys, a beth y mae timau'n ei uwchgyfeirio heddiw y dylid eu grymuso i'w benderfynu eu hunain?**
   Enwir awdurdod amwys fel achos mwyaf cyffredin gwaith darparu sy'n arafu, felly mae'r cwestiwn hwn yn dod â'r ffrithiant bob dydd y bwriedir i fap RACI neu RAPID cyhoeddedig ei ddileu i'r wyneb. Mae'n bwysig yn arbennig mewn system iechyd ffederal lle mae gan dimau lleoedd, bwrdd digidol yr ICS, diogelwch clinigol a llywodraethiant gwybodaeth hawliadau dilys ar benderfyniad, ac mae ffiniau aneglur yn golygu bod popeth yn cael ei uwchgyfeirio neu, yn waeth, nad oes neb yn berchen ar benderfyniad nes iddo fynd o'i le. Y tensiwn sy'n werth ei archwilio yw bod datganoli penderfyniadau yn gofyn am ymddiried mewn timau o fewn canllawiau, y mae uwch arweinwyr a byrddau'n aml yn ei wrthsefyll yn union lle mae diogelwch clinigol neu arian cyhoeddus yn y fantol — ac eto atal yr ymddiriedaeth honno sy'n creu'r tagfeydd uwchgyfeirio yn y lle cyntaf. Gwnewch hyn yn bendant drwy restru'r pum penderfyniad diwethaf a uwchgyfeiriwyd a gofyn, ym mhob achos, pwy a ddylai fod wedi penderfynu a pha ganllaw fyddai wedi gadael iddynt wneud hynny; mae'r patrwm fel arfer yn datgelu nifer fach o fathau o benderfyniad amwys sy'n codi dro ar ôl tro. Mae ateb da yn cynhyrchu datganiad penodol, y gellir ei gyhoeddi, o bwy sy'n penderfynu beth — gan wahaniaethu rhwng safonau platfform, cynllunio gwasanaeth a chymeradwyaeth diogelwch clinigol — ac yn onest ynghylch pa benderfyniadau y mae'r sefydliad yn wirioneddol barod i'w datganoli a pha rai y bydd yn eu cadw'n ganolog, a pham.

4. **A ydym yn ariannu'r gwaith rhedeg a newid yn onest, neu a ydym yn dawel yn amddifadu gweithrediadau gwasanaethau byw i dalu am nodweddion newydd?**
   Mae'r pwnc yn ddi-flewyn-ar-dafod mai amddifadu'r gwaith rhedeg i ariannu newid yw sut y mae systemau clinigol yn dirywio, ac mae'r cwestiwn hwn yn gorfodi'r cydbwysedd i'r agored cyn i doriad neu ddigwyddiad diogelwch ei wneud i chi. Mae'n bwysig ym maes iechyd a gofal oherwydd nad gorbenion swyddfa gefn yw "rhedeg" — dyma argaeledd y systemau y mae clinigwyr yn dibynnu arnynt yn y man lle rhoddir gofal, felly mae cyllideb redeg ddirywiedig yn ymddangos fel amser segur a all effeithio ar gleifion, nid dim ond defnyddwyr anghyfleus. Mae'r cyfnewidiad yn anghyfforddus oherwydd bod newid yn weladwy ac yn cael ei ddathlu tra bo'r gwaith rhedeg yn anweledig nes ei fod yn methu, felly mae byrddau a mapiau ffordd yn naturiol yn tueddu at y newydd; mae model "rydych yn ei adeiladu, rydych yn ei redeg" yn helpu drwy gadw'r ddolen adborth ar gau, ond dim ond os caiff amser rhedeg y tîm ei ddiogelu mewn gwirionedd yn hytrach na'i ddyrannu ar bapur ac yna ei ysbeilio. Gwnewch hyn yn bendant drwy edrych ar ba gyfran o allu pob tîm cynnyrch a aeth ar gadw gwasanaethau'n ddiogel ac ar gael y chwarter diwethaf o'i gymharu â'r hyn a gynlluniwyd, ac a yw'r gwaith rhedeg yn cael ei olrhain a'i werthfawrogi neu'n cael ei drin fel ymyriad. Mae ateb gonest yn enwi ble mae'r gwaith rhedeg yn cael ei dan-ariannu heddiw, yn diogelu dyraniad rhedeg realistig fel tâl cyntaf yn hytrach nag fel gweddill, ac yn onest ynghylch pa wasanaethau byw sy'n cario risg weithredol gronedig.

5. **Pa alluoedd rydym yn dewis yn fwriadol eu hadeiladu a bod yn berchen arnynt yn hytrach na'u prynu, ac a ydym yn derbyn caethiwo ar ein data clinigol craidd heb fwriadu gwneud hynny?**
   Arfer gorau yma yw penderfynu'n fwriadol rhwng adeiladu a phrynu, osgoi caethiwo gan un cyflenwr ar ddata clinigol craidd, a thrin cyflenwyr fel haen o'r model gweithredu yn hytrach na rhywbeth y tu allan iddo — mae'r cwestiwn hwn yn profi a yw'r dewisiadau hynny'n cael eu gwneud mewn gwirionedd neu'n digwydd yn ddiofyn. Mae'n bwysig oherwydd, ym maes iechyd digidol, mae'r caethiwo mwyaf canlyniadol yn ymwneud â'r cofnod clinigol a'i ddata, lle gall storfa berchnogol heb unrhyw ffordd ymadael realistig ddal system gyfan am ddegawd a phennu beth all pob gwasanaeth i lawr yr afon ei wneud. Y tensiwn yw cyflymder yn erbyn dewis: mae prynu'n gyflymach ac yn aml yn rhatach heddiw, yn enwedig ar gyfer tîm sydd dan bwysau, ond mae pob pryniant cyfleus heb safonau agored na hawliau ymadael yn culhau dewisiadau yfory'n dawel, a dim ond pan geisiwch adael y daw'r gost i'r golwg. Gwnewch hyn yn bendant drwy restru eich galluoedd craidd, nodi pob un fel strategol (adeiladu/bod yn berchen) neu nwydd (prynu), a gwirio a yw'r contractau y tu ôl i'r rhai nwydd yn mynnu safonau agored (HL7 FHIR, SNOMED CT) a hawliau ymadael gorfodadwy mewn gwirionedd. Mae ateb da yn gwahaniaethu rhwng yr ychydig alluoedd sy'n wirioneddol strategol a'r nifer fawr y gellir eu prynu'n ddiogel, yn onest ynghylch ble mae'r sefydliad eisoes wedi'i gaethiwo ar ddata clinigol, ac yn ymrwymo i safonau agored a hawliau ymadael yn y contractau sydd bwysicaf.

6. **Sut y byddwn yn gwybod pryd mae angen i'n model gweithredu newid, a pha arwyddion fyddai'n dweud wrthym — yn hytrach nag ad-drefnu ar sail ffasiwn neu pan ddaw arweinydd newydd?**
   Mae'r pwnc yn fframio'r model gweithredu fel cynnyrch yr ydych yn ei ddatblygu ar sail tystiolaeth, nid diagram wedi'i fframio ar wal, felly mae'r cwestiwn hwn yn gofyn i'r tîm ddiffinio ymlaen llaw pa dystiolaeth fyddai'n cyfiawnhau ei ail-lunio. Mae'n bwysig ym maes iechyd a gofal oherwydd bod ad-drefnu'n tarfu ac yn ddrud — mae'n chwalu gwybodaeth faes a gwybodaeth am ddiogelwch clinigol a enillwyd drwy lafur caled — ac eto mae'r sector yn dueddol o gael newid strwythurol a yrrir gan gylchoedd polisi ac apwyntiadau newydd yn hytrach nag a yw'r model presennol yn rhwystro'r gwaith mewn gwirionedd. Y tensiwn yw rhwng sefydlogrwydd ac addasu: newidiwch y model yn rhy rwydd ac ni fyddwch byth yn gadael i dimau ymgartrefu na chronni arbenigedd diogelwch, newidiwch ef yn rhy anaml a bydd strwythurau caled yn tagu llif ymhell ar ôl iddynt roi'r gorau i gyd-fynd â'r gwaith. Gwnewch hyn yn bendant drwy ddewis set fach o arwyddion i'w gwylio — llif gwaith, yr amser i benderfynu, ailwneud gwaith, ac iechyd y tîm — a chytuno pa symudiad ynddynt fyddai'n sbarduno ailgynllunio bwriadol yn hytrach nag addasiad llai. Mae ateb gonest yn ymrwymo i ychydig o ddangosyddion blaenllaw, yn gwahaniaethu rhwng newid a arweinir gan dystiolaeth a theatr ad-drefnu, ac yn eglur pwy sy'n atebol am archwilio'r model a gweithredu pan fo'r arwyddion yn dweud ei fod yn rhwystro'r gwaith darparu.

## Yn ymarferol: enghraifft iechyd a gofal

Mae gan ICS sy'n cwmpasu pum lle bob ymddiriedolaeth yn adeiladu ei hoffer apwyntiadau ei hun sy'n wynebu cleifion. Mae costau'n dyblygu, mae profiadau'n ymwahanu, ac nid oes yr un yn rhannu data'n lân. Mae'r ICS yn ailgynllunio ei fodel gweithredu.

Mae'n diffinio tri chanlyniad (lleihau'r rhai sy'n methu mynychu, torri derbyniadau y gellir eu hosgoi, gwella tegwch o ran mynediad) a'r ffrydiau gwerth y tu ôl iddynt. Mae'n sefydlu **tîm platfform** bach sy'n berchen ar bedwar gallu hyfyw teneuaf: hunaniaeth/mewngofnodi a rennir, haen rhyngweithredadwyedd yn seiliedig ar [FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), lletya cyffredin â llinellau sylfaen diogelwch a diogelwch clinigol, a system ddylunio. Mae pob lle yn cadw **tîm wedi'i alinio â ffrwd** ond bellach yn adeiladu ar y platfform yn hytrach nag o'r dechrau.

Mae cyllid yn symud o gynigion prosiect blynyddol i gyllidebau cynnyrch sefydlog ar gyfer pob ffrwd, a ryddheir drwy byrth darganfod/alffa/beta. Mae map RAPID cyhoeddedig yn egluro bod timau lleoedd yn *penderfynu* ar eu cynllun gwasanaeth eu hunain o fewn canllawiau platfform a diogelwch clinigol, tra bo bwrdd digidol yr ICS yn *penderfynu* ar safonau platfform. O fewn blwyddyn, mae tri lle yn rhannu un gallu archebu, mae'r llinell sylfaen cynllunio a diogelwch yn gyson, ac mae nodweddion newydd a fyddai wedi cymryd cylch prosiect yn cael eu rhyddhau mewn wythnosau — oherwydd bod y platfform wedi cymryd y gwaith caled nad oedd yn gwahaniaethu.

## Golwg drwy wahanol sectorau

Mae model gweithredu wedi'i fesur yn ôl y sefydliad y mae'n ei wasanaethu; mae'r un haenau — ffrydiau gwerth, galluoedd, timau, llywodraethiant, platfform, cyflenwyr — yn cael eu tynnu'n wahanol iawn gan fusnes newydd, menter fawr a chorff llywodraethol.

### Busnes newydd

Mewn cwmni iechyd digidol bach mae'r model gweithredu'n ymhlyg ar y cyfan ac mae hynny'n iawn: un neu ddau dîm wedi'u halinio â ffrwd, sylfaenydd sy'n dal y rhan fwyaf o'r hawliau penderfynu, a dim tîm platfform oherwydd nad oes dim eto i'w roi ar blatfform. Y ddisgyblaeth yw gwneud yr ychydig benderfyniadau gwirioneddol yn eglur yn gynnar — adeiladu neu brynu ar gyfer y storfa data clinigol, pa safonau agored i ymrwymo iddynt — fel nad yw llwybr byr heddiw yn troi'n gaethiwo yfory. Mae rhedeg a newid yn yr un dwylo, felly'r risg yw bod cadw'r goleuadau ymlaen i'r cwsmeriaid cynnar yn amddifadu'r map ffordd; mae rhaniad syml a gonest o amser peirianneg yn gyfwerth ysgafn â chyllideb redeg a ddiogelir. Dewisir cyflenwyr ar gyflymder, ond dylai busnes newydd wrthod caethiwo ar ddata clinigol craidd o hyd, oherwydd bydd ei brynwyr GIG yn y dyfodol yn mynnu hawliau ymadael.

### Busnes bach

Mae gan ddarparwr bach sefydledig — practis meddyg teulu, fferyllfa gymunedol, cartref gofal neu ddarparwr gofal yn y cartref, clinig un safle, neu gyflenwr technoleg iechyd bach sydd wedi mynd heibio'r cam cyn-refeniw — gleifion go iawn a gweithrediadau parhaus ond dim tîm platfform, dim gallu digidol neu TG penodedig, ac ychydig o le i symud o ran arian neu staff. Yma, casgliad o alluoedd a brynwyd sydd wedi'u pwytho ynghyd yw'r model gweithredu ar y cyfan, felly cyflenwyr yw'r dewisiadau sy'n pennu'r canlyniad: mynnu safonau agored a hawliau ymadael yn y systemau clinigol rydych yn eu caffael, oherwydd eich bod yn cario'r un dyletswyddau rhyngweithredadwyedd a diogelwch clinigol ag ymddiriedolaeth fawr heb ei grym prynu na'i harbenigedd mewnol. Mae rhedeg a newid yn disgyn ar yr un llond llaw o bobl sydd hefyd yn darparu gofal, felly'r ddisgyblaeth onest yw diogelu ychydig o amser i gadw systemau'n ddiogel ac yn gyfredol yn hytrach na diffodd tanau yn unig. Mae hawliau penderfynu'n syml — fel arfer partner neu berchennog-reolwr sy'n penderfynu — ond mae hynny'n ei gwneud yn hawdd gohirio penderfyniadau digidol am gyfnod amhenodol, felly'r gwerth yw enwi'r ychydig rai sy'n bwysig (pa gofnod clinigol, pa blatfform rhanbarthol a rennir i ymuno ag ef) a'u gwneud yn fwriadol. Lle mae ICS neu gorff cenedlaethol yn cynnig platfform hunaniaeth, rhyngweithredadwyedd neu ddylunio a rennir, y symudiad gorau i'r busnes bach yn aml yw adeiladu arno yn hytrach nag ailddyfeisio, gan fenthyg y gallu na all ei staffio ei hun.

### Menter fawr

Ymddiriedolaeth GIG neu ICS yw lle mae siâp platfform a ffederasiwn yn profi ei werth: sefydliadau sofran y mae'n rhaid iddynt deimlo fel un gwasanaeth i glaf. Mae'r problemau anodd yn wleidyddol cymaint ag yn dechnegol — symud arian o gynigion prosiect amser-gyfyngedig i gyllidebau cynnyrch sefydlog, a chyhoeddi map RACI/RAPID fel bod timau lleoedd yn rhoi'r gorau i uwchgyfeirio penderfyniadau y maent yn berchen arnynt. Mae gan fenter iechyd-dechnoleg neu fferyllol fawr y gallu peirianneg platfform ond mae mewn perygl o or-adeiladu platfform mewnol mawreddog sy'n troi'n dagfa ei hun; y prawf platfform hyfyw teneuaf — mae dau dîm neu fwy yn amlwg angen yr un peth — yw'r brêc. Ar y raddfa hon, hawliau penderfynu a llif cyllid yw'r model gweithredu; fel arfer nid y dechnoleg yw'r cyfyngiad.

### Llywodraeth

Mae corff cyhoeddus cenedlaethol neu leol yn cynllunio modelau gweithredu y mae'n rhaid i sefydliadau eraill fyw ynddynt, felly mae ei ddewisiadau ynghylch safonau a phlatfformau i bob pwrpas yn seilwaith cenedlaethol. Mae GIG Lloegr neu'r Adran Iechyd a Gofal Cymdeithasol yn darparu haen hunaniaeth a rennir, asgwrn cefn rhyngweithredadwyedd neu system ddylunio yn batrwm platfform a gymhwysir ar raddfa poblogaeth, ac mae ei reolaethau gwariant a'i byrth sicrwydd mewn camau yn dangos sut y caiff arian cyhoeddus ei ddwyn i gyfrif. Y ffordd o fethu yw model canolog sy'n troi'n dagfa bell, gan fynnu un ateb ar gyfer pob cyd-destun lleol; yr ateb yw rhoi'r galluoedd gwirioneddol gyffredin ar blatfform a ffedereiddio'r gweddill i ymddiriedolaethau ac awdurdodau lleol. Mae atebolrwydd i'r Senedd hefyd yn golygu bod penderfyniadau adeiladu/prynu a rheoli cyflenwyr yn faterion o gofnod cyhoeddus, felly nid yn unig yn ddoeth ond yn ddisgwyliedig yw safonau agored a hawliau ymadael.

## Ffyrdd cyffredin o fethu

- **Awtomeiddio'r siart sefydliadol.** Cynllunio timau o amgylch adrannau presennol yn hytrach na ffrydiau gwerth, fel bod y TOM yn cadarnhau seilos. Gwrthgyffur: cynlluniwch o ganlyniadau a ffrydiau gwerth i lawr.
- **Y platfform sy'n troi'n dagfa.** Tîm platfform canolog â chwmpas rhy eang y mae'n rhaid i bob cais giwio y tu ôl iddo. Gwrthgyffur: y platfform hyfyw teneuaf, a drinnir fel cynnyrch â chytundebau lefel gwasanaeth.
- **Cyllid prosiect ar gyfer gwaith cynnyrch.** Mae arian sy'n dod i ben yn gorfodi cylch o chwalu ac ailadeiladu. Gwrthgyffur: cyllid cynnyrch parhaus gyda phyrth mewn camau.
- **Amddifadu'r gwaith rhedeg i fwydo newid.** Tan-ariannu gweithrediadau gwasanaethau byw nes bod systemau clinigol yn dirywio. Gwrthgyffur: ariennwch redeg a newid yn benodol a diogelwch y gyllideb redeg.
- **Penderfyniadau heb berchennog.** Nid oes neb yn gwybod pwy sy'n penderfynu, felly caiff popeth ei uwchgyfeirio. Gwrthgyffur: RACI/RAPID cyhoeddedig.
- **Caethiwo yn ddiofyn.** Data clinigol craidd wedi'i ddal mewn system gyflenwr berchnogol heb ffordd ymadael. Gwrthgyffur: safonau agored a hawliau ymadael ym mhob contract strategol.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
|---|---|---|---|---|---|
| Strwythur | Wedi'i yrru gan y siart sefydliadol, mewn seilos | Rhywfaint o aliniad â ffrydiau gwerth | Platfform a ffederasiwn wedi'u sefydlu | Ffiniau'n cael eu llywodraethu a'u hadolygu yn erbyn metrigau llif | Wedi'i ail-lunio'n barhaus o amgylch canlyniadau |
| Cyllid | Prosiectau blynyddol | Cymysgedd o brosiectau/cynnyrch | Cyllid cynnyrch gyda phyrth mewn camau | Gwariant a'r gwaith darparu'n cael eu holrhain yn erbyn dangosyddion perfformiad allweddol, pyrth wedi'u sicrhau | Cyllid yn seiliedig ar ganlyniadau, a ryddheir ar sail tystiolaeth |
| Hawliau penderfynu | Amwys, popeth yn cael ei uwchgyfeirio | Wedi'u dogfennu'n rhannol | RACI/RAPID wedi'i gyhoeddi a'i ddefnyddio | Oedi cyn penderfynu ac uwchgyfeirio'n cael eu mesur a'u rheoli | Wedi'u datganoli o fewn canllawiau clir, anaml yn cael eu huwchgyfeirio |
| Platfform | Dim; mae pob tîm yn ailadeiladu | Ychydig o elfennau a rennir ad hoc | Platfform hyfyw teneuaf, wedi'i yrru gan alw | Cytundebau lefel gwasanaeth platfform, mabwysiadu a dibynadwyedd yn cael eu holrhain yn erbyn targedau | Platfform fel cynnyrch mewnol aeddfed |
| Cyflenwyr | Caethiwo, pryniannau tactegol | Rhai safonau'n ofynnol | Adeiladu/prynu wedi'i benderfynu'n fwriadol | Perfformiad cyflenwyr a chydymffurfiaeth â safonau wedi'u sicrhau | Safonau agored, hawliau ymadael, marchnad iach |

## Rhestr wirio

- [ ] Mae'r model gweithredu wedi'i gynllunio o ganlyniadau a ffrydiau gwerth, nid yr hierarchaeth bresennol.
- [ ] Darperir galluoedd a rennir fel platfform hyfyw teneuaf, gyda thimau ffrwd yn adeiladu arno.
- [ ] Ariennir timau cynnyrch yn barhaus a'u halinio â ffrydiau gwerth.
- [ ] Mae rheoli gwariant mewn camau (pyrth darganfod/alffa/beta/byw) ac yn gymesur â risg a gwerth.
- [ ] Dogfennir hawliau penderfynu (RACI neu RAPID) a'u cyhoeddi.
- [ ] Ariennir rhedeg a newid yn benodol, gyda'r gyllideb redeg wedi'i diogelu.
- [ ] Deellir mathau o dîm a'u defnyddio (wedi'i alinio â ffrwd, platfform, galluogi, is-system gymhleth).
- [ ] Mae adeiladu/prynu yn ddewis bwriadol ar gyfer pob gallu; mae data clinigol craidd yn osgoi caethiwo.
- [ ] Mae contractau'n mynnu safonau agored (e.e. HL7 FHIR, [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)) a hawliau ymadael.

## Prif ffynonellau

- Matthew Skelton & Manuel Pais — *Team Topologies* (stream-aligned, platform, enabling, complicated-subsystem teams; thinnest viable platform).
- GOV.UK Service Manual — *spend controls* and staged assurance (discovery/alpha/beta/live); Government Digital Service.
- NHS digital service manual — *NHS service standard* (service-manual.nhs.uk).
- AXELOS — *Management of Portfolios (MoP)* and *Managing Successful Programmes (MSP)* for portfolio and programme governance.
- Bain & Company — *RAPID* decision-rights framework; and the RACI responsibility-assignment model.
- John Doerr — *Measure What Matters* (OKRs) for outcome definition.

## Cyfeiriadau

1. Operating model — Wikipedia — https://en.wikipedia.org/wiki/Operating_model
2. Value stream — Wikipedia — https://en.wikipedia.org/wiki/Value_stream
3. Objectives and key results (OKRs) — Wikipedia — https://en.wikipedia.org/wiki/Objectives_and_key_results
4. Responsibility assignment matrix (RACI) — Wikipedia — https://en.wikipedia.org/wiki/Responsibility_assignment_matrix
5. Vendor lock-in — Wikipedia — https://en.wikipedia.org/wiki/Vendor_lock-in
6. Government Digital Service — Wikipedia — https://en.wikipedia.org/wiki/Government_Digital_Service
7. Fast Healthcare Interoperability Resources (HL7 FHIR) — Wikipedia — https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources
8. SNOMED CT — Wikipedia — https://en.wikipedia.org/wiki/SNOMED_CT
9. *Team Topologies: Organizing Business and Technology Teams for Fast Flow* — Matthew Skelton & Manuel Pais, IT Revolution — https://teamtopologies.com/book
10. Spend controls and staged assurance (discovery/alpha/beta/live) — GOV.UK Service Manual, Government Digital Service — https://www.gov.uk/service-manual/agile-delivery
11. NHS service standard — NHS digital service manual, NHS England — https://service-manual.nhs.uk/standards-and-technology/service-standard
12. *Managing Successful Programmes (MSP)* and *Management of Portfolios (MoP)* — AXELOS/PeopleCert — https://www.axelos.com/
13. *Measure What Matters* (OKRs) — John Doerr — https://www.whatmatters.com/the-book
