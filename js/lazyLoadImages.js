

// document.addEventListener("DOMContentLoaded", function() {
//     // var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
//     // if ("IntersectionObserver" in window) {
//     //   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//     //     entries.forEach(function(entry) {
//     //       if (entry.isIntersecting) {
//     //         let lazyImage = entry.target;
//     //         lazyImage.src = lazyImage.dataset.src;
//     //         lazyImage.srcset = lazyImage.dataset.srcset;
//     //         lazyImage.classList.remove("lazy");
//     //         lazyImageObserver.unobserve(lazyImage);
//     //       }
//     //     });
//     //   });
  
//     //   lazyImages.forEach(function(lazyImage) {
//     //     lazyImageObserver.observe(lazyImage);
//     //   });
//     // } else {
//     //   // Possibly fall back to a more compatible method here
//     // }
   
//   });

  let imagesToLoad = document.querySelectorAll('img[data-src]');
  const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });