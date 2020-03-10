function plusMinus(arr) {
    return Object.entries(arr.reduce((a, b) => {
      let sign = Math.sign(b);
      a[sign] = (a[sign] || 0) + 1;
      return a;
    }, {})).map(e => [e[0], e[1] / arr.length]);
  }
  
  console.log(plusMinus([1,2,3,4]));