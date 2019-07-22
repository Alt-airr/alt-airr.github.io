$(function () {

    $('#universe__h2').delay(500).fadeIn(7500)
    
});


$(function () {

    $('#universe__p').delay(6000).fadeIn(4000)

});


$(function () {
    $('#universe__img1').delay(11000).fadeIn(3000).queue(
        function () {
            $(this).removeClass('blur')
        });
});


$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('.scroll').show()
    }

})
