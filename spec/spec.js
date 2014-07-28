describe("triangle", function() {
  it("should output 'Not a Triangle!' when given an impossible triangle", function() {
  	triangle(3, 5, 10).should.equal("Not a Triangle!")
  })

  it("should output the word 'equilateral' when given three equal sides", function() {
    triangle(3, 3, 3).should.equal("Equilateral");
  });
});
