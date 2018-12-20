/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    let len = s.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            if ((right - left - 1) > res.length) {
                res = s.substring(left + 1, right)
            }
        }
    }
    return res;
};