/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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

//寻找所有路径，和 113 题类似
var sumNumbers = function (root) {
  let sum = 0
  findPath(root)
  return sum

  //寻找所有满足条件的路径，顺序为前序遍历
  function findPath(root, array = []) {
    array.push(root.val) //每次遇到一个节点，就把节点值放入数组中
    //如果遇到的是叶子节点，计算路径对应数字，加到 sum 上
    if (!root.left && !root.right) {
      sum += calnum(array)
      return
    }
    //如果遇到的不是叶子节点
    //如果当前节点有左子树，就递归进入左子树，同时传递数组
    if (root.left) {
      findPath(root.left, array)
      array.pop() //当从递归函数回退出来后，记得弹出数组最后一个数字
    }
    //右子树同理
    if (root.right) {
      findPath(root.right, array)
      array.pop()
    }
    return
  }
};

// 根据路径数组，计算路径对应的数字
function calnum(array) {
  let num = 0
  let base = 1
  for (let i = array.length - 1; i >= 0; i--) {
    num += array[i] * base
    base *= 10
  }
  return num
}
// @lc code=end
