function createNestedArray(rows, cols) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var arrayChild = []
    var array = []
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols;j++){
            var indexAlpha = Math.floor(Math.random()*26)
            arrayChild.push(alphabet[indexAlpha])
        }
        array.push(arrayChild)
        arrayChild = []
    }
    return array
}

console.log(createNestedArray(4,2));
