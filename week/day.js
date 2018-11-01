let day = new Date();
let weekday = new Array(7);
let description = new Array(7);
weekday[0] = "Huh, right... It's sunday.";
weekday[1] = "Monday??? Monday...";
weekday[2] = "Hm, it's tuesday. I guess...";
weekday[3] = "What a perfect day? It's wednesday!";
weekday[4] = "It's thursday, honey!";
weekday[5] = "Yeeeah! Friday! I love it.";
weekday[6] = "Saturday? My congratulations!";

description[4] = "Thursday is a good day."

let enter = weekday[day.getDay()];
document.getElementById("day").innerHTML = enter;

let pass = description[day.getDay()];
document.getElementById("description").innerHTML = pass;
