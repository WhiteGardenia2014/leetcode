/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */

//对象方法
var distributeCandies = function (candyType) {
  let hash = {}
  for (let i = 0; i < candyType.length; i++) { //遍历糖果数组，记录每种糖果的数量
    let type = candyType[i]
    hash[type] ? hash[type]++ : hash[type] = 1
  }

  let count = 0
  for (let key in hash) { //遍历哈希集，得到糖果种类的数目
    count++
  }
  //女孩能得到的糖果种类，最多为糖果数目的一半
  //如果糖果总的种类数目，小于糖果数目的一半，那女孩最多能得到的糖果种类，为糖果总的种类数目
  let ans = Math.min(count, candyType.length / 2)
  return ans
};

//Set集合方法
var distributeCandies = function (candyType) {
  let myset = new Set()
  for (let i = 0; i < candyType.length; i++) {
    myset.add(candyType[i])
  }
  let ans = Math.min(myset.size, candyType.length / 2)
  return ans
}
// @lc code=end

console.log(distributeCandies([6, 6, 6, 6]));
