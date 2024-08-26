document.addEventListener('DOMContentLoaded', () => {
  const pagination = document.getElementById('pagination');
  const progressSubForeground = document.querySelector('.progress-sub-foreground');
  const slideNumbers = document.getElementById('slide-numbers');

  let currentSlide = 0;
  const totalSlides = 3;

  function updateProgress() {
    const progress = (currentSlide / (totalSlides - 1)) * 100;
    progressSubForeground.style.width = `${progress}%`;
    slideNumbers.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;
  }

  document.querySelector('.arrow-left').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateProgress();
    }
  });

  document.querySelector('.arrow-right').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateProgress();
    }
  });

  updateProgress();
});
