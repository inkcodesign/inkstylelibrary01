const navbarButton = document.querySelector('.fab__button')
const body = document.querySelector('body')

navbarButton.addEventListener('click', function () {
    if (body.dataset.open == "") {
        delete body.dataset.open

    } else {
        body.dataset.open = ""
    }
})