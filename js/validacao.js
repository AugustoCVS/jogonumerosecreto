function verificaSeOchutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido, fale um numero</div>`
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido! Diga um valor entre ${menorValor} e ${MaiorNumero.innerHTML}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>PARABÉNS, VOCÊ ACERTOU!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogarNovamente" class="botaoJogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numéro secreto é MENOR</div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O numéro secreto é MAIOR</div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > MaiorNumero.innerHTML || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})