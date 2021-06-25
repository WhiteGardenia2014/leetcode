/*
 * @lc app=leetcode id=1742 lang=javascript
 *
 * [1742] Maximum Number of Balls in a Box
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let n = Math.ceil(Math.log10(highLimit))
  let box = Array(9 * n + 2).fill(0) //如果最大的数字是99，就生成长度为20的数组对应20个盒子
  //如果只有一个数字，那么也至少需要两个盒子，因为始终存在一个 0 号盒子

  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0
    let item = i
    while (item) { //计算小球的各位数字和，放入对应的盒子
      sum += item % 10
      item = (item - (item % 10)) / 10
    }
    box[sum]++
  }

  let max = 0
  for (let i = 0; i < box.length; i++) { //找到小球数量的最大值
    max = Math.max(max, box[i])
  }
  return max
};
// @lc code=end

countBalls(19, 28)
