import { popform, layout } from './layout';
import todo from './holder';
import { renderTiles, renderProjs } from './render.js';
import moment from 'moment';
import './style.scss';

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

// render current projects tasks
function renderTasks(arr) {
    console.log('tasks rendered')
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

// by default, we render home as our open project
let projs = {Home: []};

// create basic layout
layout("container", "header", "navbar", "main").compose();

// create responsive render for home by default
const ti = taskInterface(projs['Home']);
ti.addEvents();

let numproj = 0;
const addproj = document.getElementById('addproject');

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
    projs[p] =  [];
    renderProjs(projs);
    const newProject = taskInterface(projs[p]);
    newProject.addEvents();
    bhead.textContent = p;

    openclose();
}

function openclose() {
    const popen = document.querySelectorAll('.popen');
    const props = Object.getOwnPropertyNames(projs);
    const bhead = document.getElementById('bodyhead')


    // Open Project Listeners
    popen.forEach((b) => {
        b.addEventListener('click', (e)=>{
            const curr = props[e.target.dataset.pindex];
            console.log('inside ' + curr);
            console.log(projs[curr]);
            renderTasks(projs[curr]);
            const cp = taskInterface(projs[curr]);
            cp.addEvents();
            bhead.textContent = props[e.target.dataset.pindex];
    })});

    const pdels = document.querySelectorAll('.pdel');

    // Delete Project Listeners
    pdels.forEach((pdel) => {
        pdel.addEventListener('click', (e)=>{
            const curr = props[e.target.dataset.pindex];
            delete projs[curr];
            renderProjs(projs);
            const home = taskInterface(projs['Home']);
            home.addEvents();
            renderTasks(projs['Home'])
            bhead.textContent = 'Home';
            numproj--;
    })});
    return false;
}

//fix day filter
//add local storage