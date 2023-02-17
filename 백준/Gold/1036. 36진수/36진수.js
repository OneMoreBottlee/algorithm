const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const nums = input.slice(1,-1), K = +input.at(-1);

const solution = (nums, K) => {
    const changes = new Map();
    const diff = {};
    let sum = 0n;

    for(let i = 0; i < 36; i++) {
        diff[i.toString(36).toUpperCase()] = 35n - BigInt(i);
    }

    nums.forEach(num => {
        num = num.trim();
        for(let i = num.length-1, mult = 1n; i >= 0; i--, mult *= 36n) {
            let n = changes.get(num[i]) || 0n;
            sum += BigInt(parseInt(num[i], 36)) * mult;
            changes.set(num[i], n + diff[num[i]] * mult);
        }
    });

    let sorted = [...changes.values()].sort((a,b)=>a < b ? 1 : -1);
    let len = Math.min(K, sorted.length);

    for(let i = 0; i < len; i++) {
        sum += sorted[i];
    }

    return sum.toString(36).toUpperCase();
}

console.log(solution(nums, K));