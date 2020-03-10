// ini loop biasa

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

// ini break
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

//loop di dalam loop

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

// kotak bintang
let hitung = ''
for (let i=0; i<5; i++){ //nambah baris
 
    for (let j=4; j<5; j++){  // nambah bintang
        hitung +='*'
    }
        // hitung+='\n'   
}
console.log(hitung)

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
