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
                var loading_img_base64 = 'data:image/png;base64,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';
                var origin_img_src = img.attr('src');
                var external_img = img.parent()[0].nodeName === "P";

                // create compressed image's source path
                var path = origin_img_src.split('/');
                path.push("min__" + path.pop());
                min_img_src = path.join("/");

                // start decorating img
                img.addClass('lazy');
                img.attr('data-original', external_img ? origin_img_src : min_img_src);
                img.attr('src', external_img ? origin_img_src : loading_img_base64);

                // start wrapper
                img.wrap('<div class="img-wrapper"></div>');
                img.after('<p class="img-caption">' + this.alt + '</p>');
                img.wrap('<a href="' + origin_img_src + '" title="' + this.alt + '" class="fancybox" rel="article"></a>');

                // start loading original image after this image is lazyloaded
                img.on('load', function(err) {
                    if (img.attr('src') !== loading_img_base64){
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
                    var image_not_found_img_base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAB4CAMAAAB/yz8SAAAANlBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7d3d3///+Zpn+rAAAAEHRSTlMAbrHa9R/HV5Pjo+zRgj28z4wsTgAABKpJREFUeNrs0EENADAIADEkzL/aJSjg/q2EzuNMVssaTmTJWrICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWZ8dOhYAAAAAGORvPYb9hdAga5A1yBpkDbIGWYOsQdYga5A1yBpkDbIGWYOs2CuzHcdBKIhy2Vdb9f8/O8aUxDRSxoombvWS8+SwuTiQ6yd4y3qCt6wneMu6B40D/Zb1ubIMToy6AUEnzMQdRa5DTUT9H0F/F1nmWta6l/oyWUReI8tJBbSoWwgNB3EebxF3IYt4IMtg/zqyzqSi7gIHloKEt+xC1hpKfpUs7D9OlsGBcr4A9fjtNB9IrAWwXhTZvD3700jBBpPdKssYQFZZW39N0u5DOZeLE5Ta3xBnBeSiY1kzlogJSFn9HdPWcIusaJnbJRzMelNAdjZY9oMpOBPJrbI2i7TIihjY8IQsj/mGh7K4llcfY/oXy9qa6UmitASUCi/iz3rDMSaKaAs0deAsUJvEAqZogD2mViCtsvrkPGVxcBbxtBX6kxdx/5S1j3CGtkLih9XlsaxrHkjYRbLlITNmb3h5zdLM4bqCzIB5dC2XQ/PwXBopnKVWD7RVliq9k5M5OPCCmcuaRYThlOdYAyylUMB1BYzr+U9w5QZZ3GgGiuoEoKpONCwDPM/TTaeNFBk8y61bXGUJULkrLs/kBggPZWU54YWrZ0qqfiiLRaKwb8a8QdasxH7udcKIp0Q/PzOj+Q+75rZbIQhEUbDcirfw/z9bkQ2TYImZ9OCDZT+09IiezWLAGVJ9uYP+NCFIjCp13sreNTVhQfCE+cPDWrBoEmgcaHWENV2HvslDKbIwSOqqAqmGlaJhplEhNChy72BRTwSmv4dFc/E8LG0KD+pJXUMTFq28Mir8oub9nkWW0LyHhYc8DQuv4BtYMstWsGBfbf8FVkwhV9jAq6BehoJUw8Iy4izDGhZ/GcLms7BgdS7ZNjrU02zbsJCF7KwNnmD9ZYN/fs/CB5Q66GKdUoe9DSunOqzUgWBdUwcwszewtpIir89GliklB9z4KimFdesvsIrfZlLquEkp7oGFBizY/FRSmgG43PDZu9F5ajbsWbGOmMMBBfSCkSh3cIs6ejiDJQZpDBGxQWzUdB5UKRA+Wt65Jiy4m1FQ6YQcnubjgkTEGpH5WeALJvaJXy31n2GZXHkuqeGFT41ZWKp215DkvpD4uFBVqPgg06V3aCGyqUYhnatgqir3dHVvF9KieFKnzSlfXkrS5wR9kUdYf+pYGY2Jzn8lGhLHI8pYsZcsMR3RIPTzqYtanCDRA05N9RHNrgWkTXz8xdRvRzSe5uL0tIkU3nRPyCPJvhcrGLD66YT1DvWH5WMq8w51hKXTz/P05R3qCEstPr4N37MKO8JaA2TEW9Qxspz5ji8/KV6j8b8OA9apAYuhAYuhAYuhAYuhAYuhAYuhAYuhAYuhAYuhAYuhAYuhAeunHTomAACAYRjk3/UsLEc/kEAgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyApkBbICWYGsQFYgK5AVyAomWTzJSg5RLsTF7ebHuwAAAABJRU5ErkJggg==';
                    wrapper.prepend('<img class="img-not-found" src="' + image_not_found_img_base64 + '">')
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
