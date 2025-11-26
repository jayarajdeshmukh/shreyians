// shallow copy: 

let obj = {
    name:"Jayaraj",
    age: 24,
    social: { 
        facebook:{
        ac1: "jay@gmail.com",
        ac2: "jayaraj@gmail.com"
    },
    twitter:{
        free:{
            a1:"jay@gmail.com"
        },
        paid:{
            ac1:"jay@gmail.com"
        }
    }
  }
}

 let obj2 = {...obj}; // spread operator

 obj2.social.facebook.ac1= "changed";
 console.log(obj.social.facebook.ac1)
 console.log(obj2.social.facebook.ac1)
