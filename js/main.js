(function($) {
    // add code type
    $('.highlight').each(function() {
        var code_type = $(this).attr("class").split(' ')[1].toUpperCase();
        $(this).attr("data-code-type", code_type);
    })

    // add img wrapper and caption
    $('.post-content').each(function() {
        $(this).find('img').each(function() {
            var img = $(this);
            img.attr('class', 'lazy');
            img.attr('data-original', img.attr('src'));
            img.wrap('<div class="img-wrapper img-loading"></div>');
        });
    })

    // cancel height of img wrapper after each image is loaded
    $('#main-container').imagesLoaded().progress(function(instance, image) {
        var wrapper = $(image.img).parent();
        if (image.isLoaded) {
            $(image.img).after('<p class="img-caption">' + image.img.alt + '</p>');
        } else {
            wrapper.addClass('img-broken');
        }
        wrapper.removeClass('img-loading');
    })

    // lazyload
    $(function() {
        $("img.lazy").lazyload();
    });
})(jQuery);
