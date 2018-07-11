function random (row,col){
var alphabet = 'abcdefghijklmnopqrstuvwrowcolz'
var hasil = []
for (var i=0 ; i < row ; i++){
  var tampung = []
  for (var j=0 ; j < col ; j++){
    tampung.push(alphabet[Math.floor(Math.random() * 26)])
  }
  hasil.push(tampung)
}
return hasil
}

console.log(random(5,3))

console.log(random(5,3))
console.log(random(3,6))
console.log(random(7,5))
console.log(random(3,8))
console.log(random(2,5))
console.log(random(5,6))
