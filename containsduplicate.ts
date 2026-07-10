//Given an integer array nums, 
//return true if any value appears at least twice. 
//Return false if every element is distinct.

// containsDuplicate([1, 2, 3, 1]) // true
// containsDuplicate([1, 2, 3, 4]) // false
// containsDuplicate([])           // false

// function containsDuplicate(nums: number[]): boolean {
//     // Your code
// }

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const number of nums) {
        if (seen.has(number)) {
            return true;
        }

        seen.add(number);

    }

    return false;
}

export {}