// String Literal
// let name = "John Doe";
// let age = 33;
// let address = "Manado";

// // Hallo nama saya John Doe, umur saya 33 tahun
// // dan saya tinggal di Manado

// let kalimat5 = "Hallo nama saya " + nama + ". Umur saya " + umur + " tahun dan saya tinggal di " + address;
// let kalimat6 = 'Hallo nama saya ${fullName}, umur saya ${age}'
// console.log(kalimat);

// Arrow Function
// ----------------
// function sayGreetings5() {
//     return "Hello world";
// };
// console.log(sayGreetings5());

// const sayGreetiings6 = () => {
//     return "Hello world"
// };
// console.log(sayGreetings6());

// Implicit Return Value
// const sayGreetiings6 = (name) => 'Hello ${name}';

// // IIfe
// let output = (() => 'Hello')();
// console.log(output1);

// // pada Callback
// const numbers = [1, 2, 3, 4, 5]

// Default Parameter
// -----------------

const sayGreetings5 = (fullName) => {
    if (fullName === underfined) {
      fullName = ''
    }
    console.log('Hello ${fullName}');
}