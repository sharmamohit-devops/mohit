const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

if (localStorage.getItem('theme') === 'dark') {
  themeStyle.href = 'index1.css';
  themeToggle.classList.add('dark-theme');
}
themeToggle.addEventListener('click', () => {
  if (themeStyle.href.includes('index.css')) {
    themeStyle.href = 'index1.css';
    localStorage.setItem('theme', 'dark');
  } else {
    themeStyle.href = 'index.css';
    localStorage.setItem('theme', 'light');
  }
  themeToggle.classList.toggle('dark-theme');
});
