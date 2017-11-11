function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Person.prototype.runCooper = function() {
  if (this.gender == 'male') {
    calculator = new MaleCalculator();
    calculator.maleCooper(this);
  } if (this.gender == 'female') {
    calculator = new FemaleCalculator();
    calculator.femaleCooper(this);
  }
};
