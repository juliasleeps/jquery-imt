
$(function () {
    var placeholderName = 'Enter your first name'
    var placeholderName2 = 'Enter your last name'
    var id = 1;

    $('input[name=firstName]').focus(function () {
        if ($(this).val() === placeholderName) {
            $(this).val('');
        }
    });

    $('input[name=firstName]').blur(function () {
        if (!$(this).val()) {
            $(this).val(placeholderName);
        }
    });


    $('input[name=lastName]').focus(function () {
        if ($(this).val() === placeholderName2) {
            $(this).val('');
        }
    });

    $('input[name=lastName]').blur(function () {
        if (!$(this).val()) {
            $(this).val(placeholderName2);
        }
    });



    $('form').submit(function (event) {
        event.preventDefault();
        var data = $(this).serializeArray();
        var body = {};
        data.forEach(function (input) {
            body[input.name] = input.value
        });

        var isFirstNameValid = (body.firstName && body.firstName !== placeholderName) ? true : false;
        var isLastNameValid = (body.lastName && body.lastName !== placeholderName2) ? true : false;
        var isPasswordValid = (body.password && body.password.length > 2) ? true : false;

        $('span').remove();

        if (!isFirstNameValid) {
            $('input[name=firstName]').after($('<span>First name is required</span>'));
        }
        if (!isLastNameValid) {
            $('input[name=lastName]').after($('<span>Last name is required</span>'));
        }
        if (!body.password) {
            $('input[name=password]').after($('<span>Password is required</span>'));
        }
        if (body.password && body.password.length < 3) {
            var message = 'min length is 3. You entered ' + body.password.length;
            $('input[name=password]').after($("<span>" + message + "</span>"));
        }
        if (isFirstNameValid && isLastNameValid && isPasswordValid) {
            var checkbox = $('<input type="checkbox"/>');
            checkbox.change(function () {
                console.log('marked' + id + ' ' + body.firstName)
            })
            $('tbody').append($('<tr><td>' + id + '</td><td>' + body.firstName + '</td><td>' + body.lastName + '</td><td>' + body.password + '</td><td></td></tr>'))
            $('tbody>tr:last>td:last').append(checkbox);
            id++;
        }

    })
});


