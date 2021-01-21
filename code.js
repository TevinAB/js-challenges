module.exports = {
  consecutivePairs,
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
