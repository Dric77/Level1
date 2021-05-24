let modal = document.getElementById('modal');
let modalInput = document.getElementById('modalInput');
let body = document.getElementsByTagName('body')

window.onload = setTimeout(() => {
    modal.style.top = "50%";
}, 1000);

window.onload = setTimeout(() => {
    if (modalInput === document.activeElement) {
        console.log('focused')
    }
    else {
        modal.style.top = "-500px"
    }
}, 4000);

body[0].addEventListener('click', () => {
    modal.style.top = "-500px";
})
