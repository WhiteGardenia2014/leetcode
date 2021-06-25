/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

//在js语言中，可以直接判断 ans是否超出范围了
//但在最大范围为 -2^32 ~ 2^32-1 的语言中，不能直接判断 ans 是否超过范围
//具体判断方法可以看题解
var reverse = function (x) {
  let ans = 0
  let d = 0
  while (x) { //当x不为 0的时候就继续循环
    d = x % 10 //取出x的最低位
    ans = ans * 10 + d //ans 等于 ans已经记录的部分 * 进制 + 最低位
    x = (x - d) / 10 // x减掉最低位，除以 10，以计算下一个最低位
  }
  if (ans < -2147483648 || ans > 2147483647) {
    return 0
  }
  return ans
};
// @lc code=end

// console.log(reverse(2147453647));
