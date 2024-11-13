// Tradutor
window.gtranslateSettings = {
    "default_language": "pt",
    "detect_browser_language": true,
    "wrapper_selector": ".gtranslate_wrapper",
    "float_switcher_open_direction": "bottom",
    "flag_style": "3d"
};

function resetToBrowserLanguage() {
    var lang = navigator.language || navigator.userLanguage;
    var langCode = lang.split('-')[0]; // Obter o código do idioma
    var gtranslate = document.querySelector('.gtranslate_wrapper select');

    if (gtranslate) {
        gtranslate.value = langCode;
        gtranslate.dispatchEvent(new Event('change'));
    }
}