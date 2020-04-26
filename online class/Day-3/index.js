
// =================== spret dengan titik titik ===================
// let a ={
//     nama:"Nama",
//     tahun: "2020",
//     pekerjaan: "developer"
// }
// console.log({...a});

// =================== reference type =======================

// // let b = a // menyimpan alamat untuk menyimpan memori 
// // a.umur ='30'

// let b = {
//     ...a, // mengambil sesuatu yang ada pada objek a, dan jika memanggil kembali isi dari objek yang udah ada maka akan ketimpa  
//     depatment :'IT'
// } // a bukan sama dengan b 
// b.umur ="30"

// console.log(b);

// ================= belajar array lagi =============

// let arr1 = ['Naruto', 'Doraemon']
// let arr2 = [2000, 3000]

// let arr3 = [
//     ...arr1, // digunakan untuk mendapatkan valuenya saja 
//     ...arr2
// ]
// console.log(arr3);

// ================== frond end masuk dikit =====================
// jika di frond end bentuk selau objek contoh :

// let a ={
//     username : 'ritajengnugraheni',
//     email : 'ritajengnugraheni@gmail.com',
//     password :'123'
// }
// let defaultVal ={
//     username:'',
//     email :'',
//     password:''
// }

// const onChangeText = (key, value) => {
//     defaultVal={ // digunakan untuk memanggil objek 
//         ...defaultVal, // digunakan untuk memanggil isi objek
//         [key] : value //key digunakan untuk mengakses setipa isi objek dan value merupakan isi yang akan di asign 
//     }
// }
// onChangeText('username', 'ritajeng') // didalam breket harus string, jika dia tidak ada dalam isi objek maka dia akan membentuk sebuah property baru di dalam objek 

// let testing = 'foo'

// defaultVal[testing]='lalalala'
// console.log(defaultVal);

function generatePyramid(totalNumberofRows) {
    // var totalNumberofRows = 5;
    // var output2 =[output]
    // totalNumberofRows =0
    var result=[]
    var output =''
    // var output2=[]
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
           output += j + 2 ;
           output++
           result.push(output)
        }
        console.log(output.split(''));
        output = '';
    }
}

generatePyramid(5);

// function generatePyramid(totalNumberofRows){
//     let result=[]
//     let resultFix=[]
//     var output =''
//     for (let i=0; i  < totalNumberofRows; i++){
//         // hasil += ''
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





