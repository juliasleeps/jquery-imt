$(function(){
    // Задание 1
    $('input[value="Задание 1"]').on('click', function(){
        $('p.red, li').css('color', 'red');
    });

    // Задание 2
    $('input[value="Задание 2"]').on('click', function(){
        $('div > p').css('color', 'blue');
    });

    // Задание 3
    $('input[value="Задание 3"]').on('click', function(){
        $('p:has(img) strong').css('font-style', 'italic');
    });

    // Задание 4
    $('input[value="Задание 4"]').on('click', function(){
        $('div.blocks').css('background-color', 'red');
    });
})