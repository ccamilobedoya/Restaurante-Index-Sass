/** Project scripts */

// Parallax effect for the header background
function parallax(){
    var headerSpace = $('.header').outerHeight();
    var scrolled = $(window).scrollTop();
    $('.header-parallax')
      .css('height', (headerSpace-(scrolled)) + 'px');
}

// Scroll event
$(window).scroll(function(e){
    parallax();
});
