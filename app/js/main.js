$(function(){
    $('.slider__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpead: 3000
    });

    var mixer = mixitup('.products__cards');
});