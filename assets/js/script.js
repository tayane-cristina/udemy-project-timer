const cronometro = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

let valorInicial = new Date('02-01-2001')
cronometro.innerText = valorInicial.toLocaleTimeString('pt-BR', {
    hour12: false
})

const criarSegundos = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC',
        hour12: false
    })
}

const iniciarRelogio = () => {
        timer = setInterval(() => {
        segundos++
        cronometro.innerText = criarSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click' , () => {
    clearInterval(timer)
    iniciarRelogio()
    cronometro.style.color = "black"
})

pausar.addEventListener('click' , () => {
    clearInterval(timer);
    cronometro.style.color = "red"
})

zerar.addEventListener('click' , () => {
    clearInterval(timer);
    segundos = 0;
    valorInicial = new Date('02-01-2001');
    cronometro.innerText = valorInicial.toLocaleTimeString('pt-BR', {
        four12: false
    });
    cronometro.style.color = "red";
})





