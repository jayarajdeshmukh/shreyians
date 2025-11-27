/* select html element
     document.querySelector
     document.querySelectorAll
     document.getElementById
     document.getElementsByClassName
*/

  let pqr = document.getElementById("demo");
 pqr.textContent = "Hey Guys"
console.dir(pqr);

 let qwe = document.getElementsByClassName("demo1");
console.dir(qwe)


// setAttribute
let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com/")

let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1744218594257-80bdd79b2b5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D")