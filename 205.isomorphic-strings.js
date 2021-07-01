/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//也可以分别得到 s 和 t 的模式串，比较两个模式串是否相同
//例如 paper 和 title 的模式串都为 ABACD 

//双端映射问题
//需要两张哈希表，记录s中字符和 t中字符的对应关系
//一旦无法对应，就返回false

var isIsomorphic = function (s, t) {
  if (s.length != t.length) { //如果两字符串长度不同，直接返回false
    return false
  }
  let sTot = {}
  let tTos = {}
  for (let i = 0; i < s.length; i++) {
    let charS = s[i]
    let charT = t[i]
    //如果在 sTot 表中，记录过这个字符 s ，但对应的字符 t 不正确
    //或者在 tTos 表中，记录过这个字符 t ，但对应的字符 s 不正确
    //就返回false
    //否则就将字符 s 和字符 t 的对应关系，记录到两张表中
    if ((sTot[charS] !== undefined && sTot[charS] !== charT) ||
      (tTos[charT] !== undefined && tTos[charT] !== charS)) {
      return false
    } else {
      sTot[charS] = charT
      tTos[charT] = charS
    }
  }
  return true
};
// @lc code=end

console.log(isIsomorphic("paper", "title"));
