var game = {
  players: [],
  addPlayer: function(name){
      game.players.push(playerConstructor(name));
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.hand = [];
  var num = Math.random() * 100 + 1;
  num = Math.floor(num);
  var card={};
  var count;
  $.get("http://pokeapi.co/api/v1/pokemon/" + num, {}, function(resp){
      // console.log("R", resp);
      // console.log("RESPONSE", new Date());
      document.write("<di><p>Name: " + resp.name + "</p><p>Attack: " + resp.attack + "</p></div>");
      card = resp;
    // console.log(game.players)

    player.addCard(card)
  });

  player.addCard = function(card){
      player.hand.push(card);
  };
  return player;
};

name1 = "ted"
name2 = "terry"
game.addPlayer(name1);  

game.addPlayer(name2);

