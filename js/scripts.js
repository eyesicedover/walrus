$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-showing img").toggle().fadeIn();
    $("#walrus-hidden").toggle();
  });
});
