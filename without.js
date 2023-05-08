const without = function(source, itemsToRemove) {
  const modifiedArray = source.filter(item => !itemsToRemove.includes(item));
  return modifiedArray;

};

module.exports = without;