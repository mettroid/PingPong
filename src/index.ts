import "./index.html";
import "./style.scss";
import { Canvas } from './modules/Canvas';
import { Paddle } from './modules/Paddle';

const canvas = new Canvas('myCanvas', document.body);

let paddleLeft, paddleRight;
let ball;
let myReq: DOMHighResTimeStamp;


window.onload = function():void{
    init();
}
function loop(){
        let lastUpdate: DOMHighResTimeStamp = performance.now();
        let deltaTime: number;
        let correction: number;
        let fps: number;
        function frameLoop( currTime: DOMHighResTimeStamp ): void {
            myReq = window.requestAnimationFrame(frameLoop);

            deltaTime = currTime - lastUpdate;  //получаем разницу в миллисекундах, 16 или 7.5 миллисекунд кадр
            correction = deltaTime / 1000;      //получаем разницу в секундах, с помощью этого коэфициента будем стабилизировать скорость игры
            fps = 1 / correction;      // получим fps
        
            console.log(fps);
            lastUpdate = currTime;
        }
        myReq = window.requestAnimationFrame(frameLoop);
}
function init(): void {
        canvas.create();
        paddleLeft = new Paddle("paddleLeft", 0, canvas.h / 2 - 50, 30, 100, "rgb(0, 62, 248)");
        paddleRight = new Paddle("paddleRight", canvas.w - 30, canvas.h / 2 - 50, 30, 100, "rgb(0, 62, 248)");

        loop();

}