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

// toggle dark/light

const darkSwitch = document.querySelector('.toDark')
const lightSwitch = document.querySelector('.toLight')

// elements 

const body = document.body 
const h3 = document.querySelector('h3')
const p = document.querySelector('p')

// default styles 

function defaultStyles(){
    body.style.backgroundColor = 'var(--white)'
    body.style.color = 'var(--jet-black)'
    darkSwitch.style.display = 'block'
    darkSwitch.style.margin = 'auto'
    lightSwitch.style.display = 'none'
}

function darkStyles(){
    body.style.backgroundColor = '#000'
    body.style.color = '#fff'
    darkSwitch.style.display = 'none'
    lightSwitch.style.display = 'block'
    lightSwitch.style.margin = 'auto'

}

darkSwitch.addEventListener('click', darkStyles)
lightSwitch.addEventListener('click', defaultStyles)