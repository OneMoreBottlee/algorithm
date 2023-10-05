function solution(n, words) {
    let lastWord = words[0].slice(0, 1)
    const lastWords = []
    let answer = [0, 0]
    
    words.every((word, idx) => {
        // 1. 실패
        // 1-1 중복 단어 사용
        if(lastWords.includes(word)){
            answer = [idx % n + 1, Math.floor(idx / n) + 1]
            return false
        }
        
        // 1-2 끝말이 안이어짐
        if(word[0].slice(0, 1) !== lastWord){
            answer = [idx % n + 1, Math.floor(idx / n) + 1]
            return false
        }
        
        // 2. 성공
        lastWord = word.slice(-1)
        lastWords.push(word)
        return true
    })
    
    return answer
}