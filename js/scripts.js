var triangle = function(side1, side2, side3) {
  var triangleType = "";
  if (side1 >= side2 + side3 ||
      side2 >= side1 + side3 ||
      side3 >= side1 + side2) {
      triangleType="Not a Triangle!"
  }   else if (side1 == side2 && side1 == side3) {
      triangleType="Equilateral"
  } 
  return triangleType
};

$(document).ready(function () {
  $("form#triangle-input").submit(function(event) {
    event.preventDefault();

      side1 = parseInt($("input#side1").val());
      side2 = parseInt($("input#side2").val());
      side3 = parseInt($("input#side3").val());

  });
});