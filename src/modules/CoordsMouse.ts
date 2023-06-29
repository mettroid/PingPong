import { Canvas } from "./Canvas";
export const get = function( mouseEvent: MouseEvent, canvas: Canvas ): any {
        let coordsCanvas: DOMRect = canvas.elem.getBoundingClientRect();
        return {
            x: mouseEvent.pageX - coordsCanvas.x + window.pageXOffset,
            y: mouseEvent.pageY - coordsCanvas.y + window.pageYOffset
        }
}