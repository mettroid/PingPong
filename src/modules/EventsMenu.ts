import { Game } from "./Game";
import { Button } from "./Button";
import { Canvas } from "./Canvas";
import * as Coords from "./CoordsMouse";
class EventsMenu {
    [index: string]: any ; // Хуй знает чё за хуйня и нахуя она нужна, но с ней работает this[e.type]();
    private currMoveBtn: string = '';
    private currDownBtn: string = '';
    private currUpBtn: string = '';
    constructor( private game: Game, 
                 private canvas: Canvas,
                 private btnEasy: Button, 
                 private btnNormal: Button, 
                 private btnDifficult: Button ){
                    this.game = game;
                    this.canvas = canvas;
                    this.btnEasy = btnEasy;
                    this.btnNormal = btnNormal;
                    this.btnDifficult = btnDifficult;
    }
    handleEvent( e: MouseEvent ): void {
        if( this.game.phase !== 'screen_saver' ) return;    
        this[e.type](e);
        
    }
    private mousedown( e: MouseEvent ){
        let detect: boolean = this.detectAs( e );
        console.log(this.currDownBtn);
    }
    private mouseup( e: MouseEvent ){
        let detect: boolean = this.detectAs( e );
        if( this.currDownBtn === this.currUpBtn 
        &&  this.currDownBtn !== '' 
        &&  this.currUpBtn !== '' ){
            this.game.phase = 'a_game';
        }
        
        this.currDownBtn = '';
        this.currUpBtn = '';
        this.currMoveBtn = '';
    }    
    private mousemove( e: MouseEvent ){
        let detect: boolean = this.detectAs( e );
        if( !this.currMoveBtn ) return;
        if( detect ){
            if( this[this.currMoveBtn].tempColor ) return;
            this[this.currMoveBtn].tempColor = this[this.currMoveBtn].buttonColor;
            this[this.currMoveBtn].buttonColor = "white";
        } else {
            if( this[this.currMoveBtn].tempColor === '' ) return;
            this[this.currMoveBtn].buttonColor = this[this.currMoveBtn].tempColor;
            this[this.currMoveBtn].tempColor = '';
            this.currMoveBtn = '';          
        }
    }
    private detectAs( e: MouseEvent ): boolean {
        let coords: any = Coords.get( e, this.canvas );
        let detect = (  this.getDetectBtn( coords, "btnEasy", e.type )
                     || this.getDetectBtn( coords, "btnNormal", e.type )
                     || this.getDetectBtn( coords, "btnDifficult", e.type ));  
        return detect;      
    }
    private getDetectBtn( mouse: { x: number, y: number }, btn: string, eventType: string ): boolean {
                    //console.log( mouse.x );
                    let detect: boolean = (  mouse.x > this[btn].coordsForMouse.xpos
                                          && mouse.x < this[btn].coordsForMouse.xpos + this[btn].coordsForMouse.w
                                          && mouse.y > this[btn].coordsForMouse.ypos
                                          && mouse.y < this[btn].coordsForMouse.ypos + this[btn].coordsForMouse.h ); 
                    if( detect ){
                        if( eventType === 'mousemove' ){
                            this.currMoveBtn = btn;
                        }
                        if( eventType === 'mousedown' ){
                            this.currDownBtn = btn;
                        }
                        if( eventType === 'mouseup' ){
                            this.currUpBtn = btn;
                        }
                    } 

                    return detect;
    }
}
export { EventsMenu }