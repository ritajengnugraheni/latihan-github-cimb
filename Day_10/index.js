

let mobil ={
    tahun : 2000,
    merek : 'Toyota',
    harga : 10000
}
// let arr=[1,2,3]
// let arr2=[4,5,6]
// console.log([...arr,...arr2])
let mobil2={...mobil}

mobil.bahanbakar = 'solar'
console.log(mobil2)