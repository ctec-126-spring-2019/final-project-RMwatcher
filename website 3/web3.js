// lab3 js

var hand = [];

var container = $('#container');

$(document).ready(function(){
    var newGame = $('#newGame');

    var shuffle = $('#shuffle')

    var startGame = $('#startGame');

    playingCards();

    showHand();

    newGame.on('click', function(){
        container.empty();

        hand = [];

        playingCards();
    });
});

function showHand() {
    container.empty();

    for (let index = 0; index < hand.length; index++) {
        var attributes = '<div><img id="' + hand[index].cardInfo + '" src="' + 'img/' + hand[i].cardInfo + '.png' + '" width="100"></div>';
        
    }

    container.append(attributes)
}

function Cards(suit, number) {
    this.suit = suit;
    this.number = number;
    this.cardInfo = number + '_of_' + suit;
}

function playingCards() {
    var suits = ['spades','hearts'];
    var numbers = ['3', '4', '5', '6', '7', '8', '9', '10', 'jack'];

    for (let i = 0; i < suits.length; i++) {
        for (let v = 0; v < array.length; v++) {
            hand.push(new Cards(suits[i],numbers[v]));
            
        }
        
    }
}