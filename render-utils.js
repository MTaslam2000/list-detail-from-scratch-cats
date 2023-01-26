export function renderCatCard(cat) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.classList.add('cat-card');

    p.textContent = `look for details on ${cat.name}`;
    img.src = `./assets/${cat.id}.png`;
    a.href = `./detail/?id=${cat.id}`;

    div.append(p, img);
    a.append(div);

    return a;
}