app.factory('FoodCalculator', function() {
  var FoodCalculator = function() {
  };

  FoodCalculator.calcBMI = function(currentUser) {
    var BMI = Number(currentUser.weight) * 703 / (Number(currentUser.height) * Number(currentUser.height));
    return BMI;
  };
  FoodCalculator.weightGained = function(foodList) {
    var calsPerPound = 3500;
    var weightGain = FoodCalculator.caloriesToWeight(foodList) / calsPerPound;
    return weightGain;
  };
  FoodCalculator.caloriesToWeight = function(foodList) {
    var totalCals = foodList.reduce(function(prev, curr) {
      return Number(prev) + Number(curr.calories) * Number(curr.servings);
    }, 0);
    return totalCals;
  };

  return FoodCalculator;
});
