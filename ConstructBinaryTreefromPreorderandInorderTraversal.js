/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 *from https://discuss.leetcode.com/topic/16221/simple-o-n-without-map
 */

var buildTree = function(preorder, inorder) {
    /**
     *这种算法直接根据中序反推前序遍历
     *从前序第一位建根节点，指针指向中序最后一位，如果根节点跟指针不同，说明下一位是左子节点
     *如果跟节点跟指针相同，说明下一位是右子节点
     *然后以此类推
     */
    let p = 0,
        i = 0;
    var dfs = function (stop) {
        if (inorder[i] !== stop) {
            let node = new TreeNode(preorder[p++]);
            node.left = dfs(node.val);
            i++;
            node.right = dfs(stop);
            return node;
        }
        return null;
    };
    return dfs();
    
    /*
    var n = preorder.length;
    
    var map = {};
    for (var i = 0; i < n; i++ ) {
        map[inorder[i]] = i;
    }
            
    function helper(i1, i2, j1, j2) {
        if (i1 > i2) {
            return null;
        }

        var rootVal = preorder[i1];
        var j = map[rootVal];
        var nLeft = j - j1;
        var nRight = j2 - j;

        var root = new TreeNode(rootVal);
        root.left = helper(i1 + 1, i1 + nLeft, j1, j - 1);
        root.right = helper(i2 - nRight + 1, i2, j + 1, j2);

        return root;
    }
    */
    
    
};
