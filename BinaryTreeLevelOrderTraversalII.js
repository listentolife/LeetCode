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
  *跟Binary Tree Level Order Traversal的算法相似，
  *只是在增加层级数组时，调整为用.unshift()加入到数组的头部
  */
var levelOrderBottom = function(root) {
    let result = [];
    let level = 0;
    
    var traversal = function (root, level) {
        if (root === null) return;
        else {
            if (level >= result.length) {
                let order = [];
                result.unshift(order);
            }
            result[result.length - level - 1].push(root.val);
            traversal(root.left, level + 1);
            traversal(root.right, level + 1);
        }
    }
    
    traversal(root, level);
    return result;
};
