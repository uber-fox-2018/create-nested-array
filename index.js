function nestedArray(row,col){

    let abjad = 'abjdefghijklmnopqrstuvwxyz'
    let result = []
  
    for (let i = 0; i < row; i++) {
      result.push([])
  
      for (let j = 0 ; j < col; j++ ){
      result[i].push(abjad[(Math.floor(Math.random() * abjad.length))])
  
      }
    }
    return result
  
  }
  console.log(nestedArray(5,3))
  console.log(nestedArray(4,2))
  