class Game {
    public lives!: number;
    public xCorrection!: number;
    public yCorrection!: number;
    private scores!: number;
    constructor( public phase: "screen_saver" | "a_game" | "game_over" | "win" ){
        this.phase = phase;
    }
    draw_screen_saver(){

    }
    draw_a_game(){

    }
    draw_game_over(){

    }
    draw_win(){

    }
}
export { Game }