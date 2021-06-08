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