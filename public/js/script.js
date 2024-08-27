const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', () =>{
    console.log("click")
    document.querySelector('.main-menu').classList.toggle('hidden')
    document.querySelector('.category').classList.toggle('hidden')
})

const checkSize = () => {
    if(window.innerWidth < 600){
        document.querySelector('.category').classList.remove('visible')
        document.querySelector('.main-menu').classList.add('hidden')
        document.querySelector('.category').classList.add('hidden')
    } else {
        document.querySelector('.main-menu').classList.remove('hidden')
        document.querySelector('.category').classList.remove('hidden')
    }
}

checkSize()


const slides = document.querySelector('.slides')
const slideCount = document.querySelectorAll('.slide').length
let currentIndex = 0

function showSlide(index) {
    const offset = -index * 100
    slides.style.transform = `translateX(${offset}%)`
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount
    showSlide(currentIndex)
})

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount
    showSlide(currentIndex)
})

setInterval(() => {
    document.querySelector('.next').click()
}, 3000);