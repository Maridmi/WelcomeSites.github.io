let elem2 = document.getElementById('day'); 
for (let z = 1; z < 32; z++){ 
let day1 = document.createElement('option'); 
  day1.id = String(z); 
  day1.innerHTML = String(z); 
  elem2.append(day1); 
  console.log(z);
}

let elem1 = document.getElementById('year'); 
let now1 = new Date().getTime();
console.log(Math.floor(now1/1000/60/60/24/365));
for (let i = 1940; i < Math.ceil(now1/1000/60/60/24/365) + 1970; i++){ 
let opt = document.createElement('option'); 
  opt.id = String(i); 
  opt.innerHTML = String(i); 
  elem1.append(opt); 
  console.log(i);
}
let x;

function Add() {
if (x!==undefined){
    clearInterval(x);
  }
let day = document.getElementById('day').value ;
console.log(day);
let month = document.getElementById('month').value ;
console.log(month);
let year = document.getElementById('year').value ;
console.log(year);
  let countDownDate = new Date(year,month,day);
  console.log(new Date("2011","1","1"));
  console.log(countDownDate);

  x = setInterval(function() {
    let now = new Date().getTime();
    let distance = now - countDownDate;
    
    let years = Math.floor(distance /(1000*365*60*60*24));
    let days = Math.floor(distance /(1000*60*60*24));
    let hours = Math.floor(distance /(1000*60*60));
    let minutes = Math.floor(distance /(1000*60));
    let seconds = Math.floor(distance /(1000));
    
    document.getElementById("demo").innerHTML = "You are alive by " + "<br />" + years + " years " + "<br />" + days + " days " + "<br />"
    + hours + " hours " + "<br />" + minutes + " minutes " + "<br />" + seconds + " seconds ";
    
}, 1000);
  }
