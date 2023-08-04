class Button {
    [index: string]: any;
    public tempColor = '';
    public coordsForDraw: any = {};  // координаты по физическим пикселям для рисования
    public coordsForMouse: any = {}; // координаты по css пикселям для координат мыши
    constructor( readonly id: string, 
                 public xRatio: number, 
                 public yRatio: number, 
                 public wRatio: number, 
                 public hRatio: number, 
                 public borderWidthRatio: number, 
                 public borderColor: string, 
                 public buttonColor: string, 
                 public fontSizeRatio: number,
                 public fontWeight: number,
                 public fontFamily: string,
                 public fontColor: string,
                 public fontText: string ){
                    this.id = id;
                    this.xRatio = xRatio;
                    this.yRatio = yRatio;
                    this.wRatio = wRatio;
                    this.hRatio = hRatio;
                    this.borderWidthRatio = borderWidthRatio;
                    this.borderColor = borderColor;
                    this.buttonColor = buttonColor;
                    this.fontSizeRatio = fontSizeRatio;
                    this.fontWeight = fontWeight;
                    this.fontFamily = fontFamily;
                    this.fontColor = fontColor;
                    this.fontText = fontText;
    }
    draw( canvas: any ): void {
        let minPhysPx: number = Math.min( canvas.elem.width, canvas.elem.height );          // наименьшая из сторон экрана в физических пикселях
        let minCssPx: number = Math.min( canvas.elem.clientWidth, canvas.elem.clientHeight ); // наименьшая из сторон экрана в CSS пикселях
        this.setCoords( canvas.elem.width, canvas.elem.height, minPhysPx, "coordsForDraw" ); // запишем координаты кнопок для отрисовки на холсте по физическим координатам 
        this.setCoords( canvas.elem.clientWidth, canvas.elem.clientHeight, minCssPx, "coordsForMouse" );
        this.button( canvas );
        this.text( canvas, minPhysPx );

    }
    private button( canvas: any ){

        canvas.ctx.save();
        canvas.ctx.lineWidth = this.coordsForDraw.borderWidth;
        canvas.ctx.strokeStyle = this.borderColor;
        canvas.ctx.fillStyle = this.buttonColor;
        canvas.ctx.beginPath();
        canvas.ctx.rect( this.coordsForDraw.xpos , this.coordsForDraw.ypos , this.coordsForDraw.w , this.coordsForDraw.h );
        canvas.ctx.fill();
        canvas.ctx.stroke();
        canvas.ctx.restore();

    }
    private text( canvas: any, min: number ){
        canvas.ctx.save();
        canvas.ctx.textAlign = "center";
        canvas.ctx.textBaseline = "middle";
        canvas.ctx.strokeStyle = this.fontColor;
        canvas.ctx.lineWidth = this.fontWeight;
        canvas.ctx.font = `${this.fontSizeRatio * min }px ${this.fontFamily}`; 
        canvas.ctx.strokeText( this.fontText, this.coordsForDraw.xpos + (this.coordsForDraw.w / 2) , this.coordsForDraw.ypos + (this.coordsForDraw.h / 2) );
        canvas.ctx.restore();
    }
    private setCoords( canvasWidth: number, canvasHeight: number, min: number, containerCoords: string ){

        this[containerCoords].w = min * this.wRatio;
        this[containerCoords].h = min * this.hRatio;        
        this[containerCoords].xpos = (canvasWidth * this.xRatio) - (this[containerCoords].w / 2) ;
        this[containerCoords].ypos = (canvasHeight * this.yRatio) - (this[containerCoords].h / 2) ;
        this[containerCoords].borderWidth = this.borderWidthRatio * min;

    }
}
export { Button }