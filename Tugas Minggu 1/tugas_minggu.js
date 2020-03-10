// =========== Weekend Task No.2 ============

// var letters = 'abcdefghijklmnopqrstuvsxyz'
// var num
// const caesarCipher = (word, num) => {
//     var result = "";
//     if (letters == 'abcdefghijklmnopqrstuvsxyz'){
//         for (var i = 0; i < word.length; i++) {
//             var c = word.charCodeAt(i);
//             if(c >= 65 && c <=  90) {
//                result += String.fromCharCode((c - 65 + num) % 26 + 65); 
//             }else if(c >= 97 && c <= 122){
//                 result += String.fromCharCode((c - 97 + num) % 26 + 97);
//             }else {
//                 result += word.charAt(i);
//             }
//         }
//     }
//     return result;
// }
// console.log(caesarCipher('abc', 3))

//=========== Weekend Task No.2 ===========

// function plusMinus() {
//     let arrAngka = [1, 2,3]
//     let sum = arrAngka[0]
//     for (let i = 0; i < arrAngka.length; i++) {
//         if (i == 0) {
//             continue
//         } else if (i % 2 == 1) {
//             sum += arrAngka[i]

//         } else {
//             sum -= arrAngka[i]
//         }
//     } return sum

// }
// console.log(plusMinus())

//=========== Weekend Task No.3 ===========

// const isPalindrome = (str) => {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
// }
// // console.log (isPalindrome("123")) // contoh output false
// console.log (isPalindrome("anaana")) // contoh output true