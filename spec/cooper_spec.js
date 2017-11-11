describe("FemaleCalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({gender: 'female', age: 14});
    calculator = new FemaleCalculator();
  });

  it("returns Poor if distance ran is 15 (Distance < 1500)", function() {
    spyOn(Math, "random").and.returnValue(5);
    calculator.female_cooper(person)
    expect(person.cooperStatus).toEqual("Poor");
  });


});
