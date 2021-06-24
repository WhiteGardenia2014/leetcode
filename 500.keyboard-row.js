/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */

//生成三个集合，对应键盘的第一二三行
var findWords = function (words) {
  let set1 = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"])
  let set2 = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"])
  let set3 = new Set(["z", "x", "c", "v", "b", "n", "m"])
  let ans = []
  for (let word of words) {

    if (word.length == 0) { //如果单词长度为 0，跳过该单词
      continue
    }

    let wordLower = word.toLowerCase() //将单词转换为小写
    let char = wordLower[0] //取出第一个字符
    let flag = false
    if (set1.has(char)) { //判断单词是否能由三个集合中的某一个拼成
      flag = isWordInRow(wordLower, set1)
    } else if (set2.has(char)) {
      flag = isWordInRow(wordLower, set2)
    } else if (set3.has(char)) {
      flag = isWordInRow(wordLower, set3)
    }
    if (flag == true) { //如果单词能由键盘的某一行拼成，把它添加到数组中
      ans.push(word)
    }
  }
  return ans
};

function isWordInRow(word, myset) { //传入单词和集合，判断单词能否由集合中的字符拼成
  for (let char of word) {
    if (!myset.has(char)) { //如果集合中没有这个字符，就返回false
      return false
    }
  }
  return true
}

// @lc code=end

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
