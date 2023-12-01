// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_t09FH5qR0cdEhJIKXuBNBkwLbp1vOYBLwbAt1eDxLx8Wvxh7wyKArRccEGVZgvSm';

const BASE_URL = 'https://api.thecatapi.com/v1';
const api_key =
  'live_t09FH5qR0cdEhJIKXuBNBkwLbp1vOYBLwbAt1eDxLx8Wvxh7wyKArRccEGVZgvSm';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${api_key}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        
    })    
};

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
    .then(response => {
        if(!response.ok)
        {throw new Error(response.status)}
        return response.json();
});
}
