

function initTabNav(){

const tabMenu = document.querySelectorAll('.js-tabmenu li') //array like | node list
const tabContent = document.querySelectorAll('.js-tabcontent section') //array like | node list


//se uma das lista for '0'(false) o codigo n é ativado
if(tabMenu.length && tabContent.length)
{
//O primeeiro elemento começa ativo
tabContent[0].classList.add('ativo')

function activeTab(index){
  tabContent.forEach((item) => {
    item.classList.remove('ativo')
  })
  tabContent[index].classList.add('ativo') 
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index) // passa o index dos itens do menu para a função
  })
})
}

}



//ACCORDION-------------------------------------------------------------------------

initTabNav();


function initAccordion(){

const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';

if(accordionList.length){
/* Seleção primeiro elemento da lista */
accordionList[0].classList.add(activeClass)
accordionList[0].nextElementSibling.classList.add(activeClass)

function activeAccordion(){
  this.classList.toggle(activeClass)
  /* Adiciona no proximo elemento */
  this.nextElementSibling.classList.toggle(activeClass)
}

accordionList.forEach((item) =>{
  item.addEventListener('click', activeAccordion)
})
}

}

initAccordion();


//SCROLL-------------------------------------------------------------------------

function initScrollSuave(){

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
  //previnir o padrão | Remove ação da ancora 
  event.preventDefault()

  //currentTarget retorna o que foi clicado | getAttribute - retorna atributo passado
  const href = event.currentTarget.getAttribute('href') //#faq

   // Retorna elementos com #faq
  const section = document.querySelector(href)


//ScrollIntoView - Leva até o elemento | Permite escolher posição final 
section.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
})


}

linksInternos.forEach((link) =>{
  link.addEventListener('click', scrollToSection)
})

}

initScrollSuave();



//ANIMAÇÃO AO SCROLL


function initAnimacaoScroll(){//agrupa para organização

const sections = document.querySelectorAll('.js-scroll')

if(sections.length){ //verifica se sections tem item(se existir)

const windowMetade = window.innerHeight * 0.6; //o tamanho da tela * 0.6 : um pouco mais da metada da janela | 60%

function animaScroll(){
  //distancia de cada elemento do top
  //Método 'getbound' - Retorna distancias e tamanhos
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top;

    //Pega a distacia do topo do display para o elemento | Subtrai 60% para cima(será referente a '0' agora) | Quando for menor que zero(passou da marcação) | insere a classe.
    const isSectionVisible = (sectionTop - windowMetade) < 0; /* True or false */
    if(isSectionVisible)
      section.classList.add('ativo')
    else
      section.classList.remove('ativo')
  })
}

animaScroll()

window.addEventListener('scroll', animaScroll)

}

}

initAnimacaoScroll()