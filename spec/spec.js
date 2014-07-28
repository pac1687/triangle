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
});
