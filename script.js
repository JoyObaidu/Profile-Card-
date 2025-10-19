// JavaScript
const timeEl = document.querySelector('[data-testid="test-user-time"]');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function updateTime() {
  timeEl.textContent = `Current Time: ${Date.now()}`;
}
setInterval(updateTime, 1000);
updateTime();

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    body.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
