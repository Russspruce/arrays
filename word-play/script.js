$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var sentenceBefore = $("#sentenceToSplit").val().split(" ");
    var sections = [];

    sections.push(sentenceBefore);

    // var sentenceAfter = sentenceBefore.map(function(sentence) {
    // return $("#" + sentence).val();

      sentenceBefore.forEach(function(section){
      if (section.length >= 3){
      $("#result").text(section);
      }
    });
      sections.reverse();
        $("#result").text(section);
        event.preventDefault();

    });
  });
