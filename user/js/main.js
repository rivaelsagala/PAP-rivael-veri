(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(document).ready(function () {
    // Set posisi awal atas berdasarkan tinggi dari top bar
    $(".fixed-top").css("top", $(".top-bar").height());

    // Tambahkan event listener untuk event scroll
    $(window).scroll(function () {
      // Periksa apakah pengguna telah melakukan scroll
      if ($(this).scrollTop() > 0) {
        // Jika telah di-scroll, atur warna latar belakang menjadi #532f77 dan posisi atas menjadi 0
        $(".fixed-top").css({ "background-color": "#532f77", top: 0 });
      } else {
        // Jika belum di-scroll, hapus warna latar belakang dan atur posisi atas berdasarkan tinggi dari top bar
        $(".fixed-top").css({ "background-color": "", top: $(".top-bar").height() });
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
