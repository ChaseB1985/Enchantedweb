$(document).ready(function() {
    $('.change').on({
        mouseenter: function() {
            $(this).css('background-color', 'yellow');
            $(this).css('font-size', '24px');
            $(this).css('color', 'darkgrey');
            $(this).css('font-family', 'Vidaloka', 'serif');
        },
        mouseleave: function() {
            $(this).css('background-color', 'darkgrey');
            $(this).css('font-size', '24px');
            $(this).css('color', 'yellow');
            $(this).css('font-family', 'Vidaloka', 'serif');
        }
    });
});