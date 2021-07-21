/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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

//遍历求节点数，时间复杂度 O(n)
var countNodes = function (root) {
  if (!root) {
    return 0
  }
  return countNodes(root.left) + countNodes(root.right) + 1
};

//利用完全二叉树的性质
//如果最左子节点和最右子节点的深度相同，说明是满二叉树，节点数量为 2**depth - 1
//如果 root 不是满二叉树，就递归计算它的左子树和右子树
var countNodes = function (root) {
  if (!root) {
    return 0
  }
  let left = root.left
  let right = root.right
  let leftHeight = 1
  let rightHeight = 1
  while (left) { //计算最左子节点的深度
    leftHeight++
    left = left.left
  }
  while (right) { //计算最右子节点的深度
    rightHeight++
    right = right.right
  }
  if (leftHeight === rightHeight) { //如果是满二叉树，可以直接得到这部分的节点数
    return Math.pow(2, leftHeight) - 1
  }
  //如果 root 不是满二叉树，就递归计算它的左子树节点数量和右子树节点数量
  return countNodes(root.left) + countNodes(root.right) + 1
}
// @lc code=end
