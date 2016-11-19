$(document).ready(function() {
  $("h1, p").fadeIn("fast");
  $("h1").slideUp(5000);
  $("button").click(function(){
    $("img").toggle();
  });
  $("body").click(function() {
    $("body").css("background-color", "yellow");
  });
  $("div").click(function (){
    $(this).hide();
  });
});
