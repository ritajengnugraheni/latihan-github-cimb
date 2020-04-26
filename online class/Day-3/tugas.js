// =============Rita Ajeng Nugraheni===============

// ============== Nomor 1 ===============

// function generatePyramid(totalNumberofRows){
//     let result=[]
//     let resultFix=[]
//     var output =''
//     for (let i=0; i  < totalNumberofRows; i++){
//         // output += ''
//         for (let j = 1 ; j < totalNumberofRows; j++){
//             if (i == j) {
//                 output += i
//                 result.push((output.split('')))
//             }
            
//         }
        
//     }
//     for (let a = 0; a < result.length; a++){
//         for (let b =0; b< result[a].length; b++){
//             result[a][b]=parseInt(result[a][b])
//         }
//     }
//     for (let c=0; c<result.length; c++){
//         resultFix.push(result[c])
        
//     }
//     console.log(resultFix); 
 
// }

// generatePyramid(6)

// =============== Nomor 2 ==================

// function ganjil(a) {
//     let result = []
//     let counter = 1
//     for (let i = 0; i < a; i++) {
//       let hasil = []
//       for (let j = 0; j < i + 1; j++) {
//         hasil[j] = counter
//         counter += 2
//       }
//       result.push(hasil)
//     }
//     console.log(result);
     
//   }
//  ganjil(5)

// =============== Nomor 3 =====================
// function fibonacci(a) {
//     let arrayResult = [];
//     for (let i = 0; i < a; i++) {
//       let array = [];
//       if (i == 0) {
//         array = [0];
//       } else if (i == 1) {
//         array = [1, 1];
//       } else {
//         array = [...arrayResult[i - 1]];
//         for (let j = 0; j < i + 1; j++) {
//           if (j == 0) {
//             array[j] = array[j] + array[j + 1];
//           } 
//           else if (j == 1) {
//             array[j] = array[j] + array[j - 1];
//           } 
//           else {
//             array[j] = array[j - 2] + array[j - 1];
//           }
//         }
//       }
//       arrayResult.push(array);
//     }
//     console.log(arrayResult);
//   };
//   fibonacci(6)

// ================== segitiga pascal ====================

// function pascal(a) {
//     let arrayResult = [];
//     for (let i = 0; i < a; i++) {
//       let array = [];
//       if (i == 0) {
//         array = [1];
//       } else if (i == 1) {
//         array = [1, 1];
//       } else {
//         let temp = [...arrayResult[i - 1]];
//         for (let j = 0; j < i + 1; j++) {
//           if (j == 0 || j == i) {
//             array[j] = 1;
//           } else {
//             array[j] = temp[j] + temp[j - 1];
//           }
//         }
//       }
//       arrayResult.push(array);
//     }
//     console.log(arrayResult);
//   };

// pascal(6)