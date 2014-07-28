var triangle = function(side1, side2, side3) {
  var triangleType;
  if (side1 >= side2 + side3 ||
      side2 >= side1 + side3 ||
      side3 >= side1 + side2) {
      triangleType="Not a Triangle!"
  }   else if (side1 == side2 && side1 == side3) {
      triangleType="Equilateral"
  }   else if (side1 == side2 || side1 == side3 || side2 == side3) {
      triangleType="Isosceles"
  }   else {
      triangleType="Scalene"
  }
  return triangleType
};



$(document).ready(function () {
  $("form#triangle-input").submit(function(event) {
    event.preventDefault();

    // Taking input and turning into integer
    side1 = parseInt($("input#side1").val());
    side2 = parseInt($("input#side2").val());
    side3 = parseInt($("input#side3").val());
    // Storing inputs and feeding to triangle function
    var results = triangle(side1, side2, side3);

    // Outputting results to page
    $("#answer").text(results);

    // For clearing inputs after submission
    $("input#side1").val("");
    $("input#side2").val("");
    $("input#side3").val("");
  });
});