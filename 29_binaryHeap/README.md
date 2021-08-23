## binaryHeap

**문제**
정수를 요소로 갖는 배열을 입력받아 이진 힙(binary heap)*을 리턴해야 합니다.

- 이진 힙(binary heap)은 노드의 값이 특정한 순서를 가지고 있는 완전 이진 트리(Complete Binary Tree)입니다.
- 완전 이진 트리는 이진 트리의 (마지막 레벨 또는 마지막 깊이를 제외하고) 모든 레벨이 노드로 가득 채워져 있어야 합니다. 마지막 레벨은 왼쪽부터 차례대로 채워져 있습니다.
- 이진 힙에서 부모 노드의 값이 (이진 트리이므로 2개의) 자식 노드의 값보다 큰 경우를 최대 힙(max heap), 반대의 경우를 최소 힙(min heap)이라고 합니다.

**입력**
인자 1 : arr
- number 타입을 요소로 갖는 배열
- arr[i]는 -100,000 이상 100,000 이하의 정수
- arr.length는 100,000 이하

**출력**
* number 타입을 요소로 갖는 배열을 리턴해야 합니다.

**주의사항**
- 최대 힙(max heap)을 구현해야 합니다.
- 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
- 최대 힙 구현을 위해 선언된 함수들(getParentIdx, insert)을 전부 완성해야 합니다.
- swap, getParentIdx, insert를 전부 사용해야 합니다.
- swap, binaryHeap을 수정하지 않아야 합니다.
- 테스트 케이스에서 힙 함수들을 정확히 구현했는지 함께 테스트합니다.
- insert의 시간 복잡도는 O(logN)입니다.
- 주어진 배열을 내림차순으로 정렬(O(logN))해도 최대 힙의 조건을 만족합니다. 하지만 이는 insert를 구현하는 것과는 거리가 먼 방법이며, 테스트를 통과할 수도 없습니다.

**입출력 예시**
```js
let output = binaryHeap([5, 4, 3, 2, 1]);
console.log(output); // --> [5, 4, 3, 2, 1]

output = binaryHeap([3, 1, 21]);
console.log(output); // --> [21, 1, 3]

output = binaryHeap([4, 10, 3, 5, 1]);
console.log(output); // --> [10, 5, 3, 4, 1]
```
