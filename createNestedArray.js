function createNedtedArr(row, col){
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'
	var result=[]
	for (var i = 0 ; i < row ; i++){
		var temp=[]
		for (var j = 0 ; j < col ; j++){
			var randomIndex = Math.floor(Math.random()*alphabet.length)
			temp.push(alphabet[randomIndex])
		}
		result.push(temp)
	}
	return result
}

console.log(createNedtedArr(5,3))
console.log(createNedtedArr(4,2))