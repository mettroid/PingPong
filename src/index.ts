import "./index.html";
import "./style.scss";
import { Canvas } from './modules/Canvas';
import { Button } from './modules/Button';
import { Paddle } from './modules/Paddle';

const canvas = new Canvas('myCanvas', document.body, "rgb(4, 255, 242)");


let paddleLeft: Paddle, paddleRight: Paddle;
let buttonEasy: Button, buttonNormal: Button, buttonDifficult: Button;
let ball: any;
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
            
            canvas.ctx.save();

            canvas.elem.width = window.innerWidth;  // каждый кадр изменяем размер холста
            canvas.elem.height = window.innerHeight;
            canvas.ctx.clearRect( 0, 0, canvas.elem.width, canvas.elem.height );
            canvas.ctx.scale( window.innerWidth / canvas.w, window.innerHeight / canvas.h ); // делим на первоначальный размер холста

            buttonEasy.draw( canvas );
            buttonNormal.draw( canvas );
            buttonDifficult.draw( canvas );
            paddleLeft.draw( canvas.ctx );
            paddleRight.draw( canvas.ctx );

            canvas.ctx.restore();
            
            lastUpdate = currTime;
        }
        myReq = window.requestAnimationFrame(frameLoop);
}
function init(): void {
        canvas.create();
        paddleLeft = new Paddle("paddleLeft", 0, (canvas.elem.height - 100) / 2, 30, 100, "rgb(0, 62, 248)");
        paddleRight = new Paddle("paddleRight", canvas.elem.width - 30, (canvas.elem.height - 100) / 2, 30, 100, "rgb(0, 62, 248)");
        buttonEasy = new Button( "btnEasy", canvas.elem.width / 2 - 150, 350, 150, 60, 10, "rgb(0,0,0)", "rgb(243, 227, 7)", 40, 2, "samba", "rgb(50, 1, 107)", "Easy" );
        buttonNormal = new Button( "btnNormal", (canvas.elem.width - 150) / 2, canvas.elem.height / 2 - 30, 150, 60, 10, "rgb(0,0,0)", "rgb(63, 243, 9)", 40, 2, "samba", "rgb(50, 1, 107)", "Normal" );
        buttonDifficult = new Button( "buttonDifficult", canvas.elem.width / 2, 600, 150, 60, 10, "rgb(0,0,0)", "rgb(243, 4, 4)", 40, 2, "samba", "rgb(50, 1, 107)", "Difficult" );

        loop();
}