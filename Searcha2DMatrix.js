/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/**
 *思路
 *从二维数组最后一位开始比较
 *当大于目标值时，向左移位
 *当小于目标值时，向上移位
 *
 */
 
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    if (matrix[0].length === 0) return false;
    let row = 0,
        col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0 ) {
        if (target < matrix[row][col]) col--;
        else if (target > matrix[row][col]) row++;
        else return true;
    }
    return false;
};
