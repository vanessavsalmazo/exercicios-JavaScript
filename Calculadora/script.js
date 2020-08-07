function calcular() {
    var n = document.getElementById("numero")
    var L = document.getElementById("lista")
    if (n.value.length == 0) {
        window.alert ("[ERRO] Por favor, digite um número!")
    } else {
        var n1 = Number(n.value)
        var c = 0
        L.innerHTML = " " //isso para limpar a área antes de gerar um numero novo
        do {
            var item = document.createElement("option") // para criar a caixa de seleção fora do html
            item.text = `${n1} x ${c} = ${n1*c}`
            c++
            L.appendChild(item) //para criar um apendice dentro da lista (select)
        } while (c <=10)
    }
}

/*poderia também ter while
while (c <=10) {
     var item = document.createElement("option") 
            item.text = `${n1} x ${c} = ${n1*c}`
            L.appendChild(item) 
            c++
        }*/

