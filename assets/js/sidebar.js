const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')


const setOffset = function () {
    const sidebarWidth = sidebar.getBoundingClientRect().width + "px"
    main.style.setProperty('--offsetWidth', sidebarWidth)
}

setOffset()

window.addEventListener('resize', function () {
    setOffset()
})