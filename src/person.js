function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
}

Person.prototype.run_cooper = function() {
  switch(true) {
    case (this.cooperStatus == undefined):
      start_cooper(this);
      break;
    case (this.cooperStatus == "Poor"):
      start_cooper(this);
      break;
    default:
      return "Sorry, you may not run the Cooper Test again.";
    }
};

function start_cooper(obj) {
  if (obj.gender == 'male') {
    calculator = new MaleCalculator();
    calculator.male_cooper(obj);
  }
  if (obj.gender == 'female') {
    calculator = new FemaleCalculator();
    calculator.female_cooper(obj);
  }
}
