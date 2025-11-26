let h1= document.querySelector("h1")
 // h1.textContent = ("I am react js developer")

// h1.innerHTML = "<i>Jay</>"

// setAttribute
let a = document.querySelector("a")
a.setAttribute("href" ,"https://chatgpt.com")

// create element
let h2 = document.createElement("h2")
h2.textContent = ("This is append example")
document.body.append(h2)  // append will at last and prepend will add at first

// style using js
h2.style.color = "royalblue"
h2.style.fontSize = "50px"
h2.style.backgroundColor = "skyblue"

// select all list elements and print their text using a loop
let list = document.querySelectorAll("li")
for(let item of list){
    console.log(item.textContent)
}
     // OR
for(let i = 0; i<list.length; i++){
    console.log(list[i].textContent)
}


// select a paragraph and replcae its content with <b>Updated<b/>
let para = document.querySelector("p")
para.innerHTML = "<b>Updated<b/> by Javascript"

// how do you get the src of an image using JS
let img = document.querySelector("img")
 console.log(img.getAttribute("src"))
// or
 console.log(img.src)

 // what does setAttribute() do?
 // => it will change the attribute
 document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1763688496557-46d22a1fbe47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8")

 // select a link and update its href to print to https://sheryians.com
 let b = document.querySelector(".link")
 b.href = "https://www.sheryians.com/"

 // add a title attribute to a div dynamically
document.querySelector("div").setAttribute("title","hover")

// remove the disabled attribute from a button
let btn = document.querySelector("button")
btn.removeAttribute("disabled")