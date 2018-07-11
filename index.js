function createNestedArr(jumlahRow, jumlahCol) {
    var result = [];
    var row;
    for(let i = 0; i < jumlahRow; i++) {
        row = []
        for(let j = 0; j < jumlahCol; j++) {
            row.push(getRandomChar());
        }
        result.push(row);
    }
    return result;
}

function getRandomChar() {
    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    return alphabets[getRandomInt(alphabets.length)]
}

function getRandomInt(rangeValue) {
    return Math.floor(Math.random() * Math.floor(rangeValue));
}

//Driver code
console.log(createNestedArr(1, 1));
console.log(createNestedArr(3, 1));
console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
console.log(createNestedArr(8, 7));
console.log(createNestedArr(12, 12));