class Ball {
    public tempx!: number;
    public tempy!: number;
    constructor( public xpos: number,
                 public ypos: number,
                 public xmov: number,
                 public ymov: number,
                 private radius: number){
                        this.xpos = Math.round( xpos ); 
                        this.ypos = Math.round( ypos ); 
                        this.xmov = xmov;
                        this.ymov = ymov;
                        this.radius = radius;
    }
    public draw(){

    }
    public getTempPos(){
        this.tempx = this.xpos + this.xmov;
        this.tempy = this.ypos + this.ymov;
    }

}
export { Ball }