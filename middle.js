const findMiddleOfArray = function(arr) {
  const arrayLength = arr.length;
  const middleOfArray = Math.floor(arrayLength / 2);
  if (arrayLength === 1 || arrayLength === 2) return [];
  
  if (arrayLength % 2 === 1) return [arr[middleOfArray]];
  return [arr[middleOfArray - 1], arr[middleOfArray]];

};

module.exports = findMiddleOfArray;

