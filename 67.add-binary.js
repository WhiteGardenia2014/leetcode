/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/*var addBinary = function (a, b) {
  let m = a.length
  let n = b.length
  while (m < n) {
    a = "0" + a
    m++
  }
  while (n < m) {
    b = "0" + b
    n++
  }
  let c = 0
  let ans = ""
  for (let i = a.length - 1; i >= 0; i--) {
    let d = Number(a[i]) + Number(b[i]) + c
    if (d > 1) {
      c = 1
      d = d % 2
    } else {
      c = 0
    }
    ans = "" + d + ans
  }
  if (c == 1) {
    ans = "" + c + ans
  }
  return ans
};*/


var addBinary = function (a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let ans = ""
  let carry = 0 //进位初始值设为 0
  for (; i >= 0 || j >= 0; i--, j--) { //指针从后向前移动，直到移动到更长数字的首位
    let x = a[i] | 0 //如果某一位数字为undefined，就赋值为0，也就是把较短数字的前面补 0 
    let y = b[j] | 0
    let s = x + y + carry
    let z = s & 1 //计算当前位
    carry = s >> 1 //计算进位
    ans = z + ans //将当前位 拼到结果的左边
  }
  if (carry) { //如果最后依然存在进位，就把进位 拼到结果的首位
    ans = carry + ans
  }
  return ans
}
// @lc code=end

console.log(addBinary("101111", "101010"));
