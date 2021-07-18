/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
var constructMaximumBinaryTree = function (nums) {
  if (nums.length == 0) { //如果数组长度为 0，返回 null
    return null
  }
  if (nums.length == 1) { //如果数组长度为 1，创建一个节点并返回，node.val = nums[0]
    return new TreeNode(nums[0])
  }

  let maxVal = Math.max(...nums) //取出数组中最大值作为根节点
  let node = new TreeNode(maxVal) //创建根节点

  let maxIdx = nums.indexOf(maxVal) //找到根节点对应的索引
  let leftNums = nums.slice(0, maxIdx) //将数组分割为左子树和右子树
  let rightNums = nums.slice(maxIdx + 1)
  //递归构建根节点的左子树和右子树
  node.left = constructMaximumBinaryTree(leftNums)
  node.right = constructMaximumBinaryTree(rightNums)
  return node
};
// @lc code=end
