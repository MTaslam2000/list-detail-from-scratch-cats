export function renderCatCard(cat) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('dog-card');

    p.textContent = cat.name;
    img.src = `./assets/${cat.id}.png`;

    div.append(p, img);
    return div;
}