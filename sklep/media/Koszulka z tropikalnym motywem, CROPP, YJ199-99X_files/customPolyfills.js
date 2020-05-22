if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = forEachPolyfill;
}

if (!HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = forEachPolyfill;
}

function forEachPolyfill(callback) {
    var numberOfElements = this.length,
        itemPosition;

    for (itemPosition = 0; itemPosition < numberOfElements; itemPosition++) {
        callback(this.item(itemPosition));
    }
}

if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

(function(){
    function toArray() {
        return Array.prototype.slice.call(this, 0);
    }

    if (!NodeList.prototype.toArray) {
        NodeList.prototype.toArray = toArray;
    }

    if (!HTMLCollection.prototype.toArray) {
        HTMLCollection.prototype.toArray = toArray;
    }
})();

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/find#Polyfill
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this),
            length = list.length >>> 0,
            thisArg = arguments[1],
            value,
            index;

        for (index = 0; index < length; index++) {
            value = list[index];
            if (predicate.call(thisArg, value, index, list)) {
                return value;
            }
        }
        return undefined;
    };
}

Object.assign = function(target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
};
