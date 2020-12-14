$(function () {
    // when start scrolling - add class active to navbar
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        }
        else {
            $('.navbar').removeClass('active');
        }
    });
});