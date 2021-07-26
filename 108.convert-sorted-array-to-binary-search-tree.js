/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 每次选择有序数组的中间值作为根节点，即可构建出平衡的二叉搜索树
var sortedArrayToBST = function (nums) {
  return buildTree(nums, 0, nums.length - 1)

  //递归构建搜索树，自底向上
  function buildTree(nums, left = 0, right = nums.length - 1) {
    if (left > right) {
      return null
    }
    if (left == right) {
      return new TreeNode(nums[left])
    }
    //每次选择有序数组片段的中间值作为根节点
    let mid = Math.floor(left + (right - left) / 2)
    let root = new TreeNode(nums[mid])
    root.left = buildTree(nums, left, mid - 1)
    root.right = buildTree(nums, mid + 1, right)
    return root
  }
};
// @lc code=end
