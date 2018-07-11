function createNestedArr(row,col){
    let dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let output = []

    for (let i = 0; i < row; i++) {
        let newArr = []
        for (let j = 0; j < col; j++) {
            let random = Math.floor(Math.random()*dictionary.length)
            newArr.push(dictionary[random])   
        }
        output.push(newArr)
    }
    return output
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
