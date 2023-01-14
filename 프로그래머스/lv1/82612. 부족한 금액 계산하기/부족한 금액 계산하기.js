function solution(price, money, count) {
  let paidValue = 0
  for(let i = 1; i <= count; i++){
    paidValue += price * i
  }
  let needMoney = paidValue - money
  return needMoney > 0 ? needMoney : 0
}