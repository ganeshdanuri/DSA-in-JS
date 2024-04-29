// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const leetcodeProbleLink =
  "https://leetcode.com/problems/contains-duplicate/description/";

// Solution 1 (Using Set):
var containsDuplicate = function (nums) {
  const uniqueNums = new Set(nums); // convert it into set which eleminates the duplicates
  return uniqueNums.size !== nums.length;
};

// Solution2 (Using Object)
var containsDuplicate = function (nums) {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    const isExits = numsObj[nums[i]]; // check if the given nums is present in obj
    if (isExits) {
      return true; // return true when its present
    } else {
      numsObj[nums[i]] = 1; // else add it to object
    }
  }

  return false;
};
