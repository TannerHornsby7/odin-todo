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
        todoArr.push(todo(inputs));
        formoverlay.style.display = 'none';
        console.log(todoArr);
    });
    //update ui
});

//get all input values
function getInputs() {
    const formEl = document.forms.popform;
    const formData = new FormData(formEl);
    let t = formData.get('title');
    let d = formData.get('description')
    let dd = formData.get('date');
    let p = formData.get('radio');
    let n = formData.get('note');

    return {n, d, dd, p}
}




console.log("Hello World!");
console.log(l);

const john = todo("John", "john is a smelly boy", "1/22/2022", "HIGH", "he really stinks");
john.setVal("t", "David");
console.log(john);
