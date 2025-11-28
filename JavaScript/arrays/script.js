 // arrays = you can store multiple values 
 // syntax = let arr = [];

 // modify array (replace index)
 let arr=[1,2,3,4];
 arr[2] = 12;  // 1,2,12,4

 /* Array Methods
  1. Push (add at end)
  2. Pop  (remove end)
  3. shift  (remove first)
  4. unshift (add first)
  5. splice  (remove from middle)
  6. slice (main array does not change . The new array will change)
  7. reverse (reverse the array)
  8. sort = a-b assending order, b-a = descending order
  9. for each= when we want to run some code for every element of an array, but we don’t need to return a new array.
*10. map = map sirf tab use krna hai jab aapko ek naya array banana hai pichle array ke data ke basis par
*11. filter = “Array me se sirf required items ko choose karna.”
*12. reduce = reduces an array into single value
 13. some = it will print true or false (“Array me at least 1 element aisa hai kya jo condition pass kare?”)
 14. every  = “Array me sabhi elements condition pass kar rahe hain kya?”
             true → if all elements match the condition
             false → if any one element fails the condition
 15. find = “Jo element sabse pehle condition pass kare, bas woh de do.” 
            Stops searching as soon as it finds the first match (fast)
*/

  let array = [1,2,3];     //Push = 700 will add at end of array
  array.push(700);  
  
  let arra = [1,2,3,4];     // pop = 4 will remove
  arra.pop();

  let arrays = [1,2,3,4];   // shift = 1 will remove
  arrays.shift();

  let first = [1,2,3,4];   // unshift = add first
  first.unshift(0);

  let middle = [1,2,3,4,5]    // remove from middle
  middle.splice(2,1);        // 2 is 2nd index number and 1 is how many values you want to remove

  let arey = [1,2,3,4,5];     // remove index from to 
  let newarey = arey.slice(0,3)    // from which index to index you want to print
  

  // Reverse  = reverse the array
  let hi = [1,2,3,4,5]
  hi.reverse();

  // sort = a-b assending order, b-a = descending order
  let so = [74,52,30,50,80];
  let sr = so.sort(function(a,b){
    return a-b;
  }) 

  // for each= when we want to run some code for every element of an array, but we don’t need to return a new array.
  let arrayss=[2,5,3,8,10];
  arrayss.forEach(function (val){
    console.log(val + 5);
  })

  // map = map sirf tab use krna hai jab aapko ek naya array banana hai pichle array ke data ke basis par
   let pqr = [2,5,3,7,4];
   let newpqr = pqr.map(function(){
    return 12;
   })
 console.log(newpqr);

   // filter = “Array me se sirf required items ko choose karna.”
   let kjh = [1,2,3,4,5,6,7,8];
   let newkjh = kjh.filter(function(val){
    if(val>4) return true
   })

   // reduce = reduces value in a single value
   let fgh = [1,2,3,4,5,6];
   let ans = fgh.reduce(function(accumulator, val){
       return accumulator + val;
   },0)

   // some = it will print true or false (“Array me at least 1 element aisa hai kya jo condition pass kare?”)
   let rty = [30,4,80,96,52,30];
   let any = rty.some(function(val){
    return val>90;
   })

   // every  = “Array me sabhi elements condition pass kar rahe hain kya?”
   // true → if all elements match the condition
  // false → if any one element fails the condition
   let eve = [9,30,25,62,42];
   let neweve = eve.every(function(val){
    return val>10;
   })

   /*
    | Method       | Returns      | When to Use                               
| ------------ | ------------ | ----------------------------------------- |
| **some()**   | true / false | Check if at least **one** element matches |
| **every()**  | true / false | Check if **all** elements match           |
| **filter()** | new array    | Get **all matching elements**             |
 
   */

   // find = “Jo element sabse pehle condition pass kare, bas woh de do.” 
            //Stops searching as soon as it finds the first match (fast)
   let jhi = [8,65,25,45,0.2,10.25]
   let newjhi = jhi.find(function(val){
     return val<10
   })

   // use .some() to check if any student has scored below 35
   let stud = [45,60,28,90]
   let newstud =  stud.some(function(val){
    return val <= 35
   })


   