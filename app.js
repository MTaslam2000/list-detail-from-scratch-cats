/* Imports */
import { getCat, getCats } from './fetch-utils.js';
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
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        div.classList.add('dog-card');

        p.textContent = cat.name;
        img.src = `./assets/${cat.id}.png`;

        div.append(p, img);
        catListContainer.append(div);
    }

    return catListContainer;

});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
