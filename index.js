function createNestedArr(row, col){
    let result = []
    let char = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < row; i++){
        let inside = []
        for (let j = 0; j < col; j++){
            inside.push(char[Math.floor((Math.random() * 26))])
        }
        result.push(inside)
    }
    return result
}


console.log(createNestedArr(4,2))