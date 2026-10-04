document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const yearTarget = document.getElementById('year');

  // 현재 연도 표시
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  // 모바일 메뉴
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

  // ========================================
  // Hangullo v0.0.1-beta 다운로드 공개 시간
  // 2026년 10월 9일 14:46:00 (대한민국 시간)
  // ========================================

  const downloadButton = document.getElementById('download-button');
  const downloadButtonText =
    document.getElementById('download-button-text');

  if (downloadButton && downloadButtonText) {
    const releaseTime = new Date('2026-10-09T14:46:00+09:00');
    const downloadUrl = downloadButton.dataset.downloadUrl;

    function updateDownloadButton() {
      const now = new Date();

      if (now >= releaseTime) {
        // ==============================
        // 공개 후
        // 기존 다운로드 버튼으로 복원
        // ==============================

        downloadButton.href = downloadUrl;
        downloadButton.target = '_blank';
        downloadButton.rel = 'noreferrer';

        downloadButton.classList.remove('download-disabled');
        downloadButton.removeAttribute('aria-disabled');

        downloadButton.style.pointerEvents = '';
        downloadButton.style.opacity = '';

        downloadButtonText.textContent =
          'Windows 설치 파일 다운로드 · 11 MB';
      } else {
        // ==============================
        // 공개 전
        // 흑백 + 비활성화
        // ==============================

        downloadButton.href = '#';
        downloadButton.target = '';
        downloadButton.rel = '';

        downloadButton.classList.add('download-disabled');
        downloadButton.setAttribute('aria-disabled', 'true');

        downloadButton.style.pointerEvents = 'none';
        downloadButton.style.opacity = '0.55';

        downloadButtonText.textContent =
          '10월 9일 14시 46분 공개';
      }
    }

    // 페이지를 처음 열었을 때 확인
    updateDownloadButton();

    // 1초마다 확인
    setInterval(updateDownloadButton, 1000);
  }
});
