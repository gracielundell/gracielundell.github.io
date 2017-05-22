$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.parallax-container').height())
        {
            $('.main-nav').addClass('fixed');
        }
        else
        {
            $('.main-nav').removeClass('fixed');
        }
    });
    $('.scrollspy').scrollSpy({
      scrollOffset: 0
    });
});
