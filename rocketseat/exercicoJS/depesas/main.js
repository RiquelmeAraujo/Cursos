let fluxoCaixa = {
    receitas: [],
    despesas: []
}
     


fluxoCaixa.receitas.push(10.5, 50.10, 60.40, 100, 90.50) 
fluxoCaixa.despesas.push(10, 25, 40, 45.5, 50.5)


function calc(){
    let totalReceita = 0;
    let totalDespesas = 0;


for(let i = 0; i < fluxoCaixa.receitas.length; i++){

    totalReceita = totalReceita + fluxoCaixa.receitas[i] 

} 

for(let i = 0; i < fluxoCaixa.despesas.length; i++){

    totalDespesas = totalDespesas + fluxoCaixa.despesas[i] 

} 
    var total = totalReceita - totalDespesas

    if(total > 0){
        console.log(`saldo positivo: R$${total.toFixed(2)}`)
    }else{
        console.log(`saldo negativo: R$${total.toFixed(2)}`)
    }
}
calc()


// RESOLUÇÃO DO PROFESSOR

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }
    
    return total
}


function calculateBalance(){
    const calculateIncomes = sum(fluxoCaixa.receitas)
    const calculateExpanses = sum(fluxoCaixa.despesas)

    const total = calculateIncomes - calculateExpanses 


    let balanceText = "Negativo"

    if(total >= 0){
        balanceText = "Positivo"
    }

    console.log(`Seu saldo está ${balanceText} valor total: ${total.toFixed(2)}`)
}

calculateBalance()



/*

MOSTRAR VALORES 

console.log(receitas)
for(let print of fluxoCaixa.receitas){
    console.log(print)
}

console.log(despesas)
for(let print of fluxoCaixa.despesas){
    console.log(print)
}
*/
