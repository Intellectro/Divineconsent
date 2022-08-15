const showMenu = document.querySelector('.burger');
const removeMenu = document.querySelector('.fa-times');
const sideMenu = document.querySelector('.slider-list-holder');
const showSubMenu = document.querySelector('.fa-plus');
const aboutContent = document.querySelector('.pop-out');
const content = document.querySelector('.height-reader');

showMenu.addEventListener('click', (e)=>{
    e.stopPropagation();
    sideMenu.classList.add('pullout-menu');
});

removeMenu.addEventListener('click', ()=>{
    sideMenu.classList.remove('pullout-menu');
});

window.addEventListener('click', ()=>{
    sideMenu.classList.remove('pullout-menu');
})
showSubMenu.addEventListener('click', (e)=>{
    e.stopPropagation();
    const contentHeight = content.getBoundingClientRect().height;
    const aboutContentHeight = aboutContent.getBoundingClientRect().height
    if (aboutContentHeight === 0){
        aboutContent.style.height = contentHeight + 'px';
    }else{
        aboutContent.style.height = 0;
    }
});