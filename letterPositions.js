const letterPositions = function(sentence) {
  const results = {};
  const joinedString = sentence.replace(/\s+/g, '');
  const lowerCaseString = joinedString.toLowerCase();

  for (let char in lowerCaseString) {
    results[lowerCaseString[char]] !== undefined ? results[lowerCaseString[char]].push(Number(char)) : results[lowerCaseString[char]] = [Number(char)];
  }
  return results;
};

module.exports = letterPositions;