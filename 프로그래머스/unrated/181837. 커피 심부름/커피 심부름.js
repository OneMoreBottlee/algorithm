function solution(order) {
    return order.reduce((acc,cur) => cur.includes("latte") ? acc + 5000 : acc + 4500, 0)
}