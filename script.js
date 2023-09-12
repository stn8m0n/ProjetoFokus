const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector ('.app__imagem')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto','foco')
    banner.setAttribute('src' , '/imagens/foco.png')
})

curtoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src' , '/imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src' , '/imagens/descanso-longo.png')
})

const meuBotao = document.getElementById("app__card-list-item");
meuBotao.addEventListener("click", function() {
    alert("O botão foi clicado!");
});
