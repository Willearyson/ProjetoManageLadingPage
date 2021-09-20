function openMenu(){
    let menuArea = document.querySelector('.mobile-menu-area')
    let btnMenuArea = document.querySelector('.mobile-button')
    if(menuArea.style.display == "block" && btnMenuArea.style.display =='flex'){
        menuArea.style.display ='none'
        btnMenuArea.style.display = 'flex'
    }else{
        menuArea.style.display = 'block'
        btnMenuArea.style.display ='none'
        
    }
}
function closeMenu(){
    let closeMenuArea = document.querySelector('.mobile-menu-area')
    let btnMenuArea = document.querySelector('.mobile-button')
    if(closeMenuArea.style.display =='none'&& btnMenuArea.style.display =='flex' ){
        closeMenuArea.style.display ='block'
        btnMenuArea.style.display = 'flex'

        
    }else { 
        closeMenuArea.style.display ='none'
        btnMenuArea.style.display = 'flex'
    }

}

let totalSlides = document.querySelectorAll('.slide-item').length
let currenteSlide = 0;


document.querySelector('.slider-area').style.width = `calc(100% * ${totalSlides})`

console.log(totalSlides)

function goNext(){
    currenteSlide++;
    if(currenteSlide > (totalSlides -1)){
        currenteSlide = 0;
    }
    updateMargin()
}

function updateMargin(){
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let novaMargin = (currenteSlide * slideItemWidth);
    document.querySelector('.slider-area').style.marginLeft = `-${novaMargin}px`
}
updateMargin()

setInterval(goNext,10000)