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
  *算法实现上使用了递归，使用变量level来记录当前函数中节点所在的层，然后把节点加入到当前节点层的数组，
  *然后再把子节点跟level+1传入到递归函数中。
  */
var levelOrder = function(root) {
    let result = [];
    let level = 0;
    
    var traversal = function (root, level) {
        if (root === null) return;
        else {
            if (level >= result.length) result[level] = [];
            result[level].push(root.val);
            traversal(root.left, level + 1);
            traversal(root.right, level + 1);
        }
    }
    
    traversal(root, level);
    return result;
};
