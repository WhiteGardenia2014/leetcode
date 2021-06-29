/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let len = s.length
  let ary = s.split("") //将字符串拆分成数组
  for (let i = 0; i < len; i += 2 * k) { //将数组以 2k 的间隔 分别进行处理
    let j = i
    let p = (j + k - 1) < len ? (j + k - 1) : len - 1 //如果剩余字符少于 k 个，就将剩余字符全部翻转
    while (j < p) {
      [ary[j], ary[p]] = [ary[p], ary[j]]
      j++
      p--
    }
  }
  return ary.join("")
};
// @lc code=end

console.log(reverseStr("abcdefg", 3));
