
// Validator 
// const validator =(arr, cb) => {
//     let arrResult =[]
//     for (let i = 0; i< arr.length; i++){
//         if (cb(arr[i])){
//             arrResult[i] = arr[i] +1
//         } else {
//             arrResult[i] = arr[i] +0
//         }
//     }
//     return arrResult
// }

// Replika .Map
const validator =(arr, cb) => { // cb merupakan parameter yang akan digunakan untuk menampung arr ke i
    let arrResult =[]
    for (let i = 0; i< arr.length; i++){
    arrResult.push(cb(arr[i]))
    }
    return arrResult
}

let arrParam = [1,2,3,4]
console.log(validator(arrParam, (val) => {
    return val * 2
}))