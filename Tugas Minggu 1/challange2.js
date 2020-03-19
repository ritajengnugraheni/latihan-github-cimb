// let num =[]
// function KaprekarsConstant(num) {

//     function newNum(num) {
//         num = num.toString()
//         num = num.split('')

//         if (num.length < 4) {
//             num.push('0')
//         }
//         let numAsc = Number(num.sort().join(''))
//         let numDsc = Number(num.sort().reverse().join(''))
//         num = numDsc - numAsc
//         return num
//     }
// }

// let counter = 0
// while (num < 6174) {
//     num = newNum(num)
//     counter++
// } 

// Global Variable 
var disc_array = ''
var asc_array= ''
var diff = ''

function KaprekarsConstant(num) {
    
        var arr_number =(''+num) .split('')

        // sort disc number 
        disc_array = parseInt(arr_number.sort(function (a, b) {
            return b - a
        }).join(''))
    
        // sort asc number 
        asc_array = parseInt(arr_number.sort(function (a, b) {
            return a - b
        }).join(''))
        // Kalkulasi
       diff = disc_array - asc_array
        return 1 + KaprekarsConstant(diff)
        // return diff
}

// var counter = 1
// while (diff!==6174){
    
//     KaprekarsConstant(diff)
//     counter++   
// }
console.log(KaprekarsConstant('3245'))















