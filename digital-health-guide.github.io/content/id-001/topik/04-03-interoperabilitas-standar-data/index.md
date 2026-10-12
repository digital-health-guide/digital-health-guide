# Topik 4.3 — Interoperabilitas & Standar Data

**Dalam kesehatan dan perawatan, interoperabilitas bukan kehalusan teknis melainkan persyaratan keselamatan klinis dan kesetaraan: ketika sistem tak dapat berbagi data yang tepat, dalam bentuk yang tepat, dengan makna tak ambigu, di titik perawatan, orang dirugikan dan ketimpangan diperkuat.**

## Mengapa ini penting dalam kesehatan dan perawatan

Perawatan seseorang jarang terjadi di satu tempat. Satu episode dapat menyentuh praktik dokter umum, layanan ambulans, unit gawat darurat, bangsal rumah sakit, perawat komunitas, apotek, tim perawatan sosial, dan pengasuh di rumah. Masing-masing memegang sebagian rekam. Jika bagian-bagian itu tak dapat dihimpun dengan aman dan cepat, klinisi membuat keputusan dengan informasi yang hilang: alergi yang tak terlihat, obat diresepkan ganda, uji yang diulang tak perlu, tanda perlindungan yang tak terlihat oleh tim yang membutuhkannya.

Interoperabilitas adalah yang mengubah sekumpulan sistem terputus menjadi sesuatu yang berperilaku, dari sudut pandang pasien, seperti layanan terpadu. Ia pipa di bawah perawatan terpadu. Ketika berfungsi, klinisi di satu organisasi dapat melihat apa yang dicatat organisasi lain, dan dapat memercayai bahwa itu berarti apa yang mereka kira. Ketika gagal, kegagalannya sering senyap sampai seseorang dirugikan.

Ini juga isu kesetaraan. Orang dengan kebutuhan paling kompleks — lansia rapuh, mereka dengan banyak kondisi jangka panjang, orang yang berpindah antarlayanan — persis orang yang datanya paling terfragmentasi. Interoperabilitas buruk karenanya merugikan yang paling rentan paling parah. Dan ia soal kepercayaan publik: orang wajar mengira NHS sudah berbagi informasi mereka dengan masuk akal, dan kecewa mengetahui betapa sering tidak.

Akhirnya, interoperabilitas melindungi uang publik. Sistem proprietari yang tak dapat bertukar data mengunci organisasi ke kontrak mahal yang sulit diganti dan memaksa integrasi titik-ke-titik yang mahal. Membangun sesuai standar terbuka adalah cara Anda menjaga opsi tetap terbuka, menjaga pemasok tetap jujur, dan menghindari membayar berulang kali untuk memecahkan masalah yang sama.

## Konsep inti

[Interoperabilitas](https://en.wikipedia.org/wiki/Interoperability) adalah kemampuan sistem berbeda untuk bertukar informasi dan memakainya. Berguna memisahkan dua lapisan. Interoperabilitas sintaktik atau teknis berarti dua sistem dapat bertukar pesan dan masing-masing dapat mengurai strukturnya — amplopnya tiba dan dapat dibuka. [Interoperabilitas semantik](https://en.wikipedia.org/wiki/Semantic_interoperability) berarti sistem penerima memahami apa arti isinya dengan cara yang sama seperti pengirim — bahwa kode untuk "alergi penisilin" ditafsirkan identik di kedua sisi. Interoperabilitas teknis tanpa interoperabilitas semantik berbahaya: data mengalir, tetapi makna hilang atau terdistorsi.

Data kesehatan dipertukarkan memakai standar. [Health Level 7 (HL7)](https://en.wikipedia.org/wiki/Health_Level_7) adalah keluarga standar yang paling banyak dipakai dalam perawatan kesehatan. Pesan HL7 versi 2 (v2) yang lebih tua, memakai teks terpisah pipa-dan-sirkumfleks, masih menopang sejumlah besar pesan rumah sakit dan akan bertahun-tahun lagi. Standar modernnya, [HL7 Fast Healthcare Interoperability Resources (FHIR)](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources), memodelkan informasi klinis sebagai "sumber daya" yang dipertukarkan melalui [antarmuka pemrograman aplikasi (API)](https://en.wikipedia.org/wiki/API) bergaya web, yang membuatnya jauh lebih mudah dikerjakan pengembang modern.

Standar untuk pesan tidak cukup; Anda juga butuh kosakata standar untuk isinya. [SNOMED CT (Systematized Nomenclature of Medicine — Clinical Terms)](https://en.wikipedia.org/wiki/SNOMED_CT) adalah terminologi klinis yang diwajibkan di seluruh perawatan NHS untuk mencatat diagnosis, gejala, prosedur, dan lainnya. NHS Dictionary of medicines and devices (dm+d) adalah kosakata standar untuk obat dan alat kesehatan, dan menopang peresepan elektronik. [International Classification of Diseases, revisi ke-10 dan ke-11 (ICD-10 dan ICD-11)](https://en.wikipedia.org/wiki/ICD-11), dipelihara Organisasi Kesehatan Dunia, dipakai untuk klasifikasi, statistik, dan penggantian biaya, bukan pencatatan klinis sehari-hari. [openEHR](https://en.wikipedia.org/wiki/OpenEHR) adalah spesifikasi terbuka untuk menstrukturkan rekam kesehatan itu sendiri melalui "arketipe" bersama yang diatur secara klinis, dan dipakai sebagian organisasi untuk menjaga model data klinis independen dari pemasok tunggal mana pun.

Dua gagasan lagi bersifat fondasional. [NHS Number](https://en.wikipedia.org/wiki/NHS_number) adalah pengidentifikasi pasien bersama yang memungkinkan rekam tentang orang yang sama ditautkan secara andal lintas organisasi; tanpa pengidentifikasi bersama, pencocokan adalah tebakan. Dan [Integrating the Healthcare Enterprise (IHE)](https://en.wikipedia.org/wiki/Integrating_the_Healthcare_Enterprise) menerbitkan "profil" yang menetapkan persis bagaimana menggabungkan standar yang ada untuk memecahkan masalah konkret seperti berbagi dokumen, agar pemasok berbeda mengimplementasikannya dengan cara sama.

Menopang semua ini adalah pilihan strategis. Membangun di atas [standar terbuka](https://en.wikipedia.org/wiki/Open_standard) dengan API yang diterbitkan dan dapat dipakai ulang menjaga pasar tetap kompetitif dan data Anda portabel. Bersandar pada antarmuka proprietari menciptakan [penguncian vendor](https://en.wikipedia.org/wiki/Vendor_lock-in), di mana berganti pemasok menjadi begitu mahal sehingga secara efektif Anda tak bisa. Namun semua itu tak memberi nilai tanpa [kualitas data](https://en.wikipedia.org/wiki/Data_quality): data yang akurat, lengkap, tepat waktu, dan dikodekan konsisten adalah prasyarat interoperabilitas, bukan renungan belakangan.

## Praktik terbaik

1. **Bedakan interoperabilitas semantik dari teknis, dan rancang untuk keduanya.** Mudah merayakan bahwa pesan kini mengalir antara dua sistem dan melewatkan bahwa klinisi penerima tak dapat dengan aman mengandalkan maknanya. Selalu tanyakan: apakah sisi lain menafsirkan kode, satuan, dan negasi ini persis seperti kita? Berinvestasilah pada terminologi bersama (SNOMED CT, dm+d) dan himpunan nilai (value set), bukan hanya format pesan, karena alergi yang terkirim benar tetapi disalahpahami lebih berbahaya daripada tak ada pesan sama sekali.

2. **Bangun sesuai standar terbuka dan pakai ulang platform alih-alih menciptakan ulang.** Adopsi prinsip yang didukung luas: bangun sesuai standar terbuka, dan pakai ulang platform dan layanan nasional yang ada sebelum membangun sendiri. Di NHS ini berarti mengutamakan API HL7 FHIR, memakai NHS Number sebagai pengidentifikasi, dan terhubung ke layanan nasional seperti Spine, GP Connect, dan rekam perawatan bersama alih-alih menciptakan tautan titik-ke-titik bespoke. Penggunaan ulang mengurangi biaya, menyebar beban pemeliharaan, dan berarti data Anda dapat bepergian.

3. **Jadikan NHS Number tak dapat ditawar di setiap rekam dan pesan.** Penautan rekam yang andal bergantung pada pengidentifikasi bersama yang tepercaya. Pastikan NHS Number ditangkap, diverifikasi terhadap layanan demografis nasional, dan dibawa pada setiap rekam dan antarmuka yang relevan. Di mana ia hilang atau belum diverifikasi, perlakukan sebagai cacat kualitas data yang harus diselesaikan, karena mencocokkan hanya dengan nama dan tanggal lahir menghasilkan baik ketidakcocokan berbahaya maupun tautan yang terlewat.

4. **Perlakukan kualitas data sebagai keluaran kelas satu.** Interoperabilitas mengekspor masalah kualitas data Anda kepada semua orang di hilir. Profilkan data Anda, ukur kelengkapan dan konsistensi pengodean, dan terapkan pengelolaan agar galat ditemukan dan diperbaiki di sumber. Pengodean yang melenceng, teks bebas di mana data terstruktur dibutuhkan, dan satuan tak konsisten akan diam-diam merusak setiap analisis dan pandangan klinis di hilir, jadi danai kerja ini secara eksplisit alih-alih mengasumsikannya terjadi sendiri.

5. **Pilih arsitektur API-first dan terkopel longgar daripada integrasi ketat.** Rancang agar kapabilitas dipaparkan melalui API terdokumentasi baik dan berversi yang dapat dikonsumsi pihak lain tanpa negosiasi bespoke. Ini lebih lambat pada awalnya daripada tautan basis data langsung, tetapi itulah yang memungkinkan Anda mengganti satu komponen tanpa membangun ulang semua di sekitarnya. Ia juga selaras dengan cara layanan nasional dan pemasok modern kini mengharapkan berintegrasi, dan mendukung pendekatan pengiriman dalam Topik 3.5 — Siklus Hidup Pengiriman (Delivery).

6. **Pakai profil yang diterbitkan dan pengujian konformansi, bukan tafsir lokal.** Standar fleksibel, dan dua tim dapat mengimplementasikan sumber daya FHIR "yang sama" secara tak kompatibel. Adopsi panduan implementasi nasional dan profil IHE yang mengunci rinciannya, dan wajibkan pemasok menunjukkan konformansi terhadapnya sebelum go-live. Pengujian konformansi mengubah "kami mendukung FHIR" — klaim yang sedikit artinya sendirian — menjadi fakta yang dapat diverifikasi dan kontraktual.

7. **Tuliskan persyaratan interoperabilitas dan standar terbuka ke dalam pengadaan dan kontrak.** Saat termurah menghindari penguncian adalah sebelum Anda menandatangani. Wajibkan API terbuka dan terdokumentasi, hak mengekstrak data Anda sendiri dalam format standar, kepatuhan pada standar bernama, dan tanpa biaya untuk integrasi standar. Bekerjalah dengan kolega komersial Anda (lihat Topik 6.3 — Pengadaan & Aspek Komersial) agar ini menjadi kriteria evaluasi wajib, bukan aspirasi yang dinegosiasikan hilang kemudian.

8. **Atur interoperabilitas dengan keselamatan klinis dan tata kelola informasi di ruangan.** Setiap aliran data baru mengubah risiko klinis dan penanganan informasi rahasia. Libatkan petugas keselamatan klinis dan pimpinan tata kelola informasi dalam keputusan desain sejak awal, bukan sebagai pengesahan akhir, agar rekam bersama aman sekaligus sah. Ini terhubung langsung dengan Topik 1.6 — Keselamatan Klinis & Manajemen Risiko dan Topik 1.7 — Tata Kelola Informasi, Perlindungan Data & Keamanan Siber.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Di mana dalam jalur perawatan kami data yang hilang atau disalahpahami menciptakan risiko klinis terbesar hari ini?** Investasi interoperabilitas harus mengikuti bahaya dan nilai, bukan mode arsitektural. Petakan perjalanan yang benar-benar ditempuh pasien paling kompleks Anda dan temukan serah terima di mana informasi hilang, tertunda, atau tiba tanpa makna yang andal. Tanyakan kepada klinisi di mana mereka rutin bekerja buta — transfer, celah luar jam, batas antara kesehatan dan perawatan sosial. Bedakan tempat di mana data tak mengalir sama sekali dari tempat di mana ia mengalir tetapi tak dapat dipercaya, karena keduanya membutuhkan perbaikan berbeda. Pertimbangkan populasi mana yang paling terdampak, karena fragmentasi cenderung jatuh paling keras pada orang dengan kebutuhan paling kompleks. Jawabannya memberi tahu di mana memulai, dan memberi Anda kasus keselamatan klinis yang akan lebih berbobot daripada argumen teknis mana pun.

2. **Seberapa terpapar kami pada penguncian vendor, dan berapa sebenarnya biaya bagi kami untuk berganti sistem klinis utama kami?** Banyak organisasi menemukan harga sebenarnya sistem tertutup hanya ketika mencoba keluar darinya. Telusuri, secara konkret, apa yang dibutuhkan untuk mengekstrak data Anda dalam bentuk standar yang dapat dipakai dan pindah ke pemasok lain. Periksa kontrak Anda untuk siapa pemilik data, antarmuka standar apa yang ada, dan apakah Anda ditagih untuk integrasi yang seharusnya rutin. Identifikasi antarmuka dan format data proprietari yang harus diurai. Timbang terhadap keterbukaan alternatif dan platform nasional yang dapat Anda pakai ulang. Ini bukan soal gonta-ganti pemasok; ini soal memahami daya tawar Anda dan mengurangi risiko bahwa peta jalan satu vendor menjadi satu-satunya opsi Anda.

3. **Apakah data kami cukup baik untuk dibagikan dengan aman, dan bagaimana kami akan tahu?** Membagikan data buruk tidak hanya mempermalukan Anda — ia menyebarkan galat ke dalam keputusan klinisi lain. Tanyakan apakah Anda benar-benar mengukur kelengkapan, akurasi, ketepatan waktu, dan konsistensi pengodean data yang hendak Anda paparkan. Diskusikan siapa yang memiliki kualitas data di organisasi Anda dan apakah mereka punya waktu dan mandat untuk memperbaiki masalah di sumber. Pertimbangkan berapa proporsi rekam yang membawa NHS Number terverifikasi dan berapa banyak informasi penting secara klinis yang masih berada dalam teks bebas alih-alih kolom berkode. Pikirkan bagaimana Anda akan mendeteksi galat pengodean sistematis sebelum mencapai rekam perawatan bersama. Jika Anda tak dapat menjawab pertanyaan ini dengan bukti, perlakukan itu sebagai temuan tersendiri, dan danai kerja kualitas data sebelum Anda memperlebar pipa.

4. **Ketika pemasok berkata "kami mendukung FHIR", bagaimana kami akan benar-benar memverifikasinya sebelum go-live?** Label standar adalah klaim pemasaran sampai diuji terhadap panduan implementasi spesifik. Diskusikan apakah organisasi Anda punya kapabilitas pengujian konformansi sendiri, atau sekadar memercayai kata pemasok. Dua sistem dapat masing-masing "patuh-FHIR" dan tetap tak dapat bertukar pesan yang dapat dipakai, karena standar sengaja fleksibel dan makna hidup dalam profil dan himpunan nilai yang menguncinya. Tanyakan panduan implementasi nasional dan profil IHE apa yang berlaku untuk antarmuka yang dimaksud, dan siapa di pihak Anda yang kompeten membacanya. Pertimbangkan apakah konformansi ditulis ke dalam kontrak sebagai syarat terhubung, atau ditemukan dengan menyakitkan selama integrasi. Jawaban jujur menamai profil spesifik yang akan Anda uji, orang atau fungsi yang akan menjalankan uji, dan titik dalam lini waktu di mana pemasok yang gagal ditolak alih-alih dilambaikan lewat.

5. **Siapa yang memiliki standar, terminologi, dan konformansi di organisasi kami, dan apakah mereka punya mandat untuk berkata tidak?** Interoperabilitas membusuk tanpa pengelolaan: himpunan nilai melenceng, panduan lokal menyimpang, dan setiap proyek baru diam-diam menciptakan tafsirnya sendiri. Tanyakan apakah ada fungsi bernama yang bertanggung jawab atas standar, subset SNOMED CT dan dm+d, dan konformansi, atau pengetahuan ini ada di kepala segelintir individu. Pertimbangkan ketegangan antara konsistensi pusat dan kecepatan pengiriman lokal — tim di bawah tekanan akan membangun hal tercepat kecuali fungsi standar punya wewenang nyata untuk mewajibkan penggunaan ulang. Diskusikan bagaimana pemeliharaan terminologi didanai, mengingat ia tak glamor, berkelanjutan, dan menguntungkan semua orang alih-alih satu proyek mana pun. Lihat bagaimana Anda menjaga implementasi tetap selaras seiring FHIR, SNOMED CT, dan panduan nasional berevolusi, alih-alih membeku pada versi yang pertama Anda adopsi. Jawaban jujur mengidentifikasi pemilik akuntabel, pendanaannya, dan contoh terkini di mana mereka entah menegakkan standar atau gagal.

6. **Apakah orang yang rekamnya kami satukan diberi tahu dan puas dengan cara datanya mengalir?** Interoperabilitas bukan hanya soal teknis dan klinis tetapi soal kepercayaan publik dan dasar hukum. Orang wajar mengira NHS sudah berbagi informasi mereka dengan masuk akal, dan kecewa baik ketika tidak maupun ketika melakukannya dengan cara yang tak mereka duga. Diskusikan apakah pasien memahami organisasi mana yang dapat melihat rekam bersama mereka, bagaimana National Data Opt-Out atau model persetujuan lokal dihormati di seluruh aliran, dan bagaimana akses dicatat dan dapat diaudit. Pertimbangkan dimensi kesetaraan: orang yang datanya paling terfragmentasi — dengan kebutuhan kompleks — juga yang paling tidak mampu menavigasi opt-out dan pemberitahuan informasi. Libatkan tata kelola informasi dan, di mana relevan, pasien atau perwakilan mereka dalam desain alih-alih memperlakukan persetujuan sebagai kotak yang dicentang di akhir. Jawaban jujur dapat menggambarkan dasar hukum untuk setiap aliran, bagaimana seseorang akan mengetahui siapa yang telah melihat rekamnya, dan bagaimana pilihan mereka dihormati dari ujung ke ujung.

## Dalam praktik: contoh kesehatan & perawatan

Sebuah sistem perawatan terpadu di utara Inggris berangkat memberi klinisi satu pandangan tunggal atas obat bersama di praktik dokter umum, rumah sakit, dan apotek komunitas, setelah tinjauan insiden serius menemukan bahwa pasien diresepkan dua obat yang berinteraksi oleh tim yang tak dapat melihat rekam satu sama lain.

Godaannya adalah membeli "dasbor obat" dari satu pemasok dan menyambungkannya langsung ke basis data tiap sistem. Pimpinan interoperabilitas menolak. Sebagai gantinya program mengadopsi pendekatan bangun-sesuai-standar-terbuka. Setiap sistem sumber memaparkan data obat sebagai sumber daya HL7 FHIR; setiap obat dikodekan memakai dm+d agar "obat yang sama" berarti hal yang sama di mana-mana; dan setiap rekam diberi kunci NHS Number terverifikasi agar obat yang tepat melekat pada orang yang tepat. Data dokter umum ditarik melalui GP Connect alih-alih umpan bespoke, memakai ulang kapabilitas nasional alih-alih menciptakan yang lokal.

Pemrofilan data awal membuktikan nilainya segera. Sistem satu praktik mencatat obat tertentu dalam teks bebas alih-alih entri dm+d berkode, yang berarti mereka akan tak terlihat oleh pemeriksaan interaksi otomatis apa pun. Ini diperbaiki di sumber sebelum go-live. Tim juga menemukan sekumpulan rekam dengan NHS Number belum terverifikasi dan merutekannya melalui layanan demografis nasional untuk pencocokan.

Petugas keselamatan klinis dan pimpinan tata kelola informasi menjadi bagian kelompok desain sepanjang waktu. Bersama mereka menetapkan persis data apa yang dibagikan, dengan siapa, di bawah dasar hukum apa, dan bagaimana akses klinisi dicatat — keprihatinan Topik 1.7 — Tata Kelola Informasi, Perlindungan Data & Keamanan Siber. Pemasok harus lulus pengujian konformansi terhadap panduan implementasi FHIR nasional sebelum terhubung. Dua belas bulan kemudian, pandangan obat terpadu live, interaksi yang sebelumnya akan terlewat sudah tertangkap, dan — karena semuanya dibangun pada antarmuka terbuka — kasus penggunaan kedua, informasi alergi bersama, memakai ulang sebagian besar pipa yang sama dengan biaya sebagian kecil dari yang awal.

## Lensa sektor

### Startup

Startup kesehatan digital hidup-matinya bergantung pada seberapa mudah ia tersambung ke sistem yang ada, jadi perlakukan interoperabilitas sebagai fitur inti, bukan beban kepatuhan. Membangun API FHIR dan memakai SNOMED CT dan dm+d sejak awal membuat Anda jauh lebih mudah dibeli dan diintegrasikan, dan menandakan kedewasaan kepada pembeli NHS yang berhati-hati. Tahan dorongan menciptakan model data sendiri ketika standar ada; diferensiasi Anda harus produk Anda, bukan format proprietari yang menjadi liabilitas. Menata penanganan NHS Number dan tata kelola informasi sejak dini adalah yang memungkinkan Anda bergerak dari uji coba ke pengadaan. Rancang agar pelanggan dapat, pada prinsipnya, mengekstrak data dan pergi — secara paradoks, keterbukaan itu yang meraih kepercayaan untuk mempertahankan mereka.

### Usaha kecil

Penyedia kecil yang mapan — praktik dokter umum, apotek komunitas, panti jompo, atau klinik satu lokasi — memikul kewajiban berbagi data dengan aman yang sama dengan trust terbesar, tetapi dengan sebagian kecil kapabilitas teknis. Di sini interoperabilitas sebagian besar disiplin pengadaan dan konfigurasi daripada rekayasa: pilih sistem yang sudah berbicara FHIR, sambungkan ke layanan nasional seperti GP Connect dan Spine, dan kodekan dengan SNOMED CT dan dm+d bawaan, agar Anda mewarisi standar alih-alih membangunnya. Jadikan penangkapan NHS Number terverifikasi bagian praktik sehari-hari, karena tanpa tim integrasi untuk merekonsiliasi ketidakcocokan kemudian, menata pengidentifikasi pada titik registrasi adalah pengaman termurah Anda. Bersandarlah pada program rekam perawatan bersama dan infrastruktur bersama sistem perawatan terpadu Anda alih-alih mengomisikan tautan bespoke yang tak dapat Anda pelihara. Ketika Anda menandatangani atau memperpanjang kontrak sistem, bersikeras pada hak ekstraksi data dan antarmuka terbuka dalam istilah sederhana, karena organisasi kecil merasakan penguncian vendor paling tajam dan punya daya tawar paling sedikit untuk lolos sesudahnya.

### Perusahaan besar

Penyedia atau pemasok besar biasanya memikul warisan berdekade: antarmuka HL7 v2, banyak sistem rekam elektronik, dan mesin integrasi yang menahan semuanya. Strategi realistisnya bukan mencabut semuanya melainkan meletakkan lapisan berbasis API dan standar di depan estat, memigrasikan aliran ke FHIR secara bertahap sambil menjaga v2 berjalan di mana harus. Jaga ketat dari penguncian pada setiap perpanjangan, dan bersikeras pada pengujian konformansi agar "patuh standar" diverifikasi, bukan sekadar ditegaskan. Dirikan fungsi standar dan konformansi internal agar proyek individual tak masing-masing menciptakan tafsirnya sendiri. Ini terkait erat dengan cara Anda mengelola platform operasional inti dalam Topik 5.4 — Perencanaan Sumber Daya Perusahaan (ERP), di mana disiplin pakai-ulang-dan-antarmuka-terbuka yang sama berlaku.

### Pemerintah

Badan nasional dan regional menetapkan aturan pasar, sehingga pilihan mereka tentang standar beriak ke setiap organisasi. Hal paling berharga yang dapat dilakukan pemerintah adalah mewajibkan standar terbuka, menerbitkan panduan implementasi dan persyaratan konformansi yang jelas, dan menyediakan platform nasional yang dapat dipakai ulang — Spine, GP Connect, kerangka rekam perawatan bersama, layanan NHS Number — agar organisasi lokal membangun sekali dan memakai ulang. Konsistensi lebih penting daripada kesempurnaan: standar yang cukup baik dan ditegakkan tegas mengalahkan yang secara teoretis unggul yang diimplementasikan semua orang secara berbeda. Pemerintah juga harus mendanai kerja tak glamor pemeliharaan terminologi dan perbaikan kualitas data, karena ini barang publik yang tak akan dibiayai organisasi tunggal mana pun sendirian. Peran pengelolaan ini terhubung dengan Topik 9.1 — Bekerja dengan Pemerintah Daerah & Nasional dan dengan bagaimana mitra berkolaborasi dalam Topik 9.0 — Berkolaborasi dengan Organisasi Mitra.

## Mode kegagalan umum

- **Mengacaukan sambungan teknis dengan pemahaman semantik.** Menyatakan kemenangan ketika pesan mengalir, tanpa mengonfirmasi bahwa kedua sisi menafsirkan kode, satuan, dan negasinya secara identik. Hasilnya data yang tampak terintegrasi tetapi diam-diam disalahbaca.
- **Membagikan data buruk lebih cepat.** Memperlebar pipa sebelum memperbaiki kualitas data, sehingga galat pengodean, teks bebas, dan NHS Number hilang menyebar ke keputusan klinisi lain dan setiap analisis hilir.
- **"Kami mendukung FHIR" sebagai klaim kosong.** Menerima label standar tanpa pengujian konformansi terhadap panduan implementasi spesifik, sehingga dua sistem "patuh" tetap tak dapat saling bicara.
- **Integrasi titik-ke-titik bespoke.** Membangun tautan langsung antara tiap pasang sistem, menghasilkan jaring rapuh yang secara eksponensial makin sulit dan mahal dipelihara seiring tumbuh.
- **Mengunci secara bawaan.** Menandatangani kontrak dengan antarmuka proprietari dan tanpa hak ekstraksi data, baru menemukan biaya jebakan ketika mencoba berganti pemasok.
- **Memperlakukan tata kelola sebagai gerbang akhir.** Melibatkan keselamatan klinis dan tata kelola informasi hanya untuk mengesahkan, sehingga masalah muncul terlambat dan mahal, atau diloloskan di bawah tekanan pengiriman.
- **Standar tanpa pengelolaan.** Mengadopsi terminologi dan profil tetapi tak mendanai siapa pun untuk memelihara himpunan nilai, memantau konformansi, atau menjaga implementasi selaras seiring standar berevolusi.

## Model kematangan

| Dimensi | Inisiasi | Pengembangan | Standardisasi | Pengelolaan | Orkestrasi |
|---|---|---|---|---|---|
| Adopsi standar | Ad hoc, kebanyakan antarmuka proprietari atau buatan sendiri | HL7 v2 dan sebagian FHIR dipakai; pilihan bervariasi per proyek | FHIR, SNOMED CT, dan dm+d diadopsi sebagai bawaan dengan panduan lokal | Konformansi pada panduan nasional dilacak dan dilaporkan; penyimpangan diatur dan dijamin | Konformansi penuh pada panduan implementasi nasional dan profil IHE, diverifikasi dengan pengujian |
| Pengidentifikasi & penautan | NHS Number sering hilang atau belum diverifikasi | Ditangkap tetapi tak konsisten diverifikasi | Diverifikasi terhadap layanan nasional pada kebanyakan rekam | Laju verifikasi diukur terhadap target, dengan rekam tak cocok dikerjakan aktif | Diverifikasi di mana-mana; mutu pencocokan dipantau aktif |
| Kualitas data | Tak terukur; teks bebas umum di mana pengodean dibutuhkan | Diukur di beberapa tempat; perbaikan reaktif | Diprofilkan, dimiliki, dan diperbaiki di sumber | Metrik mutu dilacak terhadap ambang, dengan pengelolaan dimintai pertanggungjawaban | Pemantauan berkelanjutan dengan deteksi cacat otomatis sebelum data dibagikan |
| Arsitektur | Titik-ke-titik, terkopel ketat | Mesin integrasi, kopling campuran | API-first, memakai ulang platform nasional | Kinerja API dan ketergantungan dipantau; perubahan diatur melalui pembuatan versi dan pengujian | Terkopel longgar, berbasis standar, komponen dapat diganti tanpa pengerjaan ulang |
| Penguncian & pengadaan | Kontrak proprietari, tanpa hak keluar | Sebagian klausul standar, lemah ditegakkan | Standar terbuka dan hak ekstraksi data diwajibkan | Kepatuhan kontrak dan kesiapan keluar ditinjau dan dijamin di seluruh portofolio | Antarmuka terbuka diwajibkan dan diverifikasi; pemasok benar-benar dapat disubstitusi |

## Daftar periksa

- [ ] Setiap rekam dan antarmuka yang relevan membawa NHS Number terverifikasi, dengan proses untuk menyelesaikan yang hilang atau tak cocok.
- [ ] Antarmuka baru memakai HL7 FHIR dan panduan implementasi nasional bernama, dengan HL7 v2 dipertahankan hanya di mana migrasi belum dibenarkan.
- [ ] Isi klinis dikodekan memakai SNOMED CT, dan obat memakai dm+d, terhadap himpunan nilai yang disepakati.
- [ ] Kualitas data untuk apa pun yang hendak Anda bagikan diprofilkan, diukur, dimiliki, dan diperbaiki di sumber sebelum pipa diperlebar.
- [ ] Pemasok harus lulus pengujian konformansi terhadap profil spesifik sebelum terhubung — "mendukung FHIR" tak pernah diterima sendirian.
- [ ] Platform nasional (Spine, GP Connect, rekam perawatan bersama) dipakai ulang sebelum integrasi bespoke apa pun dibangun.
- [ ] Kontrak mewajibkan API terbuka dan terdokumentasi, hak ekstraksi data dalam format standar, dan tanpa biaya untuk integrasi standar.
- [ ] Pimpinan keselamatan klinis dan tata kelola informasi ada dalam kelompok desain sejak awal, bukan hanya saat pengesahan.
- [ ] Arsitektur API-first dan terkopel longgar, sehingga komponen dapat diganti tanpa membangun ulang semua di sekitarnya.
- [ ] Fungsi bernama memiliki standar, konformansi, dan pemeliharaan terminologi di seluruh organisasi.

## Sumber utama

- NHS England — standar interoperabilitas, Spine, GP Connect, dan program rekam perawatan bersama.
- HL7 International — standar FHIR dan spesifikasi HL7 v2.
- SNOMED International — terminologi SNOMED CT dan panduan implementasi.
- NHS Business Services Authority — Dictionary of medicines and devices (dm+d).
- Integrating the Healthcare Enterprise (IHE) — profil interoperabilitas.
- openEHR International — spesifikasi terbuka untuk menstrukturkan rekam kesehatan.
- World Health Organization — International Classification of Diseases (ICD-10 dan ICD-11).

## Referensi

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
