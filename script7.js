//.....MAPS in JAVASCRIPT.....

let arr1 = [100, 200, 300, 400, 500]
let newArr = arr1.map((element, index, array) => {
  return element ** 2;
})
console.log(newArr)



let arr2=[100,200,300,400,500]
let newArr2=[]

for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];
  newArr2.push(element**2);
}
console.log("The new array is :"+newArr2)


//.....FILTER in JAVASCRIPT.....

let newArr1 = [1, 20, 30, 40, 5, 6]
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
}
console.log(newArr1.filter(greaterThanSeven));

//REDUCE METHOD in JAVASCRIPT

let arr3 = [10, 20, 30, 40, 50, 60]
const red = (a, b) => {
  return a * b;     //retrun a+b or  a/b etc...
}

console.log("The final result is :" + arr3.reduce(red))

//.....ARRAY FROM.....
console.log(Array.from("JYOTHISWAR"))




