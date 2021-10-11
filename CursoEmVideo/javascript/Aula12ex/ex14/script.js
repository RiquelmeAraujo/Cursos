function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date ();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.` 

    if (hora >= 0 && hora < 12) {
        document.body.style.background = "black"
        img.src = 'imagens/manha.png'
    }else if (hora >= 12 && hora < 18) {
        document.body.style.background = "blue"
        img.src = 'imagens/tarde.png'
    }else {
        document.body.style.background = "gray"
        img.src = 'imagens/noite.png'
    }
}