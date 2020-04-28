var counting = function(number) {
  var arrayNumbers = [];
  for (var index = 0; index <= number; index++) {
    arrayNumbers.push(index);
  };
  return arrayNumbers;
};

var stringify = function(array) {
  for (var index = 0; index < array.length; index++) {
    array[index] = array[index].toString();
  };
  return array;
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

var checkThree = function(array) {
  for (var index = 0; index < array.length; index++) {
    for (var i = 0; i < array[index].length; i++) {
      if (array[index][i] === "3") {
        array[index] = "I'm sorry, Dave. I'm afraid I can't do that.";
      };
    };
  };
  return array;
};

var collection = function(number) {
  var arrayNumbers = counting(number);
  var arrayStrings = stringify(arrayNumbers);
  arrayStrings = checkThree(arrayStrings);
  arrayStrings = checkTwo(arrayStrings);
  arrayStrings = checkOne(arrayStrings);
  var outputString = arrayStrings.join(", ");
  return outputString;
};

$(document).ready(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();
    var endNumber = parseInt($("input#endNumber").val());
    var output = collection(endNumber);
    $("#response p").text(output);
    $("#response").show();
  });
});