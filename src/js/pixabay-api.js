export async function fetchImages(searchString)
{
    const API_URL = 'https://pixabay.com/api/';
    const API_KEY = '47525205-faccd6d0438e1a7a5e4c149e6'; 
    const requestParams = {
      key: API_KEY,
      q: encodeURIComponent(searchString),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
    };
    const encodedParams = new URLSearchParams(requestParams);
    const response = await fetch([API_URL, encodedParams].join('?'));

    return response.json();
}