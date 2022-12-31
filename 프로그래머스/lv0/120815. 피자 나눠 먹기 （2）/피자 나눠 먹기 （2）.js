function gcd(a, b){
	while(b !== 0){
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}

function lcm(a, b){
	return a * (b / gcd(a, b));
}

function solution(n) {
  // n과 6의 최소공배수 찾기
  return lcm(n, 6) / 6
}