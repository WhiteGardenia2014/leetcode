/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//字符串乘法、或大整数乘法
//这道题还有其他的数学方法，如多项式相乘，卷积等

var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") { //如果有一个乘数为0，直接返回0
    return "0"
  }

  if (num1.length < num2.length) { //保证num1为位数更多的那个数
    [num1, num2] = [num2, num1]
  }

  let num1times = [0] //开辟一个记录num1倍数的数组
  let a = "0"
  for (let i = 1; i < 10; i++) { //使用字符串加法，记录num1的1-9倍数到数组中
    a = addStrings(a, num1)
    num1times.push(a)
  }

  let result = "0"
  let zeros = ""
  for (let i = num2.length - 1; i >= 0; i--) { //从低到高遍历num2的每一位
    let count = Number(num2[i]) //获取num2的位数，在num1times数组中查找对应的倍数
    let mul = num1times[count] + zeros //根据当前乘的位数，在倍数后面加若干个0
    result = addStrings(result, mul) //将补零后的倍数加到结果中
    zeros = zeros + "0" //前进一位，补零的数目也加一
  }
  return result
};


var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let ans = ""
  let carry = 0
  for (; i >= 0 || j >= 0; i--, j--) {
    let x = num1[i] | 0
    let y = num2[j] | 0
    let s = x + y + carry
    let z = s % 10
    carry = (s - z) / 10
    ans = z + ans
  }
  if (carry) {
    ans = carry + ans
  }
  return ans
}

// @lc code=end

console.log(multiply("2", "3"));
