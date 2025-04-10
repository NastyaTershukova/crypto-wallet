let screens = document.querySelectorAll('section');
let currentScreen = 0;

function showScreen(value) {
    if (document.querySelector('section.active')) {
        document.querySelector('section.active').classList.remove('active');
    }
    screens[value].classList.add('active');
    
}

let footerButtons = document.querySelectorAll('.menu-button');
for (let i = 0; i < footerButtons.length; i++) {
    footerButtons[i].addEventListener('click', function () {
        showScreen(i);
        for (let k = 0; k < footerButtons.length; k++) {
            footerButtons[k].classList.remove('active');
        }
          footerButtons[i].classList.add('active');
    });
}