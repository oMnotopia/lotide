const flatten = function(arr) {
  let flattenedArray = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let ele of item) {
        flattenedArray.push(ele);
      }
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

