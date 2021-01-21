module.exports = {
  consecutivePairs,
  pointsPerGame,
};

//consecutive pairs - return the number of pairs that have consecutive numbers e.g: [1,2,5,8,-4,-3,7,6,5] = 3
function consecutivePairs(arr) {
  let count = 0;
  if (!arr instanceof Array) return count;

  let temp = arr.filter((item) => typeof item === 'number');

  temp.forEach((element, index) => {
    if (typeof temp[index + 1] !== 'undefined' && index % 2 === 0) {
      let diff = element - temp[index + 1];
      if (Math.abs(diff) === 1) count++;
    }
  });

  return count;
}

/*Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns 
a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
 @ppg - points per game
 @mpg - minutes per game
*/
function pointsPerGame(ppg, mpg) {
  let fullTime = 48;
  if (mpg === 0) return 0;
  let result = (ppg / mpg) * fullTime;
  return +result.toFixed(1);
}
