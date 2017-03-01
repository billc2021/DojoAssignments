var hour = 8;
var minute = 50;
var period = "AM"
var message = ""
var in_the = " in the "

if(period == "AM")
{
    var time_of_day = "morning";
}

if(period == "PM")
{
    var time_of_day = "evening";
}

if(minute > 30)
{
    message = "It's almost " + (hour + 1);
}

if(minute < 30)
{
    message = "It's just after " + hour;
}

console.log(message,time_of_day);
