let currentSlideIndex = 1;

function openLightbox() {
  document.getElementById('lightbox').style.display = "block";
  showSlide(currentSlideIndex);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

function changeSlide(n) {
  showSlide(currentSlideIndex += n);
}

function setCurrentSlide(n) {
  showSlide(currentSlideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = slides.length;

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[currentSlideIndex - 1].style.display = "block";
}