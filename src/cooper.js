function FemaleCalculator() {

}

FemaleCalculator.prototype.female_cooper = function(obj) {
  var age = obj.age;
  var distance = cooperDistance();
  var ageGroup1 = ageRange(age, 13, 14);
  var ageGroup2 = ageRange(age, 14, 15);

  if (ageGroup1 && range(distance, 2699)) {
    obj.cooperStatus = "Excellent";
  } else if (ageGroup1 && range(distance, 2399)) {
    obj.cooperStatus = "Above Average";
  } else if (ageGroup1 && range(distance, 2199)) {
    obj.cooperStatus = "Average";
  } else if (ageGroup1 && range(distance, 2099)) {
    obj.cooperStatus = "Below Average";
  } else if (ageGroup1 && range(distance, 0)) {
    obj.cooperStatus = "Poor";
  }

  if (ageGroup2 && range(distance, 2799)) {
    obj.cooperStatus = "Excellent";
  }

}

function range(distance, range) {
  return distance > range ;
}

function ageRange(age, range1, range2) {
  return age >= range1 && age <= range2;
}

function cooperDistance() {
  return Math.floor(Math.random() * 3000);
}
