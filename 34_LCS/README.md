## LCS

**문제**
두 문자열을 입력받아 다음의 조건을 만족하는 LCS\*의 길이를 리턴해야 합니다.

- LCS: 두 문자열에 공통으로 존재하는 연속되지 않는 부분 문자열(Longest Common Subsequence)
- 문자열 'abc'의 subseqeunce는 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' 입니다.

**입력**
인자 1 : str1

- string 타입의 알파벳 소문자와 숫자로 이루어진 문자열
- str1.length는 50 이하

인자 2 : str2

- string 타입의 알파벳 소문자와 숫자로 이루어진 문자열
- str2.length는 50 이하

**출력**

- number 타입을 리턴해야 합니다.

**주의사항**
LCS의 길이를 리턴해야 합니다.
LCS가 존재하지 않는 경우, 0을 리턴해야 합니다.

**입출력 예시**

```js
let output = LCS("abcd", "aceb");
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS("acaykp", "capcak");
console.log(output); // --> 4 ('acak')
```
