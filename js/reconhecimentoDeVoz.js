const elementoChute = document.getElementById("chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOchutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Seu chute foi: </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())