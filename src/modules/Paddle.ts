class Paddle {
    id: String;
    xpos: Number;
    ypos: Number;    
    xmov: Number = 0;
    ymov: Number; // Эта векторная скорость нужна лишь при управлении с клавиш
    w: Number;
    h: Number;
    color: String;
    constructor( id: String, xpos: Number, ypos: Number, ymov: Number, w: Number, h: Number, color: String ){
        this.id = id;
        this.xpos = xpos;
        this.ypos = ypos;
        this.ymov = ymov;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    draw(){

    }
}
export { Paddle }