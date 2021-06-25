/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

//******数学方法
//推导杨辉三角每一项的数学公式，如果计数从0开始
//其中第n行的第m个数满足 num = C ( n , m )


//动态规划，滚动数组
//由于杨辉三角的第 i 行只与第 i - 1 行有关，所以只需要维护两个数组
//可以使用滚动数组方法，这样只需要维护一个数组
//注意 因为杨辉三角第 i 行中 各项的值 依赖前一项的值，因此要从后到前遍历杨辉三角的第 i – 1 行，
//首先令最后一位为 1，中间的项满足 array [ j ] = array [ j ] + array [ j – 1 ]

var getRow = function (rowIndex) {
  let ans = [1]
  for (let i = 0; i <= rowIndex; i++) {
    let j = i
    ans[j] = 1
    for (j = i - 1; j > 0; j--) {
      ans[j] = ans[j] + ans[j - 1]
    }
  }
  return ans
};
// @lc code=end
