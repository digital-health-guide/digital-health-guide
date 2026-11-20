# Konu 4.3 — Birlikte Çalışabilirlik ve Veri Standartları

**Sağlık ve bakımda birlikte çalışabilirlik teknik bir incelik değil, bir klinik güvenlik ve hakkaniyet gereksinimidir: sistemler doğru veriyi, doğru biçimde, belirsiz olmayan bir anlamla, bakım noktasında paylaşamadığında insanlar zarar görür ve eşitsizlik büyür.**

## Sağlık ve bakımda bu neden önemli

Bir kişinin bakımı nadiren tek bir yerde gerçekleşir. Tek bir bölüm bir GP muayenehanesine, bir ambulans servisine, bir acil servise, bir hastane koğuşuna, bir toplum hemşiresine, bir eczaneye, bir sosyal bakım ekibine ve evdeki bir bakıcıya dokunabilir. Bunların her biri kaydın bir parçasını tutar. Bu parçalar güvenle ve hızla bir araya getirilemezse, klinisyenler eksik bilgiyle karar verir: görülmeyen bir alerji, çift yazılan bir ilaç, gereksiz yere tekrarlanan bir test, ihtiyaç duyan ekibe görünmeyen bir korunma (safeguarding) işareti.

Birlikte çalışabilirlik, bir dizi bağlantısız sistemi, hastanın bakış açısından bütünleşik bir hizmet gibi davranan bir şeye dönüştürür. Entegre bakımın altındaki tesisattır. İşlediğinde, bir kuruluştaki klinisyen bir diğerinin kaydettiğini görebilir ve bunun düşündüğü anlama geldiğine güvenebilir. Başarısız olduğunda, başarısızlık çoğu zaman birisi zarar görene kadar sessizdir.

Bu aynı zamanda bir hakkaniyet meselesidir. En karmaşık ihtiyaçları olan insanlar — kırılgan yaşlı yetişkinler, birden fazla uzun süreli rahatsızlığı olanlar, hizmetler arasında geçiş yapan insanlar — verileri en parçalanmış insanlardır. Zayıf birlikte çalışabilirlik bu nedenle en savunmasızlara en çok zarar verir. Ve bir kamu güveni meselesidir: insanlar makul olarak NHS'in bilgilerini zaten mantıklı biçimde paylaştığını varsayar ve bunun ne sıklıkla olmadığını öğrenince hayal kırıklığına uğrar.

Son olarak, birlikte çalışabilirlik kamu parasını korur. Veri alışverişi yapamayan tescilli sistemler kuruluşları pahalı, değiştirmesi zor sözleşmelere kilitler ve maliyetli noktadan noktaya entegrasyonları zorunlu kılar. Açık standartlara göre inşa etmek, seçenekleri açık tutmanın, tedarikçileri dürüst tutmanın ve aynı sorunu çözmek için tekrar tekrar ödemekten kaçınmanın yoludur.

## Temel kavramlar

[Birlikte çalışabilirlik](https://en.wikipedia.org/wiki/Interoperability), farklı sistemlerin bilgi alışverişi yapabilme ve onu kullanabilme yeteneğidir. İki katmanı ayırmak yararlıdır. Sözdizimsel veya teknik birlikte çalışabilirlik, iki sistemin bir mesaj alışverişi yapabileceği ve her birinin yapısını ayrıştırabileceği anlamına gelir — zarf ulaşır ve açılabilir. [Anlamsal birlikte çalışabilirlik](https://en.wikipedia.org/wiki/Semantic_interoperability), alıcı sistemin içeriğin ne anlama geldiğini göndericinin anladığı şekilde anlaması demektir — "penisilin alerjisi" için bir kodun her iki tarafta da aynı şekilde yorumlanması. Anlamsal birlikte çalışabilirlik olmadan teknik birlikte çalışabilirlik tehlikelidir: veriler akar, ancak anlam kaybolur veya bozulur.

Sağlık verileri standartlar kullanılarak değiştirilir. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7), sağlık hizmetlerinde en çok kullanılan standartlar ailesidir. Boru ve düzeltme işareti ile sınırlandırılmış metin kullanan eski HL7 sürüm 2 (v2) mesajlaşması hâlâ çok büyük miktarda hastane mesajlaşmasının temelini oluşturur ve yıllarca da oluşturacaktır. Modern standardı [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), klinik bilgiyi web tarzı [uygulama programlama arayüzleri (API'ler)](https://en.wikipedia.org/wiki/API) üzerinden değiştirilen "kaynaklar" olarak modeller; bu da modern geliştiriciler için çalışmayı çok daha kolay kılar.

Mesaj için standartlar yeterli değildir; içerik için de standart sözlüklere ihtiyacınız vardır. [SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)](https://en.wikipedia.org/wiki/SNOMED_CT), tanıları, belirtileri, işlemleri ve daha fazlasını kaydetmek için NHS bakımı genelinde zorunlu kılınan klinik terminolojidir. NHS Dictionary of medicines and devices (dm+d), ilaçlar ve tıbbi cihazlar için standart sözlüktür ve elektronik reçetenin temelini oluşturur. Dünya Sağlık Örgütü tarafından sürdürülen [Uluslararası Hastalık Sınıflandırması, 10. ve 11. revizyonlar (ICD-10 ve ICD-11)](https://en.wikipedia.org/wiki/ICD-11), günlük klinik kayıttan ziyade sınıflandırma, istatistik ve geri ödeme için kullanılır. [openEHR](https://en.wikipedia.org/wiki/OpenEHR), sağlık kaydının kendisini ortak, klinik olarak yönetilen "arketipler" aracılığıyla yapılandırmak için açık bir belirtimdir ve bazı kuruluşlarca klinik veri modellerini tek bir tedarikçiden bağımsız tutmak için kullanılır.

İki fikir daha temeldir. [NHS Numarası](https://en.wikipedia.org/wiki/NHS_number), aynı kişiyle ilgili kayıtların kuruluşlar arasında güvenilir biçimde bağlanmasını sağlayan ortak hasta tanımlayıcısıdır; ortak bir tanımlayıcı olmadan eşleştirme tahmindir. Ve [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise), belge paylaşımı gibi somut sorunları çözmek için mevcut standartların tam olarak nasıl birleştirileceğini belirleyen "profiller" yayımlar; böylece farklı tedarikçiler bunları aynı şekilde uygular.

Tüm bunların temelinde stratejik bir seçim yatar. Yayımlanmış, yeniden kullanılabilir API'lerle [açık standartlara](https://en.wikipedia.org/wiki/Open_standard) göre inşa etmek bir pazarı rekabetçi ve verilerinizi taşınabilir tutar. Tescilli arayüzlere dayanmak, tedarikçi değiştirmenin o kadar maliyetli hale geldiği, fiilen yapamayacağınız bir [tedarikçiye kilitlenme](https://en.wikipedia.org/wiki/Vendor_lock-in) yaratır. Bununla birlikte, [veri kalitesi](https://en.wikipedia.org/wiki/Data_quality) olmadan hiçbiri değer sunmaz: doğru, eksiksiz, zamanında, tutarlı kodlanmış veri, birlikte çalışabilirliğin sonradan akla gelen bir şeyi değil, ön koşuludur.

## İyi uygulamalar

1. **Anlamsal ile teknik birlikte çalışabilirliği ayırt edin ve ikisi için de tasarlayın.** Bir mesajın artık iki sistem arasında aktığını kutlamak ve alıcı klinisyenin anlamına güvenle dayanamayacağını gözden kaçırmak kolaydır. Her zaman sorun: karşı taraf bu kodları, birimleri ve olumsuzlamaları tam olarak bizim gibi yorumluyor mu? Yalnızca mesaj biçimlerine değil, ortak terminolojilere (SNOMED CT, dm+d) ve değer kümelerine yatırım yapın, çünkü doğru iletilmiş ama yanlış anlaşılmış bir alerji, hiç mesaj olmamasından daha tehlikelidir.

2. **Açık standartlara göre inşa edin ve yeniden icat etmek yerine platformları yeniden kullanın.** Yaygın olarak onaylanmış ilkeyi benimseyin: açık standartlara göre inşa edin ve kendinizinkini inşa etmeden önce mevcut ulusal platformları ve hizmetleri yeniden kullanın. NHS'te bu, HL7 FHIR API'lerini tercih etmek, NHS Numarasını tanımlayıcı olarak kullanmak ve özel noktadan noktaya bağlantılar yaratmak yerine Spine, GP Connect ve ortak bakım kayıtları gibi ulusal hizmetlere bağlanmak anlamına gelir. Yeniden kullanım maliyeti azaltır, bakım yükünü yayar ve verilerinizin seyahat edebilmesi anlamına gelir.

3. **NHS Numarasını her kayıtta ve mesajda pazarlık konusu yapmayın.** Güvenilir kayıt bağlama, güvenilir bir ortak tanımlayıcıya bağlıdır. NHS Numarasının yakalandığından, ulusal demografik hizmete karşı doğrulandığından ve her ilgili kayıt ve arayüzde taşındığından emin olun. Eksik veya doğrulanmamış olduğunda bunu çözülecek bir veri kalitesi kusuru olarak ele alın, çünkü yalnızca ad ve doğum tarihine göre eşleştirme hem tehlikeli yanlış eşleşmeler hem de kaçırılan bağlantılar üretir.

4. **Veri kalitesini birinci sınıf bir teslimat olarak ele alın.** Birlikte çalışabilirlik, veri kalitesi sorunlarınızı aşağı akıştaki herkese ihraç eder. Verilerinizi profilleyin, eksiksizliği ve kodlama tutarlılığını ölçün ve hataların kaynağında bulunup düzeltilmesi için yönetici sorumluluğunu (stewardship) devreye sokun. Kodlama kayması, yapılandırılmış verinin gerektiği yerde serbest metin ve tutarsız birimler, her aşağı akış analizini ve klinik görünümü sessizce bozacaktır; bu yüzden bu işi kendiliğinden olacağını varsaymak yerine açıkça finanse edin.

5. **Sıkı entegrasyonlar yerine API öncelikli, gevşek bağlı mimarileri tercih edin.** Yeteneklerin, başkalarının özel pazarlık olmadan tüketebileceği iyi belgelenmiş, sürümlenmiş API'ler aracılığıyla sunulacağı şekilde tasarlayın. Bu, başlangıçta doğrudan bir veri tabanı bağlantısından daha yavaştır, ancak etrafındaki her şeyi yeniden inşa etmeden bir bileşeni değiştirmenizi sağlayan şeydir. Ayrıca ulusal hizmetlerin ve modern tedarikçilerin artık nasıl entegre olmayı beklediğiyle uyumludur ve Konu 3.5 — Teslimat Yaşam Döngüleri konusundaki teslimat yaklaşımlarını destekler.

6. **Yerel yorumlar değil, yayımlanmış profilleri ve uygunluk testlerini kullanın.** Standartlar esnektir ve iki ekip "aynı" FHIR kaynağını bağdaşmaz biçimde uygulayabilir. Ayrıntıları sabitleyen ulusal uygulama kılavuzlarını ve IHE profillerini benimseyin ve tedarikçilerin yayına almadan önce bunlara karşı uygunluk göstermesini isteyin. Uygunluk testi, tek başına çok az anlam taşıyan bir iddia olan "FHIR'ı destekliyoruz"u doğrulanabilir, sözleşmesel bir gerçeğe dönüştürür.

7. **Birlikte çalışabilirlik ve açık standart gereksinimlerini satın almaya ve sözleşmelere yazın.** Kilitlenmeden kaçınmanın en ucuz zamanı imzalamadan öncedir. Açık, belgelenmiş API'leri, kendi verilerinizi standart bir biçimde çıkarma hakkını, adı geçen standartlara uyumu ve standart entegrasyonlar için ücret alınmamasını isteyin. Bunların sonradan pazarlıkla elden çıkarılan özlemler değil, zorunlu değerlendirme ölçütleri olması için ticari meslektaşlarınızla çalışın (bkz. Konu 6.3 — Tedarik ve Ticari Yönetim).

8. **Birlikte çalışabilirliği, klinik güvenlik ve bilgi yönetişimi odadayken yönetin.** Her yeni veri akışı klinik riski ve gizli bilginin ele alınışını değiştirir. Klinik güvenlik görevlilerini ve bilgi yönetişimi liderlerini tasarım kararlarına baştan, son bir onay olarak değil dahil edin; böylece ortak kayıtlar hem güvenli hem de yasal olur. Bu, doğrudan Konu 1.6 — Klinik Güvenlik ve Risk Yönetimi ve Konu 1.7 — Bilgi Yönetişimi, Veri Koruma ve Siber Güvenlik ile bağlantılıdır.

## Ekibinizle tartışılacak sorular

1. **Bakım yollarımızın neresinde eksik veya yanlış anlaşılan veriler bugün en büyük klinik riski yaratıyor?** Birlikte çalışabilirlik yatırımı mimari modayı değil, zararı ve değeri izlemelidir. En karmaşık hastalarınızın gerçekte izlediği yolculukları haritalayın ve bilginin kaybolduğu, geciktiği veya güvenilir anlam olmadan geldiği devir noktalarını bulun. Klinisyenlere rutin olarak nerede kör çalıştıklarını sorun — devirler, mesai dışı boşluklar, sağlık ile sosyal bakım arasındaki sınır. Verinin hiç akmadığı yerleri, aktığı ama güvenilemeyen yerlerden ayırın, çünkü bunlar farklı çözümler gerektirir. Hangi nüfusların en çok etkilendiğini düşünün, çünkü parçalanma en karmaşık ihtiyaçları olan insanlara en ağır düşme eğilimindedir. Yanıt nereden başlayacağınızı söyler ve size herhangi bir teknik argümandan daha ağır basacak bir klinik güvenlik gerekçesi verir.

2. **Tedarikçiye kilitlenmeye ne kadar açığız ve ana klinik sistemlerimizi değiştirmek bize gerçekte neye mal olurdu?** Birçok kuruluş kapalı bir sistemin gerçek bedelini yalnızca ondan ayrılmaya çalıştığında keşfeder. Verilerinizi kullanılabilir, standart bir biçimde çıkarmak ve başka bir tedarikçiye geçmek için gerekenleri somut olarak işleyin. Sözleşmelerinizi verinin kime ait olduğu, hangi standart arayüzlerin bulunduğu ve rutin olması gereken entegrasyonlar için ücretlendirilip ücretlendirilmediğiniz açısından inceleyin. Sökülmesi gereken tescilli arayüzleri ve veri biçimlerini belirleyin. Bunu alternatiflerin açıklığına ve bunun yerine yeniden kullanabileceğiniz ulusal platformlara karşı tartın. Bu, tedarikçileri sürekli değiştirmekle ilgili değildir; kaldıraç gücünüzü anlamak ve tek bir tedarikçinin yol haritasının tek seçeneğiniz haline gelme riskini azaltmakla ilgilidir.

3. **Verilerimiz güvenle paylaşılacak kadar iyi mi ve bunu nasıl bileceğiz?** Kötü veri paylaşmak yalnızca sizi utandırmaz — hataları diğer klinisyenlerin kararlarına yayar. Açığa çıkarmayı düşündüğünüz verilerin eksiksizliğini, doğruluğunu, zamanlılığını ve kodlama tutarlılığını gerçekte ölçüp ölçmediğinizi sorun. Kuruluşunuzda veri kalitesinin sahibinin kim olduğunu ve sorunları kaynağında düzeltmek için zamanı ve yetkisi olup olmadığını tartışın. Kayıtların ne kadarının doğrulanmış bir NHS Numarası taşıdığını ve klinik olarak önemli bilginin ne kadarının hâlâ kodlanmış alanlar yerine serbest metinde durduğunu düşünün. Sistematik bir kodlama hatasını, ortak bir bakım kaydına ulaşmadan önce nasıl tespit edeceğinizi düşünün. Bu sorulara kanıtla yanıt veremiyorsanız, bunu başlı başına bir bulgu olarak ele alın ve boruyu genişletmeden önce veri kalitesi çalışmasını finanse edin.

4. **Bir tedarikçi "FHIR'ı destekliyoruz" dediğinde, yayına almadan önce bunu gerçekten nasıl doğrulayacağız?** Bir standart etiketi, belirli bir uygulama kılavuzuna karşı test edilene kadar bir pazarlama iddiasıdır. Kuruluşunuzun kendine ait herhangi bir uygunluk testi yeteneği olup olmadığını, yoksa tedarikçilerin sözüne mi güvendiğinizi tartışın. İki sistem de "FHIR uyumlu" olabilir ve yine de kullanılabilir bir mesaj değişemeyebilir, çünkü standart bilinçli olarak esnektir ve anlam onu sabitleyen profillerde ve değer kümelerinde yaşar. İlgili arayüze hangi ulusal uygulama kılavuzlarının ve IHE profillerinin uygulandığını ve sizin tarafınızda bunları okumaya kimin yetkin olduğunu sorun. Uygunluğun bağlanma koşulu olarak sözleşmeye yazılıp yazılmadığını, yoksa entegrasyon sırasında acı bir şekilde mi keşfedildiğini düşünün. Dürüst bir yanıt, karşısında test yapacağınız belirli profili, testi yürütecek kişiyi veya işlevi ve başarısız olan bir tedarikçinin geçiştirilmek yerine geri çevrildiği zaman çizelgesindeki noktayı adlandırır.

5. **Kuruluşumuz genelinde standartların, terminolojinin ve uygunluğun sahibi kim ve hayır deme yetkileri var mı?** Birlikte çalışabilirlik, yönetici sorumluluğu olmadan çürür: değer kümeleri kayar, yerel kılavuzlar ayrışır ve her yeni proje sessizce kendi yorumunu icat eder. Standartlardan, SNOMED CT ve dm+d alt kümelerinden ve uygunluktan sorumlu adı konmuş bir işlev olup olmadığını, yoksa bu bilginin birkaç kişinin kafasında mı durduğunu sorun. Merkezi tutarlılık ile yerel teslimat hızı arasındaki gerilimi düşünün — baskı altındaki ekipler, bir standartlar işlevinin yeniden kullanımı zorunlu kılacak gerçek yetkisi olmadıkça en hızlı şeyi inşa edecektir. Terminoloji bakımının, gösterişsiz, sürekli ve herhangi bir tekil projeden ziyade herkese yarar sağlaması göz önüne alınarak nasıl finanse edildiğini tartışın. FHIR, SNOMED CT ve ulusal kılavuzlar evrildikçe, ilk benimsediğiniz sürümde donmak yerine uygulamaları nasıl hizalı tuttuğunuza bakın. Dürüst bir yanıt, sorumlu sahibi, finansmanını ve bir standardı ya uyguladığı ya da uygulayamadığı yakın bir örneği belirler.

6. **Kayıtlarını birleştirdiğimiz insanlar, verilerinin nasıl aktığı konusunda bilgilendirilmiş ve memnun mu?** Birlikte çalışabilirlik yalnızca teknik ve klinik bir mesele değil, kamu güveni ve hukuki dayanak meselesidir. İnsanlar makul olarak NHS'in bilgilerini zaten mantıklı biçimde paylaştığını varsayar ve hem paylaşmadığında hem de beklemedikleri biçimlerde paylaştığında hayal kırıklığına uğrar. Hastaların ortak kayıtlarını hangi kuruluşların görebildiğini anlayıp anlamadığını, bir Ulusal Veri Vazgeçme (National Data Opt-Out) veya yerel rıza modelinin akış boyunca nasıl yerine getirildiğini ve erişimin nasıl kaydedilip denetlenebildiğini tartışın. Hakkaniyet boyutunu düşünün: verileri en parçalanmış insanlar — karmaşık ihtiyaçları olanlar — aynı zamanda vazgeçme ve bilgilendirme bildirimlerinde gezinmekte en zorlanan insanlardır. Bilgi yönetişimini ve uygun olduğunda hastaları veya temsilcilerini, rızayı sonunda işaretlenen bir kutu olarak ele almak yerine tasarıma dahil edin. Dürüst bir yanıt, her akış için hukuki dayanağı, bir kişinin kaydını kimin gördüğünü nasıl öğreneceğini ve tercihlerinin uçtan uca nasıl gözetildiğini tarif edebilir.

## Uygulamada: bir sağlık ve bakım örneği

İngiltere'nin kuzeyindeki bir entegre bakım sistemi, ciddi bir olay incelemesi bir hastaya birbirinin kayıtlarını göremeyen ekipler tarafından etkileşen iki ilacın yazıldığını bulduktan sonra, klinisyenlere GP muayenehanesi, hastane ve toplum eczanesi genelinde ortak ilaçlar için tek bir görünüm sağlamayı hedefler.

Cazibe, tek bir tedarikçiden bir "ilaç gösterge paneli" satın almak ve onu her sistemin veri tabanına doğrudan bağlamaktır. Birlikte çalışabilirlik sorumlusu buna direnir. Bunun yerine program, açık standartlara göre inşa etme yaklaşımını benimser. Her kaynak sistem ilaç verilerini HL7 FHIR kaynakları olarak sunar; her ilaç, "aynı ilaç"ın her yerde aynı anlama gelmesi için dm+d kullanılarak kodlanır; ve her kayıt, doğru ilaçların doğru kişiye bağlanması için doğrulanmış bir NHS Numarasıyla anahtarlanır. GP verileri, yerel bir şey icat etmek yerine ulusal bir yetenek yeniden kullanılarak, özel bir besleme yerine GP Connect aracılığıyla çekilir.

Erken veri profilleme hemen değerini kanıtlar. Bir muayenehanenin sistemi bazı ilaçları kodlanmış dm+d girdileri yerine serbest metinde kaydediyordur; bu, onların herhangi bir otomatik etkileşim kontrolüne görünmez olacağı anlamına gelir. Bu, yayına almadan önce kaynağında düzeltilir. Ekip ayrıca doğrulanmamış NHS Numaralı bir kayıt kümesi bulur ve bunları eşleştirme için ulusal demografik hizmet üzerinden yönlendirir.

Klinik güvenlik görevlisi ve bilgi yönetişimi lideri tasarım grubunun baştan sona parçasıdır. Birlikte tam olarak hangi verinin kiminle, hangi hukuki dayanakla paylaşıldığını ve bir klinisyenin erişiminin nasıl kaydedildiğini tanımlarlar — Konu 1.7 — Bilgi Yönetişimi, Veri Koruma ve Siber Güvenlik konusunun kaygıları. Tedarikçiler bağlanmadan önce ulusal FHIR uygulama kılavuzuna karşı uygunluk testini geçmelidir. On iki ay sonra bütünleşik ilaç görünümü canlıdır, daha önce kaçırılacak bir etkileşim zaten yakalanmıştır ve — her şey açık arayüzlere göre inşa edildiği için — ikinci bir kullanım vakası, ortak alerji bilgisi, aynı tesisatın büyük bölümünü orijinal maliyetin bir kesri karşılığında yeniden kullanır.

## Sektörel bakış açıları

### Startup

Bir dijital sağlık startup'ı, mevcut sistemlere ne kadar kolay bağlandığına göre yaşar ya da ölür; bu yüzden birlikte çalışabilirliği bir uyumluluk angaryası değil, çekirdek bir özellik olarak ele alın. Baştan FHIR API'leri inşa etmek ve SNOMED CT ile dm+d kullanmak sizi satın alması ve entegre etmesi çok daha kolay kılar ve temkinli NHS alıcılarına olgunluk sinyali verir. Bir standart varken kendi veri modelinizi icat etme dürtüsüne direnin; farklılaşmanız ürününüz olmalı, bir yükümlülüğe dönüşen tescilli bir biçim değil. NHS Numarası işleme ve bilgi yönetişimini erken doğru yapmak, pilottan satın almaya geçmenizi sağlayan şeydir. Bir müşterinin ilke olarak verilerini çıkarıp ayrılabileceği şekilde tasarlayın — paradoksal olarak, onları tutma güvenini kazandıran bu açıklıktır.

### Küçük işletme

Yerleşik küçük bir sağlayıcı — bir GP muayenehanesi, bir toplum eczanesi, bir bakım evi veya tek siteli bir klinik — verileri güvenle paylaşma görevlerini en büyük trust ile aynı ölçüde taşır, ancak teknik yeteneğinin bir kısmıyla. Burada birlikte çalışabilirlik bir mühendislik disiplininden çok büyük ölçüde bir satın alma ve yapılandırma disiplinidir: zaten FHIR konuşan sistemleri seçin, GP Connect ve Spine gibi ulusal hizmetlere bağlanın ve standartları inşa etmek yerine miras almak için kutudan çıktığı gibi SNOMED CT ve dm+d ile kodlayın. Doğrulanmış NHS Numarası yakalamayı günlük uygulamanın parçası haline getirin, çünkü uyumsuzlukları sonradan uzlaştıracak bir entegrasyon ekibiniz olmadığından, tanımlayıcıyı kayıt anında doğru almak en ucuz güvencenizdir. Sürdüremeyeceğiniz özel bağlantıları görevlendirmek yerine ortak bakım kaydı programlarına ve entegre bakım sisteminizin ortak altyapısına yaslanın. Bir sistem sözleşmesini imzalarken veya yenilerken, veri çıkarma haklarında ve açık arayüzlerde sade terimlerle ısrar edin, çünkü küçük bir kuruluş tedarikçiye kilitlenmeyi en keskin biçimde hisseder ve sonradan kaçmak için en az kaldıraca sahiptir.

### Büyük kuruluş

Büyük bir sağlayıcı veya tedarikçi tipik olarak on yıllarca eski sistem taşır: HL7 v2 arayüzleri, birden fazla elektronik kayıt sistemi ve hepsini bir arada tutan entegrasyon motorları. Gerçekçi strateji her şeyi söküp atmak değil, envanterin önüne API öncelikli, standart tabanlı bir katman koymak, akışları v2 gereken yerde çalışır durumda tutarken aşamalı olarak FHIR'a taşımaktır. Her yenilemede kilitlenmeye karşı sıkı korunun ve "standartlara uygun"un ileri sürülmek yerine doğrulanması için uygunluk testinde ısrar edin. Bireysel projelerin her birinin kendi yorumunu icat etmemesi için bir iç standartlar ve uygunluk işlevi kurun. Bu, aynı yeniden kullanım ve açık arayüz disiplininin geçerli olduğu Konu 5.4 — Kurumsal Kaynak Planlaması (ERP) konusundaki çekirdek operasyonel platformları nasıl yönettiğinizle yakından ilişkilidir.

### Kamu

Ulusal ve bölgesel kurumlar pazarın kurallarını belirler, bu yüzden standartlara ilişkin seçimleri her kuruluşa dalgalanır. Hükümetin yapabileceği en değerli şey, açık standartları zorunlu kılmak, net uygulama kılavuzları ve uygunluk gereksinimleri yayımlamak ve yeniden kullanılabilir ulusal platformlar — Spine, GP Connect, ortak bakım kaydı çerçeveleri, NHS Numarası hizmeti — sağlamaktır; böylece yerel kuruluşlar bir kez inşa eder ve yeniden kullanır. Tutarlılık mükemmellikten daha önemlidir: sıkı uygulanan yeterince iyi bir standart, herkesin farklı uyguladığı kuramsal olarak üstün olandan iyidir. Hükümet ayrıca terminoloji bakımı ve veri kalitesi iyileştirmenin gösterişsiz işini de finanse etmelidir, çünkü bunlar hiçbir tek kuruluşun tek başına finanse etmeyeceği kamusal mallardır. Bu yönetici rolü, Konu 9.1 — Yerel ve Ulusal Hükümetlerle Çalışma ile ve ortakların Konu 9.0 — Ortak Kuruluşlarla İş Birliği konusunda nasıl iş birliği yaptığıyla bağlantılıdır.

## Yaygın başarısızlık biçimleri

- **Teknik bağlantıyı anlamsal anlayışla karıştırmak.** Her iki tarafın kodlarını, birimlerini ve olumsuzlamalarını aynı şekilde yorumladığını doğrulamadan bir mesaj aktığında zafer ilan etmek. Sonuç, entegre görünen ama sessizce yanlış okunan verilerdir.
- **Kötü veriyi daha hızlı paylaşmak.** Veri kalitesini düzeltmeden önce boruyu genişletmek; böylece kodlama hataları, serbest metin ve eksik NHS Numaraları diğer klinisyenlerin kararlarına ve her aşağı akış analizine yayılır.
- **Boş bir iddia olarak "FHIR'ı destekliyoruz".** Belirli bir uygulama kılavuzuna karşı uygunluk testi olmadan bir standart etiketini kabul etmek; böylece iki "uyumlu" sistem hâlâ birbiriyle konuşamaz.
- **Özel noktadan noktaya entegrasyonlar.** Her sistem çifti arasında doğrudan bağlantılar kurmak; büyüdükçe bakımı üstel olarak daha zor ve pahalı hale gelen kırılgan bir ağ üretmek.
- **Varsayılan olarak kilitlenmek.** Tescilli arayüzlü ve veri çıkarma hakkı olmayan sözleşmeler imzalamak, tuzağın bedelini yalnızca tedarikçi değiştirmeye çalıştığınızda keşfetmek.
- **Yönetişimi son kapı olarak ele almak.** Klinik güvenliği ve bilgi yönetişimini yalnızca onay için devreye sokmak; böylece sorunlar geç ve pahalıya ortaya çıkar veya teslimat baskısı altında geçiştirilir.
- **Yönetici sorumluluğu olmayan standartlar.** Terminolojileri ve profilleri benimseyip değer kümelerini sürdürmek, uygunluğu izlemek veya standartlar evrildikçe uygulamaları hizalı tutmak için kimseyi finanse etmemek.

## Olgunluk modeli

| Boyut | Başlatma | Geliştirme | Standartlaştırma | Yönetme | Orkestrasyon |
|---|---|---|---|---|---|
| Standart benimseme | Ad hoc, çoğunlukla tescilli veya elle yapılmış arayüzler | HL7 v2 ve bir miktar FHIR kullanımda; seçimler projeye göre değişir | FHIR, SNOMED CT ve dm+d yerel kılavuzlarla varsayılan olarak benimsenmiş | Ulusal kılavuzlara uygunluk izlenir ve raporlanır; sapmalar yönetilir ve güvence altına alınır | Ulusal uygulama kılavuzlarına ve IHE profillerine tam uygunluk, testlerle doğrulanmış |
| Tanımlayıcı ve bağlama | NHS Numarası çoğu zaman eksik veya doğrulanmamış | Yakalanıyor ama tutarlı doğrulanmıyor | Kayıtların çoğunda ulusal hizmete karşı doğrulanmış | Doğrulama oranları hedeflere karşı ölçülür, eşleşmeyen kayıtlar etkin biçimde çalışılır | Her yerde doğrulanmış; eşleştirme kalitesi etkin biçimde izlenir |
| Veri kalitesi | Ölçülmüyor; kodlamanın gerektiği yerde serbest metin yaygın | Bazı yerlerde ölçülüyor; düzeltmeler tepkisel | Profillenmiş, sahiplenilmiş ve kaynağında iyileştirilmiş | Kalite ölçütleri eşiklere karşı izlenir, yönetici sorumluluğu hesap verir | Veri paylaşılmadan önce otomatik kusur tespitiyle sürekli izleme |
| Mimari | Noktadan noktaya, sıkı bağlı | Entegrasyon motoru, karışık bağlılık | API öncelikli, ulusal platformları yeniden kullanan | API performansı ve bağımlılıkları izlenir; değişiklikler sürümleme ve testle yönetilir | Gevşek bağlı, standart tabanlı, bileşenler yeniden iş çıkmadan değiştirilebilir |
| Kilitlenme ve satın alma | Tescilli sözleşmeler, çıkış hakkı yok | Bazı standart maddeleri, zayıf uygulanıyor | Açık standartlar ve veri çıkarma hakları zorunlu | Sözleşme uyumu ve çıkış hazırlığı portföy genelinde gözden geçirilir ve güvence altına alınır | Açık arayüzler zorunlu ve doğrulanmış; gerçek tedarikçi ikamesi |

## Kontrol listesi

- [ ] Her ilgili kayıt ve arayüz doğrulanmış bir NHS Numarası taşır; eksik veya eşleşmeyenleri çözmek için bir süreç vardır.
- [ ] Yeni arayüzler HL7 FHIR ve adı belli ulusal uygulama kılavuzlarını kullanır; HL7 v2 yalnızca geçişin henüz haklı çıkmadığı yerde korunur.
- [ ] Klinik içerik SNOMED CT ile, ilaçlar dm+d ile, üzerinde anlaşılmış değer kümelerine göre kodlanır.
- [ ] Paylaşmayı düşündüğünüz her şey için veri kalitesi profillenir, ölçülür, sahiplenilir ve boru genişletilmeden önce kaynağında iyileştirilir.
- [ ] Tedarikçiler bağlanmadan önce belirli bir profile karşı uygunluk testini geçmelidir — "FHIR'ı destekler" tek başına asla kabul edilmez.
- [ ] Herhangi bir özel entegrasyon inşa edilmeden önce ulusal platformlar (Spine, GP Connect, ortak bakım kayıtları) yeniden kullanılır.
- [ ] Sözleşmeler açık, belgelenmiş API'leri, standart bir biçimde veri çıkarma haklarını ve standart entegrasyonlar için ücret alınmamasını zorunlu kılar.
- [ ] Klinik güvenlik ve bilgi yönetişimi liderleri yalnızca onayda değil, baştan tasarım grubundadır.
- [ ] Mimari API öncelikli ve gevşek bağlıdır; böylece etrafındaki her şeyi yeniden inşa etmeden bir bileşen değiştirilebilir.
- [ ] Adı belli bir işlev, kuruluş genelinde standartların, uygunluğun ve terminoloji bakımının sahibidir.

## Temel kaynaklar

- NHS England — birlikte çalışabilirlik standartları, Spine, GP Connect ve ortak bakım kaydı programları.
- HL7 International — FHIR standardı ve HL7 v2 belirtimleri.
- SNOMED International — SNOMED CT terminolojisi ve uygulama kılavuzu.
- NHS Business Services Authority — Dictionary of medicines and devices (dm+d).
- Integrating the Healthcare Enterprise (IHE) — birlikte çalışabilirlik profilleri.
- openEHR International — sağlık kaydını yapılandırmak için açık belirtimler.
- World Health Organization — International Classification of Diseases (ICD-10 ve ICD-11).

## Kaynakça

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
