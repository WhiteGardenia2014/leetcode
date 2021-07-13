/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let queue = [] //记录每一层节点值的队列
  queue.push(root)
  while (queue.length) {
    //记录当前层的节点数
    let length = queue.length
    let curLevel = [] //记录当前层节点值的数组
    for (let i = 0; i < length; i++) {
      let node = queue.shift() //每次从 queue 中取出一个节点
      curLevel.push(node.val)
      //把当前层的子节点按顺序放入 queue 中，注意子节点保存在 node.children 属性中，该属性是一个节点数组
      for (let item of node.children) {
        item && queue.push(item)
      }
    }
    res.push(curLevel) //把当前层节点值的数组记录到结果中
  }
  return res
};
// @lc code=end
