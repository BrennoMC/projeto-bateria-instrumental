//corpo do site
document.body.addEventListener('keyup', (event) => { //observador de evento para tecla keyup
    playSound(event.code.toLowerCase())//código da tecla que foi pressionada -> key
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value //pego a sequencia digitada no input
    
    if(song !== ''){
        let songArray = song.split('')//gerando um array quebrando a minha string
        playComposition(songArray)
    } else {
        alert('Digite uma sequência para ser tocada!')
    }

})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`) //selecionando arquivo de audio baseado na tecla que clicou //s_key
    let keyElement = document.querySelector(`div[data-key="${sound}"]`) 
    
    if(audioElement){
        audioElement.currentTime = 0 //isso remove o delay do som de uma tecla após o clique
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active') //ativa o contorno amarelo no botao

        setTimeout(() =>{
            keyElement.classList.remove('active')
        }, 300)

    }
}

function playComposition(songArray){
    let wait = 0

    //espaçando o tempo de execução da tecla
    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
        
    }
}