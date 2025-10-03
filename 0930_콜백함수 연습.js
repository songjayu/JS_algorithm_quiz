// runCallback이라는 함수를 만들어서, 콜백 함수를 인자로 받아 실행하도록 구현하시오.

// 예시 실행
runCallback(() => console.log("Hello Callback!"));
// 출력: Hello Callback!

function runCallback(callback) {
  // 이 부분을 작성하세요
  callback()
}


// 예시 실행
checkNumber(3, () => console.log("홀수!"), () => console.log("짝수!")); // 홀수!
checkNumber(10, () => console.log("홀수!"), () => console.log("짝수!")); // 짝수!

function checkNumber(num, oddCallback, evenCallback) {
  // 이 부분 작성
  if (num % 2==0) evenCallback()
    else oddCallback()
}


// 예시 실행
delayPrint("3초 후 출력됩니다", 3000, (msg) => console.log(msg));

function delayPrint(message, delay, callback) {
  // 이 부분 작성
  setTimeout(() => {
    callback(message)
  }, delay);
}

//////////////////////////////////

// 문제 1. myMap 함수 구현하기
// 예시 실행
const result = myMap([1, 2, 3], (x) => x * 2);
console.log(result); // [2, 4, 6]

function myMap(arr, callback) {
  // 구현
  new_arr = callback(arr);
  return new_arr;
}

console.log([1, 2, 3]*2)
// // 문제 2. compose 콜백 함수 만들기 (함수 합성)
// // 예시 실행
// const add = x => x + 1;
// const double = x => x * 2;
// const addThenDouble = compose(double, add);

// console.log(addThenDouble(3)); // (3+1)*2 = 8

// function compose(f, g) {
//   // 구현
// }


