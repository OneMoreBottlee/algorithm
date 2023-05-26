function solution(before, after) {
  const be = before.split("").sort().join("")
  const af = after.split("").sort().join("")
  return be === af ? 1 : 0
}