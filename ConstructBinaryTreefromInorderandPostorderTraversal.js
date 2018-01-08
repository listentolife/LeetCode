/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    /**
     *常规算法：
     *后序遍历最后一位一定是根节点值，跟节点前面的分别为左子树的后序遍历跟右子树的后序遍历
     *中序遍历根节点值在中间，其左边是左子树的中序遍历，右边是右子树的中序遍历
     *因此，把中序做map索引，后序用来构造二叉树
     *通过后序最后一位建成根节点，找到根节点在中序的位置，拆分中序，分别建子树。
     */
    /*
    if(inorder.length === 0) return [];
    let map = [];
    for (let i = 0; i < inorder.length; i++) map[inorder[i]] = i;
    var dfs = function(index, startPos, endPos) {
        if (startPos > endPos) return null;
        let node = new TreeNode(postorder[index]);
        let pos = map[postorder[index]];
        node.left = dfs(index - (endPos - pos) - 1, startPos, pos - 1);
        node.right = dfs(index - 1, pos + 1, endPos);
        return node;
    }
    return dfs(inorder.length - 1, 0, postorder.length - 1);
    */

    /**
     *这种算法直接根据中序反推后序遍历
     *从后序最后一位建根节点，指针指向中序最后一位，如果根节点跟指针不同，说明下一位是右子节点
     *如果跟节点跟指针相同，说明下一位是左子节点
     *然后以此类推
     */
    let p = inorder.length - 1，
        i = p;
    var dfs = function (stop) {
        if (inorder[i] !== stop) {
            let node = new TreeNode(postorder[p--]);
            node.right = dfs(node.val);
            i--;
            node.left = dfs(stop);
            return node;
        }
        return null;
    };
    return dfs();
};
