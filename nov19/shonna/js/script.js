$(document).ready(function() {
  $("h1, p").fadeIn("fast");
  $("h1").slideUp();
  $("button").click(function(){
    $("img").toggle();
  });
  $("body").click(function() {
    $("body").css("background-color", "yellow");
  });
});
