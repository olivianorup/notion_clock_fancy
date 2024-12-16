function getWeekNumber(date) {
    // Lav en kopi af den givne dato i UTC for at undgå tidszoneproblemer
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // ISO 8601 uger starter mandag, men getUTCDay() giver søndag som 0.
    // Hvis dayNum er 0, sæt den til 7 for at matche ISO logikken.
    const dayNum = d.getUTCDay() === 0 ? 7 : d.getUTCDay();

    // Flyt datoen til nærmeste torsdag (4 dage frem fra mandag)
    // Dette skyldes at uge 1 er defineret som ugen der indeholder årets første torsdag.
    d.setUTCDate(d.getUTCDate() + (4 - dayNum));

    // Hent årets start (1. januar, kl. 00:00:00)
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    // Beregn uge nummer: divider antallet af dage siden årets start med 7
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);

    return weekNo;
}

function week() {
    var today = new Date();
    var weekNo = getWeekNumber(today);

    document.getElementById("week").innerHTML = "Uge" + "<spacer>"+" "+"</spacer>" + weekNo;
}
week();

function date(){
    var today = new Date();

    var day = today.getDay();

    var dayList = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    var monthList = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]

    document.getElementById("date").innerHTML = dayList[day] + "<spacer>"+" "+"</spacer>" + "<spacer>"+" "+"</spacer>" + "<spacer>"+" "+"</spacer>" + date + "<spacer>"+". "+"</spacer>" + monthList[month] + "<spacer>"+" "+"</spacer>" + year;
}
date();

function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    var hh = document.getElementById("hh");
    var mm = document.getElementById("mm");
    var ss = document.getElementById("ss"); 

    var hr_dot = document.querySelector(".hr_dot");
    var min_dot = document.querySelector(".min_dot");
    var sec_dot = document.querySelector(".sec_dot");

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

     var time = setTimeout(function(){
        clock();
    }, 1000);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h + "<br><span>Timer</span>";
    minutes.innerHTML = m + "<br><span>Minutter</span>";
    seconds.innerHTML = s + "<br><span>Sekunder</span>";

    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 24 timer ur
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutter
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 sekunder

    hr_dot.style.transform = `rotate(${h * 15}deg)`;
    // 360 / 24 = 15
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    // 360 / 60 = 6
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 60 = 6
}
clock();