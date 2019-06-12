// web1 js

$(document).ready(function () {
    
    $('button').click(function () {
        $('.appear').fadeIn(3000, direction());
    });
});

var metric = ['56.7 grams', '113.4 grams', '0.58 grams', '70.9 grams', '226.8 grams', '4.7 grams', '907.2 grams', '14.2 grams', '28.3 to 56.7 grams', '176.7 Celsius', '170.1 grams'];

var us = ['2 oz', '4 oz', '1/8 teaspoon', '2.5 oz', '8 oz', '1 teaspoon', '32 oz', '0.5 oz', '1 to 2 oz', '350 Fahrenheit', '6 oz'];

function convert(unit) {

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

function direction() {

    var listItem = '<p>';
    var endList = '</p>';
    var steps = {
        step1: 'To prepare the crumble, combine all ingredients in a large bowl and break apart with fingers. Refrigerate prepared crumble.',
        step2: 'To prepare the batter, cream butter and sugar in a medium-size bowl, then mix in egg. Sift together dry ingredients, then mix in half the dry ingredients to the creamed butter, then mix in buttermilk as well. Add the remaining half of dry ingredients into mixture until just combined. Refrigerate batter for 30 minutes.',
        step3: 'To prepare the filling, combine all ingredients in a seperate bowl and sit aside.',
        step4: 'Preheat oven to <span class="convert9"></span>. Grease eight <span class="convert10"></span> ramekins, muffin pans or one large Pyrex pie pan. Add <span class="convert0"></span> of batter to each mold smoothing mixture with a plastic spatula. Add <span class="convert1"></span> of blueberries on top of batter then top with <span class="convert0"></span> of crumble making sure the crumble is broken up first before topping.',
        step5: 'Bake in oven for 30 to 35 minutes until the top is brown and filling just starts to bubble. Remove from oven and allow to cool for an additional 20 minutes. Serve warm or at room temperature.'
    };

    var howTo = $("#howTo");
    howTo.empty();

    for (item in steps) {
        howTo.append(listItem + item + ': ' + steps[item] + endList);

    }
    
    return howTo;
}