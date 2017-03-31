(function () {
    let header = document.getElementById('header');

    let color_counter = 60,
        lightening = true;

    setInterval(function () {
        if (lightening) {
            if (color_counter < 220) {
                color_counter++;
            } else {
                lightening = false;
            }
        } else {
            if (color_counter > 60) {
                color_counter--;
            } else {
                lightening = true;
            }
        }

        header.style.background = "-webkit-linear-gradient(left, rgb(40, " + color_counter + ", 210), rgb(40, " + (280 - color_counter) + ", 210))"
    }, 50);
})();
