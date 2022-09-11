import { popform, layout } from './layout';
import todo from './holder';
import { renderTiles, renderProjects } from './render.js';
import moment from 'moment';
import './style.scss';

// Control Flow
let toDoProjects = {Home: []};
if (storageAvailable('localStorage')) {
    if (!localStorage.length) {
        localStorage.setItem('projects', JSON.stringify(toDoProjects));
    } else {
        toDoProjects = JSON.parse(localStorage.getItem('projects'));
        toDoReviver(toDoProjects);
        // console.log(toDoProjects['Home']);
    }      
    // Yippee! We can use localStorage awesomeness
}
else {
    // Too bad, no localStorage for us
}  

// create basic layout
layout("container", "header", "navbar", "main").compose();

// create responsive render for home by default
renderProjects(toDoProjects);
const ti = taskInterface(toDoProjects['Home']);
renderTasks(toDoProjects['Home']);
ti.addEvents();
open();
close();


// Add Event Listners==========================================================

// Update Local Storage
document.body.addEventListener('keydown', ()=> {
    localStorage.setItem('projects', JSON.stringify(toDoProjects));
});

// Add Project
const addproj = document.getElementById('addproject');
addproj.addEventListener('click', (e)=>{
    if (Object.keys(toDoProjects).length < 5) {
        //create project form
        const finput = document.createElement('input');
        const ptab = document.querySelector('.ptab');
        const indiv = document.createElement('div');

        // setting indiv
        indiv.classList.add('indiv');

        // setting input
        finput.type = 'text';
        finput.title = 'Project Title';

        indiv.appendChild(finput);
        ptab.appendChild(indiv);
                
        finput.addEventListener('keydown', function onEvent(event) {
            if (event.key === "Enter") {
                addProject(finput.value);
                indiv.style.display = 'none';
            }
        });
    }
    else {
        console.log('project limit reached');
        console.log(toDoProjects.length)
        e.target.title = 'project limit reached'
        return;
    }
});

// Clear Local Storage
const clearLocal = document.getElementById('clearLocal');
clearLocal.addEventListener('click', ()=>{
    const bhead = document.getElementById('bodyhead')
    localStorage.clear();
    toDoProjects = {Home: []};
    // create responsive render for home by default
    const ti = taskInterface(toDoProjects['Home']);
    ti.addEvents();
    renderProjects(toDoProjects);
    renderTasks(toDoProjects['Home']);
    bhead.textContent = 'INBOX';
});

// FUNCTIONS/CONSTRUCTORS======================================================

// render responsive task dashboard
function taskInterface (project) {
    const addtask = document.getElementById('addtask');
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('day');
    const week = document.getElementById('week');

    function addEvents() { 
        // Add Task Event Listener
        const a = addtask.cloneNode(true);
        a.addEventListener('click', addT);
        addtask.replaceWith(a);
        // addtask.remove();


        // Inbox Button
        const i = inbox.cloneNode(true);
        i.addEventListener('click', renderInbox);
        inbox.replaceWith(i);
        // inbox.remove();

        // Today Button
        const t = today.cloneNode(true);
        t.addEventListener('click', renderDayTasks);
        today.replaceWith(t);
        // today.remove();

        // Week Button
        const w = week.cloneNode(true);
        w.addEventListener('click', renderWeekTasks);
        week.replaceWith(w);
        // week.remove();
    }

    function renderInbox (){
        renderTasks(project);
    }

    function renderDayTasks () {
        const todotoday = project.filter((object)=>{
            const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'hours');
            return diff <= 24 && diff > 0;
        });
        renderTasks(todotoday);
    }

    function renderWeekTasks() {
        const todoweek = project.filter((object)=>{
            const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'days');
            return diff <= 7 && diff > 0;
        });
        renderTasks(todoweek);
    }

    function addT() {
        popform();
        const submitbtn = document.getElementById('submit');
        
        // Submit Form Event Listener
        submitbtn.addEventListener('click', sub);

        function sub() {
            const formoverlay = document.querySelector('.formoverlay')
            const inputs = getFormInputs();
            const tile = todo(inputs);
            formoverlay.remove();
            project.push(tile);
            renderInbox();
            // Finish Task Event Listeners
            submitbtn.removeEventListener('click', sub);
        }
    }
    // remove interface responsiveness
    function removeEvents() {
    const addtask = document.getElementById('addtask');
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('day');
    const week = document.getElementById('week');

    addtask.removeEventListener('click', addT);
    inbox.removeEventListener('click', renderTasks);
    today.removeEventListener('click', renderDayTasks);
    week.removeEventListener('click', renderWeekTasks);
    }

    return { addEvents, removeEvents, renderInbox }
}
// render current project's tasks
function renderTasks(arr) {
    // Create DOM tiles from task list
    renderTiles(arr);

    // expand tile event listner
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((box) => {
        box.addEventListener('click', (e)=>{
            const desc = box.querySelector('.description')
            box.classList.contains('expanded')
            ? box.classList.remove('expanded')
            : box.classList.add('expanded');

            if (box.classList.contains('expanded')) {
                desc.style.display = "block";
            } else {
                desc.style.display = "none";
            }
        });
    });

    // edit tile event listener
    const editbtns = document.querySelectorAll('.edit');
    editbtns.forEach((btn) => {
        btn.addEventListener('click', (e)=>{
            popform();
            const submitbtn = document.getElementById('submit');
            
            // Submit Form Event Listener
            submitbtn.addEventListener('click', sub);
    
            function sub() {
                const formoverlay = document.querySelector('.formoverlay')
                const inputs = getFormInputs();
                const tile = todo(inputs);
                formoverlay.remove();
                arr[e.target.dataset.index] = tile;
                renderTasks(arr);
                // Finish Task Event Listeners
                submitbtn.removeEventListener('click', sub);
            }
        });
    });




    // complete task event listener
    const tasks = document.querySelectorAll('.finish');
    tasks.forEach((box) => {
        box.addEventListener('click', (e)=>{
            arr.splice(e.target.dataset.index, 1);
            renderTasks(arr);
        });
    });
}
// add a project and its functionalities
function addProject (p) {
    // Adding Project Menu Event Listeners
    const bhead = document.getElementById('bodyhead')
    
    // setting new project
    toDoProjects[p] =  []; // creating empty task array
    renderProjects(toDoProjects); //rendering the new project list
    open(); //adding open and close funcitonality to new project list
    close();
    const newProject = taskInterface(toDoProjects[p]);
    /*
    getting task interface for new project
    */
    newProject.addEvents(); // adding new project's events
    bhead.textContent = p;
}
// Event Listener Functions
function getFormInputs () {
    const formEl = document.forms.popform;
    const formData = new FormData(formEl);
    let t = formData.get('title');
    let d = formData.get('description')
    let dd = formData.get('duedate');
    let hp = formData.get('hpriority');
    let mp = formData.get('mpriority');
    let p;

    if(hp) {
        p = "hpriority";
    }
    else if (mp) {
        p = "mpriority";
    }
    else {
        p = "lpriority";
    }

    return [t, d, dd, p];
}
// open a project
function open() {
    const popen = document.querySelectorAll('.popen');
    const props = Object.getOwnPropertyNames(toDoProjects);
    const bhead = document.getElementById('bodyhead');

    // Open Project Listeners
    popen.forEach((b) => {
        // console.log(b);
        b.addEventListener('click', (e)=>{
            const curr = props[e.target.dataset.pindex];
            renderTasks(toDoProjects[curr]);
            const cp = taskInterface(toDoProjects[curr]);
            cp.addEvents();
            bhead.textContent = props[e.target.dataset.pindex];
            open();
            close();
    })});
}
// close a project
function close() {
    const pdels = document.querySelectorAll('.pdel');
    const props = Object.getOwnPropertyNames(toDoProjects);
    const bhead = document.getElementById('bodyhead');

    // Delete Project Listeners
    pdels.forEach((pdel) => {
        pdel.addEventListener('click', (e)=>{
            const curr = props[e.target.dataset.pindex];
            delete toDoProjects[curr];
            renderProjects(toDoProjects);
            const home = taskInterface(toDoProjects['Home']);
            home.addEvents();
            renderTasks(toDoProjects['Home'])
            bhead.textContent = 'Home';
            open();
            close();
    })});
}

/* Local Storage Functions */
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function toDoReviver(pjs){
    for(let p in pjs) {
        for(let i = 0; i < pjs[p].length; i++) {
            console.log("Project: " + p);
            if (pjs[p][i].hasOwnProperty('arg')) {
            console.log("Todo: " + pjs[p][i]);
            console.log(pjs[p][i]);
                pjs[p][i] = todo(pjs[p][i].arg);
            }
        }
    }

}