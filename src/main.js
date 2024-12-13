import {addLoader, clearGallery, hideLoading, showGallery, showInfo } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.search-form');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');


form.addEventListener("submit", event => {
event.preventDefault(); 

const query = input.value.trim(); 
if (!query) { 
    iziToast.error({
    title: `Error`,
      message: `Please enter a search query.`,
    backgroundColor: "red",

    });
    return;
}

    clearGallery(); 
    addLoader(gallery); 

    fetchImages(query)
    .then(data => {
    hideLoading(); 
    if (!data || data.hits.length === 0) {
        showInfo(`Sorry, there are no images matching your search query. Please try again!`);
        return;
}
    showGallery(data.hits); 
})
    .catch(error => {
    console.error(`Error fetching images:`, error); 
    iziToast.error({
        title: `Error`,
        message: `Error: ${error.message}`, 
});
})
    .finally(() => {
    hideLoading(); 
});
});

