$(document).ready(function(){
    $('img').click(function(){
        // console.log($(this).attr('id'));
        var url = "https://anapioficeandfire.com/api/houses/" + $(this).attr('id');
        // console.log(url);
        // console.log($(this).attr('id'));;

        $.get(url, function(res){
            $.each(res, function(index, value){
                // console.log(index);
                // console.log(value);
                // console.log(res.name);
                $('#name').text('Name: ' + res.name);
                $('#words').text('Words: ' + res.words);
                $('#titles').text('Titles: ' + res.titles);
                // $.each(res.titles, function(index, value){
                //     // $('#titlesIndx').text(index);
                //     // $('#titleVal').append(value);
                //     // console.log('titles is ' + res.titles);
                    
                // });
            })
        });
    });
});