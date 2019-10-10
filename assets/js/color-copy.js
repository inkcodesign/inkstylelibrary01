// const copyButtons = document.querySelectorAll('.brand-color__block')
const copyStuffInit = function () {

    var clipboard = new ClipboardJS('button.color-block__block');

    clipboard.on('success', function (e) {
        const trigger = e.trigger
        const helper = trigger.querySelector('.color-block__copy')
        const helperText = helper.innerText
        helper.innerText = "Copied!"
        trigger.focus()

        setTimeout(function () {
            trigger.blur()
            setTimeout(function () {
                helper.innerText = helperText
            }, 500)
        }, 1500)
    });

    const copyCode = document.querySelectorAll('.button.copy');
    copyCode.forEach(function (btn) {
        btn.addEventListener('click', copySvg);
    });

    function copySvg(element) {
        var svg = element.target.parentNode.parentNode.parentNode.querySelector('svg');
        var textBox = document.querySelector('.clipboard');
        const buttonText = element.target.innerText
        textBox.setAttribute('value', svg.outerHTML);
        textBox.select();
        document.execCommand('copy');
        element.target.innerText = "Copied!"
        element.target.focus()
        setTimeout(function () {
            element.target.blur()
            element.target.innerText = buttonText
        }, 1500)

    }
}

copyStuffInit()