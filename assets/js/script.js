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
}