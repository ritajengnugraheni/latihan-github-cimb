const array = [80, 80, 50]; 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  // write your code here
  let rata = calculateAverage(marks)
  
  if (rata >= 90 && rata <= 00 ){
      return 'Grade A'
  } else if (rata >= 80 ){
      return 'Grade B'
  } else if (rata >= 70 ){
      return 'Grade C'
  } else if (rata >= 60) {
      return 'Grade D'
  } else {
      return 'Grade F'
  }

}

function calculateAverage(array) { // jumlah nilai dibagi panjang array
  // write your code here
  let sum=0
  let rataRata 
  for (let i=0; i < array.length; i++ ){
         sum += array[i]
         rataRata = sum/array.length
  }
  return rataRata
}

/*
Instructions:
Create 2 functions, A and G.
A receives an array of integers as an argument,
calculates the average value of the array, and returns
a grade based on that average value/score.
G receives an integer and returns a grade based on that integer.
Hint:
Call A inside of G
Input: [80, 80, 50]
Output: C
Input: [90, 90, 85, 72]
Output: B
*/