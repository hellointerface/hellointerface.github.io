$(document).ready(function() {
  $("h1,p").fadeIn(5000);
 $("button").click(function(){
   $("img").toggle();    
});
  $("body").click(function() {
    $("body").css("background-color", "blue");
  }); I
  $("div").click(function (){
    $(this).hide();
});
});
