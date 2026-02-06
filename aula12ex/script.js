function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12){
    //Bom Dia!
    document.body.style.background =  '#e2cd9f'
    img.src = 'fotos/manha.png'
} else if (hora >= 12 && hora < 18) {
      //Boa Tarde!
      document.body.style.background = '#b9846f'
      img.src = 'fotos/tarde.png'
} else {
    //Boa Noite!
    document.body.style.background ='#515154'
    img.src = 'fotos/noite.png'
}
    
}

