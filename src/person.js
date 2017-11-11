function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Person.prototype.run_cooper = function() {
  if (this.gender == 'male') {
    calculator = new MaleCalculator();
    calculator.male_cooper(this);
  }
  if (this.gender == 'female') {
    calculator = new FemaleCalculator();
    calculator.female_cooper(this);
  }
};
