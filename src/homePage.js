const parent = document.querySelector('#content');

const createHomePage = () => {
    const div = document.createElement('div');
    div.classList = 'div';
    parent.appendChild(div);

    const header = document.createElement('h1');
    header.innerText = 'Teriyaki Express';
    div.appendChild(header);

    const img = document.createElement('img');
    img.src = '/src/teriyaki.png';
    div.appendChild(img);

    const detail = document.createElement('p');
    detail.innerText = 'Delicious Food';
    div.appendChild(detail);
};

export default createHomePage;
