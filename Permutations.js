/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    
    var search = function (curArr, canArr) {
        let canLen = canArr.length,
            index;
        if (canLen < 1) {
            res.push(curArr.slice());
        } else {
            for (index = 0; index < canLen; index++) {
                let nextCan = canArr.slice();
                curArr.push(canArr[index]);
                nextCan.splice(index, 1);
                search (curArr, nextCan);
                curArr.pop();
            }
        }
    }
    
    search([], nums);
    return res;
};