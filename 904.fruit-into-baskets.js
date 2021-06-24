/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} tree
 * @return {number}
 */

//滑动窗口
//模拟采摘水果的整个过程
var totalFruit = function (tree) {
  let myMap = new Map()
  let left = 0
  let right = 0
  let count = 0 //统计当前拿到的水果数量
  let max = 0 //记录最大拿到过的水果数量

  while (right < tree.length) { //遍历整个水果树数组
    let fruit = tree[right]
    if (myMap.has(fruit)) { //记录拿到的水果的种类，和数目
      myMap.set(fruit, myMap.get(fruit) + 1) //如果遇到过这种水果，就数量加 1
    } else {
      myMap.set(fruit, 1) //如果没遇到过这种水果，就添加进map
    }
    //判断是否拿到了第三种水果，如果拿到了第三种水果，就要缩短滑动窗口，直到仅剩两种水果
    while (myMap.size > 2) {
      let leftFruit = tree[left] //左指针从第一个水果数开始遍历
      myMap.set(leftFruit, myMap.get(leftFruit) - 1) //把左指针指向的水果的数量减 1
      count-- //当前拿到的水果数减一
      if (myMap.get(leftFruit) == 0) { //如果左指针指向的水果的数量已经减小到 0，就说明篮子中已经没有这种水果了
        myMap.delete(leftFruit) //应该把这种水果从map中移除
      }
      left++ //左指针右移一位，指向下一个水果树
    }

    count++ //确保摘下当前水果的时候，篮子中的水果种类不超过两种，此时可以让水果数目加 1
    max = Math.max(count, max) //水果数目加 1 的时候，更新拿到过的最大的水果数量
    right++ //右指针右移一位，指向下一个水果树
  }
  return max //返回记录的，拿到过的最大水果数量
};
// @lc code=end

console.log(totalFruit([1, 2, 3, 2, 2]));
