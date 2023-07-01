class Button {
    public tempColor = '';
    public currCoords: any = {};
    constructor( readonly id: string, 
                 public xRatio: number, 
                 public yRatio: number, 
                 public wRatio: number, 
                 public hRatio: number, 
                 public borderWidth: number, 
                 public borderColor: string, 
                 public buttonColor: string, 
                 public fontSize: number,
                 public fontWeight: number,
                 public fontFamily: string,
                 public fontColor: string,
                 public fontText: string ){
                    this.id = id;
                    this.xRatio = xRatio;
                    this.yRatio = yRatio;
                    this.wRatio = wRatio;
                    this.hRatio = hRatio;
                    this.borderWidth = borderWidth;
                    this.borderColor = borderColor;
                    this.buttonColor = buttonColor;
                    this.fontSize = fontSize;
                    this.fontWeight = fontWeight;
                    this.fontFamily = fontFamily;
                    this.fontColor = fontColor;
                    this.fontText = fontText;
    }
    draw( canvas: any, min: number ): void {
        this.setCoords( canvas, min );
        this.button( canvas, min );
        this.text( canvas, min );

    }
    private button( canvas: any, min: number ){


        canvas.ctx.save();
        canvas.ctx.lineWidth = this.borderWidth;
        canvas.ctx.strokeStyle = this.borderColor;
        canvas.ctx.fillStyle = this.buttonColor;
        canvas.ctx.beginPath();
        canvas.ctx.rect( this.currCoords.xpos , this.currCoords.ypos , this.currCoords.w , this.currCoords.h );
        canvas.ctx.fill();
        canvas.ctx.stroke();
        canvas.ctx.restore();

        console.log( this.currCoords.h );
    }
    private text( canvas: any, min: number ){
        canvas.ctx.save();
        canvas.ctx.textAlign = "center";
        canvas.ctx.textBaseline = "middle";
        canvas.ctx.strokeStyle = this.fontColor;
        canvas.ctx.lineWidth = this.fontWeight;
        canvas.ctx.font = `${this.fontSize}px ${this.fontFamily}`; 
        //canvas.ctx.strokeText( this.fontText, this.xpos + this.w / 2, this.ypos + this.h / 2 );
        canvas.ctx.restore();
    }
    private setCoords( canvas: any, min: number ){

        this.currCoords.w = min * this.wRatio;
        this.currCoords.h = min * this.hRatio;        
        this.currCoords.xpos = (canvas.elem.width * this.xRatio) - (this.currCoords.w / 2) ;
        this.currCoords.ypos = (canvas.elem.height * this.yRatio) - (this.currCoords.h / 2) ;
    }
}
export { Button }