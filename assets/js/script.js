function toggleMenu() {
    const elementos = [
        document.querySelector(".menu__navegacao"),
        document.querySelector(".botoes__acesso"),
        document.querySelector(".fundo__menu"),
        document.querySelector(".linha"),
    ]

    elementos.forEach((elemento) => {
        elemento.classList.toggle("active")
    })

    const imgIcon = document.querySelector(".hamburguer__menu__icon img")

    elementos[0].classList.contains("active") ? imgIcon.setAttribute("src", "./assets/img/icon-close-menu.svg") : imgIcon.setAttribute("src", "./assets/img/icon-menu.svg")
}

async function getShortLink() {
    let link = document.querySelector("#link").value;
    if (link.trim() != "") {

        let ok;

        let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then(async (res) => {
            let data = await res.json();
            console.log(res)
            if (res.ok) {
                ok = true;
                return data;
            }

            if (data.error_code == 2) {
                ok = res.ok;
                return;
            }

            ok = res.ok;

        });

        if (!ok) {
            return
        };

        console.log(res.result.short_link3)

        mostrarLink(res.result.short_link3, link)
    }
}

function mostrarLink(link, linkOriginal) {
    let resultados = document.querySelector(".resultados")
    resultados.innerHTML += `            
    <div class="campo__resultado" id="campo__resultado-1">
        <p id='link__original'>${linkOriginal}</p>
        <div class="links">
            <a href="https://${link}">https://${link}</a>
            <button>copy</button>
        </div>
    </div>`
}