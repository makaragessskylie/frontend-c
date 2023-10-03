// Buatlah fungsi yang menerima 2 input angka
// dan mengembalikan nilai yang terbesar dari angka
// yang dimasukan

function nilaiTerbesar(bilangan1, bilangan2) {
    if (bilangan1 > bilangan2) {
      return bilangan1;
    } else {
      return bilangan2;
    }
}

  let bilanganPertama = 10;
  let bilanganKedua = 25;
  let terbesar = nilaiTerbesar(bilanganPertama, bilanganKedua);
  console.log("Nilai terbesar adalah: " + terbesar);