// Render UI from object Array
function render(objList) {
    const main = document.querySelector('.main');
    const tiles = document.getElementById('tiles');

    if(tiles) {
        tiles.remove();
    }
    main.appendChild(makeList(objList));
}

// Make DOM list from object list 
function makeList(objList) {
    const tiles = document.createElement('div');
    tiles.id = 'tiles';
    for (let i = 0; i < objList.length; i++) {
        tiles.appendChild(makeTile(objList[i]));
    }
    return tiles;
}

// Create DOM Element for Todo
function makeTile(obj) {
    const close = document.createElement('icon');
    const flag = document.createElement('icon');
    const headdiv = document.createElement('div');
    const tile = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const duedate = document.createElement('p');
    const flags = 1;

    tile.classList.add('tile');
    flag.classList.add('flag');
    close.classList.add('close');

    // setting head div content
    if(obj.p == 2) {
        flags = 2;
    }
    else if(obj.p == 3) {
        flags = 3
    }
    for(let i = 0; i < flags; i++) {
        headdiv.appendChild(flag);
    }
    headdiv.appendChild(close);
    tile.appendChild(headdiv);

    // setting tile content
    title.textContent = obj.t;
    description.textContent = obj.d;
    duedate.textContent = obj.dd;
    tile.appendChild(title);
    tile.appendChild(description);
    tile.appendChild(duedate);

    return tile;
}

export default render;
