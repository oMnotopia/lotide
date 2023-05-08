const map = (arr, callback) => {
  const resultingArr = [];

  for (const item of arr) {
    resultingArr.push(callback(item));
  }

  return resultingArr;
};

module.exports = map;