import { popform, layout } from './layout';
import todo from './holder';
import render from './render.js';
import moment from 'moment';
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
        resRender(todoArr);
    });
    // Close Form Event Listener
});

// Today Filter
const today = document.getElementById('day');
console.log(today);
today.addEventListener('click', ()=> {
    const todotoday = todoArr.filter((object)=>{
        console.log(object.dd);
        return moment(object.dd).diff(moment(), 'hours') < 25;
    });
    console.log(todotoday);
    resRender(todotoday);
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

// makes a responsive render
function resRender(objArr) {
    render(objArr);
    const tasks = document.querySelectorAll('.finish');
    tasks.forEach((box) => {
        box.addEventListener('click', (e)=>{
            todoArr.splice(e.target.dataset.index, 1);
            resRender(todoArr);
        });
    });
}