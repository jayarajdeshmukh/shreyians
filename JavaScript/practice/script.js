/*
let correctNumber = 7; // You can change this
let guess;

while (guess != correctNumber) {
  guess = prompt("Guess a number between 1 and 10:");

  if (guess == correctNumber) {
    console.log("🎉 Correct! You guessed the number.");
  } else {
    console.log("❌ Wrong guess, try again!");
  }
}
*/


// Event loop
console.log("1. Hello");

setTimeout(()=>{
  console.log("2. Hello2")
},3000);

console.log("3. Hello3")

// setTimeOut
setTimeout(() => {
  console.log("This will print after 4s")
}, 4000);

//   setInterval
// setInterval(()=>{
//   console.log("Print Hello after every 2s")
// },2000);


// map
let number = [1,2,3,4];
let double = number.map(function(num){
  return num*2
})

console.log(double); //[2,4,6,8]
console.log(number); // [1,2,3,4] unchanged

// Reduce
let num = [1,2,3,4];
let total = num.reduce(function(acc,curr){
  return acc + curr;
},0);

console.log(total); //10

// closures
 function parent(){
      let a=2;               // this is variable
       return function(){
         console.log(a);
       }
    }
    let child = parent();
    child();

 // events
   let button = document.querySelector("#btn");
   button.addEventListener("click",function(){
    alert("Button Clicked")
   })


   // prevent default
    let form = document.querySelector("#myForm");
    form.addEventListener("submit",function(e){
      e.preventDefault();
      console.log("form submitted")
    })