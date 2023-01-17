const inputColor = document.querySelector('#inputColor')
const btnVer = document.querySelector('#btnVer')
const parrafo = document.querySelector('#parrafo')
const card = document.querySelector('#card')



btnVer.addEventListener("click", () => {
    parrafo.textContent = inputColor.value;
    card.style.backgroundColor = inputColor.value;

})

