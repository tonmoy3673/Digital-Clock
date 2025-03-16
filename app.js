

let hours = document.getElementById('hour')
let minutes = document.getElementById('mins');
let seconds = document.getElementById('sec');
console.log(hours,minutes,seconds);

// ========= Play the clock =====//

setInterval(()=>{
    let date = new Date();
    hours.innerText= date.getHours()<10 ? '0' + date.getHours() : date.getHours();
    minutes.innerText=date.getMinutes()<10?'0'+ date.getMinutes() : date.getMinutes();
    seconds.innerText=date.getSeconds()<10?'0'+ date.getSeconds() : date.getSeconds();
},1000)
