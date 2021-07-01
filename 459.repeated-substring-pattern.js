/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

//枚举方法
var repeatedSubstringPattern = function (s) {
  let n = s.length
  //假设重复子串的长度为 i ，由于子串至少重复一次，因此只需尝试到 n/2
  for (let i = 1; i * 2 <= n; i++) {
    if (n % i == 0) { //如果满足题意，n 必须是 i 的倍数
      let flag = true
      //如果重复子串的长度为 i ，那么对于每一个元素，一定满足 s[j] == s[j-i]
      for (let j = i; j < n; j++) { //从 i 开始，遍历整个字符串
        if (s[j] !== s[j - i]) { //如果不能匹配，退出循环
          flag = false
          break
        }
      }
      if (flag) { //如果在某个子串长度下，能够满足题意，返回 ture
        return true
      }
    }
  }
  return false //如果所有尝试的子串长度都不能匹配，返回 false
};

// KMP算法，获取 next 数组，见 28 题
// 如果满足题意，那么 next 数组的最后一项，一定为原字符串长度减去重复子串的长度
// 而重复子串的长度，一定能被原字符串长度整除
var repeatedSubstringPattern = function (s) {
  if (s.length == 1) { //如果字符串长度为 1，直接返回 false
    return false
  }

  let next = getNext(s)
  let n = s.length
  if (next[n - 1] == -1) { //如果 next 数组的最后一项为 -1，说明没有相同前后缀，肯定不符合题意
    return false
  }
  if (n % (n - next[n - 1] - 1) == 0) { //如果重复子串的长度，能够被原字符串长度整除，说明符合题意
    return true
  }
  return false
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
}

// @lc code=end

console.log(repeatedSubstringPattern("aba"));
