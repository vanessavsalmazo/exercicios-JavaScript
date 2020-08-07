function verificar() {
    var fano = document.getElementById("txtano")
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) 
    {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex") 
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement("img")
        img.setAttribute("id", "foto") 
        if (fsex[0].checked) 
        {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                img.setAttribute("src", "bebehomem1.jpg") 
            } else if (idade < 21) {
                img.setAttribute("src", "homemjovem1.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "homemadulto1.jpg")
            } else {
                img.setAttribute("src", "homemidoso1.jpg")
            }
        } else {
            genero = "Mulher"
            if (idade >=0 && idade < 10) {
                img.setAttribute("src", "bebemulher1.jpg")
            } else if (idade < 21) {
                img.setAttribute("src", "mulherjovem1.jpg")
            } else if (idade < 50) {
                img.setAttribute("src", "mulheradulta1.jpg", width= 200)
            } else {
                img.setAttribute("src", "mulheridosa1.jpg")
            }
        }
        res.style.textAlign = "center" 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
    }
}
