/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */

// 二叉搜索树的中序遍历数组一定为升序，且不包含相同元素
var isValidBST = function (root) {
  let ary = []
  inorderTraversal(root)
  for (let i = 0; i < ary.length - 1; i++) {
    if (ary[i] >= ary[i + 1]) {
      return false
    }
  }
  return true
  //中序遍历
  function inorderTraversal(root) {
    if (!root) {
      return
    }
    inorderTraversal(root.left)
    ary.push(root.val)
    inorderTraversal(root.right)
  }
};


//在中序遍历过程中，判断是否满足 前一个节点的值 < 当前节点的值
var isValidBST = function (root) {
  let pre = null
  return inorderTraversal(root)

  function inorderTraversal(root) {
    if (!root) {
      return true
    }
    let left = inorderTraversal(root.left) //递归左节点
    if (pre && pre.val >= root.val) { //如果 pre 的值 >= 当前节点 root 的值，则不是二叉搜索树
      return false
    }
    pre = root //修改 pre 的指针为 当前节点 root
    let right = inorderTraversal(root.right) //递归右节点
    return left && right
  }
}
// @lc code=end
