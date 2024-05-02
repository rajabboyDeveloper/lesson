$(".slider").owlCarousel({
  loop: false,
  margin: 10,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 3,
    },
    1055: {
      items: 1,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 3,
    },
    1055: {
      items: 3,
    },
  },
});
