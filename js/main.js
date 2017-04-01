(function($) {
    // add code type
    $('.highlight').each(function () {
        var code_type = $(this).attr("class").split(' ')[1].toUpperCase();
        $(this).attr("data-code-type", code_type);
    })

    // add img wrapper and caption
    $('.post-content').each(function () {
        $(this).find('img').each(function () {
            $(this).wrap('<div class="img-wrapper"></div>');
            $(this).after('<span class="img-caption">' + this.title + '</span>');
        });
    })

    // cancel min-height of img wrapper after images all loaded
    $('#main-container').imagesLoaded().done(function () {
        $('.post-content').each(function () {
            $(this).find('.img-wrapper').each(function () {
                $(this).css('min-height', '0')
            })
        })
    })
})(jQuery);
