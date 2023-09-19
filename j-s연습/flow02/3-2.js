function arrFunc(arrp, int) {
  for (let i = 0; i < arrp.length; i++) {
    arr[i] += 10;
  }
  //[12,11,13,14,15]

  for (j = 0; j < arrp.length; j++) {
    //[11,12,13,14,15]
    if (arrp[j] === int) {
      arrp.splice(j, 1);
      return arrp;
    }
    if (j === arrp.length - 1 && arrp[j] !== int) return "결과값이 없습니다.";
  }
}
const arr = [1, 2, 3, 4, 5];
const a = arrFunc(arr, 13);
console.log(a);
//혜련님 이게 문제 에 맞는듯
