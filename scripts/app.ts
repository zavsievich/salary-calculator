import switcher from './switcher';

window.state = {
    darkTheme: true,
}

document.addEventListener('DOMContentLoaded', function () {
    switcher();
})
