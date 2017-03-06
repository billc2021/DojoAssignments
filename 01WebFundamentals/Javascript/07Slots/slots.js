function slots(games){
    var coins = Math.floor(Math.random() * 50);
    var winning_number = Math.floor(Math.random() * 10);
    var guessed_number = Math.floor(Math.random() * 10);

    while(coins > 0){
        if(winning_number == guessed_number && coins >= 1){
            return "We have a winner, you've won: " + Math.floor((Math.random() * 50) + 50) + " coins!" ;
            break;
        } 
        coins = coins - games;
    }
    var message = "You lose and you have no more coins left.";
    return message;
}


console.log(slots(4));