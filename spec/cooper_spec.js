describe("FemaleCalculator", function() {
  var calculator;
  var person;

    describe("Age Group one 13 - 14", function() {

      beforeEach(function() {
        person = new Person({gender: 'female', age: 14});
        calculator = new FemaleCalculator();
      });

      it("returns Excellent if distance ran is greater than 2700", function() {
        spyOn(Math, "random").and.returnValue(2);
        calculator.female_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("returns Above Average if distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.female_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("returns Average if distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.female_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("returns Below Average if distance ran is greater than 2099", function() {
        spyOn(Math, "random").and.returnValue(0.7);
        calculator.female_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("returns Poor if distance ran is smaller than 2100", function() {
        spyOn(Math, "random").and.returnValue(0.4);
        calculator.female_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Two 15 - 16", function() {
      beforeEach(function() {
        person = new Person({gender: 'female', age: 15});
        calculator = new FemaleCalculator();
      });
      
    });
  // it("returns Below Average if distance ran is greater than 2099", function() {
  //   spyOn(Math, "random").and.returnValue(0.7);
  //   expect(person.cooperStatus).toEqual("Below Average");
  // });
  // it("returns Average if distance ran is ")
  //
  // it("returns Below Average if distance ran is 1500 (Distance >= 1500 and Distance <= 1599)", function() {
  //   spyOn(Math, "random").and.returnValue(1);
  //   expect(person.cooperStatus).toEqual("Poor");
  // });

  // it("returns Average if distance is 1600 (Distance >= 1600 and Distance <= 1899)", function() {
  //   spyOn(Math, "random").and.returnValue(600);
  //   calculator.female_cooper(person);
  //   expect(person.cooperStatus).toEqual("Average");
  // });
});
