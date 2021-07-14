/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */

//后序遍历，如果当前节点左子树和右子树高度差大于 1，就返回 -1，表示已经不是平衡二叉树
var isBalanced = function (root) {
  return getDepth(root) === -1 ? false : true;

  // getDepth 函数，如果不是平衡二叉树，返回 -1，如果是平衡二叉树，返回最大深度
  function getDepth(root) {
    if (!root) { //如果是空节点，返回 0
      return 0
    }
    if (!root.left && !root.right) { //如果是叶子节点，返回 1
      return 1
    }
    //获取左子树最大深度，如果为 -1，返回 -1
    let leftDepth = getDepth(root.left)
    if (leftDepth == -1) {
      return -1
    }
    //获取右子树最大深度，如果为 -1，返回 -1
    let rightDepth = getDepth(root.right)
    if (rightDepth == -1) {
      return -1
    }
    //如果左、右子树高度差大于 1，返回 -1
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    }
    //如果是平衡二叉树，返回其最大深度
    return Math.max(leftDepth, rightDepth) + 1
  }
};
// @lc code=end
