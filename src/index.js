import { popform, layout } from './layout';
import { todo, projects } from './holder';
import { renderTiles, makeProjs } from './render.js';
import moment from 'moment';
import ci from './assets/ci.png'
import './style.scss';

let projs = projects();

/* all of these methods can be placed inside a module that takes an object array
   and performs interfacing tasks for the given object array taskInterface
*/
const taskInterface = function(todoArr = []) {

    const l = layout("container", "header", "navbar", "main").compose();
    // Add Task Event Listener
    const addtask = document.getElementById('addtask');
    addtask.addEventListener('click', ()=>{
        popform();
        const submitbtn = document.getElementById('submit');
        
        // Submit Form Event Listener
        submitbtn.addEventListener('click', ()=> {
            const formoverlay = document.querySelector('.formoverlay')
            const inputs = getFormInputs();
            const tile = todo(inputs);
            formoverlay.remove();
            todoArr.push(tile);
            // Finish Task Event Listeners
            renderTasks(todoArr);
        });
        // Close Form Event Listener
    });

    // Inbox Button
    const inbox = document.getElementById('inbox');
    inbox.addEventListener('click', ()=> {
        renderTasks(todoArr);
    });

    // Today Button
    const today = document.getElementById('day');
    today.addEventListener('click', ()=> {
        const todotoday = todoArr.filter((object)=>{
            const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'hours');
            return diff <= 24 && diff > 0;
        });
        renderTasks(todotoday);
    });

    // Week Button
    const week = document.getElementById('week');
    week.addEventListener('click', ()=> {
        const todoweek = todoArr.filter((object)=>{
            const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'days');
            return  diff <= 7 && diff >= 0;
        });
        renderTasks(todoweek);
    });

    // Get all task form input values
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

    // Tasks Event Listeners
    function renderTasks(objArr) {

        // Create DOM tiles from task list
        renderTiles(objArr);

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

    // remove interface
    function removeRes() {
        removeEventListener('click', addtask);
        removeEventListener('click', inbox);
        removeEventListener('click', today);
        removeEventListener('click', week);
    }

    return { l, removeRes }
}
let numproj = 0;
// by default, we render unassigned as our open project
const initial = taskInterface(projs.getVal(initial));
initial.l;

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
                console.log('entered!')
                projs.setVal(finput.value, []);
                console.log(finput.value);
                indiv.style.display = 'none';
                makeProjs(projects);
                return false;
            }
        });
        console.log('added project');
        numproj++;
    }
})
initial.removeRes();





// now we want to be able to create, delete, and read up to 3 new projects
// a project is just a list of todo objects
// we can create a new project by creating a new array of objects
// we can read from this list of object by passing it to the task interface
// we can delete this list of objects by removing it from our main list of objects


//funct get input
//funct add responsive