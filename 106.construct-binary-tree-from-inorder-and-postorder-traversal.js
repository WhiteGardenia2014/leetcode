/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length == 0) { //如果数组中没有了元素，返回空节点
    return null
  }
  //取出后序遍历数组的最后一个元素作为根节点
  let rootVal = postorder[postorder.length - 1]
  let root = new TreeNode(rootVal)
  //在中序遍历数组中找到根节点
  let rootIdxInorder = inorder.indexOf(rootVal)
  //中序遍历数组中，根节点的左半部分就是它的左子树的中序遍历数组，右半部分就是它的右子树的中序遍历数组
  let leftInorder = inorder.slice(0, rootIdxInorder) //左子树的中序遍历数组
  let rightInorder = inorder.slice(rootIdxInorder + 1) //右子树的中序遍历数组
  //依照左子树的中序遍历数组的长度，在后序遍历数组中，分割出左子树的后序遍历数组，右子树的后序遍历数组
  let leftPostorder = postorder.slice(0, leftInorder.length) //左子树的后序遍历数组
  let rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1) //右子树的后序遍历数组
  //递归重复上述步骤
  root.left = buildTree(leftInorder, leftPostorder)
  root.right = buildTree(rightInorder, rightPostorder)
  //最后返回根节点
  return root
};
// @lc code=end
