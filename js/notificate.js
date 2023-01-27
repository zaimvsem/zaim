$(document).ready(function() {
    console.log(' this page!!!');
    //action-1 -> show!!!
    $('.notice-block.action-1.not-opened').each(function (key, val) {
        $(val).slideDown();
        afterShow($(val));
    })

    //action-2 -> on click
    $(document).on('click', function() {
        $('.notice-block.action-2.not-opened').each(function (key, val) {
            $(val).slideDown();
            afterShow($(val));
        })
    });

    //action-3 -> on scroll
    $(window).scroll(function() {
        console.log('Scrolled this page!!!');
        $('.notice-block.action-3.not-opened').each(function (key, val) {
            $(val).slideDown();
            afterShow($(val));
        })
    });

    //action-4 -> timeout
    setTimeout(
        function() {
            $('.notice-block.action-4.not-opened').each(function (key, val) {
                $(val).slideDown();
                afterShow($(val));
            })
        },
        5000
    );

    $('.notice-close').on('click', function() {
        var $block = $(this).parent();
        $block.slideUp();
    });

});

function afterShow($block) {
    $block.removeClass('not-opened');
}