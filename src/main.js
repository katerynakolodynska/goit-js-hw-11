
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {fetchImages} from "./js/pixabay-api.js";
import {showGallery} from "./js/render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery .gallery-link');
const loaderElement = document.querySelector('.loader');
const queryElement = document.querySelector('input');

document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  loaderElement.style.display = 'block';
  const query = queryElement.value.trim();

  if (query === '') {
    loaderElement.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }
  gallery.innerHTML = '';
  queryElement.value = '';

  fetchImages(query)
    .then(data => {
      if (data.totalHits && (data.totalHits)>0) {
        const imagesForDisplay = data.hits; 
        const imageHTML = showGallery(imagesForDisplay);
        gallery.innerHTML = imageHTML;
        lightbox.refresh();
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      loaderElement.style.display = 'none';
    })
    .catch(error => {
      loaderElement.style.display = 'none';
      console.log(error.message);
    });

});
