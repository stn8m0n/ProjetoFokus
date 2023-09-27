const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector ('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('app__card-button')
const botoes = document.querySelectorAll('.app__card-button')

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click' , () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longBt.addEventListener('click' , () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})
const meuBotao = document.getElementById("app__card-list-item");
meuBotao.addEventListener("click", function() {
    alert("O botão foi clicado!");
});

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
})
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}
