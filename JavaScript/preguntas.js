const preguntaHide = document.getElementById('pregunta')
const divProductosOcult = document.getElementById('divProductosOcult')

mostrarFavorito.addEventListener("click",()=>{
    verFavorito()
    preguntaHide.classList.add('hide')
    divProductosOcult.classList.add('divProductos','hide')
}) 



// ===============  FAQ ================== //
const faq = document.getElementsByClassName('faq-page')
let i
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const body = this.nextElementSibling
    if (body.style.display === 'block') {
      body.style.display = 'none'
    } else {
      body.style.display = 'block'
    }
  })
}