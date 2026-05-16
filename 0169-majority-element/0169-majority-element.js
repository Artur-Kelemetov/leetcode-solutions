/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null
    let count = 0

    for (let num of nums) {
        if (count === 0) {
            candidate = num
        }

        if (candidate === num) {
            count++
        } else {
            count--
        }
    }

    let occurrences = 0

    for (let num of nums) {
        if (num === candidate) {
            occurrences++
        }
    }

    if (occurrences > nums.length / 2) {
        return candidate
    }

    return null
};