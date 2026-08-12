(function () {
  var KEY = 'vibes-theme';
  var root = document.documentElement;
  var saved = localStorage.getItem(KEY);
  if (saved) root.setAttribute('data-theme', saved);

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateIcon(btn) {
    btn.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    updateIcon(btn);
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(KEY, next);
      updateIcon(btn);
    });
  });
})();
