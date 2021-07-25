/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */

//递归解法
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val)
  } else {
    if (val < root.val) {
      root.left = insertIntoBST(root.left, val)
    } else {
      root.right = insertIntoBST(root.right, val)
    }
    return root
  }
};


//迭代解法
var insertIntoBST = function (root, val) {
  if (root) {
    let temp = root
    while (true) {
      if (val < temp.val) {
        if (temp.left) {
          temp = temp.left
        } else {
          temp.left = new TreeNode(val)
          break
        }
      } else {
        if (temp.right) {
          temp = temp.right
        } else {
          temp.right = new TreeNode(val)
          break
        }
      }
    }
    return root
  }
  return new TreeNode(val)
}
// @lc code=end
