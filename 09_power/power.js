//sol) logn
//거시적인 재귀라고 생각하자
function power(base, exponent) {
    if(exponent === 0){
        return 1;
    }
    let half = parseInt(exponent / 2); // 지수의 절반씩 
    let temp = power(base, half); //재귀 ㄱ
    let result = temp * temp % 94906249; // 곱해주면 더하기가 돼서 지수는 더하기가 된다.

    if(exponent % 2 === 1) return base * result % 94906249; // 나머지 한개의 base를 곱함
    else return result;
}
