const tail = function(arr) {
  const arrTail = arr.slice(1);
  for (let i = 0; i < arrTail.length; i++) {
    return arrTail;
  }
};

module.exports = tail;