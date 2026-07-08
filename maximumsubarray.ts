/*

Given an integer array nums, 
find the contiguous subarray with the largest sum and return that sum.

input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
output: 6

[4, -1, 2, 1]

*/

function maxSubarrayBruteForce(nums: number[]): number {

    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
    
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
    
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}

function maxSubarrayAttempt(nums: number[]): number {

    let maxSum: number = nums[0];
    let currentSum: number = nums[0];
    let currentNums: number[] = [];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > currentSum) {

            maxSum = nums[i]
            currentSum = nums[i]
            currentNums = [nums[i]]

        } else {

            currentSum = currentSum += nums[i];
            currentNums.push(nums[i])

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }

        }

    }

    return maxSum;
}

//answer
function maxSubarray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

//do it yourself
function maxSubArrayMyself(nums: number[]): number {

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }

        if (maxSum < currentSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;

}

export {}