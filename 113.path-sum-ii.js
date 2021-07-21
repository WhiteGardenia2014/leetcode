/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return []
  }
  let result = []
  findPath(root, targetSum)
  return result

  //寻找所有满足条件的路径
  function findPath(root, targetSum, array = []) {
    array.push(root.val) //每次遇到一个节点，就把节点值放入数组中
    //如果遇到的是叶子节点，判断节点值是否等于目标值
    if (!root.left && !root.right) {
      //如果节点值等于目标值，把数组记录在 result 中，注意记录的是 array 的副本，而不要直接保存引用
      if (root.val === targetSum) {
        result.push(array.slice())
      } else { //如果节点值不等于目标值，回退到上一个节点
        return
      }
    }
    //如果遇到的不是叶子节点
    //如果当前节点有左子树，就递归进入左子树，传递剩余的目标值，传递数组
    if (root.left) {
      findPath(root.left, targetSum - root.val, array)
      array.pop() //当从递归函数回退出来后，记得弹出数组最后一个数字
    }
    //右子树同理
    if (root.right) {
      findPath(root.right, targetSum - root.val, array)
      array.pop()
    }
    return
  }
};
// @lc code=end
