const menorValor = 10
const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor

function confirmarMaiorValor(){
    const maiorValor = document.getElementById("maiorValor").value
    const elementoMaiorValor = document.getElementById("maior-valor")

    if (maiorValor < 10){
        alert("O valor não pode ser menor que 10")
    }else{
        localStorage.setItem("MaiorNumero", maiorValor)
        elementoMaiorValor.innerHTML = localStorage.getItem("MaiorNumero")
        window.location.reload()
    }
}

const MaiorNumero = document.getElementById("maior-valor")
MaiorNumero.innerHTML = localStorage.getItem("MaiorNumero")

const numeroSecreto = gerarNumero()

function gerarNumero(){
    const valorMaximo = localStorage.getItem("MaiorNumero")

    return parseInt(Math.random() * valorMaximo + 1)
}

console.log(numeroSecreto)

function apagar(){
    localStorage.clear()
    window.location.reload()
}



