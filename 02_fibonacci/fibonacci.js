'use strict'

function fibonacci(n){
    // if(n < 2){
    //     return n;
    // }
    // return fibonacci(n - 2) + fibonacci(n - 1);

    let arr = [0, 1];

    const recursion = (count = 2) => {
        arr.push(arr[count - 2] + arr[count - 1]);

        if(count === n){
            return;
        }
        return recursion(count + 1);
    }
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        recursion();
        return arr[n];
    }

}