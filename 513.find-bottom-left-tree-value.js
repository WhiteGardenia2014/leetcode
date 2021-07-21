/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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

//层序遍历，模板见 102 题
//记录每一层的第一个节点的值，最后保留的就是左下角的节点值
var findBottomLeftValue = function (root) {
  let res = 0
  let queue = [root]
  while (queue.length) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if (i == 0) {
        res = node.val
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res
};
// @lc code=end
