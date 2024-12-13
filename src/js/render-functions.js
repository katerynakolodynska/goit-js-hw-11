import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox; 

export function addLoader(gallery) {
  const loaderHTML = '<span class="loader"></span>';
  gallery.insertAdjacentHTML('afterbegin', loaderHTML);
}

export function hideLoading() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

export function showGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  const markup = images.map(image =>`
      <a href="${image.largeImageURL}" class="gallery-link">
        <img class="img-gallery"
          src="${image.webformatURL}"
          alt="${image.tags}" 
          loading="lazy" />

        <ul class="list-wrapper">
          <li class="text-content"><b>Likes:</b> ${image.likes}</li>
          <li class="text-content"><b>Views:</b> ${image.views}</li>
          <li class="text-content"><b>Comments:</b> ${image.comments}</li>
          <li class="text-content"><b>Downloads:</b> ${image.downloads}</li>
        </ul>
        
      </a>
  `).join('');
  galleryContainer.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
  }
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

export function showInfo(message) {
  iziToast.info({
    title: `Info`,
    message: message,
    backgroundColor: "red",
  });
}
