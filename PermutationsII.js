/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums = nums.sort((a,b) => a - b);
    
    var search = function (curArr, canArr) {
        let canLen = canArr.length,
            index;
        if (canLen < 1) {
            res.push(curArr.slice());
        } else {
            for (index = 0; index < canLen; index++) {
                let nextCan = canArr.slice(),
                    i = 1;
                curArr.push(canArr[index]);
                nextCan.splice(index, 1);
                search (curArr, nextCan);
                curArr.pop();
                while (canArr[index] === canArr[index + 1]) index++;
            }
        }
    }
    
    search([], nums);
    return res;
};