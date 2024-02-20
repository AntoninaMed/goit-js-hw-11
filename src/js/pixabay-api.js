export function fetchImages(keyWord) {
    return fetch(`https://pixabay.com/api/?key=42433803-c7a0d02ae3ef09aff6a01d8a3&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}