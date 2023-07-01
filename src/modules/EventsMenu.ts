import { Game } from "./Game";
import { Button } from "./Button";
import { Canvas } from "./Canvas";
import * as Coords from "./CoordsMouse";
class EventsMenu {
    [index: string]: any ; // Хуй знает чё за хуйня и нахуя она нужна, но с ней работает this[e.type]();
    private currBtn!: string;
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
    private mousedown(){

    }
    private mouseup(){

    }    
    private mousemove( e: MouseEvent ){
        let coords: any = Coords.get( e, this.canvas );
        let detect = (  this.getDetectBtn( coords, "btnEasy" )
                     || this.getDetectBtn( coords, "btnNormal" )
                     || this.getDetectBtn( coords, "btnDifficult" ));
        if( !this.currBtn ) return;
        if( detect ){
            if( this[this.currBtn].tempColor ) return;
            this[this.currBtn].tempColor = this[this.currBtn].buttonColor;
            this[this.currBtn].buttonColor = "white";
        } else {
            if( this[this.currBtn].tempColor === '' ) return;
            this[this.currBtn].buttonColor = this[this.currBtn].tempColor;
            this[this.currBtn].tempColor = '';
            this.currBtn = '';          
        }
    }
    private getDetectBtn( mouse: { x: number, y: number }, btn: string ): any {
                    console.log
                    let detect: boolean = (  mouse.x > this[btn].currCoords.xpos
                                          && mouse.x < this[btn].currCoords.xpos + this[btn].currCoords.w
                                          && mouse.y > this[btn].currCoords.ypos
                                          && mouse.y < this[btn].currCoords.ypos + this[btn].currCoords.h ); 
                    if( detect ){
                        this.currBtn = btn;
                    } 

                    return detect;
    }
}
export { EventsMenu }