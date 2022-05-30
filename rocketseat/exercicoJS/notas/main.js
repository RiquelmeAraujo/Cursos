

function getNotas(nota){
// Treino condições em variáveis 
let notaA = nota >= 90 && nota < 100
let notaB = nota < 90 && nota >= 80
let notaC = nota < 80 && nota >= 70
let notaD = nota < 70 && nota >= 60
let notaF = nota < 60 && nota >= 0

let finalScore;

if(notaA){
    finalScore = "A"
}else if(notaB){
    finalScore = "B"
}
else if(notaC){
    finalScore = "C"
}
else if(notaD){
    finalScore = "D"
}else if(notaF){
    finalScore = "F"
}else{
    finalScore = "Nota inválida"
}
    return finalScore
}

console.log(getNotas(0))

console.log(getNotas(-1))

console.log(getNotas(60))

console.log(getNotas(70))

console.log(getNotas(80))

console.log(getNotas(90))

console.log(getNotas(100))

console.log(getNotas(101))

console.log(getNotas(10))

console.log(getNotas(15))

console.log(getNotas(61))

console.log(getNotas(78))

console.log(getNotas(99))

console.log(getNotas(85))





