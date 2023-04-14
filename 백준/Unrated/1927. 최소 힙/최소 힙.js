class MinBinaryHeap {
	constructor(){
		this.values = []
	}

	insert(element){
		this.values.push(element)
		this.bubbleUp()
	}

	bubbleUp(){
		let idx = this.values.length - 1
		const element = this.values[idx]

		while(idx > 0){
			let parentIdx = Math.floor((idx-1)/2)
			let parent = this.values[parentIdx]

			if(element > parent)break

			this.values[parentIdx] = element
			this.values[idx] = parent
			idx = parentIdx
		}
	}

	extractMin(){
		// 루트 지우고 마지막 요소를 루트로 변경
		const min = this.values[0]
		const end = this.values.pop()

		if(this.values.length > 0){
			this.values[0] = end
			// 정렬
			this.sinkDown()
		}
		
		return min
	}

	sinkDown(){
		let idx = 0
		const length = this.values.length
		const element = this.values[0]

		while(true){
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2

			let leftChild, rightChild
			let swap = null

			if(leftChildIdx < length){
				leftChild = this.values[leftChildIdx]
				if(leftChild < element){
					swap = leftChildIdx
				}
			}

			if(rightChildIdx < length){
				rightChild = this.values[rightChildIdx]
				if(
						(swap === null && rightChild < element) ||
						(swap !== null && rightChild < leftChild)
				){
					swap = rightChildIdx
				}
			}
			if(swap === null) break
			this.values[idx] = this.values[swap]
			this.values[swap] = element
			idx = swap
		}
	}
}

const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number)

let heap = new MinBinaryHeap()
let result = []

for(let i = 0; i < N; i++){
    const num = arr[i]
    if(num === 0){
        result.push(heap.extractMin() ?? 0)
    }else{
        heap.insert(num)
    }
}

console.log(result.join("\n"))