/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // handle cases where k > n

    // helper function to reverse part of the array in place
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    // Step 1: Reverse the entire array
    reverse(0, n - 1);

    // Step 2: Reverse first k elements
    reverse(0, k - 1);

    // Step 3: Reverse the rest
    reverse(k, n - 1);
};
