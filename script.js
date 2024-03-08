const txt = document.querySelector('#txt');
const res = document.querySelector('#res');

txt.addEventListener('input',()=>{
    let valor= txt.value;
    res.textContent = valor;
})



