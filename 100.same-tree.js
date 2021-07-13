/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) { //如果 p q 都为空，返回 true
    return true
  }
  if (!p && q || p && !q) { //如果 p q 只有一个为空，返回 false
    return false
  }
  if (p.val !== q.val) { //如果 p q 的值不相等，返回false
    return false
  }
  // 递归比较 p q 的左子树和右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end
