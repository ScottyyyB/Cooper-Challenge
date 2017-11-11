function FemaleCalculator() {

}

FemaleCalculator.prototype.female_cooper = function(obj) {
  var age = obj.age;
  var distance = cooperDistance();

  if (age >= 13 && age <= 14 && distance < 1500) {
     obj.cooperStatus = "Poor";
  } else if (age >= 13 && age <= 14 && distance < 2) {
    return "Perfect";
  }
}

function cooperDistance() {
  return Math.floor(Math.random() * 10);
}
