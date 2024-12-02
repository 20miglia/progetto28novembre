function modificaContenuto(){
    let paren = document.querySelector("header")
    let titolo = document.querySelector("h1")
    titolo.innerText = "Nuovo Centro Smartphones"
}

function modificaColore(){
    let pagina = document.querySelector("link")
    pagina.href = "/FileCss/color.css"
}

function nomeFittizio(){
    let modifica = document.getElementById("s8")
    modifica.innerText = "Via Garibaldi 14"
}

function modificaCss(){
    let selezione = document.querySelectorAll("a")
    for (let i = 0; i < selezione.length; i++){
    let vox = selezione[i].classList.add("turn")
    }
}

function nascondiImmagine(){
    let contenitore = document.querySelectorAll("img")
    for (let i = 0; i < contenitore.length; i++){
    let pix = contenitore[i].classList.toggle("vist")
    }
}

function cambiaColore(){
    let bag = document.querySelectorAll(".top")
    for (let i = 0; i < bag.length; i++){
    let fox = bag[i]
    fox.style.color = color
    }

}


