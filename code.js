//consecutive pairs - return the number of pairs that have consecutive numbers e.g: [1,2,5,8,-4,-3,7,6,5] = 3
function consecutivePairs(arr) {
  let count = 0;
  if (!arr instanceof Array)
    throw new TypeError('Expected Argument to be an Array');

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
 @ ppg - points per game
 @ mpg - minutes per game
*/
function pointsPerGame(ppg, mpg) {
  if (typeof ppg !== 'number' || typeof mpg !== 'number')
    throw new TypeError('Expected both arguments to be a number');

  if (mpg === 0) return 0;

  let fullTime = 48;
  let result = (ppg / mpg) * fullTime;
  return +result.toFixed(1);
}

/*Take an integer limit (limit >= 0) and a digit(0 <= digit <= 9) as an integer. Square all numbers k (0 <= k <= n)
between 0 and limit. Count the numbers of digits [digit] used in the writing of all the k**2. Call numDig
the function taking limit and digit as parameters and returning this count.
 @ limit - the range limit[0-limit]
 @ digit - the digit to search for
 returns the number of times this digit appeared.
*/
function numDig(limit, digit) {
  if (typeof limit !== 'number' || typeof digit !== 'number')
    throw new TypeError('Limit and Digit should be numbers.');

  if (digit < 0 || digit > 9)
    throw new TypeError('Digit must be between 0-9 inclusive.');

  let str = '';
  let count = 0;
  limit = limit | 0; //ensures limit is an integer.

  for (let i = 0; i <= limit; i++) {
    str += i ** 2;
  }

  str.split('').forEach((char) => {
    if (+char === digit) count++;
  });

  return count;
}

/*You are given a string of space separated numbers, and have to return the highest and lowest number
  e.g: "1 2 3 4 5" give "5 1"
 */
function highAndLow(str) {
  if (typeof str !== 'string')
    throw new TypeError('Expected type of argument to be string.');
  let result = '';

  let arr = str.split(' ').map(Number);

  arr = arr.filter((value) => !isNaN(value));

  arr.sort((a, b) => b - a); //Sort in descending order.
  result += `${arr[0]} ${arr[arr.length - 1]}`;

  return result;
}

/**
 *zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of 
  values.
  The function value is one new array.
  If the arrays are of unequal length, the output will only be as long as the shorter one.
  (Values of the longer array are simply not used.)

  Inputs should not be modified.
 */
function zipWith(func, arr1, arr2) {
  let result = [];
  if (arr1.length < arr2.length) {
    arr1.forEach((element, index) => {
      result.push(func(arr1[index], arr2[index]));
    });
  } else {
    arr2.forEach((element, index) => {
      result.push(func(arr1[index], arr2[index]));
    });
  }

  return result;
}

module.exports = {
  consecutivePairs,
  pointsPerGame,
  numDig,
  highAndLow,
  zipWith,
};
