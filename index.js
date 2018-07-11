
function generateRandom(possible) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}


function createArr(col, row) {

    let result = []
    let num = 1
    for (let i = 0; i < col; i++) {
        let arr = []
        result.push(arr)

        for (let j = 1; j <= row; j++) {

            var randomStr = generateRandom()


            if (row >= col) {

                arr.push(randomStr);

            } else {

                arr.push(randomStr);
            }
        }

    }

    return result
}
console.log(createArr(4, 4));
console.log(createArr(4, 2));


