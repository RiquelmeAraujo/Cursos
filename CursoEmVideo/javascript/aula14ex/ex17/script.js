function tabuada (){
    let num = document.getElementById('tabuada');
    let res = document.getElementById('seltab');

    if(num.value.length == 0){
        window.alert('erro')
    }else{
        let tab = Number(num.value);
        let c = 1;
        res.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${tab} x ${c} = ${tab*c}`;
            item.value = `tab${c}`
            res.appendChild(item);
            c++;
        }
    }
    
}