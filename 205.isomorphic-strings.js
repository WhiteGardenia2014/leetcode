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


//第二种解法
var isIsomorphic = function (s, t) {
  var map1 = {}
  var map2 = {}

  for (var i = 0; i < s.length; i++) {
    var a = s[i]
    var b = t[i]

    if (a in map1) { // 如果 s 中的字符已经遇到过，则其应该有对应的字符
      if (map1[a] !== b) { // t 里就必须是 s 中该字符对应的符号
        return false
      }
    } else { // 如果是新出现的字符
      map1[a] = b // 建立映射
      if (b in map2) { // 如果对应到 t 里的字符不是新出现的字符，则肯定不匹配
        return false
      } else {
        map2[b] = a // 如果 t 里也是新的字符，则记录下这个映射
      }
    }
  }

  return true
};


//第三种解法，模式串解法
var isIsomorphic = function (s, t) {
  return unify(s) === unify(t)
}

function unify(str) {
  var pattern = ''
  var map = {}

  var patternCharCode = 65

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    if (c in map) {
      pattern += map[c]
    } else {
      var patternChar = String.fromCharCode(patternCharCode++)
      map[c] = patternChar
      pattern += map[c]
    }
  }
  return pattern
}


// @lc code=end

console.log(isIsomorphic("papers", "titlee"));
