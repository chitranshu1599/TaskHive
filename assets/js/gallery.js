let galleryElements = document.querySelectorAll(".gallery-slid-show")
galleryElements.forEach(function(gallery) {
  gallery.addEventListener('mouseover', function(event){
    let gallery_img = gallery.querySelector(".gallery-img")
    let slider = gallery.querySelector(".slider")
    gallery_img.style.filter = "unset"
    slider.style.display = "unset"
    setTimeout(() => {
      slider.style.opacity = "1"
    }, 2);
  });
});
