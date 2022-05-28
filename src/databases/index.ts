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
    question: "apa yang paling kamu takutkan terjadi di masa depan?",
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
    question: "deskripsikan pertemananmu dengan judul film",
  },
  {
    id: 57,
    question: "deskripsikan hubungan terakhirmu dengan judul film",
  },
  {
    id: 58,
    question: "deskripsikan pertemananmu dengan judul lagu",
  },
  {
    id: 59,
    question: "deskripsikan hubungan terakhirmu dengan judul lagu",
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
];

export default cardData;
