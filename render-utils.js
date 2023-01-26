export function renderCatCard(cat) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.classList.add('cat-card');

    p.textContent = cat.name;
    img.src = `./assets/${cat.id}.png`;
    a.href = 

    div.append(p, img);
    a.append(div);

    return a;
}