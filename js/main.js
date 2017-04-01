(function () {
    function initCodeBlock() {
        let highlight = document.getElementsByClassName('highlight');
        for (let i = 0; i < highlight.length; i++) {
            // set code type
            let code_type = highlight[i].className.split(' ')[1];
            highlight[i].setAttribute('data-code-type', code_type.toUpperCase());
        }
    }

    initCodeBlock();
})();
