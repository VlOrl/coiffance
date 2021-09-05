$('.items_before_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 937,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 697,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
    ]
});
$('.burger_header').click(function(event){
  $('.burger_header, nav').toggleClass('active');
  $('body').toggleClass('lock');
});
