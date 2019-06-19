// lab2 js

// created a string that has a handle of the element that has an id of introduce in the DOM.
var introduce = $('#introduce');

// I created a object named it intro that has intro1 and intro2 inside of it where each value are a string of text.
var intro = {
    intro1:'Thank you for your interests in our services. We appreciate you taking the time to complete this form.',
    intro2:'Please be sure to fill out every field in this form as it\'ll allow us to assist you as much as possible unless otherwise stated. We look forward to working with you.'};

    // made a function named greetings
function greetings () {
    
    // I iterate the object named intro where i refers to intro1 and intro2 each time it iterates through the object intro
    for (i in intro) {
        // each time it iterate through intro and I've added <p> and </p> in between intro[i] to have it append to introduce where it acts as the element that has an id of introduce and append the object intro into that element.
        introduce.append('<p>' + intro[i] + '</p>');
    }
}

$(document).ready(function(){

    // this calls the function greetings as soon as the page is done loading
    greetings();

    // #info refers to the form with the id of info. I made a event listener where run a function with evt as a parameter once the user clicked on the submit button at the bottom of the page. the parameter evt is like the default will happened when someone clicks on the submit button and it'll take you to a page where it displays all of your input you made.
    $('#info').on('submit', function (evt) {

        // created a new string that has an empty array
        var error = [];

        // created a new string with a boolean value of false
        var check = false;

        // select an imput that has a id of firstName and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err1) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err1
        if ($('#firstName').val() === '') {
            $('#err1').remove();
            $('#firstName').after('<span id="err1"> Please fill in your first name</span>');
            $('#err1').css({'font-weight': 'bold'});
            check = true;
            error.push(['firstName', 'Fill in your first name']);
        } else {
            $('#err1').remove();
        }

        // select an imput that has a id of lastName and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err2) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err2
        if ($('#lastName').val() === '') {
            $('#err2').remove();
            $('#lastName').after('<span id="err2"> Please fill in your last name</span>');
            $('#err2').css({'font-weight': 'bold'});
            check = true;
            error.push(['lastName', 'Fill in your last name']);
        } else {
            $('#err2').remove();
        }

        // select an imput that has a id of address and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err3) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err3
        if ($('#address').val() === '') {
            $('#err3').remove();
            $('#address').after('<span id="err3"> Please fill in your address</span>');
            $('#err3').css({'font-weight': 'bold'});
            check = true;
            error.push(['address', 'Fill in your address']);
        } else {
            $('#err3').remove();
        }

        // select an imput that has a id of city and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err4) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err4
        if ($('#city').val() === '') {
            $('#err4').remove();
            $('#city').after('<span id="err4"> Please fill in your city</span>');
            $('#err4').css({'font-weight': 'bold'});
            check = true;
            error.push(['city', 'Fill in your city']);
        } else {
            $('#err4').remove();
        }

        // select an imput that has a id of state and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err5) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err5
        if ($('#state').val() === '') {
            $('#err5').remove();
            $('#state').after('<span id="err5"> Please fill in your state</span>');
            $('#err5').css({'font-weight': 'bold'});
            check = true;
            error.push(['state', 'Fill in your state']);
        } else {
            $('#err5').remove();
        }

        // select an imput that has a id of zip and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err6) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err6
        if ($('#zip').val() === '') {
            $('#err6').remove();
            $('#zip').after('<span id="err6"> Please fill in your zip</span>');
            $('#err6').css({'font-weight': 'bold'});
            check = true;
            error.push(['zip', 'Fill in your zip']);
        } else {
            $('#err6').remove();
        }

        // select an imput that has a id of phone and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err7) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err7
        if ($('#phone').val() === '') {
            $('#err7').remove();
            $('#phone').after('<span id="err7"> Please fill in your phone</span>');
            $('#err7').css({'font-weight': 'bold'});
            check = true;
            error.push(['phone', 'Fill in your phone']);
        } else {
            $('#err7').remove();
        }

        // select an imput that has a id of email and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err8) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err8
        if ($('#email').val() === '') {
            $('#err8').remove();
            $('#email').after('<span id="err8"> Please fill in your email</span>');
            $('#err8').css({'font-weight': 'bold'});
            check = true;
            error.push(['email', 'Fill in your email']);
        } else {
            $('#err8').remove();
        }

        // select an imput that has a id of school and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err9) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err9
        if ($('#school').val() === '') {
            $('#err9').remove();
            $('#school').after('<span id="err9"> Please select your school</span>');
            $('#err9').css({'font-weight': 'bold'});
            check = true;
            error.push(['school', 'Select your school']);
        } else {
            $('#err9').remove();
        }

        // select an imput that has a id of class and check the value the user inputed. If the value is '-' instead of another option, this if statement will create a span tag with a unique id (err10) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err10
        if ($('#class').val() === '-') {
            $('#err10').remove();
            $('#class').after('<span id="err10"> Please select a class</span>');
            $('#err10').css({'font-weight': 'bold'});
            check = true;
            error.push(['class', 'Select a class']);
        } else {
            $('#err10').remove();
        }

        // I created a new string which has a boolean value of false. I set it up where the DOM will check any radio buttons if any of it options is checked for each input field that is a radio button. This uses the each function that runs anonymous function which then turns the radioCheck value to true
        var radioCheck = false;
        $(':radio:checked').each(function () {
            radioCheck = true;
        });

        // this statement will run when it finds a radio input that didn't get checked. It takes an input element that has a id of resident and add a string of text after that input with a string that starts with a span tag with an id of err11, and a message with a style of font-weight: bold. This statement then pushes an array in the error array with a message to select an option. If one of the radio button has been check, this will simply removes the element that has an id of err11 instead.
        if (!radioCheck) {
            $('#err11').remove();
            $('#resident').after('<span id="err11">Please choose an option</span>');
            $('#err11').css({'font-weight': 'bold'});
            error.push(['Are you from out-of-state?', 'Please choose an option']);
        } else {
            $('#err11').remove();
        }

        if (!radioCheck) {
            $('#err13').remove();
            $('#quarter').after('<span id="err13">Please choose a term</span>');
            $('#err13').css({'font-weight': 'bold'});
            error.push(['Select which term you\'re taking', 'Choose a term']);
        } else {
            $('#err13').remove();
        }

        // select an imput that has a id of firstName and check the value the user inputed. If the value is empty, this if statement will create a span tag with a unique id (err12) and append a message letting them know that they need to fill this field out that has a style of font-weight: bold and added an array item to the empty array called error. This statement also change the value of check to true. If there is a value other than empty, this will just remove the element that has an id of err12
        if ($('#terms:checked').val() === undefined) {
            $('#err12').remove();
            $('#term').after('<span id="err12">Please check box to accept terms and conditions</span>');
            $('#err12').css({'font-weight': 'bold'});
            flag = true;
            error.push(['Terms and Conditions', 'Check box to accept terms and conditions ']);
        } else {
            $('#err12').remove();
        }

        if (check) {
            var checkList = $('.blank');
            var outPut = '<ul>';
            for (let index = 0; index < error.length; index++) {
                outPut += '<li>' + error[index][1] + '</li>';
            }
            outPut += '</ul>';
            checkList.html(outPut);
            evt.preventDefault();
            $('#' + error[0][0]).focus();
        }
    });
});