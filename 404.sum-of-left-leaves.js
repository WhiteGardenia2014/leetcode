/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0
  dfs(root)
  return sum

  //前序遍历所有节点，注意要判断一个节点是不是左叶子，需要在它的父节点上判断
  function dfs(root) {
    if (!root) {
      return
    }
    //如果某个节点的左节点是叶子节点，就把左叶子节点的值累加到 sum 上
    if (root.left !== null && root.left.left === null && root.left.right === null) {
      sum += root.left.val
    }
    //遍历所有节点
    dfs(root.left)
    dfs(root.right)
  }
};
// @lc code=end
