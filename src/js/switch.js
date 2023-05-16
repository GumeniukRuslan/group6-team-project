let checkbox = document.querySelector('input[name=theme_switch]');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
  checkbox.checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  checkbox.checked = false;
}

// switch theme if checkbox is engaged
checkbox.addEventListener('change', cb => {
  const selectedTheme = cb.target.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', selectedTheme);
  localStorage.setItem('theme', selectedTheme);
});

// проверяем сохраненную тему и устанавливаем ее при загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  checkbox.checked = savedTheme === 'dark';
}
