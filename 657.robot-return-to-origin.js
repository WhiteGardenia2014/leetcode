/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  if (moves.length % 2 == 1) {
    return false
  }
  let x = 0
  let y = 0
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == "U") {
      y++
    } else if (moves[i] == "D") {
      y--
    } else if (moves[i] == "L") {
      x--
    } else if (moves[i] == "R") {
      x++
    }
  }
  return (x == 0 && y == 0)
};
// @lc code=end
