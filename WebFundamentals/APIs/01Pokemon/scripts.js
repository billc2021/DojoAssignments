$(document).ready(function(){
    for(var i = 1; i < 152; i++){
        var res = "http://pokeapi.co/media/img/" + i + ".png"
        console.log(res);
        $('#wrapper div').append('<img id=" ' + i +'" src=' + res + '>');
    };
});