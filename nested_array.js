function createNestedArr(jumlahRow, jumlahCol) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let i = 0; i < jumlahRow; i++) {
        let temp = []
        for (let j = 0; j < jumlahCol; j++) {
            index = Math.floor(Math.random() * alpha.length)
            temp.push(alpha[index])
        }
        result.push(temp)
    }
    return result
}

// function createNestedArr(jumlahRow, jumlahCol) {
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'

//     const tabel = jumlahCol * jumlahRow
//     let result = []
//     let temp = []
//     for (let j = 1; j <= tabel; j++) {
//         index = Math.floor(Math.random() * alpha.length)

//         temp.push(alpha[index])
//         if (temp.length == jumlahCol) {
//             result.push(temp)
//             temp = []
//         }

//     }

//     return result
// }



console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 4))
console.log(createNestedArr(4, 2))