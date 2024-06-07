let colors = ["Red", "Greem", "Blue"];

for (let [index, item] of colors.entries()) {
  console.log(`${index}: ${item} is a color`);
}

let letters = "H e c t o r";
let letterArr = letters.split(" ");
console.log(letterArr);

for (let [index, letter] of letters.split(" ").entries()) {
  console.log(`${letter} ${index}`);
}
