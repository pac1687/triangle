describe("triangle", function() {
  it("should output 'Not a Triangle!' when given an impossible triangle", function() {
  	triangle(3, 5, 10).should.equal("Not a Triangle!")
  });

  it("should output the word 'Equilateral' when given three equal sides", function() {
    triangle(3, 3, 3).should.equal("Equilateral");
  });

  it("should output the word 'Isosceles' when given only two equal sides", function() {
  	triangle(3, 4, 3).should.equal("Isosceles")
  });

  it("should output the word 'Scalene' when no sides are equal", function() {
  	triangle(3, 5, 4).should.equal("Scalene")
  });
});
