const takeUntil = (array, callback) => {
  const resultingArr = [];

  for (const element of array) {
    if (!callback(element)) {
      resultingArr.push(element);
    } else {
      break;
    }
  }

  return resultingArr;
};

module.exports = takeUntil;