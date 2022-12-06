const verify = () => {
    const numero1 = document.querySelector('#in-1').value;
    const numero2 = document.querySelector('#in-2').value;
    const numero3 = document.querySelector('#in-3').value;

    const total = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
    const answer = document.querySelector('#text');

    if (total<=10) {
        answer.innerHTML = 'Llevas ' + total + ' stickers';
    } else {
        answer.innerHTML = 'Llevas demasiados stickers';
    }
}