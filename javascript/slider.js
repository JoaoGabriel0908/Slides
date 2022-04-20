'use strict'

const imagens = [
    {id: '1', url: './img/angular.png'},
    {id: '2', url: './img/react.png'},
    {id: '3', url: './img/svelte.jpg'},
    {id: '4', url: './img/vue.jpg'},
    {id: '5', url: './img/flor.jpg'},
    {id: '6', url: 'https://miro.medium.com/max/1200/1*ADqbtRNCtoGE-1bvvoSQdg.jpeg'}
]

const criarAnterior = () => {

    // Criando o Span do botão anterior
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo;'

    return anteriorButton
}

const criarSliderItem = () => {
    // Cria a div das imagens
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')
    const slides = imagens.map( item =>
        `<div class="slider-item">
            <img src="${item.url}">
        </div>`
    )
    sliderContainer.innerHTML = slides.join("")

    return sliderContainer
}

const criarProximo = () => {

    // Cria o span proximo
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo;'

    return proximoButton
}

const criarSlide = () => {

    const slider = document.querySelector('.slider')

    slider.appendChild(criarSliderItem())
    slider.appendChild(criarAnterior())
    slider.appendChild(criarProximo())
}

criarSlide(imagens)

const sliderItemContainer = document.querySelector('.slider-item-container');
let sliderItems = document.querySelectorAll('.slider-item')

// Pegando o primeiro item e colocando no final com appendChild da div 
const proximoItem = () => {
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

// Pegando o ultimo item e colocando no começo
const anteriorItem = () => {
    const ultimoItem = sliderItems[sliderItems.length - 1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

setInterval(() => {
    proximoItem()
}, 4000)

document.getElementById('proximo').addEventListener('click', proximoItem);
document.getElementById('anterior').addEventListener('click', anteriorItem)

// Mostrando a Div do pai dos Sliders
// console.log(sliderItemContainer)