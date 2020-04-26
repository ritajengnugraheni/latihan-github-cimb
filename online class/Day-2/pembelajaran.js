// ================= Menggunakan return ============ 
// let param1 = 'hallo'
// let param2 = 'world'

// const fnBaru = (param1, param2) =>{ //declaration
//     return param1 +' ' + param2 //program
// }
// console.log(fnBaru(param1,param2)); //execution

// ================= Tanpa menggunakan return =============== 
// let a = 'abc'

// const fnKedua =()=>{
//     a='cba'
// }
// fnKedua() // digunakan untuk memangil fungsi nya (cba)
// console.log(a);// hanya akan menampilkan a yang atas aja (abc)

// ============== pembahasan looping ===============
// let arr =[1,2,3,4]

// // for each digunakan untuk menerima call back fungsi, atau fungsi yang dijadikan parameter urutan dari parameter itu berpengaruh
// arr.forEach((val, index, array)=>{
//     // console.log('iiiiiiiiiiii');
//     console.log(val, index, array);
    
    
// })

// ===================== tugas membuat replika forEach==================
// arr =[1,2,3,4,5,6]

// const forEachRep=(array, cb)=>{
//  for (let i=0; i < array.length; i++){
//         cb(array[i], i, array)
//  }
// }
// forEachRep(arr, (param1,param2,param3)=>{
//     console.log(param1, param2, param3);
    
// })

// ==================== belajar for of ====================
// for (let item of arr){ // for of digunakan untuk array 
//  console.log(item);
 
// }

// ================ tampilkan semua item yang indexnya genap ===============
// for (let item of arr){
//     arr.indexOf(item)
//     if (arr.indexOf(item)%2==1){
//         console.log(item);
        
//     }
// }

// ================= belajar for in =============== 
// for in akan digunakan untuk objek 

// let saya ={
//     nama : 'Ajeng',
//     pekerjaan: 'programmer',
//     status: 'sehat'
// }
// for (let prop in saya){
//     console.log(prop, saya[prop]);
    
// }

// Cara akses 
// let nama ='status'

// console.log(saya[nama]);//bracet notation 
// console.log(saya.nama);// dot notation
// console.log(saya['status'])//bracet notation bentuknya harus string

// ============= Belajar interval dan set timeout================

// setTimeout(()=> {
//     console.log('hai')
// },3000)


// setInterval(()=>{ // ketika dipanggil 
//     console.log('hemm');
    
// },1000)

const testInterval=()=>{
    setInterval(()=>{ // ketika dipanggil 
        console.log('hemm');
        
    },1000)
    clearInterval()
}