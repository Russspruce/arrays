console.log("hi")

$(document).ready(function(){


  $("#blanks form").submit(function(event) {
    event.preventDefault();
      $("form").addClass("hide");
    var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var groceryList = blanks.map(function(blank) {
    return $("#" + blank).val().toUpperCase();
  });

  groceryList.sort();
  groceryList.forEach(function(list){
      if (list.length >= 1){
      $("#groceries").append("<li>" + list + "</li>");
      }

    });
  });
});
