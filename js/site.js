
const aboutDropDown = document.querySelector('.a-links');
const images = document.querySelector('.images');

const time = 3000;

let count = 0;
let imageBox = [];
imageBox[0] = "../images/about.jpg";
imageBox[1] = "../images/about2.jpg";
imageBox[2] = "../images/about3.jpg";
imageBox[3] = "../images/about4.jpg";
imageBox[4] = "../images/BGIMAGE/pexels-photomix-company-224924.jpg";

aboutDropDown.addEventListener('mouseover', (e)=>{
    e.stopPropagation();
    if (!aboutDropDown.classList.contains('d-down')){
        aboutDropDown.classList.add('d-down')
    }
});

window.addEventListener('click', ()=>{
    aboutDropDown.classList.remove('d-down');
});



function autoShow(pics){
    if (count < (pics.length - 1)){
        count++;
    }else{
        count = 0;
    }
    setTimeout(()=>{
        images.src = pics[count];
        autoShow(pics);
    },time)
}
autoShow(imageBox);




const loaderBox = document.querySelector('.loader-box');
function preload(){
    loaderBox.classList.add('fade-out');
}
window.addEventListener('load', ()=>{
    setTimeout(()=>{
        preload();
    },3000)
});

const headerBottom = document.querySelector('.header-bottom');

window.addEventListener('scroll', ()=>{
    let position = window.pageYOffset;
    let headerHeight = headerBottom.getBoundingClientRect().height;

    if (position > (headerHeight + 100)){
        headerBottom.classList.add('fixed-header');
        headerBottom.classList.add('show-logo');
    }else{
        headerBottom.classList.remove('fixed-header')
        headerBottom.classList.remove('show-logo');
    }
});


// const headerContainer = document.querySelector('.header-top');
const linksContainer = document.querySelector('.header-bottom-menu');
const pageLInks = document.querySelectorAll('.dc-links');
function scrollInto(obtain){
    obtain.forEach(link => {
        link.addEventListener('click', (e)=>{
            const grabAttr = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(grabAttr);
            let position = element.offsetTop - 73;
            const fixedNav = headerBottom.classList.contains('fixed-header');
            const linksHeight = linksContainer.offsetHeight;
            const headerHeight = headerBottom.getBoundingClientRect().height;
            if (!fixedNav){
                position = position - headerHeight
            }
            if (headerHeight > 70){
                position = position + linksHeight
            }
            window.scrollTo({
                left: 0,
                top: position
            });
        })
    })
}
window.addEventListener('DOMContentLoaded', ()=>{
    scrollInto(pageLInks);
});

const pageNotCreated = document.querySelectorAll('.not-found');
function popout(){
    alert('Page Under Construction');
}

pageNotCreated.forEach(page=>{
    page.addEventListener('click', ()=>{
        if (page.classList.contains('fa-twitter')){
            popout();
        }else if(page.classList.contains('fa-linkedin')){
            popout();
        }else{
            popout();
        }
    })
})