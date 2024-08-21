function removeChar(str, index) {
  if (index < 0 || index >= str.length) {
    return "Index cannot be less than 0 or greater than string length";
  }
  const strArray = str.split("");
  strArray.splice(index, 1);
  return strArray.join("");
}

const originalStr = "LearningJavaScript";
const index = 27;

const modifiedStr = removeChar(originalStr, index);

console.log(modifiedStr);
