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