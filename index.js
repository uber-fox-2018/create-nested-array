function createNestedArr(jumlahRow,jumlahCol){
    let result = [];
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i<jumlahRow; i++){
        let row = [];
        result.push(row)
        for(let j = 0; j<jumlahCol; j++){
            let random = Math.random()*(abjad.length-1);
            let randomAbjad = abjad[Math.round(random)];
            row.push(randomAbjad)
        }
    }
    return result
}

console.log(createNestedArr(5,3))

console.log(createNestedArr(4,2))