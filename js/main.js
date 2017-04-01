(function () {
    function initCodeBlock() {
        var highlight = document.getElementsByClassName('highlight');
        for (var i = 0; i < highlight.length; i++) {
            // set code type
            var code_type = highlight[i].className.split(' ')[1];
            highlight[i].setAttribute('data-code-type', code_type.toUpperCase());
        }
    }

    initCodeBlock();
})();
