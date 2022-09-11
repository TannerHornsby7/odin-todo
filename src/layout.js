import { doc } from 'prettier';
import add from './assets/add.png'
import './style.scss';

// layout factory function
const layout = (c, h, n, m, f) => {
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

// Form factory function
const popform = () => {
    const formbody = document.createElement('div');
    const form = document.createElement('form');
    const submit = createButton('submit');
    const priorities = document.createElement('div');
    priorities.classList.add('priorities');

    submit.type = 'button';
    formbody.classList.add('formoverlay');
    form.id = 'popform';
    form.method = "post";
    form.appendChild(createInput('title', 'text'));
    form.appendChild(createInput('description', 'text'));
    form.appendChild(createInput('duedate', 'date'));
    priorities.appendChild(createInput('hpriority', 'radio'));
    priorities.appendChild(createInput('mpriority', 'radio'));
    priorities.appendChild(createInput('lpriority', 'radio'));
    form.appendChild(priorities);
    form.appendChild(submit);

    formbody.appendChild(form);

    document.body.appendChild(formbody);
}

// Create form input
function createInput (name, type) {
    const div = document.createElement('div');
    const element = document.createElement('input');
    const label = document.createElement('label');
    label.for = name;
    label.textContent = name.toUpperCase();
    element.type = type;
    element.name = name;
    element.classList.add(name);
    div.appendChild(label);
    div.appendChild(element);

    return div;
}

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
    const title = document.createElement('h1');
    title.textContent = "To Do";
    title.id = 'title';
    head.appendChild(title);
    return;
}

// populate NavBar
function populateNav() {
    const nav = document.querySelector('.navbar');
    const ptab = document.createElement('div');
    const ptabheader = document.createElement('div');
    const projects = document.createElement('h2');
    const addproject = document.createElement('img');

    projects.innerHTML = 'PROJECTS';
    addproject.id = 'addproject'
    addproject.src = add;
    addproject.title = 'Add A Project';

    ptab.classList.add('ptab');
    ptabheader.classList.add('ptabheader');

    ptabheader.appendChild(addproject);
    ptabheader.appendChild(projects);
    ptab.appendChild(ptabheader);

    const addtask = createButton("addtask");
    addtask.textContent = "ADD TASK";
    addtask.title = 'Add A Task';

    //appending children to nav
    nav.appendChild(createButton("inbox"));
    nav.appendChild(createButton("day"));
    nav.appendChild(createButton("week"));
    nav.appendChild(ptab);
    nav.appendChild(addtask);
    return;
}

// populate Main
function populateMain() {
    const main = document.querySelector('.main');
    const inbox = document.createElement('h2');
    inbox.innerHTML = 'INBOX';
    inbox.id ='bodyhead';

    main.appendChild(inbox);
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


export { layout, popform };