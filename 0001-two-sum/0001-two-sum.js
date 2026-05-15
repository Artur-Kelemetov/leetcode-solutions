/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map()

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const need = target - current

        if (seen.has(need)) {
            return [seen.get(need), i]
        }

        seen.set(current, i)
    }
};