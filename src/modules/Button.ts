class Button {
    public tempColor = '';
    constructor( readonly id: string, 
                 public xpos: number, 
                 public ypos: number, 
                 public w: number, 
                 public h: number, 
                 public borderWidth: number, 
                 public borderColor: string, 
                 public buttonColor: string, 
                 public fontSize: number,
                 public fontWeight: number,
                 public fontFamily: string,
                 public fontColor: string,
                 public fontText: string ){
                    this.id = id;
                    this.xpos = xpos;
                    this.ypos = ypos;
                    this.w = w;
                    this.h = h;
                    this.borderWidth = borderWidth;
                    this.borderColor = borderColor;
                    this.buttonColor = buttonColor;
                    this.fontSize = fontSize;
                    this.fontWeight = fontWeight;
                    this.fontFamily = fontFamily;
                    this.fontColor = fontColor;
                    this.fontText = fontText;
    }
    draw( canvas: any ): void {
        this.button( canvas );
        this.text( canvas );

    }
    private button( canvas: any ){
        canvas.ctx.save();
        canvas.ctx.lineWidth = this.borderWidth;
        canvas.ctx.strokeStyle = this.borderColor;
        canvas.ctx.fillStyle = this.buttonColor;
        canvas.ctx.beginPath();
        canvas.ctx.rect( this.xpos, this.ypos, this.w, this.h );
        canvas.ctx.fill();
        canvas.ctx.stroke();
        canvas.ctx.restore();
    }
    private text( canvas: any ){
        canvas.ctx.save();
        canvas.ctx.textAlign = "center";
        canvas.ctx.textBaseline = "middle";
        canvas.ctx.strokeStyle = this.fontColor;
        canvas.ctx.lineWidth = this.fontWeight;
        canvas.ctx.font = `${this.fontSize}px ${this.fontFamily}`; 
        canvas.ctx.strokeText( this.fontText, this.xpos + this.w / 2, this.ypos + this.h / 2 );
        canvas.ctx.restore();
    }
}
export { Button }