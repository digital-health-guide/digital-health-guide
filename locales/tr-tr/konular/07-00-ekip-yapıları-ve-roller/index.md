# Konu 7.0 — Ekip Yapıları, Roller ve Sorumluluklar

**Tek cümleyle:** Dijital sağlık teslimatı, ekipler arasındaki sınırları nasıl çizdiğinize ve kimin ne yaptığını ne kadar net adlandırdığınıza göre başarılı ya da başarısız olur — bu nedenle ekipleri değerin hızlı ve güvenli akışı için yapılandırın, çok disiplinli biçimde kadrolayın ve sorumlulukları açık hale getirin.

## Sağlık ve bakımda bu neden önemli

Ekiplerinizi nasıl örgütlediğiniz, hizmetlerinizin nasıl davranacağını belirler. Bir sistemin tasarımının onu inşa eden kuruluşun iletişim yapısını yansıttığını söyleyen **[Conway Yasası](https://en.wikipedia.org/wiki/Conway%27s_law)**, sağlık ve bakımda bir merak konusu değil; bir hasta güvenliği riskidir. Parçalanmış ekipler, parçalanmış bakım kayıtları, kırılgan entegrasyonlar ve klinik riskin saklandığı devir noktaları üretir.

NHS'te ve sosyal bakımda ayrıca kamu parası harcıyor ve yasal görevler taşıyorsunuz: DCB0129/DCB0160 kapsamında klinik güvenlik, UK GDPR ve gizlilik konusundaki örf ve adet hukuku (common law) görevi kapsamında bilgi yönetişimi ve erişilebilirlik yükümlülükleri. Bu görevler en sona sonradan eklenemez. Bunları yerine getirme yetkisine ve zamanına sahip isimli kişiler tarafından ekibin *içinde* temsil edilmeleri gerekir.

Yapıyı doğru kurarsanız çok disiplinli ekipler, klinisyenlerin güvendiği ve hastaların kullanabildiği çalışan yazılımlar teslim eder. Yanlış kurarsanız, hizmetin bütünü tıkanırken kendi silolarını optimize eden meşgul uzmanlar elde edersiniz — geç kalan, bütçeyi aşan ve sessizce terk edilen dijital programların ardındaki klasik örüntü.

## Temel kavramlar

**[Çok disiplinli ekipler](https://en.wikipedia.org/wiki/Interdisciplinarity) (MDT'ler).** Bir dijital teslimat ekibi, bir hizmeti sürekli dış bağımlılık olmadan tasarlamak, inşa etmek ve işletmek için gereken her disiplini içermelidir — ürün, teslimat, tasarım, araştırma, mühendislik, veri ve klinik ile yönetişim bakış açıları. Bu, personelin zaten bildiği klinik MDT kavramını yansıtır: karma uzmanlık, bir sonuç için paylaşılan hesap verebilirlik.

**Team Topologies.** Etkili ekip tasarımını dört temel türe ve üç etkileşim moduna indirgeyen, tamamı *değerin hızlı akışına* hizmet eden bir model (Skelton ve Pais):

- **Akış hizalı ekip (stream-aligned team)** — tek bir değerli iş akışı (bir hizmet, bir kullanıcı yolculuğu, bir ürün) etrafında örgütlenen ve onu uçtan uca sahiplenen ekip. Bu varsayılan ekip türüdür; çoğu insan böyle bir ekipte olmalıdır.
- **Platform ekibi** — akış hizalı ekiplerin yeniden icat etmeden daha hızlı ilerlemesi için dahili self-servis yetenekler (ortak altyapı, bir entegrasyon motoru, bir oturum açma hizmeti, bir ortak bakım kaydı API'si) sağlar.
- **Etkinleştirici ekip (enabling team)** — bir yetkinliği yükseltmek için başkalarına koçluk yapan, sonra çekilen, süre sınırlı bir uzmanlar ekibi (ör. klinik güvenlik, erişilebilirlik, test otomasyonu).
- **Karmaşık alt sistem ekibi (complicated-subsystem team)** — bir genelci ekibi aşırı yükleyecek derin uzmanlık bilgisi gerektiren bir parçayı (bir risk puanlama algoritması, bir NHS Spine arayüzü) sahiplenir.

Üç **etkileşim modu**, herhangi iki ekibin nasıl ilişki kurduğunu belirler: **iş birliği** (belirli bir süre için yakın çalışma, yüksek bant genişliği, bir şeyleri keşfetmek için bir miktar verimsizliğe tolerans), **hizmet olarak X (X-as-a-service)** (bir ekibin diğerinin yeteneğini asgari zahmetle tüketmesi, ölçekte düşük sürtünmeli varsayılan) ve **kolaylaştırma** (bir ekibin diğerinin öğrenmesine yardım etmesi). Modu adlandırmak, gecikme ve suçlama doğuran belirsizliği önler.

**[Bilişsel yük](https://en.wikipedia.org/wiki/Cognitive_load).** Bir ekip kafasında yalnızca belirli bir miktarı tutabilir. Team Topologies, her ekibin sahip olduğu *alanı* güvenle akıl yürütebileceği ölçüyle sınırlamanız gerektiğini savunur — alan klinik olduğunda belirleyici bir ilke.

**Conway Yasası ve Ters Conway Manevrası.** Mimari örgüt yapısını izlediğinden — ekipleri ve teknolojiyi tek bir tasarım olarak ele alan bir [sosyoteknik sistem](https://en.wikipedia.org/wiki/Sociotechnical_system) bakışı — istediğiniz mimariyi üretmek için ekipleri bilinçli biçimde şekillendirin. Modüler, birlikte çalışabilir bir bakım kaydı istiyorsanız, onu tek bir monolitik ekiple inşa etmeyin.

## İyi uygulamalar

1. **Her hizmetin etrafında tam bir çok disiplinli ekip kadrolayın.** En azından bir ürün yöneticisi, bir teslimat yöneticisi, bir kullanıcı araştırmacısı, bir hizmet/etkileşim tasarımcısı, mühendisler ve bir veri/analitik yeteneğinin yanı sıra isimli klinik güvenlik ve bilgi yönetişimi katkısını dahil edin. Bir disiplini eksik ekip ya başka birini bekler ya da o işi atlar — ve sağlıkta atlanan iş genellikle güvenlik, erişilebilirlik veya yönetişimdir.

2. **Ekiplerin çoğunu akış hizalı yapın ve onlara uçtan uca sahiplik verin.** Bir teknoloji katmanı (ör. "veritabanı ekibi") yerine bir kullanıcının yolculuğu (ör. "ayakta tedavi sevki") etrafında örgütlenin. Uçtan uca sahiplik, geri bildirim döngülerini kısaltır ve klinik riskin biriktiği devir boşluklarını durdurur.

3. **Platformları ürün olarak inşa edin, hizmet olarak tüketin.** Entegrasyon motorunuza, kimlik hizmetinize veya ortak bakım kaydı API'nize kendi ekibi, yol haritası ve kullanıcıları olan bir dahili ürün gibi davranın. Akış hizalı ekiplerin bilet açıp beklemek yerine kendi kendilerine hizmet alabilmesi için onu "hizmet olarak" yayımlayın.

4. **Etkinleştirici ekipleri, kıt uzmanlığı biriktirmek için değil yaymak için kullanın.** Klinik güvenlik görevlileri, erişilebilirlik uzmanları ve güvenlik mühendisleri nadirdir. Onları, her ekibin arkasında sıraya girdiği kalıcı bir darboğaz haline gelmek yerine teslimat ekiplerine daha yüksek bir standart için koçluk yapıp sonra ilerlemek üzere görevlendirin.

5. **Her rolü ve karar yetkilerini açıkça adlandırın.** Önemli kararlar için — klinik güvenlik onayı, canlıya geçiş, bilgi yönetişimi onayı, harcama — bir sorumluluk modeli kullanın: [RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (Responsible, Accountable, Consulted, Informed) veya daha basit bir "karar verici/danışman" ayrımı. Buradaki belirsizlik, hesap verebilirliğin buharlaştığı yerdir.

6. **Klinik Güvenlik Görevlisine gerçek yetki ve gerçek zaman verin.** DCB0129/0160, bir sürümü durdurabilen, isimli, uygun şekilde eğitilmiş bir Klinik Güvenlik Görevlisi gerektirir. Rolü ekipte açık hale getirin, zamanını koruyun ve hayır diyebilmesini sağlayın — yalnızca isim olarak var olan bir CSO, bir olayın bulacağı bekleyen bir yönetişim başarısızlığıdır.

7. **Alanı sınırlayarak bilişsel yükü yönetin.** Bir ekip çok fazla hizmete veya fazla karmaşık bir klinik alana sahipse, bölün. Sinyale dikkat edin: kendi değişikliğinin güvenlik sonuçlarını artık güvenle açıklayamayan bir ekip aşırı yüklenmiştir.

8. **Ters Conway Manevrasını bilinçli biçimde uygulayın.** Ekip sınırlarını istediğiniz mimari ve birlikte çalışabilirliğe uyacak şekilde çizin — modüler, standartlara dayalı (ör. [HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)) sistemler için modüler ekipler. Tesadüfi bir organizasyon şemasının bakım kaydınızı sizin yerinize tasarlamasına izin vermeyin.

## Ekibinizle tartışılacak sorular

1. **Mevcut organizasyon şemamız mimarimizi nerede zaten bizim yerimize tasarlıyor — ve bu gerçekten istediğimiz mimari mi?**
   Conway Yasası isteğe bağlı değildir: ekiplerimizin şekli ne olursa olsun sistemler onu yansıtacaktır; dolayısıyla dürüst ilk hamle, elimizdeki bakım kaydına, entegrasyonlara ve devirlere bakıp her dikişi hangi ekip sınırının ürettiğini sormaktır. Sağlık ve bakım ortamında bu dikişler klinik riskin saklandığı yerlerdir — parçalanmış bir kayıt, kırılgan bir Spine arayüzü, hiçbir tek ekibin sahiplenmediği bir güvenlik dosyası — dolayısıyla bu estetik değil, bir hasta güvenliği konuşmasıdır. Tartışılacak gerilim, istediğimiz mimariyi elde etmek için ekip sınırlarını yeniden çizmenin (Ters Conway Manevrası) yıkıcı olması, yerleşik iktaları tehdit etmesi ve tam olarak denetleyemeyeceğimiz finansman ve hat yönetimi yapılarını kesmesidir. En acı veren iki üç entegrasyonunuzu, her ucuna sahip olan ekiplere kadar haritalamayı ve akış hizalı bir sınırın devri tümüyle ortadan kaldırıp kaldırmayacağını sormayı düşünün. İyi bir cevap, taşıyacağınız en az bir somut sınırı adlandırır, kimin neden direneceği konusunda dürüsttür ve yıkıma değen değişiklikleri, hizmet olarak bir arayüzün sürtünmeyi daha ucuza çözeceği değişikliklerden ayırır.

2. **Kıt uzmanlarımız — klinik güvenlik, bilgi yönetişimi, erişilebilirlik — gerçek yetkiyle ekiplerin içinde mi duruyor, yoksa herkesin arkasında sıraya girdiği dış kapılar mı?**
   Bu ailedeki her hizmet, sonradan eklenemeyen yasal görevler taşır (DCB0129/0160 klinik güvenlik, UK GDPR ve gizlilik konusundaki örf ve adet hukuku görevi, erişilebilirlik hukuku); ancak bu yetkinlikler nadir ve pahalıdır ve bu da kuruluşları onları merkezde biriktirmeye iter. Ödünleşim gerçektir: her ekibe bir Klinik Güvenlik Görevlisi yerleştirirseniz ince uzmanlığı seyrelene kadar yayarsınız; merkezileştirirseniz tek bir kişinin her konuda Danışılan olduğu ve her sürümün beklediği kahramanca darboğazı yaratırsınız. Etkinleştirici ekip kalıbı — ekiplere kendi tehlike atölyelerini yürütmeleri için koçluk yapıp sonra çekilen süre sınırlı uzmanlar — önerilen çözümdür, ancak yalnızca liderlik uzmanların zamanını yapmak yerine öğretmek için koruduğunda işe yarar. Kendi sürüm geçmişinize dürüstçe bakın: canlıya geçiş kaç kez tek bir isimli kişiyi beklerken kaydı ve o kişi güvenle hayır diyecek yetkiye ve korunmuş zamana sahip miydi? Güçlü bir cevap kıtlığın yüzüne bakar, her görev için yerleştirme ile etkinleştirme arasında bilinçli bir konum seçer ve kapasiteyi nasıl yayarsanız yayın seyreltilmemesi gereken belirli yetkiyi (bir sürümü durdurma gücü) adlandırır.

3. **Bir ekibin güvenle taşıyabileceğinden fazla bilişsel yük üstlendiğini nasıl anlarız — ve bu konuda gerçekte ne yaparız?**
   Bilişsel yük, güvenli teslimatın sessiz düzenleyicisidir: bir ekip yalnızca belirli bir miktar klinik alan ve hizmet hakkında akıl yürütebilir; bunun ötesinde kendi değişikliklerinin güvenlik sonuçlarına dair güveni aşınmaya başlar ve sağlıkta bu aşınma bir olay onu açığa çıkarana kadar görünmezdir. Zorluk, aşırı yüklenmenin nadiren kendini duyurmasıdır — biraz daha yavaş teslimat, daha fazla kusur, daha fazla "bir başkasına sorayım" gibi görünür ve baskı altındaki ekipler, özellikle bir ekibi bölmek siyasi olarak maliyetliyse veya kadro donmuşsa, bunu işaretlemek yerine sindirir. Erken uyarı sinyallerinizin ne olacağını (kendi sürümünün güvenlik dosyasını artık güvenle açıklayamayan bir ekip güçlü bir sinyaldir) ve teslimat gözle görülür biçimde durmadan önce aşırı yükü yüzeye çıkaracak bugün herhangi bir mekanizmanız olup olmadığını tartışın. Karşı baskıyı da düşünün: ekipleri bölmek yeni sınırlar ve devirler yaratır; dolayısıyla çare, birinci sorudaki parçalanma riskini yeniden ortaya çıkarabilir. Dürüst bir cevap, belirsiz bir "hissederdik" yerine somut, gözlemlenebilir sinyaller üzerinde anlaşır, bir ekibin alanını sınırlama veya bölme yetkisinin kimde olduğunu adlandırır ve yük hafifletme ile sınır çoğalması arasındaki ödünleşimi kabul eder.

4. **Ortak yeteneklerimizden hangileri hizmet olarak tüketilen platformlar olarak işletilmeli ve biz onları gerçekten bu şekilde mi kaynaklandırıyoruz — yoksa yalnızca bir bilet kuyruğunu yeniden mi etiketliyoruz?**
   Bir platform ekibinin vaadi, akış hizalı ekiplerin bir entegrasyon motorunu, bir kimlik hizmetini veya ortak bir bakım kaydı API'sini bilet açıp beklemeden kendi kendilerine kullanması ve böylece tüm sistemin hızlanmasıdır; başarısızlık ise bir şeye "platform" demek ama onun herkesin hâlâ arkasında sıraya girdiği, yetersiz kadrolu merkezi bir işlev olarak kalmasıdır. Ödünleşim gerçektir: bir yeteneği gerçek bir dahili ürün olarak inşa etmek ona kendi ekibini, yol haritasını, belgelerini ve kullanıcılarını vermek demektir; bu, kullanıcıya dönük özellikleri teslim etmekle rekabet eden ciddi bir yatırımdır ve nakdi kısıtlı bir NHS ortamında bu yatırımı süresiz ertelemek kolaydır. Sağlık ve bakımda riskler daha keskindir, çünkü ortak yetenekler çoğu zaman güvenlik açısından kritik olanlardır — kişi eşleştirme dizini, FHIR arayüzleri, denetim izi — ve ince bir platform ekibi, üzerindeki her hizmet için tek bir hata noktası haline gelir. Birkaç ekibin zaten bağımlı olduğu yeteneklere bakın ve her biri için etkileşimin gerçekten düşük sürtünmeli hizmet olarak X mi yoksa gizli beklemeleri olan örtülü bir iş birliği mi olduğunu sorun. Dürüst bir cevap hangi yeteneklerin şimdi, hangilerinin sonra platform yatırımını hak ettiğini adlandırır, bunları kimin finanse edip kadrolayacağı konusunda nettir ve ürün sahibi, yol haritası ve self-servis yolu olmayan bir platform ilan etme cazibesine direnir.

5. **Nerede sözleşmeli tedarikçilere veya ödünç personele güveniyoruz ve içi boşalmış değil zeki bir müşteri kalmak için hangi rolleri kurum içinde tutmalıyız?**
   Sağlık ve bakımda dijital teslimatın büyük bölümü dışarıya yaptırılır ve bir tedarikçi kapasite ve uzmanlığı hızla getirebilir — ancak ürün sahipliği, teknik güvence ve klinik güvenlik onayının tümü sözleşmeyle birlikte binadan çıkarsa, kuruluş neyin satıldığını değerlendirme, neye ihtiyacı olduğunu belirtme veya sonucu güvenle sahiplenme yeteneğini kaybeder. Gerilim hız ile yetenek arasındadır: personel takviyesi ve anahtar teslim yapımlar bir şeyi hızla canlıya alır, ancak bir tedarikçiyi hesap verebilir tutmanızı sağlayan kurum içi kası sessizce aşındırabilir ve çoğu zaman bir sonucu sahiplenen akış hizalı ekipler yerine bileşen biçimli, devir ağırlıklı yapılar teslim eder. Bu alanda vazgeçilmez elde tutulan roller, devredilemeyecek hesap verebilirlik etrafında kümelenir — Kıdemli Sorumlu Sahip, canlıya geçişi onaylayan Klinik Güvenlik Görevlisi, öncelikleri belirleyen ürün sahibi ve tedarikçilerin inşa ettiğini denetleyecek kadar teknik güvence. Mevcut teslimatınızı inceleyin ve bir tedarikçi yarın çekip gitse hangi yetenekleri yeniden oluşturamayacağınızı sorun. İyi bir cevap, gerçekten sözleşmeye bağlanabilecek işi kurum içinde kalması gereken zeki müşteri çekirdeğinden ayırır, sözleşmeli ekiplerin bir iş gücü kiralama düzeni yerine sonuç sahipliğine tabi tutulmasında ısrar eder ve güvenlik ve yönetişim kararlarının her zaman kendi hesap verebilir insanlarınızda kalması gerektiğini adlandırır.

6. **Ekip yapımızın gerçekten hızlı, güvenli bir değer akışı ürettiğini nasıl anlarız — ve onu yeniden çizmemizi ne tetikler?**
   Ekip tasarımı bir amaç değil, bir araçtır: akış hizalı ekiplerin, platformların ve adlandırılmış etkileşim modlarının amacı değerin daha hızlı, daha güvenli teslimidir; ancak kuruluşlar yapının bunu sağlayıp sağlamadığını nadiren ölçer ve bu yüzden yeniden yapılanmalar kanıta değil siyasete ve sezgiye dayanarak olur. Zorluk, akışı ve güvenliği yansıtan sinyalleri oyuna getirmeden seçmektir — ham hız veya hikaye puanı verimi yanlış davranışı davet ederken akış metrikleri (fikirden canlıya geçen süre, dağıtım sıklığı, değişiklik başına devir sayısı) ve güvenlik göstergeleri (tehlikelerin ne kadar hızlı kapatıldığı, ekiplerin kendi güvenlik dosyalarına sahip olup olmadığı) sınırların yardımcı mı yoksa zararlı mı olduğu hakkında size daha fazla şey söyler. İstikrarla gerçek bir gerilim vardır: sürekli yeniden yapılanma, teslimatı güvenli kılan ekip uzun ömürlülüğünü ve ortak bilişsel alanı yok eder; bu yüzden sınırları yeniden çizmeden önce yüksek bir çıta ve net tetikleyiciler gerekir. Bir sınırın yanlış olduğunu hangi kanıtın söyleyeceğini — kalıcı ekipler arası beklemeler, hiçbir tek ekibin sahiplenmediği bir güvenlik dosyası, kimsenin kendi kendine kullanmadığı bir platform — ve buna göre harekete geçme yetkisinin kimde olduğunu tartışın. Dürüst bir cevap gerçekten izleyeceğiniz küçük bir akış ve güvenlik sinyali kümesine bağlanır, ekip istikrarını koruyan bilinçli bir eşik belirler ve gelecekteki herhangi bir yeniden şekillendirme için tetikleyici koşulları ve karar vericiyi adlandırır.

## Uygulamada: bir sağlık ve bakım örneği

Bir entegre bakım sistemi (ICS), akut, toplum, ruh sağlığı, birinci basamak ve sosyal bakım genelinde bir **ortak bakım kaydını** devreye alıyor.

İçgüdü, tek bir büyük "ortak bakım kaydı ekibi" kurmak. Bunun yerine ICS, Team Topologies'i uyguluyor. Bir **platform ekibi** ortak kaydın çekirdeğine sahip: kişi eşleştirme dizini, FHIR API'leri ve entegrasyon motoru; bunlar self-servis yetenekler olarak yayımlanıyor. Birkaç **akış hizalı ekip**, bunun üzerinde her biri gerçek bir kullanıcı yolculuğuna sahip — "acilde bir hastanın kaydını görüntüle", "sosyal hizmet uzmanı korunma (safeguarding) görünümü", "aile hekimi ilaç mutabakatı" — ve platformu hizmet olarak tüketiyor. Bir **karmaşık alt sistem ekibi**, yanlış bir eşleşmenin gerçek bir güvenlik olayı olduğu olasılıksal hasta eşleştirme algoritmasına sahip. Klinik güvenlik ve erişilebilirlik uzmanlarından oluşan bir **etkinleştirici ekip**, akış hizalı ekipler arasında dönerek, onlar yerine yapmak yerine kendi DCB0160 tehlike atölyelerini yürütmeleri için koçluk yapıyor.

Her ekibin isimli bir ürün yöneticisi, teslimat yöneticisi ve Klinik Güvenlik Görevlisi var ve bir RACI, canlıya geçişin Kıdemli Sorumlu Sahibe karşı *hesap verebilir* olduğunu ancak CSO ve bilgi yönetişimi onayı olmadan *ilerleyemeyeceğini* netleştiriyor. Acil ekibi yeni bir veri alanına ihtiyaç duyduğunda etkileşim modu açık: altı haftalık bir iş birliği değil, platform ekibinden belgelenmiş bir API talebi aracılığıyla hizmet olarak X. Teslimat daha hızlı ve en önemlisi, her yolculuğun güvenlik dosyası, onu teslim eden ekibe ait.

## Sektörel bakış açıları

### Startup

On kişilik bir dijital sağlık startup'ı dört ayrı ekip türünü kadrolayamaz — genellikle bir kişinin birkaç şapka taktığı (aynı zamanda kullanıcı araştırması yürüten bir mühendis, fiilen Klinik Güvenlik Görevlisi olan bir klinisyen kurucu) tek bir akış hizalı ekibin *kendisidir*. Öncelik, kararların hızlı olması için tüm ekibi tek bir ortak bilişsel alan içinde tutmaktır; herkes aynı odadayken resmi bir RACI gereksizdir. Gerçek risk, kurucu darboğazıdır: klinik güvenlik ve bilgi yönetişimi meşgul bir kişiye yaslanır ve DCB0129/0160 yükümlülükleri ertelenmeye müsaittir. Şirket ilk NHS sözleşmesini kazandığında, ilk uzman işe alımları o kapının riskini azaltanlar olmalıdır — mühendislik kadrosunu büyütmeden önce isimli bir CSO ve bir bilgi yönetişimi sorumlusu.

### Küçük işletme

Köklü bir küçük sağlayıcı — bir aile hekimliği muayenehanesi, bir toplum eczanesi, bir bakım evi veya tek lokasyonlu bir klinik — gerçek hastalara ve süregelen operasyonlara sahiptir ancak nadiren özel bir dijital veya BT ekibi vardır; dolayısıyla tasarlanacak bir "ekip topolojisi" yoktur; muayenehane yöneticisi veya bir klinik lider, asıl işinin yanı sıra fiilen tüm teslimat yeteneğidir. Gerçekçi hamle platform ve etkinleştirici ekipler kurmak değil, sorumlulukları elinizdeki insanlara açıkça adlandırmaktır — devreye aldığınız sistemler için Klinik Güvenlik Görevlisi kim, bilgi yönetişiminin sahibi kim, bir değişikliği kim onaylar — bunlar bir avuç personel üzerinde yarı zamanlı şapkalar olsa bile. Büyük bir trust ile aynı yasal görevler (DCB0129/0160, UK GDPR, erişilebilirlik) geçerli olduğundan, pratik kalıp, bunları yeniden icat etmek yerine tedarikçilerinizin ve ICS'nizin ortak platformlarına ve etkinleştirici desteğine yaslanırken tedarikçileri hesap verebilir tutmaya yetecek kadar zeki müşteri yeteneğini elde tutmaktır. Tek en büyük risk tek kişilik darboğazdır: klinik sistemi anlayan tek kişi ayrılırsa, güvenlik ve süreklilik onunla birlikte gider; bu yüzden RACI'yi yazıya dökmek ve ikinci bir kişiyi çapraz eğitmek burada herhangi bir resmi ekip modelinden daha önemlidir.

### Büyük kuruluş

Büyük bir NHS trust'ı veya sağlık teknolojisi şirketinin sorunu tam tersidir: eski bileşen ve departman çizgileri boyunca çizilmiş, her yerde devirleri olan çok fazla ekip. Bilinçli bir ekip tasarım modelinin işe yaradığı yer burasıdır — bileşen ekiplerini akış hizalı olanlara dönüştürmek, ortak bakım kaydı ve entegrasyon yetenekleri için platform ekipleri kurmak ve kıt klinik güvenlik ve erişilebilirlik uzmanlığını yaymak için etkinleştirici ekipler kullanmak. RACI ve açık karar yetkileri, paydaşların sayısı gayriresmi eşgüdümü imkansız kıldığından vazgeçilmez hale gelir. Ters Conway Manevrası burada canlı bir kaldıraçtır: onlarca yıllık bir organizasyon şeması mimariyi zaten şekillendiriyor; bu yüzden liderler yapının bakım kaydını kendileri adına tasarlamasına izin vermek yerine ekip sınırlarını kasıtlı olarak yeniden çizmelidir.

### Kamu

Ulusal bir kurum (NHS England, DHSC) veya yerel yönetim, başkalarının kadrolarını oluşturduğu standartları — Government Digital and Data yetkinlik çerçevesi, Service Standard, DCB0129/0160 — belirler ve paranın ekip kapasitesini nasıl satın aldığı konusunda Parlamentoya ve kamuoyuna hesap verebilirdir. Buradaki yapılar ihale ve finansman kurallarıyla şekillenir: teslimatın büyük bölümü tedarikçilere devredilir; bu yüzden kurum içinde tutulacak kritik roller, yeteneğin içinin boşaltılmasını önleyen zeki müşteri rolleridir (ürün sahipliği, teknik güvence, klinik güvenlik onayı). Hesap verebilirlik resmi ve denetlenebilirdir — isimli bir Kıdemli Sorumlu Sahip, yayımlanmış harcama kontrolleri, şeffaflık görevleri — dolayısıyla sorumluluk modelleri isteğe bağlı bir hijyen değil, kamu kaydı meselesidir. Karakteristik risk, yapının akışı boğan kalıcı program kurullarına ve kapılara dönüşerek katılaşmasıdır; karşı hamle, tedarikçileri personel takviyesi yapan iş gücü kiralama düzenleri yerine akış hizalı, sonuç sahiplenen ekiplere bağlı tutmaktır.

## Yaygın başarısızlık biçimleri

- **Bileşen ekibi tuzağı.** Teknoloji katmanına göre bölünmüş ekipler ("ön yüz ekibi", "veritabanı ekibi") her özellikte devirler yaratır ve hiçbir sonuca sahip değildir. Değer akışları etrafında yeniden örgütlenin.
- **Cargo-cult Spotify.** "Squads, tribes, chapters, guilds" kavramlarını altındaki özerklik, hizalanma ve platform yatırımı olmadan etiket olarak kopyalamak. Spotify modeli, bir şirketin belirli bir zamandaki anlık görüntüsüydü — Spotify bile ilerledi. İlkeleri ödünç alın, organizasyon şemasını değil.
- **Kahramanca darboğaz.** Her konuda Danışılan taraf olan tek bir CSO, tek bir mimar veya tek bir bilgi yönetişimi sorumlusu; böylece her ekip bekler. Onları herkesin yetkinliğini yükselten bir etkinleştirici yeteneğe dönüştürün.
- **Sonradan akla gelen yönetişim.** Klinik güvenlik ve bilgi yönetişiminin gömülü ekip üyeleri değil dış kapılar olarak temsil edilmesi; böylece kaygıları ucuza harekete geçilemeyecek kadar geç gelir.
- **Sınırsız ekipler.** Kimse bütünü anlayamayana kadar hizmet emmeye devam eden bir ekip. Bilişsel aşırı yük, yavaşlayan teslimat ve aşınan güvenlik güveni olarak görünür.
- **Kalıcı iş birliği.** İki ekibin süresiz "iş birliği yapması" genellikle eksik bir sınırdır. İş birliğini süre ile sınırlayın ve temiz bir hizmet olarak arayüze geçin.

## Olgunluk modeli

| Boyut | Başlatma | Geliştirme | Standartlaştırma | Yönetme | Orkestrasyon |
|---|---|---|---|---|---|
| Ekip şekli | Teknoloji bileşenine göre bölünmüş; her yerde devirler | Bazı çapraz işlevli ekipler, hâlâ bağımlılık ağırlıklı | Akış hizalı ekipler hizmetlere uçtan uca sahip | Ekip şekli sağlığı akış metriklerine göre izlenir; devirler ve sınırlar belirli aralıklarla gözden geçirilir | Ekip sınırları mimariyi bilinçli olarak şekillendirir (Ters Conway) |
| Çok disiplinli kadrolama | Roller silolardan plansız ödünç alınır | Çekirdek roller mevcut, klinik/bilgi yönetişimi yarı zamanlı | Yetkili isimli CSO dahil tam MDT | Kadro boşlukları bir yetkinlik taban çizgisine göre ölçülür ve hedefe göre etkin biçimde kaynaklandırılır | Ekipler kendini değerlendirir ve yetkinlik boşluklarını proaktif biçimde doldurur |
| Etkileşim netliği | Tanımsız; ilişkiye göre yükseltme | Bazı süreçler, hâlâ bilet kuyrukları | Her bağımlılık için etkileşim modları adlandırılmış | Bağımlılık sürtünmesi ve bekleme süreleri ölçülür; SLA'lar ve arayüzler hedeflere göre yönetilir | Modlar gözden geçirilip geliştirilir; düşük sürtünmeli platformlar baskın |
| Sorumluluklar | Kimin karar verdiği belirsiz | RACI kağıt üzerinde var | RACI canlı ve temel kararlar için kullanılıyor | Karar verimi ve onay gecikmeleri izlenir; hesap verebilirlik denetimle güvence altına alınır | Karar yetkileri gecikmeyi azaltmak için sürekli ayarlanır |
| Bilişsel yük | Aşırı yüklenmiş ekipler, düşük güvenlik güveni | Yük fark edilir ama yönetilmez | Alanlar ekip kapasitesiyle sınırlanmış | Yük açık eşiklere göre nicelleştirilir ve yönetilen bir metrik olarak idare edilir | Yük etkin biçimde izlenir; ekipler aşırı yükten önce bölünür |

## Kontrol listesi

- [ ] Her hizmetin ona uçtan uca sahip olan akış hizalı bir ekibi var.
- [ ] Her ekip ürün, teslimat, araştırma, tasarım, mühendislik, veri, klinik güvenlik ve bilgi yönetişimini içeriyor veya bunlara isimli erişime sahip.
- [ ] Ekip başına isimli, eğitimli bir Klinik Güvenlik Görevlisinin korunmuş zamanı ve bir sürümü durdurma yetkisi var.
- [ ] Ortak yetenekler (entegrasyon, kimlik, bakım kaydı API'leri) hizmet olarak tüketilen dahili platformlar olarak işletiliyor.
- [ ] Kıt uzmanlar kalıcı darboğazlar yoluyla değil, süre sınırlı etkinleştirici ekipler yoluyla çalışıyor.
- [ ] Klinik onay, canlıya geçiş, bilgi yönetişimi onayı ve harcama için bir RACI (veya eşdeğeri) var ve gerçekten kullanılıyor.
- [ ] Her ekipler arası bağımlılığın adlandırılmış bir etkileşim modu var (iş birliği / hizmet olarak X / kolaylaştırma).
- [ ] Ekip alanları yönetilebilir bir bilişsel yükle sınırlanmış; aşırı yüklenmiş ekipler bölünüyor.
- [ ] Ekip sınırları, istediğiniz mimari ve birlikte çalışabilirliği üretmek için bilinçli seçilmiş.

## Temel kaynaklar

- Team Topologies — Matthew Skelton & Manuel Pais (dört ekip türü, üç etkileşim modu, bilişsel yük): teamtopologies.com
- NHS Digital Service Standard and NHS Service Manual — çok disiplinli ekip rolleri ve çalışma biçimleri
- GOV.UK Service Manual (GDS) — "Set up a service team" ve çevik teslimat rehberliği
- Government Digital and Data (formerly DDaT) Profession Capability Framework — rol tanımları: ddat-capability-framework.service.gov.uk
- Clinical Risk Management standards DCB0129 (manufacture) and DCB0160 (deployment), NHS Digital — Klinik Güvenlik Görevlisi rolü
- Conway's Law — Melvin Conway, "How Do Committees Invent?" (1968)
- Spotify engineering culture (Henrik Kniberg) — squads/tribes/chapters/guilds, belirli bir zamana ait bir model olarak eleştirel biçimde okunmalı

## Kaynakça

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

*Ayrıca bkz. Konu 7.2 — İş Gücü Planlaması, Konu 7.3 — İş Gücü Stratejisi, Konu 7.5 — İnsan ve Kurumsal Gelişim ve Konu 8.1 — Değişim Yönetimi.*
