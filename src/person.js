function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Person.prototype.run_cooper = function() {

  if (this.cooperStatus == undefined) {
    if (this.gender == 'male') {
      calculator = new MaleCalculator();
      calculator.male_cooper(this);
    }
    if (this.gender == 'female') {
      calculator = new FemaleCalculator();
      calculator.female_cooper(this);
    }
  } else if (this.cooperStatus == "Poor") {
    if (this.gender == 'male') {
      calculator = new MaleCalculator();
      calculator.male_cooper(this);

    }
    if (this.gender == 'female') {
      calculator = new FemaleCalculator();
      calculator.female_cooper(this);
    }
  }  else {
      return "Sorry, you may not run the Cooper Test again.";
  }
};
