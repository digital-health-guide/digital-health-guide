# Topik 1.3 — Keputusan Berbasis Bukti

**Dalam satu kalimat:** Pengambilan keputusan berbasis bukti berarti memutuskan apa yang dibangun, dibeli, dan diskalakan berdasarkan kekuatan bukti terbaik yang tersedia — klinis dan pengiriman — secara proporsional terhadap risiko, dan mencatat alasannya agar bertahan melampaui orang yang membuatnya.

## Mengapa ini penting dalam kesehatan dan perawatan

Di kebanyakan sektor, keputusan produk yang buruk merugikan uang. Dalam kesehatan dan perawatan, ia dapat merugikan keselamatan, kesetaraan, dan kepercayaan — dan dibuat dengan dana publik di bawah kewajiban hukum. Keputusan untuk menerapkan alat diagnostik digital yang tak pernah dievaluasi bukan spekulasi komersial; itu risiko klinis. Ini menaikkan standar bukti jauh di atas "demonya tampak bagus."

Ranah ini juga khas karena menuntut **dua jenis bukti sekaligus**. *Bukti klinis* menjawab "apakah teknologi ini berfungsi, dan aman serta efektif bagi pasien?" *Bukti pengiriman* menjawab "apakah kita membangun hal yang tepat dengan baik, dan apakah ia diadopsi dan digunakan?" Layanan bisa sehat secara klinis tetapi gagal dalam pengiriman (tak ada yang memakainya), atau berhasil dalam pengiriman tetapi belum terbukti secara klinis (dipakai luas, tak pernah divalidasi). Pemimpin senior harus menuntut keduanya dan tak pernah membiarkan salah satunya menyamar sebagai yang lain. Dan karena keputusan kesehatan menarik pengawasan — dari regulator, publik, dan klinisi — *catatan* mengapa Anda memutuskan sama pentingnya dengan keputusannya.

## Konsep inti

**[Hierarki bukti](https://en.wikipedia.org/wiki/Hierarchy_of_evidence).** [Kedokteran berbasis bukti](https://en.wikipedia.org/wiki/Evidence-based_medicine) meranking rancangan studi menurut seberapa baik mereka mengendalikan bias: di puncak, [tinjauan sistematis](https://en.wikipedia.org/wiki/Systematic_review) dan [meta-analisis](https://en.wikipedia.org/wiki/Meta-analysis) dari [uji klinis terkontrol acak](https://en.wikipedia.org/wiki/Randomized_controlled_trial) (RCT); lalu RCT individual; lalu studi kohort dan kasus-kontrol; lalu seri kasus; dan di dasar, opini ahli dan anekdot. Hierarki adalah panduan, bukan jaket pengekang — tetapi ia mendisiplinkan Anda untuk menyadari ketika suatu klaim bertumpu pada anekdot yang berdandan sebagai bukti.

**Evidence Standards Framework (ESF) NICE untuk teknologi kesehatan digital.** NICE, bersama NHS England dan mitra, menciptakan ESF untuk menetapkan tingkat bukti yang dibutuhkan teknologi kesehatan digital (DHT), proporsional terhadap fungsi dan risiko yang dibawanya. Ia menjenjangkan DHT menurut potensi risiko — dari layanan sistem sederhana, melalui alat yang menginformasikan atau menggerakkan perawatan, hingga yang langsung mendiagnosis atau mengobati — dan menetapkan bukti efektivitas klinis dan ekonomi yang diharapkan pada setiap jenjang. Semakin tinggi risiko klinis, semakin kuat bukti yang dibutuhkan. ESF adalah titik acuan bagi komisioner dan pengembang yang memutuskan apakah DHT siap.

**Data dunia nyata dan [bukti dunia nyata](https://en.wikipedia.org/wiki/Real_world_evidence).** Data dunia nyata (RWD) berasal dari perawatan rutin — rekam kesehatan elektronik, registri, hasil yang dilaporkan pasien, telemetri perangkat — bukan dari uji terkontrol. Bila dianalisis dengan baik (melalui studi observasional prospektif, uji pragmatis, atau analisis EHR yang cermat) ia menjadi bukti dunia nyata (RWE) tentang bagaimana teknologi bekerja dalam praktik. RWE penting bagi teknologi yang belajar atau berubah (AI, perangkat yang dikenakan), di mana uji sekali jalan tak dapat menangkap perilaku berkelanjutan, tetapi membawa risiko perancu yang harus ditangani dengan jujur.

**Bukti klinis vs bukti pengiriman.** Jaga keduanya pada sumbu terpisah. Bukti klinis memakai hierarki di atas dan ESF: kemanjuran, keselamatan, efektivitas. Bukti pengiriman memakai analitik produk dan layanan: apakah layanan dapat digunakan, diadopsi, menyelesaikan tugas pengguna, mengurangi permintaan akibat kegagalan? Keduanya dibutuhkan; mencampurkannya adalah kesalahan klasik (angka penggunaan tinggi bukan bukti klinis).

**Rancangan evaluasi.** **[Model logika](https://en.wikipedia.org/wiki/Logic_model)** (atau [teori perubahan](https://en.wikipedia.org/wiki/Theory_of_change)) membuat eksplisit bagaimana masukan dan aktivitas dimaksudkan menghasilkan keluaran dan hasil — ia peta yang diuji setiap evaluasi. **RCT** memberi jawaban kausal terkuat tetapi lambat, mahal, dan kadang tidak praktis atau tidak etis untuk layanan yang bergerak cepat. **Evaluasi pragmatis** — uji pragmatis, [deret waktu terputus](https://en.wikipedia.org/wiki/Interrupted_time_series), sebelum/sesudah dengan kontrol, evaluasi layanan metode campuran — menukar sebagian kepastian dengan kecepatan dan relevansi dunia nyata. Pilih rancangan yang proporsional terhadap risiko dan keputusan yang dipertaruhkan.

**[Uji A/B](https://en.wikipedia.org/wiki/A/B_testing) dan analitik.** Untuk pertanyaan sisi-pengiriman berisiko lebih rendah (kata-kata mana yang meningkatkan kehadiran janji temu? alur mana yang mengurangi putus di tengah jalan?), eksperimen daring terkontrol (uji A/B) memberi bukti pengiriman yang cepat dan kausal. Ia ampuh untuk optimasi tetapi tak boleh dipakai membuat perubahan klinis yang belum dinilai, dan harus menghormati batas persetujuan dan tata kelola informasi.

**Keputusan HiPPO.** "HiPPO" — Highest-Paid Person's Opinion (opini orang bergaji tertinggi) — menamai kegagalan ketika senioritas mengalahkan bukti. Budaya berbasis bukti membuatnya aman dan normal untuk berkata "apa yang ditunjukkan data?" kepada siapa pun di ruangan, dan memperlakukan firasat senior sebagai hipotesis untuk diuji, bukan kesimpulan.

**Catatan keputusan.** Catatan keputusan (atau log keputusan / [catatan keputusan arsitektur](https://en.wikipedia.org/wiki/Architectural_decision)) mencatat secara singkat: keputusan, opsi yang dipertimbangkan, bukti yang ditimbang, siapa yang memutuskan, dan kapan. Ia membuat penalaran dapat diaudit, bertahan melampaui pergantian staf, dan mencegah argumen yang sama diputar ulang setiap triwulan.

## Praktik terbaik

1. **Sesuaikan kekuatan bukti dengan tingkat risiko.** Gunakan jenjang ESF NICE sebagai tolok ukur: alat sistem berisiko rendah membutuhkan bukti ringan; alat yang mendiagnosis atau menggerakkan pengobatan membutuhkan bukti efektivitas klinis berkualitas tinggi. Proporsionalitas memungkinkan Anda bergerak cepat pada yang aman dan lambat pada yang berbahaya, alih-alih menerapkan satu standar untuk semuanya.

2. **Tuntut bukti klinis dan pengiriman, dan jangan pernah mencampurkannya.** Untuk setiap investasi signifikan, ajukan dua pertanyaan terpisah — "apakah ini efektif dan aman secara klinis?" dan "apakah ini dapat digunakan dan diadopsi?" — dan minta bukti untuk masing-masing. Metrik adopsi bukan pengganti validasi klinis, dan uji positif bukan jaminan penggunaan dunia nyata.

3. **Mulai setiap inisiatif dengan model logika.** Sebelum membangun, tuliskan bagaimana Anda yakin intervensi akan menghasilkan hasil yang Anda inginkan. Ini menyingkap asumsi yang belum diuji sejak dini, mendefinisikan metrik yang penting, dan memberi evaluasi Anda kelak sesuatu yang konkret untuk diuji.

4. **Gunakan bukti dunia nyata untuk teknologi yang belajar atau bertahan.** Untuk AI, algoritma, dan layanan berumur panjang, lengkapi atau ikuti uji awal dengan pemantauan terstruktur atas data rutin — rancangan observasional prospektif, evaluasi pragmatis — agar Anda tahu bagaimana kinerja bertahan dalam praktik dan dapat menangkap penyimpangan (drift).

5. **Bereksperimenlah pada pertanyaan pengiriman; evaluasilah yang klinis.** Gunakan uji A/B dan analitik dengan leluasa untuk optimasi pengiriman (kata-kata, alur, prompt), dalam batas tata kelola informasi dan persetujuan. Cadangkan evaluasi formal (uji, studi pragmatis) untuk pertanyaan efek klinis. Arahkan setiap pertanyaan ke metode yang tepat.

6. **Matikan keputusan HiPPO secara budaya, bukan hanya prosedural.** Jadikan secara eksplisit dapat diterima untuk meminta bukti dari pembuat keputusan mana pun, bingkai pandangan senior sebagai hipotesis, dan berkomitmen lebih dulu pada bukti apa yang akan mengubah pikiran Anda. Tim yang dapat menantang senioritas dengan aman membuat keputusan yang lebih baik.

7. **Catat keputusan dan buktinya.** Simpan log keputusan yang ringan untuk setiap pilihan signifikan — apa, mengapa, bukti apa, siapa, kapan. Ini menciptakan keterauditan bagi regulator dan publik, mencegah litigasi ulang tanpa akhir, dan menjaga memori kelembagaan di tengah pergantian staf.

8. **Perhatikan etika data.** Kerja bukti memakai data pasien; perlakukan keabsahan hukum, persetujuan, proporsionalitas, dan keadilan sebagai kendala desain. Waspadai dataset bias yang mengukuhkan ketimpangan, hormati kewajiban kerahasiaan, dan pastikan praktik bukti Anda sendiri akan bertahan dari pengawasan publik.

## Pertanyaan untuk didiskusikan dengan tim Anda

1. **Untuk keputusan terpenting kami baru-baru ini, dapatkah kami menunjuk baik bukti klinis maupun bukti pengiriman — tetap terpisah — atau salah satunya diam-diam menggantikan yang lain?**
   Pertanyaan ini menguji penegasan topik bahwa bukti klinis ("apakah berfungsi dan aman?") dan bukti pengiriman ("apakah dapat digunakan dan diadopsi?") berada pada sumbu terpisah dan bahwa mencampurkannya adalah kesalahan klasik yang berbahaya. Ini penting karena layanan bisa sehat secara klinis namun tak terpakai, atau banyak dipakai namun tak tervalidasi secara klinis, dan dalam kesehatan dan perawatan menganggap angka penggunaan tinggi sebagai bukti klinis dapat membahayakan pasien sambil tampak sukses. Ketegangan yang perlu diangkat adalah bahwa bukti pengiriman cepat, murah, dan menyanjung — dasbor analitik cepat penuh — sedangkan bukti klinis lambat, mahal, dan sering tak konklusif, sehingga ada tekanan terus-menerus untuk membiarkan metrik adopsi memikul argumen. Ambil makalah dewan atau kasus investasi nyata dan auditlah: apakah kedua jenis bukti dipisahkan, apakah masing-masing sungguh ada, dan apakah klaim klinis bertumpu pada sesuatu di atas demo vendor atau studi satu lokasi? Jawaban yang baik dan jujur mengidentifikasi keputusan spesifik, mengakui di mana satu jenis bukti tipis atau tidak ada, dan berkomitmen menuntut keduanya secara eksplisit dan terpisah dalam pilihan signifikan di masa depan alih-alih membiarkan angka penggunaan yang kuat menenangkan semua orang.

2. **Seberapa proporsional sebenarnya standar bukti kami — apakah kami menuntut uji standar emas untuk perubahan berisiko rendah sementara meloloskan alat berisiko lebih tinggi dengan bukti tipis?**
   Topik ini membingkai proporsionalitas melalui jenjang ESF NICE: bukti ringan untuk alat sistem berisiko rendah, bukti efektivitas klinis berkualitas tinggi untuk alat yang mendiagnosis atau menggerakkan pengobatan, sehingga pertanyaan ini memeriksa apakah organisasi Anda benar-benar mengkalibrasi standar terhadap risiko atau menerapkan satu standar tumpul. Ini penting karena kedua arah kegagalan mahal — kelumpuhan analisis menahan perubahan konten berisiko rendah yang berguna di balik RCT yang tak perlu, sementara alat AI yang menginformasikan keputusan klinis yang kurang diteliti lolos karena demo yang memikat — dan masing-masing merusak kepercayaan pada budaya bukti. Trade-off yang perlu diperdebatkan adalah bahwa proporsionalitas membutuhkan pertimbangan dan keyakinan untuk membelanya, yang lebih sulit daripada aturan seragam; "semuanya butuh uji" atau "kalau digital, pilot saja" lebih mudah diadministrasikan tetapi keliru. Telaah dua atau tiga teknologi saat ini atau baru-baru ini, tempatkan masing-masing pada jenjang ESF bersama-sama, dan periksa apakah bukti yang Anda tuntut sesuai jenjang atau digerakkan oleh siapa yang mengampanyekannya. Jawaban yang jujur menunjukkan tim dapat menempatkan jenjang risiko teknologi, mengakui di mana standar salah ditetapkan ke arah mana pun, dan memperlakukan proporsionalitas sebagai standar eksplisit yang dapat dibela, bukan naluri.

3. **Seberapa aman, secara budaya, untuk menanyakan kepada orang paling senior di ruangan "apa buktinya?" — dan kapan terakhir kali kami memperlakukan firasat pemimpin sebagai hipotesis untuk diuji, bukan keputusan?**
   Pertanyaan ini menghadapi mode kegagalan HiPPO secara langsung, ketika opini orang bergaji tertinggi mengalahkan bukti, dan menguji apakah komitmen Anda yang dinyatakan pada bukti bertahan menghadapi hierarki dan demo vendor yang mengesankan seorang direktur yang dihormati. Ini penting karena dalam kesehatan dan perawatan keputusan berbasis demo untuk menerapkan alat yang belum dinilai bukan spekulasi komersial melainkan risiko keselamatan klinis dan uang publik, dan saat tantangan menjadi tidak aman adalah saat bukti berhenti mengatur keputusan. Ketegangan nyatanya adalah keamanan psikologis tak dapat diwajibkan oleh kebijakan; ia dibangun oleh pemimpin senior yang secara terlihat mengundang tantangan, membingkai pandangan mereka sendiri sebagai hipotesis, dan berkomitmen lebih dulu pada bukti apa yang akan mengubah pikiran mereka — perilaku yang terasa membuka diri dan mudah dilewatkan di bawah tekanan waktu. Dasarkan percakapan pada hal spesifik: ingat keputusan baru-baru ini yang lebih digerakkan senioritas atau antusiasme daripada data, dan tanyakan apakah ada yang menantangnya, apakah itu terasa aman, dan apa yang akan dicatat catatan keputusan. Jawaban yang baik terus terang tentang di mana hierarki kini menang, menyebut perilaku konkret yang akan diadopsi pemimpin agar tantangan menjadi normal, dan memadukan komitmen budaya dengan log keputusan ringan yang membuat penalaran dapat diaudit dan mencegah argumen yang sama diputar ulang.

4. **Untuk teknologi yang belajar atau bertahan — AI, algoritma, layanan berumur panjang kami — bagaimana kami benar-benar tahu jika kinerjanya telah menyimpang sejak kami memvalidasinya, dan siapa yang mengawasi?**
   Topik ini eksplisit bahwa uji sekali jalan tak dapat menangkap perilaku berkelanjutan teknologi yang belajar atau berubah, dan bahwa "evaluasi sekali selesai" adalah mode kegagalan bernama yang penawarnya adalah bukti dunia nyata dan pemantauan berkelanjutan. Pertanyaan ini penting karena bahayanya senyap: model pemburukan AI atau algoritma triase dapat menurun saat campuran kasus, praktik pengodean, atau saluran data hulu bergeser, dan tidak seperti fitur yang rusak tak ada yang jelas gagal — alat terus menghasilkan keluaran yang tampak masuk akal sementara laju peringatan palsu atau kelewatannya diam-diam memburuk. Ketegangan yang perlu diangkat adalah bahwa pemantauan tidak menarik dan tak didanai dibanding kegembiraan penerapan: begitu kasus bisnis ditandatangani dan manfaat dibukukan, sedikit organisasi menyumberdayakan kerja observasional prospektif, metrik drift, atau pemilik bernama yang menelaahnya. Pilih satu alat AI atau algoritmik yang hidup dan telusuri kehidupan pasca-penerapannya secara konkret — data rutin apa yang diawasi, terhadap garis dasar apa, dengan irama apa, dan siapa yang akan mengeskalasi penurunan dan kepada siapa. Jawaban jujur mengakui di mana validasi berhenti saat go-live, membedakan alat yang benar-benar membutuhkan pengawasan berkelanjutan dari yang tidak, dan berkomitmen pada pemilik bernama, metrik, dan irama tinjauan alih-alih niat samar untuk "tetap mengawasi."

5. **Ketika keputusan yang kami buat hari ini dipertanyakan dua tahun lagi — oleh direktur baru, regulator, atau publik — apa yang sebenarnya akan ditunjukkan catatan tertulis, dan akankah ia bertahan dari pemeriksaan itu?**
   Topik ini memperlakukan catatan keputusan sebagai infrastruktur inti: log ringan tentang keputusan, opsi, bukti yang ditimbang, siapa yang memutuskan dan kapan, dihargai karena membuat penalaran dapat diaudit, bertahan melampaui pergantian staf, dan menghentikan argumen yang sama diputar ulang setiap triwulan. Pertanyaan ini penting karena keputusan kesehatan dan perawatan menarik pengawasan regulator, parlementer, dan publik dengan cara yang jarang dialami keputusan komersial, dan contoh kerja dalam topik ini berporos pada hal itu — dua tahun kemudian, direktur baru mempertanyakan alat yang diterapkan dan "catatan menjawabnya". Ketegangan nyatanya antara biaya kecil per keputusan dari disiplin ini dan tekanan kronis untuk melewatkannya: menuliskan mengapa Anda memutuskan terasa birokratis saat itu, dan orang yang paling membutuhkan catatan adalah staf mendatang yang tidak ada di ruangan untuk menuntutnya. Uji terhadap kenyataan dengan mencoba merekonstruksi penalaran di balik pilihan signifikan yang dibuat dua belas atau delapan belas bulan lalu — dapatkah Anda menemukan bukti apa yang ditimbang dan alternatif apa yang ditolak, atau hanya bahwa keputusan dibuat? Jawaban yang baik menghadapi apakah catatan benar-benar disimpan untuk keputusan signifikan atau hanya untuk yang mudah, apakah mencatat bukti dan opsi alih-alih hanya kesimpulan, dan apakah ada yang pernah membacanya kembali — karena log yang tak dibaca dan hanya berisi kesimpulan adalah teater audit, bukan memori kelembagaan.

6. **Data siapa yang melatih dan memvalidasi bukti kami, dan yakinkah kami itu tak akan mengukuhkan ketimpangan — atau kami memperlakukan etika data sebagai formulir untuk ditandatangani, bukan kendala desain?**
   Topik ini menegaskan bahwa kerja bukti berjalan di atas data pasien dan bahwa keabsahan hukum, persetujuan, proporsionalitas, dan keadilan adalah kendala desain, bukan administrasi, secara khusus memperingatkan dataset bias yang mengukuhkan ketimpangan dan "etika sebagai administrasi" sebagai mode kegagalan. Pertanyaan ini penting karena teknologi yang divalidasi pada populasi yang tidak representatif dapat berkinerja lebih buruk bagi kelompok yang sudah paling kurang terlayani — model pemburukan atau diagnostik yang dilatih di tempat etnis, usia, atau komorbiditas tertentu kurang terwakili dapat membawa bias itu ke setiap keputusan mendatang, dan pada skala nasional dataset yang diendorse mengukuhkan ketimpangan itu di seluruh sistem. Ketegangannya adalah analisis keadilan lebih sulit dan lebih lambat daripada angka akurasi utama: ia menuntut Anda menyelidiki siapa yang ada dalam data dan siapa yang absen, memilah kinerja lintas subkelompok, dan kadang menerima bahwa bukti Anda lebih lemah bagi populasi yang paling perlu Anda layani. Buat konkret dengan mengambil alat baru-baru ini atau yang diusulkan dan bertanya rekam siapa yang dipakai membangun dan mengujinya, apakah kinerja pernah diperiksa per subkelompok, dan apakah pengesahan tata kelola informasi menyentuh keadilan sama sekali atau hanya memastikan dasar hukum. Jawaban jujur memisahkan pengawasan etis sejati dari sekadar mencentang kotak, mengakui di mana keterwakilan tak pernah diperiksa, dan memperlakukan bias dan keadilan sebagai pertanyaan yang harus dijawab bukti itu sendiri, bukan langkah kepatuhan yang ditempelkan di akhir.

## Dalam praktik: contoh kesehatan & perawatan

Sebuah trust komunitas ditawari alat AI yang menandai pasien berisiko memburuk dari data tanda vital. Keputusan HiPPO akan menerapkannya karena seorang direktur yang dihormati terkesan oleh demo vendor.

Sebaliknya trust memperlakukan penawaran itu sebagai hipotesis. Ia menempatkan alat pada jenjang risiko ESF NICE yang sesuai untuk teknologi yang menginformasikan keputusan klinis, dan meminta vendor menyajikan bukti efektivitas pada tingkat itu; hal terkuat yang ditawarkan adalah studi satu lokasi yang kecil. Trust menulis **model logika** (peringatan dini lebih baik → eskalasi lebih awal → lebih sedikit pemburukan yang dapat dihindari) dan merancang **evaluasi pragmatis**: penerapan mode bayangan di mana peringatan alat dicatat tetapi tidak ditindaklanjuti, dibandingkan dengan hasil aktual, ditambah wawancara kualitatif dengan perawat tentang kecocokan alur kerja.

Secara paralel ia mengumpulkan **bukti pengiriman**: apakah klinisi benar-benar akan memperhatikan dan memercayai peringatan itu? Ia menjalankan uji bergaya A/B pada presentasi peringatan. Pemimpin tata kelola informasi dan keselamatan klinis mengesahkan penggunaan data dan log bahaya. Setelah tiga bulan RWE menunjukkan perbaikan yang sederhana tetapi nyata dan laju peringatan palsu yang dapat diterima, dan bukti pengiriman menunjukkan klinisi terlibat dengan peringatan yang didesain ulang. Keputusan untuk melanjutkan — dengan peluncuran bertahap dan pemantauan berkelanjutan — ditulis ke dalam catatan keputusan yang mengutip bukti yang ditimbang. Dua tahun kemudian, ketika direktur baru mempertanyakan alat itu, catatan menjawabnya.

## Lensa sektor

Semua orang berutang kewajiban yang sama untuk menyesuaikan bukti dengan risiko, tetapi sumber daya, insentif, dan akuntabilitas di sekitar bukti berbeda tajam menurut organisasi.

### Startup

Kendala startup adalah bukti klinis standar emas lambat dan mahal sementara runway pendek, sehingga godaannya adalah menjual metrik adopsi seolah-olah bukti efek klinis. Langkah jujurnya adalah menempatkan produk pada jenjang ESF NICE yang tepat sejak dini dan bersikap terus terang kepada pembeli tentang kesenjangan bukti, memakai model logika yang jelas dan evaluasi pragmatis murah (pilot mode bayangan, deret waktu terputus pada satu lokasi) untuk menghasilkan bukti dunia nyata pertama. Catatan keputusan nyaris tak berbiaya dan sangat bernilai bagi tim kecil, menjaga penalaran melewati pivot cepat dan memberi investor serta penilai NHS yang cermat jejak audit. Disiplin yang membuahkan hasil adalah menahan firasat pendiri ala HiPPO dan memperlakukan setiap "demonya diterima baik" sebagai hipotesis untuk diuji.

### Usaha kecil

Penyedia kecil yang mapan — praktik dokter umum, apotek komunitas, panti jompo, klinik satu lokasi, pemasok teknologi kesehatan kecil yang telah melewati tahap startup — memikul kewajiban yang sama untuk menyesuaikan bukti dengan risiko tetapi punya pasien nyata, kas ketat, dan sedikit atau tak ada kapabilitas digital khusus untuk melakukannya. Langkah realistis adalah bersandar pada bukti yang sudah dihasilkan pihak lain alih-alih menghasilkan sendiri: gunakan jenjang ESF NICE dan penilaian DTAC calon alat sebagai proporsionalitas siap pakai, minta pemasok bukti efektivitas klinis yang sesuai jenjang, dan tolak dibujuk membeli produk yang belum dinilai oleh demo yang licin. Bukti pengiriman adalah tempat organisasi kecil sungguh dapat memimpin, karena ia melihat pasiennya sendiri dengan dekat — beberapa minggu pengamatan jujur tentang apakah staf benar-benar memakai alat dan apakah ia mengurangi permintaan akibat kegagalan adalah bukti dunia nyata yang terjangkau. Catatan keputusan satu baris — apa yang kami pilih, bukti apa yang kami lihat, siapa yang memutuskan — hampir tak berbiaya bagi tim kecil dan melindunginya ketika mitra pergi atau inspektur CQC bertanya mengapa. Jebakan yang harus dihindari adalah menganggap menjadi kecil membebaskan Anda dari standar bukti; kewajiban kepada pasien identik, hanya sumber dayanya yang tidak.

### Perusahaan besar

Trust NHS atau ICS memiliki data rutin, volume pasien, dan kapabilitas analitik untuk melakukan evaluasi serius — dan akuntabilitas yang menuntutnya, karena menerapkan alat yang belum terbukti pada skala besar sekaligus risiko keselamatan klinis dan uang publik. Mode kegagalannya bersifat kelembagaan: direktur yang dihormati mengampanyekan demo vendor, atau kasus bisnis yang dibangun di atas manfaat proyeksi yang tak pernah diperiksa kemudian. Penawarnya adalah membuatnya aman secara budaya untuk menanyakan kepada pembuat keputusan mana pun "apa buktinya?", menjaga bukti klinis dan pengiriman pada sumbu terpisah dalam setiap makalah dewan, dan mendanai pemantauan dunia nyata berkelanjutan untuk AI dan layanan berumur panjang alih-alih memvalidasi sekali. Perusahaan farmasi atau teknologi kesehatan besar membawa mesin uji formal tetapi harus waspada terhadap bias publikasi dan perancu dalam bukti dunia nyata yang dihasilkannya.

### Pemerintah

Lembaga nasional — NICE, NHS England, DHSC, MHRA, UKHSA — sering menetapkan standar bukti yang harus dilewati pihak lain, sehingga cara kerjanya membentuk seluruh pasar: ESF, DTAC, dan regulasi perangkat lunak-sebagai-perangkat-medis adalah instrumen akuntabilitas skala populasi. Keputusan di sini menarik pengawasan regulator, parlementer, dan publik, sehingga catatan *mengapa* suatu teknologi direkomendasikan atau diadakan sama pentingnya dengan keputusannya, dan transparansi tentang keterbatasan bukti adalah kewajiban, bukan kesopanan. Risiko pada skala ini adalah mewajibkan teknologi di seluruh sistem berdasarkan bukti tipis, atau sebaliknya menuntut RCT untuk perubahan berisiko rendah dan menghentikan inovasi yang berguna. Penawarnya adalah proporsionalitas yang dibuat eksplisit dalam standar yang dipublikasikan, ditambah perhatian pada etika data dan keadilan, karena dataset bias yang diendorse secara nasional mengukuhkan ketimpangan pada skala besar.

## Mode kegagalan umum

- **Keputusan berbasis demo.** Membeli karena demonstrasi mengesankan seorang pemimpin senior. Penawar: perlakukan penawaran sebagai hipotesis; tuntut bukti sesuai jenjang.
- **Penggunaan disalahartikan sebagai validasi.** Mengutip angka adopsi sebagai bukti alat efektif secara klinis. Penawar: jaga bukti klinis dan pengiriman pada sumbu terpisah.
- **Evaluasi sekali selesai.** Memvalidasi sekali dan tak pernah memantau, terutama untuk AI yang menyimpang. Penawar: bukti dunia nyata dan pemantauan berkelanjutan.
- **Kelumpuhan analisis.** Menuntut RCT untuk perubahan konten berisiko rendah. Penawar: metode proporsional; A/B dan evaluasi pragmatis bila risiko rendah.
- **Keputusan tak tercatat.** Tak ada jejak mengapa suatu pilihan dibuat, sehingga diperdebatkan ulang dan tak dapat diaudit. Penawar: log keputusan yang ringan.
- **Etika sebagai administrasi.** Memperlakukan etika data sebagai formulir untuk ditandatangani, bukan kendala desain. Penawar: tanamkan keabsahan hukum, persetujuan, dan keadilan ke dalam rancangan bukti.

## Model kematangan

| Dimensi | Inisiasi | Pengembangan | Standardisasi | Pengelolaan | Orkestrasi |
|---|---|---|---|---|---|
| Dasar keputusan | Senioritas / demo (HiPPO) | Sebagian data dikonsultasikan | Bukti rutin disyaratkan, berjenjang menurut risiko | Standar bukti dilacak dan dijamin terhadap jenjang risiko | Ambang bukti ditetapkan lebih dulu; firasat diuji |
| Klinis vs pengiriman | Dicampur atau salah satunya diabaikan | Keduanya disebut | Keduanya dituntut dan dibedakan | Keduanya diukur terhadap ambang yang ditetapkan | Keduanya dipantau terus-menerus |
| Evaluasi | Tidak ada atau setelah kejadian | Sesekali, ad hoc | Model logika + rancangan proporsional | Evaluasi diatur, dengan KPI dilacak terhadap target | RWE dan evaluasi berkelanjutan tertanam |
| Etika data | Renungan belakangan | Hanya kepatuhan | Etika dirancang sejak awal | Metrik keadilan ditinjau terhadap ambang | Keadilan dan bias dipantau aktif |
| Catatan keputusan | Tidak ada | Catatan tidak konsisten | Log keputusan standar | Kelengkapan log diukur dan dijamin | Log dipakai ulang, diaudit, dan dipelajari |

## Daftar periksa

- [ ] Setiap teknologi ditempatkan pada jenjang risiko ESF NICE, dengan bukti yang dituntut sesuai.
- [ ] Setiap keputusan signifikan memiliki baik bukti klinis maupun pengiriman, tetap terpisah.
- [ ] Model logika ada sebelum membangun, menamai hasil dan metrik.
- [ ] Rancangan evaluasi proporsional terhadap risiko (A/B dan pragmatis untuk rendah; uji/RWE untuk tinggi).
- [ ] Bukti dunia nyata dan pemantauan tersedia untuk AI dan layanan berumur panjang.
- [ ] Aman secara budaya untuk menanyakan kepada pembuat keputusan mana pun "apa buktinya?"
- [ ] Setiap keputusan signifikan dicatat dalam log keputusan (apa, mengapa, bukti, siapa, kapan).
- [ ] Penggunaan data sah, disetujui, proporsional, dan diperiksa terhadap bias dan keadilan.

## Sumber utama

- NICE — *Evidence Standards Framework for digital health technologies (ESF)* (nice.org.uk).
- NHS England / NHSX — *Digital Technology Assessment Criteria (DTAC)*.
- MHRA — panduan tentang *software and AI as a medical device*.
- Oxford Centre for Evidence-Based Medicine — *Levels of Evidence* (hierarki bukti).
- HM Treasury — *The Magenta Book* (panduan tentang evaluasi, model logika, dan rancangan evaluasi).
- MRC — kerangka *Developing and evaluating complex interventions*.
- Ron Kohavi et al. — *Trustworthy Online Controlled Experiments* (uji A/B).
- Michael Nygard — *Architecture Decision Records* (pola log keputusan).

## Referensi

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
