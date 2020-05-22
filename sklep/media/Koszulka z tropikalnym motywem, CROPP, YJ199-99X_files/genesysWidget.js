LPP.common.genesysWidget = function() {
    if (!LegacyBridge.getStoreConfig('genesys/chatEnabled')) {
        return;
    }

    this.genesysChatOverlay = {};
    this.displayChatButton = LegacyBridge.getStoreConfig('genesys/chatButtonEnabled');

    this.genesysConfig = this.buildConfig();
    this.genesysChatPlugin = this.genesysChatPlugin.bind(this);
    this.onGenesysChatOpen = this.onGenesysChatOpen.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this.registerOverlayExtension = this.registerOverlayExtension.bind(this);

    if (!window._genesys) {
        window._genesys = {};
    }

    window._genesys.widgets = this.genesysConfig;
    this.loadScript();
};

LPP.common.genesysWidget.prototype.buildConfig = function() {
    var brand =  LegacyBridge.getStoreConfig('brandName');
    var genesysConfig = {
        main: {
            lang: LegacyBridge.getStoreConfig('genesys/languageCode'),
            i18n: LegacyBridge.getStoreConfig('genesys/url/translation'),
            theme: brand,
            themes: {},
            debug: false,
            mobileMode: 'auto',
            mobileModeBreakpoint: 600
        },
        webchat: {
            dataURL: LegacyBridge.getStoreConfig('genesys/url/api'),
            userData: {},
            uploadsEnabled: true,
            emojis: true,
            confirmFormCloseEnabled: true,
            actionsMenu: true,
            charCountEnabled: true,
            proactive: {
                enabled: false,
                idleTimer: 5,
                cancelTimer: 30
            },
            chatButton: {
                enabled: this.displayChatButton,
                template: false,
                openDelay: 1000,
                effectDuration: 300,
                hideDuringInvite: true
            },
            form: {
                inputs: [
                    {
                        id: 'cx_webchat_form_nickname',
                        name: 'nickname',
                        maxlength: '100',
                        placeholder: '@i18n:webchat.ChatFormPlaceholderFirstName',
                        label: '@i18n:webchat.ChatFormFirstName'
                    },
                    {
                        id: 'cx_webchat_form_email',
                        name: 'email',
                        maxlength: '100',
                        placeholder: '@i18n:webchat.ChatFormPlaceholderEmail',
                        label: '@i18n:webchat.ChatFormEmail'
                    },
                    {
                        id: 'cx_webchat_form_agreement',
                        name: 'agreement',
                        type: 'checkbox',
                        required: true,
                        label: '@i18n:webchat.InviteBody'
                    }
                ]
            }
        },
        extensions: {}
    };

    genesysConfig.main.themes[brand] = 'cx-theme-' + brand;

    return genesysConfig;
};

LPP.common.genesysWidget.prototype.loadScript = function() {
    var genesysScript = document.createElement('script');

    this.registerOverlayExtension();

    genesysScript.src = LegacyBridge.getStoreConfig('genesys/url/script');
    document.getElementsByTagName('head')[0].appendChild(genesysScript);
};

LPP.common.genesysWidget.prototype.registerOverlayExtension  = function() {
    this.genesysConfig.extensions['genesysChatOverlay'] = this.genesysChatPlugin;
};

LPP.common.genesysWidget.prototype.genesysChatPlugin  = function($, CXBus) {
    this.genesysChatOverlay = CXBus.registerPlugin('genesysChatOverlay');
    this.genesysChatOverlay.subscribe('WebChat.opened', this.onGenesysChatOpen);
};

LPP.common.genesysWidget.prototype.openChat  = function() {
    this.genesysChatOverlay.command('WebChat.open');
};

LPP.common.genesysWidget.prototype.hideButton  = function() {
    this.displayChatButton = false;
    if (this.genesysChatOverlay && this.genesysChatOverlay.command) {
        this.genesysChatOverlay.command('WebChat.hideChatButton');
    }
};

LPP.common.genesysWidget.prototype.onGenesysChatOpen  = function() {
    var closeButton = document.getElementsByClassName('cx-button-close')[0];
    this.injectTerms();
    closeButton.addEventListener('click', this.closeChat.bind(this, closeButton));
};

LPP.common.genesysWidget.prototype.closeChat  = function(closeButton) {
    var closeConfirmButton = document.getElementsByClassName('cx-close-confirm')[0];
    this.genesysChatOverlay.command('WebChat.endChat');
    this.genesysChatOverlay.command('WebChat.close');
    setTimeout(function() {
        closeConfirmButton.click();
    }, 0);
    closeButton.removeEventListener('click', this.closeChat, false);
};

LPP.common.genesysWidget.prototype.injectTerms  = function() {
    var termsCaption = document.createElement('a'),
        termsSection = document.querySelector('[for="cx_webchat_form_agreement"]');

    termsCaption.href = LegacyBridge.getStoreConfig('genesys/url/privacyPolicy');
    termsCaption.innerText = termsSection.innerText;
    termsCaption.setAttribute('target', '_blank');

    termsSection.parentNode.replaceChild(termsCaption, termsSection);
};

LegacyBridge.DOMReady.subscribe(function() {
    window.genesysWidget = new LPP.common.genesysWidget();
});