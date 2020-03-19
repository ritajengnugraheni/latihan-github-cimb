const kaprekarsConstant = num => {
    if (num === 6174) {
      return 0
    }
  
    let numArr = num.toString().split("")
    if (numArr.length < 4) {
      while (numArr.length < 4) {
        numArr.unshift(0)
      }
    }
    let bigger = numArr.slice(0).sort((a, b) => b - a).join("")
    let smaller = numArr.slice(0).sort((a, b) => a - b).join("")
    let newNum = bigger - smaller
    // let tampil= bigger+'-'+smaller+'='+ newNum +'\n'
    // let arrTampil = tampil.split('\n') 
    // let jadi =arrTampil.length + 1

   
   
    //   tampil = bigger+'-'+smaller+'='+ newNum +'\n'
     
      
    
    return 1 + kaprekarsConstant(newNum)
    // let a = 
    // return   1 + kaprekarsConstant(newNum)+"="+tampil + jadi 
  }
  
  

  
  console.log(kaprekarsConstant(3524))
  // console.log(tampilkan)