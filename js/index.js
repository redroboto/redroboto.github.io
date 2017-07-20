jQuery(document).ready(function() {
  // Adds animation when elements enter the viewport
  jQuery('.toFadeIn').addClass("hideMe").viewportChecker({
    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
    offset: 100
  });
  jQuery('.toSlideInLeft').addClass("hideMe").viewportChecker({
    classToAdd: 'visible animated slideInLeft',
    offset: 100
  });
  jQuery('.toSlideInRight').addClass("hideMe").viewportChecker({
    classToAdd: 'visible animated slideInRight',
    offset: 100
  });
  jQuery('.toFlipInX').addClass("hideMe").viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 100
  });
  jQuery('.toShake').addClass("hideMe").viewportChecker({
    classToAdd: 'visible animated shake',
    offset: 100
  });
  // Smooth Scroll on clicking nav items
  $('#myNavbar ul li a').click(function () {
    var $href = $(this).attr('href');
    $('body').stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    return false;
  });
  // back to top
  $('#backToTop').click(function () {
    $('body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
// add class active to nav a on scroll
  // var scrollPos = $(document).scrollTop() + 100;
  // $('#myNavbar ul li a').each(function () {
  //   var currLink = $(this);
  //   var refElement = $(currLink.attr("href"));
  //   if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
  //     $('#myNavbar ul li a').removeClass("active");
  //     currLink.addClass("active");
  //   }
  // });
});