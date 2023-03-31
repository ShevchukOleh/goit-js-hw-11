import axios from 'axios';

let page = 1;
let q = null;
    
async function fetchPhotos(q, page) {
    const URL = 'https://pixabay.com/api/';
    const key = '34884998-68d78d4359a242f869564c2a4'
    
    return await axios.get(`${URL}?key=${key}&q=${q}&image_type=photo&orientation=horisontal&safesearch=true&page=${page}&per_page=40`).then(response => response.data.hits);
};

export const API = { fetchPhotos, page, q};