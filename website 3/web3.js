// lab3 js

// this creates an empty array named hand
var hand = [];

// this creates a variable named container which the value gets a handle of an element which has an id of container 
var container = $('#container');

// this creates a variable named message which the value gets a handle of an element which has an id of message
var message = $('#message');

// this creates a variable named newGameButton which the value gets a handle of an element which has an id of newGame
var newGameButton = $('#newGame');

// this creates a variable named startGame which the value gets a handle of an element which has an id of startGame
var startGame = $('#startGame');

// this creates a variable named diceSpace which the value gets a handle of an element which has an id of diceSpace
var diceSpace = $('#diceSpace');

// this creates a new array which have several integers as values
var diceRoll = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// this creates a variable named result which doesn't have a value so it's undefined for the time being.
var result;

// this creates a variable named results which doesn't have a value so it's undefined for the time being.
var results;

// this creates a variable named timer which again doesn't have a value so it's undefined for the time being
var timer;

// this creates a variable named output which has a value of an empty string.
var output = '';

// what this function does is get an handle on the document or DOM of the webpage and .ready make is so anything between {} in (function (){ }); will run as soon as the webpage is finished loading.
$(document).ready(function () {

    // this run the function playingCards when the webpage finished loading
    playingCards();

    // this run the function shullfe(hand) when the webpage is done loading where hand is a parameter of shuffle
    shuffle(hand);

    // this run the function showHand when the webpage finished loading
    showHand();

    // this takes an element with an id of newGame (newGameButton is a variable that has an handle of that element with the id of newGame) with the .on() function with ('click', function () {});. This acts as a event listener meaning when the button with the id of newGame is clicked run an anonymous function as a callback function
    newGameButton.on('click', function () {

        // when the page loads, anything element(s) inside the container div will be empty out
        container.empty();

        // when the page loads, anything element(s) inside the diceSpace div will be empty out
        diceSpace.empty();

        // the hand array will be an empty array when the page is finished loading
        hand = [];

        // the function playingCards will run when the page finished loading
        playingCards();

        // the function shuffle(hand) will run when the page is done loading where hand is the parameter for shuffle
        shuffle(hand);

        // this function named showHand will run when the page is done loading
        showHand();
        
        // this is used to stop a timer that I've created by using the variable timer to act as handle to a timer for setInterval
        clearInterval(timer);

    });

    // startGame is a variable that gets a handle of an element that has an id of startGame. The .on('click', function (){}); is an event handler that'll run what's inside {} in function (){}); when someone clicked on the element that has this id (which happens to be a button)
    startGame.on('click', function () {

        // Since I created timer using var already, I don't need to use var again. I've set timer to hold the value setInterval(playGame, 3000); which set a timer to run the function playGame without '()' since we only want to fun the function when someone clicked on the button that has a id of startGame. This will run the function every 3 secons until the timer gets cleared.
        timer = setInterval(playGame, 3000);

    });

});

// this creates a variable named check which has a value of false
var check = false;

// this creates a variable named points which has a value of the integer 0
var points = 0;

// this creates a variable named turns which has a value of the integer 0
var turns = 0;

// this creates a function named playGame
function playGame(hand) {

    // this creates a for loop that'll iterate a loop 5 times
    for (let i = 0; i < 5; i++) {

        // this takes the element that has an id of diceSpace and clear out any element inside of it
        diceSpace.empty();

        // this takes the element that has an id of message and clear out any element inside of it
        message.empty();

        // since result was created using var already, I can just use result instead. I've added the value of the function shuffle that has a parameter of diceRoll. This takes the array diceRoll and run it through the function shuffle that takes a random value from diceRoll 
        result = shuffle(diceRoll);

        // since result was created using var already, I can just use results instead. I've added the string <p> and </p> in between result[i]
        results = '<p>' + result[i] + '</p>';

        // once the for loop is finished, it appends or adds the results variable (that contains new values from inside the loop) into the div that has the id of diceSpace
        diceSpace.append(results);

        // this creates a if statement that loops to see if check has a value of false
        if (hand.check) {
            // inside the previous if statement if the value if result is 3 it'll run the following lines or statements underneath it if result does equals 3
            if (result === 3) {

                // this takes the element that has an id of message and clear out any element inside of it 
                message.empty();
                // this takes the variable points and adds 1 into it regardless of the value it was previously
                points += 1;
                // this change the value of check from false into true
                check = true;
                // this takes the variable turns and adds 1 into it regardless of the value it was previously
                turns += 1;
                // this grabs a handle of an image that has a specific property, and part of a class named card and change the position using css and tell it to take 2 seconds to proform the action
                $('img/3_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }


            // the following has the same affect as the above if statement that checks if the result variable has a value of a integer then runs the statement below if this condition is true.
            if (result === 4) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/4_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 5) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/5_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 6) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/6_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 7) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/7_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 8) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/8_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 9) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/9_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 10) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/10_of_spades.png [class=card]').css({ down: '60' }, 2000);

            }



            if (result === 11) {

                message.empty();
                points += 1;
                check = true;
                turns += 1;
                $('img/jack_of_spades.png [class=card]').css({ down: '60' }, 2000);
            }


            if (result === 2) {
                i -= 1;
                message.empty();
                output = '<p>' + 'You get an extra turn!' + '</p>';
                console.log('hello world');
                message.append(output);
            }

            if (result === 12) {
                message.empty();
                output = '<p>' + 'Better luck next time' + '</p>';
                message.append(output);
                i += 5;
                clearInterval(timer);
            }

            // this run an if statement to see if the variable points has a certain value whether it's 1, 2 or 3. If any of these conditions are true, it'll run the following statement below that statement depending if that condition is true. If it turns out that none of the three statements are ture, it'll run the else statement instead.
            if (points === 1) {
                output = '<p>' + 'You got a point!' + '</p>';
                message.append(output);
            } else if (points === 2) {
                output = '<p>' + 'Almost there, just need one more!' + '</p>';
                message.append(output);
            } else if (points === 3) {
                output = '<p>' + 'You got three points!' + '</p>';
                message.append(output);
            } else {
                message.empty();
            }


            // if the check variable isn't false (but true instead), it'll run te statement below 
            if (!hand.check) {
                message.empty();
                output = '<p>' + 'Try again' + '</p>';
                console.log('hello world');
                message.append(output);
            }
        }

    }
}

// this creates a function named showHand
function showHand() {

    // this cleared out anything inside of a div that has an id of container.
    container.empty();

    // this creates a variable named attributes that has a value of an empty string
    var attributes = '';

    // this creates a for loop that'll iterate a loop 5 times
    for (let index = 0; index < 5; index++) {
        // inside this loop it takes the variable attributes and adds on the following '<div class="card"><img id="' + hand[index].cardInfo + '" src="' + 'img/' + hand[index].cardInfo + '.png' + '" width="100"></div>' this creates an image with a width of 100 inside a div with a class named card, where hand and cardInfo is from the class function Cards 
        attributes += '<div class="card"><img id="' + hand[index].cardInfo + '" src="' + 'img/' + hand[index].cardInfo + '.png' + '" width="100"></div>';
    }

    // once the for loop is finished, it appends or adds the attributes variable (that contains new values from inside the loop) into the div that has the id of container
    container.append(attributes);
}

// I've created a new class function called Cards which takes the parameter suit and number
function Cards(suit, number) {
    // the keyword this refers to this class function and .suit = suit refers to whichever value we want to give it when we call this function since we only get a string 'suit' instead of an actually value.
    this.suit = suit;
    // this line of code is the same as the one above where this refers to this class function and the .number = number is whichever value we give it when we call this function since we only have the string 'number' instead of an actually value.
    this.number = number;
    // Similar to the two lines of code above, .cardInfo requires the values of this.number and this.suit in order for this line of code to be complete. I added the string '_of_' in bewteen number and suit to help represent a single card value form a deck of cards.
    this.cardInfo = number + '_of_' + suit;
    // this line of code .check get the value of false to use for iterating purpose
    this.check = false;
}

// I create a new function named playingCards
function playingCards() {
    // I created a new variable named suits where is has a value of the string 'spades'
    var suits = 'spades';
    // I created a new array named numbers where we have value of several strings from 3, 4, 5, 6, 7, 8, 9, 10, jack
    var numbers = ['3', '4', '5', '6', '7', '8', '9', '10', 'jack'];

    // we use a for loop to iterate through the length of the variable numbers which numbers is an array 
    for (let v = 0; v < numbers.length; v++) {
        // we take the empty array hand and we push new variables into it using new Cards(suits, numbers[v]));. We use new Cards to create a new class using the class function Cards where we assign suits as spades and each value inside the numbers array. Going back to the class function Cards, this.suit becomes spades and this.number becomes 3 through jack and this.cardInfo becomes the value of number (3,4,5,6,7,8,9,10,jack) _of_ spades
        hand.push(new Cards(suits, numbers[v]));

    }

}

// from lab 9. Create a new function called shuffle with a parameter called a, create a variable j, x, and i. The variable i is the length of a minus 1 inside the for loop plus as long as i is greater than 0 the loop contiunes and everytime the loops starts substract i by 1
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        // j takes from the built-in object Math.floor() which is a function that returns the largest integers less than or equal to a number it's given. In this case, it takes a random integer and mulitply that integer by i and subtract it by 1.
        j = Math.floor(Math.random() * (i + 1));
        // the variable x becomes the parameter a and whatever the value of i happens to be as a index (the length of a -1)
        x = a[i];
        // the variable a[i] is now a[j] which j is a random integer multiple by i + i as an index of a.
        a[i] = a[j];
        // a[j] now becomes x
        a[j] = x;
    }
    // this returns the new value of a after the for loop iterate through the length of a how ever big the parameter is to the function that which calls the function shuffle(a).
    return a;
}

