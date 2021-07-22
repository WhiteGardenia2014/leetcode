/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//后序遍历、后序遍历为自底向上的递归回溯过程
//left、right分别代表左、右子树中是否存在 p 或 q 节点，如果存在，就返回 p 或 q，如果不存在，返回 null
//由于一定存在公共祖先，如果 left 和 right 均不为 null，说明 root 就是最近公共祖先
//如果最终只有 left 或 right 某一个不为 null，说明 left 或 right 返回的值，就是最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  //如果 root 为 p 或 q，返回 root，如果 root 为 null，返回 null
  if (root === null || root === p || root === q) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left && right) { //如果 left、right 均不为 null，说明 root 就是最近公共祖先，返回 root
    return root
  } else if (left) { //如果只有 left 不为 null，返回 left
    return left
  } else if (right) { //如果只有 right 不为 null，返回 right  
    return right
  } else { //如果 left 和 right 都为 null 返回 null
    return null
  }
};
// @lc code=end
