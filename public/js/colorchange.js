$(document).ready(function () {
    $('.change').on({
        mouseenter: function () {
            $(this).css('background-color', 'yellow');
            $(this).css('font-size', '24px');
            $(this).css('color', '#0a0a0a');
            $(this).css('font-family', 'Vidaloka', 'serif');
        },
        mouseleave: function () {
            $(this).css('background-color', '#0a0a0a');
            $(this).css('font-size', '24px');
            $(this).css('color', 'yellow');
            $(this).css('font-family', 'Vidaloka', 'serif');
        }
    });
});