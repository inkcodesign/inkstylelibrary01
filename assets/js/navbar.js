const navbarButton = document.querySelector('.navbar__button')
const body = document.querySelector('body')

navbarButton.addEventListener('click', function () {
    if (body.dataset.open == "") {
        delete body.dataset.open

    } else {
        body.dataset.open = ""
    }
})