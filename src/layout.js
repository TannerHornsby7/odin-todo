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
            return appendSections(c, h, n, m)
        }
    }

    return Object.assign(Object.create(proto), { c, h, n, m } );
};

// Create Header



// Create Navbar

// Create DOM section and add it's class
function createSection (section) {
    let dome = document.createElement('div');
    if(section != "container") {
        dome.textContent = section;
    }
    dome.classList.add(section);
    return dome;
}

// Append list of sections to container
function appendSections(c) {
    const container = createSection(c);
    for(let i = 1; i<arguments.length; i++) {
        container.appendChild(createSection(arguments[i]));
    }
    return document.body.appendChild(container);
}

export default layout;