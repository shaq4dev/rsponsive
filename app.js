// navigation element

const open = document.querySelector('.open')
const close = document.querySelector('.close')
const menu = document.querySelector('.menu')

open.addEventListener('click',(e) => {
    menu.style.display = 'block'
    open.style.display = 'none'
    close.style.display = 'block'
})

close.addEventListener('click', () => {
    menu.style.display = 'none'
    open.style.display = 'block'
    close.style.display = 'none'
})

// footer element

const year = document.querySelector('#year')

let date = new Date()
let currentYear = date.getFullYear()

year.textContent = currentYear