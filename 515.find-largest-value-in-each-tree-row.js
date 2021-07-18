/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
var largestValues = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root] //记录每一层节点的队列
  while (queue.length) {
    //每次进入循环时，记录当前层的节点数
    let length = queue.length
    let curLevel = [] //记录当前层的节点值的数组
    for (let i = 0; i < length; i++) {
      let node = queue.shift() //每次从 queue 中取出一个节点
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    //记录当前层节点值的最大值
    res.push(Math.max(...curLevel))
  }
  return res
};
// @lc code=end
