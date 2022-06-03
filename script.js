

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