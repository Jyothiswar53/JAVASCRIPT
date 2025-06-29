//.....CONCATINATE.....

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]

console.log(a1.concat(a2, a3))

//.....SORT.....

let a4 = [5, 4, 6, 2, 9, 1]
console.log(a4.sort())

//.....SPLICE.....

let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(numbers.splice(1, 2))
console.log(numbers)

let numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.splice(1, 2, 100, 200, 300))
console.log(numbers1)

//.....SLICE.....

console.log("slice")
const num = [1, 2, 3, 4]
console.log(num.slice(1,))
console.log(num.slice(1, 3))
