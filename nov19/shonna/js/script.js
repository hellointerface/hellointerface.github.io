$(document).ready(function() {
  $("h1, p").fadeIn("fast");
  $("h1").slideDown();
  $("button").click(function(){
    $("img").toggle();
  });
  $("body").click(function() {
    $("body").css("background-color", "yellow");
  });
});
