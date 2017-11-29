$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>meow!</li>");
    $("ul#dog").prepend("<li>woff~</li>");
    $("ul#cat").children("li").first().click(function() {
    $(this).remove();
  });
  });
  $("button#woff").click(function() {
    $("ul#dog").prepend("<li>woff~</li>");
    $("ul#cat").prepend("<li>meow!</li>");
    $("ul#dog").children("li").first().click(function() {
    $(this).remove();
  });
  });
});
