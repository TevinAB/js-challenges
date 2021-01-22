module.exports = {
  consecutivePairs,
  pointsPerGame,
  numDig,
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

/*Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n)
between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call numDig
the function taking n and d as parameters and returning this count.
 @ limit - the range limit[0-limit]
 @ digit - the digit to search for
 returns the number of times this digit appeared.
*/
function numDig(limit, digit) {
  let str = '';
  let count = 0;

  for (let i = 0; i <= limit; i++) {
    str += i ** 2;
  }

  str.split('').forEach((char) => {
    if (+char === digit) count++;
  });

  return count;
}
