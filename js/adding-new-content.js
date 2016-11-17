$(function() {
  $("ul").before("<p>Just updated</p>");

  $("li.hot").prepend("+ ");

  var newItem = "<li><em>gluten-free soy sauce</em></li>";
  $("li:last").after(newItem);
});