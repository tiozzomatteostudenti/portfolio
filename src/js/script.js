document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');

    modeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.style.setProperty('--bg', 'var(--bg_darkMode)');
            document.documentElement.style.setProperty('--primaryGradient', 'var(--primaryGradient_darkMode)');
            document.documentElement.style.setProperty('--secondaryGradient', 'var(--secondaryGradient_darkMode)');
            document.documentElement.style.setProperty('--tertiaryGradient', 'var(--tertiaryGradient_darkMode)');
            document.documentElement.style.setProperty('--quadriaryGradient', 'var(--quadriaryGradient_darkMode)');
            document.documentElement.style.setProperty('--senaryGradient', 'var(--senaryGradient_darkMode)');
            
        } else {
            document.documentElement.style.setProperty('--bg', 'var(--bg_lightMode)');
            document.documentElement.style.setProperty('--primaryGradient', 'var(--primaryGradient_lightMode)');
            document.documentElement.style.setProperty('--secondaryGradient', 'var(--secondaryGradient_lightMode)');
            document.documentElement.style.setProperty('--tertiaryGradient', 'var(--tertiaryGradient_lightMode)');
            document.documentElement.style.setProperty('--quadriaryGradient', 'var(--quadriaryGradient_lightMode)');
            document.documentElement.style.setProperty('--senaryGradient', 'var(--senaryGradient_lightMode)');
        }
    });
});
