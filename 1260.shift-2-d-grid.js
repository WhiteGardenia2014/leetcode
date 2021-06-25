/*
 * @lc app=leetcode id=1260 lang=javascript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

//使用了 189 题的方法

var shiftGrid = function (grid, k) {
  let n = grid[0].length
  let arr1 = []
  let arr2 = []
  let ans = []

  for (let value of grid) { //将二维数组转换为一维数组
    arr1.push(...value)
  }

  for (let i = 0; i < arr1.length; i++) { //旋转数组
    arr2[(i + k) % arr1.length] = arr1[i]
  }

  for (let i = 0; i < arr1.length;) { //将一维数组拼接为二维数组
    let item = []
    for (let j = 0; j < n; j++) {
      item.push(arr2[i])
      i++
    }
    ans.push(item)
  }

  return ans
};
// @lc code=end

console.log(shiftGrid([
  [3, 8, 1, 9],
  [19, 7, 2, 5],
  [4, 6, 11, 10],
  [12, 0, 21, 13]
], 4));
