var counting = function(number) {
  var arrayNumbers = [];
  for (var index = 0; index <= number; index++) {
    arrayNumbers.push(index);
  };
  return arrayNumbers;
};

var checkOne = function(array) {
  for (var index = 0; index < array.length; index++) {
    for (var i = 0; i < array[index].length; i++) {
      if (array[index][i] === "1") {
        array[index] = "Beep!";
      };
    };
  };
  return array;
};

var checkTwo = function(array) {
  for (var index = 0; index < array.length; index++) {
    for (var i = 0; i < array[index].length; i++) {
      if (array[index][i] === "2") {
        array[index] = "Boop!";
      };
    };
  };
  return array;
};

var checkThree = function(array){
  for (var index = 0; index < array.length; index++) {
    for (var i = 0; i < array[index].length; i++) {
      if (array[index][i] === "3") {
        array[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
      };
    };
  };
  return array;
};