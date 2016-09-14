/** Project scripts */

// Parallax effect for the header background
function parallax(){
    var headerSpace = $('.header').outerHeight();
    var scrolled = $(window).scrollTop();
    $('.header-parallax')
      .css('height', (headerSpace-(scrolled)) + 'px');
}

function navibarSmall(shrinkHeight) {
  var scrolled = $(window).scrollTop();
  if (scrolled > shrinkHeight) {
    $('.navibar').addClass('navibar-small');
  }
  else {
    $('.navibar').removeClass('navibar-small');
  }
}

// Scroll event
$(window).scroll(function(e){
    parallax();
    navibarSmall(80);
});
