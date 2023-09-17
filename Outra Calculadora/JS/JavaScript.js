const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'limpar') {
            display.innerText = '';
        } else if (item.id === 'voltar') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && item.id === 'igual') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText === '' && item.id === 'igual') {
            display.innerText = 'vazio';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});

const alternartemabtn = document.querySelector('.alternar-tema');
const calculadora =  document.querySelector('.calculadora');
const alteraricone = document.querySelector('.alterar-icone');
let isescura = true;
alternartemabtn.onclick = () => {
    calculadora.classList.toggle('escura');
    alternartemabtn.classList.toggle('ativo');
    isescura = !isescura;
};