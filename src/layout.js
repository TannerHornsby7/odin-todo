import './style.scss';

// layout factory function
let layout = (c, h, n, m, f) => {
    const proto = {
        type: 'layout',
        c, //container
        h, //header
        n, //navbar
        m, //main
        compose () {
            appendSections(c, h, n, m);
            populateHead();
            populateNav();
            populateMain();
            return;
        }
    }
    return Object.assign(Object.create(proto), { c, h, n, m } );
};

// Append list of sections to container
function appendSections(c) {
    const container = createSection(c);
    for(let i = 1; i<arguments.length; i++) {
        container.appendChild(createSection(arguments[i]));
    }
    return document.body.appendChild(container);
}

// Create DOM section and add it's class
function createSection (section) {
    let dome = document.createElement('div');

    dome.classList.add(section);
    return dome;
}

// populate Header
function populateHead() {
    const head = document.querySelector('.header');
    head.innerHTML = "To Do"
    return;
}

// populate NavBar
function populateNav() {
    const nav = document.querySelector('.navbar');
    const projects = document.createElement('h2');
    projects.innerHTML = 'PROJECTS';

    //appending children to nav
    nav.appendChild(createButton("inbox"));
    nav.appendChild(createButton("day"));
    nav.appendChild(createButton("week"));
    nav.appendChild(projects);
    return;
}

// populate Main
function populateMain() {
    return;
}

// create Button
function createButton(name) {
    const element = document.createElement('button');
    const icon = document.createElement('ion-icon');

    element.appendChild(icon);
    element.innerHTML = name.toUpperCase();
    element.id = name;
    // icon.href = `url(${name})`;

    return element;
}


export default layout;