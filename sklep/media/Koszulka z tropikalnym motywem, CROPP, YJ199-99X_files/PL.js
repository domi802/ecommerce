(function () {
    jQuery(function ($) {
        var $orderForm = $('#order-form');

        if ($orderForm.length > 0) {

            $orderForm.find('input[type="text"]').not('#dial-code').filter(':visible').each(function() {
                if (this.value.length > 0) {
                    if (!$orderForm.valid()) {
                        $orderForm.validate();
                    }

                    return false;
                }
            });
        }
    });
})();
