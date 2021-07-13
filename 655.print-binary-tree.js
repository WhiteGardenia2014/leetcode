/*
 * @lc app=leetcode id=655 lang=javascript
 *
 * [655] Print Binary Tree
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
 * @return {string[][]}
 */
var printTree = function (root) {
  let depth = maxDepth(root)
  //生成二维数组，一共有 depth 行，每一行有 2 ** depth - 1 列，并用 "" 填充
  let ans = Array(depth).fill().map(item => Array(2 ** depth - 1).fill(""))
  dfs(root)
  return ans

  //递归调用 dfs 函数，遍历树的所有节点，将节点记录在二维数组中
  // dfs 函数，传入需要记录的层数 level，该层的左边界 left，右边界 right
  function dfs(root, level = 0, left = 0, right = 2 ** depth - 2) {
    if (!root) {
      return
    }
    let mid = (left + right) / 2 //计算出节点值应该记录的位置
    ans[level][mid] = String(root.val)
    root.left && dfs(root.left, level + 1, left, mid - 1)
    root.right && dfs(root.right, level + 1, mid + 1, right)
  }
};

//获取树的最大深度
function maxDepth(root) {
  if (!root) {
    return 0
  }
  let leftDepth = maxDepth(root.left) //获取左子树的最大深度
  let rightDepth = maxDepth(root.right) //获取右子树的最大深度
  return Math.max(leftDepth, rightDepth) + 1 //返回左、右子树最大深度的最大值 + 1
};
// @lc code=end
