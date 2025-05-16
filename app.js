document.addEventListener('DOMContentLoaded', () => {
  console.log('xWordPress PWA ready.');

  const installBtn = document.querySelector('button');
  if (installBtn) {
    installBtn.addEventListener('click', () => {
      alert('اگر گزینه نصب ظاهر نشد، لطفاً سایت را به صفحه اصلی اضافه کنید (Add to Home Screen).');
    });
  }
});