class Canvas {
        readonly id: string;  // Это св-во можно назначить либо тут либо в конструкторе, в самом классе его можно только читать; читается везде
        readonly parent: HTMLElement;
        readonly color: string; 
        elem!: HTMLCanvasElement; // Эти сво-во тут не инициализировать, только в конструкторе или позже в классе
        ctx!: CanvasRenderingContext2D;
        defaultWidth!: number;
        defaultHeight!: number;
        pixelRatio!: number;
        constructor( id: string, parent: HTMLElement, color: string ){
            this.id = id;
            this.parent = parent;
            this.color = color;
            this.defaultWidth = 1920; // размер холста по умолчанию, в пределах этих размеров будут размешён контент холста 
            this.defaultHeight = 1080;
        }
        public create(): void {
            this.elem = document.createElement('canvas');
            this.elem.id = this.id;
            this.elem.classList.add('body__canvas');
            this.ctx = this.elem.getContext('2d') as CanvasRenderingContext2D;
            this.parent.append(this.elem);
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
