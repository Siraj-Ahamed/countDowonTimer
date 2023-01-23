const d = document.querySelector("#days")
const h = document.querySelector("#hours")
const m = document.querySelector("#minutes")
const s = document.querySelector("#seconds")




// console.log(new Date());
function updateTime() {
const currentYear  = new Date().getFullYear();
const newYear = new Date(`March 23 ${currentYear} 00:00:00`);
const currentDate = new Date();


const diff  = newYear - currentDate;

days = Math.floor(diff/1000/60/60/24);
hrs = Math.floor((diff/1000/60/60)%24);
mins = Math.floor((diff/1000/60)%60);
secs = Math.floor((diff/1000)%60);

d.innerHTML = days > 100 ? days : days > 10 ?  "0" + days : "00" + days; 
h.innerHTML = hrs < 10 ? "0" + hrs : hrs;
m.innerHTML = mins  < 10 ? "0" + mins : mins;
s.innerHTML = secs  < 10 ? "0" + secs : secs;

console.log(days + " " + hrs + " " + mins + " " +secs);
}

updateTime();
setInterval(updateTime,1000);




// milliSecs = Math.floor(diff%1000);



