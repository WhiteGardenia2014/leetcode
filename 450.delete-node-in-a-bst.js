/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) { //如果没有找到待删除元素，返回 null
    return null
  }
  if (root.val == key) { //如果找到了待删除元素，分为四种情况进行删除
    if (!root.left && !root.right) { //如果待删除元素是叶子节点，直接删除，即返回 null
      return null
    } else if (!root.left) { //如果待删除元素只有右节点，返回右节点
      return root.right
    } else if (!root.right) { //如果待删除元素只有左节点，返回左节点
      return root.left
    } else { //如果待删除元素有左、右节点
      let cur = root.right
      while (cur.left) { //首先找到 root 的右子树的最小值 cur
        cur = cur.left
      }
      cur.left = root.left //把 root.left 挂到 cur.left
      return root.right // 返回 root.right，删除 root 这个节点
    }
  }
  if (root.val < key) { //如果 root.val < key，递归搜索右子树
    root.right = deleteNode(root.right, key)
  }
  if (root.val > key) { //如果 root.val > key，递归搜索左子树
    root.left = deleteNode(root.left, key)
  }
  return root
};
// @lc code=end
