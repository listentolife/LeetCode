/**
 * @param {number} rowIndex
 * @return {number[]}
 */

 /**
  *思路：
  *杨辉三角公式pasArr[j] = pasArr[j - 1] + pasArr[j]
  *可以一层层计算数组，从高位下标开始计算，
  *可以在不影响前面元素数据的不断更新当前元素数据
  *最后获得最后一层数组
  *
  */

var getRow = function(rowIndex) {
    pasArr = [];
    for (let i = 0; i <= rowIndex; i++) {
        for (let j = i; j >= 0; j--) {
            if (j === i || j === 0) pasArr[j] = 1;
            else pasArr[j] = pasArr[j - 1] + pasArr[j];
        }
    }
    return pasArr;
};
