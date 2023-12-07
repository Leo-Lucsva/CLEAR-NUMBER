const botao = document.querySelector('#enviar');
const valueBtn = document.querySelector('#number');
const form = document.querySelector('.form01');

const mudarNome = () => {
    botao.value = 'Enviar';
    botao.classList.remove('verde');
    botao.classList.remove('vermelho');
}

const aviso = () => {
    botao.value = 'DIGITE O TELEFONE';
    botao.classList.add('vermelho');
}

const limparCaracteres = (event) => {
    event.preventDefault();

    if (valueBtn.value == '') {
        aviso();
        return
    }

    const content = valueBtn.value;
    var numeroLimpo = content.replace(/[^\d]/g, '');

    console.log(numeroLimpo);
    navigator.clipboard.writeText(numeroLimpo).then(() => {
        botao.value = 'NUMERO COPIADO';
        botao.classList.add('verde');

        valueBtn.value = numeroLimpo;
    })
    .catch((err) => {
        alert('Erro ao copiar para a área de transferência:', err);
    });
    
}

botao.addEventListener('click', limparCaracteres);
valueBtn.addEventListener('input', mudarNome)