var daysUntilMyBirthday = 60;
var message = "";
for(var i = daysUntilMyBirthday; i >= 1; i--)
{
    if(i > 30)
    {
        message = i + " days until my birthday...sooo long.";
    } else if (i < 6 )
    {
        message = i + " DAYS UNTIL MY BIRTHDAY.";
    } else {
        message = i + " days until my birthday...getting close!";
    }
    console.log(message);
}
console.log("HAPPY BIRTHDAY TO ME!!!!!")