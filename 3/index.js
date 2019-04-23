$(function () {

    var indent = 30;
    $('button').on('click', function () {
        $('.box').css('left', indent + 'px');
        indent += 30;
    })

})