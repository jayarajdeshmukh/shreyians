/* // addEventListener click
let p = document.querySelector("P")
p.addEventListener("click", function(){
    p.style.color="red";
})

// dbl click
let h1 = document.querySelector("h1");
h1.addEventListener("dblclick", function(){
    h1.style.backgroundColor="black"
    h1.style.color="red"
})


// input listner
let inp = document.querySelector("input");
inp.addEventListener("input", function(dets){
    if(dets.data !== null){
        console.log(dets.data)
    }
})

//  change event = its only apply when any change in input or textarea 
 let sel =  document.querySelector("select");
   let device = document.querySelector("#device")
 sel.addEventListener("change", function(dets){
   device.textContent =`${dets.target.value} device selected`
   console.log(dets.target.value)
 })


  // approach
  let h1 = document.querySelector("h1")
  window.addEventListener("keydown",function(dets){
    if(dets.key === " "){
        h1.textContent = "SPC"
    }else{
        h1.textContent = dets.key
    }
  })
*/


   // file select
  /* let btn = document.querySelector("#btn");
   let fileinp = document.querySelector("#fileinp");

   btn.addEventListener("click", function(){
     fileinp.click()
   })

   fileinp.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
   })

   // Submit Event
   const form = document.getElementById("myForm");
   form.addEventListener("submit",function(event){
    event.preventDefault(); 

    const nameValue = document.getElementById("name").value;
    console.log("Form Submitted", nameValue);

   })

    */
// form submit event
  let form = document.querySelector("form");
   let inputs =  document.querySelectorAll("input");
  let main =  document.querySelector("#main")

  form.addEventListener("submit",function(dets){
     dets.preventDefault();   // this will stop for page reloads
     let card = document.createElement("div");
     card.classList.add("card")

     let profile = document.createElement("div");
     profile.classList.add("profile");

     let img = document.createElement("img")
     img.setAttribute("src","https://images.unsplash.com/photo-1759681770972-560b9949da0b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D");

     let h3 = document.createElement("h3")
     h3.textContent="Nature"
     let h5 = document.createElement("h5")
     h5.textContent="Beutiful"
     let p = document.createElement("p")
     p.textContent="Nature is so beutiful"


     profile.appendChild(img);
     card.appendChild(profile);

     card.appendChild(h3)
     card.appendChild(h5)
     card.appendChild(p)

     main.appendChild(card)
    })

