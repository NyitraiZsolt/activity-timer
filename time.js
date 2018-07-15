
//WORK TIME START AND STOP
function WorkTimeStart()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("WdateStart").innerHTML=localdate;
}

function WorkTimeStop()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("WdateStop").innerHTML=localdate;
}
//RELAX TIME START ADN STOP
function RelaxTimeStart()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("RdateStart").innerHTML=localdate;
}
function RelaxTimeStop()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("RdateStop").innerHTML=localdate;
}
//SLEEP TIME START AND STOP
function SleepTimeStart()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("SdateStart").innerHTML=localdate;
}
function SleepTimeStop()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("SdateStop").innerHTML=localdate;
}
//FAMILY TIME START AND STOP
function FamilyTimeStart()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("FdateSart").innerHTML=localdate;
}
function FamilyTimeStop()
{
    var dNow = new Date();
    let localdate= (dNow.getDate() + '/' + dNow.getMonth() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes());
    document.getElementById("FdateStop").innerHTML=localdate;
}

