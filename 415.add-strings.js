/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/*var addStrings = function (num1, num2) {
  let n1 = num1.length - 1
  let n2 = num2.length - 1
  let c = 0
  let ans = ""
  while (n1 >= 0 || n2 >= 0) {
    x = n1 < 0 ? 0 : Number(num1[n1])
    y = n2 < 0 ? 0 : Number(num2[n2])
    let d = x + y + c
    if (d >= 10) {
      c = 1
      d = d % 10
    } else {
      c = 0
    }
    ans = "" + d + ans
    n1--
    n2--
  }
  if (c == 1) {
    ans = "" + c + ans
  }
  return ans
};*/


//解法同 67 题
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let ans = ""
  let carry = 0
  for (; i >= 0 || j >= 0; i--, j--) {
    let x = num1[i] | 0 //如果某一位数字为undefined，就赋值为0，也就是把较短数字的前面补 0 
    let y = num2[j] | 0
    let s = x + y + carry
    let z = s % 10 //计算当前位
    carry = (s - z) / 10 //计算进位
    ans = z + ans //将当前位 拼到结果的左边
  }
  if (carry) {
    ans = carry + ans //如果最后依然存在进位，就把进位 拼到结果的首位
  }
  return ans
}

// @lc code=end

console.log(addStrings("999", "999"))
