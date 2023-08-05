import "./index.html";
import "./style.scss";
import { Canvas } from './modules/Canvas';
import { Button } from './modules/Button';
import { Paddle } from './modules/Paddle';
import { Game } from './modules/Game';
import { EventsMenu } from "./modules/EventsMenu";
import { EventsResize } from "./modules/EventsResize";

const canvas = new Canvas('myCanvas', document.body, "rgb(4, 255, 242)");

let paddleLeft: Paddle, paddleRight: Paddle;
let buttonEasy: Button, buttonNormal: Button, buttonDifficult: Button;
let ball: any;
let myReq: DOMHighResTimeStamp;
let game: Game;
let eventsMenu: EventsMenu;
let eventsRisize: EventsResize;

let pixelRatio: number = devicePixelRatio;

window.onload = function():void{
    init();
}
function loop(){
        let lastUpdate: DOMHighResTimeStamp = performance.now();
        let deltaTime: number;
        let correction: number;
        let fps: number;
        
        
        let gameWidth: number;
        let gameHeight: number;
        let scaleToFitX: number;
        let scaleToFitY: number;
        let currentScreenRatio: number;
        let optimRatio: number;
        function frameLoop( currTime: DOMHighResTimeStamp ): void {
            myReq = window.requestAnimationFrame(frameLoop);

            deltaTime = currTime - lastUpdate;  //получаем разницу в миллисекундах, 16 или 7.5 миллисекунд кадр
            correction = deltaTime / 1000;      //получаем разницу в секундах, с помощью этого коэфициента будем стабилизировать скорость игры
            fps = 1 / correction;      // получим fps
            
            pixelRatio = window.devicePixelRatio;
            //let colDepth = window.screen.colorDepth;  // глубина цвета обычно 24
            //let pixDepth = window.screen.pixelDepth  // глудина битов на пиксель
            //console.log(pixelRatio + " " + canvas.elem.clientWidth);
            //console.log(colDepth);
            //console.log(pixDepth);

            
            canvas.ctx.clearRect( 0, 0, canvas.elem.width, canvas.elem.height);
            switch( game.phase ){
                case "screen_saver":      
                    let d1 = new Date().getTime();
                    
 
                    


                    buttonEasy.draw( canvas );
                    buttonNormal.draw( canvas );
                    buttonDifficult.draw( canvas );

                    let d2 = new Date().getTime();
                    //console.log(d2 - d1);     
                break;
                case "a_game":                   
                    gameWidth = document.documentElement.clientWidth * pixelRatio;
                    gameHeight = document.documentElement.clientHeight * pixelRatio;
                    scaleToFitX = gameWidth / 1920;
                    scaleToFitY = gameHeight / 1080;

                    currentScreenRatio = gameWidth / gameHeight;   // соотношение экрана
                    optimRatio = Math.min(scaleToFitX, scaleToFitY); // минимальный коэф масштаба
                    
                    if( currentScreenRatio >= 1.77 && currentScreenRatio <= 1.79 ){
                         canvas.elem.width = gameWidth;
                         canvas.elem.style.width = document.documentElement.clientWidth + "px";  
                         
                         canvas.elem.height = gameHeight;
                         canvas.elem.style.height = document.documentElement.clientHeight + "px";   

                    } else {
                        canvas.elem.width = 1920 * optimRatio;
                        canvas.elem.style.width = canvas.elem.width / pixelRatio + "px";  
                        canvas.elem.height = 1080 * optimRatio;
                        canvas.elem.style.height = canvas.elem.height / pixelRatio  + "px";                         
                    }

                    canvas.ctx.save();      // Ни css размеры canvas.clientWidth clientHeight ни размеры буфера canvas.width height не меняются при scale
                    canvas.ctx.scale( optimRatio , optimRatio ); // масштабируем до физического разрешения, чисто координаты рисунков, сам  canvas не масштабится
                    
                    paddleLeft.draw( canvas.ctx );
                    paddleRight.draw( canvas.ctx );
                    canvas.ctx.restore();
                    
                break;
                case "game_over":

                break;
                case "win":

                break;
            }

            
            
            lastUpdate = currTime;
            
        }
        myReq = window.requestAnimationFrame(frameLoop);
}

function init(): void {
        canvas.create();

        paddleLeft = new Paddle("paddleLeft", 0, (canvas.defaultHeight - 100) / 2, 30, 100, "rgb(0, 62, 248)");                         // создадим ракетки по координатам 1920 x 1080
        paddleRight = new Paddle("paddleRight", canvas.defaultWidth - 30, (canvas.defaultHeight - 100) / 2, 30, 100, "rgb(0, 62, 248)");

        buttonEasy = new Button( "btnEasy",  0.3, 0.3, 0.3, 0.1, 0.01, "rgb(0,0,0)", "rgb(243, 227, 7)", 0.08, 2, "samba", "rgb(50, 1, 107)", "Easy" ); // создадим кнопки с размерами и позицией относительно размера холста
        buttonNormal = new Button( "btnNormal", 0.5, 0.5, 0.3, 0.1, 0.01, "rgb(0,0,0)", "rgb(63, 243, 9)", 0.08, 2, "samba", "rgb(50, 1, 107)", "Normal" );
        buttonDifficult = new Button( "btnDifficult", 0.7, 0.7, 0.3, 0.1, 0.01, "rgb(0,0,0)", "rgb(243, 4, 4)", 0.08, 2, "samba", "rgb(50, 1, 107)", "Difficult" );

        game = new Game( "screen_saver" );

        eventsMenu = new EventsMenu( game, canvas, buttonEasy, buttonNormal, buttonDifficult );
        eventsRisize = new EventsResize( game, canvas );

        canvas.elem.addEventListener( 'mousemove', eventsMenu );
        canvas.elem.addEventListener( 'mousedown', eventsMenu );
        canvas.elem.addEventListener( 'mouseup', eventsMenu );

        window.addEventListener( 'resize', eventsRisize );  // этот обработчик пропускает событие resise только когда готов requestAnimationFrame
        window.addEventListener( 'optimizedResize', eventsRisize );
        
        eventsRisize.resize();

        loop();
}