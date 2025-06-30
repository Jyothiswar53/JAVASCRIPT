// .....FOR loop in javascript.....

let array = [10, 20, 30, 40, 50]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element)
}

//.....FOR EACH loop in JAVASCRIPT.....

let array1 = [10, 20, 30, 40, 50]

array1.forEach((value, index, array1) => {
  console.log(value, index, array1)
});

//.....FOR IN loop in JAVASCRIPT.....

let obj = {
  a: 1,
  b: 2,
  c: 3
}
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element)
  }
}

//.....FOR OF loop in JAVASCRIPT.....

let array2 = [10, 20, 30, 40, 50, 60]
for (const element of array2) {
  console.log(element)
}
