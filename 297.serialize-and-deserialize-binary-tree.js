/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  //将紧凑数组转换为字符串
  return treeToCondensedArray(root).map(item => {
    if (item === null) {
      return "null"
    }
    return item
  }).join()

  //将树转换为紧凑数组
  function treeToCondensedArray(root) {
    if (!root) {
      return []
    }
    let res = []
    let nodes = [root] //首先将根节点放入节点数组
    for (let i = 0; i < nodes.length; i++) {
      //每次从节点数组中取出一个节点
      let node = nodes[i]
      //如果不是空节点，就记录它的值，把它的左子树、右子树，放入节点数组
      if (node) {
        res.push(node.val)
        nodes.push(node.left)
        nodes.push(node.right)
      } else { //如果是空节点，就记录null
        res.push(null)
      }
    }
    return res
  }
};

//JSON方法
/*
var serialize = function (root) {
    return JSON.stringify(root)
  }
*/


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "") { //如果 data 为空字符串，返回 null
    return null
  }
  //将字符串转换为紧凑数组
  let ary = data.split(",").map(item => {
    if (item === "null") {
      return null
    }
    return Number(item)
  })
  return condensedArrayToTree(ary)

  //将紧凑数组转换为树
  function condensedArrayToTree(array) {
    if (array.length == 0) {
      return null
    }
    let root = new TreeNode(array[0]) //首先创建根节点
    let nodes = [root] //将根节点添加到节点数组

    for (let i = 1; i < array.length; i++) {
      //每次从节点数组中取出一个节点，为它添加左右子节点
      let node = nodes.shift()
      //从数组中取出一个值，作为左节点
      if (array[i] == null) { //如果为 null，就在左边添加一个空节点
        node.left = null
      } else { //如果不是 null，就创建一个新节点，添加到左边，并把左节点添加到节点数组中
        node.left = new TreeNode(array[i])
        nodes.push(node.left)
      }
      //从数组中再取出一个值，作为右节点，其他步骤同左节点
      i++
      if (array[i] == null) {
        node.right = null
      } else {
        node.right = new TreeNode(array[i])
        nodes.push(node.right)
      }
    }
    return root
  }
};

//JSON方法
//JSON.parse()将返回一个朴素对象，应该将其转换为 TreeNode 对象
/*
var deserialize = function (data) {
  return JSON.parse(data, function (k, v) {
    if (v && typeof v == "object") {
      return new TreeNode(v.val, v.left, v.right)
    }
    return v
  })
}
*/

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
