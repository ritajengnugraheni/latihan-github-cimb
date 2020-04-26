// let orang ={
//     nama: 'Ajeng',
//     tahunLahir: '1997',
//     asal: 'Klaten'
// }
// let developer = {
//     nama: 'Silvy',
//     tahunLahir: '2019',
//     asal : 'Bima Sakti',
//     speciality : 'Front End Web',
//     pengalaman: '6 hari'
// }
// let artis = {
//     nama : 'sasa',
//     tahunLahir:'1999',
//     asal:'pluto',
//     onGoingFilm :'Mars',
//     jumlahFilm :'3'
// }
// let arrKaryawan = [
//     {

//     }
// ]

// function cetakanOrang(nama, tahunLahir, asal){
//     return{
//         nama,
//         tahunLahir,
//         asal
//     }
// }
// let apaya=cetakanOrang('Doraemon', '2020', 'tokyo')

// class Orang {
//     constructor(paramNama, paramTahunLahir, paramAsal) {
//         this.nama = paramNama // yang dikiri property yang dikanan constructor 
//         this.tahunLahir = paramTahunLahir
//         this.asal = paramAsal
//     }
// }
// class Developer extends Orang {
//     constructor(nama, tahunLahir, asal, speciality, pengalaman) {
//         super(nama, tahunLahir, asal);
//         this.speciality = speciality
//         this.pengalaman = pengalaman

//     }
// }
// class Produk {
//     constructor(nama, harga, stok, qty) {
//         this.nama = nama
//         this.harga = harga
//         this.stok = stok
//         this.qty = qty
//     }
// class Baju extends Produk {
//     constructor(nama, harga, stok, qty, size) {
//         super(nama, harga, stok, qty)
//         this.size = size
//     }
// }

// let a = new Orang('Doraemon', '1999', 'Tokyo')

// console.log(a)

// let arrNo = [1, 3, 5, 6]
// let hasilSort =[0, 0, 0, 0]
// hasilSort = arrNo.sort
// let hasilSlice = hasilSort.slice(1, 0)-hasilSort.slice(0, -1)
// console.log(hasilSlice)

// ===========Mencari selisih terbesar==============

// function maxDIff(arr=[]){
//     arr.sort(function(a, b){
//         return a - b
//     }) 
//     return arr[arr.length-1]-arr[0]
// }
// console.log(maxDIff([5, 6, 3, 7]))

// ======= Split huruf =========
// let arr = 'abcd'.split('')
// let output = 0

//     for (let i =0; i< arr.length; i++){
//         output += i
//     } 


// console.log(output)

//======== Median ======
// function median(numbers) {
//     // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
//     var median = 0, numsLen = numbers.length;
//     // numbers.sort();
 
//     if (
//         numsLen % 2 === 0 // is even
//     ) {
//         // average of two middle numbers
//         median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
//     } else { // is odd
//         // middle number only
//         median = numbers[(numsLen - 1) / 2];
//     }
 
//     return median;
// }
// console.log(median([5,7,7,8]))

// date = new Date()
// tanggal = date.getDate()
// bulan = date.getMonth()
// tahun = date.getFullYear()
// dateNow = (tanggal + "-" + bulan + "-" + tahun).split('-')


// console.log(dateNow)
// class Items {
//     constructor(nama, harga, stok, qty) {
//         this.nama = nama
//         this.harga = harga
//         this.stok = stok
//         this.qty = qty
//     }
// }

// class Buah extends Items {
//     constructor(nama, harga, stok, qty, kadaluarsa) {
//         super(nama, harga, stok, qty)
//         this.kadaluarsa = kadaluarsa
//     }
// }
// let tokoBuah = [
//     new Buah('Jeruk', 1000, 10, 0, '15-3-2020'.split('-')),
//     new Buah('Mangga', 2000, 15, 0, '1-6-2019'.split('-')),
//     new Buah('Apel', 3000, 5, 0, '5-7-2020'.split('-'))

// ]

// console.log(tokoBuah[1].kadaluarsa[1])

let arr = [1,{
    nama : "ajeng",
    kelas :"12 ipa 2"
}]
console.log(arr[1].nama);
