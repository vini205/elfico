const txt = document.querySelector('#txt');
const res = document.querySelector('#res');
const alfabeto = document.querySelector('#alfabeto');
const root = document.documentElement.style;
const title = document.querySelector('p.title');
const alfabetoName = document.querySelector('p.alfabeto.title');
const label = document.querySelector('label');

alfabeto.addEventListener('change', mudarAlfabeto);

function mudarAlfabeto() {
   let a = alfabeto.value;
   switch (a) {
    case 'elfica':
        elfica()
        break;
    case 'draconica':
        draconica()
        break;
    case 'ana':
        ana()
        break;
   } 
}
txt.addEventListener('input',()=>{
    let valor= txt.value;
    res.textContent = valor;
})

function ana() {
    root.setProperty('--maincolor','#80ac72a3');
    root.setProperty('--lingua','Davek');
    root.setProperty('--background','url("img/fundoAnao.jpeg")')
    root.setProperty('--resColor','rgba(0,0,0,0.137)')
    root.setProperty('--shadowColor','#ffffff')
    root.setProperty('--font','Ubunto')
    title.textContent = 'Transformar textos para a lingua anã'
    alfabetoName.textContent = 'anaos'
    label.textContent = 'Digite o texto para traduzir na lingua anã'
}
function elfica() {
    root.setProperty('--maincolor','rgb(96, 250, 96)');
    root.setProperty('--lingua','Rellic');
    root.setProperty('--background','url("img/fundo.png")')
    root.setProperty('--resColor','rgba(0,0,0,0.137)')
    root.setProperty('--shadowColor','#ffffff')
    root.setProperty('--font','Alice')
    title.textContent = 'Transformar textos para a lingua Élfica'
    alfabetoName.textContent = 'Elfos'
    label.textContent = 'Digite o texto para traduzir em Élfico'
}
function draconica() {
    root.setProperty('--maincolor','#c40000a3');
    root.setProperty('--lingua','Iokharic');
    root.setProperty('--shadowColor','white')
    root.setProperty('--font','Alice')
    root.setProperty('--resColor','rgba(0,0,0,0.1)')
    root.setProperty('--background','url("img/fundoDraconica.avif")')
    title.textContent = 'Transformar textos para a lingua Dracônica'
    alfabetoName.textContent = 'Draconico'
    label.textContent = 'Digite o texto para traduzir em Dracônico'

}
