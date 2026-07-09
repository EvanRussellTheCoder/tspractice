/*

Given an integer array nums, 
move all 0s to the end of the array 
while maintaining the relative order of the non-zero elements.

You must modify the array in place without making a copy of the array.

Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
*/

function moveZeroes(nums: number[]): void {

    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            const temp = nums[i];
            nums[i] = nums[insertPos];
            nums[insertPos] = temp;
            insertPos++;
        }

    }
    
}

//try myself
function moveZs(nums: number[]): void {

    let insertPos = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[i];
            nums[i] = nums[insertPos];
            nums[insertPos] = temp;
            insertPos++;
        }
    }

}

export {}