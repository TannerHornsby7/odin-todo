import { popform, layout } from './layout';
import todo from './holder';
import { renderTiles, renderProjects } from './render.js';
import moment from 'moment';
import './style.scss';

let toDoProjects = {Home: []};
if (storageAvailable('localStorage')) {
    if (!localStorage.length) {
        localStorage.setItem('projects', JSON.stringify(toDoProjects));
      } else {
        toDoProjects = JSON.parse(localStorage.getItem('projects'));
      }      
    // Yippee! We can use localStorage awesomeness
}
  else {
    // Too bad, no localStorage for us
}  

// render responsive task dashboard
const taskInterface = function(project) {
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

    return { addEvents, removeEvents }
}

// adding local storage updating event listeners
document.body.addEventListener('keydown', ()=> {
    localStorage.setItem('projects', JSON.stringify(toDoProjects));
    console.log('workin');
    console.log(toDoProjects);
    console.log(localStorage.length);
});

// render current projects tasks
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


    // complete task event listener
    const tasks = document.querySelectorAll('.finish');
    tasks.forEach((box) => {
        box.addEventListener('click', (e)=>{
            project.splice(e.target.dataset.index, 1);
            renderTasks(project);
        });
    });
}

// create basic layout
layout("container", "header", "navbar", "main").compose();


// create responsive render for home by default
const ti = taskInterface(toDoProjects['Home']);
ti.addEvents();
renderProjects(toDoProjects);



const addproj = document.getElementById('addproject');
let numproj = 0;

// Add Project event listener
addproj.addEventListener('click', ()=>{
    if (numproj < 3) {
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
        numproj++;
    }
    else {
        return;
    }
});

function addProject (p) {
    // Adding Project Menu Event Listeners
    const bhead = document.getElementById('bodyhead')
    
    // setting new project
    toDoProjects[p] =  [];
    renderProjects(toDoProjects);
    const newProject = taskInterface(toDoProjects[p]);
    newProject.addEvents();
    bhead.textContent = p;
    open();
    close();
}



function open() {
    const popen = document.querySelectorAll('.popen');
    const props = Object.getOwnPropertyNames(toDoProjects);
    const bhead = document.getElementById('bodyhead');

    // Open Project Listeners
    popen.forEach((b) => {
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
            numproj--;
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

const header = document.querySelector('.header');
const clearLocal = document.createElement('button');
clearLocal.addEventListener('click', ()=>{
    console.log('cleared')
    localStorage.clear();
    toDoProjects = {Home: []};
    // create responsive render for home by default
    const ti = taskInterface(toDoProjects['Home']);
    ti.addEvents();
    renderProjects(toDoProjects);
    renderTasks(toDoProjects['Home']);
});

clearLocal.id = "clearLocal"
clearLocal.textContent = "Clear Local Storage"
header.appendChild(clearLocal);




//add todo editing
//add local storage