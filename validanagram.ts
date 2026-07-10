/*
You’re given two strings, s and t.
Return true if t is an anagram of s; otherwise, return false.
An anagram contains exactly the same characters with exactly the same frequencies, 
but the characters may appear in a different order

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

Assume both strings contain only lowercase English letters.

*/

function validAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false
    }

    let freqs = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const count = freqs.get(char) ?? 0;
    
        freqs.set(char, count + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        const count = freqs.get(char);
    
        if (count === undefined || count === 0) {
            return false;
        }
    
        freqs.set(char, count - 1);
    }

    return true;

}

function validAnagramSort(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("")
}

//Do it myself
function vAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
        return false;
    }

    const grams = new Map<string, number>();

    for (let i = 0; i < s.length; i++){
        const char = s[i];
        const count = grams.get(char) ?? 0;

        grams.set(char, count + 1);
    }

    for (let i = 0; i < t.length; i++){
        const char = t[i];
        const count = grams.get(char);

        if (count === undefined || count === 0) {
            return false;
        }

        grams.set(char, count - 1);
    }

    return true;

}

export {}