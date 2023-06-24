class Canvas {
        readonly id: string;  // Это св-во можно назначить либо тут либо в конструкторе, в самом классе его можно только читать; читается везде
        readonly parent: HTMLElement;
        width: number;        // Эти можно тут присвоить или в конструкторе, и только потом можно переопределить в самом классе но не за классомж читается везде      
        height: number;
        elem!: HTMLCanvasElement; // Эти сво-во тут не инициализировать, только в конструкторе или позже в классе
        ctx!: CanvasRenderingContext2D;
        constructor( id: string, parent: HTMLElement ){
            this.id = id;
            this.parent = parent;
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            
        }
        create(){
            this.elem = document.createElement('canvas');
            this.elem.id = this.id;
            this.elem.width = this.width;
            this.elem.height = this.height;
            this.elem.style.background = 'yellow';
            this.ctx = this.elem.getContext('2d') as CanvasRenderingContext2D;
            console.dir(this.elem);
            this.parent.append(this.elem);
            console.log(this.elem.width);
            console.log(window.innerWidth);
        }
}
export { Canvas }
