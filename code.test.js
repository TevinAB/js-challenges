const functions = require('./code');

//--------------------------------------Test for consecutive pairs-----------------------------------------
// test('Test for number of consecutive pairs', () => {
//   expect(functions.consecutivePairs([1, 2, 5, 8, -4, -3, 7, 6, 5])).toBe(3);
// });

//--------------------------------------Test for points per game-----------------------------------------
// test('Calculates the expected points per full game', () => {
//   expect(functions.pointsPerGame(30.8, 34.7)).toBe(42.6);
// });

//--------------------------------------Test for num digit-----------------------------------------
// test('Test the number of times a given digit appears', () => {
//   expect(functions.numDig(10, 1)).toBe(4);
// });

// test('Test the number of times a given digit appears', () => {
//   expect(functions.numDig(25, 1)).toBe(11);
// });

//--------------------------------------Test for high and low -----------------------------------------

test('Returns the highest and lowest number in a string', () => {
  expect(functions.highAndLow('1 2 3 4 5')).toBe('5 1');
});
