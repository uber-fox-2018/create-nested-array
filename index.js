function createNestedArr(jumRow, jumCol) {
    let resultArr = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < jumRow; i++) {
      let subArr = []
      for(let j = 0; j < jumCol; j++) {
        let random = Math.floor(Math.random() * (26 - 0 + 1));
        subArr.push(alphabet[random])
      }
      resultArr.push(subArr);
    }
    return resultArr
  }
  
  console.log(createNestedArr(4, 2));