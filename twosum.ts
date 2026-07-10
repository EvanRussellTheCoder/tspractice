//You are given an array of integers and a target number. 
//Return the indices of the two numbers that add up to the target.

//assume
//There is exactly one valid answer.
//You cannot use the same array element twice.
//The order of the returned indices does not matter.

//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]
//because nums[0] + nums[1] = 2 + 7 = 9

// //brute force
// function TwoSum(arr, goal): number[] {
//     //two pointer approach
//     let pointer1: number = arr[0]
//     let pointer2: number = arr[1]

//     //iterate through
//     for (let num: number = 0; num < arr.length; num++) {
//         if ((pointer1 + pointer2) == goal) {
//             return [pointer1, pointer2];
//         } else {
//             pointer1 == arr[num + 1];
//         }
//     }

// }

//ai wrote it
function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        seen.set(current, i);
    }

    return [];
}

//uses null, write by myself
function twoSumm(numbers: number[], goal: number): number[] | null {
    const seen = new Map<number, number>();

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i]
        const complement = current - goal;

        if (seen.has(complement)) {
            return [seen.get(complement)!, i]
        }

        seen.set(current, i)

    }

    return null;
}

export {}