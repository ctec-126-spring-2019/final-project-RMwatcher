// lab3 js

var hand = [];

var container = $('#container');

var diceRoll = ['2','3','4','5','6','7','8','9','10','11'];

$(document).ready(function(){
    var newGameButton = $('#newGame');

    var shuffleButton = $('#shuffle')

    var startGame = $('#startGame');

    var diceSpace = $('#diceSpace');

    playingCards();

    shuffle(hand);

    showHand();

    newGameButton.on('click', function(){

        container.empty();

        diceSpace.empty();

        hand = [];

        playingCards();

        shuffle(hand);

        showHand();

    });

    shuffleButton.on('click', function (){

        container.empty();

        shuffle(hand);

        showHand();
        
    });

    startGame.on('click', function () {

        diceSpace.empty();

        shuffleButton.hide();

        newGameButton.hide();

        for (let dice = 0; dice < 5; dice++) {
            var result = shuffle(diceRoll);
            

            if (result == '2') {
                // attributes.css({"slideUp": })  

            } else if (result == '3') {
                
            }
            
        } diceSpace.append(result);

        newGameButton.show();

        shuffleButton.show();
    });

});

function showHand() {

    container.empty();

    var attributes;

    for (let index = 0; index < hand.length; index++) {
        attributes = '<div class="card"><img id="' + hand[index].cardInfo + '" src="' + 'img/' + hand[index].cardInfo + '.png' + '" width="100"></div>';
        
    }

    container.append(attributes)
}

function Cards(suit, number) {
    this.suit = suit;
    this.number = number;
    this.cardInfo = number + '_of_' + suit;
}

function playingCards() {
    var suits = 'spades';
    var numbers = ['3', '4', '5', '6', '7', '8', '9', '10', 'jack'];
     
    for (let v = 0; v < numbers.length; v++) {
        hand.push(new Cards(suits,numbers[v]));
            
    } 
        
}

// from lab 9
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}