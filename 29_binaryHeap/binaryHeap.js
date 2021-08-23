function swap (idx1, idx2, arr) {
    //두 변수를 바꾸는 방법
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
    //노드가 완전 꽉찬 이진트리
    return Math.floor((idx - 1) / 2)
}

function insert(heap, item) {
    heap.push(item);
    let curIdx = heap.length - 1;
     let pIdx = getParentIdx(curIdx);

    while(pIdx >= 0 && heap[curIdx] > heap[pIdx]){
        swap(curIdx, pIdx, heap);
        curIdx = pIdx;
        pIdx = getParentIdx(curIdx);
    }
    return heap
}

const binaryHeap = function(arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, [])
}