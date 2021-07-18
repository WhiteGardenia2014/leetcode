/*
 * @lc app=leetcode id=606 lang=javascript
 *
 * [606] Construct String from Binary Tree
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
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
  if (root) {
    if (!root.left && !root.right) {
      return "" + root.val
    }
    //如果节点没有右子树，可以省略右子树的括号
    if (!root.right) {
      return root.val + "(" + tree2str(root.left) + ")"
    }
    //如果节点没有左子树，不能省略左子树的括号
    if (!root.left) {
      return root.val + "()(" + tree2str(root.right) + ")"
    }
    return root.val + "(" + tree2str(root.left) + ")(" + tree2str(root.right) + ")"
  } else {
    return ""
  }
};
// @lc code=end
