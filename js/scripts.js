$(document).ready(function() {
  // shows active link
  $('a').each(function() {
    if($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    }
  });

// open blog posts
  $("#angularVSember").click(function(){
    if($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("#blogPost2").slideUp("slow");
    } else {
      $(this).addClass("open");
      $("#blogPost2").slideDown("slow");
    }
  });
  $("#htmlBasics").click(function(){
    if($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("#blogPost1").slideUp("slow");
    } else {
      $(this).addClass("open");
      $("#blogPost1").slideDown("slow");
    }
  });

});
