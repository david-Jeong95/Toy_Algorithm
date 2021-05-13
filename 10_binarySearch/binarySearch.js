//이진탐색 알고리즘 O(logn)을 사용
const binarySearch = function (arr, target) {
    let left = 0; //좌우 기준점을 설정
    let right = arr.length - 1;

    while(left <= right) { 
        let mid = parseInt((left + right) / 2);
        if(target === arr[mid]) return mid;//타겟과 중앙값이 기준이됨
        else if(target > arr[mid]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}