//  1 soal algoritma 
//  1 soal bisnis logic soal hampir sama dengan yang belanja 

// BISMILLAH PERSIAPAN 
// map = menerima call back function dalam map dapat ditaruh 3 parameter

let arr =[]
for (let i=0; i<5; i++){
    arr.push(parseInt(Math.random()*10))
}
// console.log(arr)

// let newArr=arr.map((val, index)=>{
// return val+1
// })
// console.log(newArr);

//========== Replika MAP ================//

// const repMap = (array, cb) =>{
//     let result =[]
//     for (let i =0; i<array.length; i++){
//         result.push(cb(array[i], i, array))
//     }
//     return result
// }

// console.log(repMap([1,2,3,4,5], (val, index, array)=>{
//     return 3
// }));


//========== filter=============//
// let newArr= arr.filter((val, index, array)=>{
//     return val <=5
// })
// console.log(newArr);

// Replika filter

const repFilter = (array, cb) =>{
    let result =[]
    for (let i =0; i<array.length; i++){
       if (cb(array[i], i, array)) {
           result.push(array[i])
       }
                
    }
    return result
}

// console.log(repFilter(arr, (val, index, array)=>{
//     return val <= array.length
// }));


// ============== find =================//

// console.log(arr.find(()=>{
//     return true 
// }));

// replika find 

const repFind =(array, cb)=>{
    for (let i=0; i< array.length; i++){
        if (cb(array[i], i, array)){
            return array[i]
        }
    }
}

// console.log(repFind(arr, (val, index, array)=>{
//     return val <=2
// }));

// buatlah digitalRoot menerima sebuah number harus lebih dari 10
// number =942
// 9+4+2
// 15
// 1+5
//6 <= yang di return 6 


// function digital_root(n) {
//     var sumOfNums = 0;
//     var arrOfNums = n.toString().split("").map(function(str) {  // [ 9, 4, 2 ]
//       return parseInt(str); 
//     });
//     while (arrOfNums.length > 1) {
//       sumOfNums = arrOfNums.reduce(function(a, b) { // 15
//         return a + b;
//       });
//       arrOfNums = sumOfNums.toString().split("").map(function(str) { // turns 15 into [1, 5]
//       return parseInt(str);
//       });
//     }
//     return sumOfNums;
//   }
  
  
  // digital root
  function digital_rootB(n) {
    return (n - 1) % 9 + 1;
  }
  
//  console.log(digital_rootB(123));
  // 9 + 4 + 2 = 15, 1 + 5 = 6

  // other solution
  function digital_root(n) {
    var z = n.toString(),
        i,
        y = 0;

    if (z.length === 1) {
        return z;
    }
    for (i = 0; i < z.length; i++) {
        y += +z[i];
    }
    return digital_root(y);
}

// console.log(digital_root(63678));   // 5


// let arr1 = [1,2,6,8]
// let arr2 = [3,4,5,7]

// console.log(arr1.concat(arr2));
// Membuat UNION 
var a = [34, 35, 45, 48, 49];
var b = [48, 55];
var union = [...new Set([...a, ...b])];
console.log(union);

