const findKeyByValue = function(showsByGenre, show) {
  for (let genre in showsByGenre) {
    if (showsByGenre[genre] === show) return genre;
  }
};

module.exports = findKeyByValue;