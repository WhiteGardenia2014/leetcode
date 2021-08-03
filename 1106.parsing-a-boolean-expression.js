/*
 * @lc app=leetcode id=1106 lang=javascript
 *
 * [1106] Parsing A Boolean Expression
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  var str = expression
  var i = 0
  let tree = parseParameter()
  return evaluate(tree)

  // 将给定的字符串，转换为语法树
  function parseParameter() {
    if (str[i] == 't' || str[i] == 'f') {
      return parseValue()
    } else {
      return parseFunctionCall()
    }
  }


  // 将字符 't' 和字符 'f' 转换为 true 和 false
  function parseValue() {
    if (str[i] == 't') {
      i++
      return true
    } else if (str[i] == 'f') {
      i++
      return false
    }
  }


  // 将表示函数的字符串转换为语法树
  function parseFunctionCall() {
    // 创建一个语法树对象，funcName 代表函数的操作，parameters 为函数的参数列表
    var obj = {
      funcName: str[i],
      parameters: []
    }
    i++ // 跳过 funcName 这个字符
    i++ // 跳过 ( 字符

    while (str[i] !== ')') { // 如果遇到了 ) ，就退出循环
      var parameter = parseParameter() // 解析出一个参数，参数可以是 true 或 false，也可以是另一个表示函数的对象
      obj.parameters.push(parameter) // 将解析出的参数放入参数列表

      if (str[i] == ',') { // 如果遇到了逗号，跳过这个逗号，解析下一个参数
        i++
      }
    }
    i++ // 跳过最后一个 )
    return obj
  }


  // 根据语法树，求得表达式的结果
  function evaluate(tree) {
    if (typeof tree == 'object') { // 如果语法树的节点是对象，则递归处理其参数列表，使参数列表中不含有嵌套对象，只有 ture 或 false
      var parameterValues = tree.parameters.map(evaluate)
      if (tree.funcName == '&') { // 如果该节点的运算为，与运算
        for (var i = 0; i < parameterValues.length; i++) {
          if (parameterValues[i] == false) {
            return false
          }
        }
        return true
      }
      if (tree.funcName == '|') { // 如果该节点的运算为，或运算
        for (var i = 0; i < parameterValues.length; i++) {
          if (parameterValues[i] == true) {
            return true
          }
        }
        return false
      }
      if (tree.funcName == '!') { // 如果该节点的运算为，非运算
        return !parameterValues[0]
      }
    } else { // 如果语法树的节点不是对象，则一定是 true 或 false，直接返回即可
      return tree
    }
  }
};
// @lc code=end
