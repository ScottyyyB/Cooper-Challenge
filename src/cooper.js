function FemaleCalculator() {

}

FemaleCalculator.prototype.female_cooper = function(obj) {
  var age = obj.age;
  var distance = cooperDistance();
  var ageGroup1 = ageRange(age, 13, 14);

  if (ageGroup1 && distance > 2700) {
    obj.cooperStatus = "Excellent";
  } else if (ageGroup1 && distance > 2399 ) {
    obj.cooperStatus = "Above Average";
  } else if (ageGroup1 && distance > 2099) {
    obj.cooperStatus = "Average";
  }

}

function distanceRange(distance, range) {
  return distance >= range ;
}

function ageRange(age, range1, range2) {
  return age >= range1 && age <= range2;
}

function cooperDistance() {
  return Math.floor(Math.random() * 3000);
}
