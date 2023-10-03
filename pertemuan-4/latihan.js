// Buatlah fungsi yang menerima 2 input angka
// dan mengembalikan nilai yang terbesar dari angka
// yang dimasukan
// Buat dalam bentuk IIFE dan callback Function

// IIFE
(function() {
    let nilaiTerbesar = function(a, b) {
      return a > b ? a : b;
    };
  
    let angka1 = 10;
    let angka2 = 20;
    let result = nilaiTerbesar(angka1, angka2);
    console.log("Nilai terbesar antara " + angka1 + " dan " + angka2 + " adalah: " + result);
})();

// callback Function
function nilaiTerbesar(x, y, callback) {
    let result = x > y ? x : y;
    callback(result);
    }
  
    let angka1 = 15;
    let angka2 = 5;
  
  nilaiTerbesar(angka1, angka2, function(result) {
    console.log("Nilai terbesar antara " + angka1 + " dan " + angka2 + " adalah: " + result);
})(); 