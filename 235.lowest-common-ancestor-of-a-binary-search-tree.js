/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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

//递归方法
var lowestCommonAncestor = function (root, p, q) {
  // 如果 p q 的值均小于 root，说明 root 一定不是公共祖先，需要递归左子树寻找
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  // 如果 p q 的值均大于 root，说明 root 一定不是公共祖先，需要递归右子树寻找
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  // 其他情况，直接返回 root 即可
  return root
};


//迭代方法
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right
    } else {
      return root
    }
  }
}
// @lc code=end
