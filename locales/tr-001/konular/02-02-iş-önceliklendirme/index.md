# Konu 2.2 — İş Önceliklendirme

**Tek cümleyle:** Önceliklendirme, triyajdan sağ çıkan işin — değeri, aciliyeti, riski ve eforu sınırlı kapasiteye karşı dengeleyerek — bilinçli, şeffaf biçimde sıralanmasıdır; böylece kuruluş her an yapabileceği en değerli şeyleri yapar ve nedenini açıklayabilir.

## Sağlık ve bakımda bu neden önemli

Önceliklendirme, stratejinin gerçek olduğu yerdir. Bir kuruluşun gerçek stratejisi yayımlanmış planı değil, işleri gerçekte hangi sırayla yaptığıdır — ve sağlık ve bakımda bu sıra güvenlik, eşitlik ve kamu parası sonuçları taşır. Birlikte çalışabilirlik işine öncelik vermezseniz ortak bir bakım kaydı tıkanır; teknik borca öncelik vermezseniz bir sistem bir resmî tatilde gece saat 2'de çöker; erişilebilirlik düzeltmesine öncelik vermezseniz hizmete en çok ihtiyaç duyan insanları dışlarsınız.

Baskı yapısaldır: talep her zaman kapasiteyi aşar ve bu talebin büyük kısmı meşrudur. Bu nedenle liderlerin, son e-postanın kazandığı ya da her projenin "birinci öncelik" olduğu bir süreç yerine, ödünleşimleri açık ve savunulabilir kılan yöntemlere ihtiyacı vardır. Şeffaf önceliklendirme siyasi havayı da değiştirir: paydaşlar ölçütleri ve sıralamayı gördüğünde müzakere lobicilikten değer ve gecikme maliyeti üzerine ortak bir konuşmaya kayar. Bu konu talep alımını (Konu 2.0) ve triyajı (Konu 2.1) izler; sıralanacak görünür, değerlendirilmiş bir birikiminiz olduğunu varsayar ve teslimat yaşam döngüsünü (Konular 3.4–8) ve portföy yönetimini (Konu 5.3 — EPPM) besler.

## Temel kavramlar

**[Önceliklendirme](https://en.wikipedia.org/wiki/Prioritization)**, bir birikimi ya da portföyü sıralar; her kalemi tek başına değerlendirip yönlendiren triyajdan ayrıdır. Önceliklendirme, kalemleri sınırlı kapasite için *birbirine karşı* karşılaştırır ve gerçeklik değiştikçe bu karşılaştırmayı yeniden yapar.

**[Gecikme Maliyeti (Cost of Delay)](https://en.wikipedia.org/wiki/Cost_of_delay)**, en iyi yöntemlerin altındaki ekonomik mercektir: bu iş *yapılmadığında* her hafta ne kadara — değer, zarar ya da para olarak — mal oluyor? Gecikme maliyetini açık kılmak, önceliklendirmeyi "en önemli olan nedir?" (her şey) sorusundan "ertelenmesi en pahalı olan nedir?" (sıralanabilir bir soru) sorusuna çerçeveler.

Her birinin bir uygunluk alanı olan **yaygın çerçeveler**:

- **WSJF (Weighted Shortest Job First — Ağırlıklı En Kısa İş Önce)**, [Scaled Agile Framework](https://en.wikipedia.org/wiki/Scaled_agile_framework)'ten (SAFe): Gecikme Maliyetini (kullanıcı/iş değeri + zaman kritikliği + risk azaltma/fırsat sağlama) puanlayın ve iş büyüklüğüne bölün. En yüksek WSJF önce yapılır. Doğal olarak küçük, yüksek değerli, zamana kritik işi kayırır ve batık maliyeti yok sayar.
- **RICE** (Erişim × Etki × Güven ÷ Efor, Intercom tarafından yaygınlaştırılmıştır): coşkuyu bir Güven etkeniyle ılımlaştıran bir ürün yönetimi puanı.
- **[MoSCoW](https://en.wikipedia.org/wiki/MoSCoW_method)** (Must / Should / Could / Won't-this-time — Olmazsa olmaz / Olmalı / Olabilir / Bu sefer olmayacak), [DSDM](https://en.wikipedia.org/wiki/Dynamic_systems_development_method)'den: bir sınıflandırma; bir sürümü ya da sabit tarihli bir programı kapsamlandırmak için mükemmel, ince taneli bir sıralama olarak daha zayıf.
- **Değer-karşı-efor** (2×2): hızlı kazanımları ve para tuzaklarını fark etmek için hızlı görsel; kaba ama hızlı.
- **[Kano modeli](https://en.wikipedia.org/wiki/Kano_model)**: özellikleri temel (olmazsa olmaz), performans ya da heyecan yaratıcı olarak sınıflandırır — temel beklentileri farklılaştırıcılara karşı dengelemek için yararlı.

Hiçbir çerçeve "doğru" değildir; her biri değerin farklı bir tanımını kodlar ve birlikte puanlama eylemi çoğu zaman rakamdan daha değerlidir.

**Çalıştırma ve değişim (run versus change)**, portföy düzeyindeki dengedir: "ışıkları açık tutma" operasyonel işi (run) ile yeni yetenek (change). Önceliklendirme her ikisini de kapsamalıdır; yoksa **[teknik borç](https://en.wikipedia.org/wiki/Technical_debt)** ve **güvenlik/emniyet iyileştirmesi** dahil görünmez run işi, felaket düzeyinde başarısız olana dek parlak yeni özelliklere karşı her yarışmayı kaybeder.

**Kapasite tabanlı ve tarih tabanlı** önceliklendirme: kapasite tabanlı sıralama bilinen, sınırlı bir verimi (sürdürülebilir bir tempo) doldurur; tarih tabanlı sıralama taşınamaz bir son tarihten (düzenleyici bir canlıya geçiş) geriye doğru çalışır ve kapsamı esnetmek için MoSCoW kullanır. Çoğu portföy, farklı kalemlere uygulanan her ikisine de ihtiyaç duyar.

## İyi uygulamalar

1. **Bir birincil çerçeve seçin ve tutarlı uygulayın.** İşinize uyan yöntemi seçin — gerçek zaman kritikliği olan karma bir değişim portföyü için WSJF, ürün özellik birikimleri için RICE, sabit tarihli sürümler için MoSCoW — ve puanların karşılaştırılabilir olması için tutarlı kullanın. Çerçeveyi kalem başına değiştirmek birikimi karşılaştırılamaz kılar ve oyunlaştırmayı davet eder.

2. **Gecikme Maliyetini, özellikle güvenlik ve yasal iş için, açık kılın.** Her kalem için sorun: "bir aylık gecikme neye mal olur?" Bir güvenlik düzeltmesi ya da düzenleyici bir son tarih için yanıt çoğu zaman şiddetli ve doğrusal değildir; tam da bu yüzden bunlar varsayılmamalı, puanlanmalıdır. Gecikme Maliyeti, bir uyum son tarihi ile bir kullanıcı deneyimi iyileştirmesinin dürüstçe karşılaştırılmasını sağlayan ortak para birimidir.

3. **Run, teknik borç ve güvenlik için açık kapasite ayırın.** Işıkları açık tutma işinin, teknik borcun ve güvenlik/emniyet iyileştirmesinin yeni yetenekle özellik özellik rekabet etmesine izin vermeyin — bir şey bozulana kadar kaybedeceklerdir. Bu iş için kalıcı bir kapasite yüzdesini (yaygın bir pratik kural, anlamlı, korunan bir dilimdir) ayırın ve pazarlık konusu olmayan olarak ele alın.

4. **Talep edenin rütbesine değil, sonuçlara ve değere göre önceliklendirin.** Kimin istediğine değil, kuruluşun belirtilmiş sonuçlarına ve önceliklerine (ideal olarak [OKR'lerine](https://en.wikipedia.org/wiki/Objectives_and_key_results) — bkz. Konu 10.0) karşı puanlayın. Üst düzey bir paydaşın kalemi düşük puan aldığında bu, sistemin çalışmasıdır; çerçeve size o konuşmayı yapmak için adil, kişisel olmayan bir temel verir.

5. **Yöntemi kısıta uydurun: kapasite ya da tarih.** Sürdürülebilir bir değişim akışı için değere göre sıralayın ve işi bilinen bir kapasiteye çekin. Taşınamaz bir tarih için geriye doğru çalışın ve "Olmazsa olmazları" korumak, "Olabilirleri" esnetmek için MoSCoW kullanın. İkisini karıştırmak — sabit kapsamı sabit zamana ve sabit kapasiteye sığdırmaya çalışmak — başarısız bir programa giden klasik yoldur.

6. **Şeffaf biçimde önceliklendirin ve müzakereyi açıkta yürütün.** Sıralanmış birikimi ve arkasındaki puanlamayı yayımlayın. Şeffaflık, önceliklendirmeyi bir dizi özel anlaşmadan, ödünleşimlerin görünür olduğu ortak bir müzakereye dönüştürür: kalemi yukarı taşımak için başka bir şeyin aşağı inmesi gerekir ve herkes maliyeti görebilir. Bu, bir teslimat lideri için mevcut olan tek en güçlü siyasetten arındırma hamlesidir.

7. **Düzenli bir ritimle yeniden önceliklendirin — ve yalnızca o zaman.** Önceliklerin yeni kanıta karşı yeniden ele alındığı bir ritim belirleyin (örneğin aylık ya da üç aylık bir portföy gözden geçirmesi, arada daha hafif birikim iyileştirmesi). Gözden geçirmeler arasında çizgiyi koruyun; böylece ekipler istikrarlı bir pist elde eder. Sürekli yeniden önceliklendirme, hiç yeniden önceliklendirmemek kadar zararlıdır — akışı yok eder ve hiçbir şeyi bitirmez.

8. **Oyunlaştırmaya ve sahte kesinliğe karşı korunun.** Göreli puanlar (Fibonacci, tişört bedenleri) tahmindir, gerçek değil; 8,3'lük bir WSJF, 7,9'dan anlamlı biçimde daha iyi değildir. Rakamları sıralı bir konuşmayı *bilgilendirmek* için kullanın, şişirilmiş girdilere dikkat edin ve deneyimli yargının bariz biçimde sapkın bir puanı geçersiz kılmasına izin verin — nedenini kaydederek.

## Ekibinizle tartışılacak sorular

1. **Sürekli ertelediğimiz iş için "bir aylık gecikme gerçekte neye mal olur?" sorusuna dürüst yanıtımız nedir?**
   Gecikme maliyeti, bir uyum son tarihi ile bir kullanıcı deneyimi ince ayarının dürüstçe karşılaştırılmasını sağlayan ortak para birimidir, ancak çoğu kuruluş onu hiç açık kılmaz ve bu yüzden sıralanabilir bir ifade olmayan "her şey önemli"ye varsayılan olarak döner. Bu, sağlık ve bakımda keskin biçimde önemlidir; çünkü bazı işin ertelenmesinin maliyeti şiddetli ve doğrusal değildir: ertelenen bir güvenlik düzeltmesi ya da birlikte çalışabilirlik bağımlılığı aylarca zararsızca durabilir ve sonra felaket düzeyinde başarısız olabilirken, ertelenen bir kolaylık özelliği neredeyse hiçbir şeye mal olmaz. Ekip, en çok tartışılan kalemleri için gecikme maliyetini gerçekten ifade edip edemeyeceğini tartışmalı ve dürüst yanıtın popüler bir proje için "çok az", görünmez bir proje için "potansiyel olarak ciddi bir olay" olduğu rahatsız edici vakalarla yüzleşmelidir. Somut açılar: birikimin ortasında takılı kalan üç kalemi alın ve her biri için bir gecikme maliyeti cümlesi zorlayın; teknik borcun ve güvenlik iyileştirmesinin gecikme maliyeti üzerinden hiç puanlanıp puanlanmadığını, yoksa hiç girmeyerek her yarışmayı mı kaybettiğini sorun. İyi bir yanıt, gecikme maliyeti kabaca doğrusal olan kalemleri, bir son tarihte ya da bir arıza noktasında sıçrayanlardan ayırır ve sırayı haklı çıkarmak için bu şekli kullanır. Dürüst olmayan sürüm, bu sorunun açığa çıkarmak için tasarlandığı tam da önceliklendirme yokluğu olan "hepsi bir öncelik" ifadesinin arkasına saklanır.

2. **Run, teknik borç ve güvenlik için ne kadar kapasiteyi ayırmaya hazırız — ve parlak yeni bir teklif geldiğinde bunu savunacak mıyız?**
   Bu, en güvenilir biçimde ters giden ödünleşimdir: ışıkları açık tutma işi, teknik borç ve güvenlik ya da emniyet iyileştirmesi görünmezdir ve bir şey bir resmî tatilde gece saat 2'de bozulana kadar yeni yeteneğe karşı özellik özellik kaybeder. Tartışma, bir miktar kapasiteyi korumak gerekip gerekmediği değil — neredeyse herkes ilke olarak hemfikirdir — belirli yüzdedir ve çok daha zoru, bir üst düzey sponsorun heyecan verici projesi ayrılmış kapasiteye saldırmak istediği ilk seferde liderliğin bu çizgiyi gerçekten tutup tutmayacağıdır. Sağlık ve bakımda riskler hasta güvenliğini ve klinisyenlerin dayandığı sistemlerin güvenilirliğini içerir; bu nedenle dilimi pazarlık konusu olmayan olarak görmek yalnızca iyi hijyen değil, bir güvenlik duruşudur. Somut açılar: son büyük olaya ya da ramak kalaya bakın ve bunun hiçbir öncelik yarışmasını kazanmayan ertelenmiş run ya da borç işine dayanıp dayanmadığını sorun; korunan kapasiteye yapılan bir saldırıyı reddetme yetkisi olan kişiyi adlandırın ve gerçekten reddedip reddetmeyeceğini sınayın. Güçlü bir yanıt belirli, korunan bir dilimi taahhüt eder ve kritik olarak, iyi niyetlere güvenmek yerine onu baskı altında korumayı sürdüren yönetişimi tarif eder. Dürüst sürüm, ayırmanın yalnızca odadaki en güçlü paydaşla temastan sağ çıkarsa gerçek olduğunu kabul eder.

3. **Üst düzey bir paydaşın kalemi düşük puan aldığında, sıralamanın durmasına izin verecek şeffaflığa ve cesarete sahip miyiz?**
   Talep edenin rütbesi yerine sonuçlara göre önceliklendirmek bariz görünür, ancak HiPPO etkisi — En Yüksek Maaşlı Kişinin Görüşü'nün puanlamayı sessizce geçersiz kılması — hiyerarşik NHS ve devlet ortamlarında varsayılan başarısızlıktır ve tam da sessiz olduğu için aşındırıcıdır. Gerilim şudur: düşük puanlı bir üst düzey kalem çoğu zaman sistemin doğru çalışmasıdır, ancak şeffaf, yayımlanmış bir sıralama ve puanlama gerekçesi olmadan teslimat lideri o konuşmayı yapmak için kişisel olmayan bir temele sahip olmaz ve genellikle geri adım atar. Ekip, birikimlerinin ve puanlarının talep eden kuruluşlara gerçekten görünür olup olmadığını tartışmalıdır; çünkü açık ödünleşim müzakeresi — "sizinkini yukarı taşımak için daha yüksek puanlı hangi kalem aşağı insin ve o gecikmenin maliyetinden memnun musunuz?" — mevcut tek en güçlü siyasetten arındırma hamlesidir ve yalnızca açıkta işe yarar. Somut açılar: bir üst düzey talebin kuyruğu atladığı son zamanı hatırlayın ve sıralama herkese açık olsaydı ne olacağını sorun; puanlama gerekçesini bir yönetim kuruluna, bir ICB'ye ya da denetçilere gösterebileceğiniz bir yönetişim kaydı olarak saklamayı düşünün. İyi bir yanıt şeffaflığı (sırayı ve puanları yayımlayın) geçersiz kılma konuşması için prova edilmiş, kişisel olmayan bir senaryoyla eşleştirir ve bunu tutma yetkisinin kimde olduğunu belirler. Kaçamak yanıt bunu varsayımsal bir durum olarak ele alır; gerçekte çoğu hafta olur ve planın bundan sağ çıkması gerekir.

4. **Gerçekten tek bir önceliklendirme çerçevesine mi bağlandık, yoksa her kalemi sessizce ona en çok yaranan yöntemle mi puanlıyoruz?**
   Bir birincil çerçeve seçmek ve tutarlı uygulamak, bir birikimi karşılaştırılabilir kılan şeydir; WSJF bir teklif için, bir değer-karşı-efor önsezisi bir başkası için ve "direktör gerçekten istiyor" üçüncüsü için kullanıldığı anda sıralama anlamını yitirir ve oyunlaştırma sızar. Gerilim şudur: hiçbir tek çerçeve her iş türüne uymaz — WSJF karma bir değişim portföyüne, RICE bir ürün özellik birikimine, MoSCoW sabit tarihli bir sürüme uyar — dolayısıyla dürüst tartışma, *birincil* yönteminizin hangisi olduğu ve ikincisine uygun bir kaçış yolu yerine meşru olarak nerede izin verildiğidir. Sağlık ve bakımda bu önemlidir; çünkü bir uyum son tarihi, bir klinisyenin istediği özellik ve bir veritabanı yükseltmesi aynı ölçekte tartılmalıdır ve yalnızca tutarlı bir yöntem, yasal bir kalem ile bir kolaylık kalemini özel savunma olmadan birbirine karşı sıralamaya izin verir. Somut açılar: son düzine önceliklendirme kararını denetleyin ve aynı yöntemin gerçekten uygulanıp uygulanmadığını ya da yöntemin önceden belirlenmiş bir yanıtı haklı çıkarmak için kayıp kayıp değişmediğini kontrol edin; ayrıntılı puanlamanın kimsenin sonra harekete geçmediği bir rakam ürettiği "çerçeve tiyatrosuna" dikkat edin. İyi bir yanıt birincil çerçeveyi adlandırır, bir diğerinin kullanıldığı dar, ilkeli durumları açıklar ve puanı bir gerçek değil, sıralı bir konuşmayı bilgilendiren bir şey olarak ele alır. Zayıf yanıt her talep edenin kendi matematiğini getirmesine izin verir; bu, hiç yöntem olmamasından ayırt edilemez.

5. **Hangi işin kapasiteye, hangisinin tarihe bağlı olduğu konusunda dürüst müyüz — yoksa kapsamı, tarihi ve kapasiteyi aynı anda sabitlemeye mi çalışıyoruz?**
   Önceliklendirme kısıta uymalıdır: sürdürülebilir bir değişim akışı değere göre sıralanır ve bilinen bir kapasiteye çekilir; taşınamaz bir düzenleyici canlıya geçiş ise "Olmazsa olmazları" koruyan ve "Olabilirleri" esneten MoSCoW ile tarihten geriye doğru çalışılır. Başarısız bir programa giden klasik yol, ikisini karıştırmaktır — kapsamı, tarihi ve kapasiteyi aynı anda kilitlemek — ve bir yasal son tarihin pazarlık konusu olmadığı hissettirdiği ve paydaşların tam kapsamın da aynı derecede pazarlık konusu olmadığını varsaydığı sağlık ve bakımda özellikle caziptir. Ekip, her büyük iş parçasının gerçekten kapasiteye mi tarihe mi bağlı olduğunu kalem kalem tartışmalıdır; çünkü tarih odaklı bir programı esnek zamanı varmış gibi, ya da olağan bir iş akışını sert bir son tarihi varmış gibi ele almak, aşağı akıştaki her şeyi yanlış önceliklendirir. Somut açılar: taşınamaz bir canlıya geçişi alın ve hangi gereksinimlerin yasal asgari için gerçekten "Olmazsa olmaz" olduğunu, hangilerinin zorunlu kümeye kaçak yoldan sokulan "Olmalı" ya da "Olabilir" olduğunu sorun; her üç kısıtın sessizce sabitlendiği programı arayın ve gerçeklik ısırdığında gerçekte neyin esneyeceğini adlandırın. İyi bir yanıt işi bağlayıcı kısıtına göre sınıflandırır ve eşleşen yöntemi bilinçli uygular; kapasite tabanlı akışı ve tarih tabanlı teslimatı ayrı disiplinler olarak tutar. Gerçekçi olmayan yanıt, sabit kapasite içinde, sabit tarihte tam kapsam vaat eder ve umut eder.

6. **Yeniden önceliklendirme ritmimiz nedir ve gözden geçirmeler arasında sırayı sabit tutacak disipline sahip miyiz?**
   Öncelikler yeni kanıta karşı yeniden ele alınmalıdır, ancak bir ritimle — aralarında daha hafif iyileştirmeyle aylık ya da üç aylık bir portföy gözden geçirmesi — çünkü sürekli yeniden önceliklendirme, hiç yeniden önceliklendirmemek kadar zararlıdır: akışı yok eder ve hiçbir şeyi bitirmez. Gerilim gerçektir: gerçeklik gerçekten değişir, yeni bir güvenlik sinyali ya da finansman kayması yeniden sıralamayı haklı çıkarabilir, ancak uçuşun ortasındaki her yeniden karıştırma ekiplere pistlerini kaybettirir ve yarım yapılmış işi ortada bırakır. Teslimat ekiplerinin çoğu zaman gerildiği ve bağımlılıkların birden çok kuruluşa yayıldığı sağlık ve bakımda, çalkalanma pahalı ve moral bozucudur; bu nedenle gözden geçirmeler arasındaki istikrarlı pist bir teslimat konusu olduğu kadar verimlilik ve elde tutma konusudur. Somut açılar: son çeyrekte birikimin tepesinin planlı bir gözden geçirme dışında kaç kez değiştiğini ve bunun sonucunda neyin teslim edildiğini kontrol edin; ritmi bozmayı haklı çıkaran dar ölçütler konusunda — gürültülü bir paydaş değil, gerçek bir acil durum — önceden anlaşın. İyi bir yanıt açık bir ritim belirler, gözden geçirmeler arasındaki pisti savunur ve sıra tutulduğu için gerçekten biten işe işaret edebilir. Başarısız yanıt, son e-posta ne zaman gelirse yeniden önceliklendirir ve hiçbir şey çizgiyi geçmezken hareketi duyarlılıkla karıştırır.

## Uygulamada: bir sağlık ve bakım örneği

Bir ICB dijital portföy ekibi on iki rakip teklifle ve belki beş için kapasiteyle karşı karşıyaydı. Tarihsel olarak sıralama kurumsal kıdemi izlemişti ve teknik borç hiç gündeme gelmemişti. Değişim işi için WSJF'yi benimsediler ve run, teknik borç ve güvenlik için kapasitenin sabit bir dilimini ayırdılar.

Her teklif — iş değeri, zaman kritikliği, risk azaltma/fırsat sağlama ve iş büyüklüğü — teslimat, klinik ve finans seslerinin katıldığı tek bir oturumda birlikte puanlandı. Yasal bir veri beyanı son tarihi zaman kritikliğinde çok yüksek puan aldı ve büyüklük olarak mütevazı olduğundan WSJF'de en üste çıktı. Büyük, popüler bir analitik platformu değerde iyi puan aldı ancak büyüklüğü onu sırada aşağı itti — kıdeme dayalı sıralama altında düşünülemez olacak bir sonuç ve çerçevenin savunulabilir kıldığı bir sonuç. Uzun süredir ertelenen, daha önce görünmez olan bir veritabanı yükseltmesi, bozulmadan önce ayrılmış run diliminden finanse edildi.

Kritik olarak, sıralanmış birikim ve puanları tüm talep eden kuruluşlarla paylaşıldı. Bir trust teklifinin kuyruğu atlaması için bastırdığında konuşma "kimi tanıyorsunuz?" değil, "bu yüksek puanlı kalemlerden hangisi aşağı insin ve o gecikmenin maliyetinden memnun musunuz?" oldu. Müzakere açıkta yapıldı ve ICB yönetim kuruluna sıranın siyaseti değil, değeri ve gecikme maliyetini yansıttığını kanıtlayabildi.

## Sektörel bakış açıları

### Startup

Finansman kısıtı olan bir dijital sağlık startup'ı her şeyin üstünde finansal ömre göre önceliklendirir; bu nedenle sıralama yöntemi hafif ve değer odaklı olmalıdır — bir değer-karşı-efor 2×2'si ya da basit bir RICE puanı genellikle yeterlidir ve otuz kalemlik bir birikim için ayrıntılı WSJF mekanizması aşırıdır. Baskın gecikme maliyeti varoluşsaldır: bir NICE değerlendirmesinin ya da bir lider müşterinin ihtiyaç duyduğu kanıtı kaçırmak şirketi bitirebilir; bu, güzel-olur-bir özelliği keskin biçimde geride bırakır. En zor disiplin, her hafta bir sonraki gelir özelliği için haykırırken teknik borç ve güvenlik iyileştirmesi için herhangi bir kapasiteyi ayırmaktır; yine de bunu tamamen atlamak, genç bir ürünün tam ölçeklenirken kilitlenmesine yol açan şeydir. Yeniden önceliklendirme sık ve kurucu güdümlüdür; bu nedenle risk çalkalanmadır — panzehir, bir şeyin gerçekten teslim edilmesi için sırayı en az kısa bir sprint boyunca sabit tutmaktır.

### Küçük işletme

Yerleşik küçük bir sağlayıcı — bir aile hekimliği muayenehanesi, bir toplum eczanesi, bir bakım evi ya da tek merkezli bir klinik — neredeyse hiç boşluk olmadan önceliklendirir: aynı bir avuç insan hem hizmeti hem de herhangi bir değişim işini yürütür; bu nedenle sıralama acımasızca basit olmalıdır ve ekipteki herkesin okuyabileceği bir değer-karşı-efor 2×2'si, kimsenin sürdürmeye zamanı olmayan bir puanlama modelinden daha değerlidir. Baskın gecikme maliyeti genellikle yasal ya da güvenlik kaynaklıdır — bir veri güvenliği araç seti son tarihi, bir klinik güvenlik düzeltmesi, ulusal bir tedarikçiden zorunlu bir sistem yükseltmesi — ve bunlar en üstte yer almalıdır; çünkü küçük bir sağlayıcı, bir arızayı absorbe edecek kaynaklar olmadan büyük bir trust ile aynı görevleri taşır. İsteğe bağlı iyileştirmeler hizmeti yürütmeyle gerçekten rekabet eder; bu nedenle dürüst disiplin, pazarlık konusu olmayan run ve iyileştirme işi için küçük, düzenli bir zaman dilimini her hafta hastaya dönük taleplere kaptırmak yerine korumaktır. İnce ya da hiç özel BT kapasitesi olmadığından "nasıl"ın çoğu tedarikçiler ve çerçeve sözleşmeleri tarafından belirlenir; bu nedenle önceliklendirme çoğu zaman tedarikçi güdümlü değişiklikleri ve muayenehanenin denetleyebildiği birkaç şeyi sıralamakla ve yoğun bir hafta ile bir sonraki arasında bir şeyin bitebilmesi için sırayı yeterince uzun süre sabit tutmakla ilgilidir.

### Büyük kuruluş

Bir NHS trust'ı ya da ICS, gerçek zaman kritikliği ve ağır run yükümlülükleri olan karma bir değişim portföyü işletir; bu tam olarak WSJF'nin ve ayrılmış bir run/teknik borç/güvenlik diliminin tasarlandığı şekildir. Gerçek zorluk siyasettir: birden çok sponsor kuruluş, HiPPO baskısı ve sırayı kıdemin belirlediğine dair eski beklentiler; bu nedenle sıralanmış birikimin ve puanlarının şeffaflığı, büyük kuruluşun başlıca siyasetten arındırma aracıdır. Buradaki önceliklendirme bir portföy ofisine yayılır ve olağan iş değişimi için kapasite tabanlı akışı, taşınamaz düzenleyici canlıya geçişlerden geriye doğru çalışan, kapsamı MoSCoW ile esneten tarih tabanlı programlarla uzlaştırmalıdır. Bir trust yönetim kuruluna, bir ICB'ye ve denetçilere para karşılığı değeri kanıtlamak zorunda olduğundan, puanlama gerekçesi karar verildikten sonra atılmaz, bir yönetişim kaydı olarak saklanır.

### Kamu

NHS England, DHSC ya da yetki devri yapılmış bir hükümette önceliklendirme, ulusal ölçekte portföy yönetimidir; Management of Portfolios (MoP) ve Hazine beş durum modeliyle resmîleştirilir ve burada gecikme maliyeti nüfus sağlığı, yasal uyum ve milyarlarca pound cinsinden ölçülür. Portföyün büyük kısmı isteğe bağlı değildir — zorunlu beyanlar, yasal son tarihler, bakanlık taahhütleri — bu nedenle yöntem, yapılıp yapılmayacağını değil, yükümlü olunan işin *nasıl* ve *ne zaman* yapılacağını sıralamalıdır ve taşınamaz tarihli programlar baskındır. Risk iştahı düşük, inceleme çekişmelidir: National Audit Office ve Public Accounts Committee sıranın değeri ve gecikme maliyetini mi yoksa yalnızca siyasi kolaylığı mı yansıttığını sınayacaktır; bu nedenle açık, yayımlanmış bir önceliklendirme dayanağı bir yönetim aracı olduğu kadar bir savunmadır. Eşitlik değerin yasal bir boyutudur; bu nedenle bir devlet puanlama modeli yalnızca toplam yararı değil, en az hizmet alan nüfuslar üzerindeki etkiyi de ağırlıklandırmalıdır; yoksa sistematik olarak zaten iyi hizmet alanları kayıracaktır.

## Yaygın başarısızlık biçimleri

- **Her şey birinci öncelik.** Gerçek bir sıralama yoktur, bu yüzden en yüksek ses ya da en yakın son tarih yönetir. *Çözüm:* katı bir sıralama zorlayın; en üstte beraberliğe izin verilmez.
- **Run ve teknik borç her zaman kaybeder.** Görünmez operasyonel ve iyileştirme işi başarısız olana dek aç bırakılır. *Çözüm:* ayrılmış, korunan kapasite.
- **HiPPO geçersiz kılması.** En Yüksek Maaşlı Kişinin Görüşü puanlamayı her seferinde sessizce geçersiz kılar. *Çözüm:* şeffaf puanlar ve açık ödünleşim müzakeresi.
- **Çerçeve tiyatrosu.** Ayrıntılı puanlama kimsenin harekete geçmediği bir rakam üretir. *Çözüm:* puanın gerçek, harekete geçilen sıralı bir düzeni bilgilendirmesine izin verin.
- **Sabit kapsam + sabit tarih + sabit kapasite.** Üç kısıt da kilitli, başarısızlığı garanti eder. *Çözüm:* kapsamı MoSCoW ile ya da kapasiteyi ya da tarihi esnetin.
- **Çalkalanma.** Öncelikler haftalık değişir; hiçbir şey bitmez. *Çözüm:* belirlenmiş bir yeniden önceliklendirme ritmi ve aralarında istikrarlı pistler.

## Olgunluk modeli

| Boyut | Başlatma | Geliştirme | Standartlaştırma | Yönetme | Orkestrasyon |
|---|---|---|---|---|---|
| **Yöntem ve dayanak** | Yöntem yok; sıra kıdem ya da son tarihe göre | Bir çerçeve tutarsız ya da yalnızca bazı iş için kullanılıyor | Bir birincil çerçeve tutarlı uygulanıyor; Gecikme Maliyeti dikkate alınıyor | Puanlama girdileri yönetiliyor ve kalibre ediliyor; önceliklendirme kararları belirtilmiş sonuçlara karşı ölçülüyor | Çerçeve sonuçlara/OKR'lere göre ayarlanmış; kapasite ve tarih tabanlı yöntemler bilinçli kullanılıyor |
| **Run/değişim ve teknik borç dengesi** | Run ve teknik borç görünmez; yalnızca yeni iş finanse ediliyor | Run/borç konusunda bir miktar farkındalık ama korunan kapasite yok | Run, teknik borç ve güvenlik için ayrılmış kapasite | Korunan dilim bir metrik olarak izleniyor; run/borç ve güvenlik iyileştirmesi hedefe karşı güvence altında | Run/değişim dengesi etkin biçimde yönetiliyor ve değere karşı gözden geçiriliyor |
| **Şeffaflık ve ritim** | Öncelikler opak; tepkisel ve sürekli değişiyor | Birikim kısmen görünür; düzensiz gözden geçirmeler | Sıralanmış birikim yayımlanıyor; sabit yeniden önceliklendirme ritmi | Ritme uyum ve yeniden önceliklendirme çalkantısı izleniyor; puanlama gerekçesi yönetim kurulları ve denetçiler için yönetilen bir kayıt olarak saklanıyor | Açık ödünleşim müzakeresi norm; ritim istikrarlı; puanlar sonuçlara karşı akıl sağlığı kontrolünden geçiriliyor |

## Kontrol listesi

- [ ] Bir birincil önceliklendirme çerçevesi seçilmiş ve tutarlı uygulanıyor.
- [ ] Gecikme Maliyeti, özellikle güvenlik ve yasal iş için, açık kılınmış.
- [ ] Kapasite run, teknik borç ve güvenlik/emniyet işi için ayrılmış.
- [ ] Kalemler talep edenin kıdemine değil, sonuçlara/OKR'lere göre puanlanıyor.
- [ ] Kapasite tabanlı ve tarih tabanlı yöntemler doğru kalemler için kullanılıyor.
- [ ] Sıralanmış birikim ve puanlaması paydaşlara yayımlanıyor.
- [ ] Ödünleşimler açıkta müzakere ediliyor: birini yukarı taşımak için bir başkası aşağı iniyor.
- [ ] Yeniden önceliklendirme belirlenmiş bir ritimle, aralarında istikrarlı pistlerle yapılıyor.
- [ ] Puanlar tahmin olarak ele alınıyor; oyunlaştırmaya ve sahte kesinliğe dikkat ediliyor.
- [ ] Mevcut sıra yönetim kuruluna açıklanabiliyor ve savunulabiliyor.

## Temel kaynaklar

- Scaled Agile Framework (SAFe) — Weighted Shortest Job First (WSJF) and Cost of Delay.
- Reinertsen, D. — *The Principles of Product Development Flow* (Cost of Delay, queueing economics).
- Intercom — the RICE scoring model (Reach, Impact, Confidence, Effort).
- DSDM / Agile Business Consortium — MoSCoW prioritisation.
- Kano, N. — the Kano model of customer satisfaction.
- Cabinet Office / AXELOS — Management of Portfolios (MoP) — portfolio prioritisation and balance.
- NHS Digital Service Standard & GOV.UK Service Manual — prioritising the most important user needs; OKRs (Doerr, *Measure What Matters*) for outcome alignment.

## Kaynakça

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
