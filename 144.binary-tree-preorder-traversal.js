/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
//前序遍历
var preorderTraversal = function (root) {
  let ans = []
  dfs(root)
  return ans

  function dfs(root) {
    if (root === null) { //如果节点为空，直接返回
      return
    }
    ans.push(root.val) //先遍历中节点
    dfs(root.left) //再遍历左子树
    dfs(root.right) //再遍历右子树
  }
};
// @lc code=end
let tree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
}

console.log(preorderTraversal(tree));
