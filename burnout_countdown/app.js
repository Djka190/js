let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let burnout_date = new Date("2024/11/14 00:00:00")

setInterval(() => {
    let currentTime = new Date()
    if ((burnout_date.getDay() - currentTime.getDay()) < 10)
    {
        days.innerHTML = "0" + (burnout_date.getDay() - currentTime.getDay())
    }
    else
    {
        days.innerHTML = burnout_date.getDay() - currentTime.getDay()
    }
    if ((23 - (currentTime.getHours() - burnout_date.getHours())) < 10)
    {
       hours.innerHTML = "0" + (23 - (currentTime.getHours() - burnout_date.getHours()))
    }
    else
    {
        hours.innerHTML = 23 - (currentTime.getHours() - burnout_date.getHours())
    }
    if ((59 - (currentTime.getMinutes() - burnout_date.getMinutes())) < 10)
    {
        minutes.innerHTML = "0" + (59 - (currentTime.getMinutes() - burnout_date.getMinutes()))
    }
    else
    {
        minutes.innerHTML = 59 - (currentTime.getMinutes() - burnout_date.getMinutes())
    }
    if ((59 - (currentTime.getSeconds() - burnout_date.getSeconds())) < 10)
    {
        seconds.innerHTML = "0" + (59 - (currentTime.getSeconds() - burnout_date.getSeconds()))
    }
    else
    {
        seconds.innerHTML = 59 - (currentTime.getSeconds() - burnout_date.getSeconds())
    }
    
}, 1000)