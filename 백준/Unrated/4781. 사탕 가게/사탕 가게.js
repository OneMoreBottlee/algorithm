const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ")).map(el => {
    const [kal, price] = el
    const [a,b] = String(price).split('.')
    return [Number(kal), Number(a+b)]
});

input.pop()

const answer = []

while(input.length > 0){
    const [Tcase, money] = input.shift()
    const arr = input.splice(0,Tcase)

    const dp = new Array(money + 1).fill(0)

    for(let i = 0; i < Tcase; i++){
        const [candyKal, candyPrice] = arr[i]
        for(let j = candyPrice; j <= money; j++){
            dp[j] = Math.max(dp[j], dp[j - candyPrice] + candyKal)
        }
    }

    answer.push(dp[money])
}

console.log(answer.join("\n"))