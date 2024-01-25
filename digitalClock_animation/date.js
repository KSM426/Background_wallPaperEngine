export class DateDraw {
    constructor(n) {
        this.color = n;
        this.monthNames = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
        const time = new Date();
        ctx.fillText(
            this.dayNames[time.getDay()].substring(0, 3).toUpperCase() + ` ` + 
            time.getDate() + ` ` + 
            this.monthNames[time.getMonth()].substring(0, 3).toUpperCase(), 
            this.posX + this.unit * 5 / 3, this.numPosY - this.unit * 5);
        ctx.fillText(time.getFullYear(), this.posX + this.unit * 5 / 3, this.numPosY - this.unit * 5 - this.fontsize);
        ctx.restore();
    }
}