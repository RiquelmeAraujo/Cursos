let celsiusValue = "35.7"
let fahrenheitValue = "50"

function convertTemperature (degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')


    //Fluxo de erro
    if(!celsiusExist && !fahrenheitExist){
        throw new Error (console.log("não é fahreheit e nem celsius"))
    }
 
    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace(/\D/g, ""))
    let formula = (farerenheit) => (farerenheit - 32) * 5/9
    let degreeSign = 'C'
    
    
    //fluxo alternativo, C -> F
    if(celsiusExist){
         updatedDegree = Number(degree.toUpperCase().replace(/\D/g, ""))
         formula = (celsius) => celsius * 9/5 + 32
         degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}


try{
    console.log(convertTemperature('10sdadasC'))
    console.log(convertTemperature('50asdasddsadF'))
    console.log(convertTemperature('10Z'))
}catch(e){
    console.log(e.message) 
}