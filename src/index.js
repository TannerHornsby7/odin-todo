import { popform, layout } from './layout';
import todo from './holder';
import render from './render.js';
import './style.scss';

let l = layout("container", "header", "navbar", "main").compose();
let todoArr = [];

// Add Task Event Listener
const addtask = document.getElementById('addtask');
addtask.addEventListener('click', ()=>{
    popform();
    const submitbtn = document.getElementById('submit');
    
    // Submit Form Event Listener
    submitbtn.addEventListener('click', ()=> {
        const formoverlay = document.querySelector('.formoverlay')
        const inputs = getInputs();
        const tile = todo(inputs);
        formoverlay.remove();
        todoArr.push(tile);
        // Finish Task Event Listeners
        render(todoArr);
        const task = document.querySelector('.finish');
        task.addEventListener('click', (e)=>{
            console.log(e.target.dataset.index);
            todoArr.splice(e.target.dataset.index, 1);
            render(todoArr);
        });
    });

    // Close Form Event Listener
});

// Get all form input values
function getInputs() {
    const formEl = document.forms.popform;
    const formData = new FormData(formEl);
    let t = formData.get('title');
    let d = formData.get('description')
    let dd = formData.get('duedate');
    let hp = formData.get('hpriority');
    let mp = formData.get('mpriority');
    let lp = formData.get('mpriority');
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
