function createdNestedArray(jumlahRow, jumlahCol) {

    var result = []
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < jumlahRow; i++) {
        var row = []
        for (let i = 0; i < jumlahCol; i++) {
            var random = Math.trunc(Math.random() * alphabet.length)
            row.push(alphabet[random])
        }
        result.push(row)
    }
    return result
}

console.log(createdNestedArray(5,3))
console.log(createdNestedArray(4,2));

