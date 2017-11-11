function FemaleCalculator() {

}

FemaleCalculator.prototype.female_cooper = function(obj) {
  var age = obj.age;
  var distance = cooperDistance();
  var ageGroup1 = ageRange(age, 13, 14);
  var ageGroup2 = ageRange(age, 15, 16);
  var ageGroup3 = ageRange(age, 17, 19);
  var ageGroup4 = ageRange(age, 20, 29);
  var ageGroup5 = ageRange(age, 30, 39);

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
  } else if (ageGroup2 && range(distance, 2499)) {
    obj.cooperStatus = "Above Average";
  } else if (ageGroup2 && range(distance, 2299)) {
    obj.cooperStatus = "Average";
  } else if (ageGroup2 && range(distance, 2199)) {
    obj.cooperStatus = "Below Average";
  } else if (ageGroup2 && range(distance, 0)) {
    obj.cooperStatus = "Poor";
  }

  if (ageGroup3 && range(distance, 2999)) {
    obj.cooperStatus = "Excellent";
  } else if (ageGroup3 && range(distance, 2699)) {
    obj.cooperStatus = "Above Average";
  } else if (ageGroup3 && range(distance, 2499)) {
    obj.cooperStatus = "Average";
  } else if (ageGroup3 && range(distance, 2299)) {
    obj.cooperStatus = "Below Average";
  } else if (ageGroup3 && range(distance, 0)) {
    obj.cooperStatus = "Poor";
  }

  if (ageGroup4 && range(distance, 2799)) {
    obj.cooperStatus = "Excellent";
  } else if (ageGroup4 && range(distance, 2399)) {
    obj.cooperStatus = "Above Average";
  } else if (ageGroup4 && range(distance, 2199)) {
    obj.cooperStatus = "Average";
  } else if (ageGroup4 && range(distance, 1599)) {
    obj.cooperStatus = "Below Average";
  } else if (ageGroup4 && range(distance, 0)) {
    obj.cooperStatus = "Poor";
  }

  if (ageGroup5 && range(distance, 2699)) {
    obj.cooperStatus = "Excellent";
  } else if (ageGroup5 && range(distance, 2299)) {
    obj.cooperStatus = "Above Average";
  }
}

function range(distance, range) {
  return distance > range;
}

function ageRange(age, range1, range2) {
  return age >= range1 && age <= range2;
}

function cooperDistance() {
  return Math.floor(Math.random() * 3000);
}
