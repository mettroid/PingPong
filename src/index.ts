import "./index.html";
import "./style.scss";
//import { sum } from './modules/calc.mjs';
import { Canvas } from './modules/Canvas';

let canvas = new Canvas('myCanvas', document.body);
canvas.create();

window.onload = function():void{
    init();
}
function init():void{

}