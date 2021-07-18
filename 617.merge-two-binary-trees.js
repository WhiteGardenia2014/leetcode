/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  //如果两棵树的节点都不存在，返回 null
  if (!root1 && !root2) {
    return null
  }
  //如果某一棵树的节点不存在，返回 另一棵树的节点
  if (!root2) {
    return root1
  }
  if (!root1) {
    return root2
  }
  //如果两棵树的节点都存在，创建一个新节点，节点的值为两棵树的节点值之和
  let root = new TreeNode(0)
  root.val = root1.val + root2.val
  //递归生成这个节点的左子树、右子树
  root.left = mergeTrees(root1.left, root2.left)
  root.right = mergeTrees(root1.right, root2.right)
  return root
};
// @lc code=end
