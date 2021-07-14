/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
//中序遍历
//递归方法
var inorderTraversal = function (root) {
  let ans = []
  dfs(root)
  return ans

  function dfs(root) {
    if (root === null) { //如果节点为空，直接返回
      return
    }
    dfs(root.left) //先遍历左子树
    ans.push(root.val) //再记录中节点的值
    dfs(root.right) //再遍历右子树
  }
};


//迭代方法

//首先将根节点压入栈中
//每次从栈中取出一个节点，将它的左中右三个节点，按照逆序（右中左）存入栈中，
//并采用指针标记法，标记 null 节点在需要记录的节点后面，中序遍历需要标记在中节点后面
//如果从栈中取出的是 null 标记，说明其前一个节点需要被记录，记录下该节点，结束这一次循环
//依次往复，直到栈中已经没有节点

var inorderTraversal = function (root) {
  let res = []
  let stack = []
  if (root) { //如果根节点不为 null，就把根节点存入到栈中
    stack.push(root)
  }
  while (stack.length) { //当栈中已经没有节点时，退出循环
    let node = stack.pop() //每次从栈中取出一个节点
    //如果取出的是标记节点 null，说明前一个节点需要被记录，弹出这个节点并记录下来，结束这一次循环
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    //如果取出的不是标记节点 null，说明这个节点还不需要被记录下来，
    //将左中右节点，按照逆序（右中左）压入栈中，由于中节点需要被记录，就在中节点后面添加标记节点 null
    if (node.right) {
      stack.push(node.right) // 右节点
    }
    stack.push(node) // 中节点
    stack.push(null)
    if (node.left) {
      stack.push(node.left) // 左节点
    }

  }
  return res
}


//递归方法另一种写法，拼接数组
var inorderTraversal = function (root) {
  if (root) {
    return inorderTraversal(root.left).concat(root.val).concat(inorderTraversal(root.right))
  }
  return []
}


//迭代方法另一种写法
//指针优先前进到左侧最深的节点，并把经过的节点记录到栈中
//每次从栈中弹出一个节点，记录下它的值，并把指针指向它的右节点，
//如果右节点存在，下一次循环会记录到栈中，指针每次会优先前进到它左子树的最深节点
//对于中序遍历，在节点出栈的时候记录它，对于前序遍历，在节点进栈的时候记录它
var inorderTraversal = function (root) {
  let result = []
  let stack = []
  let p = root
  while (true) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    if (!stack.length) {
      break
    }
    let node = stack.pop()
    result.push(node.val)
    p = node.right
  }
  return result
}

// @lc code=end
