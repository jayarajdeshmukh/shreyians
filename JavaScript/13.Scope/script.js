// closures
function abcd(){
    let a=2;
    return function (){
        console.log(a)
    }
}
let fnc = abcd();
fnc();

// counter
function countForMe(){
    let c= 0;
    return function(){
        c++;
        console.log(c)
    }
}
 let fnct = countForMe();
  fnct();  // 1
  fnct();  // 2
  fnct();  // 3

  let fnct2 = countForMe();
  fnct2();  // 1
  fnct2();  // 2 
  fnct2();  // 3
  fnct2();  // 4

  // click limiter
  function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){
            click++
            console.log(`clicked : ${click} times`)
           }else{
            console.log("limit exceeded, try after some time")
           }
      }
  }

  let fun = clickLimiter();
  fun();
  fun();
  fun();
  fun();
  fun();
  fun();

  // toaster = small popup notification
function showToast() {
  let toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

showToast();

 /* this keyword
    1. this keyword value in global scope is window
    2. this keyword value in function is window
    3. this keyword ki value object ke andar method ke andar 
         vapis se change hokar object ho jati hai 
 */
 let obj = {
    name: "Jayaraj",
    age:24,
    sayName: function(){
       console.log(this.name)
    }
 }
 obj.sayName();