
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $('.logo.front').removeClass('hidden');
        } else {
            $('.logo.front').addClass('hidden');
        }
    });
    $('.mobile-toggle').on("click", function () {
        if ($('.navigation').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
        } else {
            $('.navigation').addClass('open-nav');
        }
    });
});
