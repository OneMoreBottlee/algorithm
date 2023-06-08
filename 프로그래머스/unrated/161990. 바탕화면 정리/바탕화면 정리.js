function solution(wallpaper) {
  const width = wallpaper[0].length
  const height = wallpaper.length
  let [x1, y1, x2, y2] = [Infinity, Infinity, -Infinity, -Infinity]
  
  for(let x = 0; x < height; x++){
    for(let y = 0; y < width; y++){
      const check = wallpaper[x][y]
      if(check === "#"){
        x1 = Math.min(x, x1)
        y1 = Math.min(y, y1)
        x2 = Math.max(x+1, x2)
        y2 = Math.max(y+1, y2)
      }
    }
  }
  
  const result = [x1, y1, x2, y2]
  return result
}