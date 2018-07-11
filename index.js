function createNestedArr(jumlahRow, jumlahCol) {
    var alf= 'abcdefghijklmnopqrstuvwxyz'
    var result= []

    for (var i=1; i<=jumlahRow; i++) {
        var tmp= []

        for (var j=1; j<=jumlahCol; j++) {
            var idx= Math.floor(Math.random() * 26)         // returns a random integer from 0 to 25
            tmp.push(alf[idx])
        }
        result.push(tmp)
    }
    return result
}


console.log (createNestedArr(5,3))
console.log (createNestedArr(4,2))