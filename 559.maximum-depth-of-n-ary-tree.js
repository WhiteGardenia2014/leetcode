/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
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
 * @return {number}
 */

// 递归写法
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let depth = 0
  for (let item of root.children) { // 递归求取所有子树的最大深度
    depth = Math.max(depth, maxDepth(item))
  }
  return depth + 1 //返回所有子树的最大深度 +1 
};


//层序遍历迭代写法
var maxDepth = function (root) {
  if (!root) {
    return []
  }
  let depth = 0
  let queue = [] //记录每一层节点值的队列
  queue.push(root)
  while (queue.length) {
    let length = queue.length //记录当前层的节点数
    depth++
    for (let i = 0; i < length; i++) {
      let node = queue.shift() //每次从 queue 中取出一个节点
      //把当前层的子节点按顺序放入 queue 中，node.children为保存子节点的数组
      for (let item of node.children) {
        item && queue.push(item)
      }
    }
  }
  return depth
}
// @lc code=end
