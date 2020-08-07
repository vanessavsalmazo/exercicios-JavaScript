var n = document.getElementById("numtxt")
var list = document.getElementById("lista")
var res = document.getElementById("res")
var array = []

function adicionar() { 
    if (isNumber(n.value) && !inlist(n.value, array)) {
        array.push(Number (n.value)) 
        var item = document.createElement("option") 
        item.text = `Valor ${n.value} adicionado`
        list.appendChild(item)
        res.innerHTML = " "
    } else { 
        window.alert ("Valor inválido ou já encontrado.")
    }
    n.value = " " 
    n.focus()
}

function isNumber(num) { 
    if (Number(num) >= 1 && Number(num) <=100) {
        return true
    } else {
        return false
    }

}

function inlist(num, li) { 
    if (li.indexOf(Number(num)) != -1) { 
    return true
    } else {
        return false
    }

}

function fim() { 
    if (array.length == 0) {
        window.alert ("Adicione valores no campo acima")
    } else {
        var tot = array.length
        var maior = array [0] 
        var menor = array [0]
        var soma = 0
        var media = 0
        for (var pos in array) {
            soma += array[pos]
            if (array[pos] > maior)
            maior = array [pos]
            if (array [pos] < menor)
            menor = array [pos]
        }
        media = soma / tot
        res.innerHTML = " " 
        res.innerHTML += `<p>Ao todo temos ${array.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</P>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os números temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}