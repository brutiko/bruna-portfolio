$(function() {
  function stickySidebar(window, $) {
    if ($('.sticky')) {
      var stickyTop = $('.sticky').offset().top;

      $(window).scroll(function() {
        var windowTop = $(window).scrollTop();

        if (stickyTop < windowTop) {
          $('.sticky').css({ position: 'fixed', top: 0 });
        } else {
          $('.sticky').css('position', 'static');
        }
      });
    }
  };

  stickySidebar(window, jQuery);
});
