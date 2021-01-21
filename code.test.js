const functions = require('./code');

//--------------------------------------Test for consecutive pairs-----------------------------------------
test('Test for number of consecutive pairs', () => {
  expect(functions.consecutivePairs([1, 2, 5, 8, -4, -3, 7, 6, 5])).toBe(3);
});

//--------------------------------------Test for ooints per game-----------------------------------------
test('Calculates the expected points per full game', () => {
  expect(functions.pointsPerGame(30.8, 34.7)).toBe(42.6);
});
