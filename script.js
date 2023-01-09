function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt", "Foto de Graziela Redigolo, com cabelo rosa, olhos fechados e olhando para o sol e fundo preto"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      "alt",
      "Foto de Graziela Redigolo, com cabelo curto e usando óculos, blusinha rosa e fundo amarelo claro"
    )

  }

  
  
}