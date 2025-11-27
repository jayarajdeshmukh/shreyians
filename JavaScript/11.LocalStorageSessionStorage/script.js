/* In the local storage we cannot store the arrays, 
   isliye array ko string banakar store krte hai.
    String ko vapis array banane ke liye JSON.parse use krte hai
    and array ko store karne ke liye JSON.stringify use krte hai
 */

// local storage
localStorage.setItem("name","Jayaraj");  // store value
console.log(localStorage.getItem("name"))  // get value
// localStorage.removeItem("name");          // delete data
// localStorage.clear();                   // clear everything

 localStorage.setItem("friends", JSON.stringify(["jay","sudip","mahadev"]))
console.log(localStorage.getItem("friends"));

// session storage
sessionStorage.setItem("city","pune");
console.log(sessionStorage.getItem("city"));


// cookies = chota data save karne ke liye 
// cookies mein jo bhi data store karoge wo data page reload per automatically  server per jayega
 document.cookie= "name=jayaraj"
 document.cookie= "age=24"


