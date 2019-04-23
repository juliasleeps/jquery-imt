$(function () {
    //$('.item2, #item3').css('color', 'red').css('font-size', '40px');
    //$('.item2', 'div').css('color', 'red').css('font-size', '40px');
    //$('a[href="https://google.com"]').css('border', '1px solid black');
    //$('a[href*="jquery"]').css('border', '1px solid black');
    //$('a[href$="dp"]').css('border', '1px solid black');
    //$('a[href^="page"]').css('border', '1px solid black');
    //$('li:even').css('color', 'red');
    //$('li:first').css('color', 'red');
    //$('li:last').css('color', 'red');

    // let i = 0;
    // $('button').click(function () {
    //     if (i < $('li').length) {
    //         $('li').css('color', 'black');
    //         $('li:eq(' + i + ')').css('color', 'red');
    //         i++;
    //     } else {
    //         i = 0;
    //     }
    // })

    // $("li:contains('item6')").css('color', 'red');
    // $("li:empty").css('border', '1px solid black');
    // $("li:has(span)").css('border', '1px solid black');

    // $(":button").css('border', '1px solid red');

    // let link = $("a[href='https://google.com']").attr("href");
    // $("a:not([href])").attr("href", link);

    $('p:has(span)').on('click', function () {
        console.log('click');
    })
    // .parent().css('border', '3px solid red')
    // .children('p:first').css('border', '2px dotted red')
    // .parents('.main').css('border', '3px solid blue');

});

