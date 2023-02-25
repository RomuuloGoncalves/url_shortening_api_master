function toggleMenu() {
    const elementos = [
        document.querySelector(".menu__navegacao"),
        document.querySelector(".botoes__acesso"),
        document.querySelector(".fundo__menu"),
        document.querySelector(".linha"),
    ]
    
    elementos.forEach((elemento)=>{
        elemento.classList.toggle("active")
    })

    const imgIcon =  document.querySelector(".hamburguer__menu__icon img")

    elementos[0].classList.contains("active") ? imgIcon.setAttribute("src", "./assets/img/icon-close-menu.svg") : imgIcon.setAttribute("src", "./assets/img/icon-menu.svg")
}