function daysLeftForChristmas() {
  const today = new Date();

  const christmasDate = new Date(today.getFullYear(), 11, 25);

  const timeDifference = christmasDate - today;

  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft >= 0
    ? daysLeft
    : Math.floor(
        (new Date(today.getFullYear() + 1, 11, 25) - today) /
          (1000 * 60 * 60 * 24)
      );
}

console.log(`Days left for Christmas is ${daysLeftForChristmas()}`);
