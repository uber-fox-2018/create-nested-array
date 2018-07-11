function createNestedArr(jumlahRow, jumlahCol) {

    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let lengthAlphabet = alphabet.length
    
    let result = []
    for(let i = 0; i < jumlahRow; i++){
        let tmp = []
        for(let j = 0; j< jumlahCol; j++){
            let random = Math.floor(Math.random()*lengthAlphabet)
            tmp.push(alphabet[random])
        }
        result.push(tmp)
    }

    return result

}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
