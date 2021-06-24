/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

//该题需要判断 字符串中的单词和字母是否一一对应
//一个字符只对应唯一的单词
//一个单词也只对应唯一的字符
//这种关系在集合论中称为 “双射” ，或双端映射
//因此需要两张哈希表，记录单词和字符的对应关系
//一旦无法对应，就返回false

var wordPattern = function (pattern, s) {
  let charToWord = {}
  let wordToChar = {}
  let wordArray = s.split(" ") //将单词字符串拆分成每个单词
  if (wordArray.length != pattern.length) { //如果两者长度不同，直接返回false
    return false
  }
  for (let i = 0; i < pattern.length; i++) { //遍历字符串
    let char = pattern[i]
    let word = wordArray[i]
    //如果在charToWord表中，记录过这个字符，但对应的单词不正确
    //或者在wordToChar表中，记录过这个单词，但对应的字符不正确
    //返回false
    //否则就将单词和字符的对应关系，记录到两张表中
    if ((charToWord[char] !== undefined && charToWord[char] !== word) ||
      (wordToChar[word] !== undefined && wordToChar[word] !== char)) {
      return false
    } else {
      charToWord[char] = word
      wordToChar[word] = char
    }
  }
  return true
};
// @lc code=end

console.log(wordPattern("aaaa", "dog dog dog dog"));
