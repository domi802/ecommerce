!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return l}));var r=2592e3,o="__",i={atid:"atid",ath:"ath",atid2:"atid2",ath2:"ath2",atu:"atu",ats:"ats",att:"att"},a={source_tid:"wph_tid",source_cid:"wph_cid",source_uid:"wph_uid",source_vid:"wph_vid",source_hash:"wph_hash",source_host:"wph_host",source_clid:"wpclid"},c={user:"wph_a",session:"wph_s"},s={wpclid:{name:"__wph_clid"},wph_a:{duration:31536e3},wph_s:{duration:1800}},u=10,l="wph_init"},function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return l}));var r=n(0);function o(t,e,n){var r,o=new Date;n?(o.setTime(o.getTime()+1e3*n),r="; expires=".concat(o.toGMTString())):r="",window.document.cookie="".concat(t,"=").concat(e).concat(r,"; path=/")}function i(t){for(var e="".concat(t,"="),n=window.document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(e))return o.substring(e.length,o.length)}return null}function a(t,e,n){o(t,e+"."+(new Date).getTime(),n)}function c(t){var e=i(t);if(!e)return null;var n=e.split(".");if(n.length>1&&!isNaN(n.slice(-1)[0])){var r=n.pop(),o=new Date;return o.setTime(r),{value:n.join("."),date:o}}return{value:e,date:null}}function s(t){o(t,"",-1)}function u(t){return r.a[t]&&r.a[t].name||"".concat(r.c).concat(t)}function l(t){return r.a[t]&&r.a[t].duration||r.b}e.a={toQueryString:function(t){return Object.keys(t).map((function(e){var n=escape(e);return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(t[n]))})).join("&")},getQueryParams:function(t){var e,n={},r=/[?&]?([^=]+)=([^&]*)/g;for(t=(t=t.split("?").pop()).split("+").join(" ");e=r.exec(t);)n[decodeURIComponent(escape(e[1]))]=decodeURIComponent(escape(encodeURIComponent(e[2])));return n},parseUtm:function(){return location.search.substring(1).split("&").reduce((function(t,e){if(e.indexOf("utm_")>-1){var n=e.split("=");t[n[0]]=n[1]}return t}),{})},hostFromUrl:function(t){var e=t.indexOf("://")>-1;return t.split("/")[e?2:0]},setCookie:o,getCookie:i,setCompoundCookie:a,getCompoundCookie:c,deleteCookie:s}},function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"j",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h}));var r=["https://pixel.wp.pl/api/collect"],o="https://pixel.wp.pl/api/logger",i="https://pixel.wp.pl/api/fr",a="https://pixel.wp.pl/w/cs.html",c="https://panel.domodi.pl/ecommerce",s="//allani.pl/affi/track",u="https://trackingshoptransactions.domodi.pl/api/TrackingShopTransaction/TrackShopTransaction",l="visitor_wp_tr",d="wp_tr",h="wp_tr"},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0);function i(){return String(Math.floor(Math.random()*Math.pow(10,o.e)))}function a(t){return Object(r.c)(Object(r.e)(t))}function c(t,e){var n=Object(r.e)(t);e?Object(r.f)(n,e,Object(r.d)(t)):Object(r.b)(n)}var s=n(2);function u(t){function e(t,e){return t<<e|t>>>32-e}function n(t){var e,n="";for(e=7;e>=0;e--)n+=(t>>>4*e&15).toString(16);return n}var r,o,i,a,c,s,u,l,d,h=new Array(80),f=1732584193,p=4023233417,m=2562383102,g=271733878,y=3285377520,b=(t=function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e}(t)).length,v=new Array;for(o=0;o<b-3;o+=4)i=t.charCodeAt(o)<<24|t.charCodeAt(o+1)<<16|t.charCodeAt(o+2)<<8|t.charCodeAt(o+3),v.push(i);switch(b%4){case 0:o=2147483648;break;case 1:o=t.charCodeAt(b-1)<<24|8388608;break;case 2:o=t.charCodeAt(b-2)<<24|t.charCodeAt(b-1)<<16|32768;break;case 3:o=t.charCodeAt(b-3)<<24|t.charCodeAt(b-2)<<16|t.charCodeAt(b-1)<<8|128}for(v.push(o);v.length%16!=14;)v.push(0);for(v.push(b>>>29),v.push(b<<3&4294967295),r=0;r<v.length;r+=16){for(o=0;o<16;o++)h[o]=v[r+o];for(o=16;o<=79;o++)h[o]=e(h[o-3]^h[o-8]^h[o-14]^h[o-16],1);for(a=f,c=p,s=m,u=g,l=y,o=0;o<=19;o++)d=e(a,5)+(c&s|~c&u)+l+h[o]+1518500249&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;for(o=20;o<=39;o++)d=e(a,5)+(c^s^u)+l+h[o]+1859775393&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;for(o=40;o<=59;o++)d=e(a,5)+(c&s|c&u|s&u)+l+h[o]+2400959708&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;for(o=60;o<=79;o++)d=e(a,5)+(c^s^u)+l+h[o]+3395469782&4294967295,l=u,u=s,s=e(c,30),c=a,a=d;f=f+a&4294967295,p=p+c&4294967295,m=m+s&4294967295,g=g+u&4294967295,y=y+l&4294967295}return(d=n(f)+n(p)+n(m)+n(g)+n(y)).toLowerCase()}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={setMatchedParamsAsCookie:function(t,e,n){Object.keys(e).forEach((function(o){var i=e[o];t.hasOwnProperty(i)&&r.a.setCookie(Object(r.e)(i),t[i],n)}))},generateTransactionSignature:function(t){var e=["t"],n=Object.keys(t).reduce((function(n,r){return-1===e.indexOf(r)&&(n[r]=t[r]),n}),{});return"".concat(o.c,"wph.").concat(u(r.a.toQueryString(n)))},getDebugInfo:function(t){return"debug"===t[this.name]},getCookies:function(){var t=o.c;return{allani:{id:r.a.getCookie(t+o.f.atid),hash:r.a.getCookie(t+o.f.ath)},domodi:{id:r.a.getCookie(t+o.f.atid2),hash:r.a.getCookie(t+o.f.ath2),shopId:r.a.getCookie(t+o.f.ats),userId:r.a.getCookie(t+o.f.atu),time:r.a.getCookie(t+o.f.att)},global:Object.keys(o.d).reduce((function(t,e){return t[e]=r.a.getCookie(Object(r.e)(o.d[e])),t}),{}),session:Object.keys(o.h).reduce((function(t,e){return t[e]=a(o.h[e])&&a(o.h[e]).value,t}),{})}},getBaseData:function(){return{k:this.key,h:location.hostname,r:document.referrer,l:location.href,t:Date.now(),v:"4.0.18"}},getSessionData:function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[o.h[n]]=t[n]);return this.newSession&&(e[o.g]=1),e},createPixel:function(t,e){var n=e?[e]:s.e,o=u(r.a.toQueryString(t));return t.i=o,n.map((function(e){var n=new Image(1,1),o=e.indexOf("?")>-1;return n.src="".concat(e).concat(o?"&":"?").concat(r.a.toQueryString(t)),n}))},contentMapper:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===t.content_ids&&t.contents&&(t.content_ids=t.contents.map((function(t){return t.id?t.id:0}))),Object.keys(t).reduce((function(e,n){var r=t[n];if(r||0===r)switch(n){case"content_ids":e.c_item_ids=r,e.c_content_ids=r;break;case"contents":e.c_contents=JSON.stringify(r);break;case"source_clid":e.wph_clid=r;break;default:e["c_"+n]=r}return e}),{})},warn:function(t){window.console.warn("WPH Pixel:",t,"See",s.j,"for more information.")},trackSession:function(){this.newSession=!1;var t=r.a.hostFromUrl(document.referrer),e=window.location.host,n=r.a.parseUtm(),s=d(d({},r.a.getQueryParams(window.location.search)),r.a.getQueryParams(document.referrer))[o.d.source_clid],u=a(o.h.user),l=a(o.h.session);t&&t!==e||n.utm_source||s||!u||!l||l.date.getDate()!==(new Date).getDate()?(this.newSession=!0,u||c(o.h.user,i()),c(o.h.session,i())):(c(o.h.session,l.value),c(o.h.user,u.value))}};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"actions",{init:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.key=t;var o=r.a.parseUtm();if((n=g(g({},n),o))&&"object"===p(n)&&n.constructor===Object){var i=n.overAll;if(this.blockLegacyRequest=n.blr,this.blockTransactionSignature=n.bts,delete n.overAll,delete n.blr,delete n.bts,i)this.opt=n;else{var a={e:"init"},c=this.common.getBaseData.call(this),s=this.common.contentMapper.call(this,n),u=this.common.getCookies.call(this),l=this.common.getSessionData.call(this,u.session),d=this.common.contentMapper.call(this,{source_tid:u.global.source_tid});u.domodi.id&&(d.dtid=u.domodi.id),u.allani.id&&(d.atid=u.allani.id),u.global.source_clid&&(d.wph_clid=u.global.source_clid),this.common.createPixel.call(this,g(g(g(g(g({},a),c),s),l),d))}}this.modules.forEach((function(t){e.module=g(g({},e.module),t)})),window.isTest&&window.setTracker(this)},track:function(t){if("string"==typeof t&&this.module.events.hasOwnProperty(t)){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.send.apply(this,[t].concat(n))}else this.common.warn("You are sending a non-standard event '".concat(t,"'."))},trackCustom:function(t){var e=p(t);if("string"===e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.send.apply(this,[t].concat(r))}else this.common.warn("The event name must be of type - string, but you provide a type - ".concat(e))}});var n=g(g({},o.f),o.d),i=g(g({},r.a.getQueryParams(window.location.search)),r.a.getQueryParams(document.referrer));this.common=f,this.name=e,this.queue=[],this.key=null,this.module={events:{}},this.modules=[],this.common.setMatchedParamsAsCookie(i,n,o.b),this.debug=this.common.getDebugInfo.call(this,i),this.common.trackSession.call(this)}var e,n,i;return e=t,(n=[{key:"registerModule",value:function(t){this.modules.push(t)}},{key:"validateContent",value:function(t){for(var e in t)if(this.module.content&&this.module.content.hasOwnProperty(e)&&(null===t[e]||void 0===t[e]||this.module.content[e].type.name!==t[e].constructor.name))return this.common.warn("'".concat(e,"' must be of type '").concat(this.module.content[e].type.name,"'")),!1;return!0}},{key:"send",value:function(t,e){var n=this.common.getCookies.call(this),o=this.common.getBaseData.call(this),i=this.common.contentMapper.call(this,e),a=this.common.contentMapper.call(this,this.opt),c=this.common.contentMapper.call(this,r.a.parseUtm()),s=this.common.contentMapper.call(this,n.global),u=this.common.getSessionData.call(this,n.session),l={e:t};n.domodi.id&&(l.dtid=n.domodi.id),n.allani.id&&(l.atid=n.allani.id);var d=g(g(g(g(g(g(g({},o),l),i),a),c),s),u);this.validateContent(e),this.queue.push(d),"function"==typeof this.module.events[t]?this.module.events[t].call(this,d,n):this.common.createPixel.call(this,d)}},{key:"push",value:function(t){if("string"==typeof t&&this.actions.hasOwnProperty(t)){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.actions[t].apply(this,[].concat(n))}else this.common.warn("You are sending a non-standard action ".concat(t,"."))}}])&&y(e.prototype,n),i&&y(e,i),t}(),w=Object.freeze({events:{Purchase:function(t,e){var n=this.common.generateTransactionSignature.call(this,t);r.a.getCookie(n)?this.common.warn("Transaction already sent."):(this.common.createPixel.call(this,t),this.blockLegacyRequest||(e.domodi.id&&this.common.createPixel.call(this,function(t,e){return{productIds:e.c_item_ids,orderValue:e.c_value,shopId:t.domodi.shopId,userId:t.domodi.userId,timeOfEvent:(new Date).toISOString(),timeOfVisit:t.domodi.time,atid2:t.domodi.id,ath2:t.domodi.hash,orderId:e.c_transaction_id||""}}(e,t),s.h),e.allani.id&&this.common.createPixel.call(this,function(t,e){var n={pids:e.c_item_ids,oval:e.c_value,tid:t.allani.id,th:t.allani.hash,ver:e.v};return e.c_transaction_id&&(n.oid=e.c_transaction_id),n}(e,t),s.d)),this.blockTransactionSignature||r.a.setCookie(n,!0,o.b))},ViewContent:{},AddToCart:{},CustomEvent:{},PageView:{},ViewPage:{}},content:{value:{type:Number},id:{type:String},shipping_cost:{type:Number},discount_code:{type:String},in_stock:{type:Boolean},name:{type:String},currency:{type:String},ean:{type:String},sizes:{type:Array},quantity:{type:Number},transaction_id:{type:String},content_ids:{type:Array},content_type:{type:String},content_category:{type:String},content_category_id:{type:String}}});!function(t,e,n){try{var o=[],i=t.DomodiTrackObject||t.WphTrackObject;i&&i.constructor===Array?o=i:o.push(i||"wph"),o.forEach((function(e){var n=new v(e),r=t[e];n.registerModule(w),r&&r.queue&&r.queue.constructor===Array&&r.queue.forEach((function(t){return n.push.apply(n,t)})),t[e]=n.push.bind(n)}))}catch(t){if(-1!==e.href.indexOf("http")){var a=new Image(1,1),c={t:"error",v:"4.0.18",h:e.href,m:t.message,ua:n.userAgent};t.stack&&(c.s=t.stack),a.src=s.i+"?"+r.a.toQueryString(c)}console.warn(t)}}(window,location,navigator)},function(t,e,n){t.exports=n(3)}]);
//# sourceMappingURL=tr.js.map