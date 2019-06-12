// lab2 js

$(document).ready(function(){

    $('#info').on('submit', function (evt) {

        var error = [];

        var check = false;

        if ($('#firstName').val() === '') {
            $('#err1').remove();
            $('#firstName').after('<span id="err1"> Please fill in your first name</span>');
            $('#err1').css({'font-weight': 'bold'});
            check = true;
            error.push(['firstName', 'Fill in your first name']);
        } else {
            $('#err1').remove();
        }

        if ($('#lastName').val() === '') {
            $('#err2').remove();
            $('#lastName').after('<span id="err2"> Please fill in your last name</span>');
            $('#err2').css({'font-weight': 'bold'});
            check = true;
            error.push(['lastName', 'Fill in your last name']);
        } else {
            $('#err2').remove();
        }

        if ($('#address').val() === '') {
            $('#err3').remove();
            $('#address').after('<span id="err3"> Please fill in your address</span>');
            $('#err3').css({'font-weight': 'bold'});
            check = true;
            error.push(['address', 'Fill in your address']);
        } else {
            $('#err3').remove();
        }

        if ($('#city').val() === '') {
            $('#err4').remove();
            $('#city').after('<span id="err4"> Please fill in your city</span>');
            $('#err4').css({'font-weight': 'bold'});
            check = true;
            error.push(['city', 'Fill in your city']);
        } else {
            $('#err4').remove();
        }

        if ($('#state').val() === '') {
            $('#err5').remove();
            $('#state').after('<span id="err5"> Please fill in your state</span>');
            $('#err5').css({'font-weight': 'bold'});
            check = true;
            error.push(['state', 'Fill in your state']);
        } else {
            $('#err5').remove();
        }

        if ($('#zip').val() === '') {
            $('#err6').remove();
            $('#zip').after('<span id="err6"> Please fill in your zip</span>');
            $('#err6').css({'font-weight': 'bold'});
            check = true;
            error.push(['zip', 'Fill in your zip']);
        } else {
            $('#err6').remove();
        }

        if ($('#phone').val() === '') {
            $('#err7').remove();
            $('#phone').after('<span id="err7"> Please fill in your phone</span>');
            $('#err7').css({'font-weight': 'bold'});
            check = true;
            error.push(['phone', 'Fill in your phone']);
        } else {
            $('#err7').remove();
        }

        if ($('#email').val() === '') {
            $('#err8').remove();
            $('#email').after('<span id="err8"> Please fill in your email</span>');
            $('#err8').css({'font-weight': 'bold'});
            check = true;
            error.push(['email', 'Fill in your email']);
        } else {
            $('#err8').remove();
        }

        if ($('#school').val() === '') {
            $('#err9').remove();
            $('#school').after('<span id="err9"> Please select your school</span>');
            $('#err9').css({'font-weight': 'bold'});
            check = true;
            error.push(['school', 'Select your school']);
        } else {
            $('#err9').remove();
        }

        if ($('#class').val() === '-') {
            $('#err10').remove();
            $('#class').after('<span id="err10"> Please select a class</span>');
            $('#err10').css({'font-weight': 'bold'});
            check = true;
            error.push(['class', 'Select a class']);
        } else {
            $('#err10').remove();
        }

        var radioCheck = false;
        $(':radio:checked').each(function () {
            radioCheck = true;
        });

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