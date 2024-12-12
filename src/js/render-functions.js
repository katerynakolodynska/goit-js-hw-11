export function showGallery(images)
{
    let imageHTML = '';
    images.forEach(image => {
      imageHTML += `
      <a class="gallery-link" href="${image.largeImageURL}">
      <figure class="gallery-figure">
        <img class="img-gallery" src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
        <figcaption class="gallery-figcaption">
          <div class="text-content">Likes: ${image.likes}</div>
          <div class="text-content">Views: ${image.views}</div>
          <div class="text-content">Comments: ${image.comments}</div>
          <div class="text-content">Downloads: ${image.downloads}</div>
    </figcaption>
      </figure>
    </a>`;
    });

    return imageHTML;
}

