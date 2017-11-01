/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 *思路
 *遍历中对小的值不断入栈，直到大值出现
 *然后出栈计算当前面积跟最大面积的比较，保留最大值，直到数组没有值
 *遍历完后最后得到的为最大面积
 *
 */
 
var largestRectangleArea = function(heights) {
    if (heights.length === 0) return 0;
    let stack = [],
        max = 0,
        i = 0,
        cur,
        ind,
        h,
        w;
    while (i <= heights.length) {
        cur = (i === heights.length)? -1 : heights[i];
        if (stack.length !== 0 && cur < heights[stack[stack.length-1]]) {
            ind = stack.pop();
            h = heights[ind];
            w = (stack.length === 0)? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, h * w);
        } else {
            stack.push(i);
            i++;
        }
    }
    return max;
};
