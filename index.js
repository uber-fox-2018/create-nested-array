function createNestedArr(jumlahRow, jumlahCol){
    let result=[];
    for(let i=0;i<jumlahRow;i++){
        let box=[];
        for(let j=0;j<jumlahCol;j++){
            let ascii = Math.floor(Math.random() * 25) + 97;
            let letter=String.fromCharCode(ascii);
            box.push(letter);
       }
       result.push(box);
       box=[];
    }
    return result;
    
}
console.log(createNestedArr(5,3));
/* Example output (please be noted that it will be randomised)
[ [ 'n', 'h', 'b' ],
  [ 'j', 'd', 'r' ],
  [ 's', 'r', 'd' ],
  [ 'y', 'f', 'f' ],
  [ 'v', 'r', 'h' ] ]
*/
console.log(createNestedArr(4,2));
/* Example output (please be noted that it will be randomised)
[ [ 'f', 'p' ], [ 'g', 's' ], [ 't', 'w' ], [ 'b', 'v' ] ]
*/


