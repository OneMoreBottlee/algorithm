const input = require("fs").readFileSync("/dev/stdin").toString().trim()*1;

const solution = (n) => {
// input => 2진법 배열로 전환
  const binArr = n.toString(2).split("");

// 가장 큰 경우 제외
  binArr.shift();
// 10진법으로 변환
  const answer = parseInt(binArr.join(""), 2);

// answer가 0이면 2^x 이므로 n 반환
  return answer ? answer * 2 : n;
};

console.log(solution(input));
