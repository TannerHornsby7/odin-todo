import { popform, layout } from './layout';
import todo from './holder';
import { renderTiles, renderProjs } from './render.js';
import moment from 'moment';
import './style.scss';

// create responsive task interface for a todo array
const taskInterface = function(todoArr) {
    const addtask = document.getElementById('addtask');
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('day');
    const week = document.getElementById('week');
    
    // Add Task Event Listener
    addtask.addEventListener('click', addT);

    // Inbox Button
    inbox.addEventListener('click', renderInbox);

    // Today Button
    today.addEventListener('click', renderDayTasks);

    // Week Button
    week.addEventListener('click', renderWeekTasks);

    // Event Listener Functions
    function getFormInputs() {
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
                todoArr.splice(e.target.dataset.index, 1);
                renderTasks(todoArr);
            });
        });
    }

    function renderInbox(){
        renderTasks(todoArr);
    }

    function renderDayTasks() {
        const todotoday = todoArr.filter((object)=>{
            const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'hours');
            return diff <= 24 && diff > 0;
        });
        renderTasks(todotoday);
    }

    function renderWeekTasks () {
        const todoweek = todoArr.filter((object)=>{
            const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'days');
            return diff <= 7 && diff > 0;
        });
        renderTasks(todoweek);
    }

    function addT() {
        console.log('clicked')
        popform();
        const submitbtn = document.getElementById('submit');

        // submitbtn.removeEventListener('click', sub);
        
        // Submit Form Event Listener
        submitbtn.addEventListener('click', sub);

        function sub() {
            const formoverlay = document.querySelector('.formoverlay')
            const inputs = getFormInputs();
            const tile = todo(inputs);
            formoverlay.remove();
            todoArr.push(tile);
            renderInbox(todoArr);
            // Finish Task Event Listeners
        }
    }

    // remove interface
    function removeRes() {
        addtask.removeEventListener('click', addT);
        inbox.removeEventListener('click', renderTasks);
        today.removeEventListener('click', renderDayTasks);
        week.removeEventListener('click', renderWeekTasks);
    }

    return;
}

// by default, we render home as our open project
let projs = {Home: []};
// create basic layout
layout("container", "header", "navbar", "main").compose();
// create responsive render for home by default
taskInterface(projs['Home']);


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
                        taskInterface(projs[props[e.target.dataset.pindex]]);
                        bhead.textContent = props[e.target.dataset.pindex];
                })});

                // Delete Project Listeners
                pdels.forEach((pdel) => {
                    pdel.addEventListener('click', (e)=>{
                    delete projs[props[e.target.dataset.pindex]];
                    renderProjs(projs);
                    taskInterface(projs['Home']);
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