/*
 * @lc app=leetcode id=669 lang=javascript
 *
 * [669] Trim a Binary Search Tree
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

//递归解法，自底向上
var trimBST = function (root, low, high) {
  if (!root) {
    return null
  }
  if (root.val < low) {
    return trimBST(root.right, low, high)
  }
  if (root.val > high) {
    return trimBST(root.left, low, high)
  }
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)
  return root
};


//迭代解法
var trimBST = function (root, low, high) {
  if (!root) {
    return null
  }
  //首先确保根节点在规定范围内
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right
    } else if (root.val > high) {
      root = root.left
    }
  }
  //裁剪左子树
  let cur = root
  while (cur) {
    //注意要循环判断 cur.left 是否满足规定范围
    while (cur.left && cur.left.val < low) {
      cur.left = cur.left.right
    }
    cur = cur.left
  }
  //裁剪右子树
  cur = root
  while (cur) {
    //注意要循环判断 cur.right 是否满足规定范围
    while (cur.right && cur.right.val > high) {
      cur.right = cur.right.left
    }
    cur = cur.right
  }
  return root
}
// @lc code=end
