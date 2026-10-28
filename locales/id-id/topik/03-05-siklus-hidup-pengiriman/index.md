# Topik 3.5 — Siklus Hidup Pengiriman (Delivery)

**Dalam satu kalimat:** [Siklus hidup pengiriman](https://en.wikipedia.org/wiki/Systems_development_life_cycle) adalah urutan fase dan gerbang keputusan — Penemuan, Alfa, Beta, Live, dan akhirnya pensiun — yang dilalui layanan digital, dengan keselamatan klinis, tata kelola informasi, dan penjaminan dijalin ke dalam setiap fase alih-alih ditempelkan di akhir.

## Mengapa ini penting dalam kesehatan dan perawatan

Siklus hidup adalah cara organisasi mengubah gagasan menjadi layanan hidup yang aman dan, pada akhirnya, mempensiunkannya dengan bertanggung jawab. Dalam kesehatan dan perawatan, setiap transisi membawa bobot undang-undang dan klinis: Anda tak dapat menerapkan sistem yang menyentuh perawatan pasien tanpa kasus keselamatan klinis, dan tak dapat memproses data pasien rahasia tanpa dasar hukum dan [penilaian dampak perlindungan data](https://en.wikipedia.org/wiki/Privacy_impact_assessment) (DPIA) yang selesai. Siklus hidup yang memperlakukan ini sebagai dokumen akhir proyek menghasilkan layanan yang terlambat, tidak aman, atau keduanya.

Taruhannya asimetris. Aplikasi konsumen yang mengirim bug mengganggu pengguna; rekam perawatan bersama yang mengirim bug dapat menunjukkan alergi pasien yang salah kepada klinisi. Inilah mengapa NHS menanamkan model fase GOV.UK *dan* standar manajemen risiko klinis DCB0129 dan DCB0160 ke dalam siklus hidup yang sama. Menata siklus hidup dengan benar bukan kerapian tata kelola — ia mekanisme yang melaluinya keselamatan, kesetaraan, dan nilai uang publik benar-benar disampaikan, bukan sekadar dijanjikan.

Pemimpin juga membutuhkan siklus hidup karena ia membuat kemajuan *terbaca*. Fase dan gerbang bernama memungkinkan dewan melihat di mana layanan berada, bukti apa yang ada, dan keputusan apa yang jatuh tempo — menggantikan kabut "hampir selesai" dengan komitmen bertahap yang dapat dibela atas uang publik.

## Konsep inti

**Model fase: Penemuan → Alfa → Beta → Live.** Standar layanan NHS dan GOV.UK mendefinisikan empat fase. **Penemuan** (lihat Topik 3.4 — Fase Penemuan (Discovery)) memahami masalah. **Alfa** membangun [prototipe sekali-pakai](https://en.wikipedia.org/wiki/Software_prototyping) untuk menguji apakah solusi *dapat* berfungsi dan menuntaskan asumsi paling berisiko. **Beta** membangun layanan nyata, privat lalu publik, di infrastruktur produksi, beriterasi dengan pengguna nyata pada skala yang tumbuh. **Live** menjalankan layanan dalam operasi berkelanjutan, tetap beriterasi, hingga dipensiunkan. Fase-fase adalah tanjakan pengurangan risiko: masing-masing mengikat lebih banyak uang dan memaparkan lebih banyak pengguna, dibenarkan oleh bukti dari yang sebelumnya.

**Iterasi berkelanjutan, bukan ban berjalan.** Fase bukan air terjun satu arah. Layanan dalam beta dapat kembali ke alfa untuk fitur sulit; layanan live beriterasi terus-menerus. Nilai model ini ada pada *gerbangnya*, bukan janji bahwa pekerjaan mengalir ke satu arah.

**Agile, waterfall, dan hibrida.** *[Waterfall](https://en.wikipedia.org/wiki/Waterfall_model)* menetapkan lingkup di muka dan berjalan berurutan — cocok hanya di mana persyaratan benar-benar stabil dan dapat diketahui (migrasi pusat data, perubahan regulasi yang diwajibkan). *[Agile](https://en.wikipedia.org/wiki/Agile_software_development)* mengirim dalam inkremen kecil, memeriksa dan menyesuaikan — cocok untuk ketidakpastian layanan yang berhadapan dengan pengguna. *Hibrida* adalah kenyataan jujur kebanyakan program kesehatan besar: tim produk agile beroperasi di dalam bungkus tonggak-dan-pendanaan yang dibutuhkan organisasi dan regulatornya. Cocokkan metode dengan ketidakpastian, bukan dengan mode.

**Penilaian layanan dan gerbang standar.** Pada transisi antarfase — terutama alfa-ke-beta dan sebelum peluncuran publik — layanan NHS dan GOV.UK menghadapi **penilaian layanan**: panel independen yang menguji pekerjaan terhadap poin Service Standard (kebutuhan pengguna, aksesibilitas, keamanan, keandalan, tim, pilihan teknologi). Lulus adalah gerbang untuk membelanjakan lebih banyak dan memaparkan lebih banyak pengguna. Penilaian adalah tinjauan sejawat berbasis bukti, bukan stempel karet.

**Keselamatan klinis dan tata kelola informasi sebagai benang siklus hidup.** DCB0129 (untuk produsen/pemasok) dan DCB0160 (untuk organisasi kesehatan atau perawatan yang menerapkan) mensyaratkan sistem manajemen risiko klinis, **log bahaya**, dan **laporan kasus keselamatan klinis** yang disahkan Petugas Keselamatan Klinis (CSO) bernama dan terlatih. Tata kelola informasi mensyaratkan dasar hukum, DPIA, dan kepatuhan pada prinsip Caldicott. Keduanya adalah *benang* yang berjalan melalui penemuan, alfa, beta, dan live — bukan gerbang di akhir.

**Dekomisioning.** Siklus hidup punya akhir. Mempensiunkan layanan dengan aman — memigrasi atau mengarsipkan data di bawah hukum retensi, mengalihkan pengguna, memberi tahu klinisi, dan melestarikan rekam — adalah fase tersendiri, dan salah satu yang paling terabaikan.

## Praktik terbaik

1. **Gunakan fase sebagai gerbang pengurangan risiko, bukan tonggak kalender.** Biarkan keputusan tiap fase berbunyi "apakah ada cukup bukti untuk membenarkan mengikat tahap berikutnya dari uang dan pengguna?" Fase yang berakhir karena tanggal tiba, bukan karena bukti masuk, telah melewatkan inti gerbang.

2. **Jalin keselamatan klinis sejak alfa, bukan sebelum Live.** Tunjuk Petugas Keselamatan Klinis dan buka log bahaya begitu bentuk solusi ada. Bahaya yang teridentifikasi di alfa murah dirancang keluar; bahaya yang ditemukan saat go-live adalah krisis penghalang peluncuran. Kasus keselamatan matang bersama layanan, sehingga pengesahan DCB0129/0160 adalah ringkasan pekerjaan yang sudah dilakukan, bukan kejar-kejaran.

3. **Mulai DPIA dan pekerjaan IG dalam penemuan dan jaga tetap hidup.** Aliran data, dasar hukum, dan pertimbangan Caldicott membentuk arsitektur, jadi munculkan selagi arsitektur masih lunak. DPIA yang ditulis setelah pembangunan adalah latihan dokumentasi; yang ditulis bersama desain benar-benar mengurangi risiko dan mencegah pengerjaan ulang.

4. **Otomatiskan jalur ke produksi dengan [CI/CD](https://en.wikipedia.org/wiki/CI/CD) dan [DevOps](https://en.wikipedia.org/wiki/DevOps).** [Integrasi berkelanjutan](https://en.wikipedia.org/wiki/Continuous_integration) dan [pengiriman berkelanjutan](https://en.wikipedia.org/wiki/Continuous_delivery) — jalur build, uji, dan penerapan otomatis — memungkinkan tim mengirim perubahan kecil yang dapat dibalik dengan aman dan sering. Dalam ranah kritis-keselamatan, kemampuan menerapkan perbaikan dalam menit dan memutar balik dengan bersih adalah kendali keselamatan itu sendiri. Padukan dengan pemantauan, peringatan, dan [infrastruktur-sebagai-kode](https://en.wikipedia.org/wiki/Infrastructure_as_code) agar layanan live [dapat diamati](https://en.wikipedia.org/wiki/Observability_(software)) dan dapat direproduksi.

5. **Cocokkan metode dengan ketidakpastian.** Pakai agile di mana kebutuhan pengguna tak pasti dan penemuan masih mengajari Anda; terima urutan ala waterfall hanya di mana persyaratan benar-benar tetap dan risiko perubahan rendah. Eksplisitlah soal menjalankan hibrida — tim agile di dalam bungkus program — alih-alih berpura-pura satu metode mengatur segalanya, yang menipu tak seorang pun dan membuat semua frustrasi.

6. **Perlakukan penilaian layanan sebagai alat desain, bukan ujian.** Libatkan peninjau penjaminan, keselamatan klinis, keamanan, dan aksesibilitas *sejak dini* dan sering, agar penilaian formal mengonfirmasi layanan yang sudah dibangun sesuai standar. Tim yang pertama bertemu standar seminggu sebelum penilaian gagal dengan lambat dan mahal; tim yang menginternalisasinya lulus sebagai produk sampingan.

7. **Teruslah beriterasi di Live — dan sumberdayakan.** Layanan tak berhenti membutuhkan tim ketika live. Live adalah tempat penggunaan nyata mengungkap ketimpangan terakhir, kasus tepi klinis yang jarang-tapi-serius, dan celah aksesibilitas. Danai tim produk tetap selama usia operasional layanan (lihat Topik 5.0 — Kerja Berbasis Produk); layanan live tanpa tim adalah utang teknis yang menumpuk risiko klinis.

8. **Rencanakan dekomisioning sebelum Anda membutuhkannya.** Putuskan, selagi membangun, bagaimana layanan akhirnya akan dipensiunkan: retensi dan migrasi data di bawah hukum manajemen rekam, pengalihan pengguna, pemberitahuan klinisi, dan pengarsipan kasus keselamatan klinis dan jejak audit. Pensiun yang tak direncanakan mendamparkan data dan pengguna; yang direncanakan adalah fase terkendali dan dapat diaudit.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Apakah gerbang fase kami benar-benar diatur oleh bukti, atau diam-diam telah menjadi tanggal pada rencana?**
   Seluruh nilai model Penemuan–Alfa–Beta–Live adalah bahwa setiap transisi mengikat lebih banyak uang dan memaparkan lebih banyak pengguna hanya ketika bukti dari fase sebelumnya membenarkan; saat gerbang menyala karena triwulan berakhir dan bukan karena bukti masuk, tanjakan berhenti mengurangi risiko dan menjadi "waterfall berkostum agile". Pertanyaan ini meminta tim menengok dengan jujur beberapa transisi terakhirnya dan bertanya apa yang akan terjadi jika bukti berkata "belum" — adakah ruang untuk menahan, memutar beta kembali ke alfa untuk fitur sulit, atau tanggal go-live tak tergoyahkan secara politik? Ketegangan yang perlu diperdebatkan adalah antara kebutuhan organisasi akan tonggak terbaca dan terjadwal-dewan dan kenyataan bahwa layanan aman bergerak sebesar laju bukti, dan pengiriman hibrida hidup tepat di gesekan itu. Sudut konkret mencakup menamai keputusan dan bukti spesifik yang jatuh tempo di gerbang berikutnya, memeriksa apakah "sprint" benar-benar mengubah lingkup atau sekadar mengikuti rencana tetap, dan bertanya siapa yang berwenang menunda gerbang tanpa risiko karier. Jawaban yang baik dapat menunjuk contoh nyata di mana bukti mengubah rencana, dan dapat mengartikulasikan bukti apa yang akan membenarkan — atau menghalangi — komitmen berikutnya atas uang dan pengguna publik.

2. **Apakah keselamatan klinis dan tata kelola informasi benang hidup melalui setiap fase, atau dokumen yang berniat kami selesaikan sebelum Live?**
   Dalam kesehatan dan perawatan, DPIA dan pekerjaan risiko klinis DCB0129/0160 bukan pengesahan akhir proyek melainkan benang yang harus membentuk arsitektur dan desain sejak alfa, karena bahaya yang dirancang keluar sejak dini murah sementara yang ditemukan saat go-live adalah krisis penghalang peluncuran — atau lebih buruk, tekanan untuk meloloskan kasus keselamatan begitu saja. Pertanyaan ini memunculkan apakah Petugas Keselamatan Klinis bernama dan terlatih serta log bahaya terbuka ada begitu bentuk solusi muncul, dan apakah DPIA dan analisis dasar hukum dimulai dalam penemuan selagi aliran data masih cukup lunak untuk diubah. Trade-off yang layak diperdebatkan adalah hambatan yang terasa dari melakukan ini terus-menerus versus biaya dan risiko klinis jauh lebih besar dari tambal-sulam, terutama bagi tim kecil atau startup di mana belum ada regulator mengawasi tetapi kewajiban DCB0129 melekat pada produsen terlepas dari itu. Pertimbangkan bukti konkret: apakah log bahaya menunjukkan bahaya ditemukan dan dimitigasi di alfa, apakah kasus keselamatan terbaca sebagai ringkasan pekerjaan yang sudah dilakukan, dan apakah DPIA dapat ditelusuri ke keputusan desain nyata? Jawaban jujur membedakan tim yang mematangkan kasus keselamatannya bersama layanan dari tim yang menuju kejar-kejaran dokumentasi sebulan sebelum peluncuran.

3. **Bagaimana layanan ini akan dijalankan di Live dan akhirnya dipensiunkan — dan siapa yang didanai untuk melakukannya?**
   Siklus hidup punya ekor panjang yang rutin kekurangan dana di organisasi: Live adalah tempat penggunaan nyata mengungkap ketimpangan terakhir, kasus tepi klinis yang jarang-tapi-serius, dan celah aksesibilitas, dan ia membutuhkan tim produk tetap, pemantauan, dan penerapan cepat yang dapat dibalik, bukan tim yang bubar saat go-live meninggalkan layanan membusuk dan menumpuk risiko klinis secara senyap. Sama terabaikannya adalah dekomisioning — mempensiunkan layanan di bawah hukum retensi rekam, memigrasi atau mengarsipkan data, mengalihkan pengguna, memberi tahu klinisi, dan melestarikan log bahaya dan jejak audit — yang untuk sistem nasional adalah program besar tersendiri, bukan renungan belakangan ketika pengganti tiba. Ketegangan yang perlu diperdebatkan adalah siklus pendanaan tahunan dan tekanan menyatakan proyek "selesai" saat peluncuran versus kepemilikan seumur hidup yang sebenarnya dibutuhkan layanan aman. Sudut berguna mencakup apakah jalur CI/CD dengan pemantauan dan rollback cepat diperlakukan sebagai kendali keselamatan live, apakah rotasi siaga dan anggaran iterasi bertahan setelah perayaan go-live, dan apakah rencana keluar ditulis saat membangun alih-alih diimprovisasi dalam panik. Jawaban yang baik menamai siapa yang memiliki layanan sepanjang usia operasionalnya dan menggambarkan pensiun yang terkendali dan dapat diaudit alih-alih harapan bahwa seseorang akan menanganinya nanti.

4. **Kapan terakhir kali kegagalan prototipe menghentikan kami — dan apakah kami masih membangun hal untuk dibuang?**
   Alfa ada untuk menuntaskan asumsi paling berisiko dengan murah, yang berarti prototipe sekali-pakai yang gagal telah melakukan tugasnya: ia telah membeli pelajaran mahal sebelum uang produksi dan pasien nyata diikat. Pertanyaan ini menyelidiki apakah tim benar-benar memperlakukan alfa sebagai pembelajaran sekali-pakai atau diam-diam tergelincir memoles prototipe pertamanya menjadi produk akhir karena membuang kode terasa boros — jebakan biaya-tenggelam yang mengubah fase pengurangan risiko menjadi komitmen mahal yang dibuat buta. Ketegangan yang layak dimunculkan adalah tekanan untuk "punya sesuatu untuk ditunjukkan" dan memakai ulang setiap baris yang ditulis melawan disiplin membuktikan solusi *dapat* berfungsi sebelum membangun yang nyata di infrastruktur produksi. Sudut konkret mencakup bertanya asumsi mana yang benar-benar diuji alfa terakhir, apakah ada prototipe yang pernah ditinggalkan atas dasar bukti, dan apakah build beta privat memakai ulang kode sekali-pakai yang seharusnya ditulis ulang ke standar produksi. Jawaban jujur dapat menunjuk asumsi spesifik yang dibunuh atau dikonfirmasi prototipe, dan dapat membedakan artefak pembelajaran yang bersedia dibuang tim dari kode terjamin yang kini dijalankannya di Live.

5. **Apakah kami menjalankan satu hibrida yang jujur, atau beberapa metode terselubung yang diam-diam saling bertentangan?**
   Kebanyakan program kesehatan besar benar-benar hibrida — tim produk agile beroperasi di dalam bungkus tonggak-dan-pendanaan yang dibutuhkan organisasi dan regulatornya — dan kegagalannya bukan hibrida itu sendiri melainkan berpura-pura ia agile murni atau waterfall murni, sehingga kedua logika bertabrakan tak terkelola di setiap gerbang. Pertanyaan ini meminta tim menamai di mana komitmen tetap dan berurutan sebenarnya berada (tahap pendanaan, tonggak regulasi, pembekuan integrasi) dan di mana iterasi sejati terjadi, alih-alih membiarkan "agile" dan "rencana" masing-masing mengklaim seluruh program dan membuat semua frustrasi. Trade-off yang perlu diperdebatkan adalah kebutuhan sah organisasi akan tonggak yang dapat diprediksi dan belanja yang dapat diaudit melawan kebutuhan tim pengiriman untuk mengubah lingkup berdasarkan bukti, dan langkah jujurnya adalah membuat sambungan eksplisit agar keduanya dapat direncanakan. Sudut berguna mencakup apakah pemrioritasan ulang backlog pernah bertahan bersentuhan dengan rencana program, apakah pemasok dikontrak untuk lingkup tetap sementara diminta bekerja iteratif, dan apakah pelaporan yang dilihat dewan sesuai cara pekerjaan benar-benar dilakukan. Jawaban yang baik menggambarkan hibrida yang dirancang sengaja dengan titik tetap bernama dan ruang fleksibel bernama, bukan kekusutan di mana metode diklaim demi penampilan.

6. **Seberapa baik kami tahu apa yang sebenarnya dilakukan layanan live kepada penggunanya saat ini — dan akankah kami menyadari bahaya sebelum mereka melaporkannya?**
   Layanan kesehatan live hanya seaman observabilitasnya: pemantauan, peringatan, dan naluri keselamatan klinis yang mengubah metrik menjadi bahaya menentukan beda antara menangkap cacat data basi dalam menit dan mengetahuinya dari laporan insiden berminggu-minggu kemudian. Pertanyaan ini menelaah apakah tim dapat melihat layanan di produksi — laju galat, kegagalan integrasi, putus-keluar aksesibilitas, celah kesetaraan yang hanya diungkap penggunaan nyata — dan apakah ada yang mengawasi dasbor dengan risiko klinis di benak, bukan hanya waktu aktif infrastruktur. Ketegangannya adalah biaya dan disiplin observabilitas dan siaga yang layak melawan asumsi diam bahwa "tak ada kabar adalah kabar baik" begitu layanan live, yang dalam ranah kritis-keselamatan adalah cara bahaya senyap menumpuk. Sudut konkret mencakup apakah log bahaya diperbarui dari insiden live, apakah peringatan dipetakan ke dampak klinis dan bukan hanya kesehatan server, dan apakah rilis buruk dapat dideteksi dan diputar balik sebelum menjangkau banyak pasien. Jawaban jujur menggambarkan sinyal spesifik yang diawasi tim, insiden nyata yang ditangkap (atau terlewat) pemantauan, dan bagaimana bukti live menyuplai iterasi berikutnya.

## Dalam praktik: contoh kesehatan & perawatan

Sebuah trust NHS komunitas mengganti sistem kertas-dan-spreadsheet warisan untuk penjadwalan kunjungan perawat distrik. Keluar dari penemuan (Topik 3.4), tim memasuki **alfa** dan membangun dua prototipe sekali-pakai untuk menguji asumsi paling berisiko: bahwa perawat akan memakai ponsel di rumah pasien, dan bahwa jadwal dapat berintegrasi dengan rekam pasien elektronik. Seorang Petugas Keselamatan Klinis ditunjuk pada hari pertama alfa dan membuka log bahaya; bahaya awal — jadwal basi yang menampilkan kunjungan yang sudah diselesaikan rekan — mendorong keputusan desain untuk menampilkan status sinkronisasi waktu nyata. DPIA, yang dimulai dalam penemuan, menandai bahwa data lokasi pekerja yang sendirian membutuhkan dasar hukum dan batas retensi yang terdefinisi.

Pada **penilaian layanan alfa-ke-beta**, panel independen menyelidiki aksesibilitas (perawat dengan gangguan penglihatan), keamanan, dan penalaran tim. Layanan lulus dengan tindakan. Dalam **beta privat**, sepuluh perawat memakai sistem nyata di infrastruktur produksi; jalur CI/CD memungkinkan tim mengirim harian dan memutar balik rilis buruk dalam kurang dari sepuluh menit. Penggunaan mengungkap isu kesetaraan — staf agensi tanpa perangkat trust — yang berujung pada cadangan berbasis peramban. **Beta publik** meluas ke tiga wilayah; laporan kasus keselamatan klinis diselesaikan dan disahkan di bawah DCB0160 sebelum peluncuran lebih luas.

Layanan masuk **Live** dengan tim produk tetap, dasbor pemantauan, dan rotasi siaga. Delapan belas bulan kemudian, ketika trust mengadopsi platform regional, jadwal di-**dekomisioning** sesuai rencana: data dimigrasi di bawah jadwal retensi, perawat dilatih ulang dan dialihkan, dan log bahaya serta kasus keselamatan diarsipkan untuk audit. Setiap transisi adalah keputusan yang didukung bukti, bukan tanggal pada bagan Gantt.

## Lensa sektor

### Startup

Siklus hidup startup dipadatkan dan sebagian besar diatur sendiri: tak ada panel penilaian layanan independen, sehingga disiplin gerbang Alfa–Beta–Live harus dikenakan sendiri atau runtuh menjadi "kirim terus-menerus dan berharap". Keunggulannya adalah tim kecil dapat menjalankan CI/CD sejati sejak hari pertama dan beriterasi lebih cepat daripada badan besar mana pun. Bahayanya diam-diam menjatuhkan benang keselamatan klinis dan DPIA karena belum ada regulator mengawasi — kesalahan fatal dalam kesehatan, di mana kewajiban DCB0129 melekat pada produsen terlepas dari ukuran perusahaan, dan satu bahaya tak terkelola dapat mengakhiri produk sekaligus perusahaan. Startup harus mengadopsi maksud model fase — bukti sebelum paparan — bahkan tanpa upacaranya, menunjuk Petugas Keselamatan Klinis (sering paruh waktu) begitu bentuk solusi ada.

### Usaha kecil

Penyedia kecil yang mapan — praktik dokter umum, apotek komunitas, panti jompo, atau klinik satu lokasi — biasanya bertemu siklus hidup sebagai *penerap*, bukan pembangun: ia membeli atau mengonfigurasi sistem pemasok, sehingga pengesahan penerapan DCB0160 dan DPIA lokal jatuh kepadanya meski tanpa tim digital internal. Fase tetap berlaku, tetapi dipadatkan dan dialihdayakan: "alfa" adalah uji coba terawasi pada beberapa pasien nyata, "beta" adalah peluncuran bertahap di seluruh praktik, dan Live adalah bisnis-seperti-biasa dengan pembaruan pemasok datang terus-menerus dan sebagian besar di luar kendali praktik. Organisasi harus menamai Petugas Keselamatan Klinis (sering mitra klinis yang mengambil peran di atas pekerjaan hariannya) dan memelihara log bahaya untuk bagaimana sistem *dipakai* secara lokal, karena pekerjaan DCB0129 produsen tidak mencakup risiko spesifik penerapan. Dengan kas ketat dan tanpa TI khusus, disiplin yang realistis adalah bersandar pada penjaminan pemasok sambil memiliki beberapa keputusan yang hanya dapat dibuat pengetahuan lokal — siapa yang dilatih, apa cadangannya ketika sistem mati, dan bagaimana data pasien mengalir di lingkungan spesifik ini.

### Perusahaan besar

Trust NHS atau pemasok besar menjalankan siklus hidup dalam bentuk paling penuh dan terjamin: penilaian layanan formal, Petugas Keselamatan Klinis bernama, pengesahan penerapan DCB0160, dewan penasihat perubahan, dan siklus pendanaan tahunan yang harus dimuati pekerjaan agile. Tantangan khasnya adalah hibrida — tim pengiriman agile beroperasi dalam bungkus program-dan-tonggak yang dibutuhkan organisasi dan auditornya — dan kegagalan klasiknya adalah "waterfall berkostum agile", di mana gerbang diam-diam menjadi tanggal kalender. Perusahaan punya sumber daya untuk menjalankan CI/CD, observabilitas, dan tim produk tetap dengan layak, namun kelembaman organisasi dan integrasi warisan sering memperlambat penerapan sampai merangkak. Akuntabilitasnya luas dan radius ledakannya besar, sehingga tanjakan bertahap dari beta privat ke live bukan kehati-hatian opsional melainkan kendali risiko esensial.

### Pemerintah

Badan nasional mengirim di bawah Service Standard penuh, penilaian layanan yang dipublikasikan, kendali belanja, dan pengawasan parlemen, sehingga setiap gerbang fase juga titik akuntabilitas publik. Siklus hidup di sini panjang dan paparannya luas — layanan live seluruh-NHS dapat menyentuh jutaan orang — yang menaikkan taruhan pada tanjakan bertahap, penjaminan keselamatan klinis, dan dekomisioning sistem warisan yang digantikan. Aturan pengadaan dan penyelesaian pendanaan multitahun membentuk apa arti "agile" secara praktis, dan mempensiunkan sistem nasional (dengan rekam berdekade dan kewajiban retensi undang-undangnya) adalah program besar tersendiri. Trade-off-nya penjaminan versus kecepatan: pengiriman pemerintah sangat bergerbang, yang melindungi keselamatan dan uang publik tetapi menuntut upaya sengaja agar tim terus beriterasi dan tidak kembali ke desain-besar-di-muka.

## Mode kegagalan umum

- **Waterfall berkostum agile.** Tim menjalankan "sprint" tetapi lingkup, tanggal, dan desain semua ditetapkan di muka; iterasi adalah teater. Penawar: biarkan bukti di setiap gerbang benar-benar mengubah rencana.
- **Keselamatan dan IG ditempelkan di akhir.** Kasus keselamatan klinis dan DPIA ditulis sebulan sebelum go-live, menghalangi peluncuran atau, lebih buruk, diloloskan di bawah tekanan. Penawar: buka log bahaya dan DPIA di alfa dan matangkan terus-menerus.
- **Peluncuran big-bang.** Layanan melewati beta privat/publik dan langsung ke peluncuran penuh, memaparkan setiap pengguna pada perangkat lunak yang belum terbukti. Penawar: pakai tanjakan bertahap; tumbuhkan paparan bersama bukti.
- **Layanan Live yang ditinggalkan.** Tim pengiriman bubar saat go-live; layanan membusuk, dan risiko klinis menumpuk senyap. Penawar: danai tim produk tetap selama usia operasional.
- **Menjejalkan penilaian.** Standar diabaikan sampai penilaian mengancam, lalu dipenuhi secara dangkal. Penawar: libatkan peninjau penjaminan dan klinis secara berkelanjutan.
- **Tanpa rencana keluar.** Layanan dipensiunkan dalam panik ketika penggantinya tiba, mendamparkan data dan pengguna. Penawar: rencanakan dekomisioning sebagai fase kelas satu.

## Model kematangan

| Dimensi | Inisiasi | Pengembangan | Standardisasi | Pengelolaan | Orkestrasi |
|---|---|---|---|---|---|
| Disiplin fase | Ad hoc; fase dilewati atau diganti nama | Fase bernama tetapi gerbang digerakkan kalender | Gerbang berbasis bukti mengatur belanja dan paparan | Keputusan gerbang dilacak terhadap kriteria terdefinisi; belanja dan paparan dilaporkan dan dijamin | Pendanaan bertahap seluruh portofolio; layanan lemah dihentikan dini |
| Kecocokan metode | Satu metode dipaksakan pada semua pekerjaan | Agile dipakai, tetapi dalam lingkup tetap kaku | Metode dicocokkan dengan ketidakpastian; hibrida dibuat eksplisit | Kecocokan metode ditinjau terhadap metrik pengiriman; sambungan hibrida diatur dan diukur | Tim menyesuaikan metode terus-menerus saat ketidakpastian berubah |
| Keselamatan klinis & IG | Ditangani setelah pembangunan, jika sama sekali | Diangkat terlambat; CSO/DPIA kejar-kejaran peluncuran | Log bahaya, kasus keselamatan, DPIA dipelihara sejak alfa | Bahaya dan kendali IG dilacak dengan KPI dan dijamin terhadap target | Bukti keselamatan dan IG membentuk desain; pengesahan rutin |
| CI/CD & operasi | Penerapan manual, jarang, berisiko | Sebagian otomatisasi; rilis lambat dan ditakuti | Jalur otomatis, pemantauan, rollback cepat | Metrik penerapan dan keandalan (DORA) dilacak dan dikelola terhadap target | Pengiriman berkelanjutan sebagai kendali keselamatan; observabilitas kuat |
| Live & pensiun | Tak ada tim tetap; tak ada rencana keluar | Tim dipertahankan ad hoc; pensiun diimprovisasi | Tim produk berdana; dekomisioning direncanakan | Kinerja live dan kesiapan pensiun diukur dan diatur | Kepemilikan seumur hidup; pensiun terkendali dan diaudit |

## Daftar periksa

- [ ] Layanan memiliki fase saat ini yang eksplisit (Penemuan / Alfa / Beta / Live) dan keputusan berikutnya yang bernama.
- [ ] Transisi fase digerbangi oleh bukti, bukan tanggal.
- [ ] Petugas Keselamatan Klinis ditunjuk dan log bahaya terbuka (DCB0129/0160) sejak alfa.
- [ ] DPIA dan penilaian dasar hukum (Caldicott, UK GDPR) dimulai dalam penemuan dan dijaga mutakhir.
- [ ] Metode pengiriman dicocokkan dengan tingkat ketidakpastian, dan pengaturan hibrida apa pun eksplisit.
- [ ] Penilaian layanan direncanakan, dan peninjau penjaminan/keamanan/aksesibilitas dilibatkan sejak dini.
- [ ] Jalur CI/CD dengan pemantauan dan rollback cepat ada sebelum beta publik.
- [ ] Layanan dipaparkan kepada pengguna dalam tanjakan bertahap (beta privat → beta publik → live), bukan big-bang.
- [ ] Tim produk tetap didanai selama usia operasional layanan (lihat Topik 5.0).
- [ ] Rencana dekomisioning mencakup retensi/migrasi data, pengalihan pengguna, dan pengarsipan rekam keselamatan dan audit.

## Sumber utama

- GOV.UK Service Manual — fase proyek agile (Penemuan, Alfa, Beta, Live) dan Government Service Standard.
- NHS England — NHS Service Standard dan NHS Digital Service Manual; penilaian layanan NHS.
- NHS England Digital — DCB0129 (Clinical Risk Management: its Application in the Manufacture of Health IT Systems) dan DCB0160 (its Application in the Deployment and Use of Health IT Systems).
- NHS England — penjaminan keselamatan klinis digital; peran Petugas Keselamatan Klinis, log bahaya, dan laporan kasus keselamatan klinis.
- NHS England — Digital Technology Assessment Criteria (DTAC).
- Prinsip Caldicott Inggris; Data Protection Act 2018 / UK GDPR dan penilaian dampak perlindungan data.
- NICE — Evidence Standards Framework for Digital Health Technologies.
- Praktik DevOps dan pengiriman berkelanjutan (misalnya kapabilitas DORA: integrasi berkelanjutan, otomatisasi penerapan, pemantauan); panduan GOV.UK Service Manual tentang pengiriman berkelanjutan dan pengoperasian layanan.

## Referensi

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
