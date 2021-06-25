/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

//贪心算法
//首先对两个数组排序（从小到大）
//如果当前孩子的饥饿值大于饼干能提供的值，就寻找下一个饼干，直到超过饼干的数量
//如果当前孩子的饥饿值小于等于饼干能提供的值，则count加一，
//并将指针指向下一个孩子和下一块饼干

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
    while (g[i] > s[j] && j < s.length) {
      j++
    }
    if (j < s.length) {
      count++
    }
  }
  return count
};
// @lc code=end
