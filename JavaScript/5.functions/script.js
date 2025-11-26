//  functions with parameters and arguments  = fnc ke agge ki value ko paramter kehte hai and jo value pass larte hai use argument 
     function dance(v1){
        console.log(`${v1} nach rha hai`);
     }
     dance("ghoda");
     dance("hiran");

    
     function add(a, b){   // a,b are parameters
        console.log(a+b);
     }
     add(2,3)     // 2,3 are arguments



     // Default parameters  = give values inside parameters is called default parameters
     function add(a=1,b=5){
        console.log(a+b);
     }
     add()


     // rest or spread = collect multiple values into a single array or object.
     function abcd(...val){
        console.log(val)
     }
     abcd(1,2,3,4,5);

     // Return Value 
     function abd(){
      return 12;
     }
    let val= abd();
    console.log(val);

    // return value ex2
    function xyz(v1){
      return 12 + v1
    }
    let v1 = xyz(13)
    console.log(v1);

    // pure vs impure functions
    // aisa fnc jo ki baahar ki value ko naa badle wo hai pure fnc
    let a=12;
    function abcd(){
      console.log("hey");
    }        // this is pure fnc

    function he(){
      a++;
    }           // this is impure fnc

    
    // Closures and lexical scoping
    // Closures = ek fnc jo return ek aur fnc aur return hone waala fnc humesha use karega parent fnc ka koi variable
    function parent(){
      let a=2;               // this is variable
       return function(){
         console.log(a);
       }
    }
   const child = parent();  // inner function return hua
   child();

    // lexical scopping = function inside function inside function
    // functions can access can access only inside fnc curly braces
    function abd(){
      let a = 2;
      function def(){
         let b = 3;
         function ghi(){
           let c = 5;
         }
        }
      }


    // hoisting = moving declarations to the top of the scope
    abcd();



    function abcd(){
      console.log("hey");
    }


    // Use rest parameter to accept any number of scores and return the total
    function getScore(...score){
          let total = 0;
          score.forEach(function(val){
            total = total + val
          })
          return total;
    }
   console.log(getScore(10,20,45,2)) 

   // pass a function into another function and execute it inside
   function jhi(val){
      val();
   }
    jhi(function (){
      console.log("Hello")
    });
    

    // What is higher order function = ek aisa function jo return karein ek aur function
    /*  map()
        filter() // in array only true conditions will return
        reduce()
        foreach()
        setTimeout()
    */

        // map() example
        let num = [1,2,3,4]
        let double = num.map(function(no){
           return no*2
        })
        console.log(double)

        // filter() array me se sirf true condition wale elements ko return karta hai.
       let numo = [45,52,35,94,77];
       let greater = numo.filter(function(n){
        return n > 50
       })
       console.log(greater)

       // reduce() saare values ko single result me convert karta hai
       let numbe = [2,5,7,3,4];
       let sumnum = numbe.reduce(function(total , n){
         return total + n
       })
       console.log(sumnum)