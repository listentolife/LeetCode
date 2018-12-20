/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let len = height.length;
    let i = 0,
        k = len - 1;
    while(i < k) {
        let s = Math.min(height[i], height[k]) * (k - i);
        if (s > res) res = s;
        if (height[i] < height[k]) {
            i++;
        } else {
            k--;
        }
    }
    return res;
};