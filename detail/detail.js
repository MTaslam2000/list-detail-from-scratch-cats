import { getCat } from '../fetch-utils.js';

const mainElDetailsContainer = document.querySelector('main');

let catData = {};

window.addEventListener('load', async () => {
    const cat = await getCat();

    console.log(cat);

});