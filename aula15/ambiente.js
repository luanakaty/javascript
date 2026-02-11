let num = [5, 6, 7 ,9, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posição`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
     console.log(`O valor  7 está na posição ${pos}`)        
}
