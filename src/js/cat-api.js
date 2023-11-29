import axios from 'axios';
axios.defaults.headers.common["x-api-key"] =
'live_t09FH5qR0cdEhJIKXuBNBkwLbp1vOYBLwbAt1eDxLx8Wvxh7wyKArRccEGVZgvSm';

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds(catbreed) {
    return fetch(`${BASE_URL}/breeds`)
    .then(response => response.json())
};

export function fetchCatByBreed(breedId){}

