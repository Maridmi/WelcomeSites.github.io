var day = new Date();
var weekday = new Array(7);
weekday[0] = "Huh, right... It's sunday.";
weekday[1] = "Monday??? Monday...";
weekday[2] = "Hm, it's tuesday. I guess...";
weekday[3] = "What a perfect day? It's wednesday!";
weekday[4] = "thursday";
weekday[5] = "Yeeeah! Friday! I love it.";
weekday[6] = "Saturday? OMG I hope so!";

var enter = weekday[day.getDay()];
document.getElementById("day").innerHTML = enter;