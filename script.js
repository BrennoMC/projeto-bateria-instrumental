//corpo do site
document.body.addEventListener('keyup', (event) => { //observador de evento para tecla keyup
    playSound(event.code.toLowerCase())//código da tecla que foi pressionada
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`) //selecionando arquivo de audio baseado na tecla que clicou
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    
    if(audioElement){
        audioElement.currentTime = 0 //isso remove o delay do som de uma tecla após o clique
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(() =>{
            keyElement.classList.remove('active')
        }, 300)

    }
}