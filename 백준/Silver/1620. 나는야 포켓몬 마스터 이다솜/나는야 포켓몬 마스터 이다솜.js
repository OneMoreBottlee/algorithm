const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N,M] = input[0].split(" ").map(el => +el)
const dictionary = input.slice(1, N+1)
const question = input.slice(N+1)

// 포켓몬 도감 만들기
const pokemon = {}
dictionary.forEach((el,idx) => {pokemon[idx+1] = el, pokemon[el] = idx+1})

// 도감에서 찾기
const result = question.map(el => pokemon[el]).join("\n")
console.log(result)