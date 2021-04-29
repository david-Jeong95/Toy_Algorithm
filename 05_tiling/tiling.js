let tiling = function (n) {
    //방법의 가짓수를 세어보니 규칙이 피보나치 수열인 것 같다.
    let arr = [0, 1, 2];

    for(let i = 3; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n]
}