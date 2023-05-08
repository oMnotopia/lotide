const findKey = (obj, callback) => {
  for (const element in obj) {
    if (callback(obj[element])) {
      return element;
    }
  }
};

module.exports = findKey;