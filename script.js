// Accordion
document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');


document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.dataset.full;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});
