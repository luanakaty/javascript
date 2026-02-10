function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade < 10) {
              // criança
              img.setAttribute('src', 'criança.menino.png')
           } else if (idade >= 10 && idade <21) {
                 // Jovem
              img.setAttribute('src', 'jovem.menino.png')   
           } else if (idade > 21 && idade < 50 ){
                // Adulto
              img.setAttribute('src', 'homem.adulto.png')
           } else {
              // Idoso
              img.setAttribute('src', 'idoso.homem.png')
           }
                
       } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {  
              // criança
              img.setAttribute('src', 'criança.menina.png')
           } else if (idade >= 10 && idade < 21) {
                 // Jo vem
                 img.setAttribute('src', 'jovem.mulher.png')
           } else if (idade > 21 && idade < 50 ){
                // Adulto
                img.setAttribute('src', 'mulher.adulta.png')
           } else {
              // Idoso
              img.setAttribute('src', 'idosa.mulher.png')
           }

       }
       res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
