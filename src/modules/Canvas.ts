class Canvas {
        readonly id: string;  // Это св-во можно назначить либо тут либо в конструкторе, в самом классе его можно только читать; читается везде
        readonly parent: HTMLElement;
        readonly color: string; 
        elem!: HTMLCanvasElement; // Эти сво-во тут не инициализировать, только в конструкторе или позже в классе
        ctx!: CanvasRenderingContext2D;
        w: number;
        h: number;
        constructor( id: string, parent: HTMLElement, color: string ){
            this.id = id;
            this.parent = parent;
            this.color = color;
            this.w = window.innerWidth;
            this.h = window.innerHeight;
        }
        public create(): void {
            this.elem = document.createElement('canvas');
            this.elem.id = this.id;
            this.elem.width = this.w;
            this.elem.height = this.h;
            this.elem.style.background = this.color;
            this.ctx = this.elem.getContext('2d') as CanvasRenderingContext2D;
            console.dir(this.elem);
            this.parent.append(this.elem);
        }
}
export { Canvas }
