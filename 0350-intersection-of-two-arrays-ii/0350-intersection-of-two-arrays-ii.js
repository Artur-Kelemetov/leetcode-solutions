/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const count = new Map();
    result = [];

    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
    
    for (const num of nums1) {
      count.set(num, (count.get(num) || 0) + 1);
    }
    
    for (const num of nums2) {
      if (count.get(num) > 0) {
        result.push(num);
        count.set(num, count.get(num) - 1);
      }
    }
    
    return result;
};