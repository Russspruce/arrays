$(document).ready(function() {
  
 $("#blanks").submit(function(event) {

    var favoritesCurrent = [$("input#favorite1").val(), $("input#favorite2").val(), $("input#favorite3").val()];

    var newFavorites = [];

    console.log("one")
    newFavorites.push(favoritesCurrent[1]);
    newFavorites.push(favoritesCurrent[0]);
    newFavorites.push(favoritesCurrent[2]);
    console.log("two")
    $("#result").append("<li>" + newFavorites[0] + "</li>");
    $("#result").append("<li>" + newFavorites[1] + "</li>");
    $("#result").append("<li>" + newFavorites[2] + "</li>");

event.preventDefault();

 });
});
