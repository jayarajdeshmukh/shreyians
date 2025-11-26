// print 1-100
for(let i=1; i<=20; i++){
    console.log(i)
}

// 1-100 even numbers
 for(let i=1; i<=20; i++){
    if(i%2 == 0){
        console.log(i)
    }
 }

 // odd numbers
 for(let i=1; i<=20; i++){
    if(i%2 != 0){
        console.log(i)
    }
 }

  // multipliction of 5
  for(b=1; b<=10; b++){
     console.log(b*5)
  }

  // sum of 1-100 numbers
  let sum=0;
  for(c=1; c<=100;c++){
      sum = sum + c
    }
    console.log(sum)
  
    // ask the user number and check it even or odd
   let val =  prompt("Give me a number")
   if(val % 2 == 0){
    console.log(`${val} is even`)
   }else{
    console.log(`${val} is odd`)
   }

   // count how many number between 1 -100 are divisible by both 3 & 5
   let count = 0;
   for(let e = 1; e<=100; e++){
     if(e%3==0 && e%5==0){
        console.log(e)
        count++
     }
   }
     console.log("Total numbers are ",count)


 /* while
       start 
       while(end){
         //code
        change
       }
    */

 let i=1;
 while(i<32){
    console.log(i)
    i++
 }

 /*  
    do{
    
    }
    while(end)
 */

   let a=17;
   do{
    console.log(a);
    a++
   }
   while(a<5)

    // break = it will stop the loop
    for(let i=1; i<=20; i++){
        if(i === 17){
            break;
        }
        console.log(i)
    }

    // continue 
    for(let i=1; i<=20; i++){
        if(i === 17){
            continue;
        }
        console.log(i);
    } 

    // stop at first multiple of 7
    for(let x=1; x<=100; x++){
        console.log(x)
        if(x % 7 === 0){
            break;
        }
    }

    // skip multiple of 3
    for(let y=1; y<=20; y++){
        if(y % 3 == 0)
            continue
            console.log(y)
    }

    // print first 5 odd number only from 1-100
    let count1 = 0;
    for(let q=0; q<=100; q++){
        if(q % 2 === 1  && count1 < 5 ){
            console.log(q)
            count1 ++ ;
        }
    }

    /* OR 
       let count1 = 0;
    for(let q=0; q<=100; q++){
        if(q % 2 === 1){
            console.log(q)
            count1 ++ ;
        }
            if(count === 5)break;
    }
    */
