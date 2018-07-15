function WorkTime()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("Wdate").innerHTML=localdate;
}

function RelaxTime()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("Rdate").innerHTML=localdate;
}

function SleepTime()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("Sdate").innerHTML=localdate;
}

function FamilyTime()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("Fdate").innerHTML=localdate;
}

