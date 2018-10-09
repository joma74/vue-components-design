// 1:5  warning  'a' is assigned a value but never used        no-unused-vars
// 1:5  error    'a' is never reassigned. Use 'const' instead  prefer-const
class A {
  public arr: number[]

  constructor() {
    this.arr = [1, 2, 3]
  }
}

let a = new A()

a.arr.forEach((element) => {
  element++
})
