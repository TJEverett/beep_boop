var checkOne = function(array){
  for(var index = 0; index < array.length; index++){
    for(var i = 0; i < array[index].length; i++){
      if(array[index][i] === "1"){
        array[index] = "Beep!";
      };
    };
  };
  return array;
};