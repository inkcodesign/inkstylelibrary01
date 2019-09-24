const navbarButton = document.querySelector('.fab__button')
const sidebarButton = document.querySelector('#sidebar__close')
const html = document.querySelector('html')



navbarButton.addEventListener('click', function () {
    if (html.dataset.open == "") {
        delete html.dataset.open

    } else {
        html.dataset.open = ""
    }
})

sidebarButton.addEventListener('click', function () {
    delete html.dataset.open
})