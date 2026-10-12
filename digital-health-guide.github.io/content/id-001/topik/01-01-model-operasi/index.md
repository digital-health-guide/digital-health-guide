# Topik 1.1 — Model Operasi

**Dalam satu kalimat:** Model operasi target (TOM) adalah rancangan yang disengaja tentang bagaimana strategi organisasi Anda mengalir melalui aliran nilai, kapabilitas, tim, tata kelola, teknologi, data, dan pemasok untuk menghasilkan hasil kesehatan dan perawatan digital — dan ketepatan bentuknya menentukan apakah semua yang hilir berjalan cepat dan aman atau lambat dan rapuh.

## Mengapa ini penting dalam kesehatan dan perawatan

Sebagian besar organisasi kesehatan digital tidak gagal karena kekurangan bakat atau teknologi; mereka gagal karena model operasinya melawan mereka. Pendanaan terikat pada proyek berbatas waktu, hak keputusan tidak jelas, dan setiap tim membangun ulang pipa login, integrasi, dan audit yang sama. Hasilnya adalah biaya ganda dari uang publik, keselamatan klinis yang tidak konsisten, dan layanan yang tidak dapat berbagi data lintas sistem perawatan terpadu (ICS).

Model operasi di ranah ini khas karena harus mendamaikan kebaikan yang bersaing. Ia harus **cukup federatif** untuk menghormati otonomi organisasi berdaulat — trust, pemerintah daerah, praktik dokter umum — namun **cukup koheren** untuk memberi pasien satu pengalaman yang aman di semuanya. Ia harus menyeimbangkan **jalankan** (menjaga sistem klinis tetap tersedia dengan aman) dengan **ubah** (memperbaikinya), padahal waktu henti dapat memengaruhi perawatan. Dan ia harus membelanjakan secara proporsional: penjaminan cukup berat untuk akuntabilitas publik dan keselamatan klinis, cukup ringan agar tidak mencekik iterasi. TOM adalah tempat trade-off itu dibuat eksplisit, bukan dibiarkan terjadi begitu saja.

## Konsep inti

**Lapisan-lapisan [model operasi](https://en.wikipedia.org/wiki/Operating_model).** TOM yang berguna adalah sebuah tumpukan, tiap lapisan melayani lapisan di atasnya:

- **Strategi dan hasil** — hasil populasi dan layanan terukur yang ingin Anda perbaiki (sering diungkapkan sebagai [OKR](https://en.wikipedia.org/wiki/Objectives_and_key_results); lihat Topik 1.3 — Keputusan Berbasis Bukti).
- **[Aliran nilai](https://en.wikipedia.org/wiki/Value_stream)** — aliran ujung ke ujung yang menyampaikan nilai kepada pengguna, mis. "rujuk, triase, dan rawat pasien" — diorganisasi di sekitar perjalanan warga, bukan bagan organisasi.
- **Kapabilitas** — hal-hal yang harus dapat Anda lakukan (identitas, pemesanan janji temu, dokumentasi klinis, analitik). Kapabilitas stabil meski solusi berganti.
- **Tim** — orang-orang yang diorganisasi untuk menyampaikan kapabilitas dan aliran nilai (lihat Team Topologies di bawah).
- **Tata kelola dan hak keputusan** — siapa memutuskan apa, dan bagaimana penjaminan diterapkan.
- **Teknologi dan data** — platform, standar, dan arsitektur data tempat tim membangun.
- **Pemasok** — pasar tempat Anda membeli dan cara Anda mengelolanya.

Merancang dari atas ke bawah (strategi → aliran nilai → kapabilitas) menjaga tim dan teknologi selaras dengan hasil, bukan dengan struktur warisan.

**Model terpusat vs federatif vs platform.** Model **terpusat** memusatkan pengiriman pada satu tim atau lembaga independen: konsisten dan murah distandardisasi, tetapi menjadi sumbatan dan sering jauh dari kebutuhan lokal. Model **federatif** menyerahkan pengiriman kepada trust dan wilayah: responsif dan dimiliki secara lokal, tetapi rawan duplikasi dan divergensi. Model **platform** adalah pola pendamai: tim pusat menyediakan kapabilitas bersama yang dapat dipakai ulang (identitas, interoperabilitas, hosting, sistem desain) sebagai *platform*, dan tim federatif membangun di atasnya dengan cepat. Kebanyakan sistem kesehatan matang konvergen pada "platform plus federasi."

**Team Topologies.** Kerangka ini menamai empat jenis tim — selaras-aliran (memiliki satu aliran nilai), platform (menyediakan kapabilitas swalayan), pemampu (melatih pihak lain meningkatkan kapabilitas), dan subsistem-rumit (kerja spesialis mendalam seperti algoritma) — dan menekankan interaksi gesekan rendah di antara mereka. Ia terpetakan rapi ke model platform: tim platform mengurangi beban kognitif tim selaras-aliran sehingga mereka dapat berfokus pada nilai pengguna dan klinis.

**Jalankan vs ubah.** *Jalankan* adalah menjaga layanan hidup tetap aman dan tersedia; *ubah* adalah memperbaiki atau membangunnya. Tim produk yang membangun sekaligus menjalankan layanan ("Anda membangunnya, Anda menjalankannya") menutup lingkar umpan balik dan meningkatkan keselamatan, tetapi keseimbangannya harus didanai dengan jujur — mengorbankan jalankan demi mendanai ubah adalah cara sistem klinis memburuk.

**Platform tertipis yang layak (TVP).** Dari Team Topologies: platform sebaiknya merupakan himpunan layanan bersama yang *terkecil* yang sungguh mengurangi gesekan bagi tim aliran — tidak lebih. Platform yang dibangun berlebihan menjadi sumbatannya sendiri dan warisannya sendiri. Mulailah dengan sedikit kapabilitas yang benar-benar dibutuhkan setiap tim (autentikasi, lapisan interoperabilitas, hosting, sistem desain) dan tumbuhlah hanya atas dasar permintaan yang terbukti.

## Praktik terbaik

1. **Rancang model dari hasil ke bawah, bukan dari bagan organisasi ke atas.** Mulailah dengan hasil populasi dan layanan yang harus Anda gerakkan, turunkan aliran nilai yang menyampaikannya, baru kemudian rancang tim dan teknologi. TOM yang berjangkar pada hierarki yang ada hanya mengotomatisasi silo saat ini.

2. **Adopsi bentuk platform-plus-federasi.** Sediakan kapabilitas bersama secara terpusat sebagai platform swalayan, dan biarkan tim selaras-aliran di trust dan wilayah membangun di atasnya. Ini memberi Anda konsistensi nasional dalam keselamatan dan interoperabilitas dengan kecepatan dan kepemilikan lokal — rekonsiliasi yang dituntut ranah ini.

3. **Danai produk, bukan proyek.** Pindahkan uang dari proyek berbatas waktu ke tim produk yang didanai berkelanjutan dan selaras dengan aliran nilai. Pendanaan proyek memaksa tim bubar tepat saat mereka telah mempelajari domain; pendanaan produk mempertahankan pengetahuan keselamatan dan iterasi yang dibutuhkan layanan kesehatan (lihat Topik 5.0 — Kerja Berbasis Produk).

4. **Buat pengendalian belanja proporsional dan bertahap.** Gunakan pendanaan bertahap yang terikat pada bukti — lepaskan dana pada gerbang penemuan, alfa, beta, dan langsung alih-alih menyetujui seluruh program di muka. Kendali belanja bergaya [GDS](https://en.wikipedia.org/wiki/Government_Digital_Service) dan jalur penjaminan NHS ada untuk mencegah biaya hangus besar pada gagasan yang belum terbukti; terapkan sebagai ambang yang diskalakan terhadap risiko dan nilai, bukan birokrasi menyeluruh.

5. **Buat hak keputusan eksplisit dengan peta RACI atau RAPID.** Wewenang yang ambigu adalah penyebab paling umum pengiriman yang macet. Namai, untuk setiap jenis keputusan penting, siapa yang Responsible/Accountable/Consulted/Informed ([RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)) atau siapa yang Recommend, Agree, Perform, memberi Input, dan Decide (RAPID). Publikasikan agar tim berhenti mengeskalasi keputusan yang berwenang mereka ambil.

6. **Jaga platform tetap tipis dan digerakkan permintaan.** Bangun kapabilitas bersama hanya ketika dua tim atau lebih terbukti membutuhkan hal yang sama, dan perlakukan platform sebagai produk dengan penggunanya sendiri (tim internal). Tahan dorongan untuk membangun platform megah di muka; platform tertipis yang layak memperoleh cakupannya melalui adopsi.

7. **Kelola pemasok sebagai bagian dari model, bukan di luarnya.** Putuskan dengan sengaja kapabilitas mana yang strategis (bangun/miliki) dan mana yang komoditas (beli), hindari [penguncian](https://en.wikipedia.org/wiki/Vendor_lock-in) pada satu pemasok untuk data klinis inti, dan tuntut standar terbuka serta hak keluar dalam kontrak. Pemasok Anda adalah satu lapisan model operasi Anda, dan cara kerja mereka harus kompatibel dengan cara kerja Anda.

8. **Buat hak keputusan eksplisit.** Model operasi hanya berfungsi jika orang tahu siapa memutuskan apa — pilihan mana yang berada pada tim produk, mana pada otoritas keselamatan klinis, dan mana yang harus sampai ke dewan. Petakan hak keputusan dan dorong setiap keputusan ke tingkat terendah yang dapat memegangnya dengan aman, agar pengiriman tidak tercekik eskalasi yang tak perlu. Wewenang yang ambigu adalah salah satu penyebab paling umum pengiriman yang lambat dan defensif.

9. **Perlakukan model operasi sebagai produk yang Anda kembangkan.** Model operasi target tidak ditetapkan sekali lalu dibingkai di dinding; periksa ia saat permintaan, teknologi, dan kemitraan berubah, dan adaptasikan berdasarkan bukti. Perhatikan beberapa sinyal — aliran kerja, waktu-ke-keputusan, pengerjaan ulang, dan kesehatan tim — dan ubah struktur ketika terbukti menghalangi, bukan sebagai tanggapan atas tren reorganisasi.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah model operasi kami dirancang dari hasil dan aliran nilai ke bawah, atau sekadar mengotomatisasi bagan organisasi dan silo kami yang ada?**
   Pertanyaan ini menyentuh peringatan sentral topik ini bahwa TOM yang berjangkar pada hierarki saat ini hanya mengukuhkan silo yang sudah ada, sehingga layak diletakkan di meja sebelum reorganisasi apa pun. Dalam kesehatan dan perawatan ini penting karena aliran nilai mengikuti perjalanan warga — rujuk, triase, rawat — lintas organisasi berdaulat, sedangkan bagan organisasi mengikuti batas kelembagaan, dan model yang dibangun di atas yang terakhir akan terus menghasilkan layanan terfragmentasi dan tak interoperabel dengan uang publik. Ketegangan yang perlu diperdebatkan secara jujur adalah bahwa merancang dari hasil ke bawah memang mengganggu: ia memotong kepemilikan departemen, anggaran, dan garis pelaporan yang menjadi tumpuan karier orang-orang senior, sehingga ada biaya politik nyata bila dilakukan dengan benar. Uji diri Anda secara konkret dengan menyebut tiga hasil teratas dan menelusuri apakah batas tim dan garis pendanaan Anda yang sebenarnya mengikuti aliran nilai itu atau departemen; jika tim terpetakan rapi ke departemen, itulah jawabannya. Respons yang baik dan jujur mengakui di mana model berbentuk bagan-organisasi, mengidentifikasi setidaknya satu aliran nilai yang kini terbelah lintas silo hingga merugikannya, dan realistis tentang batas struktural mana yang bersedia digambar ulang organisasi.

2. **Apa yang termasuk dalam platform tertipis yang layak milik kami, dan bagaimana kami mencegahnya dibangun berlebihan menjadi sumbatan atau kurang dibangun sehingga setiap tim membangun ulang pipa yang sama?**
   Bentuk platform-plus-federasi hanya berfungsi jika platform tetap tipis dan digerakkan permintaan, dan pertanyaan ini membuat tim menghadapi kedua mode kegagalan yang disebut topik — platform megah yang menjadi sumbatan warisan sendiri, dan ketiadaan yang memaksa tiap tim membangun ulang login, integrasi, dan audit. Ini penting karena dalam ICS platform pada dasarnya adalah infrastruktur bersama (identitas, lapisan interoperabilitas FHIR, hosting dengan garis dasar keselamatan, sistem desain) dan salah menentukan cakupannya melipatgandakan biaya atau gesekan di setiap tim aliran. Trade-off yang perlu diperdebatkan adalah waktu dan bukti: membangun terlalu awal membuat Anda salah tebak dan menciptakan sumbatan; membangun terlalu lambat membuat duplikasi sudah mengeras — sehingga uji "dua tim atau lebih terbukti membutuhkan hal yang sama" adalah intinya, dan tim harus menguji apakah mereka benar-benar menerapkannya atau hanya membangun yang tampak jelas sentral. Lihat apa yang kini Anda perlakukan sebagai platform versus yang dibangun ulang tim, dan tanyakan apakah platform dijalankan sebagai produk dengan pengguna internal dan SLA sendiri atau sebagai antrean yang ditunggu semua orang. Jawaban yang jujur menyebut kapabilitas spesifik yang lolos uji dua-tim hari ini, menahan godaan membangun sisanya di muka, dan berkomitmen memperlakukan pengguna internal tim platform sebagai pelanggan nyata dengan tingkat layanan nyata.

3. **Di mana hak keputusan kami benar-benar ambigu, dan apa yang kini dieskalasi tim yang seharusnya mereka berdaya memutuskan sendiri?**
   Wewenang yang ambigu disebut sebagai penyebab paling umum pengiriman macet, sehingga pertanyaan ini mengangkat gesekan sehari-hari yang hendak dihapus peta RACI atau RAPID yang dipublikasikan. Ini sangat penting dalam sistem kesehatan federatif di mana tim wilayah, dewan digital ICS, keselamatan klinis, dan tata kelola informasi semuanya memiliki klaim sah atas suatu keputusan, dan batas yang tidak jelas berarti semuanya dieskalasi atau, lebih buruk, tak ada yang memiliki keputusan sampai ia menjadi masalah. Ketegangan yang layak dijelajahi adalah bahwa menyerahkan keputusan memerlukan kepercayaan pada tim dalam pagar pembatas, yang sering ditolak pemimpin senior dan dewan justru ketika keselamatan klinis atau uang publik terlibat — padahal menahan kepercayaan itulah yang menciptakan kemacetan eskalasi. Buat konkret dengan mendaftar lima keputusan terakhir yang dieskalasi dan menanyakan, untuk masing-masing, siapa yang seharusnya memutuskan dan pagar pembatas apa yang akan mengizinkannya; polanya biasanya mengungkap sedikit jenis keputusan ambigu yang berulang. Jawaban yang baik menghasilkan pernyataan spesifik yang dapat dipublikasikan tentang siapa memutuskan apa — membedakan standar platform, desain layanan, dan pengesahan keselamatan klinis — dan jujur tentang keputusan mana yang benar-benar bersedia didevolusikan organisasi dan mana yang akan tetap sentral serta alasannya.

4. **Apakah kami mendanai jalankan dan ubah dengan jujur, atau diam-diam mengorbankan operasi layanan langsung untuk membayar fitur baru?**
   Topik ini blak-blakan bahwa mengorbankan jalankan demi mendanai ubah adalah cara sistem klinis memburuk, dan pertanyaan ini mengangkat keseimbangan itu ke permukaan sebelum pemadaman atau insiden keselamatan memutuskannya untuk Anda. Dalam kesehatan dan perawatan ini penting karena "jalankan" bukan beban administratif belakang layar — ia adalah ketersediaan sistem yang diandalkan klinisi di titik perawatan, sehingga anggaran jalankan yang menurun muncul sebagai waktu henti yang dapat memengaruhi pasien, bukan sekadar pengguna yang terganggu. Trade-off-nya tidak nyaman karena perubahan terlihat dan dirayakan sedangkan jalankan tak terlihat sampai gagal, sehingga dewan dan peta jalan secara alami condong ke yang baru; model "Anda membangunnya, Anda menjalankannya" membantu dengan menjaga lingkar umpan balik tertutup, tetapi hanya jika waktu jalankan tim benar-benar dilindungi, bukan dialokasikan nominal lalu dijarah. Buat konkret dengan melihat berapa proporsi kapasitas tiap tim produk yang benar-benar dipakai menjaga layanan aman dan tersedia kuartal lalu versus yang direncanakan, dan apakah pekerjaan jalankan dilacak dan dihargai atau diperlakukan sebagai gangguan. Jawaban jujur menyebut di mana jalankan kini kekurangan dana, melindungi alokasi jalankan yang realistis sebagai beban pertama, bukan sisa, dan terus terang tentang layanan langsung mana yang menanggung risiko operasional terakumulasi.

5. **Kapabilitas mana yang sengaja kami pilih untuk dibangun dan dimiliki versus dibeli, dan apakah kami menerima penguncian atas data klinis inti tanpa bermaksud demikian?**
   Praktik terbaik di sini adalah memutuskan bangun versus beli dengan sengaja, menghindari penguncian satu pemasok pada data klinis inti, dan memperlakukan pemasok sebagai lapisan model operasi, bukan sesuatu di luarnya — pertanyaan ini menguji apakah pilihan itu sungguh dibuat atau jatuh ke bawaan. Ini penting karena dalam kesehatan digital penguncian yang paling berdampak ada di sekitar rekam klinis dan datanya, di mana penyimpanan berpemilik tanpa jalan keluar realistis dapat menjebak seluruh sistem selama satu dekade dan mendikte apa yang dapat dilakukan setiap layanan hilir. Ketegangannya adalah kecepatan versus opsionalitas: membeli lebih cepat dan sering lebih murah hari ini, terutama bagi tim yang terbentang tipis, tetapi setiap pembelian yang nyaman tanpa standar terbuka atau hak keluar diam-diam menyempitkan pilihan esok, dan biayanya baru terlihat saat Anda mencoba pergi. Buat konkret dengan mendaftar kapabilitas inti Anda, menandai masing-masing strategis (bangun/miliki) atau komoditas (beli), dan memeriksa apakah kontrak di balik yang komoditas benar-benar mensyaratkan standar terbuka (HL7 FHIR, SNOMED CT) dan hak keluar yang dapat ditegakkan. Jawaban yang baik membedakan segelintir kapabilitas yang sungguh strategis dari banyak yang aman dibeli, jujur tentang di mana organisasi sudah terkunci pada data klinis, dan berkomitmen pada standar terbuka serta hak keluar dalam kontrak yang paling penting.

6. **Bagaimana kami tahu kapan model operasi kami perlu berubah, dan sinyal apa yang akan memberi tahu kami — alih-alih mereorganisasi karena tren atau kedatangan pemimpin baru?**
   Topik ini membingkai model operasi sebagai produk yang Anda kembangkan berdasarkan bukti, bukan diagram yang dibingkai di dinding, sehingga pertanyaan ini meminta tim menetapkan di muka bukti apa yang akan membenarkan pembentukan ulangnya. Dalam kesehatan dan perawatan ini penting karena reorganisasi mengganggu dan mahal — ia membubarkan pengetahuan domain dan keselamatan klinis yang susah payah diraih — namun sektor ini rawan pergantian struktural yang digerakkan siklus kebijakan dan pengangkatan baru, bukan oleh apakah model saat ini benar-benar menghalangi. Ketegangannya antara stabilitas dan adaptasi: mengubah model terlalu mudah membuat tim tak pernah mapan atau menimbun keahlian keselamatan, mengubahnya terlalu jarang membiarkan struktur yang mengeras mencekik aliran lama setelah tak lagi cocok dengan pekerjaan. Buat konkret dengan memilih sejumlah kecil sinyal untuk dipantau — aliran kerja, waktu-ke-keputusan, pengerjaan ulang, dan kesehatan tim — dan menyepakati pergerakan apa yang akan memicu perancangan ulang yang disengaja versus penyesuaian lebih kecil. Jawaban jujur berkomitmen pada beberapa indikator utama, membedakan perubahan berbasis bukti dari teater reorganisasi, dan jelas tentang siapa yang bertanggung jawab memeriksa model dan bertindak ketika sinyal menunjukkan ia menghambat pengiriman.

## Dalam praktik: contoh kesehatan & perawatan

Sebuah ICS yang mencakup lima wilayah memiliki masing-masing trust yang membangun alat janji temu untuk pasien sendiri. Biaya menggandakan, pengalaman menyimpang, dan tak satu pun berbagi data dengan bersih. ICS merancang ulang model operasinya.

Ia menetapkan tiga hasil (mengurangi ketidakhadiran, memangkas rawat inap yang dapat dihindari, meningkatkan kesetaraan akses) dan aliran nilai di baliknya. Ia membentuk **tim platform** kecil yang memiliki empat kapabilitas tertipis-layak: identitas/login bersama, lapisan interoperabilitas berbasis [FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), hosting bersama dengan garis dasar keamanan dan keselamatan klinis, dan sistem desain. Setiap wilayah mempertahankan **tim selaras-aliran** tetapi kini membangun di atas platform alih-alih dari nol.

Pendanaan beralih dari tender proyek tahunan ke anggaran produk tetap untuk setiap aliran, dilepas melalui gerbang penemuan/alfa/beta. Peta RAPID yang dipublikasikan memperjelas bahwa tim wilayah *memutuskan* desain layanan mereka sendiri dalam pagar pembatas platform dan keselamatan klinis, sedangkan dewan digital ICS *memutuskan* standar platform. Dalam setahun, tiga wilayah berbagi satu kapabilitas pemesanan, garis dasar desain dan keselamatan konsisten, dan fitur baru yang dulu memakan satu siklus proyek terkirim dalam hitungan minggu — karena platform menyerap pekerjaan berat yang tak membedakan.

## Lensa sektor

Model operasi disesuaikan ukurannya dengan organisasi yang dilayaninya; lapisan yang sama — aliran nilai, kapabilitas, tim, tata kelola, platform, pemasok — digambar sangat berbeda oleh startup, perusahaan besar, dan lembaga pemerintah.

### Startup

Di perusahaan kesehatan digital kecil model operasi sebagian besar implisit dan itu tidak apa-apa: satu atau dua tim selaras-aliran, seorang pendiri memegang sebagian besar hak keputusan, dan tidak ada tim platform karena belum ada yang perlu diplatformkan. Disiplinnya adalah membuat beberapa keputusan nyata menjadi eksplisit sejak dini — bangun versus beli untuk penyimpanan data klinis, standar terbuka mana yang dianut — agar jalan pintas hari ini tidak menjadi penguncian esok. Jalankan dan ubah ada di tangan yang sama, sehingga risikonya adalah menjaga lampu tetap menyala bagi pelanggan awal mengorbankan peta jalan; pembagian waktu rekayasa yang sederhana dan jujur adalah padanan ringan dari anggaran jalankan yang terlindungi. Pemasok dipilih demi kecepatan, tetapi startup tetap harus menolak penguncian data klinis inti, karena calon pembeli NHS-nya akan menuntut hak keluar.

### Usaha kecil

Penyedia kecil yang mapan — praktik dokter umum, apotek komunitas, panti jompo atau penyedia perawatan di rumah, klinik satu lokasi, atau pemasok teknologi kesehatan kecil yang telah melewati tahap pra-pendapatan — memiliki pasien dan operasi nyata tetapi tidak ada tim platform, tidak ada kapabilitas digital atau TI khusus, dan sedikit kelonggaran kas atau staf. Di sini model operasi sebagian besar adalah serangkaian kapabilitas yang dibeli dan dijahit, sehingga pilihan yang menentukan adalah soal pemasok: bersikeras pada standar terbuka dan hak keluar dalam sistem klinis yang Anda adakan, karena Anda memikul kewajiban interoperabilitas dan keselamatan klinis yang sama dengan trust besar tanpa daya beli atau keahlian internalnya. Jalankan dan ubah runtuh ke segelintir orang yang sama yang juga menyampaikan perawatan, sehingga disiplin yang jujur adalah melindungi sedikit waktu untuk menjaga sistem aman dan mutakhir, bukan hanya memadamkan api. Hak keputusan sederhana — biasanya mitra atau pemilik-manajer yang memutuskan — tetapi itu membuat mudah menunda keputusan digital tanpa batas, sehingga nilainya adalah menamai yang penting (rekam klinis mana, platform regional bersama mana yang akan diikuti) dan memutuskannya dengan sengaja. Di mana ICS atau lembaga nasional menawarkan platform identitas, interoperabilitas, atau desain bersama, langkah terbaik usaha kecil sering kali membangun di atasnya alih-alih menciptakan ulang, meminjam kapabilitas yang tak mampu mereka staf sendiri.

### Perusahaan besar

Trust NHS atau ICS adalah tempat bentuk platform-plus-federasi membuktikan gunanya: organisasi berdaulat yang harus terasa seperti satu layanan bagi pasien. Masalah sulitnya sama politisnya dengan teknisnya — memindahkan uang dari tender proyek berbatas waktu ke anggaran produk tetap, dan mempublikasikan peta RACI/RAPID agar tim wilayah berhenti mengeskalasi keputusan yang mereka miliki. Perusahaan teknologi kesehatan atau farmasi besar memiliki otot rekayasa platform tetapi berisiko membangun platform internal megah berlebihan yang menjadi sumbatan sendiri; uji platform tertipis yang layak — dua tim atau lebih terbukti membutuhkan hal yang sama — adalah remnya. Pada skala ini, hak keputusan dan aliran pendanaan adalah model operasi; teknologi biasanya bukan kendalanya.

### Pemerintah

Lembaga publik nasional atau lokal merancang model operasi yang harus dihuni organisasi lain, sehingga pilihannya tentang standar dan platform pada dasarnya adalah infrastruktur nasional. NHS England atau DHSC yang menyediakan lapisan identitas bersama, tulang punggung interoperabilitas, atau sistem desain adalah pola platform yang diterapkan pada skala populasi, dan kendali belanja serta gerbang penjaminan bertahapnya adalah cara uang publik dimintai pertanggungjawaban. Mode kegagalannya adalah model terpusat yang menjadi sumbatan jauh, mewajibkan satu solusi untuk setiap konteks lokal; penawarnya adalah memplatformkan kapabilitas yang benar-benar umum dan memfederasikan sisanya ke trust dan pemerintah daerah. Akuntabilitas kepada Parlemen juga berarti bangun/beli dan pengelolaan pemasok adalah catatan publik, sehingga standar terbuka dan hak keluar bukan sekadar bijak melainkan diharapkan.

## Mode kegagalan umum

- **Mengotomatisasi bagan organisasi.** Merancang tim di sekitar departemen yang ada, bukan aliran nilai, sehingga TOM mengukuhkan silo. Penawar: rancang dari hasil dan aliran nilai ke bawah.
- **Platform yang menjadi sumbatan.** Tim platform pusat yang cakupannya berlebihan sehingga setiap permintaan harus mengantre. Penawar: platform tertipis yang layak, diperlakukan sebagai produk dengan SLA.
- **Pendanaan proyek untuk kerja produk.** Uang yang kedaluwarsa memaksa pergantian bubar-dan-bangun-ulang. Penawar: pendanaan produk berkelanjutan dengan gerbang bertahap.
- **Jalankan dikorbankan demi ubah.** Mengurangi dana operasi layanan langsung hingga sistem klinis memburuk. Penawar: danai jalankan dan ubah secara eksplisit dan lindungi anggaran jalankan.
- **Keputusan tanpa pemilik.** Tak ada yang tahu siapa memutuskan, sehingga semuanya dieskalasi. Penawar: RACI/RAPID yang dipublikasikan.
- **Penguncian secara bawaan.** Data klinis inti terjebak dalam sistem pemasok berpemilik tanpa jalan keluar. Penawar: standar terbuka dan hak keluar dalam setiap kontrak strategis.

## Model kematangan

| Dimensi | Inisiasi | Pengembangan | Standardisasi | Pengelolaan | Orkestrasi |
|---|---|---|---|---|---|
| Struktur | Digerakkan bagan organisasi, bersilo | Sebagian selaras aliran nilai | Platform-plus-federasi terbentuk | Batas diatur dan ditinjau terhadap metrik aliran | Terus dibentuk ulang di sekitar hasil |
| Pendanaan | Proyek tahunan | Campuran proyek/produk | Pendanaan produk dengan gerbang bertahap | Belanja dan pengiriman dilacak terhadap KPI, gerbang dijamin | Pendanaan berbasis hasil, dilepas berdasarkan bukti |
| Hak keputusan | Ambigu, semuanya dieskalasi | Sebagian terdokumentasi | RACI/RAPID dipublikasikan dan dipakai | Latensi keputusan dan eskalasi diukur dan dikelola | Didevolusikan dalam pagar pembatas jelas, jarang dieskalasi |
| Platform | Tidak ada; setiap tim membangun ulang | Sedikit bagian bersama ad hoc | Platform tertipis yang layak, digerakkan permintaan | SLA platform, adopsi, dan keandalan dilacak terhadap target | Platform sebagai produk internal yang matang |
| Pemasok | Penguncian, pembelian taktis | Sebagian standar disyaratkan | Bangun/beli diputuskan dengan sengaja | Kinerja pemasok dan kepatuhan standar dijamin | Standar terbuka, hak keluar, pasar sehat |

## Daftar periksa

- [ ] Model operasi dirancang dari hasil dan aliran nilai, bukan hierarki yang ada.
- [ ] Kapabilitas bersama disediakan sebagai platform tertipis yang layak, dengan tim aliran membangun di atasnya.
- [ ] Tim produk didanai berkelanjutan dan selaras dengan aliran nilai.
- [ ] Pengendalian belanja bertahap (gerbang penemuan/alfa/beta/langsung) dan proporsional terhadap risiko dan nilai.
- [ ] Hak keputusan didokumentasikan (RACI atau RAPID) dan dipublikasikan.
- [ ] Jalankan dan ubah didanai secara eksplisit, dengan anggaran jalankan dilindungi.
- [ ] Jenis tim (selaras-aliran, platform, pemampu, subsistem-rumit) dipahami dan digunakan.
- [ ] Bangun/beli adalah pilihan sengaja per kapabilitas; data klinis inti menghindari penguncian.
- [ ] Kontrak mensyaratkan standar terbuka (mis. HL7 FHIR, [SNOMED CT](https://en.wikipedia.org/wiki/SNOMED_CT)) dan hak keluar.

## Sumber utama

- Matthew Skelton & Manuel Pais — *Team Topologies* (tim selaras-aliran, platform, pemampu, subsistem-rumit; platform tertipis yang layak).
- GOV.UK Service Manual — *spend controls* dan penjaminan bertahap (penemuan/alfa/beta/langsung); Government Digital Service.
- NHS digital service manual — *NHS service standard* (service-manual.nhs.uk).
- AXELOS — *Management of Portfolios (MoP)* dan *Managing Successful Programmes (MSP)* untuk tata kelola portofolio dan program.
- Bain & Company — kerangka hak keputusan *RAPID*; dan model penugasan tanggung jawab RACI.
- John Doerr — *Measure What Matters* (OKR) untuk perumusan hasil.

## Referensi

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
