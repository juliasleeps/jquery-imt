$(function () {
    var p = $('<p>Веб-сайты, упомянутые в данном документе.</p>')
    var ul = $('<ul></ul>');
    p.insertAfter('p:first');

    $('a').each(function () {
        var current = $(this);
        var li = $('<li><strong>' + current.text() + ': </strong>' + current.attr('href') + '</li>');
        ul.append(li);
    });
    ul.insertAfter(p);
})