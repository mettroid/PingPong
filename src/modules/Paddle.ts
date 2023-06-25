class Paddle {
    public id: string;
    public xpos: number;
    public ypos: number;    
    public xmov: number = 0;
    public ymov: number = 0; // Эта векторная скорость нужна лишь при управлении с клавиш
    public w: number;
    public h: number;
    public color: string;
    constructor( id: string, xpos: number, ypos: number, w: number, h: number, color: string ){
        this.id = id;
        this.xpos = xpos;
        this.ypos = ypos;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    draw(ctx: CanvasRenderingContext2D){
        ctx.save();
        ctx.fillStyle = String(this.color);
        console.log(ctx);
        ctx.fillRect(this.xpos, this.ypos, this.w, this.h);
    }
}
export { Paddle }