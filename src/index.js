import { popform, layout } from './layout';
import todo from './holder';
import render from './render.js';
import moment from 'moment';
import './style.scss';

let l = layout("container", "header", "navbar", "main").compose();
let todoArr = []; //unassigned todo's

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

// Inbox Button
const inbox = document.getElementById('inbox');
inbox.addEventListener('click', ()=> {
    resRender(todoArr);
});

// Today Button
const today = document.getElementById('day');
today.addEventListener('click', ()=> {
    const todotoday = todoArr.filter((object)=>{
        const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'hours');
        return diff <= 24 && diff > 0;
    });
    resRender(todotoday);
});

// Week Button
const week = document.getElementById('week');
week.addEventListener('click', ()=> {
    const todoweek = todoArr.filter((object)=>{
        const diff = moment(object.dd, 'YYYY-MM-DD').diff(moment(), 'days');
        return  diff <= 7 && diff >= 0;
    });
    resRender(todoweek);
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
            resRender(todoArr);
        });
    });
}