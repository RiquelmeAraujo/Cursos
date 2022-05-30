function contar(){
    
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res');
    
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('faltam dados')
        res.innerHTML = 'impossivel contar'
    }else{
        res.innerHTML = 'contando: <br>';
        let inicioNumber = Number(inicio.value);
        let fimNumber = Number(fim.value);
        let passoNumber = Number(passo.value);
        if(passoNumber <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1');
            passoNumber = 1;
        }
        if (inicioNumber < fimNumber){
            for (let c = inicioNumber; c <= fimNumber; c += passoNumber){
                res.innerHTML += ` ${c} \u{1f449}`;
            }
        }else{
            for (let c = inicioNumber; c >= fimNumber; c -= passoNumber){
                res.innerHTML += ` ${c} \u{1f449}`;
            }
        }
        
        res.innerHTML += ` \u{1f3c1}`
    }
    
}
    
