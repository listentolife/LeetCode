/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 *思路
 *这题直接DFS遍历二叉树直到叶子再累加，期间比较获得最小值
 *
 */
 
var minDepth = function(root) {
    if (!root) return 0;
    let L = minDepth(root.left), R = minDepth(root.right);
    return 1 + (Math.min(L, R) || Math.max(L, R));
};
