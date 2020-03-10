// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 

// 1. ******* Menghilangkan huruf vokal ********
// var Huruf = 'abcdefghijklmnopqrstuvwxyz'
// console.log(Huruf.replace(/[a,i,u,e,o]/gi,''))

//2. ******* Mengurutkan dari A-Z dan Z-A*******
// var arrData = ['Rita', 'Ajeng', 'Nugraheni']
// console.log(arrData.sort()) 
// console.log(arrData.reverse()) 

//3. ****** Sort integer (Kecil-Besar, Besar-Kecil) *******
// var arrData = [2,10,4,30,5,6,7,9,8]
// console.log(arrData.sort(function(a, b){
//     return a-b
// }))

// pisaaaaaaaahhhhhhhhhhhhhhhh
// console.log(arrData.sort())
// console.log(arrData.reverse())

//4. ****** Display terbesar dalam array ******
// var arrData = [2,1,4,3,5,6,7,9,8]
// var ambil = arrData[0]
// for (let i =0; i < arrData.length; i++){
//     if (arrData[i+1] < arrData[i]) {
//         ambil = arrData[i]
//     } 
// } console.log('Nilai tertinggi '+ambil)

//5. ****** Memfilter array yang isinya integer dan string namun hanya ambil integernya saja ******
//  var arrData = [2,'Rita', 3,'Ajeng', 'Nugraheni',4 ]
//  function myFunction(value) {
//     return value * 1 ;
//   }
//   var tampilkan = arrData.filter(myFunction);
//   console.log(tampilkan)

//6. ****** Menghapus huruf awal dan akhir saja *******
// var nama = "Rita Ajeng Nugarheni";
// var tampil = nama.slice(1,-1);
// console.log(tampil)
