function getWeekNumber(date){
    const tempDate = new Date(date.getTime());

    tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 1);

    const startOfYear = new Date(tempDate.getFullYear(), 0, 1);

    const daysDifference = Math.floor((tempDate - startOfYear) / (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil((daysDifference) / 7);
    
    return weekNumber;
}

function week(){
    var today = new Date();
    var weekNumber = getWeekNumber(today);

    document.getElementById("week").innerHTML = "Uge" + "<spacer>"+" "+"</spacer>" + weekNumber;
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