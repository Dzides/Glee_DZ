$(function () {
        $('.slider-main__items').slick({
            dots: true,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpead: 3000
        });

        var mixer1 = mixitup('.products__cards', {selectors: {control: '.products__btn'}});
        var mixer2 = mixitup('.design__cards', {selectors: {control: '.design__btn'}});

});