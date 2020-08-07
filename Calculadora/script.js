function calcular() {
    var n = document.getElementById("numero")
    var L = document.getElementById("lista")
    if (n.value.length == 0) {
        window.alert ("[ERRO] Por favor, digite um número!")
    } else {
        var n1 = Number(n.value)
        var c = 0
        L.innerHTML = " " 
        do {
            var item = document.createElement("option") 
            item.text = `${n1} x ${c} = ${n1*c}`
            c++
            L.appendChild(item) 
        } while (c <=10)
    }
}

