/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 /**
  *利用递归，设定level为层级，以要求的结果可知，奇数层(序数为偶数)为顺序，偶数层(序数为奇数)为逆序
  *所以，需要增加一个判断，选择用unshift()还是push()
  */
var zigzagLevelOrder = function(root) {
    let result = [];
    let level = 0;
    
    var traversal = function (root, level) {
        if (root === null) return;
        else {
            if (level >= result.length) result[level] = [];
            if (level % 2 === 1) result[level].unshift(root.val);
            else result[level].push(root.val);
            traversal(root.left, level + 1);
            traversal(root.right, level + 1);
        }
    }
    
    traversal(root, level);
    return result;
};
