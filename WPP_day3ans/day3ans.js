const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

const guessedNum = prompt("Guess Number between 1 to 10");
if (guessedNum == randomNumber) alert("Number Matched");
else alert("Sorry, Wrong Guess");
