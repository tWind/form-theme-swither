const html = document.querySelector('html');
const theme = {
  dark: 'theme-violet',
  light: 'theme-light',
};

html.dataset.theme = theme.light;

function switchTheme() {
  const currentTheme = html.dataset.theme;

  (currentTheme !== theme.dark) ? html.dataset.theme = theme.dark : html.dataset.theme = theme.light;
}

function deleteBox() {
  const boxList = document.querySelectorAll('.js-box');

  console.log(boxList.length);

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