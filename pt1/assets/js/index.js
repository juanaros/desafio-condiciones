const modBorder = () => {
    const foto = document.querySelector("#photo");

    if(foto.style.border == '2px solid red') {
        foto.style.border = '0px';
    } else {
        foto.style.border = '2px solid red';
    }
};
