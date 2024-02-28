document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const fullImageBackdrop = document.querySelector('.full-image-backdrop');
    const fullImage = document.querySelector('.full-image');
    const closeButton = document.querySelector('.close');
    let currentIndex = 0;
  
    function showFullImage(index) {
      fullImage.src = images[index].src;
      fullImageBackdrop.style.display = 'block';
      currentIndex = index;
    }
    function nextImage() {
      currentIndex = (currentIndex + 1);
      showFullImage(currentIndex);
    }
    function prevImage() {
      currentIndex = (currentIndex - 1);
      showFullImage(currentIndex);
    }
    function closeFullImage() {
        fullImageBackdrop.style.display = 'none';
    }
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeFullImage();
      }
    });
    images.forEach(function(image, index) {
      image.addEventListener('click', function() {
        showFullImage(index);
      });
    });
    closeButton.addEventListener('click', closeFullImage);
  });