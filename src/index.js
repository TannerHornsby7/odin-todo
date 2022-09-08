import layout from './layout';
import './style.scss';

let l = layout("container", "header", "navbar", "main").compose();

console.log("Hello World!");
console.log(l);
