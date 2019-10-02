const reels = document.querySelectorAll('.asset__reel-wrapper')

reels.forEach(function (reel) {
    var scrollable = reel.querySelector('.asset__reel');
    var items = scrollable.children;
    var prev = reel.querySelector('.asset__reel-button.prev');
    var next = reel.querySelector('.asset__reel-button.next');

    // Make the prev button disabled because
    // you can't 'go left' to begin with
    prev.disabled = true;

    // Scroll by half the container's width
    var scrollAmount = scrollable.offsetWidth / 2;

    // Scroll incrementally by button
    prev.addEventListener('click', function (e) {
        scrollable.scrollLeft += -scrollAmount;
    });
    next.addEventListener('click', function (e) {
        scrollable.scrollLeft += scrollAmount;
    });

    function disableEnable() {
        prev.disabled = scrollable.scrollLeft < 1;
        next.disabled = scrollable.scrollLeft === scrollable.scrollWidth - scrollable.offsetWidth;
    }

    var debounced;
    scrollable.addEventListener('scroll', function () {
        window.clearTimeout(debounced);
        debounced = setTimeout(disableEnable, 200);
    });
});

