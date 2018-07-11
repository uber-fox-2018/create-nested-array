function createNestedArr(jumlahRow, jumlahCol){
    
    var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var result = []
    for(var i = 0 ; i < jumlahRow ; i++){
        var newArr = []
        
        for(var j = 0 ; j < jumlahCol ; j++){
            var random = ''
            random+= abjad.charAt(Math.floor(Math.random() * abjad.length))
            newArr.push(random)
        }
        result.push(newArr)
    }
    return result
}
console.log(createNestedArr(5,3))
/*
output:
[ [ 'p', 's', 'w' ],
  [ 'r', 'a', 'i' ],
  [ 'q', 'x', 'c' ],
  [ 'r', 'q', 'w' ],
  [ 'm', 'o', 'y' ] ]
*/