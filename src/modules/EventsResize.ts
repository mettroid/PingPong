import { Canvas } from "./Canvas";
import { Game } from "./Game";
class EventsResize {
    [index: string]: any ; // Хуй знает чё за хуйня и нахуя она нужна, но с ней работает this[e.type]();
    public running: boolean = false;
    public pixelRatio: number = window.devicePixelRatio;
    constructor( private game: Game,
                 private canvas: Canvas ){
                    this.game = game;
                    this.canvas = canvas;
    }
    handleEvent( e: UIEvent ){
        this[ e.type ]();
    }
    resize(){
        if( this.running ){
            return;
        }
        this.running = true;
        window.requestAnimationFrame( this.resize_as.bind( this ) );
    }
    optimizedResize(){
        switch( this.game.phase ){
            case 'screen_saver': 
                this.canvas.elem.style.width = document.documentElement.clientWidth + "px";
                this.canvas.elem.style.height = document.documentElement.clientHeight + "px";
                this.canvas.elem.width = this.pixelRatio * document.documentElement.clientWidth;  // Важно использовать document.documentElement.clientWidth а не innerWidth -(глючит при повороте экрана)
                this.canvas.elem.height = this.pixelRatio * document.documentElement.clientHeight;
            break;
            case 'a_game':
            case 'game_over':
            case 'win':
    
            break;
        }       
    }
    resize_as(){
        window.dispatchEvent( new CustomEvent( 'optimizedResize' ) );
        this.running = false;
    }
}
export { EventsResize }