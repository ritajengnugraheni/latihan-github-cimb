// ============== Belajar looping biasa =================
// for (let i=1; i<20; i++){
//     if ( i%3 ==0 && i%5==0){
//         console.log('fizzBuzz')
//         break;
//     } else if (i%3 == 0) {
//         console.log('Fizz')
//     } else if (i%5 ==0) {
//         console.log('buzz')
//     } else {
//         console.log(i)
//     }
// }

// ============== looping menggunakan break ==============
// FizzBuzzCount =1
// let len =50
// for (let i=1; i<=len; i++){
//     if ( i%3 == 0 && i%5 == 0){
//         console.log(i,'fizzBuzz')
//         if(FizzBuzzCount <2 ){
//             FizzBuzzCount++
//         }else{
//             break
//         }
//     } else if (i%3 == 0) {
//         console.log(i,'Fizz')
//     } else if (i%5 ==0) {
//         console.log(i,'buzz')
//     } else {
//         console.log(i)
//     }
   
// }

// ================= Balajar loop didalam loop =================
// for (i=0; i<5; i++){ // dijalankan 5 kali 
//     for(j=0; i<5; j++) // akan dijalankan 25 kali
// }

// for (let i=0; i<5; i++){ 
//     let result = i 
//     for(j=0; i<5; j++) {
//     result+=j
//     }
//     console.log(result)
// }

// ================= Membuat kotak dengan bintang ================
// let hitung = ''
// for (let i=0; i<6; i++){ //nambah baris
 
//     for (let j=0; j<6; j++){  // nambah bintang kesamping
//         hitung +='*'
//     }
//         hitung+='\n'   
// }
// console.log(hitung)

//==========segitiga kebalik============== blm bener 
// let hitung = ''
// for (let i=0; i<5; i++){ //nambah baris
//     hitung += '*'
//     for (let j=0; j<5; j++){  // nambah bintang
//         if (j== i){
//          break
//         }
//         hitung+='*'  
//     }
//         hitung='\n'       
// }
// console.log(hitung);

// ============ Membuat segtiga =============

// let hasil = ''
// for (let i = 0; i < 6; i++) { // i = 1  hasil = '*****\n'

//   for (let j = 0; j < 1; j++) { // j = 4  hasil = '*'
//     hasil += '*'
//   }

//   console.log(hasil)
// }

// console.log(hasil)

// ===================== Membuat bintang piramid ===================
// function pyramid(n) {

//     for(let i=1; i<= n; i++){
//       let str2 = '*'. repeat(i*2 -1)
//       let str = ' '.repeat(n-i);
  
      
//       console.log(str2+str);
  
//     }
  
//   }
  
//   pyramid(5);

var s = '';

for( var i = 10; i > 0; i-- ) {
 for(var j = 0; j <= i; j++ ) {
  s += ' ';
 }
 for( var k = 10; k >= i; k-- ) {
  s += '*';
 }
 s += '\n';
}
console.log(s);