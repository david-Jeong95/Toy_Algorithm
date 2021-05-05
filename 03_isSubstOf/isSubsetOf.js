const isSubsetOf = function (base, sampe) {
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);

    const findItemInSortedArr = (item, arr, from) => {
        for(let i = from; i < arr.length; i++){
            if(item === arr[i]) return i;
            else if(item < arr[i]) return -1;//어? 날 지나갔다?
        }
    }

    let baseIdx = 0;
    for(let i = 0; i < sample.length; i++){
        baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
        if(baseIdx === -1) return false;
    }
    return true;
}