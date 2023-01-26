import { getCat } from '../fetch-utils.js';

const mainElDetailsContainer = document.querySelector('main');

let catData = {};

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const cat = await getCat(id);

    const div = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const a = document.createElement('a');

    p1.textContent = `${cat.name} is a ${cat.cat_breed_id.color} feline and weighs ${cat.weight_lbs} lbs`;
    p2.textContent = `Does ${cat.name} have a fluffy tail... ${cat.fluffy_tail}`;
    p3.textContent = `Most importantly is ${cat.name} cute...? it is ${cat.is_cute}! of course it is true`;

    img.src = `../assets/${cat.id}.png`;
    a.href = `../`;

    div.append(p1, img, p2, p3);
    a.append(div);

    mainElDetailsContainer.append(a);

});