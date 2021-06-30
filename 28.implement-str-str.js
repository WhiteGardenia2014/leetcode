/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//***** Knuth-Morris-Pratt 算法，KMP算法
//暴力查找
/*var strStr = function (haystack, needle) {
  if (needle === "") { //特殊情况，如果needle是空字符串，返回0
    return 0
  }
  let m = haystack.length
  let n = needle.length
  for (let i = 0; i + n <= m; i++) { //从haystack中的第一位开始尝试匹配，直到 m - n 位
    let flag = true
    for (let j = 0; j < n; j++) { //检查needle中的每一位，如果不能匹配，就退出循环，置flag为false
      if (haystack[j + i] != needle[j]) {
        flag = false
        break
      }
    }
    if (flag == true) { //如果匹配成功，返回 i 索引
      return i
    }
  }
  return -1 //如果每一位都匹配失败，返回 -1
};*/


//***** Knuth-Morris-Pratt 算法，KMP算法
var strStr = function (haystack, needle) {
  if (needle === "") { //特殊情况，如果needle是空字符串，返回0
    return 0
  }
  let next = getNext(needle)
  let j = 0 //注意 j 从 0 开始
  for (let i = 0; i < haystack.length; i++) {
    // 如果 haystack[i] 字符和 needle[j] 字符不能匹配，j 就要回溯到之前已经匹配的相同前后缀、的后面，这个信息被保存在 next[j-1] 中
    // 如果回溯后依然不匹配，就要继续回溯，直到回溯到 0 索引位置，此时 j 回溯到 0
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) { //如果 haystack[i] 字符和 needle[j] 字符匹配，两个指针都向后移动一位，判断下一位
      j++
    }
    if (j == needle.length) { //如果 j 指向了 needle 的最后一个字符的后面，说明字符串已经匹配，返回匹配开始时的索引
      return (i - needle.length + 1)
    }
  }
  return -1
}

function getNext(s) { //输入字符串，返回前缀表
  let next = [0] //next数组的第一项设为 0 
  let j = 0
  for (let i = 1; i < s.length; i++) { // 注意 i 从 1 开始，这样才能和 j 比较
    // 如果 i 字符和 j 字符不能匹配，j 就要回溯到之前已经匹配的相同前后缀、的后面，这个信息被保存在 next[j-1] 中
    // 如果回溯后依然不匹配，就要继续回溯，直到回溯到 0 索引位置
    while (j > 0 && s[j] !== s[i]) {
      j = next[j - 1]
    }
    if (s[j] === s[i]) { // 如果 i 字符和 j 字符匹配，说明最长相同前后缀长度 +1
      j++
    }
    next[i] = j //将最长相同前后缀，存储在 next[i] 的位置
  }
  return next
}


//***** Knuth-Morris-Pratt 算法，KMP算法，next 数组各项 -1 的实现
/*var strStr = function (haystack, needle) {
  if (needle === "") { //特殊情况，如果needle是空字符串，返回0
    return 0
  }
  let next = getNext(needle)
  let j = -1 //注意 j 从 -1 开始，j+1 从第 0 个字符开始判断
  for (let i = 0; i < haystack.length; i++) {
    // 如果 haystack[i] 字符和 needle[j + 1] 字符不能匹配，j+1 就要回溯到之前已经匹配的相同前后缀、的后面，这个信息被保存在 next[j] 中
    // 如果回溯后依然不匹配，就要继续回溯，直到回溯到 0 索引位置，此时 j 回溯到 -1
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j]
    }
    if (haystack[i] === needle[j + 1]) { //如果 haystack[i] 字符和 needle[j + 1] 字符匹配，两个指针都向后移动一位，判断下一位
      j++
    }
    if (j == needle.length - 1) { //如果 j 指向了 needle 的最后一个字符，说明字符串已经匹配，返回匹配开始时的索引
      return (i - needle.length + 1)
    }
  }
  return -1
}

function getNext(s) { //输入字符串，返回前缀表
  let next = [-1] //next数组的第一项设为 -1
  let j = -1
  for (let i = 1; i < s.length; i++) { // 注意 i 从 1 开始，这样才能和 j 比较
    // 如果 i 字符和 j+1 字符不能匹配，j+1 就要回溯到之前已经匹配的相同前后缀、的后面，这个信息被保存在 next[j] 中
    // 如果回溯后依然不匹配，就要继续回溯，直到回溯到 0 索引位置，此时 j 回溯到 -1
    while (j >= 0 && s[i] !== s[j + 1]) {
      j = next[j]
    }
    if (s[i] === s[j + 1]) { // 如果 i 字符和 j+1 字符匹配，说明最长相同前后缀长度 +1
      j++
    }
    next[i] = j //将最长相同前后缀，存储在 next[i] 的位置
  }
  return next
}*/


// @lc code=end

console.log(strStr("hello", "lle"));
