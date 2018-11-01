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

description[0] = "";
description[1] = "";
description[2] = "";
description[3] = "The name Wednesday continues Middle English Wednesdei. Old English still had wōdnesdæg, which would be continued as *Wodnesday (but Old Frisian has an attested wednesdei). By the early 13th century, the i-mutated form was introduced unetymologically. The name is a calque of the Latin dies Mercurii 'day of Mercury', reflecting the fact that the Germanic god Woden (Wodanaz or Odin) during the Roman era was interpreted as 'Germanic Mercury'.";
description[4] = "In most Romance languages, the day is named after the Roman god Jupiter, who was the god of sky and thunder. Since the Roman god Jupiter was identified with Thunor (Norse Thor in northern Europe), most Germanic languages name the day after this god: Torsdag in Danish, Norwegian, and Swedish, Tórsdagur in Faroese & etc. In the Christian tradition, Maundy Thursday or Holy Thursday is the Thursday before Easter — the day on which the Last Supper occurred. Also known as Sheer Thursday in the United Kingdom, it is traditionally a day of cleaning and giving out Maundy money there. Holy Thursday is part of Holy Week. In the Eastern Orthodox Church. Thursdays are dedicated to the Apostles and Saint Nicholas. The Octoechos contains hymns on these themes, arranged in an eight-week cycle, that are chanted on Thursdays throughout the year. At the end of Divine Services on Thursday, the dismissal begins with the words: 'May Christ our True God, through the intercessions of his most-pure Mother, of the holy, glorious and all-laudable Apostles, of our Father among the saints Nicholas, Archbishop of Myra in Lycia, the Wonder-worker…' Ascension Thursday is 40 days after Easter, when Christ ascended into Heaven.";
description[5] = "";
description[6] = "";

let enter = weekday[day.getDay()];
document.getElementById("day").innerHTML = enter;

let pass = description[day.getDay()];
document.getElementById("description").innerHTML = pass;
