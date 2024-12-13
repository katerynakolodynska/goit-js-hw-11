export async function fetchImages(query) {
  const API_URL = 'https://pixabay.com/api/';
    const API_KEY = '47525205-faccd6d0438e1a7a5e4c149e6'; 
  const requestParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
  });

  const fullUrl = `${API_URL}?${requestParams.toString()}`;

  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data; 
    })
    .catch(error => {
      console.error(`There was an error with the fetch operation:`, error);
      throw error; 
    });
}