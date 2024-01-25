import { TimeSch } from "../schedule/time.js";

export class WhatIDo {
    constructor(n) {
        this.color = n;
        this.time = new TimeSch();
    }

    resize(x, y, width, height, unit, numPosX, numPosY) {
        this.posX = x;
        this.posY = y;
        this.width = width;
        this.height = height;

        this.unit = unit;

        this.numPosX = numPosX;
        this.numPosY = numPosY;
    }

    animate(ctx) {
        ctx.save();
        this.fontsize = this.unit*1.2;
        ctx.font = `${this.fontsize}px D2 coding`;
        ctx.fillStyle = this.color.fillColor[this.color.fillNum];
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        const time = new Date();
        ctx.fillText(this.time.sch[time.getHours() - 7][time.getDay() - 1], this.posX + this.width - this.unit * 2, this.numPosY - this.unit * 5);
        ctx.restore();
    }
}
