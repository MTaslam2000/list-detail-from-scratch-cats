import { getCat } from '../fetch-utils.js';

const mainElDetailsContainer = document.querySelector('main');

let catData = {};

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id')
    const cat = await getCat(id);

    mainElDetailsContainer.append(JSON.stringify(cat));

});