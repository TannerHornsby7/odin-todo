import { popform, layout } from './layout';
import todo from './holder';
import { renderTiles, renderProjs } from './render.js';
import moment from 'moment';
import './style.scss';

let i = 0;

// create responsive task interface for a todo array
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
        t.replaceWith(t);
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
        console.log(i);
        i++;
        
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


// addproj event listener
let numproj = 0;
const addproj = document.getElementById('addproject');
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
                projs[finput.value] =  [];
                indiv.style.display = 'none';
                renderProjs(projs);

                // Adding Project Menu Event Listeners
                const popen = document.querySelectorAll('.popen');
                const pdels = document.querySelectorAll('.pdel');
                const props = Object.getOwnPropertyNames(projs);
                const bhead = document.getElementById('bodyhead')

                // Open Project Listeners
                popen.forEach((b) => {
                    b.addEventListener('click', (e)=>{
                        ti.removeEvents();
                        const curr = props[e.target.dataset.pindex];
                        console.log('inside ' + curr);
                        console.log(projs[curr]);
                        renderTasks(projs[curr]);
                        const cp = taskInterface(projs[curr]);
                        cp.addEvents();
                        bhead.textContent = props[e.target.dataset.pindex];
                })});

                // Delete Project Listeners
                pdels.forEach((pdel) => {
                    pdel.addEventListener('click', (e)=>{
                        const curr = props[e.target.dataset.pindex];
                        delete projs[curr];
                        renderProjs(projs);
                        const home = taskInterface(projs['Home']);
                        home.addEvents();
                        bhead.textContent = 'Home';
                        numproj--;
                })});
                return false;
            }
        });
        numproj++;
    }
});

// now we want to be able to create, delete, and read up to 3 new projects
// a project is just a list of todo objects
// we can create a new project by creating a new array of objects
// we can read from this list of object by passing it to the task interface
// we can delete this list of objects by removing it from our main list of objects


//funct get input
//funct add responsive