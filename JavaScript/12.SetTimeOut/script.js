// setTimeOut
        setTimeout(function(){
           console.log("Hello")
        },5000)  // 5secs      

/* setInterval
        setInterval(function(){
           console.log("Hello")
        },5000)  // 5secs  
*/

// clearTimeOut : it will clear after 3sec
let tm = setTimeout(function(){
   console.log("Hello")
},3000)
clearTimeout(tm);

/* count 10
let count = 10;
let interval = setInterval(function(){
   if(count>=0){
    console.log(count);
    count--;
   }else clearInterval(interval)
},1000)
*/


// downloaded
let count = 0
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector(".percent");

let intev = setInterval(function(){
   if(count<=99){
    count++
    progress.style.width = `${count}%`
    percentText.textContent = `${count}%`
   }
   else{
    document.querySelector("h2").textContent = "Downloaded"
    clearInterval(intev)
   }
},30)
