// Arrays containing different parts of the quotes
const beginnings = [
  "Believe in yourself",
  "Dream big",
  "Embrace change",
  "Stay positive",
  "Take risks",
  "Never give up"
];

const middles = [
  "and you'll achieve greatness",
  "and make it happen",
  "and see the possibilities",
  "and find your happiness",
  "and reach new heights",
  "and overcome any obstacle"
];

const endings = [
  "when you least expect it",
  "when you put in the effort",
  "when you stay persistent",
  "when you believe in yourself",
  "when you take action"
];

function generateRandomMessage() {
  const beginningIndex = Math.floor(Math.random() * beginnings.length);
  const middleIndex = Math.floor(Math.random() * middles.length);
  const endingIndex = Math.floor(Math.random() * endings.length);
  
  const beginning = beginnings[beginningIndex];
  const middle = middles[middleIndex];
  const ending = endings[endingIndex];
  
  // Construct the final message
  const message = `${beginning} ${middle} ${ending}`;
  
  // Return the generated message
  return message;
}

console.log(generateRandomMessage());
