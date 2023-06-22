class Canvas {
        id: string;
        parent: HTMLElement ;
        width: number;
        height: number;
        element!: HTMLCanvasElement;
        ctx!: CanvasRenderingContext2D;
        constructor( id: string, parent: HTMLElement ){
            this.id = id;
            this.parent = parent;
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
        create(){
            this.element = document.createElement('canvas');
            this.element.id = this.id;
            this.element.width = this.width;
            this.element.height = this.height;
            this.element.style.background = 'yellow';
            //this.ctx = this.element.getContext('2d');

            this.parent.append(this.element);
            console.log(this.element.width);
            console.log(window.innerWidth);
        }
}
export { Canvas }
