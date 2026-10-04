document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const yearTarget = document.getElementById('year');

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const RELEASE_TIME = new Date('2026-10-09T14:46:00+09:00');

  const downloadButton = document.querySelector(
    'a[href*="drive.google.com"]'
  );

  if (downloadButton) {
    const originalHref = downloadButton.href;

    function updateDownloadButton() {
      const now = new Date();

      if (now >= RELEASE_TIME) {
        downloadButton.href = originalHref;
        downloadButton.style.pointerEvents = 'auto';
        downloadButton.style.opacity = '1';
        downloadButton.removeAttribute('aria-disabled');

        downloadButton.classList.remove('download-disabled');
      } else {
        downloadButton.removeAttribute('href');
        downloadButton.style.pointerEvents = 'none';
        downloadButton.style.opacity = '0.5';
        downloadButton.setAttribute('aria-disabled', 'true');

        downloadButton.classList.add('download-disabled');
      }
    }

    updateDownloadButton();

    setInterval(updateDownloadButton, 1000);
  }
});
