// Array Destructuring dengan Default Value
const colors = ["ungu", "kuning"];

// Mengekstrak nilai dari array dengan default value
const [warna1, warna2, warna3 = "hijau"] = colors;

console.log(warna1); // Output: "ungu"
console.log(warna2); // Output: "kuning"
console.log(warna3); // Output: "hijau" (default value)


// Object Destructuring dengan Default Value
const user = {
    nama: "John",
    umur: 30
 };
  
  // Mengekstrak properti dari objek dengan default value
  const {nama, umur, pekerjaan = "Tidak Ada Pekerjaan"} = user;
  
  console.log(nama); // Output: "John"
  console.log(umur); // Output: 30
  console.log(pekerjaan); // Output: "Tidak Ada Pekerjaan" (default value)