import './style.scss';

// layout factory function
let layout = (c, h, n, m, f) => {
    const proto = {
        type: 'layout',
        c, //container
        h, //header
        n, //navbar
        m, //main
        f, //footer
        compose () {
            return appendElements(c, h, n, m, f)
        }
    }

    return Object.assign(Object.create(proto), { c, h, n, m, f } );
};

// Create DOM element and add it's class
function createElement (element) {
    let dome = document.createElement('div');
    if(element != "container") {
        dome.textContent = element;
    }
    dome.classList.add(element);
    return dome;
}

// Append list of elements to container
function appendElements(c) {
    const container = createElement(c);
    for(let i = 1; i<arguments.length; i++) {
        container.appendChild(createElement(arguments[i]));
    }
    return document.body.appendChild(container);
}

export default layout;