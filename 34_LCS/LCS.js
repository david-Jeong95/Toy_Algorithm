const LCS = function (str1, str2) {
  let i = str1.length;
  let j = str2.length;
  let result = [];

  for (let k = 0; k <= i; k++) {
    if (!result[k]) {
      result[k] = [];
    }
  }

  for (let k = 0; k <= i; k++) {
    for (let l = 0; l <= j; l++) {
      if (k === 0 || l === 0) {
        result[k][l] = 0;
      } else if (str1[k - 1] === str2[l - 1]) {
        // 마지막 두 문자 비교, 같으면
        result[k][l] = result[k - 1][l - 1] + 1;
      } else {
        // 마지막 두 문자가 다르면
        result[k][l] = Math.max(result[k - 1][l], result[k][l - 1]);
      }
    }
  }

  return result[k][l];
};
