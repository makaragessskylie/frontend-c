// // //JavaScript Function
// console.log(greetings("John"));//argument

// // functions greetings(){
// //     return "hello";
// // }

// const greetings = function (fullName) {
//     // parameter
//     console.log(age); //Local
//     const job = "teacher";
//     if (job === teacher) {
      
//     }
// }

// IIFE (Immediately Invoked Function Expression)
(function (){
    console.log("Hello IIFE");
})();

// Callback functions
function createGreetings(name, callback) {
    const greetings = "hello " + name;
    callback(greetings);
}

function logGreetings(greetings) {
    console.log(greetings);
}

createGreetings("John", logGreetings);