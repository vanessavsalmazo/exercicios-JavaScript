function contador() {
    var n1 = document.getElementById("iniciotxt")
    var n2 = document.getElementById("fimtxt")
    var pas = document.getElementById("passotxt")
    var res = document.getElementById("res")

    if (n1.value.length == 0 || n2.value.length == 0 || pas.value.length == 0){
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert ("Passo inválido! Passo será 1")
            p = 1
        }
        if (i < f) { 
            for(var c = i; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{27A1}`
            } 
        }else {
            for (var c = n1; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        res.innerHTML += `\u{1F917}`    
    }        
}
