/* click
let h1 =  document.querySelector("h1");
 h1.addEventListener("click",function(){
   h1.style.color = "red";
})   */

/* input
let input = document.querySelector("input");
input.addEventListener("input", function(dets){
    if(dets.data !== null){
        console.log(dets.data)
    }
})    */

 /* change event = its only apply when any change in input or textarea 
  let sel = document.querySelector("select");
  let device = document.querySelector("#device")

  sel.addEventListener("change",function(dets){
    console.log(dets.target.value)
    device.textContent =`${dets.target.value} device Selected`;
  })
  */

  /* approach
   let h1 = document.querySelector("h1");
  window.addEventListener("keydown",function(dets){
      if(dets.key === " "){
        h1.textContent = "SPC"
        } else{
           h1.textContent = dets.key
      }
  })
  */

  // submit
  