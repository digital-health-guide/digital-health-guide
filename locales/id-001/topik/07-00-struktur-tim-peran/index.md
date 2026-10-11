# Topik 7.0 — Struktur Tim, Peran & Tanggung Jawab

**Dalam satu kalimat:** Penyampaian kesehatan digital berhasil atau gagal pada cara Anda menarik batas antartim dan seberapa jelas Anda menamai siapa melakukan apa — jadi susun tim untuk aliran nilai yang cepat dan aman, isi mereka secara multidisiplin, dan buat tanggung jawab eksplisit.

## Mengapa ini penting dalam kesehatan dan perawatan

Cara Anda mengorganisasi tim menjadi cara layanan Anda berperilaku. **[Hukum Conway](https://en.wikipedia.org/wiki/Conway%27s_law)** — bahwa desain sistem mencerminkan struktur komunikasi organisasi yang membangunnya — bukan keingintahuan dalam kesehatan dan perawatan; ia risiko keselamatan pasien. Tim terfragmentasi menghasilkan rekam perawatan terfragmentasi, integrasi rapuh, dan serah terima tempat risiko klinis bersembunyi.

Di NHS dan perawatan sosial Anda juga membelanjakan uang publik dan memikul kewajiban undang-undang: keselamatan klinis di bawah DCB0129/DCB0160, tata kelola informasi di bawah UK GDPR dan kewajiban kerahasiaan common law, dan kewajiban aksesibilitas. Kewajiban ini tak dapat ditempelkan di akhir. Mereka harus terwakili *di dalam* tim, oleh orang bernama dengan wewenang dan waktu untuk menunaikannya.

Tata struktur dengan benar dan tim multidisiplin mengirim perangkat lunak berfungsi yang dipercaya klinisi dan dapat dipakai pasien. Tata salah dan Anda mendapat spesialis sibuk yang mengoptimalkan silo mereka sendiri sementara layanan secara keseluruhan macet — pola klasik di balik program digital yang terlambat, melampaui anggaran, dan diam-diam ditinggalkan.

## Konsep inti

**[Tim multidisiplin](https://en.wikipedia.org/wiki/Interdisciplinarity) (MDT).** Tim penyampaian digital harus memuat setiap disiplin yang dibutuhkan untuk merancang, membangun, dan menjalankan layanan tanpa ketergantungan eksternal konstan — produk, penyampaian, desain, riset, rekayasa, data, dan perspektif klinis serta tata kelola. Ini mencerminkan konsep MDT klinis yang sudah dikenal staf: keahlian campuran, akuntabilitas bersama atas hasil.

**Team Topologies.** Model (Skelton & Pais) yang mereduksi desain tim efektif menjadi empat jenis dasar dan tiga mode interaksi, semuanya demi *aliran nilai yang cepat*:

- **Tim selaras-aliran (stream-aligned)** — diorganisasi di sekitar satu aliran kerja bernilai (layanan, perjalanan pengguna, produk) dan memilikinya ujung-ke-ujung. Ini jenis tim bawaan; kebanyakan orang harus berada di satu.
- **Tim platform** — menyediakan kapabilitas swalayan internal (infrastruktur bersama, mesin integrasi, layanan login, API rekam perawatan bersama) agar tim selaras-aliran lebih cepat tanpa menemukannya ulang.
- **Tim pemungkin (enabling)** — tim spesialis berbatas waktu (mis. keselamatan klinis, aksesibilitas, otomatisasi uji) yang melatih pihak lain untuk meningkatkan kapabilitas, lalu mundur.
- **Tim subsistem rumit (complicated-subsystem)** — memiliki bagian yang membutuhkan pengetahuan spesialis mendalam (algoritma penilaian risiko, antarmuka NHS Spine) yang akan membebani tim generalis.

Tiga **mode interaksi** mengatur bagaimana dua tim berhubungan: **kolaborasi** (bekerja erat selama periode terdefinisi, bandwidth tinggi, menoleransi sedikit inefisiensi untuk menemukan hal), **X-sebagai-layanan** (satu tim mengonsumsi kapabilitas tim lain dengan gesekan minimal, bawaan gesekan-rendah pada skala), dan **memfasilitasi** (satu tim membantu yang lain belajar). Menamai mode mencegah ambiguitas yang melahirkan penundaan dan saling menyalahkan.

**[Beban kognitif](https://en.wikipedia.org/wiki/Cognitive_load).** Tim hanya dapat menyimpan sekian banyak di kepalanya. Team Topologies berargumen bahwa Anda harus membatasi *ranah* yang dimiliki tiap tim pada apa yang dapat dinalarnya dengan aman — prinsip penentu ketika ranahnya klinis.

**Hukum Conway dan Manuver Conway Terbalik.** Karena arsitektur mengikuti struktur organisasi — pandangan [sistem sosioteknis](https://en.wikipedia.org/wiki/Sociotechnical_system) yang memperlakukan tim dan teknologi sebagai satu desain — bentuk tim dengan sengaja untuk menghasilkan arsitektur yang Anda inginkan. Jika Anda menginginkan rekam perawatan modular dan interoperabel, jangan membangunnya dengan satu tim monolitik.

## Praktik terbaik

1. **Staf tim multidisiplin penuh di sekitar tiap layanan.** Sertakan, minimal, manajer produk, manajer penyampaian, peneliti pengguna, perancang layanan/interaksi, insinyur, dan kapabilitas data/analitik, ditambah masukan keselamatan klinis dan tata kelola informasi bernama. Tim yang kekurangan satu disiplin akan entah menunggu orang lain atau melewati pekerjaan itu — dan pekerjaan yang dilewati dalam kesehatan biasanya keselamatan, aksesibilitas, atau tata kelola.

2. **Jadikan kebanyakan tim selaras-aliran dan beri mereka kepemilikan ujung-ke-ujung.** Organisasikan di sekitar perjalanan pengguna (mis. "rujukan rawat jalan") alih-alih lapisan teknologi (mis. "tim basis data"). Kepemilikan ujung-ke-ujung memperpendek lingkar umpan balik dan menghentikan celah serah terima tempat risiko klinis menumpuk.

3. **Bangun platform sebagai produk, dikonsumsi sebagai layanan.** Perlakukan mesin integrasi, layanan identitas, atau API rekam perawatan bersama Anda sebagai produk internal dengan tim, peta jalan, dan penggunanya sendiri. Terbitkan "sebagai-layanan" agar tim selaras-aliran melayani diri, alih-alih mengajukan tiket dan menunggu.

4. **Pakai tim pemungkin untuk menyebarkan keahlian langka, bukan menimbunnya.** Petugas keselamatan klinis, spesialis aksesibilitas, dan insinyur keamanan jarang. Terjunkan mereka untuk melatih tim penyampaian ke standar lebih tinggi lalu pindah, alih-alih menjadi hambatan permanen yang diantre setiap tim.

5. **Namai setiap peran dan hak keputusannya secara eksplisit.** Pakai model tanggung jawab — [RACI](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) (Responsible, Accountable, Consulted, Informed) atau pemisahan "pemutus/penasihat" yang lebih sederhana — untuk keputusan yang penting: pengesahan keselamatan klinis, go-live, persetujuan tata kelola informasi, belanja. Ambiguitas di sini tempat akuntabilitas menguap.

6. **Beri Petugas Keselamatan Klinis wewenang nyata dan waktu nyata.** DCB0129/0160 mensyaratkan Petugas Keselamatan Klinis bernama dan terlatih yang dapat menghentikan rilis. Buat peran eksplisit dalam tim, lindungi waktunya, dan pastikan ia dapat berkata tidak — CSO yang hanya nama adalah kegagalan tata kelola yang menunggu ditemukan insiden.

7. **Kelola beban kognitif dengan membatasi ranah.** Jika tim memiliki terlalu banyak layanan atau ranah klinis terlalu kompleks, pecah. Waspadai sinyalnya: tim yang tak lagi dapat dengan yakin menjelaskan implikasi keselamatan perubahannya sendiri kelebihan beban.

8. **Terapkan Manuver Conway Terbalik dengan sengaja.** Tarik batas tim agar cocok dengan arsitektur dan interoperabilitas yang Anda inginkan — tim modular untuk sistem modular berbasis standar (mis. [HL7 FHIR](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)). Jangan biarkan bagan organisasi kebetulan merancang rekam perawatan Anda.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Di mana bagan organisasi kami saat ini sudah merancang arsitektur kami — dan apakah itu arsitektur yang sebenarnya kami inginkan?**
   Hukum Conway tidak opsional: apa pun bentuk tim kami, sistem akan mencerminkannya, sehingga langkah pertama yang jujur adalah melihat rekam perawatan, integrasi, dan serah terima yang sudah ada dan bertanya batas tim mana yang menghasilkan tiap sambungan. Dalam lingkungan kesehatan dan perawatan sambungan itu tempat risiko klinis bersembunyi — rekam terfragmentasi, antarmuka Spine yang rapuh, kasus keselamatan yang tak dimiliki tim tunggal mana pun — sehingga ini percakapan keselamatan pasien, bukan estetika. Ketegangan yang perlu diperdebatkan adalah menggambar ulang batas tim untuk mendapat arsitektur yang kami inginkan (Manuver Conway Terbalik) mengganggu, mengancam kerajaan mapan, dan memotong struktur pendanaan dan lini manajemen yang mungkin tak sepenuhnya kami kendalikan. Pertimbangkan memetakan dua atau tiga integrasi paling menyakitkan Anda kembali ke tim yang memiliki tiap ujung, dan tanyakan apakah batas selaras-aliran akan menghapus serah terima sepenuhnya. Jawaban yang baik menamai setidaknya satu batas konkret yang akan Anda pindahkan, jujur tentang siapa yang akan menolak dan mengapa, dan membedakan perubahan yang sepadan dengan gangguan dari yang antarmuka sebagai-layanan akan memperbaiki gesekannya lebih murah.

2. **Apakah spesialis langka kami — keselamatan klinis, tata kelola informasi, aksesibilitas — duduk di dalam tim dengan wewenang nyata, atau gerbang eksternal yang diantre semua orang?**
   Setiap layanan dalam keluarga ini membawa kewajiban undang-undang (keselamatan klinis DCB0129/0160, UK GDPR dan kewajiban kerahasiaan common law, hukum aksesibilitas) yang tak dapat ditempelkan di akhir, namun kapabilitas ini langka dan mahal, yang menarik organisasi menimbunnya secara terpusat. Trade-off-nya nyata: tanamkan Petugas Keselamatan Klinis di setiap tim dan Anda menyebar keahlian tipis sampai encer; pusatkan dan Anda menciptakan hambatan heroik di mana satu orang dimintai pendapat atas segalanya dan setiap rilis menunggu. Pola tim pemungkin — spesialis berbatas waktu yang melatih tim menjalankan lokakarya bahaya sendiri lalu mundur — adalah resolusi yang diusulkan, tetapi hanya berfungsi jika pimpinan melindungi waktu spesialis untuk mengajar bukan mengerjakan. Lihat dengan jujur riwayat rilis Anda sendiri: seberapa sering go-live tergelincir menunggu satu orang bernama, dan apakah orang itu punya wewenang dan waktu terlindungi untuk berkata tidak dengan aman? Jawaban kuat menghadapi kelangkaan secara langsung, memilih posisi sengaja embed-versus-enable untuk tiap kewajiban, dan menamai wewenang spesifik (kuasa menghentikan rilis) yang tak boleh pernah diencerkan bagaimanapun Anda menyebar kapasitasnya.

3. **Bagaimana kami akan tahu tim telah menerima lebih banyak beban kognitif daripada yang dapat dipikulnya dengan aman — dan apa yang akan benar-benar kami lakukan tentangnya?**
   Beban kognitif adalah pengatur senyap penyampaian aman: tim hanya dapat bernalar tentang sekian banyak ranah klinis dan layanan sebelum keyakinannya pada implikasi keselamatan perubahannya sendiri mulai terkikis, dan dalam kesehatan pengikisan itu tak terlihat sampai insiden mengungkapnya. Kesulitannya kelebihan beban jarang mengumumkan dirinya — ia tampak seperti penyampaian sedikit lebih lambat, lebih banyak cacat, lebih banyak "biar saya cek dengan seseorang", dan tim di bawah tekanan cenderung menyerap alih-alih menandai, terutama ketika memecah tim mahal secara politis atau jumlah staf dibekukan. Perdebatkan apa sinyal peringatan dini Anda (tim yang tak lagi dapat dengan yakin menjelaskan kasus keselamatan rilisnya sendiri adalah sinyal kuat), dan apakah Anda punya mekanisme hari ini yang akan memunculkan kelebihan beban sebelum penyampaian terlihat macet. Pertimbangkan tekanan balik juga: memecah tim menciptakan batas dan serah terima baru, sehingga obatnya dapat memperkenalkan kembali risiko fragmentasi dari pertanyaan satu. Jawaban jujur menyepakati sinyal konkret yang dapat diamati alih-alih "kami akan merasakannya", menamai siapa yang berwenang membatasi ranah tim atau memecahnya, dan mengakui trade-off antara pelepasan beban dan perbiakan batas.

4. **Kapabilitas bersama mana yang harus dijalankan sebagai platform yang dikonsumsi sebagai-layanan, dan apakah kami benar-benar menyumberdayakannya demikian — atau sekadar melabeli ulang antrean tiket?**
   Janji tim platform adalah tim selaras-aliran melayani diri mesin integrasi, layanan identitas, atau API rekam perawatan bersama tanpa mengajukan tiket dan menunggu, sehingga seluruh sistem lebih cepat; kegagalannya menyebut sesuatu "platform" sementara ia tetap fungsi pusat kekurangan staf yang masih diantre semua orang. Trade-off-nya nyata: membangun kapabilitas sebagai produk internal sejati berarti memberinya tim, peta jalan, dokumentasi, dan penggunanya sendiri, investasi serius yang bersaing dengan mengirim fitur menghadap pengguna, dan di lingkungan NHS yang terbatas kas investasi itu mudah ditunda tanpa batas. Dalam kesehatan dan perawatan taruhannya lebih tajam karena kapabilitas bersama sering yang kritis-keselamatan — indeks pencocokan orang, antarmuka FHIR, jejak audit — di mana tim platform tipis menjadi titik kegagalan tunggal bagi setiap layanan di atasnya. Lihat kapabilitas yang sudah diandalkan beberapa tim dan tanyakan, untuk masing-masing, apakah interaksi benar-benar X-sebagai-layanan gesekan-rendah atau kolaborasi terselubung dengan penantian tersembunyi. Jawaban jujur menamai kapabilitas mana yang layak investasi platform sekarang versus nanti, jelas tentang siapa yang mendanai dan menyediakan stafnya, dan menolak godaan menyatakan platform yang tak punya pemilik produk, peta jalan, atau jalur swalayan.

5. **Di mana kami bergantung pada pemasok terkontrak atau staf pinjaman, dan peran mana yang harus kami pertahankan di dalam agar tetap menjadi klien cerdas dan bukan yang dikosongkan?**
   Banyak penyampaian digital dalam kesehatan dan perawatan dialihdayakan, dan pemasok dapat membawa kapasitas dan spesialisasi dengan cepat — tetapi jika kepemilikan produk, penjaminan teknis, dan pengesahan keselamatan klinis semuanya meninggalkan gedung bersama kontrak, organisasi kehilangan kemampuan menilai apa yang dijual kepadanya, menspesifikasikan apa yang dibutuhkannya, atau memiliki hasilnya dengan aman. Ketegangannya antara kecepatan dan kapabilitas: penambahan staf dan pembangunan turnkey membuat sesuatu live dengan cepat, namun dapat diam-diam mengikis otot internal yang memungkinkan Anda meminta pertanggungjawaban pemasok, dan sering menghasilkan struktur berbentuk komponen dan berat serah terima alih-alih tim selaras-aliran yang memiliki hasil. Dalam ranah ini peran yang dipertahankan tak dapat ditawar mengelompok di sekitar akuntabilitas yang tak dapat didelegasikan — Pemilik Bertanggung Jawab Senior, Petugas Keselamatan Klinis yang mengesahkan go-live, pemilik produk yang memutuskan prioritas, dan cukup penjaminan teknis untuk memeriksa apa yang dibangun pemasok. Periksa penyampaian Anda saat ini dan tanyakan kapabilitas mana yang tak dapat Anda rekonstitusi jika pemasok pergi besok. Jawaban yang baik membedakan pekerjaan yang benar-benar tak apa dikontrakkan dari inti klien cerdas yang harus tetap di dalam, bersikeras bahwa tim terkontrak dimintai kepemilikan hasil alih-alih penempatan staf ala body-shop, dan menamai keputusan keselamatan dan tata kelola yang harus selalu berada pada orang akuntabel Anda sendiri.

6. **Bagaimana kami akan tahu struktur tim kami benar-benar menghasilkan aliran nilai cepat dan aman — dan apa yang akan memicu kami menggambar ulang?**
   Desain tim adalah sarana, bukan tujuan: inti tim selaras-aliran, platform, dan mode interaksi bernama adalah penyampaian nilai yang lebih cepat dan lebih aman, namun organisasi jarang menginstrumentasikan apakah struktur menyampaikan itu, sehingga reorganisasi terjadi atas politik dan intuisi alih-alih bukti. Kesulitannya memilih sinyal yang mencerminkan aliran dan keselamatan tanpa dimanipulasi — kecepatan mentah atau throughput story-point mengundang perilaku salah, sementara metrik aliran (waktu tunggu dari gagasan ke live, frekuensi penerapan, jumlah serah terima per perubahan) dan indikator keselamatan (secepat apa bahaya ditutup, apakah tim memiliki kasus keselamatannya sendiri) memberi tahu lebih banyak tentang apakah batas membantu atau merugikan. Ada ketegangan nyata dengan stabilitas: reorganisasi konstan menghancurkan umur panjang tim dan ruang kognitif bersama yang membuat penyampaian aman, sehingga Anda butuh ambang tinggi dan pemicu jelas sebelum menggambar ulang batas. Diskusikan bukti apa yang akan memberi tahu bahwa batas salah — penantian lintas-tim yang bertahan, kasus keselamatan yang tak dimiliki tim tunggal mana pun, platform yang tak dilayani-diri siapa pun — dan siapa yang diberdayakan bertindak. Jawaban jujur berkomitmen pada segelintir sinyal aliran-dan-keselamatan yang akan benar-benar Anda awasi, menetapkan ambang sengaja yang melindungi stabilitas tim, dan menamai kondisi pemicu dan pembuat keputusan untuk pembentukan ulang di masa depan.

## Dalam praktik: contoh kesehatan & perawatan

Sebuah sistem perawatan terpadu (ICS) meluncurkan **rekam perawatan bersama** di perawatan akut, komunitas, kesehatan jiwa, primer, dan sosial.

Naluri pertama adalah membuat satu "tim rekam perawatan bersama" besar. Sebagai gantinya ICS menerapkan Team Topologies. **Tim platform** memiliki inti rekam bersama: indeks pencocokan orang, API FHIR, dan mesin integrasi, diterbitkan sebagai kapabilitas swalayan. Beberapa **tim selaras-aliran** masing-masing memiliki perjalanan pengguna nyata di atasnya — "melihat rekam pasien di UGD", "tampilan perlindungan pekerja sosial", "rekonsiliasi obat dokter umum" — dan mengonsumsi platform sebagai-layanan. **Tim subsistem rumit** memiliki algoritma pencocokan pasien probabilistik, di mana kecocokan palsu adalah insiden keselamatan sejati. **Tim pemungkin** spesialis keselamatan klinis dan aksesibilitas berotasi melalui tim selaras-aliran, melatih mereka menjalankan lokakarya bahaya DCB0160 sendiri alih-alih mengerjakannya untuk mereka.

Setiap tim punya manajer produk, manajer penyampaian, dan Petugas Keselamatan Klinis bernama, dan RACI menjelaskan bahwa go-live *akuntabel* kepada Pemilik Bertanggung Jawab Senior tetapi *tak dapat dilanjutkan* tanpa pengesahan CSO dan IG. Ketika tim UGD membutuhkan kolom data baru, mode interaksi eksplisit: X-sebagai-layanan dari tim platform melalui permintaan API terdokumentasi, bukan kolaborasi enam minggu. Penyampaian lebih cepat dan, yang krusial, kasus keselamatan setiap perjalanan dimiliki tim yang mengirimnya.

## Lensa sektor

### Startup

Startup kesehatan digital sepuluh orang tak dapat menyediakan staf empat jenis tim berbeda — ia biasanya *adalah* satu tim selaras-aliran di mana satu orang mengenakan beberapa topi (insinyur yang juga menjalankan riset pengguna, pendiri klinisi yang menjadi Petugas Keselamatan Klinis de facto). Prioritasnya menjaga seluruh tim dalam satu ruang kognitif bersama agar keputusan cepat; RACI formal berlebihan ketika semua orang di ruangan yang sama. Risiko sebenarnya adalah hambatan-pendiri: keselamatan klinis dan tata kelola informasi bertumpu pada satu orang sibuk, dan kewajiban DCB0129/0160 mudah ditunda. Seiring perusahaan memenangkan kontrak NHS pertamanya, perekrutan spesialis pertama harus yang mengurangi risiko gerbang itu — CSO bernama dan pimpinan IG — sebelum menskalakan jumlah staf rekayasa.

### Usaha kecil

Penyedia kecil yang mapan — praktik dokter umum, apotek komunitas, panti jompo, atau klinik satu lokasi — punya pasien nyata dan operasi berjalan tetapi jarang tim digital atau TI khusus, jadi tak ada "topologi tim" untuk dirancang; manajer praktik atau pimpinan klinis secara efektif adalah seluruh kapabilitas penyampaian di samping pekerjaan hariannya. Langkah realistisnya bukan membangun tim platform dan pemungkin melainkan menamai tanggung jawab secara eksplisit pada orang yang sudah Anda miliki — siapa Petugas Keselamatan Klinis untuk sistem yang Anda terapkan, siapa yang memiliki tata kelola informasi, siapa yang mengesahkan perubahan — meski itu topi paruh waktu pada segelintir staf. Karena kewajiban undang-undang yang sama (DCB0129/0160, UK GDPR, aksesibilitas) berlaku seperti pada trust besar, pola praktisnya adalah bersandar pada platform bersama dan dukungan pemungkin pemasok dan ICS Anda alih-alih menemukannya ulang, sambil mempertahankan kapabilitas klien cerdas yang cukup untuk meminta pertanggungjawaban pemasok. Risiko tunggal terbesar adalah hambatan satu-orang: jika satu-satunya orang yang memahami sistem klinis pergi, baik keselamatan maupun kesinambungan pergi bersamanya, jadi menuliskan RACI dan melatih silang orang kedua lebih penting di sini daripada model tim formal mana pun.

### Perusahaan besar

Trust NHS besar atau perusahaan teknologi kesehatan punya masalah sebaliknya: terlalu banyak tim, digambar menurut garis komponen dan departemen warisan, dengan serah terima di mana-mana. Di sinilah model desain tim yang sengaja membuktikan nilainya — membentuk ulang tim komponen menjadi selaras-aliran, mendirikan tim platform untuk kapabilitas rekam perawatan bersama dan integrasi, dan memakai tim pemungkin untuk menyebarkan keahlian keselamatan klinis dan aksesibilitas yang langka. RACI dan hak keputusan eksplisit menjadi esensial karena jumlah pemangku kepentingan membuat koordinasi informal mustahil. Manuver Conway Terbalik adalah tuas hidup di sini: bagan organisasi berdekade sudah membentuk arsitektur, sehingga pemimpin harus menggambar ulang batas tim dengan sengaja alih-alih membiarkan struktur merancang rekam perawatan untuk mereka.

### Pemerintah

Badan nasional (NHS England, DHSC) atau pemerintah daerah menetapkan standar yang dipakai pihak lain untuk memberi staf — kerangka kapabilitas Government Digital and Data, Service Standard, DCB0129/0160 — dan akuntabel kepada Parlemen dan publik atas bagaimana uang membeli kapasitas tim. Struktur di sini dibentuk aturan pengadaan dan pendanaan: banyak penyampaian dikontrakkan ke pemasok, sehingga peran krusial untuk dipertahankan di dalam adalah klien cerdas (kepemilikan produk, penjaminan teknis, pengesahan keselamatan klinis) yang mencegah kapabilitas dikosongkan. Akuntabilitas formal dan dapat diaudit — Pemilik Bertanggung Jawab Senior bernama, kendali belanja terpublikasi, kewajiban transparansi — sehingga model tanggung jawab adalah catatan publik, bukan kebersihan opsional. Risiko khasnya struktur mengeras menjadi dewan program dan gerbang permanen yang mencekik aliran; tandingannya adalah menahan pemasok pada tim selaras-aliran yang memiliki hasil alih-alih body-shop penambahan staf.

## Mode kegagalan umum

- **Jebakan tim komponen.** Tim dipecah menurut lapisan teknologi ("tim front-end", "tim basis data") menciptakan serah terima pada setiap fitur dan tak memiliki hasil. Reorganisasi di sekitar aliran nilai.
- **Spotify ala cargo-cult.** Menyalin "squad, tribe, chapter, guild" sebagai label tanpa otonomi, keselarasan, dan investasi platform yang mendasarinya. Model Spotify adalah potret satu perusahaan pada satu waktu — bahkan Spotify telah beranjak. Pinjam prinsip, bukan bagan organisasi.
- **Hambatan heroik.** Satu CSO, satu arsitek, atau satu pimpinan IG sebagai pihak yang dimintai pendapat atas segalanya, sehingga setiap tim menunggu. Ubah mereka menjadi kapabilitas pemungkin yang menaikkan kompetensi semua orang.
- **Tata kelola sebagai renungan belakangan.** Keselamatan klinis dan IG terwakili sebagai gerbang eksternal alih-alih anggota tim tertanam, sehingga kekhawatiran mereka tiba terlalu terlambat untuk ditindaklanjuti dengan murah.
- **Tim tanpa batas.** Tim yang terus menyerap layanan sampai tak ada yang memahami keseluruhan. Kelebihan beban kognitif tampak sebagai penyampaian melambat dan keyakinan keselamatan terkikis.
- **Kolaborasi permanen.** Dua tim "berkolaborasi" tanpa batas biasanya batas yang hilang. Batasi waktu kolaborasi dan beralih ke antarmuka sebagai-layanan yang bersih.

## Model kematangan

| Dimensi | Inisiasi | Pengembangan | Standardisasi | Pengelolaan | Orkestrasi |
|---|---|---|---|---|---|
| Bentuk tim | Dipecah menurut komponen teknologi; serah terima di mana-mana | Sebagian tim lintas fungsi, masih berat ketergantungan | Tim selaras-aliran memiliki layanan ujung-ke-ujung | Kesehatan bentuk tim dilacak terhadap metrik aliran; serah terima dan batas ditinjau pada irama | Batas tim sengaja membentuk arsitektur (Conway Terbalik) |
| Kepegawaian multidisiplin | Peran dipinjam ad hoc dari silo | Peran inti ada, klinis/IG paruh waktu | MDT penuh termasuk CSO bernama dengan wewenang | Celah kepegawaian diukur terhadap garis dasar kapabilitas dan disumberdayai aktif ke target | Tim menilai diri dan mengisi celah kapabilitas secara proaktif |
| Kejelasan interaksi | Tak terdefinisi; eskalasi lewat hubungan | Sebagian proses, masih antrean tiket | Mode interaksi dinamai per ketergantungan | Gesekan ketergantungan dan waktu tunggu diukur; SLA dan antarmuka dikelola terhadap target | Mode ditinjau dan berevolusi; platform gesekan-rendah mendominasi |
| Tanggung jawab | Tak jelas siapa memutuskan | RACI ada di atas kertas | RACI hidup dan dipakai untuk keputusan kunci | Throughput keputusan dan penundaan pengesahan dilacak; akuntabilitas dijamin melalui audit | Hak keputusan disetel berkelanjutan untuk mengurangi penundaan |
| Beban kognitif | Tim kelebihan beban, keyakinan keselamatan rendah | Beban diakui tetapi tak dikelola | Ranah dibatasi pada kapasitas tim | Beban dikuantifikasi terhadap ambang eksplisit dan diatur sebagai metrik terkelola | Beban dipantau aktif; tim dipecah sebelum kelebihan beban |

## Daftar periksa

- [ ] Setiap layanan punya tim selaras-aliran yang memilikinya ujung-ke-ujung.
- [ ] Setiap tim memuat, atau punya akses bernama ke, produk, penyampaian, riset, desain, rekayasa, data, keselamatan klinis, dan tata kelola informasi.
- [ ] Petugas Keselamatan Klinis bernama dan terlatih per tim punya waktu terlindungi dan wewenang menghentikan rilis.
- [ ] Kapabilitas bersama (integrasi, identitas, API rekam perawatan) dijalankan sebagai platform internal yang dikonsumsi sebagai-layanan.
- [ ] Spesialis langka bekerja melalui tim pemungkin berbatas waktu, bukan hambatan permanen.
- [ ] RACI (atau setara) ada untuk pengesahan klinis, go-live, persetujuan IG, dan belanja, dan benar-benar dipakai.
- [ ] Setiap ketergantungan lintas-tim punya mode interaksi bernama (kolaborasi / X-sebagai-layanan / memfasilitasi).
- [ ] Ranah tim dibatasi pada beban kognitif yang dapat dikelola; tim yang kelebihan beban dipecah.
- [ ] Batas tim dipilih dengan sengaja untuk menghasilkan arsitektur dan interoperabilitas yang Anda inginkan.

## Sumber utama

- Team Topologies — Matthew Skelton & Manuel Pais (empat jenis tim, tiga mode interaksi, beban kognitif): teamtopologies.com
- NHS Digital Service Standard dan NHS Service Manual — peran tim multidisiplin dan cara kerja
- GOV.UK Service Manual (GDS) — "Set up a service team" dan panduan penyampaian agile
- Government Digital and Data (dahulu DDaT) Profession Capability Framework — definisi peran: ddat-capability-framework.service.gov.uk
- Standar manajemen risiko klinis DCB0129 (pembuatan) dan DCB0160 (penerapan), NHS Digital — peran Petugas Keselamatan Klinis
- Hukum Conway — Melvin Conway, "How Do Committees Invent?" (1968)
- Budaya rekayasa Spotify (Henrik Kniberg) — squad/tribe/chapter/guild, dibaca kritis sebagai model satu titik waktu

## Referensi

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

*Lihat juga Topik 7.2 — Perencanaan Tenaga Kerja, Topik 7.3 — Strategi Tenaga Kerja, Topik 7.5 — Pengembangan SDM & Organisasi, dan Topik 8.1 — Manajemen Perubahan.*
