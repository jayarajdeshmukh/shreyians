 // arrays = you can store multiple values 
 // syntax = let arr = [];

 // modify array (replace index)
 let arr=[1,2,3];
 arr[2] = 12;

 /* Array Methods
  1. Push (add at end)
  2. Pop  (remove end)
  3. shift  (remove first)
  4. unshift (add first)
  5. splice  (remove from middle)
  6. slice (main array does not change . The new array will change)
  7. reverse 
  8. sort 
*9. map
*10. filter
*11. reduce
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


