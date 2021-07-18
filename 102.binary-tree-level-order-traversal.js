/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */

//层序遍历，迭代写法
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let queue = [] //记录每一层节点的队列
  queue.push(root)
  while (queue.length) {
    //记录当前层的节点数
    let length = queue.length
    let curLevel = [] //记录当前层节点值的数组
    for (let i = 0; i < length; i++) {
      let node = queue.shift() //每次从 queue 中取出一个节点
      curLevel.push(node.val)
      //把当前层的子节点按顺序放入 queue 中
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curLevel) //把当前层节点值的数组记录到结果中
  }
  return res
};


//递归写法
//对于第 i 层的节点值，要保存在 i 下标的子数组中，对于同一层的节点值，保证记录顺序从左到右
var levelOrder = function (root) {
  let res = [];
  defs(root, 0);
  return res;

  function defs(root, i) {
    if (!root) {
      return;
    }
    if (!res[i]) { //如果记录第 i 层的数组还不存在，就创建一个空数组，用来记录第 i 层的节点值
      res[i] = [];
    }
    res[i].push(root.val)
    root.left && defs(root.left, i + 1);
    root.right && defs(root.right, i + 1);
  }
};
// @lc code=end
