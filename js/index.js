const burgerBtn = document.querySelector('.burger-menu__btn');
const burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});

const sliderBtns = Array.from(document.querySelectorAll('.services__option'));
const slides = Array.from(document.querySelectorAll('.services__content__slide'));

sliderBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        slides.forEach(slide => {
            slide.classList.remove('active');
        })
        slides[index].classList.add('active')
    })
});


const teamItems = Array.from(document.querySelectorAll('.team__item-wrapper'));
const teamInfoItems = Array.from(document.querySelectorAll('.team__inner-info'));

teamItems.forEach((it, ind) => {
    it.addEventListener('mouseenter', () => {
        setTimeout(() => {
            teamInfoItems[ind].classList.add('active');
        }, 500)
    })
});
teamItems.forEach((it, ind) => {
    it.addEventListener('mouseleave', () => {
        teamInfoItems[ind].classList.remove('active');
    })
});

const anchors = document.querySelectorAll('a[data-url]');
const sections = Array.from(document.querySelectorAll('section'));

anchors.forEach(link => {

    link.addEventListener('click', e => {
        e.preventDefault()
        const machedSec = sections.filter(sec => e.target.dataset.url === sec.className);
        const sectionCoord = machedSec[0].getBoundingClientRect();
        const { body } = document;
        const docEl = document.documentElement;
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        const clientTop = docEl.clientTop || body.clientTop || 0;
        const top = sectionCoord.top + scrollTop - clientTop;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
        burgerMenu.classList.remove("active");
    })
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true
    });
    document.querySelectorAll('.slider button').forEach((btn,index) => {
        btn.classList.add('orange-btn')
        btn.classList.add('shadow')
        if(index == 0){
            btn.innerHTML = `<i class="fa fa-angle-left" aria-hidden="true"></i>`
        } else{
            btn.innerHTML = `<i class="fa fa-angle-right" aria-hidden="true"></i>`            
        }
    })
});







// const revSliderBtnsTop = Array.from(document.querySelectorAll('.reviews__slider__btn'));
// const revSliderBtnsBot = Array.from(document.querySelectorAll('.reviews__slider__btns-bot span'));
// const revSlides = Array.from(document.querySelectorAll('.reviews__slide'));
// const revSlider = document.querySelector('.reviews__slider')

// revSliderBtnsTop.forEach(bt => {
//     let counter = 0;
//     bt.addEventListener('click', () => {
//         if(bt.className.includes('right')){
//             console.log(counter)
//             if(counter < 2){
//                 counter++
//                 setInterval(() => {
//                     if(revSlider.scrollLeft !== revSlides[counter].offsetLeft){
//                         revSlider.scrollLeft += 5
//                     } 
//                 }, 1);
//             }
//         } else{
//             console.log(counter)
//             if(counter !== 0){
//                 console.log(123)
//                 counter--
//                 setInterval(() => {
//                     if(revSlider.scrollLeft !== revSlides[counter].offsetLeft){
//                         revSlider.scrollLeft -= 5
//                     } 
//                 }, 1);
//             }
//         }
//     })
// });