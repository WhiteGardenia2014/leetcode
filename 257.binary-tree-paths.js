/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */

//求取所有路径，和 113 题，129 题类似，只是对路径数组的处理不同
var binaryTreePaths = function (root) {
  let res = []
  findPath(root)
  return res

  //寻找所有满足条件的路径，顺序为前序遍历
  function findPath(root, array = []) {
    array.push(root.val) //每次遇到一个节点，就把节点值放入数组中
    //如果遇到的是叶子节点，计算路径对应的字符串，并添加到结果中
    if (!root.left && !root.right) {
      res.push(calstr(array))
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

// 根据路径数组，计算路径对应的字符串
function calstr(array) {
  let str = ""
  for (let i = 0; i < array.length; i++) {
    str = str + array[i] + "->"
  }
  return str.slice(0, -2)
}
// @lc code=end
