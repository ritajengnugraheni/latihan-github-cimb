// database setiap orang memiliki nama, umur, dan pekerjaan 
// jumlah orang ada 5 
// tampilkan nama, umur, dan pekerjaan setiap orang

// let arrNama=['Rita', 'Ajeng', 'Nugraheni', 'Heni', 'Ita']
// let arrUmur=[23, 24, 25, 26, 27]
// let arrJob =['a', 'b', 'c', 'd', 'e']
// let arrTlpn = [['0987'], ['0987673'], ['97487264','98474'],['64928'],['8758468','8594875']]
// stringPhone =''
// let multiArr = [['0987', ['0987673']], ['97487264','98474'],['64928'],['8758468','8594875']]
// let arrData = [["Rita", 21, "Dokter"],
//                 ['Ajeng', 31, 'Guru'],
//                 ['Heni', 20, 'perawat']];
// let result

// for (let i = 0; i < arrData.length; i++){
//     result =''
//     for(let j=0; j < arrData[j].length; j++) {
//         result += `${arrData[i][j]}`
//     }
//     console.log(result)  
// }


// console.log(multiArr[1][1].split(''))
// console.log(multiArr[1][0][1])

//=== Menampilkan nama dan umur serta pekerjaan 
// for (let i = 0; i < arrNama[i].length ; i++){
// //    console.log(arrNama[i],arrUmur[i],arrJob[i],arrTlpn[i])
//    }

// for (let i=0; i<arrUmur; i++){
//     stringPhone =''
//     for (let j=0; j< arrTlpn[j].length; j++){
//         stringPhone += `${arrTlpn[1][j]}`
//     }
//     console.log(arrNama[i], arrUmur[i], arrJob[i], arrTlpn[i])
// }

//==============Cara membuat objek==============

// let mobil ={
//     warna : 'Merah',
//     tahun : '2018',
//     merek : 'Honda'
// }
// mobil.tipe='sedan'  //Menambahakan objek 
// mobil.warna='Biru'  //Mengganti warna merah menjadi biru

// let inputUser ='tahun'
// mobil['Tipe ban']= 'road'
// // console.log(mobil[inputUser])
// console.log(mobil)

// let karyawan={
//     nama : 'seto',
//     umur : 37,
//     pekerjaan : 'Dokter',
//     kontak : {
//         alamat :'Pamulang ',
//         nomor : ['93487','93787']
//     }
// }
// console.log(karyawan.kontak.nomor[1])


let arrData = [
    {
        buah : 'Mangga',
        harga : 1000,
        stok : 10,
        qty : 0
    },
    {
        buah : 'Apel',
        harga : 2000,
        stok : 5,
        qty : 0,
    },
    {
        buah : 'Jeruk',
        harga : 3000,
        stok : 8,
        qty : 0
    }

]


console.log(arrData[i].length)