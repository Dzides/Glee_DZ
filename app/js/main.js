$(function () {
  $(".sidebar-price__enter").ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 10,
    onStart: function (data) {
      $('.sidebar-price__from').text(data.from);
      $('.sidebar-price__to').text(data.to);
    },

    onChange: function (data) {
      $('.sidebar-price__from').text(data.from);
      $('.sidebar-price__to').text(data.to);
    },

  });

  $(function () {
 
    $(".sidebar-star").rateYo({
      readOnly: true,
      starWidth: "12px",
      spacing: "5px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00" 
    });

    $(".card-product__star").rateYo({
      readOnly: true,
      starWidth: "20px",
      spacing: "10px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00" 
    });
   
  });

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
    $('.product-list__sidebar').removeClass('product-list__sidebar--active');
    $('.product-list__filter').removeClass('product-list__filter--active');
  });

  $('.product-list__button').on('click', function () {
    $('.product-list__button').removeClass('product-list__button--active');
    $(this).addClass('product-list__button--active');
  });

  $('.product-list__filter').on('click', function () {
    $('.product-list__filter').toggleClass('product-list__filter--active');
    $('.product-list__sidebar').toggleClass('product-list__sidebar--active');
  });

  $('.product-list__button--column').on('click', function () {
    $('.product-list__shop').addClass('product-view');
    $('.card-column').addClass('card-none');
    $('.pagination__list').addClass('pagination__list--column');
    $('.product-list__sidebar').removeClass('product-list__sidebar--active');
    $('.product-list__filter').removeClass('product-list__filter--active');
  });

  $('.product-list__button--row').on('click', function () {
    $('.product-list__shop').removeClass('product-view');
    $('.card-column').removeClass('card-none');
    $('.pagination__list').removeClass('pagination__list--column');
    $('.product-list__sidebar').removeClass('product-list__sidebar--active');
    $('.product-list__filter').removeClass('product-list__filter--active');
  });

  var mixer1 = mixitup('.products__cards', {
    selectors: {
      control: '.filters__btn'
    }
  });
  var mixer2 = mixitup('.design__cards', {
    selectors: {
      control: '.design__btn'
    }
  });

});