/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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

// 和 100题 类似，但是比较的是一棵树的左、右子树，而且顺序要颠倒过来
var isSymmetric = function (root) {
  if (!root.left && !root.right) { //如果只有根节点，返回 true
    return true
  }
  return check(root.left, root.right)
};

function check(p, q) {
  if (!p && !q) { //如果 p q 都为空，返回 true
    return true
  }
  if (!p || !q) { //如果 p q 只有一个为空，返回 false
    return false
  }
  if (p.val !== q.val) { //如果 p q 的值不相等，返回false
    return false
  }
  // 递归比较 p 的左子树，q 的右子树，以及 p 的右子树，q 的左子树
  return check(p.left, q.right) && check(p.right, q.left)
}
// @lc code=end
