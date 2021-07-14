/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length == 0) { //如果数组中没有元素，返回空节点
    return null
  }
  if (pre.length == 1) { //如果数组中只有一个元素，返回这个节点
    return new TreeNode(pre[0])
  }
  //取出前序遍历数组的第一个元素作为根节点
  let rootVal = pre[0]
  let root = new TreeNode(rootVal)
  //取出前序遍历数组的第二个元素作为左子树根节点
  let leftVal = pre[1]
  //在后序遍历数组中找到左子树根节点
  let leftRootInPost = post.indexOf(leftVal)

  //在前序遍历数组中，分割出左子树的前序遍历数组、右子树的前序遍历数组
  let leftNodeCount = leftRootInPost + 1
  let leftPre = pre.slice(1, leftNodeCount + 1) //左子树的前序遍历数组
  let rightPre = pre.slice(leftNodeCount + 1) //右子树的前序遍历数组

  //依照左子树的前序遍历数组的长度，在后序遍历数组中，分割出左子树的后序遍历数组，右子树的后序遍历数组
  let leftPost = post.slice(0, leftPre.length) //左子树的后序遍历数组
  let rightPost = post.slice(leftPre.length, post.length - 1) //右子树的后序遍历数组
  //递归重复上述步骤
  root.left = constructFromPrePost(leftPre, leftPost)
  root.right = constructFromPrePost(rightPre, rightPost)
  //最后返回根节点
  return root
};
// @lc code=end
