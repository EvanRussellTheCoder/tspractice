/*

Given a string s, return true if it is a palindrome after:

Converting uppercase letters to lowercase
Removing all non-alphanumeric characters

Otherwise, return false.

Examples:

Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false

*/

function validPalindrome(s: string): boolean {

    const cleaned = s.replace(/[^a-z0-9]/gi, "").toUpperCase();

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true
}

function validPalindrome2(s: string): boolean {

    const cleaned = s.replace(/[^a-z0-9]/gi, "").toUpperCase();

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }
    
        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }

        if (s[left].toUpperCase() !== s[right].toUpperCase()) {
            return false;
        }
        
        left++;
        right--;

    }

    return true;
    
}

function isAlphanumeric(char: string): boolean {
    return /[a-z0-9]/i.test(char);
}

//do it yourself
function palindrome(s: string): boolean {

    const cleaned = s.replace(/'a-z0-9'/gi, "").toUpperCase();

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;

}

export {}