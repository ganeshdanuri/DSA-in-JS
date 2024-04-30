// Hint - use hash map to instantly check for difference value, map will add index of last occurrence of a num, don’t use same element twice;

var twoSum = function (nums, target) {
  const numsMap = new Map(); // to hold hold key, value in js we use new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numsMap.has(diff)) {
      return [i, numsMap.get(diff)];
    } else {
      numsMap.set(nums[i], i); // set nums[i] as key, and index a value
    }
  }
};
