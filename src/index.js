import { popform, layout } from './layout';
import todo from './holder'
import './style.scss';

let l = layout("container", "header", "navbar", "main").compose();
let todoArr = [];

// Add Event Listeners to Layout
const addtask = document.getElementById('addtask');

addtask.addEventListener('click', ()=>{
    popform();
    const submitbtn = document.getElementById('submit');
    
    submitbtn.addEventListener('click', ()=> {
        const formoverlay = document.querySelector('.formoverlay')
        const inputs = getInputs();
        const tile = todo(inputs);
        console.log(tile);
        todoArr.push(tile);
        formoverlay.style.display = 'none';
    });
    //update ui
});

//get all input values
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
