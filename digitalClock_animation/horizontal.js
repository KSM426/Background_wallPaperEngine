import { ColorSet } from "./colorSet.js";

export class Horizontal {
    constructor(onoff, x, y, l, n) {
        this.color = n;

        this.onoff = onoff;
        this.x = x;
        this.y = y;
        this.length = l;
        this.l43 = this.length * 4 / 3;
        this.l6 = this.length / 6;
        this.lineSetX = [this.l43, this.l6, -1 *this.l6, -1 * this.l43, -1 * this.l6, this.l6];
        this.lineSetY = [0, this.l6, this.l6, 0, -1 * this.l6, -1 * this.l6];
        this.drawX = this.x - this.l43 / 2;
        this.drawY = this.y - this.l6;
    }

    resize(){
        
    }

    animate(ctx){
        ctx.strokeStyle = this.color.strokeColor[this.color.strokeNum];
        ctx.lineWidth = 1;

        ctx.fillStyle = this.color.fillColor[this.color.fillNum];

        ctx.save();
        ctx.moveTo(this.drawX, this.drawY);
        ctx.beginPath();

        var x = this.drawX;
        var y = this.drawY;
        for(let i=0; i<6; i++){
            ctx.lineTo(x, y);
            x += this.lineSetX[i];
            y += this.lineSetY[i];
        }
        ctx.lineTo(x, y);

        if(this.onoff == 1) {
            ctx.fill();
        } else {
            ctx.stroke();
        }

        ctx.closePath();
        
        ctx.restore();
    }
}