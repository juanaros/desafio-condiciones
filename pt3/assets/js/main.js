function verify() {
    const alpha = document.querySelector('#clave-1').value;
    const beta = document.querySelector('#clave-2').value;
    const gamma = document.querySelector('#clave-3').value;

    if (alpha == 9 && beta == 1 && gamma == 1) {
        text.innerHTML = 'Password 1 Correcto';
    } else if (alpha == 7 && beta == 1 && gamma == 4) {
        text.innerHTML = 'Password 2 Correcto';
    } else {
        text.innerHTML = 'Password Incorrecto';
    }
}