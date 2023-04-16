const I = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n')

class Heap {
  constructor(e) {
    this.heap = []
    this.check = e
  }
    
  push(e) {
    const h = this.heap
    h.push(e)
    let child = h.length - 1
    while (child) {
      const parent = Math.ceil(child / 2) - 1
      if (this.check(h[parent], h[child])) break
      ;[h[parent], h[child]] = [h[child], h[parent]]
      child = parent
    }
  }
    
  pop() {
    const h = this.heap
    const [x, last] = [h[0], h.pop()]
    if (h.length) h[0] = last
    let parent = 0
    
    while (parent < (h.length - 1) / 2) {
      const [l, r] = [2 * parent + 1, 2 * parent + 2]
      const child = this.check(h[r], h[l]) ? r : l
      if (this.check(h[parent], h[child])) break
      ;[h[parent], h[child]] = [h[child], h[parent]]
      parent = child
    }
    return x
  }
}

const [T, O] = [+I[0], []]
let i = 1

while (i < I.length) {
  const [k, min, max, exist] = [
    +I[i] + i++,
    new Heap((a, b) => a < b),
    new Heap((a, b) => a > b),
    new Map(),
  ]

  for (; i <= k; i++) {
    const [command, num] = I[i].split(' ')
    const n = +num
    
    if (command == 'I') {
      min.push(n)
      max.push(n)
      exist.set(n, (exist.get(n) ?? 0) + 1)
    } else if (command == 'D') {
      let x = n == -1 ? min.pop() : max.pop()
      let cnt = exist.get(x)
                
      while (exist.size && !cnt) {
        x = n == -1 ? min.pop() : max.pop()
        cnt = exist.get(x)
      }
      cnt > 1 ? exist.set(x, cnt - 1) : exist.delete(x)
    }
  }
    
  let o = [0, 0]
  
  for (let i = 0; i < 2; i++) {
    let x = i ? min.pop() : max.pop()
    while (exist.size && !exist.has(x)) x = i ? min.pop() : max.pop()
    o[i] = exist.has(x) ? x : null
  }
  if (!o[0] && !o[1]) o = ['EMPTY']
  O.push(o.join(' '))
}

console.log(O.join('\n'))