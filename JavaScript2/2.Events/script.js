 // add event
let para = document.querySelector("p");
para.addEventListener("click",function(){  //single click
    para.style.color = "red"
})
para.addEventListener("dblclick",function(){  // double click
    para.style.fontSize = "40px"
})

// remove event
// para.removeEventListener("dblclick",para )

 // input
 let inp = document.querySelector("input");
 inp.addEventListener("input",function(dets){
     if(dets.data !== null){
         console.log(dets.data)
     }
 })

// change
let sel = document.querySelector("select");
let device= document.querySelector("#device")

sel.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} device selected`
    console.log(dets.target.value)
})

// 2nd example
let select = document.querySelector("#selected")
let h2 = document.querySelector("h2")

select.addEventListener("change",function(dets){
    h2.textContent = `${dets.target.value} is your favourite player`
      console.log(dets.target.value)
})

// submit
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    )
})

// mouse hover
let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow"
})

// mouse out
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "rebeccapurple"
})
