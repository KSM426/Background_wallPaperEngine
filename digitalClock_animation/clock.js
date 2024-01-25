import { Number } from "./number.js";
import { Dots } from "./dots.js";
import { DateDraw } from "./date.js";
import { WhatIDo } from "./whatIDo.js";

export class Clock {
    constructor(n) {
        this.color = n;
        console.log("clock", this.color);
        this.num = [];
        this.prev = [];
        this.numbers = [];

        this.whatIDo = new WhatIDo(this.color);
        this.date = new DateDraw(this.color);
    }
    
    resize(x, y, width, height) {
        this.posX = x;
        this.posY = y;
        this.width = width;
        this.height = height;
        
        
        this.unit = this.width / 25;
        this.length = this.unit * 2;
        // 2 4 1 4 1.5 1.5 4 1 4 2 => 25
        //   4   9     16  21
        
        this.numPosX = [4, 9, 16, 21];
        this.numPosY = this.posY + this.height / 2;
        
        this.checkTime();
        
        for(let i=0; i<4; i++){
            this.numbers[i] = new Number(this.num[i], this.posX + this.numPosX[i] * this.unit, this.numPosY, this.length, this.color);
        }

        this.dots = new Dots(this.posX + 12.5 * this.unit, this.numPosY, this.unit/2.5, this.color);
        this.date.resize(this.posX, this.posY, this.width, this.height, this.unit, this.numPosX, this.numPosY);
        this.whatIDo.resize(this.posX, this.posY, this.width, this.height, this.unit, this.numPosX, this.numPosY);
    }
    
    animate(ctx) {
        this.checkTime();
        
        for(let i=0; i<4; i++){
            if(this.prev[3] != this.num[3]) {
                this.numbers[i].checkTime(this.num[i]);
            }
            this.numbers[i].animate(ctx);
        }
        
        this.dots.animate(ctx);
        this.date.animate(ctx);
        this.whatIDo.animate(ctx);
    }

    checkTime(){
        this.prev = [...this.num];
        const time = new Date();
        this.num[0] = time.getHours() / 10 | 0;
        this.num[1] = time.getHours() % 10;
        this.num[2] = time.getMinutes() / 10 | 0;
        this.num[3] = time.getMinutes() % 10;
    }
}