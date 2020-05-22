
var Librarian = {
    prepareAjaxOptions: function(baseOptions, baseCallback, responseExtend) {
        if (baseCallback) {
            Librarian.prepareAsyncAjaxOptions(baseOptions, baseCallback);
            return;
        }

        Librarian.prepareSyncAjaxOptions(baseOptions, responseExtend);
    },
    prepareAsyncAjaxOptions: function(baseOptions, baseCallback, overrideCallbacks) {
        overrideCallbacks = overrideCallbacks || {};
        baseOptions.success = overrideCallbacks.success || function(response) {
                baseCallback(response, true);
            };
        baseOptions.error = overrideCallbacks.error || function(response) {
                baseCallback(response, false);
            };
    },
    prepareSyncAjaxOptions: function(baseOptions, responseExtend, errorCallback) {
        baseOptions.async = false;
        baseOptions.error = errorCallback || function(data) {
                data.responseText = {
                    'status': false,
                    'content': {'message': global.i18n.general_error}
                };

                jQuery.extend(data.responseText, responseExtend || {});

                return data;
            };
    },
    sendAjaxAndReturnIfAsyncFalse: function(ajaxOptions, hasCallback) {
        if (hasCallback) {
            jQuery.ajax(ajaxOptions);
            return;
        }

        var response = jQuery.ajax(ajaxOptions).responseText;
        return typeof response === 'object' ? response : JSON.parse(response);
    },
    getProduct: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/product/get/',
            'data': data,
            'type': 'GET',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    checkProducts: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/product/check/',
            'data': data,
            'type': 'GET',
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    registration: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/customer/register/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    authorization: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/customer/login/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    passwordRecovery: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/customer/recover/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    shareResource: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/share/email/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getQuickshop: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/quickBuy/get/',
            'data': data,
            'type': 'GET',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    subscribeNewsletter: function (data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/newsletter/subscribe/',
            'data': data,
            'type': 'POST',
            'xhrFields': {withCredentials: true},
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getShoppingCart: function(data, callback) {
        var ajaxOptions = {
            url: 'https://www.cropp.com/pl/pl/ajx/cart/get/',
            type: 'GET',
            'timeout': 30000,
            dataType: 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback, {'content': {'count': 0}});
    },
    addProductToCart: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/cart/add/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    removeCartProduct: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/cart/remove/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    updateShoppingCart: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/cart/update/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    moveFromWishlist: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/wishlist/move/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    addWishlistProduct: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/wishlist/add/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    removeWishlistProduct: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/wishlist/remove/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    addComingsoonProduct: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/comingsoon/add/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    saveComingsoonProduct: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/comingsoon/save/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getStores: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/stores/pickup/',
            'type': 'POST',
            'data': data,
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getGlsPacketPoints: function (data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/packetpoint/search/',
            'type': 'POST',
            'data': data,
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    searchAccesspoint: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/accesspoint/search/',
            'type': 'POST',
            'data': data,
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getAccesspoint: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/accesspoint/getAccesspoint/',
            'type': 'POST',
            'data': data,
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getStoresAll: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/stores/all/',
            'type': 'GET',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getStoresKML: function() {
        return '//www.cropp.com/pl/pl/new_kml/cropp_stores_pl_pl_20200522.kml';
    },
    getAllStoresKML: function() {
        return '//www.cropp.com/pl/pl/new_kml/cropp_stores_pl_20200522.kml';
    },
    getAvailableCities: function(callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/stores/cities/',
            'type': 'GET',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getCheckAvailability: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/stores/check/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    sendCustomerNotice: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/service/send/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    searchOrder: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/search/search/',
            'data': data,
            'type': 'POST',
            'timeout': 30000,
            'dataType': 'json'
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getProductList: function(data, callback) {
        var ajaxOptions = {
            'url': 'https://www.cropp.com/pl/pl/ajx/recommended/getProductList/',
            'data': data,
            'type': 'GET',
            'timeout': 30000,
            'dataType': 'json'
        };

        if (!!callback) {
            Librarian.prepareAsyncAjaxOptions(ajaxOptions, callback, {
                error: function(data) {
                    data.responseText = {
                        'status': false,
                        'content': {
                            'message': global.i18n.general_error
                        }
                    };
                    callback(data);
                }
            })
        } else {
            Librarian.prepareSyncAjaxOptions(ajaxOptions);
        }

        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getBlocks: function(data, callback) {
        var ajaxOptions = {
            type: 'GET',
            url: 'https://www.cropp.com/pl/pl/varnish/ajax/index/',
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 30000
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    getCategoryProducts: function(data, callback) {
        var ajaxOptions = {
            type: 'GET',
            url: 'https://www.cropp.com/pl/pl/ajx/product/getproductsbycategory/',
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 90000
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    },
    accountExists: function(data, callback) {
        var ajaxOptions = {
            type: 'POST',
            url: 'https://www.cropp.com/pl/pl/ajx/customer/accountExists/',
            data: data,
            dataType: "json",
            timeout: 90000
        };

        Librarian.prepareAjaxOptions(ajaxOptions, callback);
        return Librarian.sendAjaxAndReturnIfAsyncFalse(ajaxOptions, !!callback);
    }
};