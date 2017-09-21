$(document).ready(function() {


  var flavor1 = prompt("Name a flavor");
  var flavor2 = prompt("Name a second flavor");
  var flavor3 = prompt("Name a third flavor");

  var flavors = [flavor1, flavor2, flavor3];
  console.log()
  alert(flavors);

  // flavors.forEach(function(flavor) {
  //     var userInput= $(flavor).val();
  //     $("#icecreamlist").append("<li>" +flavor+ "</li>");
  //   });


  // LIST WITH a FOR LOOP INSTEAD OF A FOREACH
  for (var index = 0; index < flavors.length; index+= 1) {
    $("#icecreamlist").append("<li>" + flavors[index] +"</li>");
  }

});
