const html = document.querySelector('html');
const switcher = document.querySelector('.js-theme-switcher');
const switcherButtons = switcher.querySelectorAll('.js-theme-switcher-btn');

html.dataset.theme = 'theme-light';

function switchTheme(theme) {
  html.dataset.theme = theme;
  console.log(event.target);
  for(const button of switcherButtons) {
    (button !== event.target) ? button.classList.remove('js-active') : button.classList.add('js-active');
  }
}

function deleteBox() {
  const boxList = document.querySelectorAll('.js-box');

  for(const box of boxList) {
    const removeButton = box.querySelector('.js-box-button');

    removeButton.addEventListener('mouseover', function () {
      box.classList.add('js-box-deleting');
    });

    removeButton.addEventListener('mouseout', function () {
      box.classList.remove('js-box-deleting');
    });
  }
}

deleteBox();