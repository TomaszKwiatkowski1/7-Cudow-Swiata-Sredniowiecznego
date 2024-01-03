function pokazMnu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 
function pokaMnutel() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('#galeria a');
  const fullImageContainer = document.querySelector('.gallery-full-image-container');
  const fullImage = document.getElementById('full-image');
  let currentImageIndex = 0;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', (event) => {
      event.preventDefault();
      fullImage.src = thumbnail.href;
      currentImageIndex = index;
      fullImageContainer.style.display = 'block';
    });
  });

  const nextButton = document.querySelector('.next-button');
  const prevButton = document.querySelector('.prev-button');
  const exitButton = document.querySelector('.exit-gallery-button');

  nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
    fullImage.src = thumbnails[currentImageIndex].href;
  });

  prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
    fullImage.src = thumbnails[currentImageIndex].href;
  });

  exitButton.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
  });
});
