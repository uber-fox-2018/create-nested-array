// function angka(jumlahRow, jumlahCol) {
//     if (jumlahRow < 1 || jumlahCol < 1) {
//         return "Angka tidak boleh kurang dari 1";
//     }
//     var counter = 0;
//     var data = [];
//     var hasil = [];
//     for(let i = 0; i < jumlahRow; i++) {
//         for(let j = 0; j < jumlahCol; j++) {
//             counter++;
//             data.push(counter);
//         }
//         hasil.push(data);
//         data = [];
//     }
//     return hasil;
// }

// console.log(angka(4, 4));
// console.log(angka(4, 2));

function createNestedArr(jumlahRow, jumlahCol) {
    if (jumlahRow < 1 || jumlahCol < 1) {
        return "Angka tidak boleh kurang dari 1";
    }
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var data = [];
    var hasil = [];
    for(let i = 0; i < jumlahRow; i++) {
        for(let j = 0; j < jumlahCol; j++) {
            let acak = abjad.charAt(Math.round(Math.random() * abjad.length));
            data.push(acak);
        }
        hasil.push(data);
        data = [];
    }
    return hasil;
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));