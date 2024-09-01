(function ($, Drupal, once) {

    var originalAddClassMethod = jQuery.fn.addClass;
    jQuery.fn.addClass = function() {
        var result = originalAddClassMethod.apply(this, arguments);
        jQuery(this).trigger('cssClassChanged');
        return result;
    };

    Drupal.behaviors.ViewsAccordionAria = {
        attach: function (context, settings) {

            //once('ViewsAccordionAria-Override', '.view-grouping-header', context).forEach(function (element) {
                $('.view-grouping-header', context).click(function (element) {
                    var headerStatus = $(this).hasClass('active');
                    if (headerStatus === true) {
                        $('.accordion-trigger', element).attr('aria-expanded', 'false');
                    } else {
                        $('.accordion-trigger', element).attr('aria-expanded', 'true');
                    }
                });
                $('.accordion-trigger', context).click(function(element) {
                    var headerStatus = $(this).parent('.view-grouping-header').hasClass('active');
                    if (headerStatus === true) {
                        $(this).attr('aria-expanded', 'false');
                    } else {
                        $(this).attr('aria-expanded', 'true');
                    }
                });
            //});
        }
    };

})(jQuery, Drupal, once);
