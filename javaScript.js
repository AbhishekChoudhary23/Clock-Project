function updateTime() {
    var dateTime = new Date();
    var dname = dateTime.getDay();
    var mo = dateTime.getMonth();
    var dnum = dateTime.getDate();
    var yr = dateTime.getFullYear();
    var hou = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var am_or_pm = document.getElementById("am-or-pm");


     //to start conting from 1 and change AM to PM after 12 
    if (hou > 12) {
        am_or_pm.innerHTML = "PM";
        hou = hou - 12;

    }
    else {
        am_or_pm.innerHTML = "AM";
    }

    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0+n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hours", "minutes", "seconds", "am_or_pm"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), am_or_pm];
    for(var i = 0; i< ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue= values[i];

    // document.getElementById("hours").innerHTML = hours;
    // document.getElementById("minutes").innerHTML = minutes;
    // document.getElementById("seconds").innerHTML = seconds;
}

    setInterval(updateTime, 1000);
