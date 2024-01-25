import { SideButton } from "../sideButton/sideButton.js";
import { TimeSch } from "./time.js";

class App{
    constructor() {
        this.time = new TimeSch();
        this.sch = this.time.sch;
        this.sch_color = this.time.sch_color;

        this.sideButton = new SideButton("../index.html", "../digitalClock_animation/clock.html");

        this.schedule = document.querySelector('#scheduleBody');
        
        for(let i=0; i<=18; i++) {
            this.tr = document.createElement('tr');
            this.td = document.createElement('td');
            this.td.textContent = (i+7<10 ? '0' : '') + String(i+7 >= 24 ? i-17 : i+7) + ':00';
            this.tr.appendChild(this.td);
            for(let j=0; j<7; j++) {
                var td = document.createElement('td');
                td.innerHTML = this.sch[i][j];
                td.classList = this.sch_color[this.sch[i][j]];
                this.tr.appendChild(td);
            }
            this.schedule.appendChild(this.tr);
        }
    }

    left() {
        window.location.href = "../index.html";
    }

    right() {
        window.location.href = "../digitalClock_animation/clock.html";
    }
}

window.onload = () => {
    new App();
}