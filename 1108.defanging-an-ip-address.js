/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let ans = ""
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      ans = ans + "[.]"
    } else {
      ans += address[i]
    }
  }
  return ans
};
// @lc code=end

console.log(defangIPaddr("255.100.50.0"));
