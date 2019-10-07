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




// // import barba from '@barba/core';

// // basic default transition (with no rules and minimal hooks)
// barba.init({
//     transitions: [{
//         leave({ current, next, trigger }) {
//             // do something with `current.container` for your leave transition
//             // then return a promise or use `this.async()`
//         },
//         afterEnter({ current, next, trigger }) {
//             // do something with `next.container` for your enter transition
//             // then return a promise or use `this.async()`

//             const html = document.querySelector('html')
//             delete html.dataset.open
//         }
//     }]
// });

