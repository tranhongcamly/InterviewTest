const images = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    //when the element is fully visible in the viewport
    if (entry.intersectionRatio === 1) 
    {
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.add('loaded');
    }
    //when that the element is not visible at all
    else {
        entry.target.classList.remove('loaded');
      }
  });
}, {
    threshold: 1
  });

images.forEach(image => {
  observer.observe(image);
});