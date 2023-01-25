/* Imports */
import { getCat, getCats } from './fetch-utils.js';
import { renderCatCard } from './render-utils.js';
// import { renderCatsCard, renderCatDetails } from 'render-utils.js';

/* Get DOM Elements */
const catListContainer = document.querySelector('.cat-list-container');

/* State */


/* Events */
window.addEventListener('load', async () => {
    // fetch
    const cats = await getCats();
    console.log(cats);
    // now render then append
    for (let cat of cats) {
        const catEl = renderCatCard(cat);
        catListContainer.append(catEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
