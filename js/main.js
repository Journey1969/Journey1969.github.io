(function($) {
    // window onload event flow
    /*function addLoadEvent(func) {
        var old_onload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                old_onload();
                func();
            }
        }
    }*/

    // add img wrapper and caption
    function wrapImages() {
        $('.post-content').each(function(i) {
            $(this).find('img').each(function() {
                var img = $(this);
                var origin_img_src = img.attr('src');
                var external_img = img.parent()[0].nodeName === "P";

                // create compressed image's source path
                var path = origin_img_src.split('/');
                path.push("min__" + path.pop());
                min_img_src = path.join("/");

                // start decorating img
                img.addClass('lazy');
                img.attr('data-original', external_img ? origin_img_src : min_img_src);
                img.attr('src', external_img ? origin_img_src : '/images/loading.png');

                // start wrapper
                img.wrap('<div class="img-wrapper"></div>');
                img.after('<p class="img-caption">' + this.alt + '</p>');
                img.wrap('<a href="' + origin_img_src + '" title="' + this.alt + '" class="fancybox" rel="article"></a>');

                // start loading original image after this image is lazyloaded
                img.on('load', function(err) {
                    if (img.attr('src') !== '/images/loading.png'){
                        $(this).addClass('img-loaded');
                        $(this).css('background-image', 'url(' + img.attr('src').replace('min__', '') + ')');
                    }
                })
            });
        })
    }

    // replace .fancybox by .image-not-found when image is broken
    function handleImagesNotFound() {
        $('.post-content').each(function () {
            $(this).imagesLoaded().progress(function(instance, image) {
                var wrapper = $(image.img).parents('.img-wrapper');
                if (!image.isLoaded) {
                    wrapper.addClass('img-broken');
                    wrapper.find('.fancybox').remove();
                    wrapper.prepend('<img class="img-not-found" src="/images/image-not-found.png">')
                }
            })
        })
    }

    // add code type
    function addCodeType() {
        $('.highlight').each(function() {
            var code_type = $(this).attr("class").split(' ')[1].toUpperCase();
            $(this).attr("data-code-type", code_type);
        })
    }

    // activate lazyload
    function activateLazyload() {
        $('.lazy').lazyload({
            effect: 'fadeIn',
            threshold : 200
        });
    }

    // activate fancybox
    function activateFancybox() {
        $('a.fancybox').fancybox();
    }

    wrapImages();
    activateLazyload();
    handleImagesNotFound();
    activateFancybox();
    addCodeType();

})(jQuery);
