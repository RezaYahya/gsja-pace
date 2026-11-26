/*
  RENUNGAN HARIAN – satu renungan per hari.
  Cara menambah: salin satu blok { ... } di bawah, ubah tanggal (TAHUN-BULAN-HARI) dan isinya.
  Website otomatis menampilkan renungan yang tanggalnya sama dengan hari ini.
  Jika hari ini belum ada, yang tampil adalah renungan terakhir sebelumnya.
  Jenis isi pada "blok": { p: "paragraf" } atau { daftar: ["butir 1", "butir 2"] }
*/
const RENUNGAN = [
  {
    tanggal: '2026-11-26',
    judul: 'Menghormati Orang Tua Adalah Perintah Tuhan',
    foto: 'https://picsum.org/id/1000683923/800/600.webp',
    ayat: {
      ref: 'Efesus 6:1-3',
      teks: 'Hai anak-anak, taatilah orang tuamu di dalam Tuhan, karena haruslah demikian. Hormatilah ayahmu dan ibumu—ini adalah suatu perintah yang penting, seperti yang nyata dari janji ini: supaya kamu berbahagia dan panjang umurmu di bumi.'
    },
    pembuka: [
      'Pernahkah kita merasa kesal ketika orang tua terlalu banyak bertanya? Mau pergi, mesti ditanya ke mana dan dengan siapa. Pulang terlambat langsung ditegur. Bermain HP terlalu lama, pasti diingatkan. Ketika melakukan kesalahan, dinasihati panjang lebar. Kadang kita berpikir, “Orang tua tidak mengerti kehidupan anak zaman sekarang!” Bahkan, ada kalanya kita merasa lebih nyaman mendengarkan teman daripada mendengarkan nasihat orang tua.',
      'Tetapi, pernahkah kita menyadari bahwa di balik teguran, nasihat, dan perhatian mereka, ada kasih dan tanggung jawab yang Tuhan percayakan kepada mereka? Firman Tuhan dalam Efesus 6:1–3 mengingatkan kita bahwa menghormati orang tua bukan sekadar budaya, tradisi, atau kebiasaan keluarga.'
    ],
    sorotan: 'Menghormati orang tua adalah perintah Tuhan yang harus dilakukan oleh setiap anak yang percaya kepada-Nya.',
    poin: [
      {
        judul: 'Menghormati orang tua adalah perintah Tuhan (ayat 1)',
        blok: [
          { p: 'Paulus dengan jelas mengatakan bahwa anak-anak harus menaati orang tua di dalam Tuhan. Artinya, ketaatan kepada orang tua merupakan bagian dari kehidupan iman kita.' },
          { p: 'Sering kali kita ingin menjadi anak yang aktif dalam pelayanan, rajin beribadah, pandai menyanyi, atau terlihat rohani di gereja. Namun, bagaimana kehidupan kita ketika berada di rumah?' },
          { daftar: ['Apakah kita masih membantah ketika dinasihati?', 'Apakah kita masih berbicara kasar kepada orang tua?', 'Apakah kita hanya taat kalau ada maunya saja?', 'Dan apakah kita lebih mudah menghormati teman daripada orang tua sendiri?'] },
          { p: 'Jangan sampai kita terlihat sangat rohani di gereja, tetapi justru sulit menunjukkan kasih dan hormat kepada orang tua di rumah. Rohani yang bertumbuh juga terlihat dari bagaimana kita memperlakukan orang tua kita.' }
        ]
      },
      {
        judul: 'Menghormati orang tua bukan hanya ketika mereka benar (ayat 2)',
        blok: [
          { p: 'Tuhan tidak berkata, “Hormatilah orang tuamu kalau mereka selalu memenuhi keinginanmu.” Tuhan juga tidak berkata, “Hormatilah orang tuamu kalau mereka tidak pernah melakukan kesalahan.” Tetapi Tuhan memberikan perintah untuk menghormati ayah dan ibu.' },
          { p: 'Menghormati orang tua di sini berarti:' },
          { daftar: ['Menghargai perkataan mereka dan tidak langsung membantah ketika diberikan nasihat.', 'Menjaga perkataan kita, misalnya tidak berbicara kasar, membentak, atau merendahkan mereka.', 'Menghargai pengorbanan mereka; contohnya, belajar menyadari bahwa banyak hal yang telah mereka lakukan untuk kehidupan kita.', 'Menunjukkan kasih melalui tindakan, misalnya membantu pekerjaan rumah, memperhatikan, dan meluangkan waktu bersama orang tua.'] },
          { p: 'Kita harus menyadari bahwa orang tua juga manusia yang bisa melakukan kesalahan. Menghormati mereka bukan berarti menganggap mereka sempurna, tetapi memilih untuk tetap bersikap hormat dan mengasihi.' }
        ]
      },
      {
        judul: 'Janji berkat bagi anak yang menghormati orang tua (ayat 3)',
        blok: [
          { p: 'Tuhan memberikan janji yang menyertai perintah menghormati orang tua. Menghormati orang tua bukan hanya membawa dampak baik bagi hubungan kita dengan keluarga, tetapi juga membentuk karakter dan kehidupan kita.' },
          { p: 'Ketika kita belajar menghormati orang tua, kita sedang belajar:' },
          { daftar: ['Kerendahan hati untuk menerima nasihat', 'Kesabaran dalam menghadapi perbedaan', 'Penguasaan diri ketika sedang marah', 'Tanggung jawab dalam menjalani kehidupan'] },
          { p: 'Ketaatan bukan berarti hidup kita akan selalu bebas dari masalah. Namun, Tuhan mengajarkan bahwa hidup dalam ketaatan kepada firman-Nya adalah jalan kehidupan yang baik.' }
        ]
      }
    ],
    sorotan2: 'Jangan menghormati orang tua dianggap sebagai beban, tetapi sebagai kesempatan untuk melakukan kehendak Tuhan.',
    penutup: 'Rekan-rekan youth yang dikasihi Tuhan, jangan hanya ingin menjadi anak yang membanggakan di hadapan banyak orang, tetapi belajarlah juga menjadi anak yang membawa sukacita bagi orang tua di rumah. Efesus 6:1-3 mengingatkan kita bahwa menghormati orang tua bukan sekadar kewajiban sebagai anak, melainkan perintah Tuhan dan bagian dari ketaatan iman kita. Mari kita belajar menghargai perkataan mereka, menjaga sikap dan perkataan, serta menunjukkan kasih melalui tindakan nyata. Jangan hanya berusaha menjadi anak yang membanggakan di hadapan orang lain, tetapi jadilah anak yang membawa sukacita bagi orang tua di rumah. Sebab, ketika kita menghormati orang tua, kita sedang belajar hidup dalam ketaatan, kerendahan hati, dan kehendak Tuhan.',
    refleksi: 'Apakah selama ini kita sudah sungguh-sungguh menghormati orang tua dalam kehidupan sehari-hari? Kita mungkin mudah bersikap sopan kepada teman, guru, atau orang lain, tetapi terkadang sulit mengendalikan perkataan dan sikap ketika berada di rumah. Melalui firman Tuhan hari ini, kita diingatkan bahwa menghormati orang tua adalah perintah Tuhan, bukan sekadar pilihan yang dilakukan ketika keadaan menyenangkan. Mari kita belajar mendengarkan nasihat mereka, menjaga perkataan, menghargai pengorbanan mereka, dan menunjukkan kasih melalui tindakan sederhana.'
  },
{
    tanggal: "2026-11-27",
    judul: "Mengandalkan Tuhan dalam Setiap Keadaan",
    foto: "https://picsum.org/id/1000893642/800/600.webp",
    ayat: { ref: "Amsal 3:5-6", teks: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri." },
    pembuka: ["Kita sering ingin semua hal berjalan sesuai rencana. Ketika sesuatu berubah, kita mudah khawatir dan merasa harus mengendalikan semuanya sendiri.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Mengandalkan Tuhan berarti menyerahkan arah hidup kepada-Nya sambil tetap melakukan bagian kita dengan setia. Hikmat dan pimpinan-Nya lebih besar daripada pemahaman kita.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Mengandalkan Tuhan berarti menyerahkan arah hidup kepada-Nya sambil tetap melakukan bagian kita dengan setia. Hikmat dan pimpinan-Nya lebih besar daripada pemahaman kita." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Ketika menghadapi pilihan, bawalah keputusan itu dalam doa, pelajari dengan bijaksana, dan bersedialah mengikuti kehendak Tuhan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Ketika menghadapi pilihan, bawalah keputusan itu dalam doa, pelajari dengan bijaksana, dan bersedialah mengikuti kehendak Tuhan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah keputusan-keputusan kita selama ini sungguh melibatkan Tuhan? Mari mempercayakan rencana, kekhawatiran, dan masa depan kepada-Nya."
  },
  {
    tanggal: "2026-11-28",
    judul: "https://picsum.org/id/1001004685/800/600.webp",
    foto: "https://picsum.photos/seed/renungan18/1400/700",
    ayat: { ref: "Lukas 16:10", teks: "Barangsiapa setia dalam perkara-perkara kecil, ia setia juga dalam perkara-perkara besar." },
    pembuka: ["Kita kadang menunggu kesempatan besar untuk melakukan sesuatu yang berarti. Padahal, kesetiaan justru terlihat dari hal sederhana yang kita lakukan setiap hari.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan menghargai kesetiaan, bukan hanya hal besar yang terlihat banyak orang. Kesetiaan dalam tugas kecil membentuk karakter yang dapat dipercaya.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan menghargai kesetiaan, bukan hanya hal besar yang terlihat banyak orang. Kesetiaan dalam tugas kecil membentuk karakter yang dapat dipercaya." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Datang tepat waktu, menyelesaikan tanggung jawab, berkata jujur, dan menolong tanpa mencari pujian adalah contoh kesetiaan dalam perkara kecil." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Datang tepat waktu, menyelesaikan tanggung jawab, berkata jujur, dan menolong tanpa mencari pujian adalah contoh kesetiaan dalam perkara kecil. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Hal kecil apa yang Tuhan percayakan kepada kita hari ini? Mari mengerjakannya dengan sungguh-sungguh."
  },
  {
    tanggal: "2026-11-29",
    judul: "Belajar Mengampuni",
    foto: "https://picsum.org/id/1001007941/800/600.webp",
    ayat: { ref: "Kolose 3:13", teks: "Sabarlah kamu seorang terhadap yang lain, dan ampunilah seorang akan yang lain." },
    pembuka: ["Dalam hubungan dengan orang lain, kesalahpahaman dan perkataan yang menyakitkan bisa terjadi. Menyimpan kepahitan membuat hati semakin berat.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Mengampuni adalah keputusan untuk tidak terus memelihara kebencian dan menyerahkan keadilan kepada Tuhan. Mengampuni bukan berarti membenarkan kesalahan atau membiarkan diri terus disakiti.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Mengampuni adalah keputusan untuk tidak terus memelihara kebencian dan menyerahkan keadilan kepada Tuhan. Mengampuni bukan berarti membenarkan kesalahan atau membiarkan diri terus disakiti." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Mintalah Tuhan menolong kita melepaskan kepahitan dan mengambil langkah menuju pemulihan dengan bijaksana. Kita tetap boleh membuat batas yang sehat dan mencari pertolongan ketika diperlukan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Mintalah Tuhan menolong kita melepaskan kepahitan dan mengambil langkah menuju pemulihan dengan bijaksana. Kita tetap boleh membuat batas yang sehat dan mencari pertolongan ketika diperlukan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Adakah seseorang yang masih sulit kita ampuni? Bawalah pergumulan itu dalam doa dan mintalah Tuhan memimpin prosesnya."
  },
  {
    tanggal: "2026-11-30",
    judul: "Kekuatan dalam Doa",
    foto: "https://picsum.org/id/1000747277/800/600.webp",
    ayat: { ref: "Filipi 4:6-7", teks: "Janganlah hendaknya kamu kuatir tentang apa pun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur." },
    pembuka: ["Ada banyak hal yang dapat memenuhi pikiran: keluarga, pertemanan, tanggung jawab, dan masa depan. Kita tidak harus menghadapi semuanya dengan kekuatan sendiri.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Doa adalah kesempatan untuk datang kepada Tuhan dengan jujur dan menyerahkan kekhawatiran kepada-Nya. Damai sejahtera Tuhan menjaga hati dan pikiran kita.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Doa adalah kesempatan untuk datang kepada Tuhan dengan jujur dan menyerahkan kekhawatiran kepada-Nya. Damai sejahtera Tuhan menjaga hati dan pikiran kita." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Berdoalah secara teratur, ceritakan apa yang sedang kita hadapi, dan sertakan ucapan syukur. Jangan menunggu keadaan menjadi sulit untuk berdoa." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Berdoalah secara teratur, ceritakan apa yang sedang kita hadapi, dan sertakan ucapan syukur. Jangan menunggu keadaan menjadi sulit untuk berdoa. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apa yang paling memenuhi pikiran kita hari ini? Mari membawanya kepada Tuhan dalam doa."
  },
  {
    tanggal: "2026-12-01",
    judul: "Menjadi Terang di Tengah Lingkungan",
    foto: "https://picsum.org/id/1000890304/800/600.webp",
    ayat: { ref: "Matius 5:16", teks: "Demikianlah hendaknya terangmu bercahaya di depan orang, supaya mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga." },
    pembuka: ["Iman bukan hanya terlihat ketika kita berada di gereja. Sikap kita di rumah, sekolah, tempat kerja, dan lingkungan juga menjadi kesaksian tentang Kristus.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Hidup sebagai terang berarti menunjukkan karakter Kristus melalui perkataan dan tindakan. Kebaikan kita seharusnya membawa orang memuliakan Tuhan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Hidup sebagai terang berarti menunjukkan karakter Kristus melalui perkataan dan tindakan. Kebaikan kita seharusnya membawa orang memuliakan Tuhan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Bersikap jujur, menghargai orang lain, menolak ajakan yang salah, dan bersedia menolong merupakan kesaksian yang nyata." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Bersikap jujur, menghargai orang lain, menolak ajakan yang salah, dan bersedia menolong merupakan kesaksian yang nyata. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kehadiran kita membawa pengaruh yang baik bagi orang-orang di sekitar?"
  },
  {
    tanggal: "2026-12-02",
    judul: "Mengucap Syukur dalam Segala Hal",
    foto: "https://picsum.org/id/177572157/800/600.webp",
    ayat: { ref: "1 Tesalonika 5:18", teks: "Mengucap syukurlah dalam segala hal, sebab itulah yang dikehendaki Allah di dalam Kristus Yesus bagi kamu." },
    pembuka: ["Tidak semua hari berjalan menyenangkan. Ada doa yang belum terjawab dan harapan yang belum terwujud. Namun, selalu ada alasan untuk mengingat kebaikan Tuhan.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Ucapan syukur menolong kita melihat penyertaan Tuhan, bahkan ketika keadaan belum berubah. Bersyukur bukan berarti menyangkal kesedihan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Ucapan syukur menolong kita melihat penyertaan Tuhan, bahkan ketika keadaan belum berubah. Bersyukur bukan berarti menyangkal kesedihan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Sebutkan tiga hal sederhana yang dapat kita syukuri hari ini. Kita dapat jujur tentang pergumulan sekaligus mengingat bahwa Tuhan tetap menyertai." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Sebutkan tiga hal sederhana yang dapat kita syukuri hari ini. Kita dapat jujur tentang pergumulan sekaligus mengingat bahwa Tuhan tetap menyertai. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kita lebih sering menghitung kekurangan daripada mengingat kebaikan Tuhan?"
  },
  {
    tanggal: "2026-12-03",
    judul: "Menjaga Hati dan Pikiran",
    foto: "https://picsum.org/id/1001341084/800/600.webp",
    ayat: { ref: "Amsal 4:23", teks: "Jagalah hatimu dengan segala kewaspadaan, karena dari situlah terpancar kehidupan." },
    pembuka: ["Apa yang kita dengar, lihat, dan pikirkan dapat memengaruhi sikap serta keputusan. Karena itu, kita perlu bijaksana memilih hal-hal yang mengisi hati.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Menjaga hati berarti memperhatikan nilai, pikiran, dan keinginan yang sedang kita pelihara.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Menjaga hati berarti memperhatikan nilai, pikiran, dan keinginan yang sedang kita pelihara." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Pilih pergaulan yang membangun, gunakan media dengan bijaksana, dan isi pikiran dengan hal yang benar serta bermanfaat." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Pilih pergaulan yang membangun, gunakan media dengan bijaksana, dan isi pikiran dengan hal yang benar serta bermanfaat. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apa yang akhir-akhir ini paling banyak memengaruhi pikiran dan sikap kita?"
  },
  {
    tanggal: "2026-12-04",
    judul: "Kasih yang Tidak Mencari Keuntungan",
    foto: "https://picsum.org/id/1001144563/800/600.webp",
    ayat: { ref: "1 Korintus 13:4-5", teks: "Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia tidak memegahkan diri dan tidak sombong." },
    pembuka: ["Kasih mudah diucapkan, tetapi perlu dibuktikan melalui sikap. Kita dapat berkata mengasihi, namun tetap mudah marah atau hanya menolong ketika ada keuntungan.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Kasih yang berasal dari Tuhan mengajar kita untuk sabar, murah hati, dan tidak mementingkan diri sendiri.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Kasih yang berasal dari Tuhan mengajar kita untuk sabar, murah hati, dan tidak mementingkan diri sendiri." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Dengarkan orang lain dengan sungguh-sungguh, hormati perbedaan, dan lakukan kebaikan tanpa selalu mengharapkan balasan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Dengarkan orang lain dengan sungguh-sungguh, hormati perbedaan, dan lakukan kebaikan tanpa selalu mengharapkan balasan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Sudahkah kasih terlihat dalam cara kita memperlakukan orang lain?"
  },
  {
    tanggal: "2026-12-05",
    judul: "Jangan Takut, Tuhan Menyertai",
    foto: "https://picsum.org/id/1000561410/800/600.webp",
    ayat: { ref: "Yesaya 41:10", teks: "Janganlah takut, sebab Aku menyertai engkau, janganlah bimbang, sebab Aku ini Allahmu." },
    pembuka: ["Menghadapi hal baru atau keadaan yang tidak pasti dapat membuat kita takut. Kita mungkin merasa tidak cukup mampu dan tidak tahu apa yang akan terjadi.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Keberanian orang percaya bertumbuh dari keyakinan bahwa Tuhan menyertai dan menguatkan. Kita tidak berjalan sendirian.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Keberanian orang percaya bertumbuh dari keyakinan bahwa Tuhan menyertai dan menguatkan. Kita tidak berjalan sendirian." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Tetap persiapkan diri dan mintalah nasihat. Jangan biarkan ketakutan menghentikan kita melakukan hal yang benar." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Tetap persiapkan diri dan mintalah nasihat. Jangan biarkan ketakutan menghentikan kita melakukan hal yang benar. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Dalam hal apa kita membutuhkan keberanian dan keyakinan akan penyertaan Tuhan?"
  },
  {
    tanggal: "2026-12-06",
    judul: "Menjadi Pendengar yang Baik",
    foto: "https://picsum.org/id/1000976805/800/600.webp",
    ayat: { ref: "Yakobus 1:19", teks: "Setiap orang hendaklah cepat untuk mendengar, tetapi lambat untuk berkata-kata, dan juga lambat untuk marah." },
    pembuka: ["Dalam percakapan, kita sering terburu-buru menjawab atau membela diri. Akibatnya, kita tidak sungguh-sungguh memahami apa yang disampaikan orang lain.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Mendengar dengan baik adalah bentuk kasih dan penghargaan kepada sesama.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Mendengar dengan baik adalah bentuk kasih dan penghargaan kepada sesama." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Berikan perhatian ketika orang lain berbicara, jangan memotong pembicaraan, dan pikirkan jawaban sebelum mengucapkannya." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Berikan perhatian ketika orang lain berbicara, jangan memotong pembicaraan, dan pikirkan jawaban sebelum mengucapkannya. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah orang-orang di sekitar merasa didengarkan ketika berbicara dengan kita?"
  },
  {
    tanggal: "2026-12-07",
    judul: "Tuhan Memberi Hikmat",
    foto: "https://picsum.photos/seed/renungan27/1400/700",
    ayat: { ref: "Yakobus 1:5", teks: "Tetapi apabila di antara kamu ada yang kekurangan hikmat, hendaklah ia memintakannya kepada Allah." },
    pembuka: ["Setiap hari kita membuat keputusan. Ada keputusan sederhana, tetapi ada juga yang berdampak panjang bagi masa depan dan hubungan kita.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan mengundang kita meminta hikmat agar dapat memilih apa yang benar dan berkenan kepada-Nya.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan mengundang kita meminta hikmat agar dapat memilih apa yang benar dan berkenan kepada-Nya." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Jangan hanya bertanya apakah sesuatu menyenangkan atau menguntungkan. Pertimbangkan juga apakah keputusan itu benar, bijaksana, dan membangun." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Jangan hanya bertanya apakah sesuatu menyenangkan atau menguntungkan. Pertimbangkan juga apakah keputusan itu benar, bijaksana, dan membangun. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Keputusan apa yang perlu kita bawa kepada Tuhan untuk meminta hikmat-Nya?"
  },
  {
    tanggal: "2026-12-08",
    judul: "Melayani dengan Sukacita",
    foto: "https://picsum.photos/seed/renungan28/1400/700",
    ayat: { ref: "Kolose 3:23", teks: "Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia." },
    pembuka: ["Pelayanan terkadang terasa melelahkan, terutama ketika usaha kita tidak diperhatikan. Kita bisa kehilangan semangat jika hanya mengharapkan pujian.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Pelayanan yang benar berangkat dari hati yang mengasihi Tuhan, bukan sekadar mencari pengakuan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Pelayanan yang benar berangkat dari hati yang mengasihi Tuhan, bukan sekadar mencari pengakuan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Lakukan tugas dengan sungguh-sungguh, hargai rekan pelayanan, dan tetap rendah hati ketika menerima tanggung jawab." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Lakukan tugas dengan sungguh-sungguh, hargai rekan pelayanan, dan tetap rendah hati ketika menerima tanggung jawab. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kita melayani untuk menyenangkan Tuhan atau terutama untuk mendapatkan pengakuan?"
  },
  {
    tanggal: "2026-12-09",
    judul: "Rendah Hati Seperti Kristus",
    foto: "https://picsum.photos/seed/renungan29/1400/700",
    ayat: { ref: "Filipi 2:3", teks: "Dengan rendah hati yang seorang menganggap yang lain lebih utama dari pada dirinya sendiri." },
    pembuka: ["Keinginan untuk selalu dianggap benar atau lebih hebat dapat merusak hubungan. Tuhan mengajak kita belajar rendah hati seperti Kristus.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Rendah hati bukan berarti merendahkan diri, melainkan tidak menjadikan diri sendiri pusat dari segala sesuatu.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Rendah hati bukan berarti merendahkan diri, melainkan tidak menjadikan diri sendiri pusat dari segala sesuatu." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Berani mengakui kesalahan, menghargai kemampuan orang lain, dan bersedia belajar merupakan wujud kerendahan hati." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Berani mengakui kesalahan, menghargai kemampuan orang lain, dan bersedia belajar merupakan wujud kerendahan hati. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Dalam hal apa Tuhan sedang mengajar kita untuk menjadi lebih rendah hati?"
  },
  {
    tanggal: "2026-12-10",
    judul: "Tuhan Tidak Pernah Meninggalkan",
    foto: "https://picsum.photos/seed/renungan30/1400/700",
    ayat: { ref: "Ulangan 31:8", teks: "Sebab TUHAN, Dia sendiri akan berjalan di depanmu, Dia sendiri akan menyertai engkau." },
    pembuka: ["Ada masa ketika kita merasa sendirian menghadapi masalah. Dukungan manusia mungkin terbatas, tetapi janji penyertaan Tuhan memberi pengharapan.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan berjalan di depan kita dan tidak meninggalkan umat-Nya. Kita dapat datang kepada-Nya sekaligus menerima dukungan dari orang-orang yang dapat dipercaya.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan berjalan di depan kita dan tidak meninggalkan umat-Nya. Kita dapat datang kepada-Nya sekaligus menerima dukungan dari orang-orang yang dapat dipercaya." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Saat merasa sendiri, datanglah kepada Tuhan dalam doa dan jangan menutup diri dari dukungan keluarga, sahabat, atau pembimbing rohani." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Saat merasa sendiri, datanglah kepada Tuhan dalam doa dan jangan menutup diri dari dukungan keluarga, sahabat, atau pembimbing rohani. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kita masih percaya bahwa Tuhan menyertai langkah kita, bahkan ketika jalan di depan belum jelas?"
  },
  {
    tanggal: "2026-12-11",
    judul: "Menggunakan Waktu dengan Bijaksana",
    foto: "https://picsum.photos/seed/renungan01/1400/700",
    ayat: { ref: "Efesus 5:15-16", teks: "Karena itu, perhatikanlah dengan saksama, bagaimana kamu hidup, janganlah seperti orang bebal, tetapi seperti orang arif." },
    pembuka: ["Waktu adalah pemberian Tuhan yang tidak dapat diulang. Tanpa disadari, banyak waktu habis untuk hal yang tidak membangun.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Hidup bijaksana berarti menggunakan waktu sesuai prioritas dan tanggung jawab yang Tuhan percayakan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Hidup bijaksana berarti menggunakan waktu sesuai prioritas dan tanggung jawab yang Tuhan percayakan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Atur waktu untuk berdoa, belajar, bekerja, beristirahat, melayani, dan membangun hubungan dengan keluarga." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Atur waktu untuk berdoa, belajar, bekerja, beristirahat, melayani, dan membangun hubungan dengan keluarga. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah penggunaan waktu kita hari ini mencerminkan hal-hal yang sungguh penting?"
  },
  {
    tanggal: "2026-12-12",
    judul: "Jadilah Pembawa Damai",
    foto: "https://picsum.photos/seed/renungan02/1400/700",
    ayat: { ref: "Matius 5:9", teks: "Berbahagialah orang yang membawa damai, karena mereka akan disebut anak-anak Allah." },
    pembuka: ["Perbedaan pendapat dapat berubah menjadi pertengkaran ketika setiap orang hanya ingin menang. Tuhan memanggil kita menjadi pembawa damai.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Pembawa damai tidak memperbesar konflik, tetapi berusaha menghadirkan kebenaran, kasih, dan pengertian.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Pembawa damai tidak memperbesar konflik, tetapi berusaha menghadirkan kebenaran, kasih, dan pengertian." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Hindari menyebarkan gosip, jangan memperkeruh masalah, dan beranilah meminta maaf ketika melakukan kesalahan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Hindari menyebarkan gosip, jangan memperkeruh masalah, dan beranilah meminta maaf ketika melakukan kesalahan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah perkataan kita selama ini lebih sering membangun perdamaian atau memperbesar pertengkaran?"
  },
  {
    tanggal: "2026-12-13",
    judul: "Tuhan Melihat Ketulusan Hati",
    foto: "https://picsum.photos/seed/renungan03/1400/700",
    ayat: { ref: "1 Samuel 16:7", teks: "Bukan yang dilihat manusia yang dilihat Allah; manusia melihat apa yang di depan mata, tetapi TUHAN melihat hati." },
    pembuka: ["Manusia mudah menilai dari penampilan, kemampuan, atau pencapaian. Namun, Tuhan melihat lebih dalam daripada apa yang tampak dari luar.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan memperhatikan hati dan motivasi di balik setiap tindakan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan memperhatikan hati dan motivasi di balik setiap tindakan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Lakukan kebaikan dengan tulus, tetap jujur ketika tidak ada yang melihat, dan jangan membandingkan nilai diri dengan pencapaian orang lain." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Lakukan kebaikan dengan tulus, tetap jujur ketika tidak ada yang melihat, dan jangan membandingkan nilai diri dengan pencapaian orang lain. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apa yang perlu kita benahi dalam hati agar hidup semakin berkenan kepada Tuhan?"
  },
  {
    tanggal: "2026-12-14",
    judul: "Tetap Berharap kepada Tuhan",
    foto: "https://picsum.photos/seed/renungan04/1400/700",
    ayat: { ref: "Roma 12:12", teks: "Bersukacitalah dalam pengharapan, sabarlah dalam kesesakan, dan bertekunlah dalam doa!" },
    pembuka: ["Menunggu jawaban atau perubahan tidak selalu mudah. Kita bisa lelah ketika hasil yang diharapkan belum terlihat.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Pengharapan Kristen berakar pada kesetiaan Tuhan, bukan pada kepastian bahwa semua keinginan kita akan terpenuhi.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Pengharapan Kristen berakar pada kesetiaan Tuhan, bukan pada kepastian bahwa semua keinginan kita akan terpenuhi." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Tetap lakukan yang benar, bersabar dalam proses, dan terus berdoa sambil mempercayakan hasil kepada Tuhan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Tetap lakukan yang benar, bersabar dalam proses, dan terus berdoa sambil mempercayakan hasil kepada Tuhan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah pengharapan kita tetap tertuju kepada Tuhan ketika jawaban belum datang?"
  },
  {
    tanggal: "2026-12-15",
    judul: "Berkata-kata yang Membangun",
    foto: "https://picsum.photos/seed/renungan05/1400/700",
    ayat: { ref: "Efesus 4:29", teks: "Janganlah ada perkataan kotor keluar dari mulutmu, tetapi pakailah perkataan yang baik untuk membangun." },
    pembuka: ["Satu kalimat dapat menguatkan seseorang, tetapi perkataan yang tidak dijaga juga dapat melukai. Karena itu, ucapan kita perlu dipikirkan.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan ingin perkataan kita membawa manfaat dan membangun orang yang mendengarnya.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan ingin perkataan kita membawa manfaat dan membangun orang yang mendengarnya." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Hindari hinaan, ejekan, dan gosip. Biasakan mengucapkan terima kasih, memberi semangat, serta menyampaikan teguran dengan kasih." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Hindari hinaan, ejekan, dan gosip. Biasakan mengucapkan terima kasih, memberi semangat, serta menyampaikan teguran dengan kasih. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah perkataan kita menjadi berkat bagi orang-orang yang mendengarnya?"
  },
  {
    tanggal: "2026-12-16",
    judul: "Mengasihi Sesama dengan Tindakan",
    foto: "https://picsum.photos/seed/renungan06/1400/700",
    ayat: { ref: "1 Yohanes 3:18", teks: "Anak-anakku, marilah kita mengasihi bukan dengan perkataan atau dengan lidah, tetapi dengan perbuatan dan dalam kebenaran." },
    pembuka: ["Kita mudah mengatakan bahwa kita peduli. Namun, kepedulian menjadi nyata ketika kita bersedia melakukan sesuatu bagi orang lain.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Kasih perlu dinyatakan melalui tindakan yang tulus dan sesuai kebenaran.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Kasih perlu dinyatakan melalui tindakan yang tulus dan sesuai kebenaran." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Perhatikan orang yang membutuhkan bantuan, luangkan waktu untuk mendengarkan, dan lakukan kebaikan tanpa merendahkan penerimanya." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Perhatikan orang yang membutuhkan bantuan, luangkan waktu untuk mendengarkan, dan lakukan kebaikan tanpa merendahkan penerimanya. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Sudahkah kasih yang kita ucapkan terlihat dalam tindakan nyata?"
  },
  {
    tanggal: "2026-12-17",
    judul: "Belajar Bersabar dalam Proses",
    foto: "https://picsum.photos/seed/renungan07/1400/700",
    ayat: { ref: "Pengkhotbah 3:1", teks: "Untuk segala sesuatu ada masanya, untuk apa pun di bawah langit ada waktunya." },
    pembuka: ["Kita sering ingin hasil yang cepat. Ketika proses terasa panjang, kita mudah membandingkan perjalanan sendiri dengan orang lain.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan dapat membentuk karakter kita melalui proses yang tidak instan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan dapat membentuk karakter kita melalui proses yang tidak instan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Tetap tekun belajar, bekerja, dan melayani. Jangan mengambil jalan pintas yang mengorbankan kejujuran hanya demi hasil cepat." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Tetap tekun belajar, bekerja, dan melayani. Jangan mengambil jalan pintas yang mengorbankan kejujuran hanya demi hasil cepat. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Bagian mana dari kehidupan kita yang membutuhkan kesabaran lebih besar?"
  },
  {
    tanggal: "2026-12-18",
    judul: "Tuhan Sumber Pengharapan",
    foto: "https://picsum.photos/seed/renungan08/1400/700",
    ayat: { ref: "Roma 15:13", teks: "Semoga Allah, sumber pengharapan, memenuhi kamu dengan segala sukacita dan damai sejahtera dalam iman kamu." },
    pembuka: ["Ada keadaan yang membuat kita sulit melihat masa depan dengan optimis. Firman Tuhan mengingatkan bahwa sumber pengharapan kita adalah Allah.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Pengharapan dari Tuhan memberi kekuatan untuk tetap melangkah dalam iman.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Pengharapan dari Tuhan memberi kekuatan untuk tetap melangkah dalam iman." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Bangunlah kebiasaan mengingat janji Tuhan, berdoa, dan mencari dukungan rohani ketika menghadapi pergumulan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Bangunlah kebiasaan mengingat janji Tuhan, berdoa, dan mencari dukungan rohani ketika menghadapi pergumulan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Dari mana kita memperoleh pengharapan ketika keadaan tidak sesuai harapan?"
  },
  {
    tanggal: "2026-12-19",
    judul: "Hidup dalam Kebenaran",
    foto: "https://picsum.photos/seed/renungan09/1400/700",
    ayat: { ref: "Yohanes 8:32", teks: "Dan kamu akan mengetahui kebenaran, dan kebenaran itu akan memerdekakan kamu." },
    pembuka: ["Tidak semua hal yang populer atau banyak dilakukan orang merupakan hal yang benar. Kita membutuhkan firman Tuhan sebagai pedoman.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Kebenaran Tuhan menolong kita mengenali jalan yang benar dan hidup dengan integritas.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Kebenaran Tuhan menolong kita mengenali jalan yang benar dan hidup dengan integritas." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Berani berkata jujur, mengakui fakta, dan tidak mengikuti ajakan yang bertentangan dengan firman Tuhan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Berani berkata jujur, mengakui fakta, dan tidak mengikuti ajakan yang bertentangan dengan firman Tuhan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah firman Tuhan menjadi pedoman utama dalam pilihan hidup kita?"
  },
  {
    tanggal: "2026-12-20",
    judul: "Jangan Lelah Berbuat Baik",
    foto: "https://picsum.photos/seed/renungan10/1400/700",
    ayat: { ref: "Galatia 6:9", teks: "Janganlah kita jemu-jemu berbuat baik, karena apabila sudah datang waktunya, kita akan menuai, jika kita tidak menjadi lemah." },
    pembuka: ["Berbuat baik tidak selalu mendapat tanggapan yang kita harapkan. Kadang usaha kita tidak dihargai atau hasilnya belum terlihat.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Tuhan mengajak kita tetap tekun melakukan kebaikan tanpa menjadikan pujian sebagai tujuan.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Tuhan mengajak kita tetap tekun melakukan kebaikan tanpa menjadikan pujian sebagai tujuan." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Teruslah menolong, berlaku jujur, dan melakukan tanggung jawab dengan benar. Tetaplah bijaksana agar kebaikan dilakukan dengan cara yang sehat." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Teruslah menolong, berlaku jujur, dan melakukan tanggung jawab dengan benar. Tetaplah bijaksana agar kebaikan dilakukan dengan cara yang sehat. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kita pernah berhenti berbuat baik hanya karena tidak mendapat balasan?"
  },
  {
    tanggal: "2026-12-21",
    judul: "Tuhan Memberi Damai Sejahtera",
    foto: "https://picsum.photos/seed/renungan11/1400/700",
    ayat: { ref: "Yohanes 14:27", teks: "Damai sejahtera Kutinggalkan bagimu. Damai sejahtera-Ku Kuberikan kepadamu." },
    pembuka: ["Dunia sering menawarkan rasa tenang melalui keadaan yang serba aman dan sesuai keinginan. Namun, keadaan dapat berubah sewaktu-waktu.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Damai sejahtera yang diberikan Kristus tidak bergantung sepenuhnya pada keadaan di sekitar kita.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Damai sejahtera yang diberikan Kristus tidak bergantung sepenuhnya pada keadaan di sekitar kita." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Ketika gelisah, berhentilah sejenak, berdoa, ingatlah firman Tuhan, dan lakukan hal yang dapat kita kendalikan dengan bijaksana." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Ketika gelisah, berhentilah sejenak, berdoa, ingatlah firman Tuhan, dan lakukan hal yang dapat kita kendalikan dengan bijaksana. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apa yang sedang mengganggu damai sejahtera kita, dan bagaimana kita dapat membawanya kepada Tuhan?"
  },
  {
    tanggal: "2026-12-22",
    judul: "Jadilah Sahabat yang Setia",
    foto: "https://picsum.photos/seed/renungan12/1400/700",
    ayat: { ref: "Amsal 17:17", teks: "Seorang sahabat menaruh kasih setiap waktu, dan menjadi seorang saudara dalam kesukaran." },
    pembuka: ["Persahabatan bukan hanya tentang bersenang-senang bersama. Sahabat yang baik juga hadir ketika keadaan tidak mudah.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Kesetiaan dalam persahabatan terlihat melalui kepedulian, kejujuran, dan sikap saling membangun.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Kesetiaan dalam persahabatan terlihat melalui kepedulian, kejujuran, dan sikap saling membangun." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Jadilah pendengar yang baik, jaga kepercayaan, berikan nasihat dengan kasih, dan jangan mendorong teman melakukan hal yang salah." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Jadilah pendengar yang baik, jaga kepercayaan, berikan nasihat dengan kasih, dan jangan mendorong teman melakukan hal yang salah. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kita sudah menjadi sahabat yang membawa pengaruh baik?"
  },
  {
    tanggal: "2026-12-23",
    judul: "Menyambut Tuhan dengan Hati yang Siap",
    foto: "https://picsum.photos/seed/renungan13/1400/700",
    ayat: { ref: "Lukas 3:4", teks: "Persiapkanlah jalan untuk Tuhan, luruskanlah jalan bagi-Nya." },
    pembuka: ["Masa menjelang Natal mengingatkan kita bukan hanya untuk menyiapkan acara dan berbagai kebutuhan, tetapi juga mempersiapkan hati untuk mengingat kedatangan Kristus.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Persiapan rohani berarti memberi ruang bagi firman Tuhan untuk membentuk hidup kita.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Persiapan rohani berarti memberi ruang bagi firman Tuhan untuk membentuk hidup kita." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Luangkan waktu untuk berdoa, berdamai dengan sesama, memperbaiki sikap, dan kembali memusatkan perhatian kepada Kristus." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Luangkan waktu untuk berdoa, berdamai dengan sesama, memperbaiki sikap, dan kembali memusatkan perhatian kepada Kristus. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah hati kita sudah dipersiapkan untuk menyambut dan memuliakan Kristus?"
  },
  {
    tanggal: "2026-12-24",
    judul: "Kristus Hadir Membawa Terang",
    foto: "https://picsum.photos/seed/renungan14/1400/700",
    ayat: { ref: "Yohanes 8:12", teks: "Akulah terang dunia; barangsiapa mengikut Aku, ia tidak akan berjalan dalam kegelapan, melainkan ia akan mempunyai terang hidup." },
    pembuka: ["Di tengah kebingungan dan banyaknya pilihan, kita membutuhkan tuntunan yang benar. Yesus menyatakan diri-Nya sebagai terang dunia.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Mengikut Kristus berarti membiarkan ajaran dan teladan-Nya menuntun keputusan serta tindakan kita.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Mengikut Kristus berarti membiarkan ajaran dan teladan-Nya menuntun keputusan serta tindakan kita." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Belajar dari firman-Nya, memilih kejujuran, mengasihi sesama, dan meninggalkan kebiasaan yang menjauhkan kita dari Tuhan." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Belajar dari firman-Nya, memilih kejujuran, mengasihi sesama, dan meninggalkan kebiasaan yang menjauhkan kita dari Tuhan. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Bagian hidup mana yang perlu diterangi dan diarahkan kembali oleh firman Kristus?"
  },
  {
    tanggal: "2026-12-25",
    judul: "Memberi dengan Hati yang Tulus",
    foto: "https://picsum.photos/seed/renungan15/1400/700",
    ayat: { ref: "2 Korintus 9:7", teks: "Hendaklah masing-masing memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan." },
    pembuka: ["Memberi bukan hanya tentang jumlah atau nilai. Tuhan memperhatikan hati yang rela dan tulus ketika kita berbagi.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Pemberian yang berkenan kepada Tuhan lahir dari kerelaan, bukan tekanan atau keinginan untuk dipuji.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Pemberian yang berkenan kepada Tuhan lahir dari kerelaan, bukan tekanan atau keinginan untuk dipuji." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Kita dapat berbagi waktu, perhatian, kemampuan, maupun materi sesuai kemampuan dan dengan cara yang bertanggung jawab." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Kita dapat berbagi waktu, perhatian, kemampuan, maupun materi sesuai kemampuan dan dengan cara yang bertanggung jawab. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apakah kita memberi dengan sukacita dan ketulusan?"
  },
  {
    tanggal: "2026-12-26",
    judul: "Tetap Bertumbuh dalam Kasih Karunia",
    foto: "https://picsum.photos/seed/renungan16/1400/700",
    ayat: { ref: "2 Petrus 3:18", teks: "Tetapi bertumbuhlah dalam kasih karunia dan dalam pengenalan akan Tuhan dan Juruselamat kita, Yesus Kristus." },
    pembuka: ["Perjalanan iman bukan perlombaan untuk terlihat paling rohani. Setiap orang perlu terus belajar mengenal Tuhan dan bertumbuh melalui firman-Nya.", "Firman Tuhan hari ini mengajak kita untuk tidak berhenti pada pengetahuan, tetapi menerapkannya dalam kehidupan sehari-hari."],
    sorotan: "Pertumbuhan rohani berlangsung melalui hubungan yang terus dibangun dengan Kristus.",
    poin: [
      { judul: "Memahami firman Tuhan", blok: [{ p: "Pertumbuhan rohani berlangsung melalui hubungan yang terus dibangun dengan Kristus." }, { p: "Firman Tuhan menjadi pedoman agar kita tidak hanya mengikuti perasaan atau kebiasaan, tetapi memilih jalan yang berkenan kepada-Nya." }] },
      { judul: "Menerapkannya dalam kehidupan", blok: [{ p: "Sediakan waktu untuk membaca firman, berdoa, bersekutu, menerima nasihat, dan menerapkan apa yang telah dipelajari." }, { daftar: ["Mulailah dari tindakan sederhana yang dapat dilakukan hari ini.", "Mintalah pertolongan Tuhan agar tetap setia.", "Jadilah berkat bagi orang-orang di sekitar kita." ] }] }
    ],
    sorotan2: "Iman yang bertumbuh selalu terlihat melalui perubahan sikap dan tindakan sehari-hari.",
    penutup: "Sediakan waktu untuk membaca firman, berdoa, bersekutu, menerima nasihat, dan menerapkan apa yang telah dipelajari. Kiranya firman Tuhan menolong kita menjalani hari ini dengan iman, kasih, dan ketaatan.",
    refleksi: "Apa satu perubahan baik yang ingin kita teruskan dalam perjalanan iman bersama Tuhan?"
  }
];
