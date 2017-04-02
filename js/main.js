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
            img.attr('class', 'lazy');
            img.attr('data-original', img.attr('src'));
            img.wrap('<div class="img-wrapper img-loading"></div>');
            img.after('<p class="img-caption">' + this.alt + '</p>');
            img.wrap('<a href="' + this.src + '" title="' + this.alt + '" class="fancybox" rel="article"></a>');
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
    $(function() {
        $("img.lazy").lazyload();
    });

    // activate fancybox
    $('a.fancybox').fancybox();
})(jQuery);
