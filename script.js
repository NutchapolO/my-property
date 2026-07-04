// Lightbox for gallery images
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,0.85);
      display:flex; align-items:center; justify-content:center;
      z-index:1000; cursor:pointer;
    `;
    const big = document.createElement('img');
    big.src = img.src;
    big.style.cssText = 'max-width:90vw; max-height:90vh; border-radius:8px;';
    overlay.appendChild(big);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
