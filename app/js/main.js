$(function () {
        $('.slider-main__items').slick({
            dots: true,
            arrows: false,
            // fade: true,
            // autoplay: true,
            // autoplaySpead: 3000
        });

        $('.panel-mobil__link--home').on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
              top = $(id).offset().top;
            $('body,html').animate({
              scrollTop: top
            }, 1500);
          });

          $('.header__btn').on('click', function () {
            $('.header__btn').toggleClass('header__btn--active');
            $('.menu__list').toggleClass('menu__list--active');
          });

        var mixer1 = mixitup('.products__cards', {selectors: {control: '.products__btn'}});
        var mixer2 = mixitup('.design__cards', {selectors: {control: '.design__btn'}});

});