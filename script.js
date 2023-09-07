const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto','foco')
})

curtoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})

const meuBotao = document.getElementById("app__card-list-item");
meuBotao.addEventListener("click", function() {
    alert("O botão foi clicado!");
});
