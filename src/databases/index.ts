const cardData = [
  {
    id: 1,
    question:
      "Jika kamu punya anak apa pesan yang akan kamu berikan kepadanya tentang CINTA?",
  },
  {
    id: 2,
    question: "Apa hal paling aneh yang pernah kamu cari di GOOGLE SEARCH",
  },
  {
    id: 3,
    question:
      "Apa hal yang tidak akan pernah bisa kamu kompromikan ketika menjalin hubungan",
  },
  {
    id: 4,
    question:
      "Sebutkan tiga alasan mengapa menurutmu kamu akan menjadi pasangan yang baik",
  },
  {
    id: 5,
    question: "Apa hadiah terbaik yang pernah kamu terima?",
  },
  {
    id: 6,
    question: "Apakah kamu ingin jadi hebat? Dalam hal apa?",
  },
  {
    id: 7,
    question: "Apa menurut dirimu hari yang 'sempurna' itu?",
  },
  {
    id: 8,
    question:
      "Dari semua orang di keluargamu, kematian siapa yang menurutmu akan paling mengganggu hidupmu? Kenapa?",
  },
  {
    id: 9,
    question:
      "Jika kamu tahu bahwa dalam satu tahun kamu akan meninggal tiba-tiba, apa yang akan kamu lakukan di tahun terakhirmu",
  },
  {
    id: 10,
    question:
      "Jika bola kristal bisa memberi tahu kebenaran tentang dirimu, kehidupanmu, masa depanmu atau hal lainnya, apa yang paling ingin kamu ketahui?",
  },
  {
    id: 11,
    question:
      "Kalau kamu bisa mengubah apapun dalam cara kamu dibesarkan dari kecil, apa yang akan kamu ubah?",
  },
  {
    id: 12,
    question:
      "Sebutkan minimal 1 hal yang kamu dan aku/pasanganmu/sahabatmu punya kesamaan!",
  },
  {
    id: 13,
    question:
      "Sebutkan minimal 1  sifat positif yang dimiliki setiap orang yang ada disini, dalam pandangan kamu",
  },
  {
    id: 14,
    question:
      "Sebutkan minimal 1  sifat negatif yang dimiliki setiap orang yang ada disini, dalam pandangan kamu",
  },
  {
    id: 15,
    question: "Apa yang paling kamu takutkan terjadi di masa depan?",
  },
  {
    id: 16,
    question:
      "Jika boleh memilih siapapun di dunia ini untuk menjadi pasangan hidupmu, kamu akan memilih siapa?",
  },
  {
    id: 17,
    question:
      "Caraku menunjukan rasa sayang kepada orang lain adalah dengan...",
  },
  {
    id: 18,
    question:
      "Jika mesin waktu ditemukan, kemana kamu akan pergi? masa lalu atau masa depan",
  },
  {
    id: 19,
    question: "Berapa persentase pengaruh orang lain bagimu?",
  },
  {
    id: 20,
    question:
      "Jika kamu diberikan kemampuan untuk menemui orang yang sudah meninggal, siapa yang paling ingin kamu temui?",
  },
  {
    id: 21,
    question: "Apa ketakutan terbesarmu?",
  },
  {
    id: 22,
    question: "Siapakah karakter film atau televisi favoritmu?",
  },
  {
    id: 23,
    question: "Apa yang membuatmu semangat menjalani hidup sekarang?",
  },
  {
    id: 24,
    question:
      "Bagaimana cara kamu berdamai dengan hal paling buruk yang pernah terjadi dalam hidup kamu?",
  },
  {
    id: 25,
    question:
      "Apakah kamu bersedia membuka amplop yang berisikan tanggal kematianmu?",
  },
  {
    id: 26,
    question:
      "Hal apa yang akan kamu lakukan agar terlihat berbeda dengan orang lain?",
  },
  {
    id: 27,
    question:
      "Jika sebuah kebahagiaan hanya bisa diukur oleh uang, apakah pekerjaan yang seharusnya kamu jalani saat ini?",
  },
  {
    id: 28,
    question: "Apa pengalaman terbaikmu selama hidup?",
  },
  {
    id: 29,
    question: "Tanggapanmu tentang tanggung jawab?",
  },
  {
    id: 30,
    question: "Apakah kamu bahagia?",
  },
  {
    id: 31,
    question: "Apa keputusan terberat yang pernah kamu buat?",
  },
  {
    id: 32,
    question: "Apa kamu sedang baik-baik saja?",
  },
  {
    id: 33,
    question: "Bagaimana dunia memperlakukanmu?",
  },
  {
    id: 34,
    question: "Bagimu, apa arti hidup?",
  },
  {
    id: 35,
    question: "Apa jenis musik favoritmu?",
  },
  {
    id: 36,
    question: "Apa lagu kesukaanmu?",
  },
  {
    id: 37,
    question: "Bagaimana menurutmu tentang kamar tidur yang berantakan?",
  },
  {
    id: 38,
    question:
      "Bila dulu kamu pernah melakukan kesalahan kepada orang lain dan belum dimintai maaf, siapa orang yang akan kamu mintai maaf saat itu juga?",
  },
  {
    id: 39,
    question: "Apa pendapatmu tentang cita-cita?",
  },
  {
    id: 40,
    question: "Apa hal yang ingin kamu capai dalam waktu dekat?",
  },
  {
    id: 41,
    question:
      "Lebih baik fokus pada hari ini atau mempersiapkan esok hari? Apa alasannya?",
  },
  {
    id: 42,
    question: "Pilih laki-laki/perempuan humoris atau perhatian?",
  },
  {
    id: 43,
    question:
      "Kamu diberikan tiket berlibur ke luar negri, siapa orang pertama yang akan kamu ajak setelag keluarga?",
  },
  {
    id: 44,
    question: "Apa Pendapatmu tentang perokok?",
  },
  {
    id: 45,
    question: "Apa Pendapatmu tentang melakukan dosa?",
  },
  {
    id: 46,
    question:
      "Seandainya kamu diberikan kekuatan untuk mengendalikan pikiran selurus umat manusia, apa yang akan kamu lakukan dengannya?",
  },
  {
    id: 47,
    question: "Logika atau perasaan?",
  },
  {
    id: 48,
    question: "Sudah berapa hal yang kamu kritisi hari ini?",
  },
  {
    id: 49,
    question:
      "Jika kamu ditakdirkan menjadi binatang, kira-kira jadi binatang apakah kamu?",
  },
  {
    id: 50,
    question: "Mana yang kamu pilih, uang atau waktu luang?",
  },
  {
    id: 51,
    question:
      "Apa hal yang pernah menjadi kebiasaan kamu yang sekarang sudah kamu tinggalkan?",
  },
  {
    id: 52,
    question: "Coklat atau Permen Kapas?",
  },
  {
    id: 53,
    question: "Menurutku cinta adalah...",
  },
  {
    id: 54,
    question:
      "Apakah orang lain dapat menjadi alasan kamu untuk bergairah melakukan sesuatu?",
  },
  {
    id: 55,
    question:
      "Sebutkan kesan paling buruk dari orang lain yang pernah kamu alami?",
  },
  {
    id: 56,
    question: "Deskripsikan pertemananmu dengan judul film",
  },
  {
    id: 57,
    question: "Deskripsikan hubungan terakhirmu dengan judul film",
  },
  {
    id: 58,
    question: "Deskripsikan pertemananmu dengan judul lagu",
  },
  {
    id: 59,
    question: "Deskripsikan hubungan terakhirmu dengan judul lagu",
  },
  {
    id: 61,
    question: "Hidup yang bagaimana yang menurutmu ideal?",
  },
  {
    id: 62,
    question: "Apakah ada orang jahat dan baik di dunia?",
  },
  {
    id: 63,
    question: "Jika kamu ditakdirkan menjadi benda mati, kamu ingin jadi apa?",
  },
  {
    id: 64,
    question: "Berapa jam dalam sehari kamu menggunakan smartphone?",
  },
  {
    id: 65,
    question:
      "Semisal kamu memiliki pasangan, gaya berpasangan yang bagaimana yang kamu inginkan?",
  },
  {
    id: 66,
    question: "Apa arti agama bagimu?",
  },
  {
    id: 67,
    question:
      "Diumurmu yang keberapa kamu mulai sadar bahwa hidup tidak semudah yang dibayangkan?",
  },
  {
    id: 68,
    question: "Di umurmu yang keberapa kamu akan menikah?(jika belum)",
  },
  {
    id: 69,
    question: "Apa hal yang paling kamu sesali selama hidup",
  },
  {
    id: 70,
    question: "Sebutkan minimal 2 hal negatif dari dirimu sendiri!",
  },
  {
    id: 71,
    question: "Sebutkan minimal 2 hal positif dari dirimu sendiri!",
  },
  {
    id: 72,
    question:
      "Siapa orang yang kamu harap untuk menangisi kamu saat kamu meninggal?",
  },
  {
    id: 73,
    question: "Apa yang kamu harapkan apabila nanti kamu sudah meninggal?",
  },
  {
    id: 74,
    question: "Mana yang lebih penting, Manajemen waktu atau Manajemen uang?",
  },
  {
    id: 75,
    question: "Apa yang ingin kamu lakukan untuk bersenang-senang?",
  },
  {
    id: 76,
    question: "Apa yang paling tidak kamu sukai tentang orang lain?",
  },
  {
    id: 77,
    question: "Apa yang paling tidak kamu sukai tentang diri sendiri?",
  },
  {
    id: 78,
    question:
      "Kalau kamu punya gaji 100 juta dalam sebulan,kira-kira apa yang akan kamu lakukan?",
  },
  {
    id: 79,
    question:
      "Jika suatu hari kamu diberi kesempatan untuk bertemu dengan tokoh atau seorang yang menjadi idola kamu, kamu ingin bertemu dengan siapa?",
  },
  {
    id: 78,
    question:
      "Kalau kamu punya gaji 100 juta dalam sebulan,kira-kira apa yang akan kamu lakukan?",
  },
  {
    id: 79,
    question: "Sebutkan satu kalimat mutiara yang menjadi kesukaanmu!",
  },
  {
    id: 80,
    question:
      "Jika kamu dimintai nasehat oleh teman tentang cinta apa nasehat yang akan kamu berikan?",
  },
  {
    id: 81,
    question:
      "Jika kamu dimintai nasehat oleh teman tentang hidup apa nasehat yang akan kamu berikan?",
  },
  {
    id: 82,
    question: "Berapa jumlah sahabat atau teman paling dekat yang kamu miliki?",
  },
  {
    id: 83,
    question: "Bagaimana cara agar kamu terhibur saat kamu sedih",
  },
  {
    id: 84,
    question:
      "Jika memang ada dunia setelah kematian dan terdapat neraka didalamnya, apa yang kamu bayangkan tentangnya?",
  },
  {
    id: 84,
    question:
      "Jika memang ada dunia setelah kematian dan terdapat neraka didalamnya, apa yang kamu bayangkan tentangnya?",
  },
  {
    id: 85,
    question:
      "Apa hal yang dapat orang lain lakukan sehingga kamu tidak bisa memaafkannya?",
  },
  {
    id: 86,
    question: "Menurut Anda apa bagian terbesar dari persahabatan?",
  },
  {
    id: 87,
    question: "Apa jenis komedi yang kamu suka?",
  },
  {
    id: 88,
    question: "Apakah kamu tipe orang yang mudah tersinggung? Kenapa?",
  },
  {
    id: 89,
    question: "Apakah kamu memiliki fobia terhadap sesuatu? jika ada sebutkan!",
  },
  {
    id: 90,
    question: "Apa pendapatmu tentang berbakti kepada orang tua?",
  },
  {
    id: 91,
    question: "Seberapa banyak pengetahuanmu tentang memasak?",
  },
  {
    id: 92,
    question:
      "Apa hal yang paling kamu rindukan tentang menjadi seorang anak-anak?",
  },
  {
    id: 93,
    question: "Apakah kamu adalah orang yang kompetitif?",
  },
  {
    id: 94,
    question:
      "Apakah kamu memiliki kebiasaan buruk yang ingin kamu tinggalkan?",
  },
  {
    id: 95,
    question: "Apa yang kamu bayangkan tentang surga?",
  },
  {
    id: 96,
    question:
      "Menurutmu apakah ada bakat tersembunyi yang dimiliki setiap orang disini?Jika iya sebutkan!",
  },
  {
    id: 97,
    question: "Apa pendapatmu tentang penampilan?",
  },
  {
    id: 98,
    question: "Apa yang dapat kamu 'jual' dalam lingkungan sosial?",
  },
  {
    id: 99,
    question:
      "Apakah kamu pernah berharap untuk dilahirkan di waktu yang berbeda?",
  },
  {
    id: 100,
    question: "Apakah kamu ingin hidup abadi?",
  },
  {
    id: 100,
    question: "Apakah kamu ingin hidup abadi?",
  },
  {
    id: 101,
    question: "Menurutmu, apa yang harus aku ketahui tentangmu sebagai teman?",
  },
  {
    id: 102,
    question: "Kecerdasan atau penampilan, mana yang lebih kamu hargai?",
  },
  {
    id: 103,
    question: "Apakah kamu percaya cinta pada pandangan pertama?",
  },
  {
    id: 104,
    question:
      "Bagaimana tanggapanmu tentang 'pertemanan laki-laki dan perempuan adalah omong kosong'?",
  },
  {
    id: 105,
    question: "Jelaskan pendapatmu tentang menerima",
  },
  {
    id: 106,
    question: "Jelaskan pendapatmu tentang memberi",
  },
  {
    id: 107,
    question:
      "Jika kamu terpilih sebagai presiden, sebutkan satu hal yang akan kamu ubah tentang negara!",
  },
  {
    id: 108,
    question: "Apa pendapatmu tentang diri setiap orang yang ada disini?",
  },
  {
    id: 107,
    question:
      "Jika kamu diberikan pilihan untuk bahagia selamanya di dunia atau diberikan tiker masuk surga. Mana yang kamu pilih?",
  },
  {
    id: 108,
    question:
      "Sebutkan tiga alasan mengapa menurutmu kamu akan menjadi pasangan yang buruk",
  },
];

export default cardData;
