const [firstLine, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N,M] = firstLine

function check(i,j){
    // ㅣ
    const shape1 = j+3<M ? board[i][j]+board[i][j+1]+board[i][j+2]+board[i][j+3] : 0

    // ㅡ
    const shape2 = i+3<N ? board[i][j]+board[i+1][j]+board[i+2][j]+board[i+3][j] : 0

    // ㅁ
    const shape3 = i+1<N && j+1<M ? board[i][j]+board[i+1][j]+board[i][j+1]+board[i+1][j+1] : 0

    // ㅁ 
    // ㅁ 
    // ㅁ ㅁ
    const shape4 = i+2<N && j+1<M ? board[i][j]+board[i+1][j]+board[i+2][j]+board[i+2][j+1] : 0

    // ㅁ ㅁ ㅁ 
    // ㅁ
    const shape5 = i+1<N && j+2<M ? board[i][j]+board[i+1][j]+board[i][j+1]+board[i][j+2] : 0
    
    // ㅁ ㅁ
    //    ㅁ
    //    ㅁ
    const shape6 = i+2<N && j+1<M ? board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+2][j+1] : 0
    
    //       ㅁ
    // ㅁ ㅁ ㅁ
    const shape7 = i+1<N && j+2<M ? board[i][j+2]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2] : 0

    // ㅁ
    // ㅁ ㅁ 
    //    ㅁ
    const shape8 = i+2<N && j+1<M ? board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1] : 0

    //    ㅁ ㅁ 
    // ㅁ ㅁ
    const shape9 = i+1<N && j+2<M ? board[i+1][j]+board[i+1][j+1]+board[i][j+1]+board[i][j+2] : 0

    // ㅁ ㅁ ㅁ 
    //    ㅁ
    const shape10 = i+1<N && j+2<M ? board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+1] : 0
    
    //    ㅁ
    // ㅁ ㅁ  
    //    ㅁ
    const shape11 = i+2<N && j+1<M ? board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1] : 0
    
    // ㅁ
    // ㅁ ㅁ 
    // ㅁ  
    const shape12 = i+2<N && j+1<M ? board[i][j]+board[i+1][j]+board[i+2][j]+board[i+1][j+1] : 0
    
    //    ㅁ
    // ㅁ ㅁ ㅁ 
    const shape13 = i+1<N && j+2<M ? board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2] : 0
    
    //    ㅁ 
    //    ㅁ 
    // ㅁ ㅁ 
    const shape14 = i+2<N && j+1<M ? board[i][j+1]+board[i+1][j+1]+board[i+2][j]+board[i+2][j+1] : 0
    
    // ㅁ ㅁ ㅁ 
    //       ㅁ
    const shape15 = i+1<N && j+2<M ? board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+2] : 0
    
    // ㅁ ㅁ
    // ㅁ
    // ㅁ
    const shape16 = i+2<N && j+1<M ? board[i][j]+board[i][j+1]+board[i+1][j]+board[i+2][j] : 0
    
    // ㅁ
    // ㅁ ㅁ ㅁ
    const shape17 = i+1<N && j+2<M ? board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2] : 0
    
    //    ㅁ
    // ㅁ ㅁ 
    // ㅁ
    const shape18 = i+2<N && j+1<M ? board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j] : 0
    
    // ㅁ ㅁ 
    //    ㅁ ㅁ
    const shape19 = i+1<N && j+2<M ? board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+1][j+2] : 0

    return Math.max(0, shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11, shape12, shape13, shape14, shape15, shape16, shape17, shape18, shape19)
}

let max = 0;
for(let i = 0; i<N; i++){
    for(let j = 0; j<M; j++){
        max = Math.max( max, check(i,j))
    }
}

console.log(max)