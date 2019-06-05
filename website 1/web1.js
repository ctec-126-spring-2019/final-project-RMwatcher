// web1 js

$(document).ready(function(){});

var output = '';

var us = ['2oz','4oz','1/8 teaspoon','2.5oz','8oz','1 teaspoon','32oz','0.5oz','1 to 2oz','350 Fahrenheit','6oz'];

var metric = ['56.7grams','113.4grams','0.58grams','70.9grams','226.8grams','4.7grams','907.2grams','14.2grams','28.3 to 56.7grams','176.7 Celsius','170.1grams'];

var convertUnit = ['convert0','convert1','convert2','convert3','convert4','convert5','convert6','convert7','convert8','convert9','convert10'];


function convert(unit) {
    
    for (let j = 0; j < convertUnit.length; j++) {
        for (let i = 0; i < unit.length; i++) {
        
            var convert = $('.' + convertUnit[j]);
            convert.empty();
            convert.append(`${unit[i].innerHTML}`);
            convert.css({'color': '#990000'});
            j++;
        }
    }
}



