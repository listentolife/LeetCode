/**
 * @param {number} numRows
 * @return {number[][]}
 */

 /**
  *思路：
  *杨辉三角公式pasArr[j] = pasArr[j - 1] + pasArr[j]
  *按每一列来计算每层数组同一列的元素
  *第一列所有元素一定为1，每一列的第一个元素一定为1
  *第二列开始，每列从第二个元素开始都是计算上一层的前两个元素之和
  *
  */

var generate = function(numRows) {
    var pasArr = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < numRows; j++) {
            if (i === 0) {
                pasArr[j] = [];
                pasArr[j].push(1);
            }
            else if (j == i) pasArr[j].push(1);
            else pasArr[j].push(pasArr[j-1][i] + pasArr[j-1][i-1]);
        }
    }
    return pasArr;
};
