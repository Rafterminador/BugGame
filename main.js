function startGame() {
    const bodyGame = document.getElementById('root') 
    while (bodyGame.firstChild) {
        bodyGame.removeChild(bodyGame.firstChild)
    }
    const bug1 = document.createElement('IMG');
    bug1.src = "./img/Bug1.svg"
    bodyGame.appendChild(bug1)
}