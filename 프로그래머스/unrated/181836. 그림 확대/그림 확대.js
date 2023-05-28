function solution(picture, k) {
    return picture.map(el => {
      return new Array(k).fill(el.split("").reduce((acc,cur)=>acc+cur.repeat(k),""))
      }).flat()
}