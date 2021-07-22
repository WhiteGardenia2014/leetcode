/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
 * @return {number[]}
 */

// 由于二叉搜索树的中序遍历一定为升序数组，因此相同的元素一定相邻
// 在中序遍历的过程中，记录相邻的两个元素，并计算元素出现的次数
// 思路与 530 题类似
var findMode = function (root) {
  let pre = null
  let ans = []
  let count = 1 //记录当前元素出现的次数
  let maxCount = 1 //记录元素频数的最大值
  inorderTraversal(root)
  return ans

  //中序遍历
  function inorderTraversal(root) {
    if (!root) {
      return
    }
    inorderTraversal(root.left) //递归左节点
    if (pre) {
      if (pre.val == root.val) { //如果 pre 和 root 的值相同，count 加一，否则将 count 置为 1
        count++
      } else {
        count = 1
      }
    }
    pre = root //修改 pre 的指针为 当前节点 root

    if (count == maxCount) { //如果当前元素出现次数最多，就记录下它的值
      ans.push(pre.val)
    }
    if (count > maxCount) { //如果当前元素出现次数大于最大值，就更新最大值，并重置众数数组
      ans = []
      maxCount = count
      ans.push(pre.val)
    }

    inorderTraversal(root.right) //递归右节点
    return
  }
};
// @lc code=end
