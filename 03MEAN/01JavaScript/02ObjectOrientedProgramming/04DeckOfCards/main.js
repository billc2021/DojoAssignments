class DeckConstructor{
    constructor(){
        this.deck = ["c1","c2","c3","c4","c5","c6","c7","c8",'c9',"c10","cj","cq","ck","d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","dj","dq","dk","h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","hj","hq","hk","s1","s2","s3","s4","s5","s6","s7","s8","s9","s10","sj","sq","sk"]
    }
}
DeckConstructor.prototype.shuffle = function(array){
    this.array = array
    this.m = this.array.length, this.t, this.i;

    // While there remain elements to shuffle…
    while (this.m) {

        // Pick a remaining element…
        this.i = Math.floor(Math.random() * this.m--);

        // And swap it with the current element.
        this.t = this.array[this.m];
        this.array[this.m] = this.array[this.i];
        this.array[this.i] = this.t;
    }

    return this;
}
DeckConstructor.prototype.reset = function(){
    var Deck = new DeckConstructor();
    return Deck;
}
DeckConstructor.prototype.draw = function(deck){
    this.card = []
    this.array = deck;
    // this.card = this.array.pop();
    this.card.push(this.array.pop());
    this.card.push(this.array.pop());
    this.card.push(this.array.pop());
    this.card.push(this.array.pop());
    this.card.push(this.array.pop());
    return this.card;
}
DeckConstructor.prototype.deal = function(deck){
    this.card = []
    this.array = deck;
    this.card = this.array.pop();
    return this.card;
}

var Deck = new DeckConstructor()
// console.log(Deck.shuffle(Deck.deck));
// console.log(Deck.reset());
console.log(Deck.deal(Deck.deck));

$(document).ready(function(){

    $("#deal").click(function(){
        console.log(Deck.draw(Deck.deck))
        cards = Deck.draw(Deck.deck)
        // $(".card p").append("<p>test</p>");
        for (var i = 0; i < cards.length; i++){
            $( "#cards" ).append( "<img src=\"imgs/"+cards[i]+".png\">" );
        }
    })
    $("#shuffle").click(function(){
        $("#cards img").remove();
        $("#drawCrd img").remove();
        Deck.shuffle(Deck.deck);
        console.log(Deck.deck);
    })
    $("#reset").click(function(){
        $("#cards img").remove();
        $("#drawCrd img").remove();
        Deck.reset();
        console.log(Deck.deck);
    })

    $("#drawBtn").click(function(){
        card = Ted.draw(Deck);
        $("#cards").append("<img src=\"imgs/"+card+".png\">");
    })
    $("#discard").click(function(){
        $("#cards").children().last().remove();
    })
});

hand = Deck.shuffle(Deck.deck);
class PersonConstructor{
    constructor(name, hand){
        this.name = name;
        this.hand = hand;
    }
}
PersonConstructor.prototype.deal = function(){
    return this.hand;
}
PersonConstructor.prototype.draw = function(Deck){
    this.card = Deck.deal(Deck.deck);
    return this.card;
}

var Ted = new PersonConstructor("Ted", Deck);
// console.log(Ted.deal(Deck));
console.log(Ted.draw(Deck));
console.log(Ted.deal());

