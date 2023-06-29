class Canvas {
        readonly id: string;  // Это св-во можно назначить либо тут либо в конструкторе, в самом классе его можно только читать; читается везде
        readonly parent: HTMLElement;
        readonly color: string; 
        elem!: HTMLCanvasElement; // Эти сво-во тут не инициализировать, только в конструкторе или позже в классе
        ctx!: CanvasRenderingContext2D;
        w!: number;
        h!: number;
        pixelRatio!: number;
        constructor( id: string, parent: HTMLElement, color: string ){
            this.id = id;
            this.parent = parent;
            this.color = color;
            this.w = window.innerWidth;
            this.h = window.innerHeight;
            this.pixelRatio = window.devicePixelRatio || 1;
        }
        public create(): void {
            this.elem = document.createElement('canvas');
            this.elem.id = this.id;
            this.elem.classList.add('body__canvas');
            
            this.elem.style.background = this.color;
            this.elem.style.width = "100vw";
            this.elem.style.height = "100vh";

            this.ctx = this.elem.getContext('2d') as CanvasRenderingContext2D;

            this.parent.append(this.elem);   
            //this.elem.append('body__canvas');        
            this.elem.width = window.innerWidth;//this.elem.clientWidth;
            this.elem.height = window.innerHeight;//this.elem.clientHeight;           
            
        }
        public resize(){
            //console.log(this.elem.clientWidth);
            //if( this.elem.width !== window.innerWidth
            //||  this.elem.height !== window.innerHeight ){
                //console.log("@");
                    //this.elem.width = window.innerWidth;
                    //this.elem.height = window.innerHeight;
                    //this.elem.style.width = window.innerWidth + "px";               
            //}
        }
}
export { Canvas }
