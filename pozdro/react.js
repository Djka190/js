let godz = document.getElementById("godz")
let min = document.getElementById("min")
let sek = document.getElementById("sek")

setInterval(() => {
    let currentTime = new Date();

godz.innerHTML = currentTime.getHours()
min.innerHTML = currentTime.getMinutes()
sek.innerHTML = currentTime.getSeconds()
}, 1000)



