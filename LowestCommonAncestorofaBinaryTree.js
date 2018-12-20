/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/*
 *递归遍历树的节点，然后判断节点是否为p，q其中一个节点或者子节点是否为p，q其中一个节点。
 *前者判断得p，q其中一个节点为最近公共祖先，后者判断当前节点为最近公共祖先
 */

var lowestCommonAncestor = function(root, p, q) {
    var lowestCommonAncestorNode = function(node) {
        if(!node) return null;

        if(node.val === p.val || node.val === q.val) {
            return node;
        } 

        const leftTree  = lowestCommonAncestorNode(node.left);
        const rightTree = lowestCommonAncestorNode(node.right);
        
        if(leftTree && rightTree) {
            return node;
        } else {
            return leftTree || rightTree;
        }
    }
    
    return lowestCommonAncestorNode(root);
};