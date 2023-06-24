import "./index.html";
import "./style.scss";
import { Canvas } from './modules/Canvas';
import { Paddle } from './modules/Paddle';

let canvas = new Canvas('myCanvas', document.body);

console.log(canvas.elem);
window.onload = function():void{
    init();
}
function init():void{
        canvas.create();
        

}