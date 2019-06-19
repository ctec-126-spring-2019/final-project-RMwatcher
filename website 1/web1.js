// web1 js
// Anything in bewteen $(document).ready(function () {}); will run as soon as the window is finished loading. Once the window is finished loading, it'll hide five elements that has an id of 'p1', 'p2', 'p3', 'p4', and 'p5'. I'll also run the timerSet function which start a timer of five functions with different timers which will run at different times.
$(document).ready(function () {

    $('#p1').hide();
    $('#p2').hide();
    $('#p3').hide();
    $('#p4').hide();
    $('#p5').hide();

    timerSet();

});

// this array called metric are unit of measurements for the recipe in the metric system. They all correspond to the weight (and one temperature) of each ingredients on the recipe.
var metric = ['56.7 grams', '113.4 grams', '0.58 grams', '70.9 grams', '226.8 grams', '4.7 grams', '907.2 grams', '14.2 grams', '28.3 to 56.7 grams', '176.7 Celsius', '170.1 grams'];

// similar to var metric, var us is an array that holds the unit of measurements for the us system of measure which all correspond to the weight (and one temperature) of each ingredients on the recipe.
var us = ['2 oz', '4 oz', '1/8 teaspoon', '2.5 oz', '8 oz', '1 teaspoon', '32 oz', '0.5 oz', '1 to 2 oz', '350 Fahrenheit', '6 oz'];

// this function convert takes a parameter called unit which are either metric or us which are arrays that have the unit of measurements for us and metric.
function convert(unit) {

    // each one gets a handle of a div with a class unique to each div, clear out anything in bewteen the span tags, appends a unit of measurements and add some styling to it. Since I have to get an handle on 10 different classes, I have the same lines of code for each one with the only differences being getting a handle of each class, the unit array and grabbing a differet string from that array.
    var convert0 = $('.convert0');
    convert0.empty();
    convert0.append(`${unit[0]}`);
    convert0.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert1 = $('.convert1');
    convert1.empty();
    convert1.append(`${unit[1]}`);
    convert1.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert2 = $('.convert2');
    convert2.empty();
    convert2.append(`${unit[2]}`);
    convert2.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert3 = $('.convert3');
    convert3.empty();
    convert3.append(`${unit[3]}`);
    convert3.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert4 = $('.convert4');
    convert4.empty();
    convert4.append(`${unit[4]}`);
    convert4.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert5 = $('.convert5');
    convert5.empty();
    convert5.append(`${unit[5]}`);
    convert5.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert6 = $('.convert6');
    convert6.empty();
    convert6.append(`${unit[6]}`);
    convert6.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert7 = $('.convert7');
    convert7.empty();
    convert7.append(`${unit[7]}`);
    convert7.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert8 = $('.convert8');
    convert8.empty();
    convert8.append(`${unit[8]}`);
    convert8.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert9 = $('.convert9');
    convert9.empty();
    convert9.append(`${unit[9]}`);
    convert9.css({ 'color': '#b30000', 'font-weight': 'bold' });

    var convert10 = $('.convert10');
    convert10.empty();
    convert10.append(`${unit[10]}`);
    convert10.css({ 'color': '#b30000', 'font-weight': 'bold' });

}
// I create 5 strings that'll hold the timer for each step of the directions that are in the recipe
var timer, timer2, timer3, timer4, timer5;

// I've created a function called timerSet to handle the setInterval for the following functions: direction, direction2, direction3, direction4, direction5.
function timerSet() {

    // each of these timers start a different function in different times
    timer = setInterval(direction, 4000);
    timer2 = setInterval(direction2, 6000);
    timer3 = setInterval(direction3, 9000);
    timer4 = setInterval(direction4, 12000);
    timer5 = setInterval(direction5, 15000);
}

// This function when called will get a handle "#p1" and start the fadeIn function which will fade in the element that has an id of 'p1' and afterwards clear the timer that started the interval (timer = setInterval(direction, 4000);). The rest of the functions do the same thing except with a different function name, getting a handle of an element and fade it in and clearing their unique timer above. 
function direction() {

    $('#p1').fadeIn(2000);

    clearInterval(timer);

}

// same as direction
function direction2() {

    $('#p2').fadeIn(2000);
    clearInterval(timer2);

}

// same as direction
function direction3() {

    $('#p3').fadeIn(2000);
    clearInterval(timer3);
}

// same as direction
function direction4() {
    $('#p4').fadeIn(2000);
    clearInterval(timer4);
}

// same as direction
function direction5() {
    $('#p5').fadeIn(2000);
    clearInterval(timer5);
}