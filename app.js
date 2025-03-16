
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours,minutes,seconds);

document.getElementById('hour').innerText= hours<12?'0'+hours:hours; 