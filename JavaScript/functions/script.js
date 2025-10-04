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

     // rest or spread
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
    // ek fnc jo return ek aur fnc aur return hone waala fnc humesha use karega parent fnc ka koi variable
    function parent(){
      let a=2;               // this is variable
       return function(){
         console.log(a);
       }
    }

    // lexical scopping = function inside function inside function
    // functions can access can access only inside fnc curly braces
    function abcd(){
      let a = 2;
      function def(){
         let b = 3;
         function ghi(){
            let c = 5;
         }
      }
    }

    // hoisting 
    abcd();



    function abcd(){
      console.log("hey");
    }



    