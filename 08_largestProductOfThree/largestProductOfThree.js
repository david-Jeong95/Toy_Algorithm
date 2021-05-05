'use strict'
const largestProductOfThree = function (arr){
    //why 3중 for문 안될까?
    let sorted = arr.sort((a, b) => a - b);
    let len = arr.length;
    let result1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
    let result2 = sorted[0] * sorted[1] * sorted[len - 1];

    let a = Math.max(result1, result2);
    return console.log(a);
}