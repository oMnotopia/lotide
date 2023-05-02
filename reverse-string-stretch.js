const args = process.argv;
const valuesOnlyArgs = args.slice(2);

const reverse = function(arr) {
  let reversedArray = '';
  for (let j = arr.length - 1; j >= 0; j--) {
    reversedArray += arr[j];
  }
  console.log(reversedArray);
};

for (let i = 0; i < valuesOnlyArgs.length; i++) {
  reverse(valuesOnlyArgs[i]);
}

