const soma = (...nums) => {
  // [1,2,"3",4,5]
  for (let index = 0; index < nums.length; index++) {
    if (typeof nums[index] !== "number") {
      return null;
    }
  }
  // []
  if (nums.length === 0) return 0;

  // [1,2,3,4,5]

  return nums.reduce((acc, curr) => acc + curr, 0);
};

module.exports = soma;
