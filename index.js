function angka(col, row) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    let array = []
    
    for(let i=0; i<col; i++){
        let arrRow = [];
        for(let j=0; j<row; j++){
            let randomAlpha = alpha[Math.floor(Math.random()*alpha.length)];
            arrRow.push(randomAlpha);
        }
        array.push(arrRow);
    }

    return array;
}

console.log(angka(5,3));
console.log(angka(4,2));