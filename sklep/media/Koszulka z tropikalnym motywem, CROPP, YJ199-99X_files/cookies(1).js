(function () {
    const data = window.getCookiesData();
    Mage.Cookies.path = data.path;
    Mage.Cookies.domain = data.domain;
    Mage.Cookies.main_store_language = data.main_store_language;
})();
