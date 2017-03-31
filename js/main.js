(function () {
    let header = document.getElementById('header');

    const COLOR_MIN = 120, COLOR_MAX = 220, GAP = 100;

    let red = COLOR_MIN,
        green = COLOR_MAX,
        blue = COLOR_MAX,
        status = 1;

    let light_red = COLOR_MIN,
        light_green = COLOR_MAX,
        light_blue = COLOR_MAX;

    setInterval(function () {
        switch (status) {
            case 1:
                if (green >= COLOR_MIN) { green--; light_green = green - GAP;}
                else { status = 2; }
                break;
            case 2:
                if (red <= COLOR_MAX) { red++; light_red = red - GAP;}
                else { status = 3; }
                break;
            case 3:
                if (red >= COLOR_MIN) { red--; light_red = red - GAP;}
                else { status = 4; }
                break;
            case 4:
                if (green <= COLOR_MAX) { green++; light_green = green - GAP;}
                else { status = 1; }
                break;
        }

        let color1 = 'rgb(' + light_red + ', ' + light_green + ', ' + light_blue + ')';
        let color2 = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

        header.style.background = "-webkit-linear-gradient(left, " + color1 + " ," + color2 + " )"
    }, 50);
})();
