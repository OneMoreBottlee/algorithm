function solution(s) {
  return s.split(" ").map(el =>
    el = el ? el[0].toUpperCase() + el.substr(1).toLowerCase() : ""
  ).join(" ")
}