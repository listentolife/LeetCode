/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/**
 *思路
 *这题跟上一题Search a 2D Matrix差不多
 *从二维数组左上角开始比较，目标值大于当前数组元素则左移，否则向上移
 *
 */
 
var searchMatrix = function(matrix, target) { 
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;
    let n = matrix.length, m = matrix[0].length;
    let i = n - 1, j = 0;
    while (i >= 0 && j < m) {
        if (matrix[i][j] < target) {
            j++;
        } else if (matrix[i][j] > target) {
            i--;
        } else {
            return true;
        }
    }
    return false;
};
