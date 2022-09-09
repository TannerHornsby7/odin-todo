import fin from './assets/logo.png';
import fla from './assets/flag.png';
const moment = require('moment');


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
        const tile = makeTile(objList[i], i);
        
        tiles.appendChild(tile);
    }
    return tiles;
}

// Create DOM Element for Todo
function makeTile(obj, index) {
    const finish = document.createElement('img');
    const flag = document.createElement('img');
    const headdiv = document.createElement('div');
    const tile = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const duedate = document.createElement('p');
    let flags = 0;

    tile.classList.add('tile');
    flag.classList.add('flag');
    flag.src = fla;
    flag.title = 'priority'
    finish.classList.add('finish');
    finish.src = fin;
    finish.title = 'done?';
    finish.dataset.index = index;


    // setting head div content
    headdiv.appendChild(finish);
    if(obj.p == 'mpriority') {
        flags = 1;
    }
    else if(obj.p == 'hpriority') {
        flags = 2
    }
    for(let i = 0; i < flags; i++) {
        headdiv.appendChild(flag.cloneNode());
    }
    tile.appendChild(headdiv);

    // setting tile content
    title.textContent = obj.t;
    description.textContent = obj.d;
    duedate.textContent = moment(obj.dd).format('MMMM d, YYYY');
    tile.appendChild(title);
    tile.appendChild(description);
    tile.appendChild(duedate);

    return tile;
}

export default render;
