//import CSS
var head = document.getElementsByTagName('head')[0],
	css = document.createElement('link');
	
css.rel = 'stylesheet';
css.href = '//www.cropp.com/special/direct/style.css?4';
head.appendChild(css);

/*

(function(){
	
if (document.location.href.match(".[com|pl]/([a-z]{2})")[1]!=="ua") return;

if (document.getElementById('quickCart')) document.getElementById('quickCart').style.display = "none"; 
if (document.getElementsByClassName('add-to-cart').length) document.getElementsByClassName('add-to-cart')[0].style.display = "none";
	
var getCookie = function(cookieName) {
	var name = cookieName + '=',
	    decode = decodeURIComponent(document.cookie),
	    cookies = decode.split(';');
	for (var index = 0; index <cookies.length; index++) {
	    var val = cookies[index];
	    while (val.charAt(0) == ' ') {
	        val = val.substring(1);
	    }
	    if (val.indexOf(name) == 0) {
	        return val.substring(name.length, val.length);
	    }
	}
	return null;
},
setCookie = function(cookieName, cookieValue, exdays) {
    var d = new Date(),
		exdays = exdays || 90;
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/;secure";
};

if (getCookie('ua-off')) return;

var	T = {
	"uk": "У зв’язку з труднощами при транспортуванні товарів, онлайн-продаж в магазині Cropp буде затримано до отримання нової інформації. Слідкуйте, будь ласка, за повідомленнями на нашій сторінці. Просимо вибачення за незручності.",
	"ru": "В связи с усложнённой транспортировкой товаров, интернет продажа в магазине Cropp приостановлена до получения новой информации. Просим, пожалуйста, следить за новостями на нашем сайте. Приносим свои извинения за доставленные неудобства.",
	"en": ""
	
}, lang=document.location.href.match(".[com|pl]/.{2}/([a-z]{2})/")[1]||'en';


var page = document.getElementById('page');
var body = document.body;

var barCnt = document.createElement('DIV');
barCnt.className = 'offbar';

var barInner = document.createElement('DIV');
barInner.className = 'offbar-inner';
barCnt.appendChild(barInner);

var barMsg = document.createElement('DIV');
barMsg.className = 'offbar-msg';
barMsg.innerHTML = T[lang];
barInner.appendChild(barMsg);

var btnClose = document.createElement('button');
btnClose.className = 'offbar-closebtn';
btnClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="0 0 14 14"><path fill-rule="evenodd"  fill="rgb(255,255,255)" d="M13.985,12.723 L12.926,13.764 L6.992,7.949 L1.058,13.764 L0.001,12.723 L5.932,6.910 L0.001,1.097 L1.058,0.055 L6.992,5.871 L12.926,0.055 L13.985,1.097 L8.052,6.910 L13.985,12.723 Z"/></svg>';
btnClose.addEventListener('click', function(e){
	barCnt.style.display = 'none';
	body.style.marginBottom = '0';
	setCookie('ua-off', '1', 1);
});

barInner.appendChild(btnClose);

document.body.appendChild(barCnt);

body.style.marginBottom = barCnt.offsetHeight + 'px';

})();
*/