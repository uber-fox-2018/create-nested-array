function createNestedArr(p,l) {
    let res = []

    for (let i = 0; i < p;i++) {
        let subRes = []
        for (let j = 0; j < l; j++) {
            let alpha = 'abcdefghijklmnopqrstuvwxyz'
            let random = Math.round(Math.random()*((alpha.length-1)-1)+1)

            subRes.push(alpha[random])
        }
        res.push(subRes)
    }
    return res
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))