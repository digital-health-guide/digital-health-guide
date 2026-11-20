# Konu 1.3 — Kanıta Dayalı Kararlar

**Tek cümleyle:** Kanıta dayalı karar verme, neyi inşa edeceğinize, satın alacağınıza ve ölçekleyeceğinize — klinik ve teslimat — mevcut en iyi kanıtın gücüne, riske orantılı biçimde karar vermek ve gerekçeyi, onu verenlerden daha uzun yaşasın diye kaydetmek demektir.

## Sağlık ve bakımda bu neden önemli

Çoğu sektörde kötü bir ürün kararı paraya mal olur. Sağlık ve bakımda güvenliğe, hakkaniyete ve güvene mal olabilir — ve yasal yükümlülük altında kamu fonlarıyla verilir. Hiç değerlendirilmemiş dijital bir tanı aracını devreye alma kararı ticari bir kumar değil, klinik bir risktir. Bu, kanıt çıtasını "demo iyi görünüyordu"nun çok üzerine çıkarır.

Alan ayrıca **aynı anda iki tür kanıt** talep ettiği için ayırt edicidir. *Klinik kanıt* "bu teknoloji işe yarıyor mu ve hastalar için güvenli ve etkili mi?" sorusunu yanıtlar. *Teslimat kanıtı* "doğru şeyi iyi mi inşa ediyoruz ve benimseniyor ve kullanılıyor mu?" sorusunu yanıtlar. Bir hizmet klinik olarak sağlam ama teslimat başarısızlığı (kimse kullanmıyor) veya teslimat başarısı ama klinik olarak kanıtlanmamış (yaygın kullanılıyor, hiç doğrulanmamış) olabilir. Üst düzey liderler ikisini de talep etmeli ve birinin diğeri gibi görünmesine asla izin vermemelidir. Ve sağlık kararları düzenleyicilerden, halktan ve klinisyenlerden gelen denetimi çektiği için, neden karar verdiğinizin *kaydı* kararın kendisi kadar önemlidir.

## Temel kavramlar

**[Kanıt hiyerarşisi](https://en.wikipedia.org/wiki/Hierarchy_of_evidence).** [Kanıta dayalı tıp](https://en.wikipedia.org/wiki/Evidence-based_medicine), çalışma tasarımlarını yanlılığı ne kadar iyi kontrol ettiklerine göre sıralar: en üstte [randomize kontrollü çalışmaların](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RKÇ) [sistematik derlemeleri](https://en.wikipedia.org/wiki/Systematic_review) ve [meta-analizleri](https://en.wikipedia.org/wiki/Meta-analysis); sonra tekil RKÇ'ler; sonra kohort ve olgu-kontrol çalışmaları; sonra olgu serileri; ve tabanda uzman görüşü ve anekdot. Hiyerarşi bir rehberdir, deli gömleği değil — ancak bir iddianın kanıt kılığına girmiş anekdota dayandığını fark etmenizi disipline eder.

**Dijital sağlık teknolojileri için NICE Evidence Standards Framework (ESF).** NICE, NHS England ve ortaklarla birlikte, bir dijital sağlık teknolojisinin (DHT) işlevine ve taşıdığı riske orantılı olarak hangi düzeyde kanıta ihtiyaç duyduğunu ortaya koymak için ESF'yi oluşturdu. DHT'leri olası riske göre katmanlandırır — basit sistem hizmetlerinden, bakımı bilgilendiren veya yönlendiren araçlara, doğrudan tanı koyan veya tedavi eden araçlara kadar — ve her katmanda beklenen klinik etkililik ve ekonomik kanıtı belirtir. Klinik risk ne kadar yüksekse, gereken kanıt o kadar güçlüdür. ESF, bir DHT'nin hazır olup olmadığına karar veren komisyonlayıcılar ve geliştiriciler için referans noktasıdır.

**Gerçek dünya verisi ve [gerçek dünya kanıtı](https://en.wikipedia.org/wiki/Real_world_evidence).** Gerçek dünya verisi (RWD), kontrollü çalışmalardan değil, rutin bakımdan gelir — elektronik sağlık kayıtları, kayıt defterleri (registry), hasta bildirimli sonuçlar, cihaz telemetrisi. İyi analiz edildiğinde (prospektif gözlemsel çalışmalar, pragmatik çalışmalar veya dikkatli EHR analizi yoluyla) bir teknolojinin pratikte nasıl performans gösterdiğine dair gerçek dünya kanıtı (RWE) olur. RWE, tek seferlik bir çalışmanın süregelen davranışı yakalayamadığı, öğrenen veya değişen teknolojiler (yapay zekâ, giyilebilir cihazlar) için esastır, ancak dürüstçe ele alınması gereken karıştırıcı faktör riskleri taşır.

**Klinik kanıt ile teslimat kanıtı.** Bunları ayrı eksenlerde tutun. Klinik kanıt yukarıdaki hiyerarşiyi ve ESF'yi kullanır: etkinlik (efficacy), güvenlik, etkililik (effectiveness). Teslimat kanıtı ürün ve hizmet analitiğini kullanır: hizmet kullanılabilir mi, benimseniyor mu, kullanıcının görevini tamamlıyor mu, başarısızlık talebini azaltıyor mu? İkisi de gereklidir; ikisini birbirine karıştırmak klasik bir hatadır (yüksek bir kullanım rakamı klinik kanıt değildir).

**Değerlendirme tasarımları.** Bir **[mantık modeli](https://en.wikipedia.org/wiki/Logic_model)** (veya [değişim kuramı](https://en.wikipedia.org/wiki/Theory_of_change)), girdilerin ve faaliyetlerin çıktıları ve sonuçları nasıl üretmesinin amaçlandığını açık hale getirir — herhangi bir değerlendirmenin sınadığı haritadır. Bir **RKÇ** en güçlü nedensel yanıtı verir ancak yavaş, pahalıdır ve hızlı değişen bir hizmet için bazen pratik değil veya etik değildir. **Pragmatik değerlendirme** — pragmatik çalışmalar, [kesintili zaman serileri](https://en.wikipedia.org/wiki/Interrupted_time_series), kontrollü öncesi/sonrası, karma yöntemli hizmet değerlendirmesi — hız ve gerçek dünya alaka düzeyi karşılığında bir miktar kesinlikten ödün verir. Tasarımı riske ve eldeki karara orantılı seçin.

**[A/B testi](https://en.wikipedia.org/wiki/A/B_testing) ve analitik.** Daha düşük riskli, teslimat tarafı sorular için (hangi ifade randevuya katılımı artırıyor? hangi akış terk oranını azaltıyor?), kontrollü çevrimiçi deneyler (A/B testleri) hızlı, nedensel teslimat kanıtı verir. Optimizasyon için güçlüdürler ancak değerlendirilmemiş klinik değişiklikler yapmak için asla kullanılmamalı ve onam ile bilgi yönetişimi sınırlarına saygı göstermelidirler.

**HiPPO kararları.** "HiPPO" — en yüksek maaşlı kişinin görüşü (Highest-Paid Person's Opinion) — kıdemin kanıtı gölgede bıraktığı başarısızlığı adlandırır. Kanıta dayalı kültürler, odadaki herkese "veri ne gösteriyor?" demeyi güvenli ve olağan kılar ve üst düzey bir sezgiyi bir sonuç değil, sınanacak bir hipotez olarak ele alır.

**Karar kayıtları.** Bir karar kaydı (veya karar günlüğü / [mimari karar kaydı](https://en.wikipedia.org/wiki/Architectural_decision)), kısaca şunları yakalar: karar, değerlendirilen seçenekler, tartılan kanıt, kimin karar verdiği ve ne zaman. Gerekçeyi denetlenebilir kılar, personel devrinden sağ çıkar ve aynı tartışmanın her çeyrekte yeniden yürütülmesini önler.

## İyi uygulamalar

1. **Kanıtın gücünü risk düzeyiyle eşleştirin.** NICE ESF katmanlarını ölçüt olarak kullanın: düşük riskli bir sistem aracı hafif kanıta ihtiyaç duyar; tanı koyan veya tedaviyi yönlendiren bir araç yüksek kaliteli klinik etkililik kanıtına ihtiyaç duyar. Orantılılık, her şeye tek bir çıta uygulamak yerine güvenli olanda hızlı, tehlikeli olanda yavaş hareket etmenizi sağlar.

2. **Klinik ve teslimat kanıtı talep edin ve onları asla karıştırmayın.** Her önemli yatırım için iki ayrı soru sorun — "klinik olarak etkili ve güvenli mi?" ve "kullanılabilir ve benimseniyor mu?" — ve her biri için kanıt isteyin. Benimseme ölçütleri klinik doğrulamanın yerini tutmaz ve olumlu bir çalışma gerçek dünyada kullanımın garantisi değildir.

3. **Her girişimi bir mantık modeliyle başlatın.** İnşa etmeden önce, müdahalenin istediğiniz sonucu nasıl üreteceğine inandığınızı yazın. Bu, sınanmamış varsayımları erkenden açığa çıkarır, önemli ölçütleri tanımlar ve sonraki değerlendirmenize sınayacağı somut bir şey verir.

4. **Öğrenen veya kalıcı teknolojiler için gerçek dünya kanıtı kullanın.** Yapay zekâ, algoritmalar ve uzun ömürlü hizmetler için ilk çalışmaları rutin verilerin yapılandırılmış izlenmesiyle — prospektif gözlemsel tasarımlar, pragmatik değerlendirme — tamamlayın veya bunlarla izleyin; böylece performansın pratikte nasıl dayandığını bilir ve sapmayı (drift) yakalayabilirsiniz.

5. **Teslimat sorularında deney yapın; klinik olanları değerlendirin.** A/B testini ve analitiği teslimat optimizasyonu (ifade, akış, istemler) için bilgi yönetişimi ve onam sınırları içinde serbestçe kullanın. Resmî değerlendirmeyi (çalışmalar, pragmatik çalışmalar) klinik etki sorularına ayırın. Her soruyu doğru yönteme yönlendirin.

6. **HiPPO kararlarını yalnızca usulen değil, kültürel olarak ortadan kaldırın.** Herhangi bir karar vericiden kanıt istemeyi açıkça kabul edilebilir kılın, üst düzey görüşleri hipotez olarak çerçeveleyin ve hangi kanıtın fikrinizi değiştireceğini önceden taahhüt edin. Kıdeme güvenle meydan okuyabilen bir ekip daha iyi kararlar verir.

7. **Kararları ve kanıtlarını kaydedin.** Her önemli seçim için hafif bir karar günlüğü tutun — ne, neden, hangi kanıt, kim, ne zaman. Bu, düzenleyiciler ve halk için denetlenebilirlik yaratır, bitmeyen yeniden tartışmayı önler ve personel devri boyunca kurumsal belleği korur.

8. **Veri etiğine dikkat edin.** Kanıt çalışması hasta verisi kullanır; hukukîliği, onamı, orantılılığı ve adaleti tasarım kısıtları olarak ele alın. Eşitsizliği pekiştiren yanlı veri kümelerine karşı korunun, gizlilik yükümlülüğüne saygı gösterin ve kanıt uygulamalarınızın kendilerinin kamusal denetimden sağ çıkacağından emin olun.

## Ekibinizle tartışılacak sorular

1. **En önemli son kararımız için hem klinik kanıtı hem teslimat kanıtını — ayrı tutularak — gösterebiliyor muyuz, yoksa biri sessizce diğerinin yerini mi tuttu?**
   Bu soru, konunun klinik kanıtın ("işe yarıyor mu ve güvenli mi?") ve teslimat kanıtının ("kullanılabilir ve benimseniyor mu?") ayrı eksenlerde durduğu ve bunları karıştırmanın klasik, tehlikeli bir hata olduğu yönündeki ısrarını sınar. Önemlidir, çünkü bir hizmet klinik olarak sağlam ama kullanılmayan veya yoğun kullanılan ama klinik olarak doğrulanmamış olabilir ve sağlık ve bakımda yüksek bir kullanım rakamını klinik kanıt sanmak, başarı gibi görünürken hastaları riske atabilir. Görünür kılınacak gerilim şudur: teslimat kanıtı hızlı, ucuz ve yaltaklanıcıdır — analitik panoları hızla dolar — oysa klinik kanıt yavaş, pahalı ve çoğunlukla sonuçsuzdur; bu nedenle benimseme ölçütlerinin argümanı taşıması için sürekli baskı vardır. Gerçek bir kurul belgesini veya yatırım vakasını alın ve denetleyin: iki tür kanıt ayrılmış mı, her biri gerçekten mevcut mu ve klinik iddia tedarikçi demosunun veya tek merkezli bir çalışmanın üzerinde bir şeye dayanıyor mu? İyi, dürüst bir yanıt belirli bir kararı belirler, bir kanıt türünün nerede zayıf veya yok olduğunu kabul eder ve güçlü bir kullanım rakamının herkesi yatıştırmasına izin vermek yerine gelecekteki önemli seçimlerde her ikisini açıkça ve ayrı ayrı talep etmeyi taahhüt eder.

2. **Kanıt çıtamız gerçekte ne kadar orantılı — düşük riskli değişiklikler için altın standart çalışmalar talep edip daha yüksek riskli araçları zayıf kanıtla geçiriyor muyuz?**
   Konu orantılılığı NICE ESF katmanları üzerinden çerçeveler: düşük riskli bir sistem aracı için hafif kanıt, tanı koyan veya tedaviyi yönlendiren bir araç için yüksek kaliteli klinik etkililik kanıtı; bu soru kuruluşunuzun çıtayı gerçekten riske göre ayarlayıp ayarlamadığını yoksa tek bir kaba standart uygulayıp uygulamadığını kontrol eder. Önemlidir, çünkü her iki başarısızlık yönü de maliyetlidir — analiz felci yararlı, düşük riskli bir içerik değişikliğini gereksiz bir RKÇ'nin ardında bekletir; yeterince incelenmemiş, klinik kararları bilgilendiren bir yapay zekâ aracı ise etkileyici bir demo ile sızar — ve her ikisi de kanıt kültürüne olan güveni zedeler. Tartışılacak ödünleşim, orantılılığın muhakeme ve onu savunacak özgüven gerektirmesidir; bu, tek tip bir kuraldan daha zordur; "her şey için çalışma gerekir" veya "dijitalse sadece pilot yapın" tarzı genel bir yaklaşım yönetmesi daha kolaydır ama yanlıştır. İki veya üç güncel ya da yakın tarihli teknolojiyi birlikte gözden geçirin, her birini ESF katmanına yerleştirin ve talep ettiğiniz kanıtın katmanla eşleşip eşleşmediğini ya da onu kimin savunduğuyla mı yönlendirildiğini kontrol edin. Dürüst bir yanıt, ekibin bir teknolojinin risk katmanını konumlandırabildiğini gösterir, çıtanın her iki yönde de nerede yanlış ayarlandığını kabul eder ve orantılılığı bir içgüdü değil, açık, savunulabilir bir standart olarak ele alır.

3. **Odadaki en kıdemli kişiye "kanıt nedir?" diye sormak kültürel olarak ne kadar güvenli — ve bir liderin sezgisini bir karar yerine sınanacak bir hipotez olarak en son ne zaman ele aldık?**
   Bu soru, en yüksek maaşlı kişinin görüşünün kanıtı gölgede bıraktığı HiPPO başarısızlık biçimiyle doğrudan yüzleşir ve kanıta olan beyan edilmiş bağlılığınızın hiyerarşi ile ve saygın bir direktörü etkilemiş tedarikçi demosuyla karşılaşmaktan sağ çıkıp çıkmadığını sınar. Önemlidir, çünkü sağlık ve bakımda değerlendirilmemiş bir aracı devreye almaya yönelik demo güdümlü bir karar ticari bir kumar değil, klinik güvenlik ve kamu parası riskidir ve meydan okumanın güvensiz hale geldiği an, kanıtın kararları yönetmeyi bıraktığı andır. Gerçek gerilim, psikolojik güvenliğin politikayla zorunlu kılınamayacağıdır; üst düzey liderlerin görünür biçimde meydan okumaya davet etmesi, kendi görüşlerini hipotez olarak çerçevelemesi ve hangi kanıtın fikirlerini değiştireceğini önceden taahhüt etmesiyle inşa edilir — bunlar açığa çıkarıcı hissettiren ve zaman baskısı altında atlanması kolay davranışlardır. Konuşmayı somut örneklere dayandırın: veriden çok kıdem veya hevesle yönlendirilmiş yakın tarihli bir kararı hatırlayın ve herhangi birinin buna meydan okuyup okumadığını, bunun güvenli hissettirip hissettirmediğini ve bir karar kaydının neyi yakalayacağını sorun. İyi bir yanıt, hiyerarşinin şu anda nerede kazandığı konusunda açık sözlüdür, liderlerin meydan okumayı olağan kılmak için benimseyeceği somut davranışları adlandırır ve kültürel taahhüdü, gerekçeyi denetlenebilir kılan ve aynı tartışmanın yeniden yürütülmesini önleyen hafif karar günlüğüyle eşleştirir.

4. **Öğrenen veya kalıcı teknolojiler için — yapay zekâmız, algoritmalarımız, uzun ömürlü hizmetlerimiz — performanslarının doğruladığımızdan beri sapıp sapmadığını gerçekte nasıl bilirdik ve kim izliyor?**
   Konu, tek seferlik bir çalışmanın öğrenen veya değişen teknolojilerin süregelen davranışını yakalayamayacağı ve "bir kez değerlendirip bırakma"nın panzehiri gerçek dünya kanıtı ve süregelen izleme olan adlandırılmış bir başarısızlık biçimi olduğu konusunda açıktır. Bu soru önemlidir, çünkü tehlike sessizdir: bir yapay zekâ kötüleşme modeli veya önceliklendirme algoritması, vaka karışımı, kodlama uygulaması veya yukarı akış veri boru hatları değiştikçe bozulabilir ve bozulmuş bir özelliğin aksine bariz biçimde hiçbir şey başarısız olmaz — araç, yanlış alarm veya kaçırma oranı sessizce kötüleşirken makul çıktılar üretmeyi sürdürür. Görünür kılınacak gerilim, izlemenin devreye almanın heyecanına kıyasla gösterişsiz ve finanse edilmemiş olmasıdır: iş vakası imzalanıp faydalar deftere geçirildikten sonra, çok az kuruluş prospektif gözlemsel işi, sapma ölçütlerini veya bunları gözden geçiren adı konmuş bir sahibi kaynaklandırır. Canlı bir yapay zekâ veya algoritmik aracı seçin ve devreye alma sonrası yaşamını somut olarak izleyin — hangi rutin veri izleniyor, hangi temel çizgiye karşı, hangi ritimle ve bir bozulmayı kim kime üst makama taşırdı. Dürüst bir yanıt, doğrulamanın nerede devreye almada durduğunu kabul eder, sürekli gözetim gerektiren araçları gerektirmeyenlerden ayırır ve "göz kulak olmak" gibi belirsiz bir niyet yerine adı konmuş bir sahibi, bir ölçütü ve bir gözden geçirme ritmini taahhüt eder.

5. **Bugün verdiğimiz bir karar iki yıl sonra — yeni bir direktör, bir düzenleyici veya halk tarafından — sorgulandığında, yazılı kayıt gerçekte neyi gösterecek ve bu denetimden sağ çıkar mıydı?**
   Konu karar kaydını temel altyapı olarak ele alır: kararın, seçeneklerin, tartılan kanıtın, kimin karar verdiğinin ve ne zaman verdiğinin hafif bir günlüğü; gerekçeyi denetlenebilir kıldığı, personel devrinden sağ çıktığı ve aynı tartışmanın her çeyrekte yeniden yürütülmesini durdurduğu için değerlidir. Bu soru önemlidir, çünkü sağlık ve bakım kararları ticari kararların nadiren çektiği biçimde düzenleyici, parlamenter ve kamusal denetim çeker ve bu konudaki işlenmiş örnek tam da buna dayanır — iki yıl sonra yeni bir direktör devreye alınmış bir aracı sorgular ve "kayıt yanıt verir". Gerçek gerilim, disiplinin karar başına çok küçük maliyeti ile onu atlama yönündeki kronik baskı arasındadır: neden karar verdiğinizi yazıya dökmek o anda bürokratik hissettirir ve kayda en çok ihtiyaç duyanlar, onu talep etmek için odada olmayan gelecekteki personeldir. Bunu gerçeklikle sınayın: on iki veya on sekiz ay önce yapılmış önemli bir seçimin ardındaki gerekçeyi yeniden kurmaya çalışın — hangi kanıtın tartıldığını ve hangi alternatiflerin reddedildiğini bulabiliyor musunuz, yoksa yalnızca bir kararın alındığını mı? İyi bir yanıt, kayıtların önemli kararlar için gerçekten tutulup tutulmadığıyla ya da yalnızca kolay olanlar için mi tutulduğuyla, yalnızca sonuçları değil kanıtı ve seçenekleri de yakalayıp yakalamadıklarıyla ve herhangi birinin onları geri okuyup okumadığıyla yüzleşir — çünkü okunmayan, yalnızca sonuç içeren bir günlük kurumsal bellek değil, denetim tiyatrosudur.

6. **Kanıtımızı kimin verisi eğitiyor ve doğruluyor ve eşitsizliği pekiştirmeyeceğinden emin miyiz — yoksa veri etiğini bir tasarım kısıtı yerine imzalanacak bir form olarak mı ele alıyoruz?**
   Konu, kanıt çalışmasının hasta verisi üzerinde yürüdüğünde ve hukukîlik, onam, orantılılık ve adaletin evrak işi değil tasarım kısıtları olduğunda ısrar eder; özellikle eşitsizliği pekiştiren yanlı veri kümelerine ve bir başarısızlık biçimi olarak "evrak işi olarak etik"e karşı uyarır. Bu soru önemlidir, çünkü temsil gücü olmayan bir nüfus üzerinde doğrulanmış bir teknoloji, zaten en az hizmet alan gruplar için daha kötü performans gösterebilir — belirli etnik kökenlerin, yaşların veya eşlik eden hastalıkların yetersiz temsil edildiği yerde eğitilmiş bir kötüleşme veya tanı modeli bu yanlılığı her gelecek karara taşıyabilir ve ulusal ölçekte onaylanmış bir veri kümesi bu eşitsizliği sistem genelinde pekiştirir. Gerilim, adalet analizinin başlık doğruluk rakamından daha zor ve yavaş olmasıdır: verilerde kimin olduğunu ve kimin eksik olduğunu sorgulamanızı, performansı alt gruplar boyunca ayrıştırmanızı ve bazen en çok hizmet etmeniz gereken nüfuslar için kanıtınızın daha zayıf olduğunu kabul etmenizi gerektirir. Bunu somutlaştırmak için yakın tarihli veya önerilen bir aracı alın ve kimin kayıtları üzerinde inşa edilip test edildiğini, performansın hiç alt gruba göre incelenip incelenmediğini ve bilgi yönetişimi onayının adaletle hiç ilgilenip ilgilenmediğini yoksa yalnızca hukuki dayanağı mı doğruladığını sorun. Dürüst bir yanıt, gerçek etik incelemeyi onay kutusu işaretlemeden ayırır, temsil gücünün hiç kontrol edilmediği yerleri kabul eder ve yanlılık ile adaleti, sonda eklenen bir uyum adımı değil, kanıtın kendisinin yanıtlaması gereken sorular olarak ele alır.

## Uygulamada: bir sağlık ve bakım örneği

Bir toplum sağlığı kuruluşuna, hayati belirti verilerinden kötüleşme riski taşıyan hastaları işaretleyen bir yapay zekâ aracı sunuluyor. Bir HiPPO kararı, saygın bir direktör tedarikçi demosundan etkilendiği için onu devreye alırdı.

Bunun yerine kuruluş sunumu bir hipotez olarak ele alır. Aracı klinik kararları bilgilendiren bir teknolojiye uygun NICE ESF risk katmanına yerleştirir ve tedarikçiden o düzeyde etkililik kanıtı ister; sunulan en güçlü şey küçük, tek merkezli bir çalışmadır. Kuruluş bir **mantık modeli** yazar (daha iyi erken uyarı → daha erken üst makama taşıma → daha az kaçınılabilir kötüleşme) ve bir **pragmatik değerlendirme** tasarlar: aracın uyarılarının kaydedildiği ama işlem yapılmadığı, gerçek sonuçlarla karşılaştırıldığı gölge modunda bir devreye alma ve ek olarak hemşirelerle iş akışına uyum üzerine nitel görüşmeler.

Paralel olarak **teslimat kanıtı** toplar: klinisyenler uyarıları gerçekten fark edip güvenir mi? Uyarı sunumu üzerinde A/B tarzı testler yürütür. Bilgi yönetişimi ve klinik güvenlik liderleri veri kullanımını ve tehlike günlüğünü onaylar. Üç ay sonra RWE mütevazı ama gerçek bir iyileşme ve kabul edilebilir bir yanlış alarm oranı gösterir; teslimat kanıtı ise klinisyenlerin yeniden tasarlanmış uyarılarla etkileşime girdiğini gösterir. Devam etme kararı — aşamalı yayılım ve süregelen izlemeyle — tartılan kanıta atıf yapan bir karar kaydına yazılır. İki yıl sonra yeni bir direktör aracı sorguladığında, kayıt yanıt verir.

## Sektörel bakış açıları

Herkes kanıtı riske eşleştirme konusunda aynı yükümlülüğe sahiptir, ancak kanıt etrafındaki kaynaklar, teşvikler ve hesap verebilirlik kuruluşa göre keskin biçimde farklılık gösterir.

### Startup

Bir startup'ın kısıtı, nakit ömrü kısayken altın standart klinik kanıtın yavaş ve pahalı olmasıdır; bu yüzden benimseme ölçütlerini sanki klinik etkinin kanıtıymış gibi satma cazibesi vardır. Dürüst hamle, ürünü erken aşamada doğru NICE ESF katmanına yerleştirmek ve alıcılara kanıt boşluğu konusunda açık sözlü olmaktır; ilk gerçek dünya kanıtını üretmek için net bir mantık modeli ve ucuz bir pragmatik değerlendirme (bir gölge modu pilotu, tek bir merkeze karşı kesintili zaman serisi) kullanılır. Karar kayıtları neredeyse hiçbir şeye mal olmaz ve küçük bir ekip için orantısız biçimde değerlidir; hızlı yön değişimleri boyunca gerekçeyi korur ve durum tespitini önemseyen yatırımcılara ve NHS değerlendiricilerine bir denetim izi verir. Karşılığını veren disiplin, HiPPO kurucu sezgisine direnmek ve her "demo iyi gitti"yi sınanacak bir hipotez olarak ele almaktır.

### Küçük işletme

Köklü bir küçük sağlayıcı — bir GP muayenehanesi, bir toplum eczanesi, bir bakım evi, tek lokasyonlu bir klinik, startup aşamasını geçmiş küçük bir sağlık teknolojisi tedarikçisi — kanıtı riske eşleştirme konusunda aynı yükümlülüğü taşır, ancak gerçek hastaları, sıkı nakdi ve bunu yapacak çok az özel dijital yeteneği ya da hiç yoktur. Gerçekçi hamle, kendi kanıtınızı üretmek yerine başkalarının zaten ürettiği kanıta yaslanmaktır: aday bir aracın NICE ESF katmanını ve DTAC değerlendirmesini hazır orantılılık olarak kullanın, tedarikçilerden katmana uygun klinik etkililik kanıtını isteyin ve parlak bir demo ile değerlendirilmemiş bir ürüne ikna edilmeyi reddedin. Teslimat kanıtı, küçük bir kuruluşun gerçekten öncülük edebileceği yerdir, çünkü kendi hastalarını yakından görür — personelin bir aracı gerçekten kullanıp kullanmadığı ve başarısızlık talebini azaltıp azaltmadığı üzerine birkaç haftalık dürüst gözlem, erişilebilir bir gerçek dünya kanıtıdır. Tek satırlık bir karar kaydı — ne seçtik, hangi kanıtı gördük, kim karar verdi — küçük bir ekibe neredeyse hiçbir şeye mal olmaz ve bir ortak ayrıldığında veya bir CQC müfettişi nedenini sorduğunda onu korur. Kaçınılacak tuzak, küçük olmanın sizi kanıt çıtasından muaf kıldığını varsaymaktır; hastalara karşı yükümlülük aynıdır, yalnızca kaynaklar aynı değildir.

### Büyük kuruluş

Bir NHS hastane kuruluşu veya ICS'nin ciddi bir değerlendirme yapmak için rutin verisi, hasta hacmi ve analitik yeteneği vardır — ve bunu talep eden hesap verebilirlik de, çünkü kanıtlanmamış bir aracı ölçekte devreye almak aynı anda klinik güvenlik ve kamu parası riskidir. Başarısızlık biçimi kurumsaldır: bir tedarikçi demosunu savunan saygın bir direktör veya kimsenin sonradan kontrol etmediği öngörülen faydalara dayanan bir iş vakası. Çare, herhangi bir karar vericiye "kanıt nedir?" diye sormayı kültürel olarak güvenli kılmak, her kurul belgesinde klinik ve teslimat kanıtını ayrı eksenlerde tutmak ve yapay zekâ ile uzun ömürlü hizmetler için bir kez doğrulamak yerine süregelen gerçek dünya izlemesini finanse etmektir. Büyük bir ilaç veya sağlık teknolojisi kuruluşu resmî çalışma altyapısı getirir ancak ürettiği gerçek dünya kanıtında yayın yanlılığına ve karıştırıcı faktörlere karşı korunmalıdır.

### Kamu

Ulusal bir kurum — NICE, NHS England, DHSC, MHRA, UKHSA — çoğu zaman diğerlerinin aşması gereken kanıt çıtasını belirler; bu nedenle çalışma biçimleri tüm pazarı şekillendirir: ESF, DTAC ve tıbbi cihaz olarak yazılım düzenlemesi, nüfus ölçeğinde hesap verebilirliğin araçlarıdır. Buradaki kararlar düzenleyici, parlamenter ve kamusal denetim çeker; bu nedenle bir teknolojinin *neden* önerildiğinin veya satın alındığının kaydı kararın kendisi kadar önemlidir ve kanıt sınırlamaları konusunda şeffaflık bir nezaket değil, bir yükümlülüktür. Bu ölçekteki risk, bir teknolojiyi zayıf kanıtla sistem genelinde zorunlu kılmak veya tersine düşük riskli bir değişiklik için RKÇ talep edip yararlı yeniliği durdurmaktır. Çare, yayımlanmış standartlarda açık hale getirilmiş orantılılığın yanı sıra veri etiğine ve adalete dikkattir; çünkü ulusal düzeyde onaylanmış yanlı bir veri kümesi eşitsizliği ölçekte pekiştirir.

## Yaygın başarısızlık biçimleri

- **Demo güdümlü kararlar.** Bir gösteri üst düzey bir lideri etkilediği için satın almak. Panzehir: sunumları hipotez olarak ele alın; katmana uygun kanıt talep edin.
- **Doğrulama sanılan kullanım.** Benimseme rakamlarını bir aracın klinik olarak etkili olduğunun kanıtı olarak göstermek. Panzehir: klinik ve teslimat kanıtını ayrı eksenlerde tutun.
- **Bir kez değerlendirip bırakma.** Bir kez doğrulayıp asla izlememek; özellikle sapan yapay zekâ için. Panzehir: gerçek dünya kanıtı ve süregelen izleme.
- **Analiz felci.** Düşük riskli bir içerik değişikliği için RKÇ talep etmek. Panzehir: orantılı yöntemler; risk düşük olduğunda A/B ve pragmatik değerlendirme.
- **Kaydedilmemiş kararlar.** Bir seçimin neden yapıldığına dair iz yok; bu yüzden yeniden tartışılır ve denetlenemez. Panzehir: hafif bir karar günlüğü.
- **Evrak işi olarak etik.** Veri etiğini bir tasarım kısıtı yerine imzalanacak bir form olarak ele almak. Panzehir: hukukîliği, onamı ve adaleti kanıt tasarımına işleyin.

## Olgunluk modeli

| Boyut | Başlatma | Geliştirme | Standartlaştırma | Yönetme | Orkestrasyon |
|---|---|---|---|---|---|
| Kararların temeli | Kıdem / demolar (HiPPO) | Bazı veriler gözden geçirilir | Kanıt düzenli olarak istenir, riske göre katmanlandırılır | Kanıt çıtası risk katmanlarına karşı izlenir ve güvence altına alınır | Önceden taahhüt edilmiş kanıt eşikleri; sezgiler sınanır |
| Klinik ve teslimat | Karıştırılmış veya biri göz ardı edilmiş | İkisi de anılır | İkisi de talep edilir ve ayırt edilir | İkisi de tanımlı eşiklere karşı ölçülür | İkisi de sürekli izlenir |
| Değerlendirme | Yok veya olaydan sonra | Ara sıra, ad hoc | Mantık modelleri + orantılı tasarımlar | Değerlendirmeler yönetilir, KPI'lar hedefe karşı izlenir | RWE ve süregelen değerlendirme yerleşik |
| Veri etiği | Sonradan akla gelen | Yalnızca uyum | Etik baştan tasarlanmış | Adalet ölçütleri eşiklere karşı gözden geçirilir | Adalet ve yanlılık aktif olarak izlenir |
| Karar kayıtları | Yok | Tutarsız notlar | Standart karar günlüğü | Günlük bütünlüğü ölçülür ve güvence altına alınır | Günlükler yeniden kullanılır, denetlenir ve onlardan öğrenilir |

## Kontrol listesi

- [ ] Her teknoloji bir NICE ESF risk katmanına yerleştirilir ve buna uygun kanıt talep edilir.
- [ ] Her önemli kararın hem klinik hem teslimat kanıtı vardır ve bunlar ayrı tutulur.
- [ ] İnşa etmeden önce sonuçları ve ölçütleri adlandıran bir mantık modeli vardır.
- [ ] Değerlendirme tasarımı riske orantılıdır (düşük için A/B ve pragmatik; yüksek için çalışmalar/RWE).
- [ ] Yapay zekâ ve uzun ömürlü hizmetler için gerçek dünya kanıtı ve izleme mevcuttur.
- [ ] Herhangi bir karar vericiye "kanıt nedir?" diye sormak kültürel olarak güvenlidir.
- [ ] Her önemli karar bir karar günlüğünde (ne, neden, kanıt, kim, ne zaman) yakalanır.
- [ ] Veri kullanımı hukuka uygun, onamlı, orantılıdır ve yanlılık ve adalet açısından kontrol edilmiştir.

## Temel kaynaklar

- NICE — *Evidence Standards Framework for digital health technologies (ESF)* (nice.org.uk).
- NHS England / NHSX — *Digital Technology Assessment Criteria (DTAC)*.
- MHRA — *software and AI as a medical device* hakkındaki rehberlik.
- Oxford Centre for Evidence-Based Medicine — *Levels of Evidence* (kanıt hiyerarşisi).
- HM Treasury — *The Magenta Book* (değerlendirme, mantık modelleri ve değerlendirme tasarımları rehberi).
- MRC — *Developing and evaluating complex interventions* çerçevesi.
- Ron Kohavi et al. — *Trustworthy Online Controlled Experiments* (A/B testi).
- Michael Nygard — *Architecture Decision Records* (karar günlüğü örüntüsü).

## Kaynakça

1. Hierarchy of evidence — Wikipedia — https://en.wikipedia.org/wiki/Hierarchy_of_evidence
2. Evidence-based medicine — Wikipedia — https://en.wikipedia.org/wiki/Evidence-based_medicine
3. Systematic review — Wikipedia — https://en.wikipedia.org/wiki/Systematic_review
4. Meta-analysis — Wikipedia — https://en.wikipedia.org/wiki/Meta-analysis
5. Randomized controlled trial — Wikipedia — https://en.wikipedia.org/wiki/Randomized_controlled_trial
6. Real world evidence — Wikipedia — https://en.wikipedia.org/wiki/Real_world_evidence
7. Logic model — Wikipedia — https://en.wikipedia.org/wiki/Logic_model
8. Theory of change — Wikipedia — https://en.wikipedia.org/wiki/Theory_of_change
9. Interrupted time series — Wikipedia — https://en.wikipedia.org/wiki/Interrupted_time_series
10. A/B testing — Wikipedia — https://en.wikipedia.org/wiki/A/B_testing
11. Architectural decision (Architecture Decision Records) — Wikipedia — https://en.wikipedia.org/wiki/Architectural_decision
12. Evidence Standards Framework for digital health technologies (ESF) — NICE — https://www.nice.org.uk/about/what-we-do/digital-health
13. Digital Technology Assessment Criteria (DTAC) — NHS England — https://www.nhs.uk/digital-technology-assessment-criteria-dtac/
14. Software and AI as a Medical Device — MHRA, GOV.UK — https://www.gov.uk/government/publications/software-and-artificial-intelligence-ai-as-a-medical-device
15. Oxford Centre for Evidence-Based Medicine: Levels of Evidence — University of Oxford — https://www.cebm.ox.ac.uk/resources/levels-of-evidence/ocebm-levels-of-evidence
16. *The Magenta Book* (guidance on evaluation) — HM Treasury, GOV.UK — https://www.gov.uk/government/publications/the-magenta-book
17. *Developing and evaluating complex interventions* — Medical Research Council (MRC) — https://www.mrc.ukri.org/documents/pdf/complex-interventions-guidance/
18. *Trustworthy Online Controlled Experiments* — Ron Kohavi, Diane Tang & Ya Xu, Cambridge University Press — https://experimentguide.com/
