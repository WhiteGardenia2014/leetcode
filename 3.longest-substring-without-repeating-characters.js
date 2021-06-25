/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口
var lengthOfLongestSubstring = function (s) {
  let mySet = new Set() //建立Set集合
  let fastIndex = 0
  let ans = 0 //记录无重复子串的最大长度
  for (let slowIndex = 0; slowIndex < s.length; slowIndex++) {
    //慢指针每次向前迭代一位
    if (s.length - slowIndex <= ans) {
      //如果剩余字符串的长度（滑动窗口可能取到的最大长度）<= ans
      //说明即使剩余部分是一个无重复子串，长度也不会超过ans了，此时的ans就已经是无重复子串长度的最大值
      break //因此可以退出循环
    }
    if (slowIndex != 0) { //保证第一位要先存到Set集合中
      mySet.delete(s[slowIndex - 1]) //将slow指针前一位的字符弹出set集合
    }
    while (fastIndex < s.length && !mySet.has(s[fastIndex])) {
      //快指针向前搜索Set集合中没有存在过的字符
      mySet.add(s[fastIndex]) //如果Set集合中没有这个字符，就添加进Set集合
      fastIndex++ //fast指针向前移动一位，指向下一个字符
    }
    //此时快慢指针中间的滑动窗口，记录的就是当前最长的无重复子串
    ans = Math.max(ans, fastIndex - slowIndex) //记录并更新无重复子串的最大值
  }
  return ans
};
// @lc code=end

console.log(lengthOfLongestSubstring("asdfgh"));
