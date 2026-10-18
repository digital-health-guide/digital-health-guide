# Mada 3.5 — Mizunguko ya Utoaji

**Kwa sentensi moja:** [Mzunguko wa utoaji](https://en.wikipedia.org/wiki/Systems_development_life_cycle) ni mfuatano wa awamu na milango ya maamuzi — Ugunduzi, Alfa, Beta, Huduma Kamili, na hatimaye kustaafu — ambamo huduma ya kidijitali husonga, huku usalama wa kitabibu, utawala wa taarifa, na uhakiki vikifumwa katika kila awamu badala ya kuambatanishwa mwishoni.

## Kwa nini hili ni muhimu katika afya na huduma

Mzunguko ni jinsi shirika linavyogeuza wazo kuwa huduma salama, hai na hatimaye kuistaafisha kwa uwajibikaji. Katika afya na huduma, kila mpito hubeba uzito wa kisheria na wa kitabibu: huwezi kutumia mfumo unaogusa huduma ya mgonjwa bila hoja ya usalama wa kitabibu, na huwezi kuchakata data ya siri ya mgonjwa bila msingi halali na [tathmini ya athari za ulinzi wa data](https://en.wikipedia.org/wiki/Privacy_impact_assessment) (DPIA) iliyokamilika. Mzunguko unaochukulia haya kama karatasi za mwisho wa mradi huzalisha huduma zilizochelewa, zisizo salama, au zote mbili.

Dau si sawa. Programu ya watumiaji inayosafirisha kasoro huwakera watumiaji; rekodi ya pamoja ya huduma inayosafirisha kasoro inaweza kumwonyesha mhudumu wa kitabibu mizio ya mgonjwa asiyefaa. Ndiyo maana NHS inaweka kielelezo cha awamu cha GOV.UK *na* viwango vya usimamizi wa hatari za kitabibu DCB0129 na DCB0160 katika mzunguko uleule. Kupata mzunguko sawa si pambo la utawala — ni utaratibu ambao usalama, usawa, na thamani ya fedha za umma hutolewa kweli badala ya kuahidiwa tu.

Viongozi pia wanahitaji mzunguko kwa sababu hufanya maendeleo *yasomeke*. Awamu na milango iliyotajwa humruhusu bodi kuona huduma iko wapi, ushahidi gani upo, na uamuzi gani unastahili — kubadilisha ukungu wa "karibu imekwisha" na ahadi ya awamu, inayotetewa ya fedha za umma.

## Dhana kuu

**Kielelezo cha awamu: Ugunduzi → Alfa → Beta → Huduma Kamili.** Viwango vya huduma vya NHS na GOV.UK vinafafanua awamu nne. **Ugunduzi** (angalia Mada 3.4 — Awamu za Ugunduzi) unaelewa tatizo. **Alfa** hujenga [mifano ya kutupwa](https://en.wikipedia.org/wiki/Software_prototyping) kujaribu kama suluhisho *linaweza* kufanya kazi na kupunguza dhana za hatari zaidi. **Beta** hujenga huduma halisi, ya faragha kisha ya umma kwenye miundombinu ya uzalishaji, ikirudia na watumiaji halisi kwa ukubwa unaokua. **Huduma Kamili** huendesha huduma kwa uendeshaji endelevu, ikiendelea kurudia, hadi kustaafishwa. Awamu ni ngazi ya kupunguza hatari: kila moja hujitolea fedha zaidi na kufichua watumiaji zaidi, ikihalalishwa na ushahidi kutoka ya mwisho.

**Kurudia kuendelea, si mkanda wa kusafirisha.** Awamu si maporomoko ya njia moja. Huduma katika beta inaweza kurudi alfa kwa kipengele kigumu; huduma kamili inarudia kila wakati. Thamani ya kielelezo ni *milango* yake, si ahadi kwamba kazi inatiririka upande mmoja.

**Agile, maporomoko, na mseto.** *[Maporomoko (Waterfall)](https://en.wikipedia.org/wiki/Waterfall_model)* huweka wigo mapema na kuendelea kwa mfuatano — yanafaa tu pale mahitaji ni thabiti kweli na yanajulikana (uhamishaji wa kituo cha data, badiliko la udhibiti lililoamriwa). *[Agile](https://en.wikipedia.org/wiki/Agile_software_development)* hutoa kwa nyongeza ndogo, kukagua na kurekebisha — inafaa kutokuwa na uhakika wa huduma zinazomkabili mtumiaji. *Mseto* ndio uhalisia wa uaminifu wa programu nyingi kubwa za afya: timu za bidhaa za agile zinazofanya kazi ndani ya kifuniko cha hatua-na-ufadhili ambacho shirika na wadhibiti wake wanakihitaji. Linganisha mbinu na kutokuwa na uhakika, si mitindo.

**Tathmini za huduma na milango ya viwango.** Katika mabadiliko kati ya awamu — hasa alfa-hadi-beta na kabla ya uzinduzi wa umma — huduma za NHS na GOV.UK hukabili **tathmini ya huduma**: jopo huru linalojaribu kazi dhidi ya vipengele vya Service Standard (hitaji la mtumiaji, ufikivu, usalama, kutegemewa, timu, uchaguzi wa teknolojia). Kupita ni mlango wa kutumia fedha zaidi na kufichua watumiaji zaidi. Tathmini ni mapitio ya wenzao ya msingi wa ushahidi, si muhuri wa kawaida.

**Usalama wa kitabibu na utawala wa taarifa kama nyuzi za mzunguko.** DCB0129 (kwa mtengenezaji/msambazaji) na DCB0160 (kwa shirika la afya au huduma linalotekeleza) vinahitaji mfumo wa usimamizi wa hatari za kitabibu, **kumbukumbu ya hatari**, na **ripoti ya hoja ya usalama wa kitabibu** iliyoidhinishwa na Afisa wa Usalama wa Kitabibu (CSO) aliyetajwa, aliyefunzwa. Utawala wa taarifa unahitaji msingi halali, DPIA, na kuzingatia kanuni za Caldicott. Yote mawili ni *nyuzi* zinazopita ugunduzi, alfa, beta, na huduma kamili — si milango mwishoni.

**Kustaafisha.** Mzunguko una mwisho. Kustaafisha huduma kwa usalama — kuhamisha au kuhifadhi data chini ya sheria ya uhifadhi, kuelekeza upya watumiaji, kuwaarifu wahudumu wa kitabibu, na kuhifadhi rekodi — ni awamu yenyewe, na mojawapo inayopuuzwa zaidi.

## Mazoea bora

1. **Tumia awamu kama milango ya kupunguza hatari, si hatua muhimu za kalenda.** Acha uamuzi wa kila awamu uwe "je, kuna ushahidi wa kutosha wa kuhalalisha kujitolea awamu inayofuata ya fedha na watumiaji?" Awamu inayoisha kwa sababu tarehe ilifika, badala ya ushahidi kufika, imeruka hoja ya mlango.

2. **Fuma usalama wa kitabibu tangu alfa, si kabla ya Huduma Kamili.** Teua Afisa wa Usalama wa Kitabibu na ufungue kumbukumbu ya hatari mara umbo la suluhisho linapokuwepo. Hatari zilizotambuliwa katika alfa ni za bei nafuu kuzitoa kwa usanifu; hatari zilizopatikana wakati wa kuanza kutumika ni mgogoro unaozuia uzinduzi. Hoja ya usalama hukomaa pamoja na huduma, kwa hiyo idhini ya DCB0129/0160 ni muhtasari wa kazi iliyofanywa tayari, si mkimbizo.

3. **Anza DPIA na kazi ya IG katika ugunduzi na uiweke hai.** Mtiririko wa data, msingi halali, na masuala ya Caldicott huunda usanifu, kwa hiyo yaibue wakati usanifu bado ni laini. DPIA iliyoandikwa baada ya ujenzi ni zoezi la nyaraka; ile iliyoandikwa kando ya usanifu hupunguza hatari kweli na kuzuia kufanya kazi upya.

4. **Fanya njia ya uzalishaji iwe ya kiotomatiki kwa [CI/CD](https://en.wikipedia.org/wiki/CI/CD) na [DevOps](https://en.wikipedia.org/wiki/DevOps).** [Uunganishaji endelevu](https://en.wikipedia.org/wiki/Continuous_integration) na [utoaji endelevu](https://en.wikipedia.org/wiki/Continuous_delivery) — mabomba ya kiotomatiki ya kujenga, kujaribu, na kutumia — huiwezesha timu kusafirisha mabadiliko madogo, yanayoweza kubatilishwa kwa usalama na mara kwa mara. Katika uwanja wenye usalama wa hali ya juu, uwezo wa kutoa marekebisho ndani ya dakika na kurudi nyuma kwa usafi ni kidhibiti cha usalama chenyewe. Uoanishe na ufuatiliaji, tahadhari, na [miundombinu-kama-msimbo](https://en.wikipedia.org/wiki/Infrastructure_as_code) ili huduma hai iwe [inayoonekana](https://en.wikipedia.org/wiki/Observability_(software)) na inayoweza kuzalishwa upya.

5. **Linganisha mbinu na kutokuwa na uhakika.** Tumia agile pale mahitaji ya mtumiaji hayana uhakika na ugunduzi bado unakufundisha mambo; kubali mfuatano wa mtindo wa maporomoko tu pale mahitaji yamewekwa kweli na hatari ya badiliko ni ndogo. Kuwa wazi kuhusu kuendesha mseto — timu za agile ndani ya kifuniko cha programu — badala ya kujifanya mbinu moja inatawala kila kitu, jambo ambalo halimdanganyi yeyote na kumkera kila mtu.

6. **Chukulia tathmini ya huduma kama zana ya usanifu, si mtihani.** Leta wakaguzi wa uhakiki, usalama wa kitabibu, usalama, na ufikivu *mapema* na mara kwa mara, ili tathmini rasmi ithibitishe huduma iliyojengwa tayari kwa kiwango. Timu zinazokutana na kiwango kwa mara ya kwanza wiki moja kabla ya tathmini hushindwa polepole na kwa gharama; timu zinazokifanya kuwa sehemu yao hupita kama zao-matokeo.

7. **Endelea kurudia katika Huduma Kamili — na uipe rasilimali.** Huduma haiachi kuhitaji timu inapoanza kutumika. Huduma Kamili ndipo matumizi halisi hufichua ukosefu wa usawa wa mwisho, kesi nadra-lakini-kubwa za kitabibu, na mapengo ya ufikivu. Fadhili timu ya bidhaa ya kudumu kwa maisha ya kiuendeshaji ya huduma (angalia Mada 5.0 — Kazi Inayoongozwa na Bidhaa); huduma hai isiyo na timu ni deni la kiufundi linalokusanya hatari ya kitabibu.

8. **Panga kustaafisha kabla hujaihitaji.** Amua, wakati wa kujenga, jinsi huduma itakavyostaafishwa hatimaye: uhifadhi na uhamishaji wa data chini ya sheria ya usimamizi wa rekodi, kuelekeza upya watumiaji, kuwaarifu wahudumu wa kitabibu, na kuhifadhi hoja ya usalama wa kitabibu na njia ya ukaguzi. Kustaafisha kusikopangwa huacha data na watumiaji bila kitu; kupangwa ni awamu inayodhibitiwa, inayokaguliwa.

## Maswali ya kujadili na timu yako

1. **Je, milango yetu ya awamu inatawaliwa kweli na ushahidi, au imegeuka kimyakimya kuwa tarehe kwenye mpango?**
   Thamani yote ya kielelezo cha Ugunduzi–Alfa–Beta–Huduma Kamili ni kwamba kila mpito hujitolea fedha zaidi na kufichua watumiaji zaidi tu pale ushahidi kutoka awamu iliyopita unapohalalisha; mara mlango unapowaka kwa sababu robo iliisha badala ya ushahidi kufika, ngazi huacha kupunguza hatari na kuwa "maporomoko yaliyovaa mavazi ya agile". Swali hili linaiomba timu kutazama kwa uaminifu mabadiliko yake machache ya mwisho na kuuliza nini kingetokea kama ushahidi ungesema "bado" — je, kulikuwa na nafasi ya kusubiri, kurudisha beta alfa kwa kipengele kigumu, au tarehe ya kuanza kutumika haikusogezeka kisiasa? Mvutano wa kujadili ni kati ya hitaji la shirika la hatua muhimu zinazosomeka, zilizopangwa na bodi na uhalisia kwamba huduma salama husonga kwa kasi ya ushahidi, na utoaji wa mseto unaishi hasa katika msuguano huo. Pembe thabiti ni pamoja na kutaja uamuzi mahususi na ushahidi unaostahili kwenye mlango unaofuata, kukagua kama "mbio" hubadilisha wigo kweli au hufuatilia tu mpango uliowekwa, na kuuliza nani anawezeshwa kuchelewesha mlango bila hatari kwa taaluma yake. Jibu zuri linaweza kuelekeza kwenye tukio halisi ambapo ushahidi ulibadilisha mpango, na linaweza kueleza ushahidi gani ungehalalisha — au kuzuia — ahadi inayofuata ya fedha za umma na watumiaji.

2. **Je, usalama wa kitabibu na utawala wa taarifa ni nyuzi hai kupitia kila awamu, au karatasi tunazokusudia kumaliza kabla ya Huduma Kamili?**
   Katika afya na huduma DPIA na kazi ya hatari za kitabibu ya DCB0129/0160 si idhini za mwisho wa mradi bali ni nyuzi zinazopaswa kuunda usanifu na muundo tangu alfa kuendelea, kwa sababu hatari iliyotolewa kwa usanifu mapema ni ya bei nafuu ilhali ile iliyogunduliwa wakati wa kuanza kutumika ni mgogoro unaozuia uzinduzi — au mbaya zaidi, shinikizo la kupitisha hoja ya usalama. Swali hili huibua kama Afisa wa Usalama wa Kitabibu aliyetajwa, aliyefunzwa na kumbukumbu ya hatari iliyo wazi vinapatikana mara umbo la suluhisho linapojitokeza, na kama DPIA na uchambuzi wa msingi halali ulianza katika ugunduzi wakati mtiririko wa data ulikuwa bado laini vya kutosha kubadilisha. Mabadilishano yanayostahili kujadiliwa ni mzigo unaohisiwa wa kufanya hili kila wakati dhidi ya gharama na hatari ya kitabibu kubwa zaidi ya kurekebisha baadaye, hasa kwa timu ndogo au kampuni changa ambapo hakuna mdhibiti anayetazama bado lakini wajibu wa DCB0129 unamfunga mtengenezaji bila kujali. Fikiria ushahidi thabiti: je, kumbukumbu ya hatari inaonyesha hatari zilizopatikana na kupunguzwa katika alfa, je, hoja ya usalama inasomeka kama muhtasari wa kazi iliyofanywa tayari, na je, DPIA inafuatilia maamuzi halisi ya usanifu? Jibu la uaminifu hutofautisha timu inayokomaza hoja yake ya usalama pamoja na huduma na ile inayoelekea mkimbizo wa nyaraka mwezi kabla ya uzinduzi.

3. **Huduma hii itaendeshwaje katika Huduma Kamili na hatimaye kustaafishwa — na nani amefadhiliwa kufanya hivyo?**
   Mizunguko ina mkia mrefu ambao mashirika mara kwa mara hufadhili pungufu: Huduma Kamili ndipo matumizi halisi hufichua ukosefu wa usawa wa mwisho, kesi nadra-lakini-kubwa za kitabibu, na mapengo ya ufikivu, na inahitaji timu ya bidhaa ya kudumu, ufuatiliaji, na utumiaji wa haraka, unaoweza kubatilishwa badala ya timu inayovunjika wakati wa kuanza kutumika ikiiacha huduma ioze na kukusanya hatari ya kitabibu kimyakimya. Vilevile inapuuzwa kustaafisha — kustaafisha huduma chini ya sheria ya uhifadhi wa rekodi, kuhamisha au kuhifadhi data, kuelekeza upya watumiaji, kuwaarifu wahudumu wa kitabibu, na kuhifadhi kumbukumbu ya hatari na njia ya ukaguzi — ambayo kwa mfumo wa kitaifa ni programu kubwa yenyewe, si wazo la baadaye mbadala unapowasili. Mvutano wa kujadili ni mizunguko ya ufadhili ya kila mwaka na shinikizo la kutangaza mradi "umekwisha" wakati wa uzinduzi dhidi ya umiliki wa maisha yote ambao huduma salama inahitaji kweli. Pembe zenye manufaa ni pamoja na kama bomba la CI/CD lenye ufuatiliaji na kurudi nyuma haraka linachukuliwa kama kidhibiti cha usalama hai, kama bajeti ya kuwa kwenye simu na ya kurudia inanusurika sherehe ya kuanza kutumika, na kama mpango wa kutoka uliandikwa wakati wa kujenga badala ya kubuniwa kwa hofu. Jibu zuri hutaja nani anamiliki huduma kwa maisha yake ya kiuendeshaji na kueleza kustaafisha kunakodhibitiwa, kunakokaguliwa badala ya tumaini kwamba mtu atashughulikia baadaye.

4. **Ni lini mwisho tuliruhusu kushindwa kwa mfano kutusimamisha — na je, bado tunajenga vitu vya kutupwa?**
   Alfa ipo kupunguza dhana za hatari zaidi kwa bei nafuu, ambayo inamaanisha mfano wa kutupwa unaoshindwa umefanya kazi yake: umenunua funzo la gharama kabla fedha za uzalishaji na wagonjwa halisi kujitolewa. Swali hili huchunguza kama timu inachukulia alfa kweli kama kujifunza kwa kutupwa au imeteleza kimyakimya hadi kung'arisha mfano wake wa kwanza kuwa bidhaa ya mwisho kwa sababu kutupa msimbo kunahisiwa kupoteza — mtego wa gharama iliyozama unaogeuza awamu ya kupunguza hatari kuwa ahadi ya gharama iliyofanywa kwa upofu. Mvutano unaostahili kuibuliwa ni shinikizo la "kuwa na kitu cha kuonyesha" na kutumia tena kila mstari ulioandikwa dhidi ya nidhamu ya kuthibitisha suluhisho *linaweza* kufanya kazi kabla ya kujenga halisi kwenye miundombinu ya uzalishaji. Pembe thabiti ni pamoja na kuuliza dhana gani alfa ya mwisho ilijaribu kweli, kama mfano wowote uliwahi kutelekezwa kwa ushahidi, na kama ujenzi wa beta ya faragha ulitumia tena msimbo wa kutupwa ambao ulipaswa kuandikwa upya kwa kiwango cha uzalishaji. Jibu la uaminifu linaweza kuelekeza kwenye dhana mahususi ambayo mfano uliua au kuthibitisha, na linaweza kutofautisha vielelezo vya kujifunza ambavyo timu ilikuwa tayari kutupa na msimbo uliohakikiwa inaoendesha sasa katika Huduma Kamili.

5. **Je, tunaendesha mseto mmoja wa uaminifu, au mbinu kadhaa zilizofichwa zinazopingana kimyakimya?**
   Programu nyingi kubwa za afya kweli ni za mseto — timu za bidhaa za agile zinazofanya kazi ndani ya kifuniko cha hatua-na-ufadhili ambacho shirika na wadhibiti wake wanakihitaji — na kushindwa si mseto wenyewe bali kujifanya ni agile safi au maporomoko safi, ili mantiki hizo mbili zigongane bila kusimamiwa kwenye kila mlango. Swali hili linaiomba timu itaje mahali ahadi zilizowekwa, zenye mfuatano zinakaa kweli (hatua za ufadhili, hatua muhimu za udhibiti, kusimamisha uunganishaji) na mahali kurudia halisi kunatokea, badala ya kuruhusu "agile" na "mpango" kila moja kudai programu nzima na kumkera kila mtu. Mabadilishano ya kujadili ni hitaji halali la shirika la hatua muhimu zinazotabirika na matumizi yanayokaguliwa dhidi ya hitaji la timu ya utoaji la kubadilisha wigo kwa ushahidi, na hatua ya uaminifu ni kufanya mishono iwe wazi ili zote ziweze kupangwa kuzunguka. Pembe zenye manufaa ni pamoja na kama kupanga upya vipaumbele vya orodha ya kazi huwahi kunusurika kugusana na mpango wa programu, kama wasambazaji wanaagizwa kwa wigo uliowekwa huku wakiombwa kufanya kazi kwa kurudia, na kama ripoti ambayo bodi inaona inalingana na jinsi kazi inavyofanyika kweli. Jibu zuri linaeleza mseto uliobuniwa kwa makusudi wenye pointi zilizowekwa zilizotajwa na nafasi za kubadilika zilizotajwa, si mkanganyiko ambapo mbinu inadaiwa kwa mwonekano.

6. **Tunajua vizuri kiasi gani huduma hai inafanya nini kwa watumiaji wake sasa hivi — na je, tungegundua madhara kabla hawajaripoti?**
   Huduma hai ya afya ni salama tu kama uwezo wake wa kuonekana: ufuatiliaji, tahadhari, na silika za usalama wa kitabibu zinazogeuza kipimo kuwa hatari ni tofauti kati ya kunasa kasoro ya data iliyopitwa na wakati ndani ya dakika na kujifunza kutoka ripoti ya tukio wiki baadaye. Swali hili huchunguza kama timu inaweza kuona huduma katika uzalishaji — viwango vya makosa, kushindwa kwa uunganishaji, kuacha kwa ufikivu, mapengo ya usawa yanayofichuliwa tu na matumizi halisi — na kama yeyote anatazama dashibodi kwa kuzingatia hatari ya kitabibu, si tu muda wa kufanya kazi wa miundombinu. Mvutano ni gharama na nidhamu ya uwezo wa kuonekana stahiki na kuwa kwenye simu dhidi ya dhana ya kimya kwamba "kutokuwa na habari ni habari njema" huduma inapokuwa hai, ambayo katika uwanja wenye usalama wa hali ya juu ndivyo madhara ya kimya yanavyokusanyika. Pembe thabiti ni pamoja na kama kumbukumbu ya hatari inasasishwa kutoka matukio hai, kama tahadhari zinalingana na athari ya kitabibu badala ya afya ya seva tu, na kama toleo baya linaweza kugunduliwa na kurudishwa nyuma kabla halijawafikia wagonjwa wengi. Jibu la uaminifu linaeleza ishara mahususi ambazo timu inatazama, tukio halisi ambalo ufuatiliaji ulinasa (au kukosa), na jinsi ushahidi hai unavyolisha kurudia kunakofuata.

## Kwa vitendo: mfano wa afya na huduma

Hospitali ya jamii ya NHS inabadilisha mfumo wa zamani wa karatasi-na-lahajedwali wa kupanga ziara za wauguzi wa wilaya. Ikitoka ugunduzini (Mada 3.4), timu inaingia **alfa** na kujenga mifano miwili ya kutupwa kujaribu dhana za hatari zaidi: kwamba wauguzi watatumia simu majumbani mwa wagonjwa, na kwamba ratiba inaweza kuunganishwa na rekodi ya kielektroniki ya mgonjwa. Afisa wa Usalama wa Kitabibu anateuliwa siku ya kwanza ya alfa na kufungua kumbukumbu ya hatari; hatari ya mapema — ratiba iliyopitwa na wakati inayoonyesha ziara iliyokamilishwa tayari na mwenzake — inaendesha uamuzi wa usanifu wa kuonyesha hali ya usawazishaji wa wakati halisi. DPIA, iliyoanza katika ugunduzi, inaashiria kwamba data ya eneo la wafanyakazi wanaofanya kazi peke yao inahitaji msingi halali uliofafanuliwa na kikomo cha uhifadhi.

Katika **tathmini ya huduma ya alfa-hadi-beta**, jopo huru linachunguza ufikivu (wauguzi wenye upungufu wa kuona), usalama, na hoja ya timu. Huduma inapita ikiwa na hatua za kufuata. Katika **beta ya faragha**, wauguzi kumi wanatumia mfumo halisi kwenye miundombinu ya uzalishaji; bomba la CI/CD linaiwezesha timu kusafirisha kila siku na kurudisha toleo baya ndani ya chini ya dakika kumi. Matumizi yanafichua suala la usawa — wafanyakazi wa wakala wasio na vifaa vya hospitali — likisababisha njia mbadala inayotegemea kivinjari. **Beta ya umma** inapanuka hadi maeneo matatu; ripoti ya hoja ya usalama wa kitabibu inakamilishwa na kuidhinishwa chini ya DCB0160 kabla ya utoaji mpana.

Huduma inaanza **Huduma Kamili** ikiwa na timu ya bidhaa ya kudumu, dashibodi za ufuatiliaji, na ratiba ya kuwa kwenye simu. Miezi kumi na minane baadaye, hospitali inapokubali jukwaa la kanda, ratiba **inastaafishwa** kwa mpango: data inahamishwa chini ya ratiba ya uhifadhi, wauguzi wanafunzwa upya na kuelekezwa, na kumbukumbu ya hatari na hoja ya usalama vinahifadhiwa kwa ukaguzi. Kila mpito ulikuwa uamuzi uliounga mkono na ushahidi, si tarehe kwenye chati ya Gantt.

## Mitazamo ya sekta

### Kampuni changa

Mzunguko wa kampuni changa umebanwa na kwa kiasi kikubwa unajitawala: hakuna jopo huru la tathmini ya huduma, kwa hiyo nidhamu ya milango ya Alfa–Beta–Huduma Kamili lazima ijiwekee au itaporomoka kuwa "safirisha kila wakati na tumaini". Faida ni kwamba timu ndogo inaweza kuendesha CI/CD halisi tangu siku ya kwanza na kurudia kwa kasi kuliko chombo chochote kikubwa. Hatari ni kuacha kimyakimya nyuzi za usalama wa kitabibu na DPIA kwa sababu hakuna mdhibiti anayetazama bado — kosa la hatari katika afya, ambapo wajibu wa DCB0129 unamfunga mtengenezaji bila kujali ukubwa wa kampuni, na hatari moja isiyosimamiwa inaweza kumaliza bidhaa na kampuni. Kampuni changa zinapaswa kukubali dhamira ya kielelezo cha awamu — ushahidi kabla ya kufichuliwa — hata bila sherehe, zikiteua Afisa wa Usalama wa Kitabibu (mara nyingi wa sehemu) mara umbo la suluhisho linapokuwepo.

### Biashara ndogo

Mtoa huduma mdogo aliyeimarika — zahanati ya GP, duka la dawa la jamii, nyumba ya wazee, au kliniki ya eneo moja — kwa kawaida hukutana na mzunguko kama *mtumiaji* badala ya mjenzi: anaagiza au anasanidi mfumo wa msambazaji, kwa hiyo idhini ya utekelezaji ya DCB0160 na DPIA ya mahali huangukia kwake hata bila timu ya kidijitali ya ndani. Awamu bado zinatumika, lakini zimebanwa na kutolewa nje: "alfa" ni jaribio linalosimamiwa kwa wagonjwa wachache halisi, "beta" ni utoaji wa awamu kuvuka zahanati, na Huduma Kamili ni kazi ya kawaida huku masasisho ya msambazaji yakifika kila wakati na kwa kiasi kikubwa nje ya udhibiti wa zahanati. Shirika lazima litaje Afisa wa Usalama wa Kitabibu (mara nyingi mshirika wa kitabibu anayechukua jukumu juu ya kazi yake ya kila siku) na kuweka kumbukumbu ya hatari kwa jinsi mfumo *unavyotumika* mahali, kwa sababu kazi ya DCB0129 ya mtengenezaji haifunika hatari mahususi za utekelezaji. Kwa fedha chache na bila TEHAMA maalumu, nidhamu ya kweli ni kutegemea uhakiki wa msambazaji huku ukimiliki maamuzi machache ambayo ni ya maarifa ya mahali tu — nani anafunzwa, njia mbadala ni ipi mfumo ukiwa chini, na data ya mgonjwa inatiririka vipi katika mazingira haya mahususi.

### Biashara kubwa

Hospitali ya NHS au msambazaji mkuu huendesha mzunguko katika umbo lake kamili, lililohakikiwa zaidi: tathmini rasmi za huduma, Afisa wa Usalama wa Kitabibu aliyetajwa, idhini ya utekelezaji ya DCB0160, bodi za ushauri wa mabadiliko, na mzunguko wa ufadhili wa kila mwaka ambao kazi ya agile lazima itoshee ndani yake. Changamoto ya kawaida ni mseto — timu za utoaji za agile zinazofanya kazi ndani ya kifuniko cha programu-na-hatua muhimu ambacho shirika na wakaguzi wake wanakihitaji — na kushindwa kwa kawaida ni "maporomoko yaliyovaa mavazi ya agile", ambapo milango kimyakimya inakuwa tarehe za kalenda. Biashara kubwa zina rasilimali za kufanya CI/CD, uwezo wa kuonekana, na timu za bidhaa za kudumu ipasavyo, hata hivyo ugumu wa shirika na uunganishaji wa mifumo ya zamani mara nyingi hupunguza kasi ya utumiaji hadi kutambaa. Uwajibikaji ni mpana na eneo la athari ni kubwa, kwa hiyo ngazi ya awamu kutoka beta ya faragha hadi huduma kamili si busara ya hiari bali ni udhibiti muhimu wa hatari.

### Serikali

Chombo cha kitaifa hutoa chini ya Service Standard kamili, tathmini za huduma zilizochapishwa, udhibiti wa matumizi, na ukaguzi wa bunge, kwa hiyo kila mlango wa awamu pia ni mahali pa uwajibikaji wa umma. Mizunguko hapa ni mirefu na ufichuzi ni mkubwa — huduma hai ya NHS nzima inaweza kugusa mamilioni — jambo linaloinua dau kwa ngazi ya awamu, uhakiki wa usalama wa kitabibu, na kustaafisha mifumo ya zamani inayobadilishwa. Sheria za ununuzi na makubaliano ya ufadhili ya miaka mingi huunda "agile" inaweza kumaanisha nini kivitendo, na kustaafisha mfumo wa kitaifa (wenye miongo ya rekodi na wajibu wa kisheria wa uhifadhi) ni programu kubwa yenyewe. Mabadilishano ni uhakiki dhidi ya kasi: utoaji wa serikali una milango mingi, jambo linalolinda usalama na fedha za umma lakini linadai juhudi ya makusudi kuziweka timu zikirudia badala ya kurudi kwenye usanifu-mkubwa-mapema.

## Njia za kawaida za kushindwa

- **Maporomoko yaliyovaa mavazi ya agile.** Timu inaendesha "mbio" lakini wigo, tarehe, na usanifu vyote viliwekwa mapema; kurudia ni maigizo. Dawa: acha ushahidi katika kila mlango ubadilishe mpango kweli.
- **Usalama na IG vilivyoambatanishwa mwishoni.** Hoja ya usalama wa kitabibu na DPIA vinaandikwa mwezi kabla ya kuanza kutumika, vikizuia uzinduzi au, mbaya zaidi, vikipitishwa chini ya shinikizo. Dawa: fungua kumbukumbu ya hatari na DPIA katika alfa na ukomaze kila wakati.
- **Uzinduzi wa mlipuko mmoja.** Huduma inaruka beta ya faragha/ya umma na kwenda moja kwa moja utoaji kamili, ikifichua kila mtumiaji kwa programu isiyothibitishwa. Dawa: tumia ngazi ya awamu; kuza ufichuzi kwa ushahidi.
- **Huduma Kamili iliyotelekezwa.** Timu ya utoaji inavunjika wakati wa kuanza kutumika; huduma inaoza, na hatari ya kitabibu inakusanyika kimyakimya. Dawa: fadhili timu ya bidhaa ya kudumu kwa maisha ya kiuendeshaji.
- **Kujaza tathmini.** Viwango vinapuuzwa hadi tathmini inakaribia, kisha vinatimizwa juujuu. Dawa: shirikisha wakaguzi wa uhakiki na wa kitabibu kila wakati.
- **Hakuna mpango wa kutoka.** Huduma inastaafishwa kwa hofu mbadala unapowasili, ikiacha data na watumiaji bila kitu. Dawa: panga kustaafisha kama awamu ya kwanza.

## Kielelezo cha ukomavu

| Kipimo | Kuanzisha | Kuendeleza | Kusawazisha | Kusimamia | Kuratibu |
|---|---|---|---|---|---|
| Nidhamu ya awamu | Ghafla; awamu zinaruka au kubadilishwa jina | Awamu zimetajwa lakini milango inaendeshwa na kalenda | Milango ya msingi wa ushahidi inatawala matumizi na ufichuzi | Maamuzi ya milango hufuatiliwa dhidi ya vigezo vilivyofafanuliwa; matumizi na ufichuzi huripotiwa na kuhakikiwa | Ufadhili wa awamu wa jalada zima la miradi; huduma dhaifu zinasimamishwa mapema |
| Kufaa kwa mbinu | Mbinu moja inalazimishwa kwa kazi zote | Agile inatumika, lakini ndani ya wigo ngumu uliowekwa | Mbinu inalinganishwa na kutokuwa na uhakika; mseto unafanywa wazi | Kufaa kwa mbinu kunapitiwa dhidi ya vipimo vya utoaji; mishono ya mseto inatawaliwa na kupimwa | Timu zinarekebisha mbinu kila wakati kutokuwa na uhakika kunapobadilika |
| Usalama wa kitabibu na IG | Vinashughulikiwa baada ya ujenzi, kama vipo | Vinaibuliwa kwa kuchelewa; CSO/DPIA ni mkimbizo wa uzinduzi | Kumbukumbu ya hatari, hoja ya usalama, DPIA vinadumishwa tangu alfa | Hatari na vidhibiti vya IG hufuatiliwa kwa KPI na kuhakikiwa dhidi ya malengo | Ushahidi wa usalama na IG unaunda usanifu; idhini ni ya kawaida |
| CI/CD na shughuli | Utumiaji wa mikono, wa nadra, wa hatari | Uwekaji kiotomatiki fulani; matoleo ya polepole, yanayoogopwa | Bomba la kiotomatiki, ufuatiliaji, kurudi nyuma haraka | Vipimo vya utumiaji na kutegemewa (DORA) hufuatiliwa na kusimamiwa kwa malengo | Utoaji endelevu kama kidhibiti cha usalama; uwezo mkubwa wa kuonekana |
| Huduma Kamili na kustaafisha | Hakuna timu ya kudumu; hakuna mpango wa kutoka | Timu inabakizwa kwa ghafla; kustaafisha kunabuniwa | Timu ya bidhaa iliyofadhiliwa; kustaafisha kumepangwa | Utendaji wa huduma hai na utayari wa kustaafisha hupimwa na kutawaliwa | Umiliki wa maisha yote; kustaafisha kunadhibitiwa na kukaguliwa |

## Orodha hakiki

- [ ] Huduma ina awamu ya sasa iliyo wazi (Ugunduzi / Alfa / Beta / Huduma Kamili) na uamuzi unaofuata uliotajwa.
- [ ] Mabadiliko ya awamu yanaongozwa na ushahidi, si tarehe.
- [ ] Afisa wa Usalama wa Kitabibu ameteuliwa na kumbukumbu ya hatari iko wazi (DCB0129/0160) tangu alfa kuendelea.
- [ ] DPIA na tathmini ya msingi halali (Caldicott, UK GDPR) ilianza katika ugunduzi na inaendelezwa kuwa ya sasa.
- [ ] Mbinu ya utoaji imelinganishwa na kiwango cha kutokuwa na uhakika, na mpangilio wowote wa mseto uko wazi.
- [ ] Tathmini za huduma zimepangwa, na wakaguzi wa uhakiki/usalama/ufikivu wameshirikishwa mapema.
- [ ] Bomba la CI/CD lenye ufuatiliaji na kurudi nyuma haraka lipo kabla ya beta ya umma.
- [ ] Huduma inafichuliwa kwa watumiaji kwa ngazi ya awamu (beta ya faragha → beta ya umma → huduma kamili), si mlipuko mmoja.
- [ ] Timu ya bidhaa ya kudumu imefadhiliwa kwa maisha ya kiuendeshaji ya huduma (angalia Mada 5.0).
- [ ] Mpango wa kustaafisha unafunika uhifadhi/uhamishaji wa data, kuelekeza upya watumiaji, na kuhifadhi rekodi za usalama na ukaguzi.

## Vyanzo muhimu

- GOV.UK Service Manual — awamu za mradi wa agile (Ugunduzi, Alfa, Beta, Huduma Kamili) na Government Service Standard.
- NHS England — NHS Service Standard na NHS Digital Service Manual; tathmini za huduma za NHS.
- NHS England Digital — DCB0129 (Clinical Risk Management: its Application in the Manufacture of Health IT Systems) na DCB0160 (its Application in the Deployment and Use of Health IT Systems).
- NHS England — uhakiki wa usalama wa kitabibu wa kidijitali; jukumu la Afisa wa Usalama wa Kitabibu, kumbukumbu ya hatari, na ripoti ya hoja ya usalama wa kitabibu.
- NHS England — Digital Technology Assessment Criteria (DTAC).
- Kanuni za UK Caldicott; Data Protection Act 2018 / UK GDPR na tathmini za athari za ulinzi wa data.
- NICE — Evidence Standards Framework for Digital Health Technologies.
- Mazoezi ya DevOps na utoaji endelevu (k.m. uwezo wa DORA: uunganishaji endelevu, uwekaji kiotomatiki wa utumiaji, ufuatiliaji); mwongozo wa GOV.UK Service Manual kuhusu utoaji endelevu na kuendesha huduma.

## Marejeo

1. Systems development life cycle — Wikipedia — https://en.wikipedia.org/wiki/Systems_development_life_cycle
2. Waterfall model — Wikipedia — https://en.wikipedia.org/wiki/Waterfall_model
3. Agile software development — Wikipedia — https://en.wikipedia.org/wiki/Agile_software_development
4. Software prototyping — Wikipedia — https://en.wikipedia.org/wiki/Software_prototyping
5. CI/CD — Wikipedia — https://en.wikipedia.org/wiki/CI/CD
6. Continuous integration — Wikipedia — https://en.wikipedia.org/wiki/Continuous_integration
7. Continuous delivery — Wikipedia — https://en.wikipedia.org/wiki/Continuous_delivery
8. DevOps — Wikipedia — https://en.wikipedia.org/wiki/DevOps
9. Infrastructure as Code — Wikipedia — https://en.wikipedia.org/wiki/Infrastructure_as_code
10. Observability (software) — Wikipedia — https://en.wikipedia.org/wiki/Observability_(software)
11. Privacy impact assessment (data protection impact assessment) — Wikipedia — https://en.wikipedia.org/wiki/Privacy_impact_assessment
12. Agile delivery: the phases of an agile project — Government Digital Service, GOV.UK Service Manual — https://www.gov.uk/service-manual/agile-delivery
13. NHS service standard and NHS digital service manual — NHS England — https://service-manual.nhs.uk/
14. Clinical risk management standards DCB0129 and DCB0160 — NHS England (Clinical Safety) — https://digital.nhs.uk/services/clinical-safety
15. DevOps Research and Assessment (DORA) capabilities — Google Cloud / DORA — https://dora.dev/
16. Continuous delivery — Jez Humble and David Farley — https://continuousdelivery.com/
17. Data protection impact assessments (DPIAs) — Information Commissioner's Office (ICO) — https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/
18. Evidence standards framework for digital health technologies — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
