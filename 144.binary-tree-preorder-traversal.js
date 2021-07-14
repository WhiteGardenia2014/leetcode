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
//递归方法
var preorderTraversal = function (root) {
  let ans = []
  dfs(root)
  return ans

  function dfs(root) {
    if (root === null) { //如果节点为空，直接返回
      return
    }
    ans.push(root.val) //先记录中节点的值
    dfs(root.left) //再遍历左子树
    dfs(root.right) //再遍历右子树
  }
};

//迭代方法
//可以用迭代的方式实现递归函数，两种方式是等价的，
//区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，
//其余的实现与细节都相同，

//首先将根节点压入栈中
//每次从栈中取出一个节点，将它的中左右三个节点，按照逆序（右左中）存入栈中，
//并采用指针标记法，标记 null 节点在需要记录的节点后面，前序遍历需要标记在中节点后面
//如果从栈中取出的是 null 标记，说明其前一个节点需要被记录，记录下该节点，结束这一次循环
//依次往复，直到栈中已经没有节点

var preorderTraversal = function (root) {
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
    //将中左右节点，按照逆序（右左中）压入栈中，由于中节点需要被记录，就在中节点后面添加标记节点 null
    if (node.right) {
      stack.push(node.right) // 右节点
    }
    if (node.left) {
      stack.push(node.left) // 左节点
    }
    stack.push(node) // 中节点
    stack.push(null)
  }
  return res
}


//递归方法另一种写法，拼接数组
var preorderTraversal = function (root) {
  if (root) {
    return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
  }
  return []
}


//迭代方法另一种写法
//指针优先前进到左侧最深的节点，并把经过的节点记录到栈中
//每次从栈中弹出一个节点，记录下它的值，并把指针指向它的右节点，
//如果右节点存在，下一次循环会记录到栈中，指针每次会优先前进到它左子树的最深节点
//对于中序遍历，在节点出栈的时候记录它，对于前序遍历，在节点进栈的时候记录它
var preorderTraversal = function (root) {
  let result = []
  let stack = []
  let p = root
  while (true) {
    while (p) {
      result.push(p.val)
      stack.push(p)
      p = p.left
    }
    if (!stack.length) {
      break
    }
    let node = stack.pop()
    p = node.right
  }
  return result
}

// @lc code=end
let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}

console.log(preorderTraversal(tree));
