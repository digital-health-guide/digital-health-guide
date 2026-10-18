# Mada 4.3 — Uwezo wa Kuunganishwa na Viwango vya Data

**Katika afya na huduma, uwezo wa kuunganishwa si urembo wa kiufundi bali ni sharti la usalama wa kitabibu na usawa: mifumo isipoweza kushiriki data sahihi, katika muundo sahihi, yenye maana isiyo na utata, mahali pa huduma, watu hudhurika na ukosefu wa usawa huongezeka.**

## Kwa nini hili ni muhimu katika afya na huduma

Huduma ya mtu mara chache hufanyika mahali pamoja. Tukio moja linaweza kugusa zahanati ya GP, huduma ya ambulensi, idara ya dharura, wodi ya hospitali, muuguzi wa jamii, duka la dawa, timu ya huduma za jamii, na mlezi nyumbani. Kila moja ina sehemu ya rekodi. Sehemu hizo zisipoweza kuletwa pamoja kwa usalama na haraka, wahudumu wa kitabibu hufanya maamuzi bila taarifa zote: mzio ambao haukuonekana, dawa iliyoandikwa mara mbili, kipimo kilichorudiwa bila sababu, bendera ya ulinzi wa walio hatarini isiyoonekana kwa timu inayoihitaji.

Uwezo wa kuunganishwa ndio unaogeuza seti ya mifumo isiyounganishwa kuwa kitu kinachotenda, kwa mtazamo wa mgonjwa, kama huduma iliyounganishwa. Ni mabomba chini ya huduma jumuishi. Unapofanya kazi, mhudumu wa kitabibu katika shirika moja anaweza kuona kile kingine kilichorekodi, na kuamini kinamaanisha anachofikiri. Unaposhindwa, kushindwa mara nyingi hakusikiki hadi mtu adhurike.

Hili pia ni suala la usawa. Watu wenye mahitaji magumu zaidi — wazee dhaifu, wenye magonjwa mengi ya muda mrefu, watu wanaohama kati ya huduma — ndio hasa watu ambao data yao imegawanyika zaidi. Uwezo duni wa kuunganishwa kwa hiyo unadhuru zaidi walio hatarini zaidi. Na ni suala la uaminifu wa umma: watu kwa busara wanadhani NHS tayari inashiriki taarifa zao kwa busara, na hukatishwa tamaa kujifunza jinsi mara nyingi haifanyi hivyo.

Mwishowe, uwezo wa kuunganishwa unalinda fedha za umma. Mifumo ya umiliki isiyoweza kubadilishana data hufunga mashirika kwenye mikataba ya gharama, ngumu kubadilisha na kulazimisha uunganishaji wa ghali wa pointi-kwa-pointi. Kujenga kwa viwango huria ndiyo jinsi unavyoweka chaguzi wazi, kuwaweka wasambazaji kuwa waaminifu, na kuepuka kulipa mara kwa mara kutatua tatizo lilelile.

## Dhana kuu

[Uwezo wa kuunganishwa (Interoperability)](https://en.wikipedia.org/wiki/Interoperability) ni uwezo wa mifumo tofauti kubadilishana taarifa na kuzitumia. Inasaidia kutenganisha tabaka mbili. Uwezo wa kuunganishwa wa kisintaksia au wa kiufundi unamaanisha mifumo miwili inaweza kubadilishana ujumbe na kila moja inaweza kuchambua muundo wake — bahasha inafika na inaweza kufunguliwa. [Uwezo wa kuunganishwa wa kisemantiki](https://en.wikipedia.org/wiki/Semantic_interoperability) unamaanisha mfumo unaopokea unaelewa maudhui yanamaanisha nini kwa njia ileile kama mtumaji — kwamba msimbo wa "mzio wa penisilini" unatafsiriwa kwa mfanano pande zote mbili. Uwezo wa kuunganishwa wa kiufundi bila wa kisemantiki ni hatari: data inatiririka, lakini maana inapotea au kupotoshwa.

Data ya afya hubadilishwa kwa kutumia viwango. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7) ni familia ya viwango vinavyotumika zaidi katika huduma ya afya. Ujumbe wake wa zamani wa HL7 toleo la 2 (v2), unaotumia maandishi yaliyotenganishwa kwa mirija-na-vikombe, bado unaunga mkono kiasi kikubwa cha ujumbe wa hospitali na utaendelea kwa miaka. Kiwango chake cha kisasa, [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), huunda taarifa za kitabibu kama "rasilimali" zinazobadilishwa kupitia [violesura vya kupanga programu (API)](https://en.wikipedia.org/wiki/API) vya mtindo wa wavuti, jambo linalorahisisha sana kufanya kazi kwa wasanidi wa kisasa.

Viwango vya ujumbe havitoshi; pia unahitaji misamiati ya kawaida kwa maudhui. [SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)](https://en.wikipedia.org/wiki/SNOMED_CT) ni istilahi za kitabibu zilizoamriwa kote katika huduma ya NHS kurekodi utambuzi, dalili, taratibu na zaidi. NHS Dictionary of medicines and devices (dm+d) ni msamiati wa kawaida kwa dawa na vifaa vya matibabu, na unaunga mkono maagizo ya dawa ya kielektroniki. [Uainishaji wa Kimataifa wa Magonjwa, marekebisho ya 10 na 11 (ICD-10 na ICD-11)](https://en.wikipedia.org/wiki/ICD-11), unaodumishwa na Shirika la Afya Duniani, hutumika kwa uainishaji, takwimu na malipo badala ya kurekodi kitabibu kwa kila siku. [openEHR](https://en.wikipedia.org/wiki/OpenEHR) ni maelezo huria ya kupanga rekodi ya afya yenyewe kupitia "archetypes" za pamoja, zinazotawaliwa kitabibu, na hutumiwa na mashirika fulani kuweka vielelezo vya data ya kitabibu huru kutoka msambazaji yeyote mmoja.

Mawazo mawili zaidi ni ya msingi. [NHS Number](https://en.wikipedia.org/wiki/NHS_number) ni kitambulisho cha kawaida cha mgonjwa kinachoruhusu rekodi kuhusu mtu mmoja kuunganishwa kwa uhakika kuvuka mashirika; bila kitambulisho cha pamoja, kulinganisha ni kubahatisha. Na [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise) huchapisha "wasifu" unaoeleza hasa jinsi ya kuchanganya viwango vilivyopo kutatua matatizo thabiti kama kushiriki nyaraka, ili wasambazaji tofauti wavitekeleze kwa njia ileile.

Chini ya yote haya kuna uchaguzi wa kimkakati. Kujenga kwa [viwango huria](https://en.wikipedia.org/wiki/Open_standard) na API zilizochapishwa, zinazoweza kutumika tena kunaweka soko likiwa na ushindani na data yako ikihamishika. Kutegemea violesura vya umiliki huunda [kufungwa na msambazaji](https://en.wikipedia.org/wiki/Vendor_lock-in), ambapo kubadilisha msambazaji kunakuwa ghali sana hivi kwamba kwa vitendo huwezi. Hakuna kati ya haya linalotoa thamani, hata hivyo, bila [ubora wa data](https://en.wikipedia.org/wiki/Data_quality): data sahihi, kamili, ya wakati, iliyowekewa misimbo kwa uthabiti ni sharti la uwezo wa kuunganishwa, si wazo la baadaye.

## Mazoea bora

1. **Tofautisha uwezo wa kuunganishwa wa kisemantiki na wa kiufundi, na ubuni kwa yote mawili.** Ni rahisi kusherehekea kwamba ujumbe sasa unatiririka kati ya mifumo miwili na kukosa kwamba mhudumu wa kitabibu anayepokea hawezi kutegemea maana yake kwa usalama. Uliza daima: je, upande mwingine unatafsiri misimbo, vipimo, na ukanushaji hivi kwa usahihi kama sisi? Wekeza katika istilahi za pamoja (SNOMED CT, dm+d) na seti za thamani, si miundo ya ujumbe tu, kwa sababu mzio uliotumwa kwa usahihi lakini ukaeleweka vibaya ni hatari zaidi kuliko kutokuwa na ujumbe kabisa.

2. **Jenga kwa viwango huria na utumie tena majukwaa badala ya kubuni upya.** Kubali kanuni inayoungwa mkono sana: jenga kwa viwango huria, na utumie tena majukwaa na huduma za kitaifa zilizopo kabla ya kujenga yako. Katika NHS hii inamaanisha kupendelea API za HL7 FHIR, kutumia NHS Number kama kitambulisho, na kuunganisha na huduma za kitaifa kama Spine, GP Connect, na rekodi za pamoja za huduma badala ya kuunda viungo maalumu vya pointi-kwa-pointi. Kutumia tena hupunguza gharama, husambaza mzigo wa matengenezo, na kunamaanisha data yako inaweza kusafiri.

3. **Fanya NHS Number isiyojadilika katika kila rekodi na ujumbe.** Kuunganisha rekodi kwa kutegemewa kunategemea kitambulisho cha kawaida kinachoaminika. Hakikisha NHS Number inanaswa, inathibitishwa dhidi ya huduma ya kitaifa ya idadi ya watu, na kubebwa kwenye kila rekodi na kiolesura husika. Pale inapokosekana au haijathibitishwa, chukulia hilo kama kasoro ya ubora wa data ya kutatua, kwa sababu kulinganisha kwa jina na tarehe ya kuzaliwa peke yake huzalisha kutolingana hatari na viungo vilivyokosekana.

4. **Chukulia ubora wa data kama matokeo ya kwanza.** Uwezo wa kuunganishwa husafirisha matatizo ya ubora wa data yako kwa kila mtu aliye chini. Chunguza data yako, pima ukamilifu na uthabiti wa misimbo, na weka usimamizi ili makosa yapatikane na kurekebishwa kwenye chanzo. Kupotoka kwa misimbo, maandishi huru pale data iliyopangwa inahitajika, na vipimo visivyo thabiti vitaharibu kimyakimya kila uchanganuzi na mtazamo wa kitabibu wa chini, kwa hiyo fadhili kazi hii waziwazi badala ya kudhani inatokea yenyewe.

5. **Pendelea usanifu unaoanza-na-API, uliounganishwa kwa urahisi kuliko uunganishaji mkali.** Buni ili uwezo ufichuliwe kupitia API zilizoandikwa vizuri, zenye matoleo ambazo wengine wanaweza kutumia bila mazungumzo maalumu. Hii ni polepole mwanzoni kuliko kiungo cha moja kwa moja cha hifadhidata, lakini ndiyo inayokuruhusu kubadilisha kijenzi kimoja bila kujenga upya kila kitu kinachokizunguka. Pia inalingana na jinsi huduma za kitaifa na wasambazaji wa kisasa sasa wanavyotarajia kuunganisha, na inaunga mkono mbinu za utoaji katika Mada 3.5 — Mizunguko ya Utoaji.

6. **Tumia wasifu uliochapishwa na majaribio ya uzingatiaji, si tafsiri za mahali.** Viwango ni vinavyonyumbulika, na timu mbili zinaweza kutekeleza rasilimali "ileile" ya FHIR kwa njia zisizolingana. Kubali miongozo ya utekelezaji ya kitaifa na wasifu wa IHE unaobainisha maelezo, na udai wasambazaji waonyeshe uzingatiaji dhidi yake kabla ya kuanza kutumika. Majaribio ya uzingatiaji hugeuza "tunaunga mkono FHIR" — dai linalomaanisha kidogo sana peke yake — kuwa ukweli unaoweza kuthibitishwa, wa kimkataba.

7. **Andika mahitaji ya uwezo wa kuunganishwa na viwango huria katika ununuzi na mikataba.** Wakati wa bei nafuu zaidi wa kuepuka kufungwa ni kabla ya kusaini. Dai API huria, zilizoandikwa, haki ya kutoa data yako mwenyewe katika muundo wa kawaida, kuzingatia viwango vilivyotajwa, na hakuna ada kwa uunganishaji wa kawaida. Fanya kazi na wenzako wa kibiashara (angalia Mada 6.3 — Ununuzi na Biashara) ili haya yawe vigezo vya lazima vya tathmini, si tamaa zinazojadiliwa kuondolewa baadaye.

8. **Tawala uwezo wa kuunganishwa na usalama wa kitabibu na utawala wa taarifa chumbani.** Kila mtiririko mpya wa data hubadilisha hatari ya kitabibu na ushughulikiaji wa taarifa za siri. Leta maafisa wa usalama wa kitabibu na viongozi wa utawala wa taarifa katika maamuzi ya usanifu tangu mwanzo, si kama idhini ya mwisho, ili rekodi za pamoja ziwe salama na halali. Hii inaunganishwa moja kwa moja na Mada 1.6 — Usalama wa Kitabibu na Usimamizi wa Hatari na Mada 1.7 — Utawala wa Taarifa, Ulinzi wa Data na Usalama wa Mtandao.

## Maswali ya kujadili na timu yako

1. **Wapi katika njia zetu za huduma data inayokosekana au inayoeleweka vibaya inaleta hatari kubwa zaidi ya kitabibu leo?** Uwekezaji katika uwezo wa kuunganishwa unapaswa kufuata madhara na thamani, si mitindo ya usanifu. Chora safari ambazo wagonjwa wako wenye mahitaji magumu zaidi huchukua kweli na ubaini makabidhiano ambapo taarifa zinapotea, zinachelewa, au zinafika bila maana ya kutegemewa. Waulize wahudumu wa kitabibu wapi wanafanya kazi kipofu mara kwa mara — uhamisho, mapengo ya nje ya saa, mpaka kati ya afya na huduma za jamii. Tofautisha mahali data haitiririki kabisa na mahali inatiririka lakini haiwezi kuaminiwa, kwa sababu haya yanahitaji marekebisho tofauti. Fikiria idadi ya watu iliyoathirika zaidi, kwa kuwa mgawanyiko huelekea kuangukia zaidi watu wenye mahitaji magumu zaidi. Jibu linakuambia pa kuanzia, na linakupa hoja ya usalama wa kitabibu itakayobeba uzito zaidi ya hoja yoyote ya kiufundi.

2. **Tumefichuliwa kiasi gani na kufungwa na msambazaji, na ingetugharimu kweli nini kubadilisha mifumo yetu mikuu ya kitabibu?** Mashirika mengi hugundua bei halisi ya mfumo uliofungwa tu wanapojaribu kuuacha. Pitia, kwa uthabiti, nini kingechukua kutoa data yako katika muundo unaoweza kutumika, wa kawaida na kuhamia msambazaji mwingine. Chunguza mikataba yako kwa nani anamiliki data, ni violesura gani vya kawaida vipo, na kama unatozwa kwa uunganishaji ambao unapaswa kuwa wa kawaida. Tambua violesura vya umiliki na miundo ya data ambayo ingehitaji kufumuliwa. Pima hili dhidi ya uwazi wa mbadala na majukwaa ya kitaifa unayoweza kutumia tena badala yake. Hili si kuhusu kubadilisha wasambazaji mara kwa mara; ni kuhusu kuelewa nguvu yako na kupunguza hatari kwamba ramani ya safari ya msambazaji mmoja inakuwa chaguo lako pekee.

3. **Je, data yetu ni nzuri vya kutosha kushirikiwa kwa usalama, na tungejuaje?** Kushiriki data duni hakukuaibishi tu — kunaeneza makosa katika maamuzi ya wahudumu wengine wa kitabibu. Uliza kama unapima kweli ukamilifu, usahihi, wakati, na uthabiti wa misimbo wa data unayokusudia kuifichua. Jadili nani anamiliki ubora wa data katika shirika lako na kama wana muda na mamlaka ya kurekebisha matatizo kwenye chanzo. Fikiria sehemu gani ya rekodi ina NHS Number iliyothibitishwa na taarifa ngapi muhimu za kitabibu bado zinakaa katika maandishi huru badala ya sehemu zilizowekewa misimbo. Fikiria jinsi ungegundua kosa la kimfumo la misimbo kabla halijafika rekodi ya pamoja ya huduma. Ikiwa huwezi kujibu maswali haya kwa ushahidi, chukulia hilo kama matokeo yenyewe, na ufadhili kazi ya ubora wa data kabla ya kupanua bomba.

4. **Msambazaji anaposema "tunaunga mkono FHIR", tungethibitishaje kweli kabla ya kuanza kutumika?** Lebo ya kiwango ni dai la uuzaji hadi ijaribiwe dhidi ya mwongozo mahususi wa utekelezaji. Jadili kama shirika lako lina uwezo wowote wa majaribio ya uzingatiaji wa lake yenyewe, au unachukua tu neno la wasambazaji. Mifumo miwili inaweza kila mmoja kuwa "inayozingatia FHIR" na bado kushindwa kubadilishana ujumbe unaoweza kutumika, kwa sababu kiwango ni cha kunyumbulika kwa makusudi na maana inakaa katika wasifu na seti za thamani zinazokibana. Uliza miongozo ipi ya utekelezaji ya kitaifa na wasifu wa IHE unatumika kwa kiolesura husika, na nani upande wako ana uwezo wa kuzisoma. Fikiria kama uzingatiaji umeandikwa katika mkataba kama sharti la kuunganisha, au unagunduliwa kwa uchungu wakati wa uunganishaji. Jibu la uaminifu hutaja wasifu mahususi ungejaribu dhidi yake, mtu au kazi ambayo ingeendesha jaribio, na hatua katika ratiba ambapo msambazaji anayeshindwa anakataliwa badala ya kupitishwa.

5. **Nani anamiliki viwango, istilahi na uzingatiaji katika shirika letu, na je, wana mamlaka ya kusema hapana?** Uwezo wa kuunganishwa huoza bila usimamizi: seti za thamani hupotoka, miongozo ya mahali hutofautiana, na kila mradi mpya kimyakimya hubuni tafsiri yake. Uliza kama kuna kazi iliyotajwa inayowajibika kwa viwango, vikundi vidogo vya SNOMED CT na dm+d, na uzingatiaji, au maarifa haya yanakaa vichwani mwa watu wachache. Fikiria mvutano kati ya uthabiti wa kati na kasi ya utoaji wa mahali — timu zilizo chini ya shinikizo zitajenga kitu cha haraka zaidi isipokuwa kazi ya viwango ina mamlaka halisi ya kudai kutumia tena. Jadili jinsi matengenezo ya istilahi yanavyofadhiliwa, kwa kuwa hayavutii, ni endelevu, na yanamnufaisha kila mtu badala ya mradi wowote mmoja. Angalia jinsi unavyoweka utekelezaji ukilingana FHIR, SNOMED CT na miongozo ya kitaifa inapobadilika, badala ya kuganda kwenye toleo ulilokubali kwanza. Jibu la uaminifu hubainisha mmiliki anayewajibika, ufadhili wake, na mfano wa hivi karibuni ambapo aidha alilazimisha kiwango au alishindwa.

6. **Je, watu ambao rekodi zao tunaziunganisha wamearifiwa na wameridhika na jinsi data yao inavyotiririka?** Uwezo wa kuunganishwa si suala la kiufundi na la kitabibu tu bali ni swali la uaminifu wa umma na msingi halali. Watu kwa busara wanadhani NHS tayari inashiriki taarifa zao kwa busara, na hukatishwa tamaa wakati haifanyi hivyo na wakati inafanya kwa njia ambazo hawakutarajia. Jadili kama wagonjwa wanaelewa mashirika yapi yanaweza kuona rekodi yao ya pamoja, jinsi National Data Opt-Out au kielelezo cha ridhaa cha mahali kinavyoheshimiwa kuvuka mtiririko, na jinsi ufikiaji unavyorekodiwa na kukaguliwa. Fikiria pembe ya usawa: watu ambao data yao imegawanyika zaidi — wenye mahitaji magumu — pia ndio wasioweza kuabiri kujitoa na notisi za taarifa. Leta utawala wa taarifa na, pale inapofaa, wagonjwa au wawakilishi wao katika usanifu badala ya kuchukulia ridhaa kama kisanduku kilichowekewa alama mwishoni. Jibu la uaminifu linaweza kueleza msingi halali kwa kila mtiririko, jinsi mtu angegundua nani ameona rekodi yake, na jinsi chaguzi zao zinavyoheshimiwa mwanzo hadi mwisho.

## Kwa vitendo: mfano wa afya na huduma

Mfumo jumuishi wa huduma kaskazini mwa Uingereza unaanza kuwapa wahudumu wa kitabibu mtazamo mmoja wa dawa za pamoja kuvuka huduma za msingi, hospitali, na maduka ya dawa ya jamii, baada ya mapitio ya tukio zito kugundua mgonjwa aliandikiwa dawa mbili zinazoingiliana na timu zisizoweza kuona rekodi za kila mmoja.

Kishawishi ni kununua "dashibodi ya dawa" kutoka kwa msambazaji mmoja na kuiunganisha moja kwa moja na hifadhidata ya kila mfumo. Kiongozi wa uwezo wa kuunganishwa anapinga hili. Badala yake programu inakubali mkabala wa kujenga-kwa-viwango-huria. Kila mfumo wa chanzo unafichua data ya dawa kama rasilimali za HL7 FHIR; kila dawa inawekewa msimbo kwa dm+d ili "dawa ileile" imaanishe kitu kilekile kila mahali; na kila rekodi inafungwa kwa NHS Number iliyothibitishwa ili dawa sahihi ziambatane na mtu sahihi. Data ya GP inavutwa kupitia GP Connect badala ya mlisho maalumu, ikitumia tena uwezo wa kitaifa badala ya kubuni wa mahali.

Uchunguzi wa mapema wa data unaonyesha thamani yake mara moja. Mfumo wa zahanati moja umekuwa ukirekodi dawa fulani kwa maandishi huru badala ya maingizo yaliyowekewa misimbo ya dm+d, ikimaanisha zingekuwa hazionekani kwa ukaguzi wowote wa kiotomatiki wa mwingiliano. Hili linarekebishwa kwenye chanzo kabla ya kuanza kutumika. Timu pia inapata kundi la rekodi zenye NHS Number zisizothibitishwa na kuzielekeza kupitia huduma ya kitaifa ya idadi ya watu kwa kulinganisha.

Afisa wa usalama wa kitabibu na kiongozi wa utawala wa taarifa ni sehemu ya kikundi cha usanifu muda wote. Pamoja wanafafanua hasa data gani inashirikiwa, na nani, chini ya msingi gani halali, na jinsi ufikiaji wa mhudumu wa kitabibu unavyorekodiwa — masuala ya Mada 1.7 — Utawala wa Taarifa, Ulinzi wa Data na Usalama wa Mtandao. Wasambazaji lazima wapite majaribio ya uzingatiaji dhidi ya mwongozo wa kitaifa wa utekelezaji wa FHIR kabla ya kuunganisha. Miezi kumi na miwili baadaye, mtazamo wa dawa uliounganishwa uko hai, mwingiliano ambao hapo awali ungekosekana tayari umenaswa, na — kwa sababu kila kitu kilijengwa kwa violesura huria — kesi ya matumizi ya pili, taarifa za pamoja za mzio, inatumia tena mabomba mengi yaleyale kwa sehemu ndogo ya gharama ya awali.

## Mitazamo ya sekta

### Kampuni changa

Kampuni changa ya afya ya kidijitali huishi au hufa kwa jinsi inavyochomeka kwa urahisi kwenye mifumo iliyopo, kwa hiyo chukulia uwezo wa kuunganishwa kama kipengele cha msingi, si mzigo wa uzingatiaji. Kujenga API za FHIR na kutumia SNOMED CT na dm+d tangu mwanzo kunakufanya iwe rahisi zaidi kununuliwa na kuunganishwa, na kunaashiria ukomavu kwa wanunuzi makini wa NHS. Pinga hamu ya kubuni kielelezo chako cha data wakati kiwango kipo; utofautishaji wako unapaswa kuwa bidhaa yako, si muundo wa umiliki unaogeuka dhima. Kupata ushughulikiaji wa NHS Number na utawala wa taarifa sawa mapema ndiko kunakokuruhusu kuhama kutoka jaribio hadi ununuzi. Buni ili mteja, kwa kanuni, aweze kutoa data yake na kuondoka — ajabu, uwazi huo ndio unaopata uaminifu wa kuwabakiza.

### Biashara ndogo

Mtoa huduma mdogo aliyeimarika — zahanati ya GP, duka la dawa la jamii, nyumba ya wazee, au kliniki ya eneo moja — hubeba wajibu uleule wa kushiriki data kwa usalama kama hospitali kubwa, lakini kwa sehemu ndogo ya uwezo wa kiufundi. Hapa uwezo wa kuunganishwa kwa kiasi kikubwa ni nidhamu ya ununuzi na usanidi badala ya uhandisi: chagua mifumo ambayo tayari inazungumza FHIR, unganisha na huduma za kitaifa kama GP Connect na Spine, na weka misimbo kwa SNOMED CT na dm+d moja kwa moja, ili urithi viwango badala ya kuvijenga. Fanya kunasa NHS Number iliyothibitishwa kuwa sehemu ya mazoezi ya kila siku, kwa sababu bila timu ya uunganishaji ya kupatanisha kutolingana baadaye, kupata kitambulisho sawa wakati wa usajili ndio kinga yako ya bei nafuu zaidi. Tegemea programu za rekodi za pamoja za huduma na miundombinu ya pamoja ya mfumo wako jumuishi wa huduma badala ya kuagiza viungo maalumu usivyoweza kudumisha. Unaposaini au kufanya upya mkataba wa mfumo, sisitiza haki za kutoa data na violesura huria kwa maneno rahisi, kwa sababu shirika dogo huhisi kufungwa na msambazaji kwa ukali zaidi na lina nguvu ndogo zaidi ya kuepuka baadaye.

### Biashara kubwa

Mtoa huduma mkubwa au muuzaji kwa kawaida hubeba miongo ya mifumo ya zamani: violesura vya HL7 v2, mifumo mingi ya rekodi za kielektroniki, na injini za uunganishaji zinazoshikilia yote. Mkakati wa kweli si kung'oa kila kitu bali kuweka tabaka la msingi wa viwango, linaloanza-na-API mbele ya mazingira, ukihamisha mitiririko kwenda FHIR hatua kwa hatua huku ukiweka v2 ikiendeshwa pale lazima. Jilinde kwa ukali dhidi ya kufungwa katika kila upyaji, na usisitize majaribio ya uzingatiaji ili "inayozingatia viwango" ithibitishwe badala ya kudaiwa. Anzisha kazi ya ndani ya viwango na uzingatiaji ili miradi mmoja mmoja isibuni kila moja tafsiri yake. Hii inahusiana kwa karibu na jinsi unavyosimamia majukwaa ya msingi ya kiuendeshaji katika Mada 5.4 — Mipango ya Rasilimali za Shirika (ERP), ambapo nidhamu ileile ya kutumia tena na kiolesura huria inatumika.

### Serikali

Vyombo vya kitaifa na vya kanda huweka sheria za soko, kwa hiyo chaguzi zao kuhusu viwango huenea kwa kila shirika. Jambo lenye thamani zaidi serikali inaweza kufanya ni kuamuru viwango huria, kuchapisha miongozo wazi ya utekelezaji na mahitaji ya uzingatiaji, na kutoa majukwaa ya kitaifa yanayoweza kutumika tena — Spine, GP Connect, mifumo ya rekodi za pamoja za huduma, huduma ya NHS Number — ili mashirika ya mahali yajenge mara moja na kutumia tena. Uthabiti ni muhimu kuliko ukamilifu: kiwango kizuri-cha-kutosha kinacholazimishwa kwa uthabiti kinashinda kile bora kinadharia ambacho kila mtu anakitekeleza tofauti. Serikali pia lazima ifadhili kazi isiyovutia ya matengenezo ya istilahi na uboreshaji wa ubora wa data, kwa sababu hizi ni manufaa ya umma ambayo hakuna shirika moja litafadhili peke yake. Jukumu hili la usimamizi linaunganishwa na Mada 9.1 — Kufanya Kazi na Serikali za Mahali na za Kitaifa na jinsi washirika wanavyoshirikiana katika Mada 9.0 — Kushirikiana na Mashirika Washirika.

## Njia za kawaida za kushindwa

- **Kuchanganya muunganisho wa kiufundi na uelewa wa kisemantiki.** Kutangaza ushindi ujumbe unapotiririka, bila kuthibitisha pande zote mbili zinatafsiri misimbo, vipimo, na ukanushaji wake kwa mfanano. Matokeo ni data inayoonekana imeunganishwa lakini inasomwa vibaya kimyakimya.
- **Kushiriki data duni haraka zaidi.** Kupanua bomba kabla ya kurekebisha ubora wa data, ili makosa ya misimbo, maandishi huru, na NHS Number zinazokosekana zienee kwenye maamuzi ya wahudumu wengine wa kitabibu na kila uchanganuzi wa chini.
- **"Tunaunga mkono FHIR" kama dai tupu.** Kukubali lebo ya kiwango bila majaribio ya uzingatiaji dhidi ya mwongozo mahususi wa utekelezaji, ili mifumo miwili "inayozingatia" bado isiweze kuzungumza.
- **Uunganishaji wa pointi-kwa-pointi maalumu.** Kujenga viungo vya moja kwa moja kati ya kila jozi ya mifumo, kuzalisha mtandao dhaifu unaokuwa mgumu na ghali zaidi mara nyingi kudumisha unapokua.
- **Kufunga kwa chaguo-msingi.** Kusaini mikataba yenye violesura vya umiliki na bila haki za kutoa data, na kugundua gharama ya mtego tu unapojaribu kubadilisha msambazaji.
- **Kuchukulia utawala kama mlango wa mwisho.** Kuleta usalama wa kitabibu na utawala wa taarifa tu kwa idhini, ili matatizo yajitokeze kwa kuchelewa na kwa gharama, au kupitishwa chini ya shinikizo la utoaji.
- **Viwango bila usimamizi.** Kukubali istilahi na wasifu lakini kutofadhili yeyote kudumisha seti za thamani, kufuatilia uzingatiaji, au kuweka utekelezaji ukilingana viwango vinapobadilika.

## Kielelezo cha ukomavu

| Kipimo | Kuanzisha | Kuendeleza | Kusawazisha | Kusimamia | Kuratibu |
|---|---|---|---|---|---|
| Kukubali viwango | Ghafla, hasa violesura vya umiliki au vya mikono | HL7 v2 na FHIR fulani zinatumika; chaguzi hutofautiana kwa mradi | FHIR, SNOMED CT na dm+d vimekubaliwa kama chaguo-msingi na miongozo ya mahali | Uzingatiaji wa miongozo ya kitaifa unafuatiliwa na kuripotiwa; mikengeuko inatawaliwa na kuhakikiwa | Uzingatiaji kamili wa miongozo ya utekelezaji ya kitaifa na wasifu wa IHE, unaothibitishwa kwa majaribio |
| Kitambulisho na kuunganisha | NHS Number mara nyingi inakosekana au haijathibitishwa | Inanaswa lakini haithibitishwi kwa uthabiti | Imethibitishwa dhidi ya huduma ya kitaifa kwenye rekodi nyingi | Viwango vya uthibitishaji hupimwa dhidi ya malengo, rekodi zisizolinganishwa zikifanyiwa kazi kikamilifu | Imethibitishwa kila mahali; ubora wa kulinganisha unafuatiliwa kikamilifu |
| Ubora wa data | Haupimwi; maandishi huru ni ya kawaida pale misimbo inahitajika | Unapimwa mahali pengine; marekebisho ni ya kuitikia | Umechunguzwa, unamilikiwa, na kuboreshwa kwenye chanzo | Vipimo vya ubora hufuatiliwa dhidi ya vizingiti, usimamizi ukiwajibishwa | Ufuatiliaji endelevu na ugunduzi wa kiotomatiki wa kasoro kabla data kushirikiwa |
| Usanifu | Pointi-kwa-pointi, ulioshikanishwa kwa ukali | Injini ya uunganishaji, uunganishaji mchanganyiko | Unaoanza-na-API, ukitumia tena majukwaa ya kitaifa | Utendaji wa API na utegemezi hufuatiliwa; mabadiliko yanatawaliwa kupitia matoleo na majaribio | Ulioshikanishwa kwa urahisi, wa msingi wa viwango, vijenzi vinabadilika bila kufanya kazi upya |
| Kufungwa na ununuzi | Mikataba ya umiliki, hakuna haki za kutoka | Baadhi ya vifungu vya viwango, vinalazimishwa kwa udhaifu | Viwango huria na haki za kutoa data zinadaiwa | Uzingatiaji wa mkataba na utayari wa kutoka hupitiwa na kuhakikiwa katika jalada la miradi | Violesura huria vya lazima na vilivyothibitishwa; ubadilikaji halisi wa wasambazaji |

## Orodha hakiki

- [ ] Kila rekodi na kiolesura husika kinabeba NHS Number iliyothibitishwa, kukiwa na mchakato wa kutatua zinazokosekana au zisizolinganishwa.
- [ ] Violesura vipya vinatumia HL7 FHIR na miongozo ya utekelezaji ya kitaifa iliyotajwa, HL7 v2 ikibakizwa tu pale uhamishaji haujahalalishwa.
- [ ] Maudhui ya kitabibu yanawekewa misimbo kwa SNOMED CT, na dawa kwa dm+d, dhidi ya seti za thamani zilizokubaliwa.
- [ ] Ubora wa data kwa chochote unachokusudia kushiriki unachunguzwa, kupimwa, kumilikiwa, na kuboreshwa kwenye chanzo kabla ya kupanua bomba.
- [ ] Wasambazaji lazima wapite majaribio ya uzingatiaji dhidi ya wasifu mahususi kabla ya kuunganisha — "inaunga mkono FHIR" kamwe haikubaliwi peke yake.
- [ ] Majukwaa ya kitaifa (Spine, GP Connect, rekodi za pamoja za huduma) yanatumiwa tena kabla ya uunganishaji wowote maalumu kujengwa.
- [ ] Mikataba inaamuru API huria, zilizoandikwa, haki za kutoa data katika muundo wa kawaida, na hakuna ada kwa uunganishaji wa kawaida.
- [ ] Maafisa wa usalama wa kitabibu na viongozi wa utawala wa taarifa wako katika kikundi cha usanifu tangu mwanzo, si wakati wa idhini tu.
- [ ] Usanifu unaanza-na-API na umeshikanishwa kwa urahisi, ili kijenzi kiweze kubadilishwa bila kujenga upya kila kitu kukizunguka.
- [ ] Kazi iliyotajwa inamiliki viwango, uzingatiaji, na matengenezo ya istilahi katika shirika zima.

## Vyanzo muhimu

- NHS England — viwango vya uwezo wa kuunganishwa, Spine, GP Connect, na programu za rekodi za pamoja za huduma.
- HL7 International — kiwango cha FHIR na maelezo ya HL7 v2.
- SNOMED International — istilahi za SNOMED CT na mwongozo wa utekelezaji.
- NHS Business Services Authority — Dictionary of medicines and devices (dm+d).
- Integrating the Healthcare Enterprise (IHE) — wasifu wa uwezo wa kuunganishwa.
- openEHR International — maelezo huria ya kupanga rekodi ya afya.
- World Health Organization — Uainishaji wa Kimataifa wa Magonjwa (ICD-10 na ICD-11).

## Marejeo

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
