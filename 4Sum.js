/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/**
 *思路
 *先做排除跟排序
 *进入遍历，从第一位开始，target减去当前遍历元素，再从下一位开始遍历，target再减去当前遍历元素，两个指针指向遍历元素的后一位跟最后一位
 *在指针不重叠的情况下，当求和跟target剩余值相同，则把指针跟遍历元素入栈
 *否则根据求和值跟target剩余值的比较移动指针
 *遍历中排除相同值，遍历完后返回入栈数组
 *
 */

var fourSum = function(nums, target) {
    let res = [],
        i,
        j,
        target2,
        target3,
        front,
        back,
        sum,
        temp;
    if(nums.length === 0) return res;
    nums.sort((a,b) => a - b);
    for(i = 0; i < nums.length; i++){
        target2 = target - nums[i];
        for(j = i + 1; j < nums.length; j++){
            target3 = target2 - nums[j];
            front = j + 1;
            back = nums.length - 1;
            while (front < back) {
                sum = nums[front] + nums[back];
                if (sum < target3) front++; 
                else if(sum > target3) back--;
                else{
                    temp = [nums[i], nums[j], nums[front], nums[back]];
                    res.push(temp);
                    while (front < back && nums[front] === temp[2]) front++;
                    while (front < back && nums[back] === temp[3]) back--;
                }
            }
            while (j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
        }
        while (i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
    }
    return res;
};
