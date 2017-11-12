describe("MaleCalculator", function() {
  var calculator;
  var person;

    describe("Age Group One 13 - 14", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 14});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent if distance ran is greater than 2700", function() {
        spyOn(Math, "random").and.returnValue(1);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to Above Average if distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperStatus set to Average if distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average if distance ran is greater than 2099", function() {
        spyOn(Math, "random").and.returnValue(0.7);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor if distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.4);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Two 15 - 16", function() {
      beforeEach(function() {
        person = new Person({gender: 'male', age: 15});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent if distance ran is greater than 2799", function() {
        spyOn(Math, "random").and.returnValue(1);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to Above Average if distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.92);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperStatus set to Average if distance ran is greater than 2299", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average if distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.75);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor if distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.2);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Three 17 - 19", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 17});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent when distance ran is greater than 2999", function() {
        spyOn(Math, "random").and.returnValue(1);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 2699", function() {
        spyOn(Math, "random").and.returnValue(0.9);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperStatus set to Average when distance ran is greater than 2499", function() {
        spyOn(Math, "random").and.returnValue(0.85);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 2299", function() {
        spyOn(Math, "random").and.returnValue(0.79);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Four 20 - 29", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 25});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent when distance ran is greater than 2800", function() {
        spyOn(Math, "random").and.returnValue(0.95);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.81);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperStatus set to Average when distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.75);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1599", function() {
        spyOn(Math, "random").and.returnValue(0.6);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Five 30 - 39", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 33});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent if distance ran is greater than 2699", function() {
        spyOn(Math, "random").and.returnValue(0.9);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 2299", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperStatus set to Average when distance ran is greater than 1899", function() {
        spyOn(Math, "random").and.returnValue(0.69);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1499", function() {
        spyOn(Math, "random").and.returnValue(0.5);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.2);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Six 40 - 49", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 45});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent when distance ran is greater than 2499", function() {
        spyOn(Math, "random").and.returnValue(0.85);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to  Above Average when distance ran is greater than 2099", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperStatus set to Average when distance ran is greater than 1699", function() {
        spyOn(Math, "random").and.returnValue(0.62);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1399", function() {
        spyOn(Math, "random").and.returnValue(0.55);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });

    describe("Age Group Seven 50+", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 55});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent when distacne ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.86);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 1999", function() {
        spyOn(Math, "random").and.returnValue(0.76);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      })

      it("cooperStatus set to Average when distance ran is greater than 1599", function() {
        spyOn(Math, "random").and.returnValue(0.63);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1299", function() {
        spyOn(Math, "random").and.returnValue(0.433);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });
    });
  });

  describe("FemaleCalculator", function() {
    var calculator;
    var person;

      describe("Age Group One 13 - 14", function() {

        beforeEach(function() {
          person = new Person({gender: 'female', age: 14});
          calculator = new FemaleCalculator();
        });

        it("cooperStatus set to Excellent when distance ran is greater than 1999", function() {
          spyOn(Math, "random").and.returnValue(0.9);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Excellent");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 1899", function() {
          spyOn(Math, "random").and.returnValue(0.65);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperStatus set to Average when distance ran is greater than 1599", function() {
          spyOn(Math, "random").and.returnValue(0.59);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Average");
        });

        it("cooperStatus set to Below Average when distance ran is greater than 1499 ", function() {
          spyOn(Math, "random").and.returnValue(0.52);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Below Average");
        });

        it("cooperStatus set to Poor when distance ran is greater than -1", function() {
          spyOn(Math, "random").and.returnValue(0.4);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Poor");
        });
      });

      describe("Age Group Two 15 - 16", function() {

        beforeEach(function() {
          person = new Person({gender: 'female', age: 16});
          calculator = new FemaleCalculator();
        });

        it("cooperStatus set to Excellent when distance ran is greater than 2099", function() {
          spyOn(Math, "random").and.returnValue(0.72);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Excellent");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 1999", function() {
          spyOn(Math, "random").and.returnValue(0.68);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperStatus set to Average when distance ran is greater than 1699", function() {
          spyOn(Math, "random").and.returnValue(0.59);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Average");
        });

        it("cooperStatus set to Below Average when distance ran is greater than 1599", function() {
          spyOn(Math, "random").and.returnValue(0.54);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Below Average");
        });

        it("cooperStatus set to Poor when distance ran is greater than 0", function() {
          spyOn(Math, "random").and.returnValue(0.5);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Poor");
        });
      });

      describe("Age Group Three 17 - 19", function() {

        beforeEach(function() {
          person = new Person({gender: 'female', age: 18});
          calculator = new FemaleCalculator();
        });

        it("cooperStatus set to Excellent when distance ran is greater than 2299", function() {
          spyOn(Math, "random").and.returnValue(0.83);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Excellent");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 2099", function() {
          spyOn(Math, "random").and.returnValue(0.7);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperStatus set to Average when distance ran is greater than 1799", function() {
          spyOn(Math, "random").and.returnValue(0.62);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Average");
        });
      });
    });
