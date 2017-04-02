(function($) {
    // add code type
    $('.highlight').each(function() {
        var code_type = $(this).attr("class").split(' ')[1].toUpperCase();
        $(this).attr("data-code-type", code_type);
    })

    // add img wrapper and caption
    $('.post-content').each(function(i) {
        $(this).find('img').each(function() {
            var img = $(this);
            var origin_img_src = img.attr('src');

            // create compressed images' source path
            var path = origin_img_src.split('/');
            path.push("min__" + path.pop());
            min_img_src = path.join("/");

            // img.attr('class', 'lazy');
            // img.attr('data-original', min_img_src);
            img.attr('src', min_img_src);
            img.wrap('<div class="img-wrapper img-loading"></div>');
            img.after('<p class="img-caption">' + this.alt + '</p>');
            // img.after('<link class="prefetch-link" rel="prefetch" href="' + origin_img_src + '">');
            img.wrap('<a href="' + origin_img_src + '" title="' + this.alt + '" class="fancybox" rel="article"></a>');
        });
    })

    // cancel height of img wrapper after each image is loaded
    $('#main-container').imagesLoaded().progress(function(instance, image) {
        var wrapper = $(image.img).parents('.img-wrapper');
        if (!image.isLoaded) {
            wrapper.addClass('img-broken');
            wrapper.empty();
        }
        wrapper.removeClass('img-loading');
    })

    // activate lazyload
    /*
    $(function() {
        $("img.lazy").lazyload();
    });
    */

    // activate fancybox
    $('a.fancybox').fancybox();

    // origin images preload
    window.onload = function () {
        $('.post-content').each(function(i) {
            $(this).find('.fancybox').each(function() {
                var thisbox = $(this);
                thisbox.css("background-image", 'url(' + $(this).attr('href') + ')');
                thisbox.css("background-repeat", 'no-repeat');
                thisbox.css("background-position", '-9999px -9999px');
                setTimeout(function () {
                    thisbox.removeAttr('style');
                }, 1000 * 10);
            });
        })
    }
})(jQuery);
