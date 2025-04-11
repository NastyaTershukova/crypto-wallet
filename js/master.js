let screens = document.querySelectorAll('section');
let currentScreen = 0;

// function showScreen(value) { говно
//     if (document.querySelector('section.active')) {
//         document.querySelector('section.active').classList.remove('active');
//     }
//     screens[value].classList.add('active');
// }

function showScreen(screenName) {
    if (document.querySelector('section.active')) {
        document.querySelector('section.active').classList.remove('active');
    }
    document.querySelector(`section.${screenName}`).classList.add('active');
}

function handleScreenSwitch(button, screenName) {
    showScreen(screenName);
    if (document.querySelector('.menu-button.active')) {
        document.querySelector('.menu-button.active').classList.remove('active');
    }
    button.querySelector('div').classList.add('active');
}