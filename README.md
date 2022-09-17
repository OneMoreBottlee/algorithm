# algorithm

# 백준 제출용 (한줄 / 여러줄)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

# vs 테스트용 (한줄 / 여러줄)
const input = require('fs').readFileSync('예제.txt').toString().trim().split(' ');
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

# vs 결과값 확인하기
node beakjoon/TODO/N.js

# 백준 문제 확인하기
ctl + shift + P > BOJ > 문제 번호 검색