describe("MaleCalculator", function() {
  var calculator;
  var person;

    describe("Can't call run_cooper", function() {
      beforeEach(function() {
        person = new Person({gender: 'male', age: 14});
        calculator = new MaleCalculator();
        spyOn(Math, "random").and.returnValue(1);
        person.run_cooper()
      });

      it("should return error message if cooper test has been ran", function() {
        expect(person.run_cooper()).toEqual("Sorry, you may not run the Cooper Test again.");
      });
    });

    describe("Can call run_cooper", function() {
      beforeEach(function() {
        person = new Person({gender: 'male', age: 14});
        calculator = new MaleCalculator();
        spyOn(Math, "random").and.returnValue(0.1);
        person.run_cooper()
      });

      it("should be able to run cooper test again and receive a new cooperStatus", function() {
        expect(person.run_cooper()).not.toBe("Sorry, you may not run the Cooper Test again.");
      });
    });

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

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(1);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 3150m and your status is Excellent.");
      });

      it("cooperStatus set to Above Average if distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2520m and your status is Above Average.");
      });

      it("cooperStatus set to Average if distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2330m and your status is Average.");
      });

      it("cooperStatus set to Below Average if distance ran is greater than 2099", function() {
        spyOn(Math, "random").and.returnValue(0.68);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.68);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2140m and your status is Below Average.");
      });

      it("cooperStatus set to Poor if distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.4);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.4);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1260m and your status is Poor.");
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

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(1);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 3150m and your status is Excellent.");
      });

      it("cooperStatus set to Above Average if distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.88);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.88);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2770m and your status is Above Average.");
      });

      it("cooperStatus set to Average if distance ran is greater than 2299", function() {
        spyOn(Math, "random").and.returnValue(0.76);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.76);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2390m and your status is Average.");
      });

      it("cooperStatus set to Below Average if distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.699);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.699);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2200m and your status is Below Average.");
      });

      it("cooperStatus set to Poor if distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.2);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.2);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 630m and your status is Poor.");
      });
    });

    describe("Age Group Three 17 - 19", function() {

      beforeEach(function() {
        person = new Person({gender: 'male', age: 17});
        calculator = new MaleCalculator();
      });

      it("cooperStatus set to Excellent when distance ran is greater than 2999", function() {
        spyOn(Math, "random").and.returnValue(0.98);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Excellent");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.98);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 3090m and your status is Excellent.");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 2699", function() {
        spyOn(Math, "random").and.returnValue(0.9);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.9);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2840m and your status is Above Average.");
      });

      it("cooperStatus set to Average when distance ran is greater than 2499", function() {
        spyOn(Math, "random").and.returnValue(0.85);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.85);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2680m and your status is Average.");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 2299", function() {
        spyOn(Math, "random").and.returnValue(0.75);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.75);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2360m and your status is Below Average.");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 950m and your status is Poor.");
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

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.95);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2990m and your status is Excellent.");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 2399", function() {
        spyOn(Math, "random").and.returnValue(0.81);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.81);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2550m and your status is Above Average.");
      });

      it("cooperStatus set to Average when distance ran is greater than 2199", function() {
        spyOn(Math, "random").and.returnValue(0.75);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.75);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2360m and your status is Average.");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1599", function() {
        spyOn(Math, "random").and.returnValue(0.6);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.6);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1890m and your status is Below Average.");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 950m and your status is Poor.");
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

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.9);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2840m and your status is Excellent.");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 2299", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.8);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2520m and your status is Above Average.");
      });

      it("cooperStatus set to Average when distance ran is greater than 1899", function() {
        spyOn(Math, "random").and.returnValue(0.69);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.69);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2170m and your status is Average.");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1499", function() {
        spyOn(Math, "random").and.returnValue(0.5);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.5);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1580m and your status is Below Average.");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.2);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.2);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 630m and your status is Poor.");
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

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.85);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2680m and your status is Excellent.");
      });

      it("cooperStatus set to  Above Average when distance ran is greater than 2099", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.74);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2330m and your status is Above Average.");
      });

      it("cooperStatus set to Average when distance ran is greater than 1699", function() {
        spyOn(Math, "random").and.returnValue(0.62);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.62);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1950m and your status is Average.");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1399", function() {
        spyOn(Math, "random").and.returnValue(0.53);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.53);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1670m and your status is Below Average.");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.3);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 950m and your status is Poor.");
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

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.86);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2710m and your status is Excellent.");
      });

      it("cooperStatus set to Above Average when distance ran is greater than 1999", function() {
        spyOn(Math, "random").and.returnValue(0.76);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Above Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.76);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 2390m and your status is Above Average.");
      });

      it("cooperStatus set to Average when distance ran is greater than 1599", function() {
        spyOn(Math, "random").and.returnValue(0.63);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.63);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1980m and your status is Average.");
      });

      it("cooperStatus set to Below Average when distance ran is greater than 1299", function() {
        spyOn(Math, "random").and.returnValue(0.433);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Below Average");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0.433);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 1360m and your status is Below Average.");
      });

      it("cooperStatus set to Poor when distance ran is greater than -1", function() {
        spyOn(Math, "random").and.returnValue(0);
        calculator.male_cooper(person);
        expect(person.cooperStatus).toEqual("Poor");
      });

      it("cooperMessage set to correct message", function() {
        spyOn(Math, "random").and.returnValue(0);
        calculator.male_cooper(person);
        expect(person.cooperMessage).toEqual("You ran 0m and your status is Poor.");
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

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.9);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 2840m and your status is Excellent.");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 1899", function() {
          spyOn(Math, "random").and.returnValue(0.63);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.63);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1980m and your status is Above Average.");
        });

        it("cooperStatus set to Average when distance ran is greater than 1599", function() {
          spyOn(Math, "random").and.returnValue(0.59);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.59);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1860m and your status is Average.");
        });

        it("cooperStatus set to Below Average when distance ran is greater than 1499 ", function() {
          spyOn(Math, "random").and.returnValue(0.49);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Below Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.49);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1540m and your status is Below Average.");
        });

        it("cooperStatus set to Poor when distance ran is greater than -1", function() {
          spyOn(Math, "random").and.returnValue(0.4);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Poor");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.4);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1260m and your status is Poor.");
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

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.72);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 2270m and your status is Excellent.");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 1999", function() {
          spyOn(Math, "random").and.returnValue(0.65);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.65);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 2050m and your status is Above Average.");
        });

        it("cooperStatus set to Average when distance ran is greater than 1699", function() {
          spyOn(Math, "random").and.returnValue(0.59);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.59);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1860m and your status is Average.");
        });

        it("cooperStatus set to Below Average when distance ran is greater than 1599", function() {
          spyOn(Math, "random").and.returnValue(0.51);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Below Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.51);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1610m and your status is Below Average.");
        });

        it("cooperStatus set to Poor when distance ran is greater than 0", function() {
          spyOn(Math, "random").and.returnValue(0.5);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Poor");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.5);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1580m and your status is Poor.");
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

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.83);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 2610m and your status is Excellent.");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 2099", function() {
          spyOn(Math, "random").and.returnValue(0.7);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.7);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 2210m and your status is Above Average.");
        });

        it("cooperStatus set to Average when distance ran is greater than 1799", function() {
          spyOn(Math, "random").and.returnValue(0.62);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.62);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1950m and your status is Average.");
        });

        it("cooperStatus set to Below Average when distance ran is greater than 1699", function() {
          spyOn(Math, "random").and.returnValue(0.54);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Below Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.54);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 1700m and your status is Below Average.");
        });

        it("cooperStatus set to Poor when distance ran is greater than -1", function() {
          spyOn(Math, "random").and.returnValue(0.1);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Poor");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.1);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 320m and your status is Poor.");
        });
      });

      describe("Age Group Four 20 - 29", function() {

        beforeEach(function() {
          person = new Person({gender: 'female', age: 21});
          calculator = new FemaleCalculator();
        });

        it("cooperStatus set to Excellent when distance ran is greater than 2699", function() {
          spyOn(Math, "random").and.returnValue(0.991);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Excellent");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.991);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 3120m and your status is Excellent.");
        });

        it("cooperStatus set to Above Average when distance ran is greater than 2199", function() {
          spyOn(Math, "random").and.returnValue(0.846);
          calculator.female_cooper(person);
          expect(person.cooperStatus).toEqual("Above Average");
        });

        it("cooperMessage set to correct message", function() {
          spyOn(Math, "random").and.returnValue(0.846);
          calculator.female_cooper(person);
          expect(person.cooperMessage).toEqual("You ran 2660m and your status is Above Average.");
        });


      });
    });
