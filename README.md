# algorithm

# 백준 제출용
//한 줄 입력
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

# vs 테스트용
const input = require('fs').readFileSync('예제.txt').toString().split(' ');
const input = require('fs').readFileSync('예제.txt').toString().split('\n');

# vs 결과값 확인하기
node beakjoon/N단계/N.js