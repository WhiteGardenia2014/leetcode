/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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

// 首先得到中序遍历数组，由数组计算最小绝对差
var getMinimumDifference = function (root) {
  let ary = []
  inorderTraversal(root)
  let min = ary[ary.length - 1]
  for (let i = 1; i < ary.length; i++) {
    min = Math.min(min, ary[i] - ary[i - 1])
  }
  return min
  //中序遍历
  function inorderTraversal(root) {
    if (!root) {
      return
    }
    inorderTraversal(root.left)
    ary.push(root.val)
    inorderTraversal(root.right)
  }
};


//在中序遍历过程中，计算最小绝对差
var getMinimumDifference = function (root) {
  let pre = null
  let min = Infinity
  inorderTraversal(root)
  return min

  //中序遍历
  function inorderTraversal(root) {
    if (!root) {
      return
    }
    inorderTraversal(root.left) //递归左节点
    if (pre) {
      min = Math.min(min, root.val - pre.val)
    }
    pre = root //修改 pre 的指针为 当前节点 root
    inorderTraversal(root.right) //递归右节点
    return
  }
}
// @lc code=end
