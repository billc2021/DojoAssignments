var game = {
  players: [],
  addPlayer: function(player){
      game.players.push(player);
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
    // console.log(card);
  };
  return player;
};
$(document).ready(function(){
    
    $("#p1_btn").click(function(){
        var num = Math.random() * 101 + 1;
        num = Math.floor(num);
        var card = {};
        var player1 = playerConstructor("player1");
        $.ajax( "http://pokeapi.co/api/v1/pokemon/" + num ).done(function(card) {
            $("#player1 h3").html("<h3>Player 1 is now Ready!</h3>");
            $("#player1 p").html("<p>"+card.name+"</p>");
            // console.log(card);    
            player1.addCard(card);
            game.addPlayer(player1);
            })
    });

    $("#p2_btn").click(function(){
        var num = Math.random() * 101 + 1;
        num = Math.floor(num);
        var card = {};
        var player2 = playerConstructor("player2");
        $.ajax( "http://pokeapi.co/api/v1/pokemon/" + num ).done(function(card) {
            $("#player2 h3").html("<h3>Player 2 is now Ready!</h3>");
            $("#player2 p").html("<p>"+card.name+"</p>");
            player2.addCard(card);
            game.addPlayer(player2);
            // console.log(card);
  })
    });

    $("#fight").click(function(){
        console.log(game.players[0].hand[0].attack)
        if (game.players[0].hand[0].attack > game.players[1].hand[0].attack){
            $("#wrapper h1").html("<h1>Player 1 WINS!!!</h1>")
        } else {
            $("#wrapper h1").html("<h1>Player 2 WINS!!!</h1>")
        }
    })
});

