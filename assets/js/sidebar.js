const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const sidebarLinks = sidebar.querySelectorAll('.sidebar__nav .sidebar__link')
const body = document.querySelector('body')

const setOffset = function () {
    const sidebarWidth = sidebar.getBoundingClientRect().width + "px"
    main.style.setProperty('--offsetWidth', sidebarWidth)
}

setOffset()

window.addEventListener('resize', function () {
    setOffset()
})




barba.init({
    transitions: [{
        afterEnter({ next }) {
            const html = document.querySelector('html')
            delete html.dataset.open
            sidebarLinks.forEach(link => {
                delete link.dataset.active
                if (next.url.href === link.getAttribute('href')) {
                    link.dataset.active = ""
                }
            })
        },
        after({ current, next, trigger }) {
            window.scrollTo(0, 0);
        }
    }]
})

