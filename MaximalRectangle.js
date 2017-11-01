/**
 * @param {character[][]} matrix
 * @return {number}
 */

/**
 *思路
 *先对没行数组，进行从上到下的叠加
 *然后在逐行参考LargestRectangleinHistogram.js的算法计算最大面积
 *
 */
 
var maximalRectangle = function(matrix) {
    let n,
        m;
    let stack = [],
        max = 0,
        i = 0,
        heights,
        cur,
        ind,
        h,
        w;
    for (n = 0; n < matrix.length; n++) {
        for (m = 0; m < matrix[n].length; m++) {
            if (n === 0 || matrix[n][m] === 0) matrix[n][m] = parseInt(matrix[n][m]);
            else matrix[n][m] = parseInt(matrix[n][m]) + matrix[n - 1][m];
        }
        heights = matrix[n];
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
        i = 0;
        stack = [];
    }
    
    return max;
};
