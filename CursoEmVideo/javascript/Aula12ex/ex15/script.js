function verificar(){
    var data= new Date();
    var ano= data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(formAno.value == 0 || Number(formAno.value) > ano){
        window.alert("verifique os dados novamente")
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagem/bebe-m.png');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagem/jovem-m.png');
            }else if(idade <50){
                //adulto
                img.setAttribute('src','imagem/adulto-m.png');
            }else{
                //idoso
                img.setAttribute('src','imagem/velho-m.png');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 21){
                //criança
                img.setAttribute('src','imagem/bebe-f.png');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','imagem/jovem-f.png');
            }else if(idade <50){
                //adulto
                img.setAttribute('src','imagem/adulto-f.png');
            }else{
                //idoso
                img.setAttribute('src','imagem/velho-f.png');
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }
}