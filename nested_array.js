function createNestedArray(rows, cols) {
    let board = [];
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < rows; i++) {
        var rowArr = [];
        for (let j = 0; j < cols; j++) {
            var random = (Math.floor(Math.random() * 26 + 0));
            rowArr.push(alphabets.charAt(random));
        }
        board.push(rowArr)
    }
    return board;
}

console.log(createNestedArray(5, 3));
console.log(createNestedArray(6, 4));
console.log(createNestedArray(4, 6));