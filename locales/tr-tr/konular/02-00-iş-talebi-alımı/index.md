# Konu 2.0 — İş Talebi Alımı

**Tek cümleyle:** İşin kuruluşunuza nasıl girdiği — tek, görünür bir giriş kapısından, tutarlı biçimde kaydedilerek ve vakit kaybetmeden onaylanarak — ne yapacağınızı gerçekten seçip seçemeyeceğinizi, yoksa yalnızca en yüksek sesle bağıranlara tepki verip vermeyeceğinizi belirler.

## Sağlık ve bakımda bu neden önemli

Sağlık ve bakımda dağınık talep alımının bedeli yalnızca boşa giden çaba değildir — klinik risk, eşitsizlik ve aşınan güvendir. Bir servisin daha güvenli bir e-gözlem iş akışı talebi, bir tedarikçinin sunumu, ulusal bir zorunluluk ve bir yönetim kurulu üyesinin gözdesi olan fikir farklı kanallardan ortak bir kayıt olmaksızın geldiğinde, kuruluş kendi talebini göremez, yönetmek şöyle dursun. Güvenlik açısından kritik talepler, iyi bağlantılı ama düşük değerli taleplerin arkasında gömülür.

Kamu parası riskleri katlar. Değerlendirilmemiş, kaydedilmemiş talebe harcadığınız her dijital kapasite birimi, bekleme listesine, ortak bakım kaydına ya da bir sistemin dayandığı birlikte çalışabilirlik işine harcanmayan kapasitedir. Düzenleyiciler, denetçiler ve Entegre Bakım Kurulları (ICB) giderek "buna nasıl öncelik verildi?" sorusuna savunulabilir bir yanıt bekliyor — ve iş size nasıl geldiğini bile gösteremiyorsanız bunu yanıtlayamazsınız. İyi talep alımı, yönetilebilir, eşitlikçi, kanıta dayalı bir işletme modelinin ilk kontrol noktasıdır (bkz. Konu 1.1 — İşletme Modeli ve Konu 1.3 — Kanıta Dayalı Kararlar).

## Temel kavramlar

**Talep alımı (intake)**, talebin her biriminin, onu yapıp yapmayacağınıza ya da nasıl yapacağınıza dair herhangi bir karar verilmeden önce alınması, kaydedilmesi, sınıflandırılması ve onaylanması yönündeki disiplinli süreçtir. Bilinçli olarak triyajdan (değerlendirme ve yönlendirme — Konu 2.1) ve önceliklendirmeden (sıralama — Konu 2.2) ayrıdır. Talep alımının tek görevi, talebi *görünür ve karşılaştırılabilir* kılmaktır.

**[Talep yönetimi](https://en.wikipedia.org/wiki/Demand_management)**, [ITIL](https://en.wikipedia.org/wiki/ITIL) (IT Infrastructure Library) [hizmet yönetimi](https://en.wikipedia.org/wiki/IT_service_management) geleneğinde, talebin "plansız maliyetlere katlanmadan" karşılanabilmesi için öngörülmesi ve yönlendirilmesi uygulamasıdır. Temel aracı **tek giriş kapısıdır (single front door)**: hiçbir şeyin kaybolmaması ya da resmî olmayan kanallardan işlenmemesi için tüm taleplerin toplandığı tek yol. ITIL 4 bunu bir [hizmet kataloğu](https://en.wikipedia.org/wiki/Service_catalog) (giriş kapısının kendisi) artı hizmet talebi yönetimi (biri kapıdan girdikten sonra olanlar) olarak çerçeveler.

**Talep türleri** birbirinin yerine kullanılamaz ve bunları birbirine karıştırmak, işlev bozukluğunun yaygın bir kaynağıdır. Yararlı bir çalışma sınıflandırması:

- **Fikirler / fırsatlar** — "şöyle olsa iyi olmaz mıydı…"; kanıtlanmamış, keşif gerektirir.
- **Talepler / geliştirmeler** — mevcut bir hizmette tanımlı bir değişiklik.
- **Olaylar / sorunlar** — bir şey şu anda bozuk ya da güvensiz; genellikle ayrı, daha hızlı bir operasyonel yol.
- **Zorunluluklar** — yasal, düzenleyici ya da ulusal olarak yönlendirilen, sınırlı takdir yetkisi olan işler (örneğin bir NHS England ulusal program gerekliliği).

Her türün aşağı akışta farklı bir yolu hak ettiği doğrudur, ancak hepsi aynı giriş kapısından gelmeli ve aynı talep birikiminde (backlog) kaydedilmelidir.

**Gölge talep alımı (shadow intake)** — [gölge BT'nin](https://en.wikipedia.org/wiki/Shadow_IT) talep tarafındaki akrabası — bir karşı örüntüdür: giriş kapısını atlayan talep — koridor sohbeti, yardımsever bir geliştiriciye doğrudan e-posta, "küçük bir iyilik". Gölge talep alımı görünmezdir, yönetişimsizdir ve adil, güvenli bir sistem için tek en büyük tehdittir.

## İyi uygulamalar

1. **Tek, görünür bir giriş kapısı kurun.** Tüm yeni talepler için tek, iyi duyurulmuş bir yol sağlayın — tipik olarak bir kuyruğa ya da bilet aracına bağlı bir form — ve üst düzey liderlerin talepleri dahil her şeyi onun üzerinden yönlendirin. Giriş kapısının tek bir *ekip* olması gerekmez, ancak tek bir *kayıt* olmalıdır. Talepler on iki gelen kutusunda yaşıyorsa talebin görünürlüğü imkânsızdır.

2. **Talebi hafif, yapılandırılmış bir formla yakalayın.** Yalnızca triyaj için gereken şeyi isteyin: talep eden ve hizmet, aranan sorun ya da sonuç (çözüm değil), etkilenen kullanıcılar ve hacimler, herhangi bir güvenlik ya da yasal itici güç ve acillik hakkında kabaca bir fikir. Formu tam bir iş gerekçesine dönüştürmekten kaçının — fazla ağır bir talep alımı insanları gölge kanallara geri iter.

3. **Kapıda sınıflandırın.** Her kalemi talep türüne (fikir / talep / olay / zorunluluk), kaynak hizmete ve klinik güvenliğe ya da kişisel veriye dokunup dokunmadığına göre etiketleyin. Sınıflandırma, talep edenlerin iç mekanizmanızı anlamasını gerektirmeden olayları hızlı bir operasyonel yola, fikirleri ise keşfe göndermenizi sağlar.

4. **Olay yolunu ayırın — ama yine de kaydedin.** Şu anda güvensiz ya da bozuk olan bir şey değişiklik taleplerinin arkasında kuyrukta beklememelidir. Olayları hemen operasyonel / hizmet masası sürecinize yönlendirin, ancak olayların hacminin ve örüntüsünün talep alımına görünür kalmasını sağlayın; çünkü yinelenen olaylar çoğu zaman değişim yatırımının nereye gitmesi gerektiğinin en güçlü işaretidir.

5. **[İş gerekçesini](https://en.wikipedia.org/wiki/Business_case) yalnızca yeterince isteyin — büyüklükle orantılı.** Küçük talepler için beklenen yarara dair bir cümle yeterlidir. Daha büyük teklifler için hafif, tek sayfalık bir gerekçe kullanın: sorun, amaçlanan sonuç ve kimin yararlanacağı, kaba büyüklük, temel riskler ve bunu *yapmamanın* maliyeti. Tam iş gerekçesi titizliğini (Green Book / Hazine beş durum modeli) her fikir için değil, gerçek yatırım kararları için saklayın.

6. **Bir onay hizmet düzeyi taahhüdü (SLA) belirleyin ve yayımlayın.** *Onay* için bir [hizmet düzeyi sözleşmesi](https://en.wikipedia.org/wiki/Service-level_agreement) taahhüt edin — örneğin "her talep, sonraki adımların ve beklenen triyaj tarihinin göstergesiyle iki iş günü içinde onaylanır." Onay, işi yapmayı kabul etmek değildir; talebin görüldüğü ve değerlendirileceği sözüdür. Bu tek disiplin, gölge talep alımını öldürmek için diğer her şeyden daha fazlasını yapar; çünkü insanlar arka kanalları esas olarak giriş kapısı kara delik gibi hissettirdiğinde kullanır.

7. **Talep kuyruğunu herkese görünür kılın.** Talep birikimini — en azından kurum içinde — yayımlayın; böylece talep edenler kendi kalemlerini, durumunu ve diğerlerine göre yerini görebilir. Şeffaflık, "benim işimle neden kimse ilgilenmedi?" sorusunu kendi kendine hizmet yanıtına dönüştürür ve sürecin adilliğine olan güveni kurar.

8. **Bir talep alımı sahibi ve ritim belirleyin.** Giriş kapısının sahibi biri olmalıdır: kalemlerin eksiksiz, doğru sınıflandırılmış, tekrarlardan arındırılmış olmasını ve öngörülebilir bir ritimle triyaja aktarılmasını sağlayan (bkz. Konu 2.1). Sahibi olmayan talep alımı haftalar içinde tıkanır.

9. **Talep alımı yollarını erişilebilir ve eşitlikçi kılın.** En acil ihtiyaçları olan insanlar — ön saf personeli, sosyal bakım sağlayıcıları ve nadiren duyulan topluluklar — çoğu zaman cilalı bir talep göndermeye en az muktedir olanlardır. Birden fazla giriş yolu sunun, dili sade tutun ve talep edenlere bir çözümü önceden belirlemek yerine altta yatan sorunu ifade etmeleri için yardımcı olun. Yalnızca iyi kaynaklanmış kişilerin gezinebildiği bir talep alımı süreci, tüm portföyü sessizce çarpıtır.

10. **Talep edenlerle döngüyü kapatın.** İnsanlara taleplerine ne olduğunu — kabul edildi, birleştirildi, ertelendi ya da reddedildi — ve nedenini öngörülebilir bir zaman diliminde söyleyin. Sessiz talep alımı güveni yok eder ve gölge talebi ve geçici çözümleri körüklerken, dürüst, zamanında geri bildirim ("hayır" bile olsa) giriş kapısını güvenilir tutar ve takip yazışmalarını azaltır.

## Ekibinizle tartışılacak sorular

1. **Giriş kapımızı şu anda ne kadar gölge talep alımının atladığını gerçekte nasıl bilirdik?**
   Bu soru önemlidir; çünkü göremediğiniz talebi yönetemezsiniz ve çoğu lider, işin ne kadarının koridor sohbetlerinden, yardımsever geliştiricilere doğrudan e-postalardan ve bağlantıları iyi paydaşlara yapılan "küçük iyiliklerden" girdiğini büyük ölçüde hafife alır. Gerilim şudur: giriş kapısını yönetenler çoğu zaman etrafından neyin dolaştığından en az haberdar olanlardır; bu nedenle dürüst bir yanıt, yalnızca kuyruğu okumayı değil, geliştiricilere ve teslimat ekiplerine gerçekte neye çekildiklerini sormayı gerektirir. Somut sondajları düşünün: geçen çeyrekte tamamlanan işlerden bir örneklemi denetleyin ve "bu nereden çıktı ve bunun için bir talep alımı kaydı var mı?" diye sorun; ön saf ve klinik personele bugün bir kaygıyı nasıl dile getireceklerini sorun ve giriş kapısının yanıtlarında yer alıp almadığına bakın. İyi bir yanıt, "bir formumuz var, yani talep görünür" şeklindeki rahatlatıcı varsayıma direnir ve bunun yerine belirli arka kanalları adlandırır, hacimlerini tahmin eder ve insanların neden onları tercih ettiğini belirler — genellikle giriş kapısı daha yavaş olduğu ya da kara delik gibi hissettirdiği için. Aranacak kanıt, kaydedilen talep ile teslim edilen iş arasındaki farktır; büyük bir fark, kapasitenizin değil, kör noktanızın ölçüsüdür.

2. **İnsanları gölge kanallara geri itmeden kapıda talep edebileceğimiz en küçük alan kümesi nedir?**
   Bu, bedava öğle yemeği olmayan gerçek bir tasarım ödünleşimidir: eklediğiniz her alan sonradan triyaj yapma yeteneğinizi artırır ancak göndermenin maliyetini yükseltir ve bir eşiğin üzerinde insanlar giriş kapısını tamamen kullanmayı bırakır. Sağlık ve bakım ortamında riskler daha keskindir; çünkü zorunlu bir klinik güvenlik ve kişisel veri işareti pazarlık konusu değildir, ancak tam bir iş gerekçesine şişirilmiş bir form, tam da yakalamak istediğiniz erken, çekingen güvenlik sinyallerini bastıracaktır. Tartışma, ulaşılması en zor talep edenlerinizin kim olduğunu — teklif yazma desteği olmayan ön saf servis personeli ve sosyal bakım çalışanları — ortaya çıkarmalı ve portföy ofisinin bilgi iştahına değil, onların çaba bütçesine göre tasarım yapmalıdır. Somut açılar: formu taslak olarak hazırlayın ve meşgul bir hemşire gibi doldururken kendinizi zamanlayın; bir kalemi *yönlendirmek* için gereken alanları, *karar vermek* için gereken alanlardan ayırın ve ikincisini triyaj ya da iş gerekçesi aşamalarına erteleyin. Güçlü bir yanıt bir ilke ifade eder — sorunu ve sonucu yakalayın, çözümü değil; sınıflandırmak ve onaylamak için yeterince yakalayın, fazlasını değil — ve bazı bilgilerin önceden talep edilmek yerine sonradan peşinden gidileceğini kabul eder. Dürüst sürüm, koordinatör için kolay bir formun çoğu zaman talep eden için zor olduğunu kabul eder ve bilinçli olarak talep edenin rahatlığını seçer.

3. **Üst düzey bir lider bir talebi giriş kapısının etrafından yönlendirmeye çalıştığında gerçekte ne yapacağız?**
   Yönetici baypası, bir talep alımı disiplinini çökertme olasılığı en yüksek tek davranıştır; çünkü herkese giriş kapısının başkaları için olduğunu bildirir ve kıdemi sorgulamanın kültürel olarak zor olduğu hiyerarşik NHS ve devlet kuruluşlarında en çok önem taşır. Gerilim gerçektir: lider genellikle meşru bir talebe ve gerçek bir yetkiye sahiptir; dolayısıyla yanıt yardımın düz bir reddi olamaz, ama aynı zamanda bir ay içinde norm haline gelen sessiz bir istisna da olamaz. Ekip belirli senaryoyu ve yükseltmeyi prova etmelidir — koordinatör, lider adına talebi giriş kapısına kaydediyor ve gelecekteki talepleri nazikçe yönlendiriyor mu ve buna direnildiğinde o çizgiyi korumak için kimin yetkisi var? Görünür yönetici uyumunun olumlu bir sinyal olarak neye benzeyeceğini düşünün: bir direktörün kendi talebini formdan herkesin gözü önünde göndermesi, süreci meşrulaştırmak için herhangi bir politika belgesinden daha fazlasını yapar. İyi bir yanıt, bunun "sorun olmayacağı" umudu yerine somut, tekrarlanabilir bir yanıtı adlandırır ve kendi davranışı kültürü yapıp bozacak bir ya da iki üst düzey sponsoru belirler. Dürüst olmayan yanıt "liderlerimiz bunu yapmaz"dır — yapacaklardır ve plan, bunu ilk yaptıklarında ayakta kalmalıdır.

4. **Giriş kapımızın yalnızca dijital olarak kendinden emin olanlar değil, en acil ihtiyaçları olan insanlar tarafından gerçekten ulaşılabilir olduğundan nasıl emin olacağız?**
   Bu soru önemlidir; çünkü bir talep alımı süreci tüm portföyü sessizce şekillendirir ve yalnızca iyi kaynaklanmış ekipler onda gezinebiliyorsa, gördüğünüz talep sistematik olarak ön saf, sosyal bakım ve nadiren duyulan seslerden uzağa çarpıtılır. Gerilim şudur: talebi yönetilebilir kılan aynı yapı ve titizlik — formlar, alanlar, hizmet yönetimi araçları — meşgul bir bölge hemşiresi, bir bakım evi müdürü ya da teklif yazma desteği olmayan hastayla yüz yüze çalışan bir ekip için de engeli yükseltir. Somut açıları düşünün: geçen çeyrekte giriş kapısından gerçekte kim gönderdi ve bu grup, klinik riskin ve eşitsizliğin gerçekte nerede olduğuyla örtüşüyor mu? Birden fazla giriş yolu sunun — bir koordinatörün yazıya döktüğü bir telefon görüşmesi ya da kısa bir konuşma — ve dilin dışarıdakileri dışlayan iç jargonu varsayıp varsaymadığını kontrol edin. Dürüst bir yanıt, kuyrukta şu anda yeterince temsil edilmeyen grupları adlandırır ve tek bir çevrimiçi formun tarafsız olduğunu varsaymak yerine onlar için belirli düzenlemeler taahhüt eder. Aranacak kanıt, yalnızca toplam hacim değil, talebi kimlerin getirdiğinin demografik ve kurumsal dağılımıdır.

5. **İki talebin aynı altta yatan ihtiyaç olduğu ortaya çıktığında, bunların mükerrer olduğuna kim karar verir ve onları birleştirirken talep edenlerin güvenini nasıl koruruz?**
   Mükerrerlik her ölçekte kaçınılmazdır — aynı "e-gözlem" ya da ilaç mutabakatı ihtiyacı birkaç servisten veya merkezden gelir — ve yönetilmezse görünür birikimi şişirir ve çabayı yarı yapılmış varyantlar arasında parçalar. Ödünleşim, birleştirmenin bir talep edeni sessizce haklarından yoksun bırakabilen bir yargı eylemi olmasıdır: kaydı başka birine katılan kişi, özellikle hayatta kalan kalem başkasının sözleriyle çerçevelendiyse, kendi özgül sorununun göz ardı edildiğini hissedebilir. Ekip, mükerrer kaldırma yetkisinin nerede durduğuna — genellikle talep alımı sahibi — ve iki şeyi "aynı" saymayı hangi kanıtın haklı çıkardığına karar vermelidir; çünkü yüzeysel olarak benzer talepler bazen gerçekten farklı klinik bağlamları gizler. Somut uygulama: her özgün talebi birleştirmeden sonra bile izlenebilir tutun ve her iki talep edene ne olduğunu ve nedenini söyleyin; böylece birleştirme, geçersiz kılınmak yerine birlikte duyulmak gibi hissettirir. İyi bir yanıt, mükerrer kaldırmayı sessiz bir temizlik olarak değil, net sahipliği ve bir denetim izi olan bir derleme disiplini olarak görür. Dürüst olmayan sürüm, mükerrerlerin bariz ve birleştirilmesinin zararsız olduğunu varsayar; oysa özensiz birleştirme, insanların giriş kapısına güvenmeyi bırakmasının yaygın bir nedenidir.

6. **"Hayır" ya da "şimdi değil" demeye ilişkin dürüst politikamız nedir ve reddedilen talebi, kabul edilen talep kadar görünür kılmaya istekli miyiz?**
   Talep alımı konuşmalarının çoğu işin nasıl içeri girdiğine odaklanır, ancak sistemin sağlığı işin dürüstçe nasıl geri çevrildiğine de aynı ölçüde bağlıdır; çünkü yalnızca "evet" ya da "sessizlik" diyebilen bir giriş kapısı tıkanır ve güvenilirliğini yitirir. Sağlık ve bakımda riskler keskindir: bir talebi reddetmek ya da ertelemek, sınırlı bir bütçe karşısında doğru karar olabilir, ancak gerçek bir güvenlik ya da eşitlik sinyalini de gömebilir; bu nedenle gerekçe kaybolmak yerine kaydedilmeli ve yeniden ele alınabilir olmalıdır. Gerilim kültüreldir — net bir "hayır, nedeni şu" belirsiz bir "bakacağız"dan daha saygılı ve daha yararlıdır, ancak özellikle üst düzey ya da klinik talep edenlere söylemek daha zordur. Somut açıları düşünün: ertelenen kalemlerin bir gözden geçirme tarihi var mı ve bir talep eden talebinin neden reddedildiğini ve kararı neyin değiştireceğini görebiliyor mu? Reddedilen ve ertelenen talebi kabul edilen talebin yanında görünür kılmak, kuruluşun kendi tercihlerinden öğrenmesini ve bunları bir ICB'ye ya da denetçiye karşı savunmasını sağlayan şeydir. Dürüst bir yanıt, her kalem için — kabul edilmiş, birleştirilmiş, ertelenmiş ya da reddedilmiş — zamanında, gerekçeli bir kapanışı taahhüt eder ve inandırıcı bir "hayır"ın, kimsenin asla başlamayacağı umut dolu bir iş birikiminden çok daha fazla giriş kapısını koruduğunu kabul eder.

## Uygulamada: bir sağlık ve bakım örneği

Bir Entegre Bakım Sistemi'nin (ICS) dijital talebi alacak ortak bir yolu yoktu. Trust'lar program direktörüne e-posta atıyordu; tedarikçiler klinik direktörlere lobi yapıyordu; ulusal bir birlikte çalışabilirlik zorunluluğu mektupla geldi; servis personeli dijital ekibe hiç ulaşmayan güvenlik kaygılarını kâğıda döküyordu. Ne kadar talep olduğunu ya da belirli bir işin neden sürdüğünü kimse söyleyemiyordu.

ICS, mevcut hizmet yönetimi aracında dört talep türü ve zorunlu bir "klinik güvenlik / kişisel veri" işareti olan tek bir talep alımı formu getirdi. Her yol — tedarikçi, trust, ulusal kurum, ön saf — o forma yönlendirildi; üst düzey liderler davranışa örnek olmak üzere onu kendileri kullanmayı kabul etti. Bir talep alımı koordinatörü her kalemi iki iş günü içinde onayladı ve kalemleri triyaj kuruluna devretmeden önce eksiksizlik ve sınıflandırmayı kontrol etmek için kısa bir haftalık oturum yürüttü.

Bir çeyrek içinde üç şey değişti. Birincisi, ICS ilk kez yönetim kuruluna dijital talebin türe ve kaynak kuruluşa göre tek bir resmini gösterebildi. İkincisi, daha önce görünmez olan bir ilaç mutabakatı iş akışına ilişkin bir grup ön saf olayı, değişim için net, kanıta dayalı bir aday olarak ortaya çıktı. Üçüncüsü, gölge talepler keskin biçimde düştü; çünkü giriş kapısı artık arka kanalların hiç yanıtlamadığı kadar hızlı yanıt veriyordu.

## Sektörel bakış açıları

### Startup

Küçük bir dijital sağlık şirketi odakla yaşar ya da ölür; bu nedenle giriş kapısı birçok paydaşı yönetmekten çok, özel bir özellik isteyen her aday müşterinin, yatırımcının ve klinik danışmanın çekimine direnmekle ilgilidir. Buradaki talep alımı hafiftir — ortak bir pano ya da tek bir elektronik tablo — ancak yine de tek bir kayıt olmalıdır; çünkü kurucu liderliğindeki "sadece yapın" yan kanalı startup'ın gölge talep alımı sürümüdür ve yol haritasını sessizce yeniden şekillendirir. Finansman kısıtı en keskin sınıflandırıcıdır: her kalem kısa bir finansal ömre karşı tartılır; bu nedenle talep alımı formunun en değerli alanı "bu hangi müşteri ya da düzenleyici sonucu mümkün kılıyor?"dur. Klinik güvenlik ve veri koruma işaretleri bu ölçekte bile atlanamaz; çünkü hasta verisi işleyen bir startup, bir trust ile aynı DCB0129 ve UK GDPR yükümlülüklerini taşır. "Yakalandı, henüz başlanmadı" diyebilme disiplini, gelecek vaat eden bir şirketin bir düzine yarı yapılmış pilota parçalanmasını önleyen şeydir.

### Küçük işletme

Yerleşik küçük bir sağlayıcı — bir aile hekimliği muayenehanesi, bir toplum eczanesi, bir bakım evi ya da tek merkezli bir klinik — gerçek hastalara ve süregelen operasyonlara sahiptir ancak nadiren özel bir BT ya da dijital işlevi vardır; bu nedenle talep alımı, her şeyin yanında bir muayenehane yöneticisine ya da kayıtlı yöneticiye düşen bir görevdir. Buradaki giriş kapısı mütevazıdır — çoğu zaman ortak bir posta kutusu ya da tek bir kayıt defteri — yine de önemlidir; çünkü talep klinisyenlerden, bir tedarikçinin hesap yöneticisinden, bir CQC eyleminden ve bir ICB talebinden aynı anda gelir ve tek bir kayıt olmadan en küçük ve en gürültülü işler önemli olanları dışarıya iter. Bağlayıcı kısıt, finansman turlarından çok insanların zamanıdır: yerini hak eden talep alımı sorusu "bu bir hasta güvenliği, düzenleyici ya da sözleşmesel yükümlülüğü ele alıyor mu, yoksa bekleyebilir mi?"dir. Bu kuruluşlar büyük bir trust ile aynı klinik güvenlik ve UK GDPR yükümlülüklerini taşır ama bunları kapasitenin bir kesriyle yerine getirmelidir; bu nedenle talebi yakalamanın ve onaylamanın hafif, tutarlı bir yolu, yasal yükümlülüklerin günlük telaşta kaçırılmasını önleyen şeydir. Gerçekçi amaç sofistikasyon değil, güvenilirliktir — her talep bir kez, tek bir yerde yazılır ve düzenli, basit de olsa bir ritimle gözden geçirilir.

### Büyük kuruluş

Bir NHS trust'ı ya da ICS'nin tersi bir sorunu vardır: birçok meşru kanal (servisler, kurumsal hizmetler, tedarikçiler, ulusal kurumlar) ve güçlü siyasi akımlar; bu nedenle tek giriş kapısı bir araç olduğu kadar kültürel bir değişikliktir. Talep alımı işlevi genellikle bir portföy ofisi içinde adı belli bir koordinatör ya da küçük bir ekiptir, bir kurumsal hizmet yönetimi platformu tarafından desteklenir ve en zor görevi direktörleri kendi taleplerini onun etrafından değil, üzerinden yönlendirmeye ikna etmektir. Hacim gerçek sınıflandırmayı ve mükerrer kaldırmayı zorunlu kılar — aynı "e-gözlem" talebi çoğu zaman beş merkezden beş kez gelir — ve güvenlik işareti trust'ın klinik risk yönetimi ve tehlike günlüğü (hazard log) ile bütünleşmelidir. Hesap verebilirlik dışsaldır: bir ICB, denetçiler ya da bir düzenleyici, herhangi bir programın nasıl haklı çıkarıldığını sorabilir; bu nedenle talep alımı kaydı yalnızca bir kuyruk değil, bir yönetişim eseridir.

### Kamu

NHS England, DHSC, yetki devri yapılmış bir hükümet ya da bir yerel yönetim düzeyinde talep alımı, ulusal talebi ve kamu parasını ölçekte şekillendirir ve çoğu talep olarak değil zorunluluk olarak gelir — yasal görevler, bakanlık taahhütleri, harcama gözden geçirme koşulları. Giriş kapısı çoğu zaman Hazine beş durum modeli ve Green Book tarafından yönetilen resmî bir portföy ya da yatırım hattıdır; böylece erken fikirler bile en baştan stratejik uyum ve para karşılığı değer açısından yakalanır. Risk iştahı düşük, inceleme yüksektir: National Audit Office ve Public Accounts Committee'nin ilgisi, kabul edilen her kalemin izlenebilir bir kaynağı ve gerekçesi olması gerektiği anlamına gelir. Zorluk orantılılıktır: harcamayı savunmaya yetecek kadar titizlik uygulamak, ama teklif yazma ekipleri olmayan ön saf ve yerel yönetim seslerini fiilen dışarıda bırakacak kadar ağır bir geçit koymamak. Bu nedenle talep hattının şeffaflığı hem bir verimlilik önlemi hem de bir eşitlik görevidir.

## Yaygın başarısızlık biçimleri

- **Kara delik giriş kapısı.** Bir form var, ancak talepler onay olmaksızın içinde kayboluyor. İnsanlar haftalar içinde arka kanallara dönüyor. *Çözüm:* acımasızca tutulan bir onay SLA'sı.
- **Çözüm biçimli talep alımı.** Form "hangi sorunu çözmeye çalışıyorsunuz?" yerine "ne yapılmasını istiyorsunuz?" diye soruyor ve keşiften önce bir çözümü kilitliyor. *Çözüm:* tasarımları değil, sonuçları ve sorunları yakalayın.
- **Kapıda ağır bir geçit.** Bir fikri *göndermek* için tam bir iş gerekçesi talep etmek iyi erken sinyalleri bastırır ve gölge talep alımını körükler. *Çözüm:* orantılı yakalama; titizlik sonra gelir.
- **Yönetici baypası.** Liderler kendi taleplerini sürecin etrafından yönlendirir ve giriş kapısının başkaları için olduğunu bildirir. *Çözüm:* görünür yönetici uyumu; istisna yok.
- **Değişiklik kuyruğunda kaybolan olaylar.** Güvenlik açısından kritik arızalar geliştirme taleplerinin arkasında bekler. *Çözüm:* talep alımının yine de gördüğü ayrı, daha hızlı bir olay yolu.
- **Sahibi olmayan talep alımı.** Kuyruk dolar ama kimse onu derlemez. *Çözüm:* adı belli bir koordinatör ve sabit bir ritim.

## Olgunluk modeli

| Boyut | Başlatma | Geliştirme | Standartlaştırma | Yönetme | Orkestrasyon |
|---|---|---|---|---|---|
| **Giriş kapısı** | Çok sayıda gayriresmî kanal; çok fazla gölge talep alımı | Bir form var ama tutarsız kullanılıyor; liderler onu atlıyor | Tüm yollarda kullanılan, duyurulmuş tek giriş kapısı | Giriş kapısı kullanımı ölçülüyor; baypas oranı izleniyor ve bir hedefe karşı yönetiliyor | Tek giriş kapısı kültürel norm; gölge talep alımı nadir ve sorgulanıyor |
| **Yakalama ve sınıflandırma** | Plansız; serbest metin e-postalar; talep türü yok | Bir miktar yapı; sınıflandırma güvenilmez | Yapılandırılmış form; talep kapıda türlendirilip güvenlik işaretiyle etiketleniyor | Sınıflandırma doğruluğu ve güvenlik işareti eksiksizliği denetleniyor ve kontrollere karşı güvence altında | Sınıflandırma yönlendirmeyi otomatik sürüyor; mükerrerler birleştiriliyor; örüntüler analiz ediliyor |
| **Onay ve görünürlük** | SLA yok; talep edenler peşine düşüyor; talep görünmez | Onay elinden geldiğince; kuyruk kısmen görünür | Yayımlanmış onay SLA'sı karşılanıyor; kuyruk kurum içinde görünür | SLA performansı bir hedefe karşı raporlanıyor; ihlaller inceleniyor ve talep etkin biçimde yönetiliyor | SLA ölçülüyor ve raporlanıyor; talep eğilimleri strateji ve kapasite planlamasını besliyor |

## Kontrol listesi

- [ ] Tüm yeni dijital talep için duyurulmuş tek bir giriş kapısı var.
- [ ] Talep alımı formu yalnızca istenen bir çözümü değil, sorunu/sonucu yakalıyor.
- [ ] Her kalem talep türüne göre (fikir / talep / olay / zorunluluk) sınıflandırılıyor.
- [ ] Talep alımında klinik güvenlik ve kişisel veri işareti zorunlu.
- [ ] Olayların ayrı, daha hızlı bir yolu var ama talep alımına görünür kalıyor.
- [ ] Yayımlanmış bir onay SLA'sı var ve ölçülüyor.
- [ ] Talep kuyruğu talep edenlere ve paydaşlara görünür.
- [ ] Adı belli bir sahip, talep alımını sabit bir ritimle derliyor.
- [ ] İş gerekçesi çabası talebin büyüklüğüyle orantılı.
- [ ] Üst düzey liderler giriş kapısını herkes gibi kullanıyor.

## Temel kaynaklar

- ITIL 4 (AXELOS / PeopleCert) — Demand Management and Service Request Management practices; the "single front door" concept.
- NHS England — DCB0129 *Clinical Risk Management: its Application in the Manufacture of Health IT Systems* (safety flagging of change).
- GOV.UK Service Manual (Government Digital Service) — understanding user needs and problems before solutions.
- NHS Digital Service Standard — designing for user needs; making work visible.
- HM Treasury — *The Green Book* and the five-case model (proportionate business cases).
- Reinertsen, D. — *The Principles of Product Development Flow* (managing queues and demand).

## Kaynakça

1. Demand management — Wikipedia — https://en.wikipedia.org/wiki/Demand_management
2. ITIL — Wikipedia — https://en.wikipedia.org/wiki/ITIL
3. IT service management — Wikipedia — https://en.wikipedia.org/wiki/IT_service_management
4. Service catalog — Wikipedia — https://en.wikipedia.org/wiki/Service_catalog
5. Service-level agreement — Wikipedia — https://en.wikipedia.org/wiki/Service-level_agreement
6. Shadow IT — Wikipedia — https://en.wikipedia.org/wiki/Shadow_IT
7. Business case — Wikipedia — https://en.wikipedia.org/wiki/Business_case
8. ITIL 4: Demand Management and Service Request Management practices — AXELOS / PeopleCert — https://www.peoplecert.org/itil
9. DCB0129: Clinical Risk Management: its Application in the Manufacture of Health IT Systems — NHS England — https://digital.nhs.uk/services/clinical-safety/documentation
10. GOV.UK Service Manual — Government Digital Service — https://www.gov.uk/service-manual
11. NHS Service Standard — NHS England — https://service-manual.nhs.uk/standards-and-technology/service-standard
12. The Green Book: appraisal and evaluation in central government (five-case model) — HM Treasury — https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government
13. Reinertsen, D. — *The Principles of Product Development Flow* — Celeritas Publishing — https://www.celeritas.com/
