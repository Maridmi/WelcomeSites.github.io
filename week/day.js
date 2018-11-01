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

description[0] = "Sunday is the day of the week between Saturday and Monday. Sunday is a day of rest in most Western countries, as a part of the weekend and weeknight. For most observant Christians, Sunday is observed as a day of worship and rest, holding it as the Lord's Day and the day of Christ's resurrection. In some Muslim countries and Israel, Sunday is the first work day of the week. According to the Hebrew calendar and traditional Christian calendars, Sunday is the first day of the week. But according to the International Organization for Standardization ISO 8601, Sunday is the seventh day of the week. The name 'Sunday', the day of the Sun, is derived from Hellenistic astrology, where the seven planets, known in English as Saturn, Jupiter, Mars, the Sun, Venus, Mercury and the Moon, each had an hour of the day assigned to them, and the planet which was regent during the first hour of any day of the week gave its name to that day. During the 1st and 2nd century, the week of seven days was introduced into Rome from Egypt, and the Roman names of the planets were given to each successive day.";
description[1] = "Monday is the day of the week between Sunday and Tuesday.[1] According to the international standard ISO 8601 it is the first day of the week. The name of Monday is derived from Old English Mōnandæg and Middle English Monenday, originally a translation of Latin dies lunae 'day of the Moon'. In Judaism Mondays are considered auspicious days for fasting. The Didache warned early Christians not to fast on Mondays to avoid Judaizing, and suggests Wednesdays instead. In Judaism the Torah is read in public on Monday mornings, one of three days the Torah is read each week (the other two days being Thursday and Saturday). Special penitential prayers are recited on Monday, unless there is a special occasion for happiness which cancels them.";
description[2] = "Tuesday is the day of the week between Monday and Wednesday. According to international standard ISO 8601, it is the second day of the week. According to some commonly used calendars, however, especially in the United States, it is the third day of the week. The English name is derived from Old English Tiwesdæg and Middle English Tewesday, meaning 'Tīw's Day', the day of Tiw or Týr, the god of single combat, and law and justice in Norse mythology. Tiw was equated with Mars in the interpretatio germanica, and the name of the day is a translation of Latin dies Martis. In some Slavic languages the word Tuesday originated from Old Church Slavonic word въторъ meaning 'the second'. Bulgarian and Russian 'Вторник' (Vtornik) (Serbian:уторак (utorak)) is derived from the Bulgarian and Russian adjective for 'Second' - 'Втори' (Vtori) or 'Второй' (Vtoroi).";
description[3] = "Wednesday is the day of the week between Tuesday and Thursday. According to international standard ISO 8601 it is the third day of the week. In countries that use the Sunday-first convention and in the Jewish Hebrew calendar Wednesday is defined as the fourth day of the week. The name Wednesday continues Middle English Wednesdei. Old English still had wōdnesdæg, which would be continued as Wodnesday (but Old Frisian has an attested wednesdei). By the early 13th century, the i-mutated form was introduced unetymologically. The name is a calque of the Latin dies Mercurii 'day of Mercury', reflecting the fact that the Germanic god Woden (Wodanaz or Odin) during the Roman era was interpreted as 'Germanic Mercury'.";
description[4] = "Thursday is the day of the week between Wednesday and Friday. According to the ISO 8601 international standard, it is the fourth day of the week. <br/><br/>In most Romance languages, the day is named after the Roman god Jupiter, who was the god of sky and thunder. Since the Roman god Jupiter was identified with Thunor (Norse Thor in northern Europe), most Germanic languages name the day after this god: Torsdag in Danish, Norwegian, and Swedish, Tórsdagur in Faroese & etc. <br/><br/>In the Christian tradition, Maundy Thursday or Holy Thursday is the Thursday before Easter — the day on which the Last Supper occurred. Also known as Sheer Thursday in the United Kingdom, it is traditionally a day of cleaning and giving out Maundy money there. Holy Thursday is part of Holy Week. In the Eastern Orthodox Church. Thursdays are dedicated to the Apostles and Saint Nicholas. The Octoechos contains hymns on these themes, arranged in an eight-week cycle, that are chanted on Thursdays throughout the year. At the end of Divine Services on Thursday, the dismissal begins with the words: 'May Christ our True God, through the intercessions of his most-pure Mother, of the holy, glorious and all-laudable Apostles, of our Father among the saints Nicholas, Archbishop of Myra in Lycia, the Wonder-worker…' Ascension Thursday is 40 days after Easter, when Christ ascended into Heaven.";
description[5] = "Friday is the day of the week between Thursday and Saturday. In countries adopting the 'Monday-first' convention it is the fifth day of the week. In countries that adopt the 'Sunday-first' convention, it is the sixth day of the week. In some other countries, for example Saudi Arabia and the Maldives, Friday is the first day of the weekend, with Saturday the second. In Afghanistan Friday is the last day of the weekend, with Saturday as the first day of the working week. The name Friday comes from the Old English Frīġedæġ, meaning the 'day of Frige', a result of an old convention associating the Old English goddess Frigg with the Roman goddess Venus, with whom the day is associated in many different cultures. Friday is considered unlucky in some cultures. This is particularly so in maritime circles; perhaps the most enduring sailing superstition is that it is unlucky to begin a voyage on a Friday.";
description[6] = "Saturday is the day of the week between Friday and Sunday. The Romans named Saturday Sāturni diēs ('Saturn's Day') no later than the 2nd century for the planet Saturn, which controlled the first hour of that day, according to Vettius Valens. The international standard ISO 8601 sets Saturday as the sixth day of the week. The three Abrahamic religions (Judaism, Christianity and Islam) regard Saturday as the seventh day of the week. As a result, many refused the ISO 8601 standards and continue to use Saturday as their seventh day.";

let enter = weekday[day.getDay()];
document.getElementById("day").innerHTML = enter;

let pass = description[day.getDay()];
document.getElementById("description").innerHTML = pass;
