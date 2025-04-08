//.....ARRAYS.....

let arr = [1, 2, 4, 5, 7]

arr[0] = 66
console.log(arr, typeof arr);
console.log(arr.length);  //Array is Mutable
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join(" and "));

let a = [1, 2, 3, 4, 5, 6]
let hello,empty;

//[1, 2, 3, 4, 5, 6](6)

a.pop()
console.log(a);

a.push(100)
console.log(a);
//[1, 2, 3, 4, 5, 100]

a.push(200)
console.log(a);
//7[1, 2, 3, 4, 5, 100, 200]

a.push("jyothi")
console.log(a);
//8[1, 2, 3, 4, 5, 100, 200, jyothi]

a.shift()
console.log(a);
///1[2, 3, 4, 5, 100, 200, jyothi]

a.unshift("hello")
console.log(a);
//7[hello, 2, 3, 4, 5, 100, 200, jyothi]

delete a[6]
true[hello, 2, 3, 4, 5, 100, 200, empty]

a.length
console.log(a);
//7[hello, 2, 3, 4, 5, 100, 200, empty]

a[6]
console.log(a);
//undefine