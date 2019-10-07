const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')
const sidebarLinks = sidebar.querySelectorAll('.sidebar__link')
const body = document.querySelector('body')

const setOffset = function () {
    const sidebarWidth = sidebar.getBoundingClientRect().width + "px"
    main.style.setProperty('--offsetWidth', sidebarWidth)
}

setOffset()

window.addEventListener('resize', function () {
    setOffset()
})




// import barba from '@barba/core';

// basic default transition (with no rules and minimal hooks)
barba.init({
    transitions: [{
        leave({ current, next, trigger }) {
            // do something with `current.container` for your leave transition
            // then return a promise or use `this.async()`
        },
        afterEnter({ next }) {
            // do something with `next.container` for your enter transition
            // then return a promise or use `this.async()`
            // console.log(data.current.url)


            const html = document.querySelector('html')
            delete html.dataset.open
            body.scrollTop = 0
            sidebarLinks.forEach(link => {
                delete link.dataset.active
                if (next.url.href === link.getAttribute('href')) {
                    link.dataset.active = ""
                }
            });
        }
    }]
});

