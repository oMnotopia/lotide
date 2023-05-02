const args = process.argv;
const valuesOnlyArgs = args.slice(2);

let pigLatinString = ''

for (let i = 0; i < valuesOnlyArgs.length; i++) {
  const firstLetter = valuesOnlyArgs[i].slice(0, 1);
  const remainingWord = valuesOnlyArgs[i].slice(1);
  pigLatinString += `${remainingWord}${firstLetter}ay `;
}

console.log(pigLatinString);
