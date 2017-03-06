$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        var city = $('input[type=text]').val();
        var key = "&APPID=564db4ceee5b5a252ec81671612f894f"
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + key + "&units=imperial";
        $.get(url, function(res) {
            // your code here
            $('form #city').text(res.name);
            $('form #temp').text('Temperature: ' +  res.main.temp);
        }, 'json');

        // don't forget to return false so the page doesn't refresh
        
        return false;
    });
});
