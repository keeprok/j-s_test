// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const num = [10, 3];
let square = num[0];

if (num[1] > 0) {
  for (let i = 1; i < num[1]; i++) {
    square = square * num[0];
  }
} else {
  for (let i = 0; i >= num[1]; i--) {
    square = square / num[0];
  }
}
console.log(square);
// const n = prompt('수를 입력하세요.').split(' ');

// console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
