
// ========= Cara penulisan const untuk html===============
// const alphaValue = param1 =>{

// }
// const duaParam =(param1, param2)=>{

// }

// const duaTambah=(param1, param2)=> param1+param2

// const duaTambah=(param1, param2)=> param1==param2

// const value = (str)=> {
//     // str=str.split('')
//     let arrValue ='abcdefghijklmnopqrstuvwxyz'.split('')
//     let result=0

//     for (let i=0; i< str.length ; i++){
//         result+=(arrValue.indexOf(str[i]) + 1)
//     }
//     return result

// } 
// console.log(value('abc'))

// const value = (str)=> {
//     // str=str.split('')
//     let arrValue ='abcdefghijklmnopqrstuvwxyz'.split('')
//     let result=0


//     for (let i=0; i< str.length ; i++){
//         // result+=(arrValue.indexOf(str[i]) + 1)
//         if ((arrValue.indexOf(str[i]) + 1) % 2 == 1){
//             result += (arrValue.indexOf(str[i]) + 1)
//         }
//     }
//     return result

// } 
// console.log(value('abcdef'))

// const value = (str)=> {
//     // str=str.split('')
//     let arrValue ='abcdefghijklmnopqrstuvwxyz'.split('')
//     let result=''
//     for (let i=0; i< str.length ; i++){
//             result += (arrValue.indexOf(str[i]) + 1)
//     }
//     return result

// } 
// console.log(value('abcdefz'))
// ========================================== SEARCHING
// class Product {
//     constructor(nama, harga, stock) {
//         this.nama = nama
//         this.harga = harga
//         this.stock = stock
//     }
// }
// let arr = [
//     new Product('Jeruk', 1000, 10),
//     new Product('Mangga', 3000, 5),
//     new Product('Apel', 10000, 5)
// ]
// const search = buah => {
//  return arr.filter((value)=> value.nama.toLowerCase().includes(buah.toLowerCase()))
// }
// const searchHarga= (min, max)=>{
//     return arr.filter(val=>val.harga>=min && val.harga<=max)
// }
// // console.log(search('je'))
// console.log(searchHarga(500, 5000))

// ======== untuk akses objek ========
// let a = {
//     nama: 'Doraemon',
//     asal: 'Jepang',
//     kontak :{
//         rumah: 'Rumah',
//         kota : 'tokyo'
//     }
// }
// let {nama, asal, kontak} = a
// let {rumah, kota}=kontak
// console.log(kota)

// ============1 fungsi dengan 1 param sebuah array ada kumpulan int positif dan negatif,  output array dengan penjumlahan positif dan negatif 

let arrData = [1, -1, 12, -8]
let jumlah1 =0 
let jumlah2 =0
// let arrSum = [jumlah1, jumlah2]
const jumlah = param => {
    for (let i =0; i< param.length; i++){
        if (param[i] > 0){
            jumlah1 += param[i]
        } else{
            jumlah2 += param[i]
        }
    }console.log([jumlah1, jumlah2])
} 
jumlah(arrData)