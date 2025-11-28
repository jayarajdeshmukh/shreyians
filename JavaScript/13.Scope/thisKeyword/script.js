 /* this keyword
    1. this keyword value in global scope is window
    2. this keyword value in function is window
    3. this keyword ki value object ke andar method ke andar 
         vapis se change hokar object ho jati hai 
 */

  // 1. this in Global Scope (Browser)
  console.log(this); // It refers to the window object in browser.

  // 2. this Inside an Object Method
   //  If a function is inside an object, this points to that object.

 let obj = {
    name: "Jayaraj",
    age:24,
    sayName: function(){
       console.log(this.name)
    }
 }
 obj.sayName();

 // 3. this Inside Event Listeners (events mey this keyword event jiske uper lga hai wo hai this keyword)
       // this refers to the element that received the event.
  let button = document.querySelector("button");
  button.addEventListener("click",function(){
    console.log(this);
  })

  // class
  class Abcd{
    
}

  // call apply bind
  let object1 = {
   name:"Jayaraj",
   age:24
  } 
   
   function abd(){
      console.log(this.name)
   }

   abd.call(object1); // hamesha function hi call likhna hai

