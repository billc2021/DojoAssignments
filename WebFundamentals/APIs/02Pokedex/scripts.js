$(document).ready(function(){
    for(var i = 1; i < 152; i++){
        var res = "http://pokeapi.co/media/img/" + i + ".png"
        // console.log(res);
        $('#wrapper #images').append('<img id="' + i +'" src=' + res + '>');
    };

    // $.get('http://pokeapi.co/api/v1/pokemon/1/',function(pokemon){
    //     pokemon_name = pokemon.name;
    //     console.log(pokemon_name);
    // });

    $(document).on('click', 'img', function(){
        $('img').click(function(){
            $.get('http://pokeapi.co/api/v1/pokemon/' + $(this).attr('id'),function(pokemon){
                pokemon_name = pokemon.name;
                weight = pokemon.weight;
                height = pokemon.height;
                $('#rolodex div h1').text(pokemon_name)
                $('#weight_h4').text('Weight:');
                $('#weight_txt').text(weight);
                $('#height_h4').text('Height:');
                $('#height_txt').text(height);
                $('#types_h4').text('Types');
                          
                
    
                // for(var i = 0; i < pokemon.types.length; i++){
                //     console.log(pokemon.types[i].name);
                //     $('#rolodex div ul').append('<li>' + pokemon.types[i].name + '</li>')
                // }     
                if('#rolodex div ul li'){
                    $('#rolodex div ul li').remove();
                }
                $.each(pokemon.types, function(i, pokeman){
                    $('#rolodex div ul').append('<li>' + pokeman.name + '</li>');
                    console.log(pokeman.name);
                })
            });  
            var imgSrc = "http://pokeapi.co/media/img/" + $(this).attr("id") + ".png";  
            $('#rolodex div img').attr('src', imgSrc);
        });
    });
});