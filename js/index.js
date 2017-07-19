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
});