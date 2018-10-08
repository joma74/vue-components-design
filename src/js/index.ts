// 1:5  warning  'a' is assigned a value but never used        no-unused-vars
// 1:5  error    'a' is never reassigned. Use 'const' instead  prefer-const
let a = 3
let arr = [1, 2, 3]
arr.forEach((element) => {
  element++
})
// [tslint] Calls to 'console.log' are not allowed. (no-console)
// console.log(a)
