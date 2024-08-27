const isMultiple = (num) => {
  if (num <= 0) return false;
  if (num % 3 === 0 || num % 7 === 0) return true;
  return false;
};

console.log(isMultiple(21))