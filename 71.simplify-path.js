/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */

//栈
var simplifyPath = function (path) {
  let stack = []
  let parts = path.split("/") //用 "/" 拆分字符串为数组，"//" 这种情况会拆分出空字符串 ""
  for (let i = 0; i < parts.length; i++) { //遍历数组
    let part = parts[i]
    if (part == "..") { //如果遇到 ".." ，就弹出栈顶最后一项
      stack.pop()
    } else if (part == ".") { //如果遇到 "." ，或者空字符串 ""，就跳过这一项
      continue
    } else if (part == "") {
      continue
    } else { //如果不是以上三种情况，就添加进栈中
      stack.push(part)
    }
  }
  return "/" + stack.join("/") //最后用 "/" 做为连接符，将数组拼成字符串，注意要在最前面加上 "/"
};
// @lc code=end

console.log(simplifyPath("/a/./b/../../c/"));
