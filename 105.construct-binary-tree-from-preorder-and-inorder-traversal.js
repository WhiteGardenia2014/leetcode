/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length == 0) { //如果数组中没有了元素，返回空节点
    return null
  }
  //取出前序遍历数组的第一个元素作为根节点
  let rootVal = preorder[0]
  let root = new TreeNode(rootVal)
  //在中序遍历数组中找到根节点
  let rootIdxInorder = inorder.indexOf(rootVal)
  //中序遍历数组中，根节点的左半部分就是它的左子树的中序遍历数组，右半部分就是它的右子树的中序遍历数组
  let leftInorder = inorder.slice(0, rootIdxInorder) //左子树的中序遍历数组
  let rightInorder = inorder.slice(rootIdxInorder + 1) //右子树的中序遍历数组
  //依照左子树的中序遍历数组的长度，在前序遍历数组中，分割出左子树的前序遍历数组，右子树的前序遍历数组
  let leftPreorder = preorder.slice(1, leftInorder.length + 1) //左子树的前序遍历数组
  let rightPreorder = preorder.slice(leftInorder.length + 1) //右子树的前序遍历数组
  //递归重复上述步骤
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  //最后返回根节点
  return root
};
// @lc code=end
