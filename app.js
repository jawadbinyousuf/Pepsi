const navBar = document.querySelector('.navbar')
const barBtn = document.querySelector('#bar-btn')
const closeBtn = document.querySelector('#close-btn')

barBtn.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})


closeBtn.addEventListener('click', () =>{
    navBar.classList.remove('active')
})

window.onscroll = () =>{
    navBar.classList.remove('active')
}